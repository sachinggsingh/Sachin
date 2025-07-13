'use client';
import { TextAnimate } from "@/components/magicui/text-animate";

export function TextGenerateEffectDemo1() {
  return (
    <TextAnimate 
      animation="slideUp" 
      by="word"
      className="text-sm sm:text-base md:text-lg lg:text-xl text-center max-w-4xl mx-auto px-4 leading-relaxed"
      segmentClassName="inline-block"
      startOnView={true}
      once={true}
    >
      I&apos;m a backend developer working primarily with Node.js, Express.js, and MongoDB. I&apos;ve also worked with PostgreSQL, Redis, and tools like Docker to build APIs and backend systems that are reliable and efficient. As a 3rd-year B.Tech student from Drs. Kiran and Pallavi Global University, I&apos;m focused on improving my skills through real-world projects. I&apos;m open to more backend-focused work that helps me grow with each project.
    </TextAnimate>
  );
}
