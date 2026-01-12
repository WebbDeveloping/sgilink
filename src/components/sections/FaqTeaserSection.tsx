// components/sections/FaqTeaserSection.tsx
import { Section } from "./";

const faqs = [
  {
    id: 1,
    question: "What is SGI-LINK and how does it work?",
    answer:
      "SGI-LINK is a specialized investment fund that deploys capital into SGI's proprietary algorithmic trading systems. These systems are developed, tested, and refined in-house, focusing on FX and commodities markets. The fund operates as a fully automated, hands-off portfolio designed for passive investors seeking technology-powered returns.",
  },
  {
    id: 2,
    question: "Who is SGI-LINK designed for?",
    answer:
      "SGI-LINK is built for accredited investors and high-net-worth individuals who want above-average returns powered by quantitative technology without needing to trade, rebalance, or time markets themselves. The fund is structured for passive, long-term capital that values structure, transparency, and risk discipline.",
  },
  {
    id: 3,
    question: "Are your results based on live trading or backtests?",
    answer:
      "Our systems were built through years of real-world, live trading across FX and commodities markets—not just backtests. Many ideas were tested and discarded. The systems that remain reflect what survived actual liquidity shocks, changing market regimes, and real trading conditions.",
  },
  {
    id: 4,
    question: "What markets do your systems trade?",
    answer:
      "SGI-LINK focuses on major FX pairs and selected commodities where liquidity, trading hours, and microstructure support systematic strategies. This specialization comes from years spent understanding how these markets actually trade, rather than theoretical models.",
  },
  {
    id: 5,
    question: "How do you manage risk and handle drawdowns?",
    answer:
      "We combine advanced quantitative tools with a conservative risk posture. Our systems include robust risk-management frameworks, position sizing controls, and clear guardrails around leverage and drawdowns. We're transparent about volatility, normal drawdowns, and periods of underperformance—not just return potential.",
  },
  {
    id: 6,
    question: "What makes SGI-LINK different from other funds?",
    answer:
      "SGI-LINK doesn't market fleeting trends or repackage yesterday's strategies. We serve investors who recognize that exceptional returns require exceptional systems—backed by rigorous testing, transparent methodology, and unwavering discipline. Our approach emphasizes realistic expectations and honest communication about risk.",
  },
];

export function FaqTeaserSection() {
  return (
    <Section background="warm" padding="standard" className="relative z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl lg:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-sm/6 text-text-muted sm:mt-6 sm:text-base/7">
            Have a different question and can't find the answer you're looking for? Reach out to our support team by{' '}
            <a href="/contact" className="font-semibold text-brand hover:text-brand-soft">
              sending us an email
            </a>{' '}
            and we'll get back to you as soon as we can.
          </p>
        </div>
        <div className="mt-12 sm:mt-20">
          <dl className="space-y-10 sm:grid sm:grid-cols-2 sm:space-y-0 sm:gap-x-6 sm:gap-y-12 lg:gap-x-10 lg:gap-y-16">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-sm/6 font-semibold text-text sm:text-base/7">{faq.question}</dt>
                <dd className="mt-2 text-sm/6 text-text-muted sm:text-base/7">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}

