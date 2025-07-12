"use client";
import { useState, useEffect } from "react";
import { BsClockHistory } from "react-icons/bs";

import { CiLocationOn } from "react-icons/ci";

import React from "react";
import { Button } from "./ui/moving-border";

// TimeComponent
export function TimeComponent() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-IN", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const stateCode = "Guj";
  const country= "India";

  return (
    <div className="flex flex-col items-center space-y-2 text-gray-400 text-sm">
      <div className="flex items-center gap-2">
        <CiLocationOn className="w-6 h-6" />
        <span> {stateCode},{country}</span>
      </div>
      <div className="flex items-center gap-2">
        <BsClockHistory className="w-6 h-4" />
        <span>{formatTime(time)}</span>
      </div>
    </div>
  );
}

// MovingBorderDemo
export function MovingBorderDemo() {
  return (
    <Button
      borderRadius="1.75rem"
      className="bg-#0a0a0a dark:bg-#0a0a0a text-black dark:text-white border-neutral-200 dark:border-slate-800 "
    >
      <TimeComponent />
    </Button>
  );
}
