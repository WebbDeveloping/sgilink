// components/sections/IntroducingSection.tsx
"use client";

import { Brain, ShieldCheck, Activity } from "lucide-react";
import { IconStatCard } from "@/components/cards";
import { Section, ContentBlock } from "./";

export function IntroducingSection() {
  const cards = [
    {
      icon: Brain,
      title: "AI-Powered Trading",
      body: "Advanced algorithms analyze market patterns to optimize your trading strategies.",
    },
    {
      icon: ShieldCheck,
      title: "Bank-Grade Security",
      body: "Your assets are protected with military-grade encryption and security protocols.",
    },
    {
      icon: Activity,
      title: "Real-Time Analysis",
      body: "Monitor market movements and performance metrics with instant updates and comprehensive analytics.",
    },
  ];

  return (
    <Section background="surface" padding="standard" className="relative z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ContentBlock
          eyebrow="Meet SGI-LINK"
          title={
            <span className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl xl:text-5xl">
              Why Choose SGI Link?
            </span>
          }
          description={
            <div>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-text-muted sm:mt-6 sm:text-base lg:text-lg">
                Advanced technology meets intuitive design for the ultimate
                trading experience.
              </p>
            </div>
          }
          align="center"
          maxWidth="lg"
        />

        <div className="mx-auto mt-16 grid max-w-6xl gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
          {cards.map((card) => (
            <IconStatCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              body={card.body}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
