"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

export function AboutCard() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-12 px-4">
      <div className="text-neutral-700 dark:text-neutral-200 text-xl md:text-2xl max-w-2xl text-center leading-relaxed mb-2">
      Proficient with the Tech stack {' '} 
        <LinkPreview
          url="https://nodejs.org"
          className="font-semibold text-green-600 dark:text-green-400 hover:underline"
        >
          Node.js
        </LinkPreview>
        ,{' '}
        <LinkPreview
          url="https://expressjs.com"
          className="font-semibold text-gray-700 dark:text-violet-400 hover:underline"
        >
          Express.js
        </LinkPreview>
        , {' '}
        <LinkPreview
          url="https://www.mongodb.com"
          className="font-semibold text-green-700 dark:text-green-300 hover:underline"
        >
          MongoDB
        </LinkPreview>
        , and{' '}
        
        <LinkPreview
          url="https://www.mysql.com"
          className="font-semibold text-red-700 dark:text-yellow-300 hover:underline"
        >
          MySQL
        </LinkPreview>
        .<br />
        Currently exploring{' '}
        <LinkPreview
          url="https://www.docker.com"
          className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
        >
          Docker
        </LinkPreview>{' '}
        and{' '}
        <LinkPreview
          url="https://go.dev"
          className="font-semibold text-gray-600 dark:text-gray-300 hover:underline"
        >
          GOLANG
        </LinkPreview>
        <br />
        Passionate about building{' '}
        <span className="font-semibold text-purple-600 dark:text-red-400">
          scalable, resilient systems
        </span>{' '}
        that perform under pressure.
      </div>
    </div>
  );
}
