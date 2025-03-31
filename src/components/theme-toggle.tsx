"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun, Monitor } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full cursor-pointer"
      aria-label="Toggle theme"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] absolute rotate-0 scale-100 dark:-rotate-90 dark:scale-0 system:scale-0 transition-all duration-200" />
      <Moon className="h-[1.2rem] w-[1.2rem] absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100 system:scale-0 transition-all duration-200" />
      <Monitor className="h-[1.2rem] w-[1.2rem] absolute scale-0 system:scale-100 dark:scale-0 transition-all duration-200" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
