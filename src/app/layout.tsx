// app/layout.jsx
import "./globals.css";
import { ArrowRight, LineChart, Lock } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "SGI-LINK",
  description: "Private algorithmic trading fund.",
};

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
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[#EFE3CE] bg-white/80 backdrop-blur-xl">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-[#A7C7F1] to-[#3A5E7B] flex items-center justify-center shadow-sm">
            <span className="text-xs font-semibold text-white">SG</span>
          </div>
          <span className="text-sm font-semibold tracking-[0.22em] uppercase text-[#3A5E7B]">
            SGI-LINK
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <Link href="/" className="hover:text-[#3A5E7B]">
            Home
          </Link>
          <Link href="/strategy" className="hover:text-[#3A5E7B]">
            Strategy
          </Link>
          <Link href="/live-results" className="hover:text-[#3A5E7B]">
            Live Results
          </Link>
          <Link href="/performance" className="hover:text-[#3A5E7B]">
            Performance
          </Link>
          <Link href="/team" className="hover:text-[#3A5E7B]">
            Team
          </Link>
          <Link href="/faq" className="hover:text-[#3A5E7B]">
            FAQ
          </Link>
          <Link href="/disclosures" className="hover:text-[#3A5E7B]">
            Disclosures
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex items-center justify-center rounded-full border border-[#EFE3CE] px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-[#EFE3CE]/40">
            <Lock className="mr-1.5 h-3.5 w-3.5" />
            Investor Login
          </button>
          <button className="inline-flex items-center justify-center rounded-full bg-[#3A5E7B] px-4 py-1.5 text-xs font-semibold text-white shadow-md shadow-[rgba(58,94,123,0.35)] hover:bg-[#324f68]">
            Request Access
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </button>
        </div>
      </div>
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
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">
          <button className="inline-flex items-center gap-1 hover:text-[#3A5E7B]">
            <Lock className="h-3.5 w-3.5" />
            Privacy
          </button>
          <button className="hover:text-[#3A5E7B]">Terms</button>
          <button className="hover:text-[#3A5E7B]">Disclosures</button>
        </div>
      </div>
    </footer>
  );
}
