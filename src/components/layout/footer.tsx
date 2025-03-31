import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full  bg-background">
      <div className="container py-8 md:py-12">
        {/* Copyright */}
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {currentYear} copyright by rizal suryawan </p>
        </div>
      </div>
    </footer>
  );
}
