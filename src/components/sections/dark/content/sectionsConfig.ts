import type { ComponentType } from "react";
import {
  ContentHero,
  ContentKeyFeatures,
  ContentCompetitiveAdvantages,
  ContentInvestorProtections,
  ContentSoftwareModel,
  ContentTargetUsers,
  ContentGettingStarted,
  ContentApiIntegration,
  ContentApiFeatures,
  ContentTrustIndicators,
  ContentSplitFeatures,
  ContentSplitProtections,
  ContentSplitComparison,
  ContentTimeline,
  ContentZigzag,
  ContentFullWidth,
  ContentTestimonials,
} from "./index";
import {
  DarkHero,
  DarkWhyUs,
  DarkQuality,
  DarkStatistics,
  DarkAccountTypes,
  DarkCta,
  DarkBrand,
  DarkFooter,
} from "../index";

export interface SectionConfig {
  id: string;
  name: string;
  description: string;
  layoutType: string;
  filePath: string;
  category: string;
  component: ComponentType;
}

export const sections: SectionConfig[] = [
  // Hero Sections
  {
    id: "content-hero",
    name: "ContentHero",
    description: "Hero section with eyebrow, title, description, bullets, and CTA",
    layoutType: "Hero",
    filePath: "src/components/sections/dark/content/ContentHero.tsx",
    category: "Hero Sections",
    component: ContentHero,
  },
  {
    id: "dark-hero",
    name: "DarkHero",
    description: "Full-width hero with video background and animated text",
    layoutType: "Hero",
    filePath: "src/components/sections/dark/DarkHero.tsx",
    category: "Hero Sections",
    component: DarkHero,
  },
  // Feature/Why Sections
  {
    id: "content-key-features",
    name: "ContentKeyFeatures",
    description: "6 feature cards in 3-column grid layout",
    layoutType: "Card Grid",
    filePath: "src/components/sections/dark/content/ContentKeyFeatures.tsx",
    category: "Feature/Why Sections",
    component: ContentKeyFeatures,
  },
  {
    id: "dark-why-us",
    name: "DarkWhyUs",
    description: "Icon cards in grid layout showcasing key features",
    layoutType: "Card Grid",
    filePath: "src/components/sections/dark/DarkWhyUs.tsx",
    category: "Feature/Why Sections",
    component: DarkWhyUs,
  },
  {
    id: "content-competitive-advantages",
    name: "ContentCompetitiveAdvantages",
    description: "Advantage blocks comparing to competitors in grid layout",
    layoutType: "Card Grid",
    filePath: "src/components/sections/dark/content/ContentCompetitiveAdvantages.tsx",
    category: "Feature/Why Sections",
    component: ContentCompetitiveAdvantages,
  },
  {
    id: "content-split-features",
    name: "ContentSplitFeatures",
    description: "Split column layout with text left and visual right",
    layoutType: "Split Column",
    filePath: "src/components/sections/dark/content/ContentSplitFeatures.tsx",
    category: "Feature/Why Sections",
    component: ContentSplitFeatures,
  },
  {
    id: "content-zigzag",
    name: "ContentZigzag",
    description: "Alternating zigzag layout with text and visuals",
    layoutType: "Zigzag",
    filePath: "src/components/sections/dark/content/ContentZigzag.tsx",
    category: "Feature/Why Sections",
    component: ContentZigzag,
  },
  {
    id: "content-api-features",
    name: "ContentApiFeatures",
    description: "API integration section with feature cards and visual elements",
    layoutType: "Feature Cards with Visual",
    filePath: "src/components/sections/dark/content/ContentApiFeatures.tsx",
    category: "Feature/Why Sections",
    component: ContentApiFeatures,
  },
  // Protection/Security Sections
  {
    id: "content-investor-protections",
    name: "ContentInvestorProtections",
    description: "5 protection cards with 'How It Works' and 'Benefit' sections",
    layoutType: "Card Grid",
    filePath: "src/components/sections/dark/content/ContentInvestorProtections.tsx",
    category: "Protection/Security Sections",
    component: ContentInvestorProtections,
  },
  {
    id: "content-split-protections",
    name: "ContentSplitProtections",
    description: "Split column layout with visual left and text right",
    layoutType: "Split Column",
    filePath: "src/components/sections/dark/content/ContentSplitProtections.tsx",
    category: "Protection/Security Sections",
    component: ContentSplitProtections,
  },
  // Quality/Statistics Sections
  {
    id: "dark-quality",
    name: "DarkQuality",
    description: "Complex section with checkmarks, stats, feature cards, and visual elements",
    layoutType: "Mixed Layout",
    filePath: "src/components/sections/dark/DarkQuality.tsx",
    category: "Quality/Statistics Sections",
    component: DarkQuality,
  },
  {
    id: "content-trust-indicators",
    name: "ContentTrustIndicators",
    description: "Statistics grid with 4 stat cards",
    layoutType: "Statistics Grid",
    filePath: "src/components/sections/dark/content/ContentTrustIndicators.tsx",
    category: "Quality/Statistics Sections",
    component: ContentTrustIndicators,
  },
  {
    id: "dark-statistics",
    name: "DarkStatistics",
    description: "4-column statistics grid with hover effects",
    layoutType: "Statistics Grid",
    filePath: "src/components/sections/dark/DarkStatistics.tsx",
    category: "Quality/Statistics Sections",
    component: DarkStatistics,
  },
  // User/Target Sections
  {
    id: "content-target-users",
    name: "ContentTargetUsers",
    description: "Two-column layout for Fund Managers and Investors",
    layoutType: "Two Column",
    filePath: "src/components/sections/dark/content/ContentTargetUsers.tsx",
    category: "User/Target Sections",
    component: ContentTargetUsers,
  },
  {
    id: "dark-account-types",
    name: "DarkAccountTypes",
    description: "Account type cards or selection interface",
    layoutType: "Card Grid",
    filePath: "src/components/sections/dark/DarkAccountTypes.tsx",
    category: "User/Target Sections",
    component: DarkAccountTypes,
  },
  // Software/Model Sections
  {
    id: "content-software-model",
    name: "ContentSoftwareModel",
    description: "Centered layout with 3 distinction cards",
    layoutType: "Centered Cards",
    filePath: "src/components/sections/dark/content/ContentSoftwareModel.tsx",
    category: "Software/Model Sections",
    component: ContentSoftwareModel,
  },
  {
    id: "content-api-integration",
    name: "ContentApiIntegration",
    description: "Compact informational card with API details",
    layoutType: "Compact Card",
    filePath: "src/components/sections/dark/content/ContentApiIntegration.tsx",
    category: "Software/Model Sections",
    component: ContentApiIntegration,
  },
  // Getting Started/CTA Sections
  {
    id: "content-getting-started",
    name: "ContentGettingStarted",
    description: "Two-column CTAs for different user types",
    layoutType: "Two Column",
    filePath: "src/components/sections/dark/content/ContentGettingStarted.tsx",
    category: "Getting Started/CTA Sections",
    component: ContentGettingStarted,
  },
  {
    id: "content-timeline",
    name: "ContentTimeline",
    description: "Vertical timeline layout with process steps",
    layoutType: "Timeline",
    filePath: "src/components/sections/dark/content/ContentTimeline.tsx",
    category: "Getting Started/CTA Sections",
    component: ContentTimeline,
  },
  {
    id: "content-full-width",
    name: "ContentFullWidth",
    description: "Full-width banner with centered CTA content",
    layoutType: "Full-Width Banner",
    filePath: "src/components/sections/dark/content/ContentFullWidth.tsx",
    category: "Getting Started/CTA Sections",
    component: ContentFullWidth,
  },
  {
    id: "dark-cta",
    name: "DarkCta",
    description: "Call-to-action section with CTA button",
    layoutType: "CTA",
    filePath: "src/components/sections/dark/DarkCta.tsx",
    category: "Getting Started/CTA Sections",
    component: DarkCta,
  },
  // Comparison Sections
  {
    id: "content-split-comparison",
    name: "ContentSplitComparison",
    description: "Text-text split column for side-by-side comparison",
    layoutType: "Split Column",
    filePath: "src/components/sections/dark/content/ContentSplitComparison.tsx",
    category: "Feature/Why Sections",
    component: ContentSplitComparison,
  },
  // Testimonials Sections
  {
    id: "content-testimonials",
    name: "ContentTestimonials",
    description: "Testimonial slider with trader quotes and navigation",
    layoutType: "Slider",
    filePath: "src/components/sections/dark/content/ContentTestimonials.tsx",
    category: "Testimonials",
    component: ContentTestimonials,
  },
  // Brand/Footer Sections
  {
    id: "dark-brand",
    name: "DarkBrand",
    description: "Brand logos ticker or showcase",
    layoutType: "Brand Showcase",
    filePath: "src/components/sections/dark/DarkBrand.tsx",
    category: "Brand/Footer Sections",
    component: DarkBrand,
  },
  {
    id: "dark-footer",
    name: "DarkFooter",
    description: "Footer with links and information",
    layoutType: "Footer",
    filePath: "src/components/sections/dark/DarkFooter.tsx",
    category: "Brand/Footer Sections",
    component: DarkFooter,
  },
];

// Group sections by category
export const sectionsByCategory = sections.reduce(
  (acc, section) => {
    if (!acc[section.category]) {
      acc[section.category] = [];
    }
    acc[section.category].push(section);
    return acc;
  },
  {} as Record<string, SectionConfig[]>
);

// Get unique categories
export const categories = Object.keys(sectionsByCategory);
