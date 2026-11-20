import { useLayoutEffect, useRef, type CSSProperties } from 'react';
import Shader from './Shader';
import Split from './Split';
import { scrollTo } from '../lib/motion';

function useFitWidth() {
  const ref = useRef<HTMLHeadingElement>(null);
  useLayoutEffect(() => {
    const el = ref.current!;
    const fit = () => {
      const inner = el.firstElementChild as HTMLElement;
      el.style.fontSize = '100px';
      const natural = inner.getBoundingClientRect().width;
      const cs = getComputedStyle(el.parentElement!);
      const avail = el.parentElement!.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      el.style.fontSize = `${Math.floor((100 * avail) / natural * 0.995)}px`;
    };
    fit();
    document.fonts?.ready.then(fit);
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);
  return ref;
}

export default function Hero({ ready, onResume }: { ready: boolean; onResume: () => void }) {
  const nameRef = useFitWidth();
  return (
    <section className={`hero${ready ? ' in' : ''}`} id="top" aria-label="Introduction">
      <Shader />
      <div className="hero-tags mono fade" style={{ ['--d' as string]: '500ms' } as CSSProperties}>
        <span>Software Engineer</span>
        <span>CS @ York University</span>
        <span>Data &amp; Digitalization Co-op, Mondelēz</span>
      </div>
      <div className="scroll-cue mono fade" style={{ ['--d' as string]: '700ms' } as CSSProperties}>
        Scroll <i />
      </div>
      <div className="hero-inner">
        <div className="hero-row">
          <p className="hero-intro fade" style={{ ['--d' as string]: '450ms' } as CSSProperties}>
            I build full-stack products that ship to real people, from AI tools to online stores.
          </p>
          <div className="hero-actions fade" style={{ ['--d' as string]: '560ms' } as CSSProperties}>
            <button type="button" className="pill solid" onClick={() => scrollTo('work')}>
              See my work
            </button>
            <button type="button" className="pill" onClick={onResume}>
              Resume
            </button>
          </div>
        </div>
        <h1 ref={nameRef} className="hero-name display">
          <Split text="LORI BATTOUK" delay={60} step={38} />
        </h1>
      </div>
    </section>
  );
}
