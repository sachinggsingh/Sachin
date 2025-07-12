"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words1 = `I'm a backend developer working primarily with Node.js, Express.js, and MongoDB. I've also worked with PostgreSQL, Redis, and tools like Docker to build APIs and backend systems that are reliable and efficient.`

const words2 = `As a 3rd-year B.Tech student from Drs. Kiran and Pallavi Global University, I'm focused on improving my skills through real-world projects. I'm open to more backend-focused work that helps me grow with each project.`;

export function TextGenerateEffectDemo1({ onComplete }: { onComplete?: () => void }) {
  return (
    <div className="flex justify-center text-center">
      <TextGenerateEffect words={words1} onComplete={onComplete} />
    </div>
  );
}

export function TextGenerateEffectDemo2(){
  return(
    <div className="flex justify-center text-center">
      <TextGenerateEffect words={words2} />
    </div>
  )
}


