
import React from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { projects } from "./projects-data";
import { FaGithub } from "react-icons/fa";

export default function Page() {
  return (
    <div className="px-4 sm:px-2 md:px-8 sm:mx-auto">
      <div className="max-w-7xl mx-auto antialiased pt-6 sm:pt-8 relative">
        {projects.map((item, index) => (
          <div key={`content-${index}`} className="mb-14 sm:mb-20 sm:justify-center md:mb-28">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3 sm:gap-0">
              <h2 className="bg-black dark:bg-white dark:text-black text-white rounded-full text-sm sm:text-lg md:text-xl w-fit px-4 py-1">
                {item.badge}
              </h2>
              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 sm:gap-2 mt-1 sm:mt-0 text-sm sm:text-base"
                >
                  <FaGithub className="text-lg sm:text-2xl" />
                  <span className="mt-0.5 sm:mt-1">View Code</span>
                </a>
              )}
            </div>
            <p className={twMerge("calsans", "text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4")}> 
              {item.title}
            </p>
            <div className="text-sm sm:text-base prose prose-sm dark:prose-invert max-w-none">
              {item?.image && (
                <div className="w-full aspect-[16/9] relative mb-4 sm:mb-6">
                  <Image
                    src={item.image}
                    alt="project thumbnail"
                    fill
                    className="rounded-lg object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 700px"
                  />
                </div>
              )}
              {item.description}
              {/* Tech Stack */}
              {item.techStack && (
                <div className="mt-6">
                  <h4 className="text-base sm:text-xl font-semibold mb-3 text-gray-700 dark:text-gray-300">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {item.techStack.map((tech, techIndex) => (
                      <div
                        key={`${index}-${tech.name}-${techIndex}`}
                        className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-lg text-xs sm:text-sm"
                        title={tech.name}
                      >
                        <span className="text-base ">{tech.icon}</span>
                        <span className="text-gray-700 dark:text-gray-300">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
