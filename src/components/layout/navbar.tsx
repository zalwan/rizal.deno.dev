"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import data from "@/data";
import { ThemeToggle } from "../theme-toggle";
import { useDrawerStore } from "@/stores";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { navItems } = data.navbar;
  const { toggleDrawer } = useDrawerStore();

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
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Drawer onOpenChange={toggleDrawer}>
            <DrawerTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="cursor-pointer"
                aria-label="Toggle menu"
              >
                <Menu />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="text-left">
                <DrawerTitle className="text-center">
                  Navigation Menu
                </DrawerTitle>
              </DrawerHeader>
              <div className="flex flex-col gap-4 p-4">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <DrawerClose asChild key={index}>
                      <Link
                        href={item.href}
                        className={`p-2 text-lg ${
                          isActive
                            ? "font-medium text-amber-600"
                            : "text-muted-foreground"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.title}
                      </Link>
                    </DrawerClose>
                  );
                })}
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
}
