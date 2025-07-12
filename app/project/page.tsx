
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from '../../components/ui/tracing-beam';
import Image from "next/image";
import { projects } from "./projects-data"; 

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-8">
      <div className="max-w-7xl mx-auto antialiased pt-4 relative">
        <h1 className="text-4xl text-center mt-6 py-4">Projects</h1>
        {projects.map((item, index) => (
          <div key={`content-${index}`} className="mb-24">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>
            <p className={twMerge("calsans", "text-xl mb-4")}>
              {item.title}
            </p>
            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  width={1000}
                  height={1000}
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

export default TracingBeamDemo;