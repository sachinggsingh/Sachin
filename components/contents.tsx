"use client";
import { useEffect, useState } from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words1 = `I'm a backend developer working primarily with Node.js, Express.js, and MongoDB. I've also worked with PostgreSQL, Redis, and tools like Docker to build APIs and backend systems that are reliable and efficient.`

const word2 = ` As a 3rd-year B.Tech student from Drs. Kiran and Pallavi Global University, I'm focused on improving my skills through real-world projects. I'm open to more backend-focused work that helps me grow with each project.`;

export function TextGenerateEffectDemo1() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex justify-center text-center">
      {isMobile ? (
        <div className="text-black dark:text-white font-bold mt-4 text-base sm:text-lg md:text-xl leading-snug tracking-normal sm:tracking-wide md:tracking-widest break-words whitespace-pre-line">
          {words1}
        </div>
      ) : (
        <TextGenerateEffect
          words={words1}
          className="text-black dark:text-white"
        />
      )}
    </div>
  );
}
export function TextGenerateEffectDemo2() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex justify-center text-center">
      {isMobile ? (
        <div className="text-black dark:text-white font-bold mt-4 text-base sm:text-lg md:text-xl leading-snug tracking-normal sm:tracking-wide md:tracking-widest break-words whitespace-pre-line">
          {words1}
        </div>
      ) : (
        <TextGenerateEffect
          words={word2}
          className="text-black dark:text-white"
        />
      )}
    </div>
  );
}


