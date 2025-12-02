// app/why-sgi/page.jsx
import { ShieldCheck, Layers, Cpu, Users2 } from "lucide-react";

export default function WhySgiPage() {
  return (
    <main className="bg-white text-slate-900 min-h-screen">
      <WhyHeroSection />
      <DifferentiatorsSection />
      <PhilosophySection />
      <InvestorFitSection />
    </main>
  );
}

function WhyHeroSection() {
  return (
    <section className="border-b border-[#EFE3CE] bg-white py-20 lg:py-24">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 lg:px-8 space-y-6">
        <div className="max-w-3xl space-y-4">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-slate-600 uppercase">
            <ShieldCheck className="h-3.5 w-3.5 text-[#3A5E7B]" />
            Why SGI-LINK
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3A5E7B] tracking-tight">
            Modern quant technology, conservative investment DNA.
          </h1>
          <p className="text-sm sm:text-base text-slate-700">
            SGI-LINK sits at the intersection of advanced algorithmic
            engineering and a deliberately conservative, transparent investment
            philosophy—designed for investors who want realistic, sustainable
            outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}

function DifferentiatorsSection() {
  const points = [
    {
      title: "Years of live, real-world testing",
      body: "The strategy is built on years of deploying and refining systems in live markets—not just simulated results or short-lived experiments.",
    },
    {
      title: "Technology + discipline, not hype",
      body: "We apply modern quant tools in a conservative framework, favoring stability and repeatability over aggressive leverage or marketing-driven narratives.",
    },
    {
      title: "Transparent, realistic expectations",
      body: "We are explicit about risk, drawdowns, and limitations, and avoid promising outcomes that cannot be responsibly supported by data.",
    },
    {
      title: "Built for passive investors",
      body: "The fund is designed for investors who want a systematic, hands-off sleeve within a broader portfolio—not another full-time trading job.",
    },
  ];

  return (
    <section className="bg-[#EFE3CE]/40 border-b border-[#EFE3CE] py-20 lg:py-24">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#3A5E7B]">
          What makes SGI-LINK different.
        </h2>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {points.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-[#EFE3CE] bg-white p-6"
            >
              <h3 className="text-sm font-semibold text-[#3A5E7B] mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-slate-700">{p.body}</p>
            </div>
          ))}
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
          <p className="text-xs font-semibold tracking-[0.22em] text-slate-600 uppercase flex items-center gap-2">
            <Cpu className="h-3.5 w-3.5 text-[#3A5E7B]" />
            Approach
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#3A5E7B]">
            A system-first mindset.
          </h2>
          <p className="text-sm sm:text-base text-slate-700">
            We see the fund as a single, integrated engine: research, execution,
            risk, and reporting designed to work together with clear rules.
            Decisions are made at the system level, not on impulse.
          </p>
        </div>

        <div className="rounded-2xl border border-[#EFE3CE] bg-[#EFE3CE]/40 p-6 space-y-3">
          <ul className="space-y-2 text-sm text-slate-700">
            <li>
              <span className="font-medium text-[#3A5E7B]">
                Rules over intuition ·{" "}
              </span>
              Every trade is the output of a defined process, not a hunch.
            </li>
            <li>
              <span className="font-medium text-[#3A5E7B]">
                Portfolio over trades ·{" "}
              </span>
              We manage the whole system&apos;s behavior, not just individual
              positions.
            </li>
            <li>
              <span className="font-medium text-[#3A5E7B]">
                Iteration over perfection ·{" "}
              </span>
              Models are continually evaluated and improved within strict risk
              and validation gates.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function InvestorFitSection() {
  return (
    <section className="bg-[#EFE3CE]/40 py-20 lg:py-24">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="space-y-3">
          <p className="text-xs font-semibold tracking-[0.22em] text-slate-600 uppercase flex items-center gap-2">
            <Users2 className="h-3.5 w-3.5 text-[#3A5E7B]" />
            Investor Profile
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#3A5E7B]">
            For patient, qualified capital.
          </h2>
          <p className="text-sm sm:text-base text-slate-700">
            SGI-LINK is intentionally built for accredited investors and high
            net worth individuals who value consistency, discipline, and
            transparency over short-term excitement.
          </p>
        </div>

        <div className="rounded-2xl border border-[#EFE3CE] bg-white p-6 space-y-3">
          <ul className="space-y-2 text-sm text-slate-700">
            <li>
              <span className="font-medium text-[#3A5E7B]">
                Time horizon ·{" "}
              </span>
              Multi-year, with room for normal drawdowns.
            </li>
            <li>
              <span className="font-medium text-[#3A5E7B]">Role · </span>A
              systematic sleeve within a diversified alternatives allocation.
            </li>
            <li>
              <span className="font-medium text-[#3A5E7B]">
                Expectations ·{" "}
              </span>
              Focus on repeatable, risk-aware returns—no guaranteed outcomes.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
