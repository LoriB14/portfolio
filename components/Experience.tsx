import { useState } from 'react';
import Split from './Split';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: 1,
    title: 'Data & Digitalization Co-op (IL6S)',
    company: 'Mondelēz International',
    location: 'Toronto, ON',
    period: 'May 2026 to Present',
    bullets: [
      'Working with the Integrated Lean Six Sigma (IL6S) team on digitalization and process improvement initiatives within a manufacturing environment.',
      'Supporting the development of new systems/software and KPI digitalization to improve visibility into operations.',
      'Contributing to data analysis, reporting, and dashboard creation to support operational decision-making.',
    ],
  },
  {
    id: 2,
    title: 'Lead Web Developer',
    company: 'Freelance',
    location: 'Toronto, ON · Remote',
    period: 'Dec 2025 to Present',
    bullets: [
      "Designed and developed a full-stack e-commerce platform using Next.js and Supabase, launching the company's first digital storefront.",
      'Integrated Stripe API for secure payment processing, enhancing transaction workflows.',
      'Structured database schema and implemented authentication as the sole technical lead, ensuring robust security and user experience.',
    ],
  },
  {
    id: 3,
    title: 'Office Administrator',
    company: 'The Wellness Group Aurora',
    location: 'Aurora, Ontario',
    period: 'June 2022 to Present',
    bullets: [
      'Provided comprehensive administrative and technical support.',
      'Troubleshot software, printer, and network issues to ensure seamless operations.',
      'Led the transition from paper-based records to digital systems, coordinating with staff for effective implementation.',
    ],
  },
  {
    id: 4,
    title: 'QA Testing & UX/UI Analyst Intern',
    company: 'Yadag Technologies Inc.',
    location: 'Remote',
    period: 'May 2026 to Jul 2026',
    bullets: [
      'Designed and executed manual test cases across browsers and device sizes, identifying UI and functional defects.',
      'Ran UX/UI analysis sessions, flagging friction points and delivering structured feedback to product and dev teams.',
      'Documented bug reports with reproduction steps and severity ratings, tracking issues through resolution.',
      'Verified fixes against acceptance criteria, contributing to a measurable drop in regression defects.',
    ],
  },
  {
    id: 5,
    title: 'Product Research Consultant (Fintech)',
    company: 'Qupay Corporation',
    location: 'Remote',
    period: 'Jan 2026 to Mar 2026',
    bullets: [
      'Conducted structured interviews with small business owners across Canada to analyze payment workflows.',
      'Identified operational friction points to enhance user experience and streamline processes.',
      'Organized insights from interviews and shared key findings with founders for product improvement.',
    ],
  },
];

export default function Experience() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="sec cream" id="experience" aria-labelledby="xp-h">
      <div className="sec-top mono">
        <span>Experience</span>
        <span>{String(EXPERIENCES.length).padStart(2, '0')} roles</span>
      </div>
      <h2 id="xp-h" className="sec-title display" data-reveal style={{ marginBottom: 'clamp(24px, 3.4vw, 48px)' }}>
        <Split text="Where I've worked" by="word" step={80} />
      </h2>
      <div>
        {EXPERIENCES.map((x) => {
          const isOpen = open === x.id;
          return (
            <div key={x.id} className={`xp-row${isOpen ? ' open' : ''}`}>
              <button type="button" className="xp-btn" aria-expanded={isOpen} aria-controls={`xp-${x.id}`} onClick={() => setOpen(isOpen ? null : x.id)}>
                <span className="when mono">{x.period}</span>
                <span>
                  <span className="role">{x.title}</span>
                  <span className="co">{x.company}</span>
                </span>
                <span className="loc mono">{x.location}</span>
                <span className="pm" aria-hidden="true" />
              </button>
              <div className="xp-body" id={`xp-${x.id}`}>
                <div>
                  <ul>{x.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
