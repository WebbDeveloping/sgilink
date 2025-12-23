// components/sections/ValuePropositionsSection.tsx
import { TrendingUp, CheckCircle2, Zap } from "lucide-react";
import { BodyText } from "@/components/typography";
import { Section, ContentBlock } from "./";

export function ValuePropositionsSection() {
  const values = [
    {
      title: "Methodology Over Marketing",
      body: "Strategies engineered for compounding growth through repeatable, systematic execution—not speculation disguised as innovation.",
      icon: TrendingUp,
    },
    {
      title: "Track Record Over Testimonials",
      body: "Performance verified through years of live trading across multiple market environments. Transparent results. No hypotheticals. No backtested fantasies.",
      icon: CheckCircle2,
    },
    {
      title: "Structure Over Spontaneity",
      body: "Invest with the same discipline that generated your wealth: rule-based systems, quantified risk parameters, and the flexibility to recalibrate when conditions warrant—backed by institutional-grade infrastructure.",
      icon: Zap,
    },
  ];

  return (
    <Section background="surface" padding="standard" className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ContentBlock
          title="Why SGI-LINK Exists"
          description="The difference between reacting to markets and systematically capitalizing on them."
          align="center"
          maxWidth="md"
          className="[&_h2]:text-4xl [&_h2]:sm:text-5xl [&_p]:text-lg/8"
        />

        <div className="mx-auto mt-16 grid max-w-5xl gap-x-8 gap-y-10 lg:grid-cols-3 lg:gap-y-16">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-xl p-6 text-center ring-1 ring-border-card shadow-xl"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-chip-blue text-brand">
                <value.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-text">
                {value.title}
              </h3>
              <p className="text-base/7 text-text-muted">
                {value.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

