import React from "react";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight  mb-4">
              My Projects
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              My projects I&apos;ve worked on, showcasing my skills in Full-Stack Development and  Backend Develpoment.
            </p>
          </div>

          {/* Main Content */}
          <main className="relative ">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}