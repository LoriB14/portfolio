import { useEffect, useState } from 'react';
import { still } from '../lib/motion';

/** A short counted intro; it wipes up to reveal the hero. */
export default function Preloader({ onDone }: { onDone: () => void }) {
  const [n, setN] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (still()) {
      onDone();
      setDone(true);
      return;
    }
    const start = performance.now();
    const dur = 1500;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(eased * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else {
        setDone(true);
        onDone();
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <div className={`loader${done ? ' done' : ''}`} aria-hidden="true">
      <div className="mono">Lori Battouk · Portfolio 2026</div>
      <div>
        <div className="count">
          {String(n).padStart(3, '0')}
          <span>.</span>
        </div>
        <div className="bar">
          <i style={{ transform: `scaleX(${n / 100})` }} />
        </div>
      </div>
    </div>
  );
}
