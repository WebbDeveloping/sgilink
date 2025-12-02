"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function NavBar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-(--border) bg-(--surface)/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold text-(--text)">
          SGI-LINK
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/about" className="text-sm text-(--text) hover:underline">
            About
          </Link>
          <Link
            href="/strategy"
            className="text-sm text-(--text) hover:underline"
          >
            Strategy
          </Link>
          <Link
            href="/live-results"
            className="text-sm text-(--text) hover:underline"
          >
            Live Results
          </Link>
          <Link
            href="/contact"
            className="text-sm text-(--text) hover:underline"
          >
            Contact
          </Link>

          {/* Dark Mode Toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Placeholder (expand later) */}
        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
