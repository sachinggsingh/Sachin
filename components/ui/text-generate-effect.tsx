"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  staggerDelay = 0.2, // new prop
  onComplete,
  disableAnimation = false, // new prop
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  staggerDelay?: number; // new prop
  onComplete?: () => void;
  disableAnimation?: boolean; // new prop
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  
  useEffect(() => {
    if (disableAnimation) {
      animate(
        "span",
        {
          opacity: 1,
          filter: "blur(0px)",
        },
        { duration: 0 }
      ).then(() => {
        if (onComplete) onComplete();
      });
      return;
    }
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(staggerDelay), // use the new prop
      }
    ).then(() => {
      // Call onComplete when animation finishes
      if (onComplete) {
        onComplete();
      }
    });
  }, [scope.current, staggerDelay, duration, filter, animate, onComplete, disableAnimation]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-base sm:text-lg md:text-xl leading-snug tracking-normal sm:tracking-wide md:tracking-widest break-words whitespace-pre-line">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
