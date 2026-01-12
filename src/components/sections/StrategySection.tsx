// components/sections/StrategySection.tsx
"use client";

import type { LucideIcon } from "lucide-react";
import { TrendingUp, BarChart3, Target, ShieldCheck } from "lucide-react";
import { IconStatCard } from "@/components/cards";
import { Section, ContentBlock } from "./";
import { PrimaryLinkButton } from "@/components/buttons";
import { motion, useReducedMotion } from "framer-motion";
import { sectionFadeIn1, sectionFadeIn2, sectionFadeIn3 } from "@/lib/animations";
import type { Variants } from "framer-motion";

interface StrategyOption {
  title: string;
  body: string;
  icon: LucideIcon;
  variant: Variants;
}

export function StrategySection() {
  const strategies: StrategyOption[] = [
    {
      title: "Conservative Growth",
      body: "Lower risk profile with steady, consistent returns. Ideal for investors prioritizing capital preservation while still seeking above-market performance through systematic strategies.",
      icon: ShieldCheck,
      variant: sectionFadeIn1,
    },
    {
      title: "Balanced Approach",
      body: "Moderate risk and return profile. A diversified portfolio of strategies designed to perform across different market conditions with balanced risk contribution.",
      icon: BarChart3,
      variant: sectionFadeIn2,
    },
    {
      title: "Aggressive Growth",
      body: "Higher risk tolerance with potential for greater returns. For investors comfortable with volatility who seek maximum performance through our most dynamic strategies.",
      icon: TrendingUp,
      variant: sectionFadeIn3,
    },
    {
      title: "Custom Portfolio",
      body: "Tailored strategy selection built around your specific goals, risk tolerance, and investment timeline. Work directly with our team to construct your ideal allocation.",
      icon: Target,
      variant: sectionFadeIn1,
    },
  ];

  const shouldReduceMotion = useReducedMotion();

  return (
    <Section background="surface" padding="standard" className="relative z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ContentBlock
          eyebrow="Strategy Selection"
          title="Choose the Approach That Fits Your Goals"
          description="After your personal walk-through, select from our range of strategy options—each designed with defined risk parameters and clear performance expectations. Pivot between strategies as your needs evolve."
          align="center"
          maxWidth="md"
          className="[&_h2]:text-3xl [&_h2]:sm:text-4xl [&_h2]:lg:text-5xl [&_p]:text-base/7 [&_p]:sm:text-lg/8"
        />

        <div className="mx-auto mt-12 grid max-w-6xl gap-x-6 gap-y-8 sm:mt-16 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-2 lg:gap-y-16">
          {strategies.map((strategy) => (
            <motion.div
              key={strategy.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={shouldReduceMotion ? undefined : strategy.variant}
            >
              <IconStatCard
                icon={strategy.icon}
                title={strategy.title}
                body={strategy.body}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center sm:mt-12">
          <PrimaryLinkButton href="/strategy" className="w-full sm:w-auto">
            Explore Full Strategy Details
          </PrimaryLinkButton>
        </div>
      </div>
    </Section>
  );
}

