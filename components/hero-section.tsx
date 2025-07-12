'use client';
import {TextGenerateEffectDemo1, TextGenerateEffectDemo2} from '@/components/contents'
import React from "react";

export function HeroSection() {

  return (
    <section className="flex min-h-[72vh] flex-col items-center justify-center px-2 sm:px-0">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 mt-6">Sachin Singh</h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10">Backend Developer</p>
        <TextGenerateEffectDemo1/>
        <TextGenerateEffectDemo2/>
      </div>
    </section>
  );
}
