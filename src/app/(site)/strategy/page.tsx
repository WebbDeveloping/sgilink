// app/(site)/strategy/page.tsx

import {
  StrategyHeroSection,
  HowWeBuildStrategiesSection,
  StrategyFaqSection,
  StrategyCtaSection,
} from "@/components/sections/strategy";

export default function StrategyPage() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <StrategyHeroSection />
      <HowWeBuildStrategiesSection />
      <StrategyFaqSection />
      <StrategyCtaSection />
    </main>
  );
}
