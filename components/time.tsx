"use client";
import { useState, useEffect } from "react";
import { BsClockHistory } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import React from "react";
import { Button } from "./ui/moving-border";

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

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-IN", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  };

  const city = "Vadodara";
  const stateCode = "Guj";

  return (
    <div className="flex items-center gap-5 text-sm group">
      {/* Location Section */}
      <div className="flex items-center gap-2 px-3 py-1.5  rounded-lg transition-all duration-300 ">
        <CiLocationOn className="w-7 h-7  transition-transform duration-300 hover:scale-180" />
        <div className="flex flex-col">
          <span className="font-medium text-gray-800 dark:text-gray-200 leading-tight">
            {city}
          </span>
          <span className="text-xm text-gray-900 dark:text-gray-100 leading-tight">
            {stateCode}
          </span>
        </div>
      </div>

      {/* Time Section */}
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-300 ">
        <div className="relative">
          <BsClockHistory className="w-5 h-5  transition-transform duration-300 hover:rotate-35" />
          {/* <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div> */}
        </div>
        <div className="flex flex-col">
          <span className="font-mono font-bold text-gray-800 dark:text-gray-200 leading-tight text-lg tracking-wider">
            {formatTime(time)}
          </span>
          <span className="text-xs text-gray-900 dark:text-gray-100 leading-tight">
            {formatDate(time)}
          </span>
        </div>
      </div>
    </div>
  );
}

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
