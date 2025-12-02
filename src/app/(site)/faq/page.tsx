// app/faq/page.jsx
import { ArrowRight, ChevronDown, HelpCircle } from "lucide-react";

export default function FaqPage() {
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
    <main className="bg-white text-slate-900 min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-white via-white to-[#EFE3CE]/40 pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 border-b border-[#EFE3CE]">
        <div className="relative max-w-4xl mx-auto px-6 lg:px-0 text-center space-y-6">
          <p className="inline-flex items-center justify-center gap-2 text-[11px] font-semibold tracking-[0.22em] text-slate-500 uppercase">
            <HelpCircle className="h-3.5 w-3.5 text-[#3A5E7B]" />
            Frequently Asked Questions
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
            Clarity before <span className="text-[#3A5E7B]">commitment.</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto">
            Below are some of the most common questions we receive from
            prospective investors about SGI-LINK’s strategy, risk, and
            operations.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="bg-[#EFE3CE]/40 border-b border-[#EFE3CE] py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-0 space-y-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-[#EFE3CE] bg-white p-5 sm:p-6 shadow-sm transition-all"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-medium text-slate-800">
                <span>{item.q}</span>
                <ChevronDown className="h-4 w-4 text-slate-500 transition-transform group-open:rotate-180" />
              </summary>

              <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-white py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(58,94,123,0.06),_transparent_70%)]" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-0 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#3A5E7B]">
            Have a question that isn’t listed?
          </h2>

          <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto">
            We encourage prospective investors to ask detailed questions about
            our systems, risk controls, and operations before allocating
            capital.
          </p>

          <button className="inline-flex items-center justify-center rounded-full bg-[#3A5E7B] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[rgba(58,94,123,0.35)] hover:bg-[#324f68] transition">
            Request an introductory call
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </section>
    </main>
  );
}
