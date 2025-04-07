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
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const { navItems } = data.navbar;
  const { toggleDrawer } = useDrawerStore();

  return (
    <nav className="bg-background/95 supports-[backdrop-filter]:bg-background/60 smooth-transition w-full border-b backdrop-blur">
      <div className="wrapper container flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          <Image
            className="dark:invert"
            src="/logo.svg"
            alt="rizal suryawan logo"
            width={50}
            height={50}
            loading="eager"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden gap-6 md:flex md:items-center">
          {navItems
            .filter((item) => !item.disabled)
            .map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  className={`transition-colors ${
                    isActive
                      ? "text-amber-600"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-current={isActive ? "page" : undefined}
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
            <DrawerContent aria-describedby="navigation-menu">
              <DrawerHeader className="text-center">
                <DrawerTitle>Navigation Menu</DrawerTitle>
                <DrawerDescription>
                  Explore the menu and discover the wonders.
                </DrawerDescription>
              </DrawerHeader>
              <div className="grid grid-cols-2 gap-4 p-4">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  const isFirstAndOdd =
                    index === 0 && navItems.length % 2 !== 0;

                  return (
                    <DrawerClose asChild key={index}>
                      <Link
                        href={item.href}
                        className={`flex items-center justify-center gap-2 rounded-md border-2 p-4 text-center text-lg ${
                          isActive
                            ? "border-amber-600 bg-amber-600/5 font-medium text-amber-600"
                            : "text-muted-foreground"
                        } ${isFirstAndOdd ? "col-span-2" : ""}`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        <span className="inline-block md:hidden">
                          {item.emoji}
                        </span>
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
