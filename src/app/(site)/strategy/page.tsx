// app/strategy/page.jsx
import {
  ArrowRight,
  BarChart3,
  Cpu,
  FileText,
  Layers,
  ShieldCheck,
} from "lucide-react";

export default function StrategyPage() {
  const pillars = [
    {
      title: "Diversified models",
      body: "Multiple in-house strategies with different inputs, holding periods, and risk budgets, combined into a single portfolio.",
      icon: Layers,
    },
    {
      title: "Rules over emotion",
      body: "Entries, exits, and position sizing are defined by rules and pre-set risk constraints, not headlines or sentiment.",
      icon: ShieldCheck,
    },
    {
      title: "Repeatable process",
      body: "A formal research pipeline governs how new ideas are tested, approved, and deployed into production.",
      icon: FileText,
    },
  ];

  const lifecycle = [
    {
      label: "1 · Research",
      title: "Idea generation & validation",
      body: "Strategies begin as research hypotheses, then move through extensive backtests, robustness checks, and out-of-sample validation.",
      icon: BarChart3,
    },
    {
      label: "2 · Portfolio role",
      title: "Defined risk contribution",
      body: "Each live strategy has a specific role in the portfolio, with explicit limits on risk, correlation, and drawdown.",
      icon: Cpu,
    },
    {
      label: "3 · Production",
      title: "Deployment & monitoring",
      body: "Once in production, systems are monitored daily against guardrails, with automated de-risking when limits are approached.",
      icon: ShieldCheck,
    },
  ];

  return (
    <main className="bg-white text-slate-900 min-h-screen">
      {/* Header / Footer come from app/layout */}

      {/* Intro hero */}
      <section className="relative bg-gradient-to-b from-white via-white to-[#EFE3CE]/40 pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 border-b border-[#EFE3CE]">
        <div className="relative max-w-5xl mx-auto px-6 lg:px-0">
          <div className="mx-auto max-w-3xl text-center space-y-5">
            <p className="inline-flex items-center justify-center gap-2 text-[11px] font-semibold tracking-[0.22em] text-slate-500 uppercase">
              <ShieldCheck className="h-3.5 w-3.5 text-[#3A5E7B]" />
              Strategy &amp; Risk Framework
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
              A portfolio of rules-based systems,
              <span className="block sm:inline text-[#3A5E7B]">
                {" "}
                engineered to behave under stress.
              </span>
            </h1>
            <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto">
              SGI-LINK does not rely on a single trade or idea. We allocate to a
              family of models — each with clear rules and risk budgets —
              combined into a single portfolio designed to be durable across
              market regimes.
            </p>
          </div>

          {/* Subtle card to make this feel like an interior hero, not a landing hero */}
          <div className="mt-10 rounded-3xl border border-[#EFE3CE] bg-white/80 backdrop-blur-sm shadow-[0_18px_45px_rgba(15,23,42,0.08)] p-6 sm:p-8 space-y-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <p className="text-[11px] font-semibold tracking-[0.2em] text-slate-500 uppercase">
                  Overview
                </p>
                <p className="text-sm sm:text-base text-slate-800">
                  A disciplined pipeline that moves ideas from research to live
                  capital under a consistent risk framework.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#EFE3CE]/80 px-4 py-2 text-[11px] font-medium tracking-[0.18em] text-slate-700 uppercase whitespace-nowrap">
                <span className="inline-flex h-2 w-2 rounded-full bg-[#3A5E7B]" />
                Rules-based · Risk-first
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-[#EFE3CE]/40 border-b border-[#EFE3CE] py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#3A5E7B]">
              How we build and combine strategies.
            </h2>
            <p className="text-sm sm:text-base text-slate-700">
              Before a model reaches live capital, it must clear a series of
              quantitative and qualitative hurdles: robustness to noise,
              sensitivity to assumptions, and behavior in periods of stress.
            </p>
          </div>

          <div className="grid gap-6 lg:gap-8 md:grid-cols-3">
            {pillars.map(({ title, body, icon: Icon }) => (
              <article
                key={title}
                className="flex flex-col rounded-2xl border border-[#EFE3CE] bg-white p-6 shadow-sm"
              >
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#A7C7F1]/15 text-[#3A5E7B]">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-semibold text-[#3A5E7B] mb-2">
                  {title}
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Lifecycle / process */}
      <section className="bg-white border-b border-[#EFE3CE] py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid gap-12 lg:gap-20 lg:grid-cols-2 items-start">
          <div className="space-y-4">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-slate-600 uppercase">
              Process
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#3A5E7B]">
              From research notebook to live capital.
            </h2>
            <p className="text-sm sm:text-base text-slate-700">
              The same discipline that governs live trading also applies to our
              research process. Every change to a live system is evaluated based
              on its impact to the entire portfolio, not just its standalone
              return.
            </p>
            <p className="text-sm text-slate-600">
              We view risk as something to be budgeted deliberately. That
              mindset informs position sizing, leverage, diversification, and
              when to stand aside.
            </p>
          </div>

          <div className="space-y-4">
            {lifecycle.map(({ label, title, body, icon: Icon }) => (
              <article
                key={label}
                className="rounded-2xl border border-[#EFE3CE] bg-[#EFE3CE]/40 p-5 sm:p-6"
              >
                <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] text-slate-600 uppercase mb-1">
                  <Icon className="h-3.5 w-3.5 text-[#3A5E7B]" />
                  {label}
                </p>
                <p className="text-sm font-semibold text-[#3A5E7B] mb-1.5">
                  {title}
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative bg-white py-16 lg:py-20">
        {/* subtle blue glow only in this section */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(58,94,123,0.08),_transparent_70%)]" />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-0 space-y-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#3A5E7B]">
            Risk first. Rules always.
          </h2>
          <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto">
            SGI-LINK is designed for investors who are comfortable with normal
            volatility, but unwilling to compromise on risk discipline. We are
            happy to review our risk framework, stress tests, and historical
            drawdowns in detail during an introductory conversation.
          </p>
          <button className="inline-flex items-center justify-center rounded-full bg-[#3A5E7B] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[rgba(58,94,123,0.35)] hover:bg-[#324f68] transition">
            Request strategy call
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </section>
    </main>
  );
}
