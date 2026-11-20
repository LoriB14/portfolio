import { useEffect, useRef, useState } from 'react';

const VERT = `attribute vec2 p; void main(){ gl_Position = vec4(p, 0.0, 1.0); }`;

// Domain-warped fbm in ink / orchid / cream, pulled toward the cursor, with film grain.
const FRAG = `
precision highp float;
uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_scroll;

vec3 mod289(vec3 x){ return x - floor(x * (1.0/289.0)) * 289.0; }
vec2 mod289(vec2 x){ return x - floor(x * (1.0/289.0)) * 289.0; }
vec3 permute(vec3 x){ return mod289(((x*34.0)+1.0)*x); }
float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m; m = m*m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
  vec3 g; g.x = a0.x * x0.x + h.x * x0.y; g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
float fbm(vec2 p){
  float f = 0.0, a = 0.5;
  for (int i = 0; i < 3; i++){ f += a * snoise(p); p = p * 1.9 + vec2(1.7, 9.2); a *= 0.45; }
  return f;
}
float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

void main(){
  vec2 uv = gl_FragCoord.xy / u_res;
  vec2 p = (gl_FragCoord.xy - 0.5 * u_res) / u_res.y;
  vec2 m = (u_mouse - 0.5 * u_res) / u_res.y;
  float t = u_time * 0.06;

  // the cursor bends the field
  vec2 d = p - m;
  p -= d * 0.5 * exp(-dot(d, d) * 2.0);
  p.y += u_scroll * 0.6;

  vec2 q = vec2(fbm(p * 0.45 + t), fbm(p * 0.45 + vec2(5.2, 1.3) - t));
  vec2 r = vec2(fbm(p * 0.55 + 1.4 * q + vec2(1.7, 9.2) + t * 1.3), fbm(p * 0.55 + 1.4 * q + vec2(8.3, 2.8) - t));
  float f = fbm(p * 0.5 + 1.3 * r) * 1.25;

  vec3 ink = vec3(0.0196);
  vec3 deep = vec3(0.557, 0.227, 0.545);
  vec3 orchid = vec3(0.855, 0.439, 0.839);
  vec3 cream = vec3(0.925, 0.902, 0.863);

  vec3 col = mix(ink, deep, smoothstep(-0.5, 0.25, f));
  col = mix(col, orchid, smoothstep(-0.05, 0.55, f + q.x * 0.4));
  col = mix(col, cream, smoothstep(0.35, 0.85, f + r.y * 0.5) * 0.9);
  // keep the bottom (where the name sits) and the edges deep
  col = mix(col, ink, smoothstep(0.55, 0.0, uv.y) * 0.55);
  col *= 1.0 - 0.45 * pow(length(uv - 0.5) * 1.25, 2.2);
  col += (hash(gl_FragCoord.xy + fract(u_time) * 100.0) - 0.5) * 0.06;
  gl_FragColor = vec4(col, 1.0);
}`;

export default function Shader() {
  const ref = useRef<HTMLCanvasElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const canvas = ref.current!;
    const gl = canvas.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'high-performance' });
    if (!gl) {
      setFailed(true);
      return;
    }
    const sh = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, sh(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      setFailed(true);
      return;
    }
    gl.useProgram(prog);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'p');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const uRes = gl.getUniformLocation(prog, 'u_res');
    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');
    const uScroll = gl.getUniformLocation(prog, 'u_scroll');

    // Soft field: render under native resolution and let the browser smooth it
    const scale = 0.55;
    const resize = () => {
      const w = Math.max(1, Math.floor(canvas.clientWidth * scale));
      const h = Math.max(1, Math.floor(canvas.clientHeight * scale));
      canvas.width = w;
      canvas.height = h;
      gl.viewport(0, 0, w, h);
      gl.uniform2f(uRes, w, h);
    };
    resize();
    window.addEventListener('resize', resize);

    const target = { x: canvas.width * 0.7, y: canvas.height * 0.65 };
    const mouse = { ...target };
    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      target.x = (e.clientX - r.left) * scale;
      target.y = (r.height - (e.clientY - r.top)) * scale;
    };
    window.addEventListener('pointermove', onMove, { passive: true });

    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches || document.documentElement.classList.contains('static');
    let visible = true;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(canvas);

    let raf = 0;
    const start = performance.now();
    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      if (!visible || document.hidden) return;
      mouse.x += (target.x - mouse.x) * 0.06;
      mouse.y += (target.y - mouse.y) * 0.06;
      gl.uniform1f(uTime, still ? 12 : (now - start) / 1000 + 12);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.uniform1f(uScroll, Math.min(1, window.scrollY / window.innerHeight));
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };
    if (still) {
      gl.uniform1f(uTime, 12);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.uniform1f(uScroll, 0);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    } else raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return failed ? <div className="fallback" aria-hidden="true" /> : <canvas ref={ref} aria-hidden="true" />;
}
