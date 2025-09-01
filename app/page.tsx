"use client";

import { AboutCard } from "@/components/aboutcard";
import { MovingBorderDemo } from "@/components/time";
import { HeroSection } from "@/components/hero-section";
import { Interest } from "@/components/interest";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { PlaceholdersAndVanishInputDemo } from "@/components/contact";

import ShareButton from "@/components/ui/share-button";
import { BsTwitterX } from "react-icons/bs";

export default function Home() {
  const shareLinks = [
    {
      icon: FaLinkedinIn,
      onClick: () =>
        window.open("https://www.linkedin.com/in/sachin-g-singh", "_blank"),
      label: "My LinkedIn",
    },
    {
      icon: CiMail,
      onClick: () => (window.location.href = "mailto:sachinggsingh@gmail.com"),
      label: "Mail Me",
    },
    {
      icon: FaGithub,
      onClick: () => window.open("https://github.com/sachinggsingh", "_blank"),
      label: "My GitHub",
    },
    {
      icon: BsTwitterX,
      onClick: () => window.open("https://x.com/sachingsingh77", "_blank"),
      label: "My X (Twitter)",
    },
  ];

  return (
    <div className="py-8">
      <div className="fixed top-4 left-16 z-50 hidden lg:block">
        <MovingBorderDemo />
      </div>

      <section className="flex flex-col min-h-[70vh] sm:min-h-[68vh] px-4 justify-center items-center">
        <HeroSection />
        <PlaceholdersAndVanishInputDemo />
      </section>

      <section className="pt-2">
        <AboutCard />
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <Interest />
        </div>
      </section>

      <section className="py-30 px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            I&apos;m always open to new opportunities and collaborations. Feel
            free to reach out!
          </p>

          {/* Social Share / Contact Button */}
          <div className="mt-6">
            <ShareButton links={shareLinks} className="text-lg font-medium">
              Connect me
            </ShareButton>
          </div>
        </div>
      </section>
    </div>
  );
}
