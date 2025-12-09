// app/strategy/page.jsx
import {
  Globe2,
  ShieldCheck,
  Layers,
  BarChart3,
  LineChart,
  FileText,
} from "lucide-react";

export default function StrategyPage() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <StrategyHeroSection />
      <MarketFocusSection />
      <DiversificationSection />
      <RiskReturnSection />
      <TechRiskStackSection />
    </main>
  );
}

/** HERO – minimal, with slash accent + blue underline, editorial spacing */
function StrategyHeroSection() {
  return (
    <section className="border-b border-border bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center sgi-animate-fade-in-up">
          <p className="mb-4 inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
            <ShieldCheck className="h-3.5 w-3.5 text-brand" />
            <span>Our Strategy</span>
          </p>

          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-text sm:text-4xl md:text-5xl">
            Systematic exposure to{" "}
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-1 h-2 rounded-full bg-section-blue" />
              <span className="relative">FX and commodities</span>
            </span>{" "}
            built for durability.
          </h1>

          <p className="sgi-animate-fade-in-up-delay mt-5 mx-auto max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base">
            SGI-LINK aggregates multiple in-house strategies across global
            currency and commodities markets — each with its own inputs,
            timeframes, and risk budgets — into a single portfolio designed to
            remain resilient across regimes.
          </p>

          <p className="sgi-animate-fade-in-up-delay mt-3 mx-auto max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base">
            We focus on rules, structure, and risk constraints first, then build
            return expectations around what those frameworks can reliably
            support over time.
          </p>
        </div>
      </div>
    </section>
  );
}

/** MARKET FOCUS – warm off-white bg + image panel for visual interest */
function MarketFocusSection() {
  return (
    <section className="border-b border-border bg-section-warm py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center">
          {/* Left narrative */}
          <div className="max-w-xl space-y-4">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
              <Globe2 className="h-3.5 w-3.5 text-brand" />
              <span>Market Focus</span>
            </p>

            <h2 className="text-2xl font-semibold leading-snug text-text sm:text-3xl">
              FX and commodities where structure supports systems.
            </h2>

            <p className="text-sm leading-relaxed text-text-muted sm:text-base">
              Our systems concentrate on major currency pairs and select
              commodities futures, where liquidity, trading hours, and
              microstructure behavior provide a stable foundation for systematic
              models.
            </p>

            <div className="mt-6 grid gap-6 text-sm leading-relaxed text-text-muted sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-sm font-semibold text-brand">
                  Why these markets
                </h3>
                <p>
                  FX and commodities offer deep liquidity, tight spreads, and
                  recurring patterns in volatility and flows — characteristics
                  that align well with rule-based strategies and strict risk
                  controls.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-semibold text-brand">
                  Focused, not overstretched
                </h3>
                <p>
                  Rather than chasing new asset classes for marketing appeal, we
                  focus on the segments where our edge is supported by research
                  depth, execution experience, and infrastructure.
                </p>
              </div>
            </div>
          </div>

          {/* Right: image / visual card */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-border-card bg-surface shadow-sm shadow-slate-900/5">
              <div
                className="h-56 bg-cover bg-center sm:h-64"
                style={{
                  backgroundImage:
                    "url('https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1200')",
                }}
              />
              <div className="px-5 py-4 text-xs leading-relaxed text-text-muted">
                <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted">
                  Trading landscape
                </p>
                <p>
                  A concentrated universe of liquid FX pairs and commodities
                  futures provides the canvas for our systematic approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** DIVERSIFICATION – blue background for visual break, slightly more editorial */
function DiversificationSection() {
  const items = [
    {
      title: "Multiple timeframes",
      body: "Strategies operate on different horizons — from shorter-term to swing-style systems — reducing reliance on any one environment.",
    },
    {
      title: "Independent signal sets",
      body: "Models are built on distinct inputs and logic, designed to avoid overlapping exposures wherever possible.",
    },
    {
      title: "Risk-budgeted allocation",
      body: "We allocate based on contribution to portfolio risk, not just standalone backtest performance.",
    },
  ];

  return (
    <section className="border-b border-border-blue bg-section-blue py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <p className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-on-soft">
            <Layers className="h-3.5 w-3.5 text-brand" />
            <span>Diversified Systems</span>
          </p>
          <h2 className="text-2xl font-semibold leading-snug text-brand-on sm:text-3xl">
            A portfolio of complementary strategies, not one hero trade.
          </h2>
          <p className="text-sm leading-relaxed text-brand-on-soft sm:text-base">
            Each system has a defined role, risk budget, and criteria for when
            it belongs in the portfolio — and when it doesn&apos;t. Diversified
            behavior is an intentional design choice, not an afterthought.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="space-y-2 text-sm leading-relaxed text-brand-on-soft"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-chip">
                {item.title}
              </p>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** RISK & RETURN – white bg, but with a subtle top rule accent on the card */
function RiskReturnSection() {
  return (
    <section className="border-b border-border bg-surface py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] lg:items-start">
          {/* Left copy */}
          <div className="max-w-xl space-y-4">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
              <BarChart3 className="h-3.5 w-3.5 text-brand" />
              <span>Risk &amp; Return</span>
            </p>

            <h2 className="text-2xl font-semibold leading-snug text-text sm:text-3xl">
              Realistic expectations, grounded in risk.
            </h2>

            <p className="text-sm leading-relaxed text-text-muted sm:text-base">
              We design systems around risk constraints and observed live
              behavior, not theoretical extremes. The portfolio is calibrated to
              tolerate normal drawdowns while keeping exposure within predefined
              bands.
            </p>

            <p className="text-sm leading-relaxed text-text-muted sm:text-base">
              Rather than optimizing solely for peak performance, we optimize
              for how the portfolio behaves across regimes — including periods
              of stress.
            </p>
          </div>

          {/* Right details card */}
          <div className="relative rounded-2xl border border-border-card bg-surface px-5 py-5 text-sm leading-relaxed text-text-muted shadow-sm shadow-slate-900/5">
            {/* top rule accent */}
            <div className="absolute inset-x-0 top-0 h-px bg-border" />

            <ul className="space-y-3">
              <li>
                <span className="font-medium text-brand">
                  Defined drawdown limits ·{" "}
                </span>
                Portfolio exposure and strategy weights are managed with target
                drawdown ranges in mind, rather than open-ended risk-taking.
              </li>
              <li>
                <span className="font-medium text-brand">
                  Stress-tested behavior ·{" "}
                </span>
                Systems are evaluated across a range of historical regimes,
                including periods of dislocation, not just stable years.
              </li>
              <li>
                <span className="font-medium text-brand">
                  Risk before narrative ·{" "}
                </span>
                We size positions and exposures based on risk metrics and
                portfolio impact — not on stories, headlines, or market
                narratives.
              </li>
            </ul>

            <p className="mt-4 text-[11px] leading-relaxed text-text-muted">
              Past performance does not guarantee future results. All investing
              involves risk, including the potential loss of principal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** TECH & RISK STACK – alternating bg tone, simple grid with good spacing */
function TechRiskStackSection() {
  const layers = [
    {
      title: "Model layer",
      body: "Independently tested strategies with clear entry, exit, and risk rules — versioned and monitored over time.",
    },
    {
      title: "Execution layer",
      body: "Order routing and venue selection tuned for FX and commodities liquidity, with attention to slippage and stability.",
    },
    {
      title: "Risk layer",
      body: "Portfolio limits, per-strategy guardrails, circuit-breaker style protections, and automated de-risking logic.",
    },
    {
      title: "Reporting layer",
      body: "Institutional-style reporting, performance breakdowns, and risk context designed for ongoing accountability.",
    },
  ];

  return (
    <section className="bg-section-warm py-24">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6">
        <div className="max-w-2xl space-y-3">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
            <FileText className="h-3.5 w-3.5 text-brand" />
            <span>Technology &amp; Risk</span>
          </p>
          <h2 className="text-2xl font-semibold leading-snug text-text sm:text-3xl">
            A stacked architecture around risk management.
          </h2>
          <p className="text-sm leading-relaxed text-text-muted sm:text-base">
            Underneath the strategy is an infrastructure layer designed to keep
            systems observable, controllable, and accountable in live markets.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {layers.map((layer) => (
            <div
              key={layer.title}
              className="rounded-2xl border border-border-strong bg-surface px-5 py-5 text-sm leading-relaxed text-text-muted shadow-sm shadow-slate-900/5"
            >
              <h3 className="mb-2 text-sm font-semibold text-brand">
                {layer.title}
              </h3>
              <p className="text-xs sm:text-sm">{layer.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
