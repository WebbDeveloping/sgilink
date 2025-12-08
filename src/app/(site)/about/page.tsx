// app/about/page.jsx

import { Globe2, ShieldCheck, Users2, LineChart, Layers } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
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
    <section className="relative border-b border-[#ECE7DC] bg-white py-24 sm:py-32">
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        {/* Slash accent */}
        {/* <div className="mb-6 flex justify-center">
          <span className="inline-block h-5 w-px bg-slate-300" />
        </div> */}

        {/* Overline */}
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          About SGI-LINK
        </p>

        {/* Headline with blue-100 underline */}
        <h1 className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
          The firm behind{" "}
          <span className="relative inline-block">
            <span className="absolute inset-x-0 bottom-1 h-2 rounded-full bg-blue-100" />
            <span className="relative">our systematic engine</span>
          </span>
          .
        </h1>

        {/* Supporting statement */}
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-base">
          SGI-LINK exists to make disciplined, rules-driven trading systems
          usable by long-term investors — grounded in real-market research and a
          risk-first philosophy.
        </p>
      </div>
    </section>
  );
}

/** STORY – calm, two-column but low-UI, more narrative */
function StorySection() {
  return (
    <section className="border-b border-[#ECE7DC] bg-white py-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-start">
        {/* Left narrative */}
        <div className="max-w-xl space-y-4">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            <Layers className="h-3.5 w-3.5 text-[#3A5E7B]" />
            <span>Our Story</span>
          </p>

          <h2 className="text-2xl font-semibold leading-snug text-slate-900 sm:text-3xl">
            Built on years of real-market testing, not a single backtest.
          </h2>

          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            SGI began as a research effort into how systematic FX and
            commodities strategies behave in live conditions — across liquidity
            environments, volatility regimes, and execution partners. Many ideas
            never made it past testing. A smaller set did.
          </p>

          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            SGI-LINK is the institutional expression of that journey: a vehicle
            built around the systems, controls, and infrastructure that proved
            durable enough to run real capital, not just attractive enough to
            present in a slide deck.
          </p>
        </div>

        {/* Right supporting points */}
        <div className="space-y-6 text-sm leading-relaxed text-slate-700">
          <div>
            <h3 className="mb-2 text-sm font-semibold text-[#3A5E7B]">
              From broad experimentation to a focused mandate
            </h3>
            <p>
              Early on, SGI explored a wide range of models and timeframes. Over
              time, the team narrowed its focus to approaches that consistently
              handled slippage, spreads, and real-world frictions in FX and
              commodities — not just in simulation, but in production.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold text-[#3A5E7B]">
              Infrastructure built to support real investors
            </h3>
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
    <section className="border-b border-[#D5E3F6] bg-[#E9F2FF] py-24">
      <div className="mx-auto max-w-5xl space-y-10 px-4 sm:px-6">
        <div className="max-w-xl space-y-4">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#214266]">
            <ShieldCheck className="h-3.5 w-3.5 text-[#3A5E7B]" />
            <span>Philosophy</span>
          </p>

          <h2 className="text-2xl font-semibold leading-snug text-[#10243A] sm:text-3xl">
            Technology-forward, deliberately conservative.
          </h2>

          <p className="text-sm leading-relaxed text-[#1F3B57] sm:text-base">
            SGI-LINK uses modern quantitative tools to seek attractive,
            risk-aware returns — but our posture is intentionally measured. We
            prefer robustness over cleverness, and clear explanations over
            opaque models.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-2 text-sm leading-relaxed text-[#1F3B57]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#355477]">
              Risk first
            </p>
            <p>
              Position sizing, drawdown limits, and liquidity considerations
              come before return targets. Systems are evaluated on how they
              behave when markets are difficult, not just when conditions are
              favorable.
            </p>
          </div>

          <div className="space-y-2 text-sm leading-relaxed text-[#1F3B57]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#355477]">
              Rules over emotion
            </p>
            <p>
              Entries, exits, and de-risking are governed by predefined rules.
              This keeps the process consistent and helps avoid the emotional
              decision-making that often undermines long-term results.
            </p>
          </div>

          <div className="space-y-2 text-sm leading-relaxed text-[#1F3B57]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#355477]">
              Transparency over marketing
            </p>
            <p>
              We focus on realistic expectations and plain language around risk,
              limitations, and process. If we can&apos;t explain a system in
              straightforward terms, it doesn&apos;t belong in the portfolio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** INVESTOR FIT – simple two-column layout, light structure */
function InvestorFitSection() {
  return (
    <section className="border-b border-[#ECE7DC] bg-white py-24">
      <div className="mx-auto max-w-5xl space-y-10 px-4 sm:px-6">
        <div className="max-w-xl space-y-3">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            <Users2 className="h-3.5 w-3.5 text-[#3A5E7B]" />
            <span>Who SGI-LINK is built for</span>
          </p>
          <h2 className="text-2xl font-semibold leading-snug text-slate-900 sm:text-3xl">
            Designed for patient, qualified capital.
          </h2>
          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            SGI-LINK is intended for investors who value structure and
            repeatability — and who are comfortable judging strategies by their
            risk discipline and process, not just by a single return number.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          {/* Left: typical investor profile */}
          <div className="space-y-5 text-sm leading-relaxed text-slate-700">
            <div>
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Typical investors
              </p>
              <p>
                Accredited and qualified investors, institutions, and family
                offices looking to add a systematic FX and commodities sleeve
                within a broader alternatives allocation.
              </p>
            </div>

            <div>
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Time horizon
              </p>
              <p>
                Multi-year capital with room for normal drawdowns along the way,
                and a focus on how the strategy behaves over cycles, not single
                months or quarters.
              </p>
            </div>

            <div>
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Role in a portfolio
              </p>
              <p>
                A rules-based engine that complements existing managers and
                reduces reliance on discretionary macro calls or individual
                security selection.
              </p>
            </div>
          </div>

          {/* Right: alignment + “may not be a fit” */}
          <div className="space-y-6 text-sm leading-relaxed text-slate-700">
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Alignment
              </p>
              <p>
                SGI invests alongside clients and operates under the same risk
                framework and reporting structure, so incentives stay aligned
                around process and risk, not just headline performance.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-xs leading-relaxed text-slate-700">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                May not be a fit if...
              </p>
              <ul className="space-y-1.5">
                <li>• You require daily liquidity and zero drawdowns.</li>
                <li>
                  • You view systematic strategies as &quot;black boxes&quot;.
                </li>
                <li>
                  • You prefer highly concentrated, discretionary or
                  event-driven exposures.
                </li>
              </ul>
            </div>

            <p className="text-[11px] text-slate-500">
              Additional details on minimums, liquidity terms, and onboarding
              are available in formal offering documents and on the investor
              information page.
            </p>
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
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl space-y-10 px-4 sm:px-6">
        <div className="max-w-2xl space-y-3">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            <ShieldCheck className="h-3.5 w-3.5 text-[#3A5E7B]" />
            <span>Core Principles</span>
          </p>
          <h2 className="text-2xl font-semibold leading-snug text-slate-900 sm:text-3xl">
            The ideas SGI-LINK is built on.
          </h2>
          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            Behind the technology is a simple set of beliefs about how capital
            should be managed for long-term investors.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {principles.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-[#EFE3CE] bg-[#F7F5F0]/60 px-5 py-5 text-sm leading-relaxed text-slate-700"
            >
              <h3 className="mb-2 text-sm font-semibold text-[#3A5E7B]">
                {item.label}
              </h3>
              <p className="text-xs sm:text-sm">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
