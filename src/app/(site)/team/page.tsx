// app/team/page.jsx
import { Users2, ShieldCheck, FileText } from "lucide-react";

export default function TeamPage() {
  return (
    <main className="bg-white text-slate-900 min-h-screen">
      <TeamHeroSection />
      <TeamGridSection />
      <RiskComplianceSection />
    </main>
  );
}

function TeamHeroSection() {
  return (
    <section className="border-b border-[#EFE3CE] bg-white py-20 lg:py-24">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 lg:px-8 space-y-6">
        <div className="max-w-3xl space-y-4">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-slate-600 uppercase">
            <Users2 className="h-3.5 w-3.5 text-[#3A5E7B]" />
            Team
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3A5E7B] tracking-tight">
            A team built around systems, risk, and accountability.
          </h1>
          <p className="text-sm sm:text-base text-slate-700">
            SGI-LINK is led by practitioners who have spent years designing,
            trading, and refining algorithmic strategies in live markets. The
            focus is on depth of experience, alignment with investors, and a
            clear separation between research, execution, and risk oversight.
          </p>
        </div>
      </div>
    </section>
  );
}

function TeamGridSection() {
  const members = [
    {
      name: "First Last",
      role: "Founder & Chief Investment Officer",
      bio: "Responsible for research direction, portfolio construction, and overall risk framework. Brings years of experience deploying systematic strategies across FX and commodities.",
    },
    {
      name: "First Last",
      role: "Head of Research",
      bio: "Leads the idea pipeline, model development, and validation process, ensuring new strategies meet strict robustness and risk criteria before entering the portfolio.",
    },
    {
      name: "First Last",
      role: "Head of Trading & Execution",
      bio: "Oversees broker relationships, execution infrastructure, and live monitoring to ensure orders are routed efficiently while adhering to risk and slippage constraints.",
    },
    {
      name: "First Last",
      role: "Investor Relations",
      bio: "Manages communication with investors, reporting, and education—translating complex systematic concepts into clear, straightforward updates.",
    },
  ];

  return (
    <section className="bg-[#EFE3CE]/40 border-b border-[#EFE3CE] py-20 lg:py-24">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#3A5E7B]">
          The people behind the systems.
        </h2>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {members.map((m) => (
            <article
              key={m.name + m.role}
              className="rounded-2xl border border-[#EFE3CE] bg-white p-6"
            >
              <h3 className="text-sm font-semibold text-[#3A5E7B]">{m.name}</h3>
              <p className="text-xs text-slate-600 mb-2">{m.role}</p>
              <p className="text-sm text-slate-700">{m.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RiskComplianceSection() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="space-y-4">
          <p className="text-xs font-semibold tracking-[0.22em] text-slate-600 uppercase flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-[#3A5E7B]" />
            Risk & Compliance
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#3A5E7B]">
            Dedicated oversight, not an afterthought.
          </h2>
          <p className="text-sm sm:text-base text-slate-700">
            Risk and compliance are integrated into SGI-LINK’s operating
            structure, with clearly defined responsibilities and escalation
            paths for anything outside expected system behavior.
          </p>
        </div>

        <div className="rounded-2xl border border-[#EFE3CE] bg-[#EFE3CE]/40 p-6 space-y-3">
          <p className="text-sm text-slate-700">
            A dedicated risk and compliance function is responsible for:
          </p>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>
              <span className="font-medium text-[#3A5E7B]">
                Monitoring limits ·{" "}
              </span>
              Ensuring portfolio and per-strategy limits are respected.
            </li>
            <li>
              <span className="font-medium text-[#3A5E7B]">
                Reviewing changes ·{" "}
              </span>
              Reviewing model and infrastructure changes before deployment.
            </li>
            <li>
              <span className="font-medium text-[#3A5E7B]">
                Regulatory alignment ·{" "}
              </span>
              Coordinating with legal counsel and administrators on
              documentation and disclosures.
            </li>
          </ul>
          <p className="text-[11px] text-slate-500 flex items-center gap-2">
            <FileText className="h-3.5 w-3.5 text-[#3A5E7B]" />
            Specific titles and entities can be added here once finalized with
            your legal team.
          </p>
        </div>
      </div>
    </section>
  );
}
