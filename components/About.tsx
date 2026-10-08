
import React from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const About: React.FC = () => {
  return (
    <div className="w-full">
      <SectionHeading index="01" title="About" />

      <Reveal direction="up" className="space-y-5 text-base sm:text-lg text-white/60 leading-relaxed max-w-[60ch]">
        <p>
          I'm a third-year Computer Science student at York University, currently on co-op at Mondelēz International.
          I work on the IL6S team developing new software that changes the way the company manages and stores its operational data,
          as well as digitalization projects that modernize how the business tracks and reports on its operations.
        </p>
        <p>
          Outside of my co-op, I build full-stack products as a freelance developer and have led projects that shipped to real users,
          including 6IXASSIST, an AI tool that won first place at ElleHacks 2025.
        </p>
      </Reveal>
    </div>
  );
};

export default About;
