// app/live-results/page.jsx
import { BarChart3, LineChart, TrendingUp, ShieldCheck } from "lucide-react";

export default function LiveResultsPage() {
  const stats = [
    {
      label: "YTD Return",
      value: "+0.0%",
      note: "Net of fees, placeholder only.",
    },
    {
      label: "Current Drawdown",
      value: "0.0%",
      note: "From most recent equity peak.",
    },
    {
      label: "Win Rate",
      value: "0%",
      note: "Percentage of winning periods.",
    },
  ];

  return (
    <main className="bg-white text-slate-900 min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-white via-white to-[#EFE3CE]/40 pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 border-b border-[#EFE3CE]">
        <div className="relative max-w-5xl mx-auto px-6 lg:px-0">
          <div className="mx-auto max-w-3xl text-center space-y-5">
            <p className="inline-flex items-center justify-center gap-2 text-[11px] font-semibold tracking-[0.22em] text-slate-500 uppercase">
              <BarChart3 className="h-3.5 w-3.5 text-[#3A5E7B]" />
              Live Results
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
              Daily transparency on{" "}
              <span className="text-[#3A5E7B]">system performance.</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto">
              This page is designed to display live or daily-updated performance
              metrics for SGI-LINK. The values and charts shown below are
              placeholders until connected to official data sources.
            </p>
          </div>

          {/* Subtle context card */}
          <div className="mt-10 rounded-3xl border border-[#EFE3CE] bg-white/80 backdrop-blur-sm shadow-[0_18px_45px_rgba(15,23,42,0.08)] p-6 sm:p-8 space-y-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <p className="text-[11px] font-semibold tracking-[0.2em] text-slate-500 uppercase flex items-center gap-2">
                  <LineChart className="h-3.5 w-3.5 text-[#3A5E7B]" />
                  Data status
                </p>
                <p className="text-sm text-slate-800">
                  Placeholder metrics are shown for now. In production, this
                  page will reflect verified daily or monthly performance feeds.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#EFE3CE]/80 px-4 py-2 text-[11px] font-medium tracking-[0.18em] text-slate-700 uppercase">
                <span className="inline-flex h-2 w-2 rounded-full bg-[#3A5E7B]" />
                Live once integrated
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stat cards + equity curve */}
      <section className="bg-[#EFE3CE]/40 border-b border-[#EFE3CE] py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-10">
          {/* Stat cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {stats.map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-[#EFE3CE] bg-white p-6 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-500 uppercase">
                    {item.label}
                  </p>
                  <p className="text-2xl font-semibold text-[#3A5E7B]">
                    {item.value}
                  </p>
                </div>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  {item.note}
                </p>
              </article>
            ))}
          </div>

          {/* Equity curve placeholder */}
          <div className="rounded-3xl border border-[#EFE3CE] bg-white p-6 sm:p-8 shadow-md space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-[11px] font-semibold tracking-[0.2em] text-slate-500 uppercase flex items-center gap-2">
                  <TrendingUp className="h-3.5 w-3.5 text-[#3A5E7B]" />
                  Equity Curve (Placeholder)
                </p>
                <p className="text-sm text-slate-700">
                  In production, this chart will show the cumulative equity
                  curve for SGI-LINK over time, updated on a regular schedule.
                </p>
              </div>
            </div>

            <div className="mt-4 h-64 rounded-2xl border border-[#EFE3CE] bg-[#EFE3CE]/30 flex items-center justify-center text-sm text-slate-600">
              Simulated equity curve placeholder
            </div>

            <p className="mt-4 text-[11px] leading-relaxed text-slate-500 flex gap-2">
              <ShieldCheck className="mt-0.5 h-3.5 w-3.5 text-[#3A5E7B]" />
              <span>
                Any future live results should be presented alongside clear
                disclosures and should be considered in the context of full,
                audited performance history. Past performance does not guarantee
                future results.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Bottom note / mini CTA */}
      <section className="relative bg-white py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(58,94,123,0.06),_transparent_70%)]" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-0 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#3A5E7B]">
            Full details available to qualified investors.
          </h2>
          <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto">
            When live, this page is intended as a high-level snapshot. We
            provide full performance breakdowns, risk statistics, and
            methodology to accredited and qualified investors as part of our
            diligence process.
          </p>
        </div>
      </section>
    </main>
  );
}
