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

/** ENHANCED: blue Fund Overview section with image + hover cards */
function FundSnapshotSection() {
  const items = [
    {
      title: "Mandate",
      body: "Provide disciplined, rules-based exposure to SGI’s trading systems with conservative leverage and defined drawdown controls.",
      icon: ShieldCheck,
    },
    {
      title: "Edge",
      body: "Edge emerges from the combination of research, execution, and risk tooling — not any single ‘hero’ model.",
      icon: Layers,
    },
    {
      title: "Alignment",
      body: "SGI invests alongside clients under the same risk framework, fees, and reporting structure.",
      icon: Users2,
    },
  ];

  return (
    <section className="relative border-t border-[#D5E3F6] bg-[#E9F2FF] py-16">
      {/* soft overlay texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.5),_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#214266] leading-snug">
              <Layers className="h-3.5 w-3.5 text-[#3A5E7B]" />
              <span>Fund Overview</span>
            </p>
            <h2 className="text-2xl font-semibold text-[#10243A] leading-snug md:text-3xl">
              A focused vehicle for SGI’s systems.
            </h2>
            <p className="text-sm text-[#1F3B57] leading-relaxed">
              SGI-LINK exists to channel capital into SGI’s proprietary trading
              systems — a single mandate with a tightly defined role in a
              broader portfolio.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#355477]">
            <span className="rounded-full border border-white/60 bg-white/70 px-3 py-1">
              FX &amp; Commodities
            </span>
            <span className="rounded-full border border-white/60 bg-white/70 px-3 py-1">
              Systematic only
            </span>
            <span className="rounded-full border border-white/60 bg-white/70 px-3 py-1">
              Risk-first mandate
            </span>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-[minmax(0,1.8fr)_minmax(0,1.2fr)] md:items-stretch">
          {/* Cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {items.map(({ title, body, icon: Icon }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/75 p-5 shadow-sm shadow-slate-900/10 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-slate-900/15"
              >
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#8DB7E8] via-[#3A5E7B] to-[#8DB7E8] opacity-0 transition group-hover:opacity-100" />
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#E2EEFF] text-[#3A5E7B]">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="mb-1.5 text-sm font-semibold text-slate-900 leading-snug">
                  {title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-700">{body}</p>
              </article>
            ))}

            {/* Small accent metric card – same glass style */}
            <article className="flex flex-col justify-between rounded-2xl border border-white/60 bg-white/80 p-5 text-xs leading-relaxed text-[#1F3B57] shadow-sm shadow-slate-900/10 backdrop-blur-sm">
              <p className="font-semibold text-[#10243A]">
                Built for a calm, rules-driven sleeve within a diversified
                alternatives allocation.
              </p>
              <dl className="mt-4 grid grid-cols-2 gap-2">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.18em] text-[#5C7AA4]">
                    Target role
                  </dt>
                  <dd className="text-[13px] font-semibold">
                    Systematic diversifier
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.18em] text-[#5C7AA4]">
                    Instrument set
                  </dt>
                  <dd className="text-[13px] font-semibold">
                    FX majors &amp; commodities
                  </dd>
                </div>
              </dl>
            </article>
          </div>

          {/* Image / visual card */}
          <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/85 shadow-lg shadow-slate-900/10 backdrop-blur-sm">
            <div
              className="h-48 bg-cover bg-center sm:h-56"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1200')",
              }}
            />
            <div className="space-y-3 px-6 pb-6 pt-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#355477]">
                Position in a portfolio
              </p>
              <p className="text-sm font-semibold text-[#10243A] leading-snug">
                A single access point to SGI&apos;s trading systems, presented
                in plain language and institutional-quality reporting.
              </p>
              <ul className="mt-2 space-y-1 text-xs text-[#23405F] leading-relaxed">
                <li>• Systematic, market-agnostic approach</li>
                <li>• Designed to sit alongside existing managers</li>
                <li>• Built to be explained in one slide</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <a
            href="/fund-overview"
            className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.18em] text-[#1F3B57] hover:text-[#14273A] whitespace-nowrap leading-snug"
          >
            <span>View full fund overview</span>
            <ArrowRight className="ml-1.5 h-3.5 w-3.5 shrink-0" />
          </a>

          <p className="max-w-xl text-[11px] leading-relaxed text-[#436189]">
            This summary is intentionally high-level. Full details on structure,
            terms, and risks are contained in formal offering documents.
          </p>
        </div>
      </div>
    </section>
  );
}

/** ENHANCED: Strategy timeline layout */
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
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-start">
        <div className="max-w-xl space-y-5">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 leading-snug">
            <ShieldCheck className="h-3.5 w-3.5 text-[#3A5E7B]" />
            <span>Strategy &amp; Risk</span>
          </p>
          <h2 className="text-2xl font-semibold text-slate-900 leading-snug md:text-3xl">
            Diversified, rules-driven systems.
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            Multiple independent strategies, each with defined roles and risk
            budgets, are combined into a single portfolio designed to stay
            durable across regimes — without relying on market calls.
          </p>

          <div className="flex flex-wrap gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-600">
            <span className="rounded-full border border-[#DDD2BD] bg-[#F7F5F0] px-3 py-1">
              Swing &amp; position horizons
            </span>
            <span className="rounded-full border border-[#DDD2BD] bg-[#F7F5F0] px-3 py-1">
              Directional &amp; relative value
            </span>
            <span className="rounded-full border border-[#DDD2BD] bg-[#F7F5F0] px-3 py-1">
              Predefined risk budgets
            </span>
          </div>

          <a
            href="/strategy"
            className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.18em] text-[#3A5E7B] hover:text-[#2c4157] whitespace-nowrap leading-snug"
          >
            <span>Learn more about our strategy</span>
            <ArrowRight className="ml-1.5 h-3.5 w-3.5 shrink-0" />
          </a>
        </div>

        {/* Timeline */}
        <div className="relative flex-1">
          <div className="pointer-events-none absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-[#D5E3F6] via-[#ECE7DC] to-transparent sm:block" />
          <div className="space-y-4">
            {steps.map(({ label, title, body, icon: Icon }, idx) => (
              <article
                key={label}
                className="relative rounded-2xl border border-[#ECE7DC] bg-[#F7F5F0] p-4 pl-10 sm:p-5 sm:pl-12 shadow-sm shadow-slate-900/5"
              >
                <div className="absolute left-2 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-[#D5E3F6] bg-white text-[#3A5E7B] shadow-sm">
                  <Icon className="h-4 w-4" />
                </div>
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600 leading-snug">
                  {label}
                </p>
                <p className="mb-1.5 text-sm text-[#3A5E7B] leading-snug">
                  {title}
                </p>
                <p className="text-xs leading-relaxed text-slate-700">{body}</p>
                {idx === 0 && (
                  <p className="mt-2 text-[11px] text-slate-500 leading-relaxed">
                    Research is version-controlled and reproducible — the same
                    codebase powers both backtests and live systems.
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** ENHANCED: tech stack with chips + stacked cards */
function TechnologySection() {
  const layers = [
    {
      label: "Execution layer",
      body: "Order routing and venue selection tuned for FX and futures liquidity, with emphasis on stability over hyper-optimization.",
      icon: Globe2,
    },
    {
      label: "Model layer",
      body: "Portfolio of independently tested strategies with clear roles, versioning, and deprecation rules.",
      icon: Cpu,
    },
    {
      label: "Risk layer",
      body: "Position limits, max-loss thresholds, circuit breakers, and automatic de-risking logic across systems.",
      icon: ShieldCheck,
    },
    {
      label: "Reporting layer",
      body: "Investor reporting aligned with institutional expectations, including risk and drawdown context.",
      icon: FileText,
    },
  ];

  return (
    <section className="relative border-t border-[#ECE7DC] bg-[#F4F2EC] py-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/60 to-transparent" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-start">
        <div className="max-w-xl space-y-5">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 leading-snug">
            <Cpu className="h-3.5 w-3.5 text-[#3A5E7B]" />
            <span>Technology Stack</span>
          </p>
          <h2 className="text-2xl font-semibold text-slate-900 leading-snug md:text-3xl">
            Infrastructure built for live markets.
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            Purpose-built execution, monitoring, and risk tooling support our
            systems in live FX and futures markets — not just in research
            notebooks.
          </p>

          <div className="mt-2 flex flex-wrap gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-600">
            <span className="rounded-full border border-[#D4C8AF] bg-[#F7F5F0] px-3 py-1">
              Live risk dashboards
            </span>
            <span className="rounded-full border border-[#D4C8AF] bg-[#F7F5F0] px-3 py-1">
              Automated checks
            </span>
            <span className="rounded-full border border-[#D4C8AF] bg-[#F7F5F0] px-3 py-1">
              Same stack: backtest → live
            </span>
          </div>

          <a
            href="/technology"
            className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.18em] text-[#3A5E7B] hover:text-[#2c4157] whitespace-nowrap leading-snug"
          >
            <span>See technology overview</span>
            <ArrowRight className="ml-1.5 h-3.5 w-3.5 shrink-0" />
          </a>
        </div>

        <div className="flex-1">
          <div className="grid gap-4 sm:grid-cols-2">
            {layers.map(({ label, body, icon: Icon }) => (
              <div
                key={label}
                className="relative overflow-hidden rounded-2xl border border-[#ECE7DC] bg-white/95 p-4 sm:p-5 shadow-sm shadow-slate-900/5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#E4D7BB] via-[#3A5E7B]/40 to-[#E4D7BB]" />
                <p className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600 leading-snug">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F4F2EC] text-[#3A5E7B]">
                    <Icon className="h-3.5 w-3.5 shrink-0" />
                  </span>
                  <span>{label}</span>
                </p>
                <p className="text-xs leading-relaxed text-slate-700">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-dashed border-[#D4C8AF] bg-gradient-to-r from-[#F7F5F0] to-[#F4F2EC] p-4 text-[11px] text-slate-600 leading-relaxed">
            <p className="font-semibold text-slate-800">
              Technology is there to make the process more repeatable — not more
              complicated.
            </p>
            <p className="mt-1.5">
              Every component is built to answer a simple question: “Can we
              explain what&apos;s happening in the portfolio right now, in plain
              language?”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** ENHANCED: Investor fit / not a fit comparison */
function InvestorProfileSection() {
  return (
    <section className="border-t border-[#ECE7DC] bg-white py-16">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6">
        <div className="max-w-xl space-y-3">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 leading-snug">
            <Users2 className="h-3.5 w-3.5 text-[#3A5E7B]" />
            <span>Investor Profile</span>
          </p>
          <h2 className="text-2xl font-semibold text-slate-900 leading-snug md:text-3xl">
            For patient, qualified capital.
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            SGI-LINK is designed for investors who value discipline,
            transparency, and a repeatable process more than short-term
            headlines.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.1fr)] md:items-start">
          <div className="space-y-5 rounded-2xl border border-[#ECE7DC] bg-[#F7F5F0] p-6">
            <h3 className="text-sm font-semibold text-[#3A5E7B] leading-snug">
              Who we typically work with
            </h3>
            <ul className="space-y-3 text-sm text-slate-700 leading-relaxed">
              <li>
                <span className="font-medium text-[#3A5E7B]">
                  Investor type ·
                </span>{" "}
                Accredited and qualified investors, institutions, and family
                offices.
              </li>
              <li>
                <span className="font-medium text-[#3A5E7B]">
                  Time horizon ·
                </span>{" "}
                Multi-year allocation with tolerance for normal drawdowns along
                the way.
              </li>
              <li>
                <span className="font-medium text-[#3A5E7B]">
                  Role in portfolio ·
                </span>{" "}
                Systematic sleeve within a diversified alternatives allocation.
              </li>
            </ul>

            <div className="grid gap-4 pt-3 text-xs text-slate-700 sm:grid-cols-2">
              <div className="rounded-xl border border-dashed border-[#DDD2BD] bg-white/70 p-3">
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                  Works well for
                </p>
                <ul className="space-y-1">
                  <li>• Investors comfortable with rules-based processes</li>
                  <li>
                    • Those wanting non-discretionary FX &amp; commodities
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-dashed border-[#DDD2BD] bg-white/70 p-3">
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                  Typical allocation size
                </p>
                <p>
                  • Part of an alternatives sleeve, not a full-portfolio bet.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-[#F1E0D0] bg-gradient-to-br from-[#FFF9F2] via-white to-[#F7F5F0] p-5 text-xs text-slate-700 leading-relaxed">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600 mb-1.5">
                May not be a fit if...
              </p>
              <ul className="space-y-1.5">
                <li>• You require daily liquidity and zero drawdowns.</li>
                <li>
                  • You view systematic strategies as &quot;black boxes&quot;.
                </li>
                <li>
                  • You prefer discretionary macro or single-name equities.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
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
      </div>
    </section>
  );
}

/** ENHANCED: FAQ cards + side CTA */
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
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6">
        <div className="space-y-3 max-w-xl">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 leading-snug">
            <HelpCircle className="h-3.5 w-3.5 text-[#3A5E7B]" />
            <span>FAQ</span>
          </p>
          <h2 className="text-2xl font-semibold text-slate-900 leading-snug md:text-3xl">
            Common questions, straight answers.
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            A deeper FAQ covers markets traded, risk management, reporting, and
            how SGI-LINK fits into a broader allocation.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] lg:items-start">
          <div className="space-y-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group relative overflow-hidden rounded-2xl border border-[#ECE7DC] bg-white/95 p-4 shadow-sm shadow-slate-900/5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#E4D7BB] via-[#3A5E7B]/40 to-[#E4D7BB] opacity-0 transition group-open:opacity-100" />
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

          <div className="space-y-4 rounded-2xl border border-[#DDD2BD] bg-gradient-to-br from-[#FFF9F2] via-white to-[#F7F5F0] p-5 text-sm leading-relaxed text-slate-700">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 mb-1.5">
              Still have questions?
            </p>
            <p>
              We prefer straightforward conversations over dense documents. A
              short call is often the fastest way to understand whether SGI-LINK
              makes sense for your mandate.
            </p>
            <a
              href="/faq"
              className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.18em] text-[#3A5E7B] hover:text-[#2c4157] whitespace-nowrap leading-snug"
            >
              <span>View full FAQ</span>
              <ArrowRight className="ml-1.5 h-3.5 w-3.5 shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/** ENHANCED: gradient call-to-action card */
function FinalCtaSection() {
  return (
    <section className="border-t border-[#ECE7DC] bg-white py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-[#E4D7BB] bg-gradient-to-br from-[#FFF9F2] via-white to-[#E4F0FF] p-8 text-center shadow-sm shadow-slate-900/10 sm:p-10">
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,_rgba(247,245,240,0.9),_transparent_65%)]" />
          <div className="pointer-events-none absolute -right-16 bottom-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,_rgba(141,183,232,0.35),_transparent_70%)]" />
          <div className="relative space-y-5">
            <h2 className="text-2xl font-semibold text-slate-900 leading-snug md:text-3xl">
              Explore an allocation to SGI-LINK.
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-slate-700 leading-relaxed">
              If the mandate and approach fit your portfolio, we can walk
              through our systems, risk framework, and track record in more
              detail — with as much transparency as possible.
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
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-6 py-2.5 text-sm font-medium leading-snug text-slate-700 backdrop-blur-sm hover:border-[#8DB7E8] whitespace-nowrap"
              >
                <span>Download fund deck</span>
              </a>
            </div>

            <p className="mx-auto flex max-w-2xl items-start justify-center gap-2 text-[11px] leading-relaxed text-slate-500">
              <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#3A5E7B]" />
              <span>
                SGI-LINK is available only to qualified and accredited
                investors. This page is for informational purposes only and does
                not constitute an offer to sell or a solicitation of an offer to
                buy any security.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
