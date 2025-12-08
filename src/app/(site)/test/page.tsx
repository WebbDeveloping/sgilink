// app/about/page.jsx
// SGI-LINK – About / Overview page
// Bright, airy, café-inspired design with sky blue as main accent.

import {
  LineChart,
  ShieldCheck,
  Users2,
  Cpu,
  Target,
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <HeroSection />
      <OverviewSection />
      <HowItWorksSection />
      <AudienceSection />
      <DifferentiatorsSection />
      <FinalCtaSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-20 sm:pt-28 sm:pb-24">
      {/* Sunlit radial gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(240,249,255,0.9),_transparent_70%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16">
        {/* Copy */}
        <div className="max-w-xl space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-500">
            SGI-LINK • Algorithmic Investment Fund
          </p>

          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            A calm, technology-powered approach to{" "}
            <span className="text-[#38BDF8]">consistent returns</span>.
          </h1>

          <p className="text-sm sm:text-base text-slate-600">
            SGI-LINK deploys capital into SGI’s proprietary algorithmic trading
            systems, built on years of real-world testing in FX and commodities
            markets. Our goal is straightforward: stable, data-driven returns
            with disciplined risk management.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-full bg-[#38BDF8] px-5 py-2.5 text-sm font-medium text-white shadow-md shadow-sky-500/20 hover:bg-sky-500 transition">
              Request more information
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/70 px-5 py-2.5 text-sm font-medium text-slate-700 hover:border-sky-200 hover:bg-sky-50/60 transition">
              View strategy overview
            </button>
          </div>

          <div className="flex flex-wrap gap-6 pt-2 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-sky-400" />
              <span>Conservative risk discipline</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="h-4 w-4 text-sky-400" />
              <span>Proprietary in-house algorithms</span>
            </div>
          </div>
        </div>

        {/* Hero visual card */}
        <div className="flex-1">
          <div className="rounded-3xl border border-sky-50 bg-gradient-to-br from-sky-50 via-white to-sky-100 p-5 shadow-lg shadow-sky-900/5">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                At a glance
              </span>
              <LineChart className="h-4 w-4 text-sky-500" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <MetricCard
                label="Target annual returns"
                value="20–30%*"
                note="*Data-driven, not guaranteed"
              />
              <MetricCard
                label="Core markets"
                value="FX & Commodities"
                note="Deeply tested systems"
              />
              <MetricCard
                label="Investment style"
                value="Fully automated"
                note="Hands-off for investors"
              />
              <MetricCard
                label="Investor profile"
                value="Accredited & HNW"
                note="Passive, long-term focus"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({ label, value, note }) {
  return (
    <div className="rounded-2xl border border-sky-100 bg-white/80 px-4 py-3 text-xs shadow-sm shadow-sky-900/5">
      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-base font-semibold text-slate-900">{value}</p>
      <p className="mt-1 text-[11px] text-slate-500">{note}</p>
    </div>
  );
}

function SectionShell({ eyebrow, title, intro, children }) {
  return (
    <section className="relative border-y border-slate-100 bg-white/90">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(239,231,211,0.3),_transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="max-w-3xl space-y-3">
          {eyebrow && (
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-500">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {title}
            </h2>
          )}
          {intro && (
            <p className="text-sm sm:text-base text-slate-600">{intro}</p>
          )}
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

function OverviewSection() {
  return (
    <SectionShell
      eyebrow="Company overview"
      title="Built around disciplined, in-house algorithmic systems."
    >
      <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
        <p>
          SGI-LINK is a specialized investment fund focused on deploying capital
          into SGI’s own proprietary algorithmic trading systems, engineered to
          deliver consistent, data-driven annual returns in the 20–30% range.
          The fund’s strategy centers on the development and continual
          enhancement of SGI’s in-house algorithms, supported by robust
          risk-management frameworks and scalable trading infrastructure
          designed to perform across diversified market environments.
        </p>
        <p>
          Every system we run has been shaped by years of live experience in FX
          and commodities. This foundation allows us to combine the precision of
          quantitative models with the practical realities of real-world
          trading.
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-3">
        <PillCard
          icon={Cpu}
          label="Proprietary tech"
          text="All strategies are researched, built, and monitored in-house."
        />
        <PillCard
          icon={ShieldCheck}
          label="Risk-first design"
          text="Risk controls are embedded at the portfolio and strategy levels."
        />
        <PillCard
          icon={LineChart}
          label="Consistency focused"
          text="Designed to seek stable, repeatable outcomes over hype."
        />
      </div>
    </SectionShell>
  );
}

function PillCard({ icon: Icon, label, text }) {
  return (
    <div className="flex gap-3 rounded-2xl border border-sky-50 bg-white/70 p-4 shadow-sm shadow-sky-900/5">
      <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-sky-50">
        <Icon className="h-5 w-5 text-sky-500" />
      </div>
      <div className="space-y-1 text-sm">
        <p className="font-semibold text-slate-900">{label}</p>
        <p className="text-xs text-slate-600">{text}</p>
      </div>
    </div>
  );
}

function HowItWorksSection() {
  return (
    <SectionShell
      eyebrow="Mission & approach"
      title="Technology-powered, hands-off growth for investors."
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="space-y-5 text-sm sm:text-base text-slate-700 leading-relaxed">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              Mission statement
            </h3>
            <p className="mt-2">
              Our mission is to provide investors with reliable,
              technology-powered returns by deploying capital into SGI’s
              proprietary algorithmic trading systems, ensuring stable
              performance through diversification, automation, and rigorous
              quantitative oversight.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              Simple explanation
            </h3>
            <p className="mt-2">
              We utilize SGI’s proprietary technology and in-house algorithmic
              strategies to build diversified, fully automated systems
              engineered to deliver consistent, hands-off growth for our
              investors.
            </p>
          </div>
        </div>

        {/* Light “process” card */}
        <div className="h-full rounded-3xl border border-sky-50 bg-gradient-to-b from-white via-sky-50/40 to-white p-5 shadow-md shadow-sky-900/5">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-900">
            <Target className="h-4 w-4 text-sky-500" />
            How SGI-LINK works
          </h3>
          <ol className="mt-4 space-y-3 text-xs text-slate-700">
            <li>
              <span className="font-semibold text-sky-600">1. Research</span> —
              We design and stress-test algorithmic strategies in FX and
              commodities.
            </li>
            <li>
              <span className="font-semibold text-sky-600">2. Portfolio</span> —
              Multiple systems are combined into a diversified, rules-driven
              portfolio.
            </li>
            <li>
              <span className="font-semibold text-sky-600">3. Automation</span>{" "}
              — Execution is fully automated, reducing emotion and manual bias.
            </li>
            <li>
              <span className="font-semibold text-sky-600">4. Oversight</span> —
              Quantitative risk controls continuously monitor exposure and
              drawdowns.
            </li>
          </ol>
        </div>
      </div>
    </SectionShell>
  );
}

function AudienceSection() {
  return (
    <SectionShell
      eyebrow="Who we serve"
      title="Designed for patient, passive, accredited investors."
      intro="SGI-LINK is intentionally built for investors who value realism, transparency, and long-term discipline over rapid speculation."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-3 text-sm sm:text-base text-slate-700">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            Primary audience
          </h3>
          <ul className="mt-2 space-y-2 text-sm leading-relaxed">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-6 rounded-full bg-sky-400/70" />
              <span>
                Accredited investors seeking disciplined, quant-driven exposure.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-6 rounded-full bg-sky-300/80" />
              <span>High-net-worth individuals, including QUEP investors.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-6 rounded-full bg-sky-200/90" />
              <span>
                Passive investors who prefer a hands-off approach backed by
                robust technology.
              </span>
            </li>
          </ul>
        </div>

        <div className="rounded-3xl border border-sky-50 bg-white/80 p-5 shadow-sm shadow-sky-900/5">
          <div className="flex items-center gap-2">
            <Users2 className="h-5 w-5 text-sky-500" />
            <h3 className="text-sm font-semibold text-slate-900">
              Fit for long-term partners
            </h3>
          </div>
          <p className="mt-3 text-sm text-slate-700 leading-relaxed">
            SGI-LINK is not built for day-traders or short-term speculation. It
            is crafted for investors who want above-average results powered by
            modern quantitative innovation, while respecting the fundamentals of
            honesty, stability, and long-term reliability.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}

function DifferentiatorsSection() {
  return (
    <SectionShell
      eyebrow="What makes us different"
      title="Real-world experience, conservative philosophy."
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
          <p>
            SGI was built on years of real-world testing across FX and
            commodities algorithms, giving us a deep understanding of what truly
            works and what doesn’t. That experience led us to a proven team and
            strategy that seek consistent performance while maintaining strict
            risk discipline.
          </p>
          <p>
            We combine advanced algorithmic technology with a conservative,
            transparent investment philosophy — no unrealistic promises, no
            hype. SGI is designed for passive investors who want above-average
            results powered by modern quant innovation, without sacrificing the
            principles of honesty, stability, and long-term reliability.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <TagCard
            icon={ShieldCheck}
            title="Risk-first"
            text="Capital preservation and drawdown control are embedded from day one."
          />
          <TagCard
            icon={Cpu}
            title="Purely in-house"
            text="No black-box vendors — all core systems are developed and monitored internally."
          />
          <TagCard
            icon={LineChart}
            title="Evidence-driven"
            text="Strategies are shaped by extensive live and historical testing."
          />
          <TagCard
            icon={Target}
            title="Aligned incentives"
            text="Built for long-term, passive investors rather than short-term speculation."
          />
        </div>
      </div>
    </SectionShell>
  );
}

function TagCard({ icon: Icon, title, text }) {
  return (
    <div className="flex flex-col rounded-2xl border border-sky-50 bg-sky-50/40 p-4 shadow-sm shadow-sky-900/5">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-sky-500" />
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-700">
          {title}
        </p>
      </div>
      <p className="mt-2 text-xs text-slate-700 leading-relaxed">{text}</p>
    </div>
  );
}

function FinalCtaSection() {
  return (
    <section className="bg-gradient-to-b from-white via-sky-50/40 to-white">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="rounded-3xl border border-sky-100 bg-white/90 p-8 text-center shadow-lg shadow-sky-900/5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-500">
            Next steps
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Explore whether SGI-LINK is right for your portfolio.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            If you are an accredited or high-net-worth investor interested in
            disciplined, technology-powered returns, we invite you to start a
            conversation with our team.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-full bg-[#38BDF8] px-6 py-2.5 text-sm font-medium text-white shadow-md shadow-sky-500/25 hover:bg-sky-500 transition">
              Schedule an introduction
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white px-6 py-2.5 text-sm font-medium text-slate-700 hover:border-sky-200 hover:bg-sky-50 transition">
              Download fund overview
            </button>
          </div>
          <p className="mt-4 text-[11px] text-slate-400">
            This page is for informational purposes only and does not constitute
            an offer to sell or a solicitation of an offer to buy any security.
          </p>
        </div>
      </div>
    </section>
  );
}
