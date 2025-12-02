// app/insights/page.jsx
import { FileText } from "lucide-react";

export default function InsightsPage() {
  return (
    <main className="bg-white text-slate-900 min-h-screen">
      <InsightsHeroSection />
      <InsightsListSection />
    </main>
  );
}

function InsightsHeroSection() {
  return (
    <section className="border-b border-[#EFE3CE] bg-white py-20 lg:py-24">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 lg:px-8 space-y-6">
        <div className="max-w-3xl space-y-4">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-slate-600 uppercase">
            <FileText className="h-3.5 w-3.5 text-[#3A5E7B]" />
            Insights
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3A5E7B] tracking-tight">
            Research notes and market perspectives.
          </h1>
          <p className="text-sm sm:text-base text-slate-700">
            A space for high-level commentary, educational content, and updates
            on how we think about systematic investing in FX and commodities.
          </p>
        </div>
      </div>
    </section>
  );
}

function InsightsListSection() {
  const posts = [
    {
      title: "Placeholder insight title",
      desc: "Short description of an educational or high-level market concept related to systematic FX and commodities strategies.",
    },
    {
      title: "Another example post",
      desc: "Additional insight showing how SGI thinks about risk, diversification, or execution in live markets.",
    },
  ];

  return (
    <section className="bg-[#EFE3CE]/40 py-20 lg:py-24">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {posts.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-[#EFE3CE] bg-white p-6"
            >
              <h2 className="text-sm font-semibold text-[#3A5E7B] mb-1">
                {p.title}
              </h2>
              <p className="text-sm text-slate-700">{p.desc}</p>
              <p className="mt-3 text-[11px] text-slate-500">
                Content to be populated subject to compliance review.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
