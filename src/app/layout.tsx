// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { LineChart } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "SGI-LINK",
  description: "Private algorithmic trading fund.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg text-text antialiased">
        <Header />
        <div className="pt-20 md:pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-section-warm/60 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <p className="flex items-center gap-2 text-xs leading-relaxed text-text-muted">
          <LineChart className="h-3.5 w-3.5 text-brand" />
          <span>
            © {new Date().getFullYear()} SGI-LINK. All rights reserved.
          </span>
        </p>

        <div className="flex flex-wrap items-center gap-4 text-xs leading-snug text-text-muted">
          <Link href="/disclosures" className="hover:text-brand">
            Risk Disclosure &amp; Compliance
          </Link>
          <Link href="/investor-login" className="hover:text-brand">
            Investor Login
          </Link>
          <Link href="/contact" className="hover:text-brand">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
