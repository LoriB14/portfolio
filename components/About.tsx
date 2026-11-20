import type { CSSProperties } from 'react';

const STATEMENT =
  "I'm a third-year Computer Science student at *York *University, on co-op at *Mondelēz *International building software that changes how the company manages its operational data. Outside of work I build full-stack products as a freelance developer, including *6ixAssist, an AI tool that won *first *place at ElleHacks.";

export default function About() {
  const words = STATEMENT.split(' ');
  return (
    <section className="about" id="about" aria-labelledby="about-h" style={{ ['--n' as string]: words.length } as CSSProperties}>
      <div className="sticky">
        <h2 id="about-h" className="sr">About</h2>
        <p className="statement">
          {words.map((w, i) => {
            const hl = w.startsWith('*');
            return (
              <span key={i} className={`w${hl ? ' hl' : ''}`} style={{ ['--i' as string]: i } as CSSProperties}>
                {hl ? w.slice(1) : w}{' '}
              </span>
            );
          })}
        </p>
        <div className="about-foot mono">
          <span>About</span>
          <span>Toronto, Canada</span>
        </div>
      </div>
    </section>
  );
}
