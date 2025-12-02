"use client";

import "./globals.css";
import React, { useState } from "react";
import {
  ArrowRight,
  LineChart,
  Lock,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

const metadata = {
  title: "SGI-LINK",
  description: "Private algorithmic trading fund.",
};

// Header IA:
// - Primary: Home, About, Strategy, Performance (dropdown), Team, Why SGI, FAQs, Contact
// - Performance dropdown: Live Results, Performance History
// - Investor Login: primary action button
// - Contact/Request Access: primary CTA button
// - Risk Disclosure: in footer

const mainNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/strategy", label: "Strategy" },
  {
    label: "Performance",
    children: [
      { href: "/live-results", label: "Live Results" },
      { href: "/performance-history", label: "Performance History" },
    ],
  },
  { href: "/team", label: "Team" },
  { href: "/why-sgi", label: "Why SGI" },
  { href: "/faq", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        <Header />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen((open) => !open);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[#EFE3CE] bg-white/80 backdrop-blur-xl">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={closeMobile}
        >
          <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-[#A7C7F1] to-[#3A5E7B] flex items-center justify-center shadow-sm">
            <span className="text-xs font-semibold text-white">SG</span>
          </div>
          <span className="text-sm font-semibold tracking-[0.22em] uppercase text-[#3A5E7B]">
            SGI-LINK
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm text-slate-600">
          {mainNav.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <button
                  type="button"
                  className="inline-flex items-center gap-1 hover:text-[#3A5E7B]"
                >
                  <span>{item.label}</span>
                  <ChevronDown className="h-3 w-3" />
                </button>
                <div className="pointer-events-none absolute left-0 top-full mt-2 w-48 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition">
                  <div className="rounded-xl border border-[#EFE3CE] bg-white shadow-lg shadow-slate-900/5 py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-1.5 text-xs text-slate-700 hover:bg-[#EFE3CE]/40 hover:text-[#3A5E7B]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-[#3A5E7B] whitespace-nowrap"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Actions + mobile toggle */}
        <div className="flex items-center gap-3">
          {/* Investor Login button (optional page) */}
          <Link
            href="/investor-login"
            className="hidden md:inline-flex items-center justify-center rounded-full border border-[#EFE3CE] px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-[#EFE3CE]/40"
          >
            <Lock className="mr-1.5 h-3.5 w-3.5" />
            Investor Login
          </Link>

          {/* Primary CTA -> Contact */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center rounded-full bg-[#3A5E7B] px-4 py-1.5 text-xs font-semibold text-white shadow-md shadow-[rgba(58,94,123,0.35)] hover:bg-[#324f68]"
          >
            Request Access
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="inline-flex md:hidden items-center justify-center rounded-full border border-[#EFE3CE] p-1.5 text-slate-700 hover:bg-[#EFE3CE]/40"
            onClick={toggleMobile}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#EFE3CE] bg-white/95 backdrop-blur-xl">
          <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 lg:px-8 py-4 space-y-4">
            <nav className="flex flex-col gap-2 text-sm text-slate-700">
              {mainNav.map((item) =>
                item.children ? (
                  <div key={item.label} className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      {item.label}
                    </p>
                    <div className="pl-3 flex flex-col gap-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="py-1 hover:text-[#3A5E7B]"
                          onClick={closeMobile}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="py-1 hover:text-[#3A5E7B]"
                    onClick={closeMobile}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* Mobile actions */}
            <div className="pt-3 flex flex-col gap-2 border-t border-[#EFE3CE]">
              <Link
                href="/investor-login"
                className="inline-flex items-center justify-center rounded-full border border-[#EFE3CE] px-4 py-2 text-xs font-medium text-slate-700 hover:bg-[#EFE3CE]/40"
                onClick={closeMobile}
              >
                <Lock className="mr-1.5 h-3.5 w-3.5" />
                Investor Login
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#3A5E7B] px-4 py-2 text-xs font-semibold text-white shadow-md shadow-[rgba(58,94,123,0.35)] hover:bg-[#324f68]"
                onClick={closeMobile}
              >
                Request Access
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#EFE3CE] bg-[#EFE3CE]/40 py-8 mt-16">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="flex items-center gap-2 text-xs text-slate-600">
          <LineChart className="h-3.5 w-3.5 text-[#3A5E7B]" />
          <span>
            © {new Date().getFullYear()} SGI-LINK. All rights reserved.
          </span>
        </p>

        {/* Only client-requested links */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">
          <Link href="/disclosures" className="hover:text-[#3A5E7B]">
            Risk Disclosure &amp; Compliance
          </Link>
          <Link href="/investor-login" className="hover:text-[#3A5E7B]">
            Investor Login
          </Link>
          <Link href="/contact" className="hover:text-[#3A5E7B]">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
