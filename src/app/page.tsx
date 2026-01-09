// app/page.tsx
// SGI-LINK – Home Page (Default)

import type { Metadata } from "next";
import { DarkNav } from "@/components/sections/dark/DarkNav";
import { DarkFooter } from "@/components/sections/dark/DarkFooter";
import { DarkHero } from "@/components/sections/dark/DarkHero";
import {
  ContentTimeline,
  ContentGettingStarted,
} from "@/components/sections/dark/content";
import { DarkWhyUs } from "@/components/sections/dark/DarkWhyUs";
import { DarkQuality } from "@/components/sections/dark/DarkQuality";
import { ContentApiFeatures } from "@/components/sections/dark/content/ContentApiFeatures";
import { DarkCtaWithBackground } from "@/components/sections/dark/DarkCtaWithBackground";

export const metadata: Metadata = {
  title: "SGI-LINK | Private Algorithmic Trading Fund",
  description:
    "SGI-LINK is a private algorithmic trading fund specializing in systematic trading strategies. Discover our platform, features, and investment opportunities.",
  keywords: [
    "algorithmic trading",
    "trading fund",
    "systematic trading",
    "investment",
    "trading platform",
    "SGI-LINK",
  ],
  authors: [{ name: "SGI-LINK" }],
  creator: "SGI-LINK",
  publisher: "SGI-LINK",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sgilink.com",
    siteName: "SGI-LINK",
    title: "SGI-LINK | Private Algorithmic Trading Fund",
    description:
      "SGI-LINK is a private algorithmic trading fund specializing in systematic trading strategies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SGI-LINK | Private Algorithmic Trading Fund",
    description:
      "SGI-LINK is a private algorithmic trading fund specializing in systematic trading strategies.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://sgilink.com",
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-bg text-text min-w-screen">
      <DarkNav />
      <DarkHero />
      <DarkQuality />
      <DarkWhyUs />
      <ContentTimeline />
      <ContentApiFeatures />

      <DarkCtaWithBackground />
      <DarkFooter />
    </main>
  );
}
