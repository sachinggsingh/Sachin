'use client';
import { useState } from "react";
import { TextGenerateEffectDemo1, TextGenerateEffectDemo2 } from "./contents";
import React from "react";

export function HeroSection() {
  const [showSecond, setShowSecond] = useState(false);

  return (
    <section className="flex min-h-[72vh] flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 mt-6">Sachin Singh</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-10">Backend Developer</p>
        <TextGenerateEffectDemo1 onComplete={() => setShowSecond(true)} />
        <br />
        {showSecond && <TextGenerateEffectDemo2 />}
      </div>
    </section>
  );
}
