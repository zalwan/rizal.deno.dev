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
      className="cursor-pointer rounded-full"
      aria-label="Toggle theme"
    >
      <Sun className="absolute h-5 w-5 scale-100 rotate-0 duration-500 dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-5 w-5 scale-0 rotate-90 duration-500 dark:scale-100 dark:rotate-0" />
      <Monitor className="absolute h-5 w-5 scale-0 duration-500 dark:scale-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
