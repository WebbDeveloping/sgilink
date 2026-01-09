// components/sections/HomeHero.tsx
"use client";

import { useRef } from "react";
import { ArrowRight, FileText } from "lucide-react";
import { PrimaryLinkButton, SecondaryLinkButton } from "@/components/buttons";
import { FadeInUp } from "@/components/animations";

export function HomeHero() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={heroRef}
      className="relative isolate overflow-hidden h-[70vh] sm:h-[65vh]"
      style={{ position: "sticky", top: 0 }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/60" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <FadeInUp
            as="h1"
            className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl lg:text-7xl"
          >
            The Future of Digital Trading
          </FadeInUp>
          <FadeInUp
            as="p"
            className="mx-auto mt-6 max-w-3xl text-base/7 font-medium text-pretty text-white/90 sm:mt-8 sm:text-lg/8 lg:text-xl/8"
          >
            Experience revolutionary AI-powered trading with SGI Link. Secure,
            intelligent, and profitable digital asset management.
          </FadeInUp>
          <FadeInUp
            delay="long"
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row sm:gap-x-6"
          >
            <PrimaryLinkButton
              href="/contact"
              className="w-full px-8 py-3 text-base sm:w-auto"
            >
              <FileText className="mr-2 h-5 w-5 shrink-0" />
              Get Started
            </PrimaryLinkButton>
            <SecondaryLinkButton
              href="/strategy"
              className="w-full px-8 py-3 text-base sm:w-auto"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
            </SecondaryLinkButton>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
