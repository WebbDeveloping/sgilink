// app/live-results/page.jsx
import {
  BarChart3,
  LineChart,
  TrendingUp,
  ShieldCheck,
  CalendarDays,
  Activity,
} from "lucide-react";

import {
  Eyebrow,
  SectionTitle,
  BodyText,
  SmallMuted,
} from "@/components/atoms";
import { IconEyebrow, InfoCard, OverviewMetric } from "@/components/molecules";

export default function LiveResultsPage() {
  const snapshotStats = [
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

  const monthlyReturns = [
    { month: "Jan", value: "0.0%" },
    { month: "Feb", value: "0.0%" },
    { month: "Mar", value: "0.0%" },
    { month: "Apr", value: "0.0%" },
    { month: "May", value: "0.0%" },
    { month: "Jun", value: "0.0%" },
  ];

  const drawdownMetrics = [
    { label: "Max Drawdown (placeholder)", value: "0.0%" },
    { label: "Average Drawdown", value: "0.0%" },
    { label: "Longest Recovery (months)", value: "0" },
  ];

  return (
    <main className="min-h-screen bg-bg text-text">
      <LiveResultsHeroSection />
      <SnapshotSection stats={snapshotStats} />
      <EquityCurveSection />
      <MonthlyReturnsSection monthlyReturns={monthlyReturns} />
      <DrawdownSection drawdownMetrics={drawdownMetrics} />
      <MethodologySection />
    </main>
  );
}

/** HERO – secure, read-only framing + trust */
function LiveResultsHeroSection() {
  return (
    <section className="relative border-b border-border bg-surface py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
        <IconEyebrow
          icon={BarChart3}
          label="Live Results"
          className="mb-4 inline-flex items-center justify-center text-text-muted"
          iconClassName="text-brand"
        />

        <SectionTitle
          as="h1"
          className="text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl"
        >
          Daily transparency on{" "}
          <span className="relative inline-block">
            <span className="absolute inset-x-0 bottom-1 h-2 rounded-full bg-section-blue" />
            <span className="relative">system performance</span>
          </span>
          .
        </SectionTitle>

        <BodyText className="mx-auto mt-5 max-w-2xl text-sm text-text-muted sm:text-base">
          A secure, read-only view of SGI-LINK performance: real-time or
          daily-updated metrics, equity curves, monthly return summaries,
          drawdowns, and clear notes on methodology. The values shown below are
          placeholders until connected to official data sources.
        </BodyText>

        {/* Data status context card */}
        <div className="mt-10 text-left">
          <div className="space-y-4 rounded-3xl border border-border-strong bg-surface/80 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <IconEyebrow
                  icon={LineChart}
                  label="Data Status"
                  className="text-text-muted"
                  iconClassName="text-brand"
                />
                <BodyText className="text-sm text-text">
                  Placeholder metrics are shown for now. In production, this
                  page will be driven by verified, read-only performance feeds
                  updated daily or in near real time.
                </BodyText>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent-warm/80 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-text">
                <span className="inline-flex h-2 w-2 rounded-full bg-brand" />
                Live once integrated
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** REAL-TIME / DAILY METRICS */
function SnapshotSection({
  stats,
}: {
  stats: { label: string; value: string; note: string }[];
}) {
  return (
    <section className="border-b border-border-strong bg-accent-warm/40 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl space-y-10 px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl space-y-3">
            <IconEyebrow
              icon={BarChart3}
              label="Real-time / Daily Metrics"
              className="text-text-muted"
              iconClassName="text-brand"
            />
            <SectionTitle>
              A high-level snapshot of live performance.
            </SectionTitle>
            <BodyText className="text-sm text-text-muted sm:text-base">
              These cards surface headline figures investors check most often.
              In a live environment, values would update on a defined schedule
              (for example, daily close or multiple times per day, depending on
              data availability).
            </BodyText>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((item) => (
            <article
              key={item.label}
              className="flex flex-col justify-between rounded-2xl border border-border-strong bg-surface p-6 shadow-sm"
            >
              <div className="space-y-2">
                <Eyebrow className="text-text-muted">{item.label}</Eyebrow>
                <p className="text-2xl font-semibold text-brand">
                  {item.value}
                </p>
              </div>
              <SmallMuted className="mt-3 text-text-muted">
                {item.note}
              </SmallMuted>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/** EQUITY CURVE (placeholder chart) */
function EquityCurveSection() {
  return (
    <section className="border-b border-border-strong bg-surface py-16 lg:py-20">
      <div className="mx-auto max-w-7xl space-y-8 px-6 lg:px-8">
        <div className="max-w-2xl space-y-3">
          <IconEyebrow
            icon={TrendingUp}
            label="Equity Curve"
            className="text-text-muted"
            iconClassName="text-brand"
          />
          <SectionTitle>
            Cumulative equity over the life of the strategy.
          </SectionTitle>
          <BodyText className="text-sm text-text-muted sm:text-base">
            This chart will ultimately show the evolution of a hypothetical
            investor&apos;s equity in SGI-LINK over time, net of fees and
            including any realized drawdowns. For now, it uses a simple
            placeholder visual instead of live data.
          </BodyText>
        </div>

        <div className="space-y-4 rounded-3xl border border-border-strong bg-surface p-6 shadow-md sm:p-8">
          {/* Placeholder “chart” block with stock image-ish feel */}
          <div className="flex h-64 items-center justify-center rounded-2xl border border-border-strong bg-accent-warm/30 text-sm text-text-muted">
            Simulated equity curve placeholder
          </div>
        </div>
      </div>
    </section>
  );
}

/** MONTHLY RETURN SUMMARIES */
function MonthlyReturnsSection({
  monthlyReturns,
}: {
  monthlyReturns: { month: string; value: string }[];
}) {
  return (
    <section className="border-b border-border-blue bg-section-blue py-16 lg:py-20">
      <div className="mx-auto max-w-7xl space-y-8 px-6 lg:px-8">
        <div className="max-w-2xl space-y-3">
          <IconEyebrow
            icon={CalendarDays}
            label="Monthly Return Summaries"
            className="text-brand-body-alt"
            iconClassName="text-brand"
          />
          <SectionTitle className="text-brand-on">
            Month-by-month performance, at a glance.
          </SectionTitle>
          <BodyText className="text-sm text-brand-on-soft sm:text-base">
            When connected, each cell will reflect the net return for that
            month, including fees and any realized trading costs. Here, we show
            placeholder values to indicate the layout and level of detail.
          </BodyText>
        </div>

        <div className="rounded-2xl border border-border-blue bg-surface/90 p-6 shadow-sm sm:p-7">
          <div className="grid gap-4 sm:grid-cols-3">
            {monthlyReturns.map((item) => (
              <div
                key={item.month}
                className="rounded-xl border border-border-blue bg-chip-blue px-4 py-3 text-sm leading-relaxed text-brand-on-soft"
              >
                <Eyebrow className="mb-1 text-text/80">{item.month}</Eyebrow>
                <p className="text-lg font-semibold text-brand-on-soft">
                  {item.value}
                </p>
                <SmallMuted className="mt-1 text-brand-label">
                  Placeholder monthly return.
                </SmallMuted>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** DRAWDOWNS */
function DrawdownSection({
  drawdownMetrics,
}: {
  drawdownMetrics: { label: string; value: string }[];
}) {
  return (
    <section className="border-b border-border-strong bg-surface py-16 lg:py-20">
      <div className="mx-auto max-w-7xl space-y-10 px-6 lg:px-8">
        <div className="max-w-2xl space-y-3">
          <IconEyebrow
            icon={Activity}
            label="Drawdowns"
            className="text-text-muted"
            iconClassName="text-brand"
          />
          <SectionTitle>How the strategy behaves when it hurts.</SectionTitle>
          <BodyText className="text-sm text-text-muted sm:text-base">
            Drawdowns are often the most important part of the story. This
            section surfaces depth, duration, and typical recovery behavior so
            investors can judge whether SGI-LINK fits their risk tolerance.
          </BodyText>
        </div>

        <div className="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-start">
          {/* Key metrics */}
          <dl className="grid gap-4 rounded-2xl border border-border-card bg-chip-warm/80 p-5 text-left shadow-sm">
            {drawdownMetrics.map((m) => (
              <div key={m.label} className="space-y-1">
                <OverviewMetric label={m.label} value={m.value} />
              </div>
            ))}
          </dl>

          {/* Narrative context */}
          <InfoCard title="How drawdowns will be presented">
            <BodyText className="text-xs text-text-muted sm:text-sm">
              In production, this area will be driven by the same data feeds as
              the equity curve, highlighting:
            </BodyText>
            <ul className="mt-2 list-disc space-y-1 text-xs leading-relaxed text-text sm:text-sm sm:pl-5">
              <li>Point-in-time and peak-to-trough drawdown series.</li>
              <li>Historical worst-case and typical drawdown ranges.</li>
              <li>Approximate recovery times following major drawdowns.</li>
            </ul>
          </InfoCard>
        </div>
      </div>
    </section>
  );
}

/** PERFORMANCE METHODOLOGY & NOTES */
function MethodologySection() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6">
        <div className="max-w-3xl space-y-3">
          <IconEyebrow
            icon={ShieldCheck}
            label="Performance Methodology"
            className="text-text-muted"
            iconClassName="text-brand"
          />

          <SectionTitle>Notes on how results are calculated.</SectionTitle>

          <BodyText className="text-sm text-text-muted sm:text-base">
            Clear methodology is as important as the numbers themselves. This
            section outlines how returns, drawdowns, and other statistics are
            computed, and how they should be interpreted by long-term, qualified
            investors.
          </BodyText>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <InfoCard title="Calculation & data sources">
            <ul className="mt-1 list-disc space-y-1 text-xs leading-relaxed text-text sm:text-sm sm:pl-5">
              <li>Returns are shown net of management and performance fees.</li>
              <li>
                Performance is based on actual trading where available; any
                modeled periods will be clearly labeled.
              </li>
              <li>
                Data is sourced from SGI&apos;s internal systems and reconciled
                against administrator records where applicable.
              </li>
            </ul>
          </InfoCard>

          <InfoCard title="Disclosures & interpretation">
            <ul className="mt-1 list-disc space-y-1 text-xs leading-relaxed text-text sm:text-sm sm:pl-5">
              <li>Past performance does not guarantee future results.</li>
              <li>
                All investing involves risk, including the potential loss of
                principal.
              </li>
              <li>
                Detailed, audited performance records are made available to
                accredited and qualified investors during due diligence.
              </li>
            </ul>
          </InfoCard>
        </div>
      </div>
    </section>
  );
}
