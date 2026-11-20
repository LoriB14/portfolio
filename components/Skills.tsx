import type { CSSProperties } from 'react';
import { SKILL_GROUPS } from '../constants';
import Split from './Split';

const ALL = SKILL_GROUPS.flatMap((g) => g.items);
const HALF = Math.ceil(ALL.length / 2);

function Row({ items, rev, dur }: { items: typeof ALL; rev?: boolean; dur: string }) {
  const list = (hidden?: boolean) => (
    <ul aria-hidden={hidden || undefined}>
      {items.map((s) => (
        <li key={s.name}>
          {s.icon && <img src={`https://cdn.simpleicons.org/${s.icon}/ece6dc`} alt="" loading="lazy" width={40} height={40} />}
          {s.name}
          <i aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className={`marquee${rev ? ' rev' : ''}`} style={{ ['--dur' as string]: dur } as CSSProperties}>
      <div className="marquee-track">
        {list()}
        {list(true)}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="sec" id="skills" aria-labelledby="skills-h" style={{ paddingInline: 0 }}>
      <div className="gx">
        <div className="sec-top mono">
          <span>Skills</span>
          <span>{ALL.length} tools</span>
        </div>
        <h2 id="skills-h" className="sec-title display" data-reveal style={{ marginBottom: 'clamp(24px, 3.4vw, 48px)' }}>
          <Split text="What I work with" by="word" step={80} />
        </h2>
      </div>
      <Row items={ALL.slice(0, HALF)} dur="60s" />
      <Row items={ALL.slice(HALF)} rev dur="54s" />
      <p className="sr">{ALL.map((s) => s.name).join(', ')}</p>
    </section>
  );
}
