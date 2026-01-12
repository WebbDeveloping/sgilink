// app/(site)/about/page.tsx

import {
  AboutHeroSection,
  WhoWeAreSection,
  WhyWeExistSection,
  HowWeOperateSection,
  OurBeliefsSection,
  MeetTheMindsSection,
  WhatSetsUsApartSection,
  AboutCtaSection,
} from "@/components/sections";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <AboutHeroSection />
      <WhoWeAreSection />
      <WhyWeExistSection />
      <HowWeOperateSection />
      <OurBeliefsSection />
      <MeetTheMindsSection />
      <WhatSetsUsApartSection />
      <AboutCtaSection />
    </main>
  );
}
