"use client";

import Typewriter from "typewriter-effect";

export default function TypeWriterEffect() {
  return (
    <Typewriter
      options={{
        strings: [
          "I'm a Web developer",
          "Frontend developer",
          "Full Stack developer",
          "Freelancer",
        ],
        autoStart: true,
        loop: true,
      }}
    />
  );
}
