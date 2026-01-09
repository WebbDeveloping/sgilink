// app/home-two/page.tsx
// SGI-LINK – Previous Home Page Design

import {
  DarkNav,
  DarkHero,
  DarkBrand,
  DarkProtection,
  DarkWhyUs,
  DarkQuality,
  DarkStatistics,
  DarkCta,
  DarkFooter,
} from "@/components/sections/dark";

import // HomeHero,
// IntroducingSection,
// StatisticsSection,
// StrategySection,
// FaqTeaserSection,
// ConsultationSection,
// ValuePropositionsCards,
// ThePlanSection,
"@/components/sections";
// import Hero from "@/components/new-home/hero";
import Analytics from "@/components/new-home/analytics";
import ContentOne from "@/components/new-home/content-one";
import CTA from "@/components/new-home/CTA";

export default function HomeTwoPage() {
  return (
    <main className="min-h-screen  text-text">
      {/* <Hero /> */}
      <DarkHero />
      <Analytics />
      <ContentOne />
      <CTA />
    </main>
  );
}

// export default function HomePage() {
//   return (
//     <main className="min-h-screen bg-bg text-text">
//       <HomeHero />
//       <div>
//         <IntroducingSection />
//         <StatisticsSection />
//         <ValuePropositionsCards />
//         <ThePlanSection />
//         <StrategySection />
//         <FaqTeaserSection />
//         <ConsultationSection />
//       </div>
//     </main>
//   );
// }
