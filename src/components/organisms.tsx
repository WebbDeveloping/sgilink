// app/sgi-ui/organisms.tsx
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

import {
  Eyebrow,
  SectionTitle,
  BodyText,
  SmallMuted,
  PrimaryButton,
  PrimaryLinkButton,
  SecondaryLinkButton,
  Pill,
} from "./atoms";
import {
  IconEyebrow,
  OverviewMetric,
  IconStatCard,
  TimelineStepCard,
  TechLayerCard,
  FaqItem,
  CtaLink,
  InfoCard,
} from "./molecules";

/** HERO – editorial two-column */
export function BriefHero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-bg">
      {/* Soft sunlight / sand glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,242,236,0.9),_transparent_65%)]" />

      {/* Soft blue ambient glow – gently floating */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(141,183,232,0.35),_transparent_70%)] sgi-animate-soft-orbit" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-4 py-24 sm:px-6 sm:py-28 lg:flex-row lg:items-center lg:gap-20">
        {/* Left copy */}
        <div className="max-w-xl space-y-6 sgi-animate-fade-in-up">
          <Eyebrow>SGI-LINK · Private Algorithmic Fund</Eyebrow>

          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-text sm:text-4xl md:text-5xl">
            Systematic returns.
            <span className="relative ml-2 inline-block">
              <span className="absolute inset-x-0 bottom-1 h-2 rounded-full bg-brand-soft/20" />
              <span className="relative">Simple story.</span>
            </span>
          </h1>

          <BodyText className="text-text-muted">
            SGI-LINK allocates capital to a single, disciplined engine of
            proprietary FX and commodities strategies — built to compound calmly
            in the background of a diversified portfolio.
          </BodyText>

          <div className="flex flex-wrap items-center gap-3">
            <PrimaryButton>
              <FileText className="mr-2 h-4 w-4 shrink-0" />
              <span>Request fund deck</span>
            </PrimaryButton>

            <SecondaryLinkButton href="/strategy" className="px-5">
              <span>View strategy overview</span>
              <ArrowRight className="ml-1.5 h-4 w-4 shrink-0" />
            </SecondaryLinkButton>
          </div>

          <div className="flex max-w-md items-start gap-2">
            <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" />
            <SmallMuted>
              For qualified and accredited investors only. This is not an offer
              or solicitation to buy or sell any security.
            </SmallMuted>
          </div>
        </div>

        {/* Right: snapshot card */}
        <div className="flex-1 sgi-animate-fade-in-up-delay">
          <div className="mx-auto max-w-md rounded-3xl border border-border-card bg-surface/80 p-6 shadow-xl shadow-brand-on/5 backdrop-blur-sm">
            <Eyebrow className="mb-4">Fund at a glance</Eyebrow>

            <dl className="grid grid-cols-2 gap-4 text-sm">
              <OverviewMetric label="Core focus" value="FX &amp; Commodities" />
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

            <SmallMuted className="mt-4 text-text-muted/80">
              Past performance does not guarantee future results. All investing
              involves risk, including the potential loss of principal.
            </SmallMuted>
          </div>
        </div>
      </div>
    </section>
  );
}

/** FUND SNAPSHOT – blue section */
export function FundSnapshotSection() {
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
    <section className="relative border-b border-border-blue bg-section-blue py-24">
      {/* Removed duplicate radial gradient to keep only the hero special */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          {/* Left text block – primary fade */}
          <div className="max-w-2xl space-y-3 sgi-section-fade-1">
            <IconEyebrow
              icon={Layers}
              label="Fund Overview"
              className="text-text-soft"
            />
            <SectionTitle className="text-text">
              A focused vehicle for SGI’s systems.
            </SectionTitle>
            <BodyText className="text-text-soft">
              SGI-LINK channels capital into SGI’s proprietary trading systems
              with a clear role inside a broader allocation. The Strategy page
              goes deeper into mandate, markets traded, and portfolio
              construction.
            </BodyText>
          </div>

          {/* Chips – secondary fade */}
          <div className="flex flex-wrap gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-chip sgi-section-fade-2">
            <span className="rounded-full border border-border-blue bg-surface/80 px-3 py-1">
              FX &amp; Commodities
            </span>
            <span className="rounded-full border border-border-blue bg-surface/80 px-3 py-1">
              Systematic only
            </span>
            <span className="rounded-full border border-border-blue bg-surface/80 px-3 py-1">
              Risk-first mandate
            </span>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-[minmax(0,1.8fr)_minmax(0,1.2fr)] md:items-stretch">
          {/* Cards – fade as a block */}
          <div className="grid gap-5 sm:grid-cols-2 sgi-section-fade-2">
            {items.map((item) => (
              <IconStatCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                body={item.body}
              />
            ))}

            {/* Small accent metric card */}
            <article className="flex flex-col justify-between rounded-2xl border border-border-card bg-surface/85 p-5 text-xs leading-relaxed text-brand-body-alt shadow-sm shadow-brand-on/10 backdrop-blur-sm">
              <p className="font-semibold text-text">
                Built for a calm, rules-driven sleeve within a diversified
                alternatives allocation.
              </p>
              <dl className="mt-4 grid grid-cols-2 gap-2">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.18em] text-brand-label">
                    Target role
                  </dt>
                  <dd className="text-[13px] font-semibold">
                    Systematic diversifier
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.18em] text-brand-label">
                    Instrument set
                  </dt>
                  <dd className="text-[13px] font-semibold">
                    FX majors &amp; commodities
                  </dd>
                </div>
              </dl>
            </article>
          </div>

          {/* Image / visual card – tertiary fade */}
          <div className="relative overflow-hidden rounded-3xl border border-border-card bg-surface/85 shadow-lg shadow-brand-on/10 backdrop-blur-sm sgi-section-fade-3">
            <div
              className="h-48 bg-cover bg-center sm:h-56"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1200')",
              }}
            />
            <div className="space-y-3 px-6 pb-6 pt-4 text-xs leading-relaxed text-brand-body-alt">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-chip">
                Position in a portfolio
              </p>
              <p className="text-sm font-semibold text-text leading-snug">
                A single access point to SGI&apos;s trading systems, presented
                in plain language and institutional-quality reporting.
              </p>
              <ul className="mt-2 space-y-1">
                <li>• Systematic, market-agnostic approach</li>
                <li>• Designed to sit alongside existing managers</li>
                <li>• Built to be explained in one slide</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom row – gentle fade */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-[11px] leading-relaxed sgi-section-fade-3">
          <a
            href="/strategy"
            className="inline-flex items-center whitespace-nowrap font-semibold uppercase tracking-[0.18em] text-text-soft hover:text-text"
          >
            <span>Read the full strategy overview</span>
            <ArrowRight className="ml-1.5 h-3.5 w-3.5 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}

/** STRATEGY – centered editorial layout with soft abstract background */
export function StrategySection() {
  const steps = [
    {
      label: "1 · Research",
      title: "Systematic idea pipeline",
      body: "New ideas are stress-tested across instruments, timeframes, and regimes before capital is deployed.",
      icon: FileText,
      extra:
        "Research is version-controlled and reproducible — the same codebase powers both backtests and live systems.",
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
    <section className="relative overflow-hidden border-b border-border bg-surface py-28">
      {/* Background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/images/5.png')",
        }}
      />

      {/* Optional white overlay to keep text readable */}
      {/* <div className="absolute inset-0 z-0 bg-white/60 backdrop-blur-[2px]" /> */}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        {/* Eyebrow */}
        <div className="flex justify-center">
          <IconEyebrow icon={ShieldCheck} label="Strategy & Risk" />
        </div>

        {/* Title */}
        <SectionTitle className="mt-4 text-center">
          Diversified, rules-driven systems.
        </SectionTitle>

        {/* Intro text */}
        <BodyText className="mt-6 max-w-2xl mx-auto text-center">
          Multiple independent strategies, each with defined roles and risk
          budgets, are combined into a single portfolio designed to stay durable
          across regimes — without relying on market calls.
        </BodyText>

        <BodyText className="mt-3 max-w-2xl mx-auto text-text-muted text-center">
          The Strategy page expands on how these systems behave in different
          environments, along with examples of drawdowns and portfolio behavior.
        </BodyText>

        {/* Pills */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
          <Pill className="border-border-strong bg-chip-warm">
            Swing &amp; position horizons
          </Pill>
          <Pill className="border-border-strong bg-chip-warm">
            Directional &amp; relative value
          </Pill>
          <Pill className="border-border-strong bg-chip-warm">
            Predefined risk budgets
          </Pill>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <CtaLink href="/strategy">Learn more about our strategy</CtaLink>
        </div>
      </div>

      {/* Steps */}
      <div className="relative z-10 mx-auto mt-20 max-w-5xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <TimelineStepCard
              key={step.label}
              icon={step.icon}
              label={step.label}
              title={step.title}
              body={step.body}
              extra={step.extra}
              className="text-center sgi-section-fade-2"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/** TECHNOLOGY – warm section */
export function TechnologySection() {
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
    <section className="border-b border-border bg-section-warm py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-start">
        {/* LEFT COPY */}
        <div className="max-w-xl space-y-5">
          <IconEyebrow icon={Cpu} label="Technology Stack" />
          <SectionTitle className="text-text">
            Infrastructure built for live markets.
          </SectionTitle>
          <BodyText>
            Purpose-built execution, monitoring, and risk tooling support our
            systems in live FX and futures markets — not just in research
            notebooks. The Strategy page includes a deeper view of this
            technology and risk stack.
          </BodyText>

          <div className="mt-2 flex flex-wrap gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
            <Pill>Live risk dashboards</Pill>
            <Pill>Automated checks</Pill>
            <Pill>Same stack: backtest → live</Pill>
          </div>

          <CtaLink href="/strategy">See technology &amp; risk details</CtaLink>
        </div>

        {/* RIGHT SIDE GRID */}
        <div className="flex-1">
          <div className="grid gap-4 sm:grid-cols-2">
            {layers.map((layer) => (
              <TechLayerCard
                key={layer.label}
                icon={layer.icon}
                label={layer.label}
                body={layer.body}
              />
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-border-card/80 bg-surface/70 p-4 text-[11px] leading-relaxed text-text-muted shadow-sm shadow-brand-on/5 backdrop-blur-sm">
            <p className="font-semibold text-text">
              Technology exists to make the process more repeatable — not more
              complicated.
            </p>
            <p className="mt-1.5">
              Every component supports a simple principle: we should always be
              able to explain what the portfolio is doing in plain language.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** INVESTOR PROFILE – calm white section */
export function InvestorProfileSection() {
  return (
    <section className="border-b border-border bg-surface py-24">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6">
        <div className="max-w-xl space-y-3">
          <IconEyebrow icon={Users2} label="Investor Profile" />
          <SectionTitle>For patient, qualified capital.</SectionTitle>
          <BodyText>
            SGI-LINK is designed for investors who value discipline,
            transparency, and a repeatable process more than short-term
            headlines.
          </BodyText>
        </div>

        <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.1fr)] md:items-start">
          {/* Left main card */}
          <div className="space-y-5 rounded-2xl border border-border-card/80 bg-surface/70 p-6 text-sm leading-relaxed text-text shadow-sm shadow-brand-on/5 backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-surface hover:shadow-md">
            <h3 className="text-sm font-semibold text-brand leading-snug">
              Who we typically work with
            </h3>
            <ul className="space-y-3">
              <li>
                <span className="font-medium text-brand">Investor type ·</span>{" "}
                Accredited and qualified investors, institutions, and family
                offices.
              </li>
              <li>
                <span className="font-medium text-brand">Time horizon ·</span>{" "}
                Multi-year allocation with tolerance for normal drawdowns along
                the way.
              </li>
              <li>
                <span className="font-medium text-brand">
                  Role in portfolio ·
                </span>{" "}
                Systematic sleeve within a diversified alternatives allocation.
              </li>
            </ul>

            <div className="grid gap-4 pt-3 text-xs text-text sm:grid-cols-2">
              <InfoCard title="Works well for">
                <ul className="space-y-1">
                  <li>• Investors comfortable with rules-based processes</li>
                  <li>
                    • Those wanting non-discretionary FX &amp; commodities
                  </li>
                </ul>
              </InfoCard>
              <InfoCard title="Typical allocation size">
                <p>
                  • Part of an alternatives sleeve, not a full-portfolio bet.
                </p>
              </InfoCard>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-5">
            <div className="rounded-2xl border border-border-card/80 bg-surface/70 p-5 text-xs leading-relaxed text-text shadow-sm shadow-brand-on/5 backdrop-blur-sm">
              <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted">
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

            <div className="space-y-3 text-xs leading-relaxed text-text-muted">
              <CtaLink href="/why-sgi">See why SGI may be a fit</CtaLink>
              <p>
                The Why SGI page expands on our philosophy, conservative
                approach, and how we think about realistic expectations and
                investor alignment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** FAQ – warm section with soft abstract background */
export function FaqTeaserSection() {
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
    <section className="relative border-b border-border py-24 overflow-hidden">
      {/* Background image (VISIBLE NOW) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/3.png')",
        }}
      />

      {/* Warm overlay using your #f4f2ec (bg-section-warm) */}
      <div className="absolute inset-0 z-0 bg-section-blue/85 backdrop-blur-[2px]" />
      {/* adjust opacity: /60 /70 /80 until it feels right */}

      {/* Content on top */}
      <div className="relative z-10 mx-auto max-w-7xl space-y-8 px-4 sm:px-6">
        <div className="max-w-xl space-y-3">
          <IconEyebrow icon={HelpCircle} label="FAQ" />
          <SectionTitle className="text-text">
            Common questions, straight answers.
          </SectionTitle>
          <BodyText>
            The FAQs page digs deeper into markets traded, risk management,
            reporting cadence, and how SGI-LINK fits into a broader allocation.
          </BodyText>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] lg:items-start">
          <div className="space-y-4">
            {faqs.map((item) => (
              <FaqItem key={item.q} question={item.q} answer={item.a} />
            ))}
          </div>

          <div className="space-y-4 rounded-2xl border border-border-strong bg-surface p-5 text-sm leading-relaxed text-text shadow-sm shadow-brand-on/5">
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
              Still have questions?
            </p>
            <p>
              We prefer straightforward conversations over dense documents. A
              short call is often the fastest way to understand whether SGI-LINK
              makes sense for your mandate.
            </p>
            <CtaLink href="/faq">View full FAQ</CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCtaSection() {
  return (
    <section className="relative border-t border-brand-on-soft bg-brand-on py-28 overflow-hidden">
      {/* Subtle depth gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-gradient-to-b from-brand-on-soft/20 via-brand-on to-brand-on"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
        <div className="rounded-3xl border border-border-card bg-surface/5 p-10 shadow-xl shadow-brand-on/40 backdrop-blur-md sm:p-14">
          {/* Title */}
          <h2 className="text-center text-3xl font-semibold tracking-tight text-surface sm:text-4xl">
            Explore an allocation to SGI-LINK
          </h2>

          {/* Supporting text */}
          <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-brand-soft">
            If the mandate and approach fit your broader allocation, we can walk
            through systems, risk engineering, portfolio behavior, and reporting
            in a structured introductory call.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-surface shadow-sm shadow-brand-on/30 transition hover:bg-brand-dark"
            >
              Request an introductory call
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>

            <a
              href="/fund-deck"
              className="inline-flex items-center rounded-full border border-border-card bg-transparent px-6 py-3 text-sm font-semibold text-surface transition hover:bg-surface/10"
            >
              Download fund deck
            </a>
          </div>

          {/* Disclaimer */}
          <div className="mx-auto mt-8 flex max-w-xl items-start justify-center gap-2 text-[11px] leading-relaxed text-brand-soft">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mt-0.5 h-4 w-4 text-brand-soft"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m2 8H7a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2z"
              />
            </svg>
            <span>
              SGI-LINK is available only to qualified and accredited investors.
              This section is informational and does not constitute an offer to
              sell any security.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
