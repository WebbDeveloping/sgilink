// app/performance/page.jsx
import { BarChart3, FileText, ShieldCheck } from "lucide-react";

export default function PerformancePage() {
  const years = [
    {
      year: "2021 (partial)",
      returnText: "TBD",
      note: "From launch in Dec 2021.",
    },
    {
      year: "2022",
      returnText: "TBD",
      note: "Insert net return once finalized.",
    },
    {
      year: "2023",
      returnText: "TBD",
      note: "Insert net return once finalized.",
    },
    {
      year: "2024",
      returnText: "TBD",
      note: "Insert net return once finalized.",
    },
  ];

  return (
    <main className="bg-white text-slate-900 min-h-screen">
      {/* Intro hero */}
      <section className="relative bg-gradient-to-b from-white via-white to-[#EFE3CE]/40 pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 border-b border-[#EFE3CE]">
        <div className="relative max-w-5xl mx-auto px-6 lg:px-0">
          <div className="mx-auto max-w-3xl text-center space-y-5">
            <p className="inline-flex items-center justify-center gap-2 text-[11px] font-semibold tracking-[0.22em] text-slate-500 uppercase">
              <BarChart3 className="h-3.5 w-3.5 text-[#3A5E7B]" />
              Performance History
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
              A track record built on{" "}
              <span className="text-[#3A5E7B]">process, not prediction.</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto">
              The figures below are placeholders for the fund’s audited or
              administrator-verified performance history. Final numbers should
              be sourced from official records and may differ from preliminary
              estimates.
            </p>
          </div>

          {/* Subtle summary card */}
          <div className="mt-10 rounded-3xl border border-[#EFE3CE] bg-white/80 backdrop-blur-sm shadow-[0_18px_45px_rgba(15,23,42,0.08)] p-6 sm:p-8 space-y-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <p className="text-[11px] font-semibold tracking-[0.2em] text-slate-500 uppercase flex items-center gap-2">
                  <FileText className="h-3.5 w-3.5 text-[#3A5E7B]" />
                  Data context
                </p>
                <p className="text-sm text-slate-800">
                  Performance should ultimately reflect official administrator
                  or auditor records, including the impact of fees and expenses.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#EFE3CE]/80 px-4 py-2 text-[11px] font-medium tracking-[0.18em] text-slate-700 uppercase">
                <span className="inline-flex h-2 w-2 rounded-full bg-[#3A5E7B]" />
                Net of fees when stated
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table section */}
      <section className="bg-[#EFE3CE]/40 border-b border-[#EFE3CE] py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-0 space-y-8">
          <div className="rounded-3xl border border-[#EFE3CE] bg-white p-6 sm:p-8 shadow-md">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="space-y-1">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-slate-500 uppercase flex items-center gap-2">
                  <FileText className="h-3.5 w-3.5 text-[#3A5E7B]" />
                  Annual Returns (Illustrative)
                </p>
                <p className="text-sm text-slate-700">
                  Replace these placeholder rows with official net performance
                  data once available.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#EFE3CE]">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#EFE3CE]/40 text-xs uppercase tracking-[0.16em] text-slate-600">
                  <tr>
                    <th className="px-4 py-3">Year</th>
                    <th className="px-4 py-3">Net Return</th>
                    <th className="px-4 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {years.map((row) => (
                    <tr key={row.year} className="border-t border-[#EFE3CE]">
                      <td className="px-4 py-3 text-slate-800">{row.year}</td>
                      <td className="px-4 py-3 text-slate-800">
                        {row.returnText}
                      </td>
                      <td className="px-4 py-3 text-slate-600 text-xs">
                        {row.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-[11px] leading-relaxed text-slate-500 flex gap-2">
              <ShieldCheck className="mt-0.5 h-3.5 w-3.5 text-[#3A5E7B]" />
              <span>
                Performance figures, when finalized, should be presented net of
                management and incentive fees where applicable. Past performance
                does not guarantee future results and should not be relied upon
                as the sole basis for an investment decision.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Optional subtle CTA / note (kept minimal for this page) */}
      <section className="relative bg-white py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(58,94,123,0.06),_transparent_70%)]" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-0 text-center space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#3A5E7B]">
            Detailed performance available on request.
          </h2>
          <p className="text-sm sm:text-base text-slate-700">
            We provide full performance histories, including monthly returns,
            drawdowns, and risk metrics, to qualified and accredited investors
            as part of our due diligence materials.
          </p>
        </div>
      </section>
    </main>
  );
}
