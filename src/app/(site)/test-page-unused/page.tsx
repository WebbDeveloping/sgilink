// app/sgi-brief/page.tsx
// SGI-LINK – Brief Site Content (Simplified Investor-Facing Copy)

import { BriefHero } from "@/components/sections";
import {
  FundSnapshotSection,
  StrategySection,
  TechnologySection,
  InvestorProfileSection,
  FaqTeaserSection,
  FinalCtaSection,
} from "@/components/sections";

export default function SgiBriefPage() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <BriefHero />
      <FundSnapshotSection />
      <StrategySection />
      <TechnologySection />
      <InvestorProfileSection />
      <FaqTeaserSection />
      <FinalCtaSection />
    </main>
  );
}
