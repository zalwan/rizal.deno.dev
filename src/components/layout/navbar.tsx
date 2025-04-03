import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "../theme-toggle";

export default function Navbar() {
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
          <Link
            href="/#about"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Tentang
          </Link>
          <Link
            href="/#skills"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Keahlian
          </Link>
          <Link
            href="/#projects"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Proyek
          </Link>
          <Link
            href="/#contact"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Kontak
          </Link>
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
