// app/team/page.jsx
import { ArrowRight, Users2, ShieldCheck } from "lucide-react";

export default function TeamPage() {
  const team = [
    {
      name: "Name Placeholder",
      role: "Chief Investment Officer",
      bio: "Leads research, portfolio construction, and risk management for SGI-LINK’s algorithmic strategies.",
    },
    {
      name: "Name Placeholder",
      role: "Head of Technology",
      bio: "Responsible for trading infrastructure, execution systems, and monitoring tools that support live deployment.",
    },
    {
      name: "Name Placeholder",
      role: "Operations & Investor Relations",
      bio: "Oversees fund operations, service providers, and communication with investors.",
    },
  ];

  return (
    <main className="bg-white text-slate-900 min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-white via-white to-[#EFE3CE]/40 pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 border-b border-[#EFE3CE]">
        <div className="relative max-w-5xl mx-auto px-6 lg:px-0">
          <div className="mx-auto max-w-3xl text-center space-y-5">
            <p className="inline-flex items-center justify-center gap-2 text-[11px] font-semibold tracking-[0.22em] text-slate-500 uppercase">
              <Users2 className="h-3.5 w-3.5 text-[#3A5E7B]" />
              Team
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
              A small team focused on{" "}
              <span className="text-[#3A5E7B]">one strategy.</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto">
              SGI-LINK is built and run by a team that combines trading,
              quantitative research, and technology backgrounds, with a shared
              focus on disciplined execution.
            </p>
          </div>

          {/* Subtle alignment card */}
          <div className="mt-10 rounded-3xl border border-[#EFE3CE] bg-white/80 backdrop-blur-sm shadow-[0_18px_45px_rgba(15,23,42,0.08)] p-6 sm:p-8 space-y-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <p className="text-[11px] font-semibold tracking-[0.2em] text-slate-500 uppercase">
                  Alignment
                </p>
                <p className="text-sm text-slate-800">
                  The principals responsible for research, risk, and execution
                  invest alongside our clients and remain directly accountable
                  for results.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#EFE3CE]/80 px-4 py-2 text-[11px] font-medium tracking-[0.18em] text-slate-700 uppercase">
                <span className="inline-flex h-2 w-2 rounded-full bg-[#3A5E7B]" />
                Principal-led · Owner-operated
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section className="bg-[#EFE3CE]/40 border-b border-[#EFE3CE] py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-6 lg:gap-8">
          {team.map((member) => (
            <article
              key={member.name}
              className="rounded-2xl border border-[#EFE3CE] bg-white p-6 shadow-sm flex flex-col"
            >
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#A7C7F1]/15 text-[#3A5E7B]">
                <Users2 className="h-4 w-4" />
              </div>
              <h2 className="text-sm font-semibold text-[#3A5E7B]">
                {member.name}
              </h2>
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500 mt-1 mb-3">
                {member.role}
              </p>
              <p className="text-sm text-slate-700 leading-relaxed flex-1">
                {member.bio}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-white py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(58,94,123,0.06),_transparent_70%)]" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-0 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#3A5E7B]">
            Direct access to decision makers.
          </h2>
          <p className="text-sm sm:text-base text-slate-700">
            Prospective investors speak directly with the principals responsible
            for the strategy, not a sales team. We are happy to walk through our
            approach, drawdowns, and risk framework in plain language.
          </p>
          <button className="inline-flex items-center justify-center rounded-full bg-[#3A5E7B] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[rgba(58,94,123,0.35)] hover:bg-[#324f68] transition">
            Request an introductory call
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          <p className="flex items-center justify-center gap-2 text-[11px] text-slate-500 mt-2">
            <ShieldCheck className="h-3.5 w-3.5 text-[#3A5E7B]" />
            For qualified and accredited investors only.
          </p>
        </div>
      </section>
    </main>
  );
}
