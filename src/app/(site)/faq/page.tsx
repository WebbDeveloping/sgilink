// app/(site)/faq/page.tsx

import { Section } from "@/components/sections";
import { ContentBlock } from "@/components/sections/ContentBlock";
import { FaqItem } from "@/components/cards";
import { PrimaryLinkButton } from "@/components/buttons";

const faqs = [
  // General & Overview
  {
    category: "General & Overview",
    items: [
      {
        question: "What is SGI-LINK and how does it work?",
        answer:
          "SGI-LINK is a specialized investment fund that deploys capital into SGI's proprietary algorithmic trading systems. These systems are developed, tested, and refined in-house, focusing on FX and commodities markets. The fund operates as a fully automated, hands-off portfolio designed for passive investors seeking technology-powered returns.",
      },
      {
        question: "Who is SGI-LINK designed for?",
        answer:
          "SGI-LINK is built for accredited investors and high-net-worth individuals who want above-average returns powered by quantitative technology without needing to trade, rebalance, or time markets themselves. The fund is structured for passive, long-term capital that values structure, transparency, and risk discipline.",
      },
      {
        question: "What makes SGI-LINK different from other funds?",
        answer:
          "SGI-LINK doesn't market fleeting trends or repackage yesterday's strategies. We serve investors who recognize that exceptional returns require exceptional systems—backed by rigorous testing, transparent methodology, and unwavering discipline. Our approach emphasizes realistic expectations and honest communication about risk.",
      },
      {
        question: "What markets do your systems trade?",
        answer:
          "SGI-LINK focuses on major FX pairs and selected commodities where liquidity, trading hours, and microstructure support systematic strategies. This specialization comes from years spent understanding how these markets actually trade, rather than theoretical models.",
      },
    ],
  },
  // Investment & Eligibility
  {
    category: "Investment & Eligibility",
    items: [
      {
        question: "What is the minimum investment?",
        answer:
          "SGI-LINK is designed for accredited investors. Minimum investment requirements are discussed during your personal consultation to ensure the fund aligns with your investment objectives and regulatory requirements.",
      },
      {
        question: "Who can invest in SGI-LINK?",
        answer:
          "SGI-LINK is available to accredited investors and qualified purchasers as defined by securities regulations. We conduct thorough suitability assessments during the consultation process to ensure the fund is appropriate for each investor's situation.",
      },
      {
        question: "Is my capital locked up?",
        answer:
          "Investment terms and liquidity provisions are discussed during your consultation. We structure our offerings to balance investor needs with the operational requirements of systematic trading strategies. Terms vary based on the specific strategy and investment structure.",
      },
      {
        question: "Can I see performance data before investing?",
        answer:
          "Yes. During your consultation, we provide detailed performance data, risk metrics, and strategy documentation. We believe in transparency and want you to make an informed decision based on real data, not marketing promises.",
      },
    ],
  },
  // Strategy & Performance
  {
    category: "Strategy & Performance",
    items: [
      {
        question: "Are your results based on live trading or backtests?",
        answer:
          "Our systems were built through years of real-world, live trading across FX and commodities markets—not just backtests. Many ideas were tested and discarded. The systems that remain reflect what survived actual liquidity shocks, changing market regimes, and real trading conditions.",
      },
      {
        question: "Can I choose which strategy to use?",
        answer:
          "Yes. After your personal consultation, you'll work with our team to select the strategy approach that best fits your risk profile, investment goals, and timeline. We offer different strategy options designed with defined risk parameters and clear performance expectations.",
      },
      {
        question: "How are strategies developed and tested?",
        answer:
          "Each strategy undergoes rigorous backtesting, forward testing with paper trading, and live validation before being deployed. We test strategies across multiple market regimes, stress scenarios, and liquidity conditions. Only strategies that demonstrate consistent risk-adjusted returns and robust risk management are considered for deployment.",
      },
      {
        question: "What kind of returns can I expect?",
        answer:
          "Past performance is not indicative of future results. We focus on risk-adjusted returns and transparent communication about both potential returns and risks. During your consultation, we'll discuss realistic expectations based on historical performance, current market conditions, and your specific risk profile.",
      },
    ],
  },
  // Risk & Management
  {
    category: "Risk & Management",
    items: [
      {
        question: "How do you manage risk and handle drawdowns?",
        answer:
          "We combine advanced quantitative tools with a conservative risk posture. Our systems include robust risk-management frameworks, position sizing controls, and clear guardrails around leverage and drawdowns. We're transparent about volatility, normal drawdowns, and periods of underperformance—not just return potential.",
      },
      {
        question: "What happens during market volatility or crashes?",
        answer:
          "Our systems are designed with risk constraints and automated de-risking logic to protect capital during adverse conditions. We use portfolio limits, per-strategy guardrails, and dynamic position sizing to manage exposure. However, all investments carry risk, and past performance does not guarantee future results.",
      },
      {
        question: "Do I maintain control of my investment account?",
        answer:
          "Yes, you maintain full control and transparency. You can monitor performance, review detailed reporting, and work with our team to adjust your strategy allocation as your needs evolve. We believe in transparency and ongoing communication.",
      },
      {
        question:
          "How is the fund regulated and what protections are in place?",
        answer:
          "SGI-LINK operates within applicable securities regulations and maintains appropriate compliance frameworks. We provide detailed documentation, regular reporting, and transparent communication. Specific regulatory details and investor protections are discussed during the consultation process.",
      },
    ],
  },
  // Technical & Operational
  {
    category: "Technical & Operational",
    items: [
      {
        question: "How automated are the trading systems?",
        answer:
          "Our systems are fully automated, operating 24/5 across global markets. Once deployed, strategies execute trades automatically based on predefined algorithms and risk parameters. This hands-off approach allows for consistent execution without emotional decision-making.",
      },
      {
        question: "What technology infrastructure do you use?",
        answer:
          "We use institutional-grade trading infrastructure, including low-latency execution systems, redundant connectivity, and robust risk management platforms. Our technology stack is designed for reliability, security, and performance in live trading environments.",
      },
      {
        question: "How often do you update or modify strategies?",
        answer:
          "We continuously monitor strategy performance and market conditions. Strategy modifications are made based on rigorous analysis and testing, not reactive market moves. We maintain discipline in our approach, avoiding over-optimization or strategy drift.",
      },
      {
        question: "What reporting and transparency do you provide?",
        answer:
          "Investors receive regular performance reports, risk metrics, and strategy updates. We provide detailed documentation on strategy methodology, risk parameters, and performance attribution. Transparency is a core value, and we're committed to keeping investors informed.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-bg text-text">
      {/* Hero Section */}
      <Section background="blue" padding="hero">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ContentBlock
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Find answers to common questions about SGI-LINK, our investment approach, and how we operate. If you have additional questions, we're here to help."
            align="center"
            maxWidth="lg"
          />
        </div>
      </Section>

      {/* FAQ Sections */}
      {faqs.map((category, categoryIndex) => (
        <Section
          key={category.category}
          background={categoryIndex % 2 === 0 ? "surface" : "warm"}
          padding="standard"
        >
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-2xl font-semibold tracking-tight text-text sm:text-3xl mb-8">
              {category.category}
            </h2>
            <div className="space-y-4">
              {category.items.map((faq, index) => (
                <FaqItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </Section>
      ))}

      {/* CTA Section */}
      <Section background="brand-on" padding="standard">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ContentBlock
            title="Still have questions?"
            description={
              <p className="text-lg leading-relaxed text-brand-soft sm:text-xl">
                We&apos;re here to help. Reach out to our team for a personal
                consultation and detailed discussion about how SGI-LINK might
                fit into your investment strategy.
              </p>
            }
            align="center"
            maxWidth="lg"
            className="[&_h2]:text-4xl [&_h2]:font-semibold [&_h2]:sm:text-5xl [&_h2]:text-surface"
          >
            <div className="mt-8 flex justify-center">
              <PrimaryLinkButton
                href="/contact"
                className="bg-surface text-brand hover:bg-chip-blue"
              >
                Contact Us
              </PrimaryLinkButton>
            </div>
          </ContentBlock>
        </div>
      </Section>
    </main>
  );
}
