"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className = "", iconOnly = false }: { className?: string; iconOnly?: boolean }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const getIcon = () => {
    return theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />;
  };

  const getLabel = () => {
    return theme === "light" ? "Switch to Dark" : "Switch to Light";
  };

  return (
    <button
      onClick={toggleTheme}
      className={
        iconOnly
          ? `flex items-center justify-center h-full w-full text-neutral-500 dark:text-neutral-300 ${className}`
          : `fixed top-4 right-4 z-50 p-3 rounded-full bg-white/90 dark:bg-[#0a0a0a] backdrop-blur-sm shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-200 hover:scale-110 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white ${className}`
      }
      aria-label={getLabel()}
      title={getLabel()}
    >
      {getIcon()}
    </button>
  );
} 