// components/sections/ProblemStatementSection.tsx
import { Building2, TrendingDown, Coins, Lock } from "lucide-react";
import { BodyText } from "@/components/typography";
import { Section } from "./";

export function ProblemStatementSection() {
  const problems = [
    {
      label: "Banks",
      text: "deliver negligible yields",
      icon: Building2,
    },
    {
      label: "Wall Street",
      text: "prioritizes mediocrity over performance",
      icon: TrendingDown,
    },
    {
      label: "Crypto",
      text: "substitutes volatility for strategy",
      icon: Coins,
    },
    {
      label: "Elite Funds",
      text: "demand millions just to get through the door",
      icon: Lock,
    },
  ];

  return (
    <Section background="surface" padding="standard">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Opening statement */}
        <div className="mx-auto max-w-3xl text-center">
          <BodyText className="text-xl/8 font-medium text-pretty text-text-muted sm:text-2xl/8">
            Traditional wealth management falls short for sophisticated
            investors.
          </BodyText>
        </div>

        {/* Problems grid */}
        <div className="mx-auto mt-12 max-w-5xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((problem) => (
              <div
                key={problem.label}
                className="rounded-lg border border-border-card bg-chip-warm/50 p-4 text-center transition-shadow hover:shadow-md"
              >
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface text-text-muted">
                  <problem.icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-medium text-text">{problem.label}</p>
                <p className="mt-1 text-xs text-text-muted">{problem.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
