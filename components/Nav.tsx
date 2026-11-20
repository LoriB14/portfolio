import { useState } from 'react';
import { lockScroll, scrollTo } from '../lib/motion';

const LINKS = [
  ['work', 'Work'],
  ['about', 'About'],
  ['experience', 'Experience'],
  ['contact', 'Contact'],
] as const;

export default function Nav({ onResume }: { onResume: () => void }) {
  const [open, setOpen] = useState(false);
  const go = (id: string) => {
    setOpen(false);
    lockScroll(false);
    scrollTo(id);
  };
  const toggle = () => {
    lockScroll(!open);
    setOpen(!open);
  };

  return (
    <>
      <header className="nav">
        <a className="brand" href="#top" onClick={(e) => (e.preventDefault(), go('top'))}>
          Lori Battouk
        </a>
        <nav className="links mono" aria-label="Main">
          {LINKS.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={(e) => (e.preventDefault(), go(id))}>
              {label}
            </a>
          ))}
          <button type="button" onClick={onResume}>
            Resume
          </button>
        </nav>
        <button type="button" className="menu-btn mono" aria-expanded={open} onClick={toggle}>
          {open ? 'Close' : 'Menu'}
        </button>
      </header>
      <div className={`menu${open ? ' open' : ''}`} aria-hidden={!open}>
        {LINKS.map(([id, label]) => (
          <a key={id} href={`#${id}`} tabIndex={open ? 0 : -1} onClick={(e) => (e.preventDefault(), go(id))}>
            {label}
          </a>
        ))}
        <button type="button" tabIndex={open ? 0 : -1} onClick={() => (toggle(), onResume())}>
          Resume
        </button>
      </div>
    </>
  );
}
