// app/performance-history/page.jsx
import { LineChart, BarChart3, FileText, ShieldCheck } from "lucide-react";

export default function PerformanceHistoryPage() {
  return (
    <main className="bg-white text-text min-h-screen">
      <PerformanceHeroSection />
      <AnnualReturnsSection />
      <MonthlyBreakdownSection />
      <RiskMetricsSection />
      <MethodologySection />
    </main>
  );
}

function PerformanceHeroSection() {
  return (
    <section className="border-b border-[#EFE3CE] bg-white py-20 lg:py-24">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 lg:px-8 space-y-6">
        <div className="max-w-3xl space-y-4">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-slate-600 uppercase">
            <LineChart className="h-3.5 w-3.5 text-[#3A5E7B]" />
            Performance History
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3A5E7B] tracking-tight">
            A transparent view of returns and risk over time.
          </h1>
          <p className="text-sm sm:text-base text-slate-700">
            This page is designed to present SGI-LINK’s track record in a
            structured, institutional format: annual and monthly returns,
            drawdowns, and core risk metrics, alongside clear explanations of
            how the data is sourced and calculated.
          </p>
        </div>

        <p className="text-[11px] text-slate-500 max-w-3xl">
          The figures and layouts shown here are for illustrative purposes and
          should not be interpreted as an offer, projection, or guarantee of
          future performance. Final numbers, charts, and disclosures will be
          populated subject to compliance review.
        </p>
      </div>
    </section>
  );
}

function AnnualReturnsSection() {
  const placeholderYears = [
    { year: "2021", returnPct: "—" },
    { year: "2022", returnPct: "—" },
    { year: "2023", returnPct: "—" },
    { year: "2024", returnPct: "—" },
  ];

  return (
    <section className="bg-[#EFE3CE]/40 border-b border-[#EFE3CE] py-20 lg:py-24">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-2">
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-slate-600 uppercase">
              <BarChart3 className="h-3.5 w-3.5 text-[#3A5E7B]" />
              Annual Returns
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#3A5E7B]">
              Year-by-year performance overview.
            </h2>
          </div>
        </div>

        <div className="rounded-2xl border border-[#EFE3CE] bg-white p-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {placeholderYears.map((row) => (
              <div
                key={row.year}
                className="flex flex-col items-start sm:items-center gap-1"
              >
                <span className="text-xs font-medium tracking-[0.16em] uppercase text-slate-600">
                  {row.year}
                </span>
                <span className="text-lg font-semibold text-[#3A5E7B]">
                  {row.returnPct}
                </span>
                <span className="text-[11px] text-slate-500">
                  Net annual return*
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[11px] text-slate-500">
            *Final net returns, including fees and expenses, will be populated
            once verified and approved for distribution.
          </p>
        </div>
      </div>
    </section>
  );
}

function MonthlyBreakdownSection() {
  return (
    <section className="bg-white border-b border-[#EFE3CE] py-20 lg:py-24">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <p className="text-xs font-semibold tracking-[0.22em] text-slate-600 uppercase flex items-center gap-2">
            <FileText className="h-3.5 w-3.5 text-[#3A5E7B]" />
            Monthly Breakdown
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#3A5E7B]">
            Month-to-month performance detail.
          </h2>
          <p className="text-sm sm:text-base text-slate-700 max-w-2xl">
            A tabular monthly breakdown will allow investors to see how returns
            were distributed throughout the year—including periods of normal
            drawdown and recovery.
          </p>
        </div>

        <div className="rounded-2xl border border-[#EFE3CE] bg-[#EFE3CE]/40 p-6">
          <p className="text-sm text-slate-700 mb-3">
            A monthly performance table or chart will be displayed here. Example
            layout:
          </p>
          <div className="overflow-x-auto text-xs">
            <table className="min-w-full border-separate border-spacing-y-1">
              <thead>
                <tr className="text-left text-slate-600">
                  <th className="py-2 pr-4">Month</th>
                  <th className="py-2 pr-4">Return</th>
                  <th className="py-2 pr-4">Comment</th>
                </tr>
              </thead>
              <tbody>
                {["Jan", "Feb", "Mar", "Apr"].map((month) => (
                  <tr key={month} className="align-top">
                    <td className="py-1.5 pr-4 text-slate-700">{month}</td>
                    <td className="py-1.5 pr-4 text-[#3A5E7B]">—</td>
                    <td className="py-1.5 pr-4 text-slate-600">
                      Placeholder for high-level notes on drivers, risk, or
                      anomalies if appropriate.
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[11px] text-slate-500">
            Data will be populated and formatted according to final reporting
            standards and administrator outputs.
          </p>
        </div>
      </div>
    </section>
  );
}

function RiskMetricsSection() {
  const metrics = [
    {
      label: "Maximum Drawdown",
      value: "—",
      desc: "Peak-to-trough decline over the track record.",
    },
    {
      label: "Sharpe Ratio",
      value: "—",
      desc: "Risk-adjusted return relative to volatility.",
    },
    {
      label: "Sortino Ratio",
      value: "—",
      desc: "Return per unit of downside volatility only.",
    },
    {
      label: "Volatility (Annualized)",
      value: "—",
      desc: "Standard deviation of returns, annualized.",
    },
  ];

  return (
    <section className="bg-[#EFE3CE]/40 border-b border-[#EFE3CE] py-20 lg:py-24">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <p className="text-xs font-semibold tracking-[0.22em] text-slate-600 uppercase flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-[#3A5E7B]" />
            Risk Metrics
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#3A5E7B]">
            Understanding returns in the context of risk.
          </h2>
          <p className="text-sm sm:text-base text-slate-700 max-w-2xl">
            Risk and return are presented together so investors can evaluate
            performance in terms of consistency, drawdown behavior, and
            efficiency—not just headline numbers.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-[#EFE3CE] bg-white p-6"
            >
              <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-slate-600 mb-1">
                {m.label}
              </p>
              <p className="text-xl font-semibold text-[#3A5E7B] mb-1">
                {m.value}
              </p>
              <p className="text-[11px] text-slate-500">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MethodologySection() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 lg:px-8 rounded-2xl border border-[#EFE3CE] bg-[#EFE3CE]/40 p-6 sm:p-8 space-y-4">
        <p className="text-xs font-semibold tracking-[0.22em] text-slate-600 uppercase flex items-center gap-2">
          <FileText className="h-3.5 w-3.5 text-[#3A5E7B]" />
          Data Methodology & Verification
        </p>
        <p className="text-sm sm:text-base text-slate-700">
          Performance figures on this page will be accompanied by clear
          methodology notes, including whether results are net or gross of fees,
          whether they include proprietary capital only or outside investors,
          and how the data is sourced from our administrator and brokers.
        </p>
        <p className="text-sm text-slate-700">
          Third-party verification, audit details, and any limitations or
          changes to the strategy over time will be disclosed so investors can
          evaluate the data in proper context.
        </p>
      </div>
    </section>
  );
}
