import { useCallback, useEffect, useState } from 'react';
import Preloader from './components/Preloader';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Split from './components/Split';
import { lockScroll, scrollTo, startMotion } from './lib/motion';

export default function App() {
  const [ready, setReady] = useState(false);
  const [resume, setResume] = useState(false);

  useEffect(() => startMotion(), []);
  useEffect(() => lockScroll(resume), [resume]);
  const done = useCallback(() => setReady(true), []);

  return (
    <>
      <Preloader onDone={done} />
      <div className="grain" aria-hidden="true" />
      <Nav onResume={() => setResume(true)} />
      <Resume isOpen={resume} onClose={() => setResume(false)} />
      <main>
        <Hero ready={ready} onResume={() => setResume(true)} />
        <About />
        <Work />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="foot">
        <div className="foot-row mono">
          <span>© 2026 Lori Battouk</span>
          <span>Toronto, Canada</span>
          <nav aria-label="Footer">
            <a href="https://github.com/LoriB14" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/loribattouk/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <button type="button" onClick={() => setResume(true)}>Resume</button>
            <button type="button" onClick={() => scrollTo('top')}>Back to top</button>
          </nav>
        </div>
        <div className="foot-word display" data-reveal aria-hidden="true">
          <Split text="LORI" step={70} />
        </div>
      </footer>
    </>
  );
}
