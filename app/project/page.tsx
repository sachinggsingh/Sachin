import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from '../../components/ui/tracing-beam';
import Image from "next/image";
import { projects } from "./projects-data";
import { FaGithub } from "react-icons/fa";

export default function Page() {
  return (
    <TracingBeam className="px-8">
      <div className="max-w-7xl mx-auto antialiased pt-4 relative">
        {projects.map((item, index) => (
          <div key={`content-${index}`} className="mb-24">
            <div className="flex items-center justify-between mb-4">
              <h2 className="bg-black text-white rounded-full text-2xl w-fit px-4 py-1">
                {item.badge}
              </h2>
              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaGithub className="text-3xl" />
                  <span className="text-lg mt-2">View Code</span>
                </a>
              )}
            </div>
            <p className={twMerge("calsans", "text-3xl mb-4")}>
              {item.title}
            </p>
            <div className="text-lg prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="project thumbnail"
                  width={700}
                  height={700}
                  className="rounded-lg mb-6 object-cover"
                />
              )}
              {item.description}
              
              {/* Tech Stack */}
              {item.techStack && (
                <div className="mt-6">
                  <h4 className="text-2xl font-semibold mb-3 text-gray-700 dark:text-gray-300">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {item.techStack.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg text-sm"
                        title={tech.name}
                      >
                        <span className="text-lg">{tech.icon}</span>
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
    </TracingBeam>
  );
}
