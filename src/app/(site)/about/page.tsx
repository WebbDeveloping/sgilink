// app/about/page.jsx
import { Globe2, ShieldCheck, Users2, LineChart, Layers } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900 min-h-screen">
      <AboutHeroSection />
      <StorySection />
      <PhilosophySection />
      <InvestorFitSection />
      <PrinciplesSection />
    </main>
  );
}

function AboutHeroSection() {
  return (
    <section className="border-b border-[#EFE3CE] bg-white py-20 lg:py-24">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="space-y-5">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-slate-600 uppercase">
            <Globe2 className="h-3.5 w-3.5 text-[#3A5E7B]" />
            About SGI-LINK
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3A5E7B] tracking-tight">
            A dedicated vehicle for SGI’s systematic trading systems.
          </h1>
          <p className="text-sm sm:text-base text-slate-700">
            SGI-LINK is a specialized investment fund focused on deploying
            capital into SGI’s own proprietary algorithmic trading systems,
            engineered to deliver consistent, data-driven returns across FX and
            commodities markets.
          </p>
          <p className="text-sm text-slate-600">
            The fund exists to give qualified investors access to SGI’s
            institutional-grade research, infrastructure, and risk management in
            a single, disciplined structure—without asking them to become market
            experts themselves.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-[#EFE3CE] bg-[#EFE3CE]/40 p-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-slate-600 uppercase mb-2 flex items-center gap-2">
              <ShieldCheck className="h-3.5 w-3.5 text-[#3A5E7B]" />
              Mission
            </p>
            <p className="text-sm text-slate-700">
              Our mission is to provide investors with reliable,
              technology-powered returns by deploying capital into SGI’s
              proprietary algorithmic trading systems, ensuring stable
              performance through diversification, automation, and rigorous
              quantitative oversight.
            </p>
          </div>

          <div className="rounded-2xl border border-[#EFE3CE] bg-white p-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-slate-600 uppercase mb-2 flex items-center gap-2">
              <LineChart className="h-3.5 w-3.5 text-[#3A5E7B]" />
              What SGI-LINK does
            </p>
            <p className="text-sm text-slate-700">
              We utilize SGI’s proprietary technology and in-house strategies to
              build diversified, fully automated systems engineered to deliver
              consistent, hands-off growth for our investors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section className="bg-[#EFE3CE]/40 border-b border-[#EFE3CE] py-20 lg:py-24">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="space-y-4">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-slate-600 uppercase">
            <Layers className="h-3.5 w-3.5 text-[#3A5E7B]" />
            Our Story
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#3A5E7B]">
            Built on years of real-world algorithmic testing.
          </h2>
          <p className="text-sm sm:text-base text-slate-700">
            SGI was not built around a single backtest or a lucky run. It grew
            out of years spent developing, deploying, and retiring multiple
            algorithmic systems across FX and commodities—learning what works in
            live markets and what doesn’t.
          </p>
          <p className="text-sm text-slate-700">
            That history created a deep catalog of data, models, and risk
            lessons. SGI-LINK is the institutional expression of that journey: a
            curated portfolio of the systems, controls, and infrastructure that
            proved durable enough to run real capital at scale.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-[#EFE3CE] bg-white p-6">
            <h3 className="text-sm font-semibold text-[#3A5E7B] mb-2">
              From experimentation to a focused mandate
            </h3>
            <p className="text-sm text-slate-700">
              Early on, SGI experimented with a broad range of models and
              styles. Over time, the team concentrated on a smaller set of
              approaches that consistently handled liquidity, slippage, and
              volatility in live conditions.
            </p>
          </div>
          <div className="rounded-2xl border border-[#EFE3CE] bg-white p-6">
            <h3 className="text-sm font-semibold text-[#3A5E7B] mb-2">
              A partner and infrastructure that could scale
            </h3>
            <p className="text-sm text-slate-700">
              The fund now sits on top of a robust, scalable infrastructure
              stack—execution, risk, and reporting—designed to support both SGI
              and its investors through different market regimes, not just
              favorable periods.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  return (
    <section className="bg-white border-b border-[#EFE3CE] py-20 lg:py-24">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="space-y-4">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-slate-600 uppercase">
            <ShieldCheck className="h-3.5 w-3.5 text-[#3A5E7B]" />
            Philosophy
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#3A5E7B]">
            Technology-driven, but deliberately conservative.
          </h2>
          <p className="text-sm sm:text-base text-slate-700">
            SGI-LINK combines advanced algorithmic technology with a
            conservative, transparent investment philosophy. We are not in the
            business of making unrealistic promises or chasing speculative hype.
          </p>
          <p className="text-sm text-slate-700">
            The goal is straightforward: above-average, risk-aware returns
            powered by modern quantitative tools—and grounded in honesty,
            stability, and long-term reliability.
          </p>
        </div>

        <div className="rounded-2xl border border-[#EFE3CE] bg-[#EFE3CE]/40 p-6 space-y-4">
          <h3 className="text-sm font-semibold text-[#3A5E7B]">
            How we think about risk and return
          </h3>
          <ul className="space-y-3 text-sm text-slate-700">
            <li>
              <span className="font-medium text-[#3A5E7B]">Risk first · </span>
              Position sizing, drawdowns, and liquidity come before return
              targets.
            </li>
            <li>
              <span className="font-medium text-[#3A5E7B]">
                Rules over emotion ·{" "}
              </span>
              Pre-defined rules govern entries, exits, and de-risking decisions.
            </li>
            <li>
              <span className="font-medium text-[#3A5E7B]">
                Transparency over marketing ·{" "}
              </span>
              Clear explanations and realistic expectations instead of
              sensational claims.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function InvestorFitSection() {
  return (
    <section className="bg-[#EFE3CE]/40 border-b border-[#EFE3CE] py-20 lg:py-24">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
        <div className="max-w-2xl space-y-3">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-slate-600 uppercase">
            <Users2 className="h-3.5 w-3.5 text-[#3A5E7B]" />
            Who SGI-LINK is built for
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#3A5E7B]">
            Designed for passive, realistic-return investors.
          </h2>
          <p className="text-sm sm:text-base text-slate-700">
            SGI-LINK is tailored to accredited investors and high net worth
            individuals who value discipline, transparency, and a systematic
            approach—rather than speculation or day-to-day market noise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          <div className="rounded-2xl border border-[#EFE3CE] bg-white p-6">
            <h3 className="text-sm font-semibold text-[#3A5E7B] mb-2">
              Investor profile
            </h3>
            <p className="text-sm text-slate-700">
              Accredited investors, qualified purchasers, and families seeking a
              systematic alternative sleeve within a broader portfolio.
            </p>
          </div>
          <div className="rounded-2xl border border-[#EFE3CE] bg-white p-6">
            <h3 className="text-sm font-semibold text-[#3A5E7B] mb-2">
              Time horizon
            </h3>
            <p className="text-sm text-slate-700">
              Multi-year allocation with room for normal drawdowns and a focus
              on consistency over single-period outcomes.
            </p>
          </div>
          <div className="rounded-2xl border border-[#EFE3CE] bg-white p-6">
            <h3 className="text-sm font-semibold text-[#3A5E7B] mb-2">
              Role in portfolio
            </h3>
            <p className="text-sm text-slate-700">
              A rules-based engine that complements existing holdings and
              reduces reliance on discretionary decision-making.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrinciplesSection() {
  const principles = [
    {
      label: "Discipline",
      body: "We favor robust, repeatable processes over prediction or market timing.",
    },
    {
      label: "Transparency",
      body: "We speak plainly about risk, return, and limitations—no shortcuts, no hype.",
    },
    {
      label: "Alignment",
      body: "We invest alongside our clients and live under the same risk framework.",
    },
    {
      label: "Long-term focus",
      body: "We design systems, infrastructure, and relationships to endure across regimes.",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
        <div className="max-w-2xl space-y-3">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-slate-600 uppercase">
            <ShieldCheck className="h-3.5 w-3.5 text-[#3A5E7B]" />
            Core Principles
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#3A5E7B]">
            The ideas SGI-LINK is built on.
          </h2>
          <p className="text-sm sm:text-base text-slate-700">
            Behind the technology and infrastructure is a simple set of beliefs
            about how capital should be managed for long-term investors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {principles.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-[#EFE3CE] bg-[#EFE3CE]/40 p-6"
            >
              <h3 className="text-sm font-semibold text-[#3A5E7B] mb-2">
                {item.label}
              </h3>
              <p className="text-sm text-slate-700">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
