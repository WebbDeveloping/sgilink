"use client";

import Link from "next/link";
import Image from "next/image";
import { LineChart } from "lucide-react";

export function DarkFooter() {
  return (
    <footer className="border-t border-gradient-trading bg-bg py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <div className="relative h-6 w-24">
            <Image
              src="/images/SGI-logo-05.png"
              alt="SGI-LINK logo"
              fill
              className="object-contain"
            />
          </div>
          <p className="flex items-center gap-2 text-xs leading-relaxed text-text-subtle">
            <LineChart className="h-3.5 w-3.5 text-text-subtle" />
            <span>© {new Date().getFullYear()} SGI-LINK. All rights reserved.</span>
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs leading-snug text-text-muted">
          <Link href="/disclosures" className="hover:text-brand-soft transition-colors">
            Risk Disclosure &amp; Compliance
          </Link>
          <Link href="https://dart.cash/" className="hover:text-brand-soft transition-colors">
            Investor Login
          </Link>
          <Link href="/contact" className="hover:text-brand-soft transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

