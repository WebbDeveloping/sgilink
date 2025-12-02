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
    <main className="bg-white text-slate-900 min-h-screen">
      <StrategyHeroSection />
      <MarketFocusSection />
      <DiversificationSection />
      <RiskReturnSection />
      <TechRiskStackSection />
    </main>
  );
}

function StrategyHeroSection() {
  return (
    <section className="border-b border-[#EFE3CE] bg-white py-20 lg:py-24">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="space-y-5">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-slate-600 uppercase">
            <ShieldCheck className="h-3.5 w-3.5 text-[#3A5E7B]" />
            Our Strategy
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3A5E7B] tracking-tight">
            Systematic exposure to FX and commodities, built for durability.
          </h1>
          <p className="text-sm sm:text-base text-slate-700">
            SGI-LINK aggregates multiple in-house strategies across global
            currency and commodities markets—each with its own inputs,
            timeframes, and risk budgets—into a single portfolio designed to
            remain resilient across regimes.
          </p>
          <p className="text-sm text-slate-600">
            We focus on rules, structure, and risk constraints first, then build
            return expectations around what those frameworks can reliably
            support over time.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-[#EFE3CE] bg-[#EFE3CE]/40 p-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-slate-600 uppercase mb-2 flex items-center gap-2">
              <LineChart className="h-3.5 w-3.5 text-[#3A5E7B]" />
              Return Objective
            </p>
            <p className="text-sm text-slate-700">
              We target consistent, technology-driven returns supported by a
              diversified engine of strategies—not a single “star” model.
              Expectations are set around realistic, repeatable outcomes rather
              than outsized projections.
            </p>
          </div>

          <div className="rounded-2xl border border-[#EFE3CE] bg-white p-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-slate-600 uppercase mb-2 flex items-center gap-2">
              <FileText className="h-3.5 w-3.5 text-[#3A5E7B]" />
              Process, not prediction
            </p>
            <p className="text-sm text-slate-700">
              Our strategy is built around process: research, validation,
              portfolio construction, and ongoing risk oversight. Forecasting
              specific outcomes is less important than ensuring the system’s
              behavior is controlled and understood.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MarketFocusSection() {
  return (
    <section className="bg-[#EFE3CE]/40 border-b border-[#EFE3CE] py-20 lg:py-24">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="space-y-4">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-slate-600 uppercase">
            <Globe2 className="h-3.5 w-3.5 text-[#3A5E7B]" />
            Market Focus
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#3A5E7B]">
            FX and commodities where structure supports systems.
          </h2>
          <p className="text-sm sm:text-base text-slate-700">
            Our systems concentrate on major currency pairs and select
            commodities futures, where liquidity, trading hours, and
            microstructure data provide a stable foundation for systematic
            models.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-[#EFE3CE] bg-white p-6">
            <h3 className="text-sm font-semibold text-[#3A5E7B] mb-2">
              Why these markets
            </h3>
            <p className="text-sm text-slate-700">
              FX and commodities offer deep liquidity, tight spreads, and
              recurring patterns in volatility and behavior—characteristics that
              align well with rule-based strategies and strict risk controls.
            </p>
          </div>
          <div className="rounded-2xl border border-[#EFE3CE] bg-white p-6">
            <h3 className="text-sm font-semibold text-[#3A5E7B] mb-2">
              Focused, not overstretched
            </h3>
            <p className="text-sm text-slate-700">
              Rather than chasing new assets for marketing appeal, we focus on
              the segments where our edge is supported by experience and
              infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DiversificationSection() {
  const items = [
    {
      title: "Multiple timeframes",
      body: "Strategies operate on different horizons—from shorter-term to swing-style systems—reducing reliance on any one environment.",
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
    <section className="bg-white border-b border-[#EFE3CE] py-20 lg:py-24">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
        <div className="max-w-2xl space-y-3">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-slate-600 uppercase">
            <Layers className="h-3.5 w-3.5 text-[#3A5E7B]" />
            Diversified Systems
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#3A5E7B]">
            A portfolio of complementary strategies, not one hero trade.
          </h2>
          <p className="text-sm sm:text-base text-slate-700">
            Our strategy is built around diversification within a defined
            framework. Each system has a role, a risk budget, and clear rules
            for when it belongs in the portfolio—and when it doesn’t.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#EFE3CE] bg-[#EFE3CE]/40 p-6"
            >
              <h3 className="text-sm font-semibold text-[#3A5E7B] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-700">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RiskReturnSection() {
  return (
    <section className="bg-[#EFE3CE]/40 border-b border-[#EFE3CE] py-20 lg:py-24">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="space-y-4">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-slate-600 uppercase">
            <BarChart3 className="h-3.5 w-3.5 text-[#3A5E7B]" />
            Risk & Return
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#3A5E7B]">
            Realistic expectations, grounded in risk.
          </h2>
          <p className="text-sm sm:text-base text-slate-700">
            We design our systems with realistic return expectations supported
            by live trading experience and risk constraints—not theoretical
            extremes. The portfolio is calibrated to withstand normal drawdowns
            while keeping risk within pre-defined tolerances.
          </p>
        </div>

        <div className="rounded-2xl border border-[#EFE3CE] bg-white p-6 space-y-4">
          <ul className="space-y-3 text-sm text-slate-700">
            <li>
              <span className="font-medium text-[#3A5E7B]">
                Defined drawdown limits ·{" "}
              </span>
              Portfolio exposure and strategy weights are managed with target
              drawdown bands in mind.
            </li>
            <li>
              <span className="font-medium text-[#3A5E7B]">
                Stress-tested behavior ·{" "}
              </span>
              Systems are evaluated across varied historical regimes, not just
              favorable periods.
            </li>
            <li>
              <span className="font-medium text-[#3A5E7B]">
                Risk before narrative ·{" "}
              </span>
              We size positions and exposure based on risk metrics, not stories
              or market narratives.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function TechRiskStackSection() {
  const layers = [
    {
      title: "Model layer",
      body: "Independently tested strategies with clear entry, exit, and risk rules.",
    },
    {
      title: "Execution layer",
      body: "Order routing and venue selection tuned for FX and commodities liquidity.",
    },
    {
      title: "Risk layer",
      body: "Portfolio limits, per-strategy guardrails, and automated de-risking logic.",
    },
    {
      title: "Reporting layer",
      body: "Institutional-style reporting, performance breakdowns, and transparency.",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
        <div className="max-w-2xl space-y-3">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-slate-600 uppercase">
            <FileText className="h-3.5 w-3.5 text-[#3A5E7B]" />
            Technology & Risk
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#3A5E7B]">
            A stacked architecture around risk management.
          </h2>
          <p className="text-sm sm:text-base text-slate-700">
            Underneath the strategy is an infrastructure layer designed to keep
            systems observable, controllable, and accountable in live markets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {layers.map((layer) => (
            <div
              key={layer.title}
              className="rounded-2xl border border-[#EFE3CE] bg-[#EFE3CE]/40 p-6"
            >
              <h3 className="text-sm font-semibold text-[#3A5E7B] mb-2">
                {layer.title}
              </h3>
              <p className="text-sm text-slate-700">{layer.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
