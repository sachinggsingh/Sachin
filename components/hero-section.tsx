'use client';
import { useEffect, useState } from "react";
import { TextGenerateEffectDemo1, TextGenerateEffectDemo2 } from "./contents";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import React from "react";

const mobileCombinedText = `I'm a backend developer working primarily with Node.js, Express.js, and MongoDB. I've also worked with PostgreSQL, Redis, and tools like Docker to build APIs and backend systems that are reliable and efficient. As a 3rd-year B.Tech student from Drs. Kiran and Pallavi Global University, I'm focused on improving my skills through real-world projects. I'm open to more backend-focused work that helps me grow with each project.`;

export function HeroSection() {
  const [showSecond, setShowSecond] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="flex min-h-[72vh] flex-col items-center justify-center px-2 sm:px-0">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 mt-6">Sachin Singh</h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10">Backend Developer</p>
        {isMobile ? (
          <TextGenerateEffect
            words={mobileCombinedText}
            duration={0.2}
            staggerDelay={0.05}
            disableAnimation={isMobile && window.innerWidth < 400}
          />
        ) : (
          <>
            <TextGenerateEffectDemo1 onComplete={() => setShowSecond(true)} />
            <br />
            {showSecond && <TextGenerateEffectDemo2 />}
          </>
        )}
      </div>
    </section>
  );
}
