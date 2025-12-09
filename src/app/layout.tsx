"use client";
import Image from "next/image";
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
      <body className="bg-[#FCFCFD] text-slate-900 antialiased">
        <Header />
        <div className="pt-20 md:pt-24">{children}</div>
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
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[#ECE7DC] bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={closeMobile}>
          <div className="relative h-9 w-32 sm:h-10 sm:w-36">
            <Image
              src="/logo-blue.png"
              alt="SGI-LINK logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-xs font-medium leading-snug text-slate-600 md:flex lg:text-[13px]">
          {mainNav.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <button
                  type="button"
                  className="inline-flex items-center gap-1 whitespace-nowrap py-1 hover:text-[#3A5E7B]"
                >
                  <span>{item.label}</span>
                  <ChevronDown className="h-3 w-3" />
                </button>
                <div className="pointer-events-none absolute left-0 top-full mt-2 w-52 opacity-0 transition group-hover:pointer-events-auto group-hover:opacity-100">
                  <div className="rounded-2xl border border-[#ECE7DC] bg-white/95 py-1.5 shadow-lg shadow-slate-900/10">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-3.5 py-1.5 text-[13px] leading-snug text-slate-700 hover:bg-[#F4F2EC] hover:text-[#3A5E7B]"
                        onClick={closeMobile}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="whitespace-nowrap py-1 hover:text-[#3A5E7B]"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Actions + mobile toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Investor Login button */}
          <Link
            href="/investor-login"
            className="hidden items-center justify-center rounded-full border border-[#ECE7DC] px-3.5 py-1.5 text-[11px] font-medium leading-snug text-slate-700 hover:bg-[#F4F2EC]/70 md:inline-flex lg:text-xs"
          >
            <Lock className="mr-1.5 h-3.5 w-3.5 shrink-0" />
            <span>Investor Login</span>
          </Link>

          {/* Primary CTA -> Contact */}
          <Link
            href="/contact"
            className="hidden items-center justify-center rounded-full bg-[#3A5E7B] px-4 py-1.5 text-[11px] font-semibold leading-snug text-white shadow-md shadow-slate-900/25 hover:bg-[#324f68] md:inline-flex lg:text-xs"
          >
            <span>Request Access</span>
            <ArrowRight className="ml-1.5 h-3.5 w-3.5 shrink-0" />
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-[#ECE7DC] p-1.5 text-slate-700 hover:bg-[#F4F2EC]/70 md:hidden"
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
        <div className="border-t border-[#ECE7DC] bg-white/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <nav className="flex flex-col gap-3 text-sm leading-snug text-slate-800">
              {mainNav.map((item) =>
                item.children ? (
                  <div key={item.label} className="space-y-1.5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      {item.label}
                    </p>
                    <div className="flex flex-col gap-1 pl-3">
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
            <div className="mt-5 space-y-2 border-t border-[#ECE7DC] pt-3">
              <Link
                href="/investor-login"
                className="inline-flex w-full items-center justify-center rounded-full border border-[#ECE7DC] px-4 py-2 text-xs font-medium leading-snug text-slate-700 hover:bg-[#F4F2EC]/70"
                onClick={closeMobile}
              >
                <Lock className="mr-1.5 h-3.5 w-3.5 shrink-0" />
                <span>Investor Login</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#3A5E7B] px-4 py-2 text-xs font-semibold leading-snug text-white shadow-md shadow-slate-900/25 hover:bg-[#324f68]"
                onClick={closeMobile}
              >
                <span>Request Access</span>
                <ArrowRight className="ml-1.5 h-3.5 w-3.5 shrink-0" />
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
    <footer className="border-t border-[#ECE7DC] bg-[#F4F2EC]/60 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <p className="flex items-center gap-2 text-xs leading-relaxed text-slate-600">
          <LineChart className="h-3.5 w-3.5 text-[#3A5E7B]" />
          <span>
            © {new Date().getFullYear()} SGI-LINK. All rights reserved.
          </span>
        </p>

        {/* Only client-requested links */}
        <div className="flex flex-wrap items-center gap-4 text-xs leading-snug text-slate-600">
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
