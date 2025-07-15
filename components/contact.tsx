"use client";

import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import axios from 'axios';
import { toast } from "sonner"

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "What's your name?",
    "Let's Connect !!!",
    "How can I help you?",
    "Your Email Please!",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.querySelector("input");
    const value = input?.value || "";

    const data = {
      name: "Contact Form User",
      email: "noreply@example.com",
      message: value,
    };

    try {
      const res = await axios.post("/api/contact", data);
      if (res.status === 200) {
        toast("Your Mesage Sent.")
        form.reset();
      } else {
        alert("Failed to send message");
      }
    } catch (err) {
      console.error("Error sending message:", err);
      toast.message("Sorry, I think it's not working.", {
        description: "Please try again later or contact us via social media."
      })
    }
  };

  return (
    <div className="flex flex-col items-center px-4 mb-16">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
        className="shadow-xl/30 dark:shadow-none"
      />
    </div>
  );
}
