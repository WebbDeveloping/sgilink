// app/live-results/page.jsx
import { ArrowRight, BarChart3, LineChart, ShieldCheck } from "lucide-react";
import Link from "next/link";

function Header() {
  // same header as StrategyPage (you can extract later)
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
          <a href="/strategy" className="hover:text-[#3A5E7B]">
            Strategy
          </a>
          <a href="/live-results" className="text-[#3A5E7B] font-medium">
            Live Results
          </a>
          <a href="/performance" className="hover:text-[#3A5E7B]">
            Performance
          </a>
          <a href="/team" className="hover:text-[#3A5E7B]">
            Team
          </a>
          <a href="/faq" className="hover:text-[#3A5E7B]">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex items-center justify-center rounded-full border border-[#EFE3CE] px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-[#EFE3CE]/40">
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
          © {new Date().getFullYear()} SGI-LINK. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">
          <a href="/privacy" className="hover:text-[#3A5E7B]">
            Privacy
          </a>
          <a href="/terms" className="hover:text-[#3A5E7B]">
            Terms
          </a>
          <a href="/disclosures" className="hover:text-[#3A5E7B]">
            Disclosures
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function LiveResultsPage() {
  return (
    <main className="bg-white text-slate-900 min-h-screen">
      <Header />

      <section className="relative overflow-hidden bg-white pt-28 sm:pt-32 lg:pt-40 pb-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#A7C7F1_0,_#FFFFFF_45%,_#EFE3CE_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(167,199,241,0.18)_1px,transparent_1px)] bg-[length:100%_40px] opacity-40" />
          <div className="absolute inset-0 bg-white/75 sm:bg-transparent" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-0 space-y-6 text-center">
          <p className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase">
            <BarChart3 className="h-3.5 w-3.5 text-[#3A5E7B]" />
            Live Results
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
            Real-time performance for{" "}
            <span className="text-[#3A5E7B]">active investors.</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto">
            SGI-LINK’s detailed live performance is available through our
            investor portal. The summary below is for illustrative, high-level
            informational purposes only and does not replace official
            statements.
          </p>
        </div>
      </section>

      <section className="bg-[#EFE3CE]/40 border-t border-[#EFE3CE] py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-8">
          <div className="rounded-3xl border border-[#EFE3CE] bg-white p-6 sm:p-8 shadow-md">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="space-y-1">
                <p className="text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase flex items-center gap-2">
                  <LineChart className="h-3.5 w-3.5 text-[#3A5E7B]" />
                  Performance Snapshot
                </p>
                <p className="text-sm text-slate-700">
                  Placeholder for your live results chart or embedded provider.
                </p>
              </div>
            </div>

            <div className="aspect-[16/9] w-full rounded-2xl border border-dashed border-[#DDBF99] bg-[#EFE3CE]/40 flex items-center justify-center text-xs sm:text-sm text-slate-600 text-center">
              Drop-in area for chart / iframe / performance widget (e.g.
              Myfxbook, broker portal, or custom chart).
            </div>

            <p className="mt-4 text-[11px] leading-relaxed text-slate-500 flex gap-2">
              <ShieldCheck className="mt-0.5 h-3.5 w-3.5 text-[#3A5E7B]" />
              <span>
                Any performance figures, when shown, are presented net of fees
                where indicated and are subject to revision. Past performance
                does not guarantee future results. All investing involves risk,
                including the potential loss of principal.
              </span>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
