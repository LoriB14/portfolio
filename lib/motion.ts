import Lenis from 'lenis';

export const still = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches || document.documentElement.classList.contains('static');

export let lenis: Lenis | null = null;

export function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { duration: 1.4 });
  else el.scrollIntoView({ behavior: still() ? 'auto' : 'smooth' });
}

export function lockScroll(lock: boolean) {
  if (lenis) (lock ? lenis.stop() : lenis.start());
  document.documentElement.style.overflow = lock ? 'hidden' : '';
}

/** Smooth scroll, reveal-on-enter and scroll-linked CSS variables. */
export function startMotion(): () => void {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))),
    { rootMargin: '0px 0px -10% 0px' },
  );
  const watch = () => document.querySelectorAll('[data-reveal]:not(.in)').forEach((el) => io.observe(el));
  watch();
  const mo = new MutationObserver(watch);
  mo.observe(document.body, { childList: true, subtree: true });

  const about = () => document.querySelector<HTMLElement>('.about');
  let raf = 0;
  if (!still()) lenis = new Lenis({ duration: 1.2, anchors: true });
  const loop = (t: number) => {
    lenis?.raf(t);
    const nav = document.querySelector('.nav');
    if (nav) {
      const under = document.elementsFromPoint(window.innerWidth / 2, 40).find((el) => el.matches('section, footer'));
      const light = !!under && (under.classList.contains('cream') || under.classList.contains('orchid') || under.classList.contains('about'));
      nav.classList.toggle('on-light', light);
    }
    const a = about();
    if (a) {
      const r = a.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -r.top / (r.height - window.innerHeight)));
      a.style.setProperty('--p', p.toFixed(4));
    }
    raf = requestAnimationFrame(loop);
  };
  raf = requestAnimationFrame(loop);

  return () => {
    cancelAnimationFrame(raf);
    io.disconnect();
    mo.disconnect();
    lenis?.destroy();
    lenis = null;
  };
}
