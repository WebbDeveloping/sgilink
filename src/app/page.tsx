// app/page.jsx
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Cpu,
  FileText,
  Globe2,
  Layers,
  LineChart,
  Lock,
  PhoneCall,
  ShieldCheck,
  Users2,
  HelpCircle,
  ChevronDown,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900 min-h-screen">
      <HeroSection />
      <FundOverviewSection />
      <StrategySection />
      <TechnologySection />
      <InvestorSection />
      <FaqSection />
      <FinalCtaSection />
      {/* <Footer /> */}
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-28 sm:pt-32 lg:pt-40 pb-20 lg:pb-28">
      <div className="pointer-events-none absolute inset-0">
        {/* Soft radial + vertical gradient using brand blues + ivory */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#A7C7F1_0,_#FFFFFF_45%,_#EFE3CE_100%)]" />
        {/* Subtle grid lines in light blue */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(167,199,241,0.18)_1px,transparent_1px)] bg-[length:100%_40px] opacity-40" />
        {/* Light blue glow */}
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-[#A7C7F1]/40 blur-3xl" />
        {/* Mobile-only soft white veil to boost contrast under text */}
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent" />
      </div>

      <div className="relative max-w-6xl lg:max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-8">
          <div className="space-y-3">
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase">
              <Globe2 className="h-3.5 w-3.5 text-[#3A5E7B]" />
              Private Algorithmic Fund
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
              Systematic returns,{" "}
              <span
                className="
                  text-[#3A5E7B]
                  sm:text-transparent sm:bg-clip-text
                  sm:bg-gradient-to-r sm:from-[#3A5E7B] sm:to-[#A7C7F1]
                "
              >
                engineered for discipline.
              </span>
            </h1>
            <p className="max-w-xl text-sm sm:text-base text-slate-700">
              SGI-LINK deploys capital exclusively into SGI’s proprietary
              algorithmic trading systems, designed to compound steadily across
              changing FX and commodities markets.
            </p>
            <p className="max-w-xl text-sm text-slate-600">
              Our in-house models, risk controls, and execution stack work
              together as a single system — removing emotion, enforcing
              consistency, and keeping risk at the center of every decision.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button className="inline-flex items-center justify-center rounded-full bg-[#3A5E7B] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[rgba(58,94,123,0.35)] hover:bg-[#324f68] transition">
              <FileText className="mr-2 h-4 w-4" />
              Request Fund Deck
            </button>
            <button className="inline-flex items-center justify-center rounded-full border border-[#DDBF99] px-5 py-2.5 text-sm font-medium text-[#3A5E7B] bg-white/70 hover:bg-[#EFE3CE]/60 transition">
              <LineChart className="mr-2 h-4 w-4" />
              View Strategy Overview
            </button>
          </div>

          <p className="flex items-start gap-2 text-xs text-slate-500 max-w-sm">
            <ShieldCheck className="mt-0.5 h-3.5 w-3.5 text-[#3A5E7B]" />
            <span>
              For qualified and accredited investors only. This is not an offer
              or solicitation to buy or sell any security.
            </span>
          </p>
        </div>

        <div className="lg:pl-8">
          <div className="relative">
            <div className="pointer-events-none absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-[#A7C7F1]/45 via-transparent to-[#DDBF99]/45 opacity-80" />
            <div className="relative rounded-3xl border border-[#EFE3CE] bg-white/90 px-6 py-6 sm:px-8 sm:py-8 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.12)] space-y-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">
                    <BarChart3 className="h-3.5 w-3.5 text-[#3A5E7B]" />
                    Fund at a glance
                  </p>
                  <p className="mt-1 text-sm text-slate-700">
                    A single, integrated system of models, risk, and execution.
                  </p>
                </div>
                <div className="h-10 w-10 rounded-full bg-white border border-[#A7C7F1]/70 flex items-center justify-center shadow-sm">
                  <div className="h-5 w-5 rounded-full border border-[#3A5E7B] shadow-[0_0_18px_rgba(58,94,123,0.5)]" />
                </div>
              </div>

              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                <div className="space-y-1">
                  <dt className="flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-slate-500">
                    <Globe2 className="h-3.5 w-3.5 text-[#3A5E7B]" />
                    Core focus
                  </dt>
                  <dd className="text-slate-900">
                    Systematic FX &amp; commodities strategies
                  </dd>
                </div>
                <div className="space-y-1">
                  <dt className="flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-slate-500">
                    <LineChart className="h-3.5 w-3.5 text-[#3A5E7B]" />
                    Objective
                  </dt>
                  <dd className="text-slate-900">
                    Consistent, technology-driven annual returns
                  </dd>
                </div>
                <div className="space-y-1">
                  <dt className="flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-slate-500">
                    <Layers className="h-3.5 w-3.5 text-[#3A5E7B]" />
                    Approach
                  </dt>
                  <dd className="text-slate-900">
                    Fully automated entries, risk-managed exits
                  </dd>
                </div>
                <div className="space-y-1">
                  <dt className="flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-slate-500">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#3A5E7B]" />
                    Philosophy
                  </dt>
                  <dd className="text-slate-900">Risk first. Rules always.</dd>
                </div>
              </dl>

              <p className="border-t border-[#EFE3CE] pt-4 text-[11px] leading-relaxed text-slate-500">
                Past performance does not guarantee future results. All
                investing involves risk, including the potential loss of
                principal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FundOverviewSection() {
  const overviewItems = [
    {
      title: "Mandate",
      body: "Provide investors with a disciplined, rules-based exposure to SGI’s trading systems, while maintaining a conservative approach to leverage, liquidity, and drawdown control.",
      icon: ShieldCheck,
    },
    {
      title: "Edge",
      body: "Our edge is not a single model, but the combination of research, execution, and robust risk tooling — allowing our systems to adapt to changing market regimes without emotional interference.",
      icon: Cpu,
    },
    {
      title: "Alignment",
      body: "SGI invests alongside our clients. Our capital is subject to the same risk framework, fees, and reporting, ensuring alignment of incentives over the long term.",
      icon: Users2,
    },
  ];

  return (
    <section className="bg-[#EFE3CE]/40 py-16 lg:py-20 border-t border-[#EFE3CE]">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
        <div className="max-w-2xl space-y-4">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-slate-600 uppercase">
            <Layers className="h-3.5 w-3.5 text-[#3A5E7B]" />
            Fund Overview
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#3A5E7B]">
            A focused vehicle for SGI’s algorithmic systems.
          </h2>
          <p className="text-sm sm:text-base text-slate-700">
            SGI-LINK is a private investment fund dedicated to one thing:
            deploying capital into SGI’s proprietary trading systems, built to
            operate methodically across global currency and commodities markets.
          </p>
          <p className="text-sm text-slate-600">
            We do not chase themes, stories, or narratives. We allocate to
            tested models, maintain strict risk parameters, and continually
            refine the underlying infrastructure that supports them.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {overviewItems.map(({ title, body, icon: Icon }) => (
            <article
              key={title}
              className="rounded-2xl border border-[#EFE3CE] bg-white p-6 shadow-sm"
            >
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#A7C7F1]/15 text-[#3A5E7B]">
                <Icon className="h-4 w-4" />
              </div>
              <h3 className="text-sm font-semibold text-[#3A5E7B] mb-2">
                {title}
              </h3>
              <p className="text-sm text-slate-700">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StrategySection() {
  const steps = [
    {
      label: "1 · Research & Testing",
      title: "Systematic idea pipeline",
      body: "New ideas enter a research pipeline where they are stress-tested across instruments, timeframes, and regimes before any capital is allocated.",
      icon: FileText,
    },
    {
      label: "2 · Portfolio Construction",
      title: "Risk-balanced combination",
      body: "Strategies are combined to target balanced risk contributions, not simply the highest standalone return. We favor stability of the whole over aggressiveness of any part.",
      icon: Layers,
    },
    {
      label: "3 · Continuous Risk Oversight",
      title: "Live monitoring & controls",
      body: "Live systems are monitored against predefined risk limits, with automated de-risking and human oversight when behavior falls outside of expectations.",
      icon: BarChart3,
    },
  ];

  return (
    <section
      id="strategy"
      className="bg-white py-20 lg:py-24 border-t border-[#EFE3CE]"
    >
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="space-y-5">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-slate-600 uppercase">
            <ShieldCheck className="h-3.5 w-3.5 text-[#3A5E7B]" />
            Strategy &amp; Risk
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#3A5E7B]">
            Built on diversified, rules-driven systems.
          </h2>
          <p className="text-sm sm:text-base text-slate-700">
            SGI-LINK aggregates multiple in-house strategies — each with its own
            inputs, timeframes, and risk budgets — into a single portfolio
            designed to remain durable across regimes.
          </p>
          <p className="text-sm text-slate-600">
            Every model is evaluated not only on standalone return, but on how
            it behaves within the broader system: correlation, drawdown profile,
            and contribution to overall risk.
          </p>
          <button className="inline-flex items-center text-sm font-medium text-[#3A5E7B] hover:text-[#2f4c63]">
            Learn more about our strategy
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </button>
        </div>

        <div className="space-y-4">
          {steps.map(({ label, title, body, icon: Icon }) => (
            <article
              key={label}
              className="rounded-2xl border border-[#EFE3CE] bg-[#EFE3CE]/40 p-5 sm:p-6"
            >
              <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-slate-600 uppercase mb-1">
                <Icon className="h-3.5 w-3.5 text-[#3A5E7B]" />
                {label}
              </p>
              <p className="text-sm text-[#3A5E7B] mb-1.5">{title}</p>
              <p className="text-sm text-slate-700">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnologySection() {
  const layers = [
    {
      label: "Execution Layer",
      body: "Order routing, slippage controls, and venue selection tuned for our markets.",
      icon: Globe2,
    },
    {
      label: "Model Layer",
      body: "Portfolio of independently tested strategies with clearly defined roles.",
      icon: Cpu,
    },
    {
      label: "Risk Layer",
      body: "Position limits, max loss thresholds, and automatic de-risking logic.",
      icon: ShieldCheck,
    },
    {
      label: "Reporting Layer",
      body: "Investor reporting aligned with institutional expectations.",
      icon: FileText,
    },
  ];

  return (
    <section
      id="technology"
      className="bg-[#EFE3CE]/40 py-20 lg:py-24 border-t border-[#EFE3CE]"
    >
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="space-y-5">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-slate-600 uppercase">
            <Cpu className="h-3.5 w-3.5 text-[#3A5E7B]" />
            Technology Stack
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#3A5E7B]">
            Infrastructure built for live markets.
          </h2>
          <p className="text-sm sm:text-base text-slate-700">
            Our systems run on purpose-built infrastructure designed for live
            execution, monitoring, and rapid iteration — not research notebooks.
          </p>

          <ul className="space-y-3 text-sm text-slate-700">
            <li className="flex gap-2">
              <span className="mt-0.5">
                <Globe2 className="h-4 w-4 text-[#3A5E7B]" />
              </span>
              <span>
                <span className="font-medium text-[#3A5E7B]">Execution ·</span>{" "}
                Broker and venue connectivity tuned for FX and futures
                liquidity.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-0.5">
                <BarChart3 className="h-4 w-4 text-[#3A5E7B]" />
              </span>
              <span>
                <span className="font-medium text-[#3A5E7B]">Monitoring ·</span>{" "}
                Real-time health dashboards, alerts, and risk signals.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-0.5">
                <Layers className="h-4 w-4 text-[#3A5E7B]" />
              </span>
              <span>
                <span className="font-medium text-[#3A5E7B]">Iteration ·</span>{" "}
                Continuous deployment of model improvements behind strict
                validation gates.
              </span>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          {layers.map(({ label, body, icon: Icon }) => (
            <div
              key={label}
              className="rounded-2xl border border-[#EFE3CE] bg-white p-4 sm:p-5 shadow-sm"
            >
              <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-slate-600 uppercase mb-1">
                <Icon className="h-3.5 w-3.5 text-[#3A5E7B]" />
                {label}
              </p>
              <p className="text-sm text-slate-700">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InvestorSection() {
  const steps = [
    {
      label: "Step 1 · Introductory conversation",
      body: "Share your objectives, constraints, and current portfolio context.",
      icon: PhoneCall,
    },
    {
      label: "Step 2 · Strategy & documents",
      body: "Review our strategy deck, risk disclosures, and legal documentation.",
      icon: FileText,
    },
    {
      label: "Step 3 · Allocation & onboarding",
      body: "Complete subscription documents and funding through our administrator.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section
      id="investor-profile"
      className="bg-white py-20 lg:py-24 border-t border-[#EFE3CE]"
    >
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-slate-600 uppercase">
            <Users2 className="h-3.5 w-3.5 text-[#3A5E7B]" />
            Investor Profile
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-[#3A5E7B]">
            Built for patient, qualified capital.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-700">
            SGI-LINK is designed for investors who value discipline,
            transparency, and a repeatable process more than short-term
            headlines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="rounded-2xl border border-[#EFE3CE] bg-[#EFE3CE]/40 p-6 space-y-4">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-[#3A5E7B]">
              <Users2 className="h-4 w-4" />
              Who we typically work with
            </h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li>
                <span className="font-medium text-[#3A5E7B]">
                  Investor type ·
                </span>{" "}
                Accredited and qualified investors.
              </li>
              <li>
                <span className="font-medium text-[#3A5E7B]">
                  Time horizon ·
                </span>{" "}
                Multi-year allocation with tolerance for normal market
                drawdowns.
              </li>
              <li>
                <span className="font-medium text-[#3A5E7B]">
                  Role in portfolio ·
                </span>{" "}
                Systematic sleeve within a diversified alternatives allocation.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            {steps.map(({ label, body, icon: Icon }) => (
              <div
                key={label}
                className="rounded-2xl border border-[#EFE3CE] bg-white p-5 shadow-sm"
              >
                <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-slate-600 uppercase mb-1">
                  <Icon className="h-3.5 w-3.5 text-[#3A5E7B]" />
                  {label}
                </p>
                <p className="text-sm text-slate-700">{body}</p>
              </div>
            ))}

            <button className="inline-flex items-center justify-center rounded-full bg-[#3A5E7B] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[rgba(58,94,123,0.35)] hover:bg-[#324f68] transition">
              <PhoneCall className="mr-2 h-4 w-4" />
              Request an introductory call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    {
      q: "What markets do you trade?",
      a: "Our systems are primarily focused on major global currency pairs and select commodities futures, where liquidity and structure support systematic approaches.",
    },
    {
      q: "Is SGI-LINK suitable for short-term trading?",
      a: "No. SGI-LINK is designed as a longer-term allocation. While our systems operate on a range of timeframes, we encourage investors to view the fund through a multi-year lens.",
    },
    {
      q: "How do you think about risk?",
      a: "Risk is defined and measured before return. We monitor position sizing, drawdowns, and correlation across strategies, with rules in place to reduce exposure when conditions warrant.",
    },
    {
      q: "How often do investors receive reporting?",
      a: "Investors receive regular reporting outlining performance, risk metrics, and high-level positioning, in addition to on-request conversations.",
    },
  ];

  return (
    <section
      id="faq"
      className="bg-[#EFE3CE]/40 py-16 lg:py-20 border-t border-[#EFE3CE]"
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-0 space-y-8">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-slate-600 uppercase">
            <HelpCircle className="h-3.5 w-3.5 text-[#3A5E7B]" />
            Frequently Asked
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-[#3A5E7B]">
            Questions from prospective investors.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-[#EFE3CE] bg-white p-4 shadow-sm"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-medium text-slate-800">
                <span>{item.q}</span>
                <ChevronDown className="h-4 w-4 text-slate-500 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm text-slate-700">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section
      id="cta"
      className="bg-white py-16 lg:py-20 border-t border-[#EFE3CE]"
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-0 text-center space-y-6">
        <div className="inline-flex rounded-full border border-[#A7C7F1]/60 bg-[#A7C7F1]/10 px-3 py-1">
          <p className="text-[11px] font-medium tracking-[0.22em] text-[#3A5E7B] uppercase">
            Next Step
          </p>
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#3A5E7B]">
          A quiet, disciplined engine inside your portfolio.
        </h2>
        <p className="text-sm sm:text-base text-slate-700 max-w-xl mx-auto">
          If you’d like to explore an allocation to SGI-LINK, we’re happy to
          walk through our systems, risk framework, and track record in detail.
        </p>

        <button className="inline-flex items-center justify-center rounded-full bg-[#3A5E7B] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[rgba(58,94,123,0.35)] hover:bg-[#324f68] transition">
          Request Access
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>

        <p className="flex items-start gap-2 text-[11px] leading-relaxed text-slate-500 max-w-xl mx-auto">
          <ShieldCheck className="mt-0.5 h-3.5 w-3.5 text-[#3A5E7B]" />
          <span>
            SGI-LINK is available only to qualified and accredited investors.
            This website is for informational purposes only and does not
            constitute an offer to sell or a solicitation of an offer to buy any
            security.
          </span>
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#EFE3CE] bg-[#EFE3CE]/40 py-8">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="flex items-center gap-2 text-xs text-slate-600">
          <LineChart className="h-3.5 w-3.5 text-[#3A5E7B]" />
          <span>
            © {new Date().getFullYear()} SGI-LINK. All rights reserved.
          </span>
        </p>
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">
          <button className="inline-flex items-center gap-1 hover:text-[#3A5E7B]">
            <Lock className="h-3.5 w-3.5" />
            Privacy
          </button>
          <button className="hover:text-[#3A5E7B]">Terms</button>
          <button className="hover:text-[#3A5E7B]">Disclosures</button>
        </div>
      </div>
    </footer>
  );
}
