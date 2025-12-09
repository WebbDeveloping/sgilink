// app/about/page.jsx

import { Globe2, ShieldCheck, Users2, LineChart, Layers } from "lucide-react";
import {
  Eyebrow,
  SectionTitle,
  BodyText,
  SmallMuted,
} from "@/components/atoms";
import { IconEyebrow, InfoCard } from "@/components/molecules";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <AboutHeroSection />
      <StorySection />
      <PhilosophySection />
      <InvestorFitSection />
      <PrinciplesSection />
    </main>
  );
}

/** HERO – minimal, editorial, no gradient, SGI slash + blue underline */
function AboutHeroSection() {
  return (
    <section className="relative border-b border-border bg-surface py-24 sm:py-32">
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        {/* Overline */}
        <Eyebrow className="mb-4 inline-block text-text-muted">
          About SGI-LINK
        </Eyebrow>

        {/* Headline with blue underline */}
        <SectionTitle
          as="h1"
          className="text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl"
        >
          The firm behind{" "}
          <span className="relative inline-block">
            <span className="absolute inset-x-0 bottom-1 h-2 rounded-full bg-section-blue" />
            <span className="relative">our systematic engine</span>
          </span>
          .
        </SectionTitle>

        {/* Supporting statement */}
        <BodyText className="mx-auto mt-5 max-w-2xl text-sm text-text-muted sm:text-base">
          SGI-LINK exists to make disciplined, rules-driven trading systems
          usable by long-term investors — grounded in real-market research and a
          risk-first philosophy.
        </BodyText>
      </div>
    </section>
  );
}

/** STORY – calm, two-column but low-UI, more narrative */
function StorySection() {
  return (
    <section className="border-b border-border bg-surface py-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-start">
        {/* Left narrative */}
        <div className="max-w-xl space-y-4">
          <IconEyebrow
            icon={Layers}
            label="Our Story"
            className="mb-1 text-text-muted"
          />

          <SectionTitle>
            Built on years of real-market testing, not a single backtest.
          </SectionTitle>

          <BodyText className="text-text-muted">
            SGI began as a research effort into how systematic FX and
            commodities strategies behave in live conditions — across liquidity
            environments, volatility regimes, and execution partners. Many ideas
            never made it past testing. A smaller set did.
          </BodyText>

          <BodyText className="text-text-muted">
            SGI-LINK is the institutional expression of that journey: a vehicle
            built around the systems, controls, and infrastructure that proved
            durable enough to run real capital, not just attractive enough to
            present in a slide deck.
          </BodyText>
        </div>

        {/* Right supporting points */}
        <div className="space-y-6 text-sm leading-relaxed text-text-muted">
          <div>
            <p className="mb-2 text-sm font-semibold text-brand">
              From broad experimentation to a focused mandate
            </p>
            <p>
              Early on, SGI explored a wide range of models and timeframes. Over
              time, the team narrowed its focus to approaches that consistently
              handled slippage, spreads, and real-world frictions in FX and
              commodities — not just in simulation, but in production.
            </p>
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold text-brand">
              Infrastructure built to support real investors
            </p>
            <p>
              Around the research came execution tooling, risk monitoring, and
              reporting built for accountability: the same infrastructure that
              supports SGI now underpins SGI-LINK, so investors access the
              process as it actually operates day to day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** PHILOSOPHY – blue background for visual break, simple content */
function PhilosophySection() {
  return (
    <section className="border-b border-border-blue bg-section-blue py-24">
      <div className="mx-auto max-w-5xl space-y-10 px-4 sm:px-6">
        <div className="max-w-xl space-y-4">
          <IconEyebrow
            icon={ShieldCheck}
            label="Philosophy"
            className="text-brand-body-alt"
            iconClassName="text-brand"
          />

          <SectionTitle className="text-brand-on">
            Technology-forward, deliberately conservative.
          </SectionTitle>

          <BodyText className="text-brand-on-soft">
            SGI-LINK uses modern quantitative tools to seek attractive,
            risk-aware returns — but our posture is intentionally measured. We
            prefer robustness over cleverness, and clear explanations over
            opaque models.
          </BodyText>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-2 text-sm leading-relaxed text-brand-on-soft">
            <Eyebrow className="text-brand-chip">Risk first</Eyebrow>
            <BodyText className="text-brand-on-soft text-sm sm:text-base">
              Position sizing, drawdown limits, and liquidity considerations
              come before return targets. Systems are evaluated on how they
              behave when markets are difficult, not just when conditions are
              favorable.
            </BodyText>
          </div>

          <div className="space-y-2 text-sm leading-relaxed text-brand-on-soft">
            <Eyebrow className="text-brand-chip">Rules over emotion</Eyebrow>
            <BodyText className="text-brand-on-soft text-sm sm:text-base">
              Entries, exits, and de-risking are governed by predefined rules.
              This keeps the process consistent and helps avoid the emotional
              decision-making that often undermines long-term results.
            </BodyText>
          </div>

          <div className="space-y-2 text-sm leading-relaxed text-brand-on-soft">
            <Eyebrow className="text-brand-chip">
              Transparency over marketing
            </Eyebrow>
            <BodyText className="text-brand-on-soft text-sm sm:text-base">
              We focus on realistic expectations and plain language around risk,
              limitations, and process. If we can&apos;t explain a system in
              straightforward terms, it doesn&apos;t belong in the portfolio.
            </BodyText>
          </div>
        </div>
      </div>
    </section>
  );
}

/** INVESTOR FIT – simple two-column layout, light structure */
function InvestorFitSection() {
  return (
    <section className="border-b border-border bg-surface py-24">
      <div className="mx-auto max-w-5xl space-y-10 px-4 sm:px-6">
        <div className="max-w-xl space-y-3">
          <IconEyebrow
            icon={Users2}
            label="Who SGI-LINK is built for"
            className="text-text-muted"
            iconClassName="text-brand"
          />

          <SectionTitle>Designed for patient, qualified capital.</SectionTitle>

          <BodyText className="text-sm text-text-muted sm:text-base">
            SGI-LINK is intended for investors who value structure and
            repeatability — and who are comfortable judging strategies by their
            risk discipline and process, not just by a single return number.
          </BodyText>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          {/* Left: typical investor profile */}
          <div className="space-y-5 text-sm leading-relaxed text-text-muted">
            <div>
              <Eyebrow className="mb-1 text-text-muted">
                Typical investors
              </Eyebrow>
              <BodyText className="text-sm text-text-muted sm:text-base">
                Accredited and qualified investors, institutions, and family
                offices looking to add a systematic FX and commodities sleeve
                within a broader alternatives allocation.
              </BodyText>
            </div>

            <div>
              <Eyebrow className="mb-1 text-text-muted">Time horizon</Eyebrow>
              <BodyText className="text-sm text-text-muted sm:text-base">
                Multi-year capital with room for normal drawdowns along the way,
                and a focus on how the strategy behaves over cycles, not single
                months or quarters.
              </BodyText>
            </div>

            <div>
              <Eyebrow className="mb-1 text-text-muted">
                Role in a portfolio
              </Eyebrow>
              <BodyText className="text-sm text-text-muted sm:text-base">
                A rules-based engine that complements existing managers and
                reduces reliance on discretionary macro calls or individual
                security selection.
              </BodyText>
            </div>
          </div>

          {/* Right: alignment + “may not be a fit” */}
          <div className="space-y-6 text-sm leading-relaxed text-text-muted">
            <div>
              <Eyebrow className="mb-2 text-text-muted">Alignment</Eyebrow>
              <BodyText className="text-sm text-text-muted sm:text-base">
                SGI invests alongside clients and operates under the same risk
                framework and reporting structure, so incentives stay aligned
                around process and risk, not just headline performance.
              </BodyText>
            </div>

            <InfoCard title="May not be a fit if...">
              <ul className="mt-1 space-y-1.5 text-xs leading-relaxed text-text">
                <li>• You require daily liquidity and zero drawdowns.</li>
                <li>
                  • You view systematic strategies as &quot;black boxes&quot;.
                </li>
                <li>
                  • You prefer highly concentrated, discretionary or
                  event-driven exposures.
                </li>
              </ul>
            </InfoCard>

            <SmallMuted>
              Additional details on minimums, liquidity terms, and onboarding
              are available in formal offering documents and on the investor
              information page.
            </SmallMuted>
          </div>
        </div>
      </div>
    </section>
  );
}

/** PRINCIPLES – simple grid, minimal chrome, consistent spacing */
function PrinciplesSection() {
  const principles = [
    {
      label: "Discipline",
      body: "We favor robust, repeatable processes over prediction or market timing.",
    },
    {
      label: "Transparency",
      body: "We speak plainly about risk, return, and limitations — no shortcuts, no hype.",
    },
    {
      label: "Alignment",
      body: "We invest alongside clients and live under the same risk framework.",
    },
    {
      label: "Long-term focus",
      body: "We design systems, infrastructure, and relationships to endure across regimes.",
    },
  ];

  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-5xl space-y-10 px-4 sm:px-6">
        <div className="max-w-2xl space-y-3">
          <IconEyebrow
            icon={ShieldCheck}
            label="Core Principles"
            className="text-text-muted"
            iconClassName="text-brand"
          />

          <SectionTitle>The ideas SGI-LINK is built on.</SectionTitle>

          <BodyText className="text-sm text-text-muted sm:text-base">
            Behind the technology is a simple set of beliefs about how capital
            should be managed for long-term investors.
          </BodyText>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {principles.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-border-strong bg-section-warm/60 px-5 py-5 text-sm leading-relaxed text-text-muted"
            >
              <p className="mb-2 text-sm font-semibold text-brand">
                {item.label}
              </p>
              <p className="text-xs sm:text-sm">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
