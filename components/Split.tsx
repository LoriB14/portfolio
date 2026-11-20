import type { CSSProperties } from 'react';

/** Splits text into masked letters (or words) that rise when an ancestor gets .in */
export default function Split({ text, by = 'char', delay = 0, step = 45 }: { text: string; by?: 'char' | 'word'; delay?: number; step?: number }) {
  const parts = by === 'char' ? text.split('') : text.split(' ');
  return (
    <span aria-label={text} style={{ display: 'inline-flex', flexWrap: 'wrap' }}>
      {parts.map((p, i) => (
        <span className="rise" key={i} aria-hidden="true" style={{ display: 'inline-block' }}>
          <span style={{ ['--i' as string]: 0, ['--d' as string]: `${delay + i * step}ms` } as CSSProperties}>
            {p === ' ' ? ' ' : p}
            {by === 'word' && i < parts.length - 1 ? ' ' : ''}
          </span>
        </span>
      ))}
    </span>
  );
}
