import type { CSSProperties } from 'react';
import Split from './Split';

const COURSEWORK = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming (Java)',
  'Web Development (HTML / CSS / JS / React)',
  'Discrete Mathematics',
  'Computer Organization',
  'Software Design & Architecture',
  'Introduction to Economics',
];
const CERT_SKILLS = ['SQL & Relational Databases', 'Data Cleaning & Transformation', 'Data Visualization & Dashboards', 'Introductory Python for Analysis'];
const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` }) as CSSProperties;

export default function Education() {
  return (
    <section className="sec cream" id="education" aria-labelledby="edu-h">
      <div className="sec-top mono">
        <span>Education</span>
        <span>02 entries</span>
      </div>
      <h2 id="edu-h" className="sec-title display" data-reveal style={{ marginBottom: 'clamp(24px, 3.4vw, 48px)' }}>
        <Split text="What I'm learning" by="word" step={80} />
      </h2>

      <article className="edu-item" data-reveal>
        <div className="edu-kind mono">
          <span>Degree</span>
          <b>BSc, Specialized Honours in Computer Science</b>
          <span>Lassonde School of Engineering</span>
        </div>
        <div>
          <h3 className="display">
            <Split text="York University" by="word" step={90} />
          </h3>
          <p className="sub fade" style={d(120)}>
            I learn by doing: coursework covers algorithms, systems and web development, and I apply all of it to real projects outside class.
          </p>
          <div className="chips fade" style={d(200)}>
            {COURSEWORK.map((c) => <span key={c}>{c}</span>)}
          </div>
        </div>
      </article>

      <article className="edu-item" data-reveal>
        <div className="edu-kind mono">
          <span>Professional certificate</span>
          <b>Google</b>
        </div>
        <div>
          <h3 className="display">
            <Split text="Data Analytics" by="word" step={90} />
          </h3>
          <p className="sub fade" style={d(120)}>
            Strengthening SQL, data cleaning and visualization skills to complement the data work I do at Mondelēz.
          </p>
          <div className="chips orchid fade" style={d(200)}>
            {CERT_SKILLS.map((c) => <span key={c}>{c}</span>)}
          </div>
        </div>
      </article>
    </section>
  );
}
