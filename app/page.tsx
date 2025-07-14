import { AboutCard } from "@/components/aboutcard";
import { MovingBorderDemo } from "@/components/time";
import { HeroSection } from "@/components/hero-section";
import { Interest } from "@/components/interest";
import { FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { PlaceholdersAndVanishInputDemo } from "@/components/contact";

export default function Home() {
  return (
    <div className="py-8">
      {/* Time Component - Fixed at top */}
      <div className="fixed top-4 left-16 z-50 hidden lg:block">
        <MovingBorderDemo />
      </div>

      {/* Hero Section */}
      <section className="flex flex-col min-h-[70vh] sm:min-h-[70vh]  px-4 justify-center items-center">
        <HeroSection />
        <PlaceholdersAndVanishInputDemo />
      </section>

      {/* About Section */}
      <section className="pt-2">
        <AboutCard />
      </section>

      {/* Interests Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <Interest />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold mb-6 tracking-tight">Get In Touch</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex gap-6 justify-center mt-2">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-neutral-700 dark:hover:text-white transition-colors text-2xl shadow-md"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="mailto:your.sachinggsingh@gmail.com"
              aria-label="Email"
              className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-neutral-700 dark:hover:text-white transition-colors text-2xl shadow-md"
            >
              <CiMail />
            </a>
            <a href="https://github.com/sachinggsingh" aria-label="Email" className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-neutral-700 dark:hover:text-white transition-colors text-2xl shadow-md"
            >
              <FaGithub/>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
