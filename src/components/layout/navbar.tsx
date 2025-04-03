"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import data from "@/data";
import { ThemeToggle } from "../theme-toggle";

export default function Navbar() {
  const pathname = usePathname();
  const { navItems } = data.navbar;

  return (
    <nav className="bg-background/95 supports-[backdrop-filter]:bg-background/60 smooth-transition w-full border-b backdrop-blur">
      <div className="wrapper container flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          <img
            className="dark:invert"
            src="/logo.svg"
            alt="rizal suryawan logo"
            width={50}
            height={50}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden gap-6 md:flex md:items-center">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Link
                className={`transition-colors ${
                  isActive
                    ? "text-amber-600"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                key={index}
                href={item.href}
              >
                {item.title}
              </Link>
            );
          })}
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
