// app/home-dark/page.tsx
// SGI-LINK – Home Dark Page

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

export default function HomeDarkPage() {
  return (
    <main className="min-h-screen bg-bg text-text min-w-screen">
      <DarkNav />
      <DarkHero />
      <DarkWhyUs />
      <DarkQuality />
      <DarkBrand />
      <DarkProtection />
      <DarkStatistics />
      <DarkCta />
      <DarkFooter />
    </main>
  );
}
