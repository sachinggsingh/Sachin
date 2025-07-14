"use client";

import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "What's your name?",
    "Lets' Connect !!!",
    "How can I help you?",
    "Let's build something !",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="flex flex-col items-center px-4  mb-16">
    
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
        className="shadow-xl/30 dark:shadow-none"
      />
    </div>
  );
}
