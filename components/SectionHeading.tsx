
import React from 'react';
import Reveal from './Reveal';

interface SectionHeadingProps {
  index: string;
  title: string;
  note?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ index, title, note }) => {
  return (
    <Reveal direction="left" className="flex items-center gap-4 sm:gap-5 mb-12 sm:mb-16">
      <span className="font-mono text-xs sm:text-sm text-fuchsia-400/50 tabular-nums">{index}</span>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium tracking-tight text-white">
        {title}
      </h2>
      <div className="flex-1 h-px bg-white/10" />
      {note && <span className="hidden lg:block text-xs text-white/30">{note}</span>}
    </Reveal>
  );
};

export default SectionHeading;
