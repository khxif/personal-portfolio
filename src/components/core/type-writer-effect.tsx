'use client';

import Typewriter from 'typewriter-effect';

export function TypeWriterEffect() {
  return (
    <Typewriter
      options={{
        strings: ["I'm a Web Developer", 'FullStack Developer', 'Freelancer'],
        autoStart: true,
        loop: true,
      }}
    />
  );
}
