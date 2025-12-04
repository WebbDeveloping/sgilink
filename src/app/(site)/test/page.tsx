// app/sgi-brief/page.jsx
// SGI-LINK – Brief Site Content (Simplified Investor-Facing Copy)

import {
  ArrowRight,
  ShieldCheck,
  LineChart,
  Layers,
  Cpu,
  Users2,
  HelpCircle,
  FileText,
  Globe2,
} from "lucide-react";

export default function SgiBriefPage() {
  return (
    <main className="min-h-screen bg-[#FCFCFD] text-[#1F2933]">
      <BriefHero />
      <FundSnapshotSection />
      <StrategySection />
      <TechnologySection />
      <InvestorProfileSection />
      <FaqTeaserSection />
      <FinalCtaSection />
    </main>
  );
}

function BriefHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft sunlight / sand glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,242,236,0.9),_transparent_65%)]" />
      {/* Soft blue ambient glow */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(141,183,232,0.35),_transparent_70%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-4 pb-20 pt-24 sm:px-6 md:flex-row md:items-center md:pb-20 md:pt-32 lg:pb-24">
        {/* Copy */}
        <div className="max-w-xl space-y-7">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500 leading-snug">
            SGI-LINK · Private Algorithmic Fund
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 leading-tight sm:text-5xl">
            Systematic returns.
            <span className="relative ml-2 inline-block">
              <span className="absolute inset-x-0 bottom-1 h-2 rounded-full bg-blue-100" />
              <span className="relative">Simple story.</span>
            </span>
          </h1>

          <p className="text-sm text-slate-600 leading-relaxed sm:text-base">
            SGI-LINK allocates capital to a single, disciplined engine of
            proprietary FX and commodities strategies — built to compound calmly
            in the background of a diversified portfolio.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-[#3A5E7B] px-6 py-2.5 text-sm font-medium leading-snug text-white shadow-md shadow-slate-900/15 transition hover:bg-[#324b63] whitespace-nowrap"
            >
              <FileText className="mr-2 h-4 w-4 shrink-0" />
              <span>Request fund deck</span>
            </button>
            <a
              href="/fund-overview"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 px-5 py-2.5 text-sm font-medium leading-snug text-slate-700 backdrop-blur-sm hover:border-[#8DB7E8] whitespace-nowrap"
            >
              <span>Fund overview</span>
              <ArrowRight className="ml-1.5 h-4 w-4 shrink-0" />
            </a>
          </div>

          <p className="flex max-w-md items-start gap-2 text-[11px] leading-relaxed text-slate-500">
            <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#3A5E7B]" />
            <span>
              For qualified and accredited investors only. This is not an offer
              or solicitation to buy or sell any security.
            </span>
          </p>
        </div>

        {/* Quick snapshot */}
        <div className="flex-1">
          <div className="mx-auto max-w-md rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-xl shadow-slate-900/5 backdrop-blur">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-slate-500 leading-snug">
              Fund at a glance
            </p>

            <dl className="grid grid-cols-2 gap-4 text-sm">
              <OverviewMetric label="Core focus" value="FX & Commodities" />
              <OverviewMetric
                label="Objective"
                value="Consistent, tech-driven returns"
              />
              <OverviewMetric
                label="Approach"
                value="Rules-based, fully automated"
              />
              <OverviewMetric
                label="Philosophy"
                value="Risk first. Rules always."
              />
            </dl>

            <p className="mt-4 text-[11px] leading-relaxed text-slate-400">
              Past performance does not guarantee future results. All investing
              involves risk, including the potential loss of principal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function OverviewMetric({ label, value }: { label: string; value: string }) {
  return (
    <>
      <dt className="text-[11px] uppercase tracking-wide text-slate-500 leading-snug">
        {label}
      </dt>
      <dd className="text-sm font-semibold text-slate-900 leading-snug">
        {value}
      </dd>
    </>
  );
}

function FundSnapshotSection() {
  const items = [
    {
      title: "Mandate",
      body: "Provide disciplined, rules-based exposure to SGI’s trading systems with conservative use of leverage and tight drawdown control.",
      icon: ShieldCheck,
    },
    {
      title: "Edge",
      body: "Edge comes from the combination of research, execution, and risk tooling — not any single model.",
      icon: Layers,
    },
    {
      title: "Alignment",
      body: "SGI invests alongside clients under the same risk framework, fees, and reporting.",
      icon: Users2,
    },
  ];

  return (
    <section className="border-t border-[#ECE7DC] bg-[#F4F2EC] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 max-w-2xl space-y-3">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 leading-snug">
            <Layers className="h-3.5 w-3.5 text-[#3A5E7B]" />
            <span>Fund Overview</span>
          </p>
          <h2 className="text-2xl font-semibold text-slate-900 leading-snug">
            A focused vehicle for SGI’s systems.
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            SGI-LINK exists to channel capital into SGI’s proprietary trading
            systems — nothing else.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map(({ title, body, icon: Icon }) => (
            <article
              key={title}
              className="rounded-2xl border border-[#ECE7DC] bg-white/90 p-5 shadow-sm shadow-slate-900/5"
            >
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#A7C7F1]/15 text-[#3A5E7B]">
                <Icon className="h-4 w-4" />
              </div>
              <h3 className="mb-1.5 text-sm font-semibold text-slate-900 leading-snug">
                {title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-600">{body}</p>
            </article>
          ))}
        </div>

        <div className="mt-6">
          <a
            href="/fund-overview"
            className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.18em] text-[#3A5E7B] hover:text-[#2c4157] whitespace-nowrap leading-snug"
          >
            <span>View full fund overview</span>
            <ArrowRight className="ml-1.5 h-3.5 w-3.5 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}

function StrategySection() {
  const steps = [
    {
      label: "1 · Research",
      title: "Systematic idea pipeline",
      body: "New ideas are stress-tested across instruments, timeframes, and regimes before capital is deployed.",
      icon: FileText,
    },
    {
      label: "2 · Portfolio",
      title: "Risk-balanced combination",
      body: "Strategies are combined for balanced risk contribution, not just highest standalone return.",
      icon: Layers,
    },
    {
      label: "3 · Oversight",
      title: "Live risk controls",
      body: "Systems are monitored against predefined limits with automated de-risking where needed.",
      icon: LineChart,
    },
  ];

  return (
    <section className="border-t border-[#ECE7DC] bg-white py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-start">
        <div className="max-w-xl space-y-4">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 leading-snug">
            <ShieldCheck className="h-3.5 w-3.5 text-[#3A5E7B]" />
            <span>Strategy &amp; Risk</span>
          </p>
          <h2 className="text-2xl font-semibold text-slate-900 leading-snug">
            Diversified, rules-driven systems.
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            Multiple independent strategies, each with defined roles and risk
            budgets, are combined into a single portfolio designed to stay
            durable across regimes.
          </p>
          <a
            href="/strategy"
            className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.18em] text-[#3A5E7B] hover:text-[#2c4157] whitespace-nowrap leading-snug"
          >
            <span>Learn more about our strategy</span>
            <ArrowRight className="ml-1.5 h-3.5 w-3.5 shrink-0" />
          </a>
        </div>

        <div className="flex-1 space-y-3">
          {steps.map(({ label, title, body, icon: Icon }) => (
            <article
              key={label}
              className="rounded-2xl border border-[#ECE7DC] bg-[#F7F5F0] p-4 sm:p-5"
            >
              <p className="mb-1 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600 leading-snug">
                <Icon className="h-3.5 w-3.5 shrink-0 text-[#3A5E7B]" />
                <span>{label}</span>
              </p>
              <p className="mb-1.5 text-sm text-[#3A5E7B] leading-snug">
                {title}
              </p>
              <p className="text-xs leading-relaxed text-slate-700">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnologySection() {
  const layers = [
    {
      label: "Execution layer",
      body: "Order routing and venue selection tuned for FX and futures liquidity.",
      icon: Globe2,
    },
    {
      label: "Model layer",
      body: "Portfolio of independently tested strategies with clear roles.",
      icon: Cpu,
    },
    {
      label: "Risk layer",
      body: "Position limits, max-loss thresholds, and automatic de-risking logic.",
      icon: ShieldCheck,
    },
    {
      label: "Reporting layer",
      body: "Investor reporting aligned with institutional expectations.",
      icon: FileText,
    },
  ];

  return (
    <section className="border-t border-[#ECE7DC] bg-[#F4F2EC] py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-start">
        <div className="max-w-xl space-y-4">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 leading-snug">
            <Cpu className="h-3.5 w-3.5 text-[#3A5E7B]" />
            <span>Technology Stack</span>
          </p>
          <h2 className="text-2xl font-semibold text-slate-900 leading-snug">
            Infrastructure built for live markets.
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            Purpose-built execution, monitoring, and risk tooling support our
            systems in live FX and futures markets — not just in research
            notebooks.
          </p>
          <a
            href="/technology"
            className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.18em] text-[#3A5E7B] hover:text-[#2c4157] whitespace-nowrap leading-snug"
          >
            <span>See technology overview</span>
            <ArrowRight className="ml-1.5 h-3.5 w-3.5 shrink-0" />
          </a>
        </div>

        <div className="flex-1 space-y-3">
          {layers.map(({ label, body, icon: Icon }) => (
            <div
              key={label}
              className="rounded-2xl border border-[#ECE7DC] bg-white p-4 sm:p-5 shadow-sm shadow-slate-900/5"
            >
              <p className="mb-1 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600 leading-snug">
                <Icon className="h-3.5 w-3.5 shrink-0 text-[#3A5E7B]" />
                <span>{label}</span>
              </p>
              <p className="text-xs leading-relaxed text-slate-700">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InvestorProfileSection() {
  return (
    <section className="border-t border-[#ECE7DC] bg-white py-16">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6">
        <div className="max-w-xl space-y-3">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 leading-snug">
            <Users2 className="h-3.5 w-3.5 text-[#3A5E7B]" />
            <span>Investor Profile</span>
          </p>
          <h2 className="text-2xl font-semibold text-slate-900 leading-snug">
            For patient, qualified capital.
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            SGI-LINK is designed for investors who value discipline,
            transparency, and a repeatable process more than short-term
            headlines.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-3 rounded-2xl border border-[#ECE7DC] bg-[#F7F5F0] p-6">
            <h3 className="text-sm font-semibold text-[#3A5E7B] leading-snug">
              Who we typically work with
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
              <li>
                <span className="font-medium text-[#3A5E7B]">
                  Investor type ·
                </span>{" "}
                Accredited and qualified investors.
              </li>
              <li>
                <span className="font-medium text-[#3A5E7B]">
                  Time horizon ·
                </span>{" "}
                Multi-year allocation with tolerance for normal drawdowns.
              </li>
              <li>
                <span className="font-medium text-[#3A5E7B]">
                  Role in portfolio ·
                </span>{" "}
                Systematic sleeve within a diversified alternatives allocation.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <a
              href="/investors"
              className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.18em] text-[#3A5E7B] hover:text-[#2c4157] whitespace-nowrap leading-snug"
            >
              <span>Review investor information</span>
              <ArrowRight className="ml-1.5 h-3.5 w-3.5 shrink-0" />
            </a>
            <p className="text-xs leading-relaxed text-slate-600">
              Additional details on minimums, liquidity terms, and onboarding
              are outlined on the investor information page and in formal
              offering documents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqTeaserSection() {
  const faqs = [
    {
      q: "What markets do you trade?",
      a: "Primarily major global currency pairs and select commodities futures.",
    },
    {
      q: "Is this a short-term trading product?",
      a: "No. SGI-LINK is intended as a multi-year allocation, even though systems run on varied timeframes.",
    },
    {
      q: "How often do I receive reporting?",
      a: "Investors receive regular performance and risk reporting, plus on-request conversations.",
    },
  ];

  return (
    <section className="border-t border-[#ECE7DC] bg-[#F4F2EC] py-16">
      <div className="mx-auto max-w-4xl space-y-8 px-4 sm:px-6">
        <div className="space-y-2">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 leading-snug">
            <HelpCircle className="h-3.5 w-3.5 text-[#3A5E7B]" />
            <span>FAQ</span>
          </p>
          <h2 className="text-2xl font-semibold text-slate-900 leading-snug">
            Common questions, straight answers.
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            A deeper FAQ covers markets traded, risk management, reporting, and
            how SGI-LINK fits into a broader allocation.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-[#ECE7DC] bg-white p-4 shadow-sm"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-medium leading-snug text-slate-800">
                <span>{item.q}</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-slate-500 transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-2 text-xs leading-relaxed text-slate-700">
                {item.a}
              </p>
            </details>
          ))}
        </div>

        <div>
          <a
            href="/faq"
            className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.18em] text-[#3A5E7B] hover:text-[#2c4157] whitespace-nowrap leading-snug"
          >
            <span>View full FAQ</span>
            <ArrowRight className="ml-1.5 h-3.5 w-3.5 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="border-t border-[#ECE7DC] bg-white py-16">
      <div className="mx-auto max-w-3xl space-y-6 px-4 text-center sm:px-6">
        <h2 className="text-2xl font-semibold text-slate-900 leading-snug">
          Explore an allocation to SGI-LINK.
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          If the mandate and approach fit your portfolio, we can walk through
          our systems, risk framework, and track record in more detail.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#3A5E7B] px-6 py-2.5 text-sm font-semibold leading-snug text-white shadow-md shadow-slate-900/15 hover:bg-[#324b63] whitespace-nowrap"
          >
            <span>Request an introductory call</span>
            <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
          </a>
          <a
            href="/fund-deck"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/70 px-6 py-2.5 text-sm font-medium leading-snug text-slate-700 backdrop-blur-sm hover:border-[#8DB7E8] whitespace-nowrap"
          >
            <span>Download fund deck</span>
          </a>
        </div>

        <p className="flex items-start justify-center gap-2 text-[11px] leading-relaxed text-slate-500">
          <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#3A5E7B]" />
          <span>
            SGI-LINK is available only to qualified and accredited investors.
            This page is for informational purposes only and does not constitute
            an offer to sell or a solicitation of an offer to buy any security.
          </span>
        </p>
      </div>
    </section>
  );
}
