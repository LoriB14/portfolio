import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import type { Project } from '../types';
import { lockScroll } from '../lib/motion';
import Split from './Split';
import Arrow from './Arrow';

const isImage = (src: string) => !!src && !src.includes('placehold.co');
const pretty = (s: string) => s.charAt(0) + s.slice(1).toLowerCase();

function Cover({ p }: { p: Project }) {
  return isImage(p.image) ? (
    <img src={p.image} alt="" />
  ) : (
    <div className="tile">
      <span className="mono">{p.category}</span>
      <b>{p.title}</b>
    </div>
  );
}

function Panel({ p, onClose }: { p: Project; onClose: () => void }) {
  useEffect(() => {
    lockScroll(true);
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', esc);
    return () => {
      lockScroll(false);
      window.removeEventListener('keydown', esc);
    };
  }, [onClose]);

  return (
    <>
      <motion.div className="panel-bg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} />
      <motion.article
        className="panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="panel-h"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
        data-lenis-prevent
      >
        <div className="panel-head">
          <span className="mono">{p.category}</span>
          <button type="button" className="x-btn" onClick={onClose} aria-label="Close project" autoFocus>
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 2l12 12M14 2 2 14" stroke="currentColor" strokeWidth="1.6" /></svg>
          </button>
        </div>
        <h3 id="panel-h" className="display in">
          <Split text={p.title} by="word" delay={350} step={70} />
        </h3>
        <div className="meta">
          <div><span className="mono">Role</span><b>{p.role}</b></div>
          <div><span className="mono">Status</span><b>{p.status}</b></div>
          <div><span className="mono">Built with</span><b>{p.tags.slice(0, 3).join(', ')}</b></div>
        </div>
        <div className="cover"><Cover p={p} /></div>
        <div className="body">
          <div>
            <p>{p.detailedDescription ?? p.description}</p>
            {p.technicalDetails && <p>{p.technicalDetails}</p>}
          </div>
          {p.features && (
            <ul className="feat">
              {p.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
          )}
        </div>
        <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
        {(p.demoUrl || p.repoUrl) && (
          <div className="links">
            {p.demoUrl && <a className="pill ink" href={p.demoUrl} target="_blank" rel="noopener noreferrer">Visit live site <Arrow diag /></a>}
            {p.repoUrl && <a className="pill ink" href={p.repoUrl} target="_blank" rel="noopener noreferrer">View code <Arrow diag /></a>}
          </div>
        )}
      </motion.article>
    </>
  );
}

export default function Work() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section className="sec work" id="work" aria-labelledby="work-h">
      <div className="sec-top mono">
        <span>Selected work</span>
        <span>{String(PROJECTS.length).padStart(2, '0')} projects</span>
      </div>
      <h2 id="work-h" className="sec-title display" data-reveal style={{ marginBottom: 'clamp(24px, 3.4vw, 48px)' }}>
        <Split text="Things I've built" by="word" step={80} />
      </h2>
      <div className="work-list">
        {PROJECTS.map((p, i) => (
          <button
            key={p.id}
            type="button"
            className="work-row"
            onClick={() => setOpen(p)}
          >
            <span className="mono">{String(i + 1).padStart(2, '0')}</span>
            <span className="t">{p.title}</span>
            <span className="c">{pretty(p.category)}</span>
            <span className="r mono">{p.status}</span>
          </button>
        ))}
      </div>
      <AnimatePresence>{open && <Panel key={open.id} p={open} onClose={() => setOpen(null)} />}</AnimatePresence>
    </section>
  );
}
