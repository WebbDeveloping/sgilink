// app/sgi-brief/page.tsx
// SGI-LINK – Brief Site Content (Simplified Investor-Facing Copy)

import {
  BriefHero,
  FundSnapshotSection,
  StrategySection,
  TechnologySection,
  InvestorProfileSection,
  FaqTeaserSection,
  FinalCtaSection,
} from "@/components/organisms";

export default function SgiBriefPage() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <BriefHero />
      {/* wtf */}
      <FundSnapshotSection />
      <StrategySection />
      <TechnologySection />
      <InvestorProfileSection />
      <FaqTeaserSection />
      <FinalCtaSection />
    </main>
  );
}
