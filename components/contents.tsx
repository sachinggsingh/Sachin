"use client";
import { TextAnimate } from "@/components/magicui/text-animate";
// import { DiNodejs } from "react-icons/di";


export function TextGenerateEffectDemo1() {
  return (
    <section>
      <TextAnimate
        className="text-lg sm:text-xl md:text-2xl mx-auto px-4"
        animation="blurIn"
        as="h1"
        by="word"
        once
        duration={2}
        startOnView={false}
      >
        {
          "I'm a backend developer working primarily with Node.js, Express.js, and MongoDB. I've also worked with MySQL, Redis, and tools like Docker to build Rest-APIs and backend systems that are reliable and efficient."
        }
      </TextAnimate>

      <TextAnimate
        className="text-lg sm:text-xl md:text-2xl mx-auto px-4 mt-4 "
        animation="blurIn"
        as="h1"
        by="word"
        once
        duration={2}
        delay={2} 
        startOnView={false}
      >
        {
          "I'm in 3rd-year of Computer Science Engineering focused on improving my skills through real-world projects. I'm open to more backend-focused work that helps me grow with each project."
        }
      </TextAnimate>
    </section>
  );
}

// <div className=""></div>
