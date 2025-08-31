"use client";
import { TextAnimate } from "@/components/magicui/text-animate";

export function TextGenerateEffectDemo1() {
  return (
    <TextAnimate
      className="text-xl w-[600px] mx-auto px-4"
      animation="blurIn"
      as="h1"
      by="word"
      once
      duration={10}
      startOnView={false}
    >
      {"I'm a backend developer working primarily with Node.js, Express.js, and MongoDB. I've also worked with PostgreSQL, Redis, and tools like Docker to build Rest-APIs and backend systems that are reliable and efficient. As a 3rd-year B.Tech student from Drs. Kiran and Pallavi Global University, I'm focused on improving my skills through real-world projects. I'm open to more backend-focused work that helps me grow with each project."}
    </TextAnimate>
  );
}

            // <div className=""></div>