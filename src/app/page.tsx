// app/page.tsx
// SGI-LINK – Home Page (New Design)

import {
  HomeHero,
  IntroducingSection,
  StrategySection,
  FaqTeaserSection,
  ConsultationSection,
  ValuePropositionsCards,
  ThePlanSection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <HomeHero />
      <div>
        <IntroducingSection />
        <ValuePropositionsCards />
        <ThePlanSection />
        <StrategySection />
        <FaqTeaserSection />
        <ConsultationSection />
      </div>
    </main>
  );
}
