import Link from "next/link";
import { ThemeToggle } from "../theme-toggle";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 smooth-transition">
      <div className="container flex h-16 items-center justify-between wrapper px-2">
        <Link href="/" className="font-bold text-xl">
          TesT.
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 md:items-center">
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
