// app/why-sgi/page.jsx

import {
  ShieldCheck,
  Cpu,
  Layers,
  CheckCircle2,
  Users2,
  Globe2,
  LineChart,
} from "lucide-react";
import {
  Eyebrow,
  SectionTitle,
  BodyText,
  SmallMuted,
} from "@/components/atoms";
import { IconEyebrow, InfoCard } from "@/components/molecules";

export default function WhySgiPage() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <WhySgiHeroSection />
      <OverviewSection />
      <DifferentiatorsSection />
      <PassiveInvestorsSection />
      <FxCommoditiesSection />
    </main>
  );
}

/** HERO – matches About/Team/Strategy hero style */
function WhySgiHeroSection() {
  return (
    <section className="relative border-b border-border bg-surface py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
        <IconEyebrow
          icon={ShieldCheck}
          label="Why SGI-LINK"
          className="mb-4 inline-flex items-center justify-center text-text-muted"
          iconClassName="text-brand"
        />

        <SectionTitle
          as="h1"
          className="text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl"
        >
          Why investors choose{" "}
          <span className="relative inline-block">
            <span className="absolute inset-x-0 bottom-1 h-2 rounded-full bg-section-blue" />
            <span className="relative">SGI-LINK</span>
          </span>
          .
        </SectionTitle>

        <BodyText className="mx-auto mt-5 max-w-3xl text-sm text-text-muted sm:text-base">
          SGI-LINK is a specialized investment fund that deploys capital into
          SGI&apos;s proprietary algorithmic trading systems — built to deliver
          consistent, data-driven returns with conservative risk discipline and
          clear communication around what investors should realistically expect.
        </BodyText>

        <SmallMuted className="mx-auto mt-3 max-w-2xl text-text-muted">
          Our mission: to provide reliable, technology-powered returns by
          deploying capital into SGI&apos;s systems, ensuring stability through
          diversification, automation, and rigorous quantitative oversight.
        </SmallMuted>
      </div>
    </section>
  );
}

/** OVERVIEW – what SGI-LINK does + who it’s for */
function OverviewSection() {
  return (
    <section className="border-b border-border bg-surface py-24">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-start">
          {/* Left: clear description */}
          <div className="space-y-4">
            <IconEyebrow
              icon={Cpu}
              label="What SGI-LINK Does"
              className="text-text-muted"
              iconClassName="text-brand"
            />

            <SectionTitle>
              A specialized fund built around SGI&apos;s own systems.
            </SectionTitle>

            <BodyText className="text-sm text-text-muted sm:text-base">
              SGI-LINK focuses exclusively on deploying capital into SGI&apos;s
              proprietary algorithmic trading systems. These systems are
              developed, tested, and refined in-house, supported by risk
              frameworks and trading infrastructure designed to perform across a
              range of FX and commodities environments.
            </BodyText>

            <BodyText className="text-sm text-text-muted sm:text-base">
              The result is a diversified, fully automated portfolio engineered
              for consistent, hands-off growth — where technology does the
              day-to-day work, and investors judge us by process and risk
              behavior, not just headline returns.
            </BodyText>
          </div>

          {/* Right: mission + target audience */}
          <div className="space-y-4">
            <InfoCard title="Mission">
              <BodyText className="text-xs text-text-muted sm:text-sm">
                Our mission is to provide investors with reliable,
                technology-powered returns by deploying capital into SGI&apos;s
                proprietary algorithmic trading systems, ensuring stable
                performance through diversification, automation, and rigorous
                quantitative oversight.
              </BodyText>
            </InfoCard>

            <InfoCard title="Who SGI-LINK is built for">
              <BodyText className="text-xs text-text-muted sm:text-sm">
                SGI-LINK is designed for accredited investors and high net worth
                individuals (including QUEP investors) who want above-average
                results powered by modern quant technology — without needing to
                trade, rebalance, or time markets themselves.
              </BodyText>
              <SmallMuted className="mt-2 text-text-muted">
                The fund is structured for passive, long-term capital that
                values structure, transparency, and risk discipline.
              </SmallMuted>
            </InfoCard>
          </div>
        </div>
      </div>
    </section>
  );
}

/** DIFFERENTIATORS – core reasons “Why SGI” */
function DifferentiatorsSection() {
  const differentiators = [
    {
      title: "Years of real testing",
      icon: Layers,
      body: "SGI was built on years of real-world testing across FX and commodities algorithms — not just one impressive backtest. Many ideas were discarded. The systems that remain reflect what survived live trading, liquidity shocks, and changing regimes.",
    },
    {
      title: "Conservative, transparent approach",
      icon: ShieldCheck,
      body: "We combine advanced quantitative tools with a conservative risk posture and plain-language communication. No performance promises, no marketing spin — just realistic discussions about risk, drawdowns, and expected behavior.",
    },
    {
      title: "Modern tech, traditional discipline",
      icon: Cpu,
      body: "The portfolio is powered by automation, data pipelines, and algorithmic execution — but governed by traditional risk discipline, position sizing, and clear guardrails around leverage and drawdowns.",
    },
    {
      title: "Realistic expectations",
      icon: CheckCircle2,
      body: "Our materials emphasize how the strategy behaves in different environments, not just best-case scenarios. We spend as much time discussing volatility, normal drawdowns, and periods of underperformance as we do return potential.",
    },
    {
      title: "Built for passive investors",
      icon: Users2,
      body: "SGI-LINK is designed for investors who want a structured, rules-based engine working in the background. No day-to-day decisions, no market timing — just a consistent process that runs whether markets are calm or noisy.",
    },
    {
      title: "FX & commodities expertise",
      icon: Globe2,
      body: "Our systems focus on major FX and selected commodities where liquidity, trading hours, and microstructure support systematic strategies. That specialization is the product of years spent understanding how these markets really trade.",
    },
  ];

  return (
    <section className="border-b border-border-blue bg-section-blue py-24">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6">
        <div className="max-w-3xl space-y-3">
          <IconEyebrow
            icon={Layers}
            label="What Makes SGI-LINK Different"
            className="text-brand-body-alt"
            iconClassName="text-brand"
          />

          <SectionTitle className="text-brand-on">
            A differentiated approach to systematic investing.
          </SectionTitle>

          <BodyText className="text-sm text-brand-on-soft sm:text-base">
            Many systematic funds point to technology. We focus on where that
            technology came from, how it&apos;s governed, and how honestly we
            talk about what it can and can&apos;t do. These are the principles
            that shape SGI-LINK.
          </BodyText>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border-blue bg-surface/90 p-5 text-sm leading-relaxed text-brand-on-soft shadow-sm"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-chip-blue text-brand">
                  <item.icon className="h-4 w-4" />
                </span>
                <p className="text-sm font-semibold text-brand-on">
                  {item.title}
                </p>
              </div>
              <BodyText className="text-xs text-brand-on-soft sm:text-sm">
                {item.body}
              </BodyText>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** BUILT FOR PASSIVE INVESTORS – reinforces audience + expectations */
function PassiveInvestorsSection() {
  return (
    <section className="border-b border-border bg-surface py-24">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6">
        <div className="max-w-3xl space-y-3">
          <IconEyebrow
            icon={Users2}
            label="Built for Passive Investors"
            className="text-text-muted"
            iconClassName="text-brand"
          />
          <SectionTitle>Hands-off by design, not by neglect.</SectionTitle>
          <BodyText className="text-sm text-text-muted sm:text-base">
            SGI-LINK is built for investors who want a thoughtful, rules-based
            engine running in the background — not a trading hobby. We aim to
            deliver above-average results without requiring constant decisions,
            logins, or macro calls from our investors.
          </BodyText>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <InfoCard title="How it behaves in a portfolio">
            <BodyText className="text-xs text-text-muted sm:text-sm">
              The strategy is intended to be a systematic sleeve within a
              broader alternatives or growth allocation. It runs continuously,
              with risk limits and diversification designed to complement other
              managers rather than compete for the same exposures.
            </BodyText>
            <SmallMuted className="mt-2 text-text-muted">
              Investors judge the strategy over cycles, not single months —
              including how it behaves when markets are difficult.
            </SmallMuted>
          </InfoCard>

          <InfoCard title="What you can expect from us">
            <BodyText className="text-xs text-text-muted sm:text-sm">
              You can expect structured reporting, candid commentary on
              drawdowns and regime changes, and a consistent focus on risk and
              process. You should not expect promises of one specific number or
              a guarantee of smooth returns.
            </BodyText>
            <SmallMuted className="mt-2 text-text-muted">
              We want investors who are comfortable with realistic expectations,
              not marketing headlines.
            </SmallMuted>
          </InfoCard>
        </div>
      </div>
    </section>
  );
}

/** FX / COMMODITIES EXPERTISE – specialization + real testing */
function FxCommoditiesSection() {
  return (
    <section className="bg-section-warm py-24">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6">
        <div className="max-w-3xl space-y-3">
          <IconEyebrow
            icon={Globe2}
            label="FX & Commodities Expertise"
            className="text-text-muted"
            iconClassName="text-brand"
          />
          <SectionTitle>Specialized where systems have an edge.</SectionTitle>
          <BodyText className="text-sm text-text-muted sm:text-base">
            SGI&apos;s systems focus on FX and commodities because years of
            testing have shown where models are robust — and where they
            aren&apos;t. That experience informs which markets we trade, how we
            size them, and how we respond when conditions change.
          </BodyText>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <InfoCard title="Years of real-market testing">
            <BodyText className="text-xs text-text-muted sm:text-sm">
              Before SGI-LINK, SGI spent years running, adjusting, and sometimes
              retiring FX and commodities algorithms in live conditions. The
              current portfolio reflects what survived real spreads, slippage,
              and unexpected events — not just attractive backtests.
            </BodyText>
          </InfoCard>

          <InfoCard title="Risk-first implementation">
            <BodyText className="text-xs text-text-muted sm:text-sm">
              Position sizing, drawdown limits, and liquidity thresholds are
              defined first. Return expectations are then built around those
              constraints, not the other way around. We would rather be
              conservative and durable than aggressive and fragile.
            </BodyText>
          </InfoCard>

          <InfoCard title="Accountability and transparency">
            <BodyText className="text-xs text-text-muted sm:text-sm">
              We are explicit about where the strategy works best, where it may
              struggle, and how we monitor for regime shifts. That transparency
              is as central to SGI-LINK as the technology itself.
            </BodyText>
            <SmallMuted className="mt-2 text-text-muted">
              Detailed performance breakdowns and methodology documents are
              available to accredited and qualified investors during diligence.
            </SmallMuted>
          </InfoCard>
        </div>
      </div>
    </section>
  );
}
