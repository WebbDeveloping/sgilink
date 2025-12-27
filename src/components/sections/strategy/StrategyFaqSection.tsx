// components/sections/strategy/StrategyFaqSection.tsx
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const strategyFaqs = [
  {
    question: "Are the strategies backtested or live traded?",
    answer:
      "Our systems were built through years of real-world, live trading across FX and commodities markets—not just backtests. Each strategy undergoes rigorous backtesting, forward testing with paper trading, and live validation before being deployed. Many ideas were tested and discarded. The systems that remain reflect what survived actual liquidity shocks, changing market regimes, and real trading conditions.",
  },
  {
    question: "Can I choose which strategy to use?",
    answer:
      "Yes. After your personal consultation, you'll work with our team to select the strategy approach that best fits your risk profile, investment goals, and timeline. We offer different strategy options designed with defined risk parameters and clear performance expectations.",
  },
  {
    question: "Do I maintain control of my investment account?",
    answer:
      "Yes, you maintain full control and transparency. You can monitor performance, review detailed reporting, and work with our team to adjust your strategy allocation as your needs evolve. We believe in transparency and ongoing communication.",
  },
  {
    question: "What is the minimum investment?",
    answer:
      "SGI-LINK is designed for accredited investors. Minimum investment requirements are discussed during your personal consultation to ensure the fund aligns with your investment objectives and regulatory requirements.",
  },
  {
    question: "Can I see performance data before investing?",
    answer:
      "Yes. During your consultation, we provide detailed performance data, risk metrics, and strategy documentation. We believe in transparency and want you to make an informed decision based on real data, not marketing promises.",
  },
  {
    question: "Is my capital locked up?",
    answer:
      "Investment terms and liquidity provisions are discussed during your consultation. We structure our offerings to balance investor needs with the operational requirements of systematic trading strategies.",
  },
  {
    question: "How do you manage risk and handle drawdowns?",
    answer:
      "We design systems around risk constraints and observed live behavior, not theoretical extremes. The portfolio is calibrated to tolerate normal drawdowns while keeping exposure within predefined bands. We use portfolio limits, per-strategy guardrails, and automated de-risking logic to protect capital during adverse conditions.",
  },
  {
    question: "What makes SGI-LINK different from other funds?",
    answer:
      "SGI-LINK doesn't market fleeting trends or repackage yesterday's strategies. We serve investors who recognize that exceptional returns require exceptional systems—backed by rigorous testing, transparent methodology, and unwavering discipline. Our approach emphasizes realistic expectations, honest communication about risk, and a focus on rules, structure, and risk constraints first.",
  },
];

export function StrategyFaqSection() {
  return (
    <div className="bg-section-warm">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight text-text sm:text-5xl">
            Frequently asked questions
          </h2>
          <dl className="mt-16 divide-y divide-border">
            {strategyFaqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-text">
                    <span className="text-base/7 font-semibold">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon aria-hidden="true" className="size-6 text-text-muted group-data-[open]:hidden" />
                      <MinusSmallIcon aria-hidden="true" className="size-6 text-text-muted hidden group-data-[open]:block" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-text-muted">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

