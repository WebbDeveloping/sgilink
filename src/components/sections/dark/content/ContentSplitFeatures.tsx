"use client";

import { CheckCircle2 } from "lucide-react";

export function ContentSplitFeatures() {
  const features = [
    "KYC verification",
    "Fee management",
    "Performance reports",
    "Trade execution",
  ];

  return (
    <section className="relative z-20 bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-subtle">
              Core Functionality
            </p>
            <h2 className="mt-4 text-2xl font-bold leading-tight text-text sm:text-3xl lg:text-4xl">
              Fund Administration and Automation
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">
              Investor Onboarding: Streamlined KYC/AML verification with integrated compliance checks. Fee Management: Customizable fee structures with daily or real-time calculations and distributions. Performance Reporting: Automated, auditable reports detailing returns, risk metrics, and fees. Trade Execution: Integration with hundreds of regulated offshore brokerages.
            </p>
            <ul className="mt-6 space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" />
                  <span className="text-sm leading-relaxed text-text-muted sm:text-base">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Visual Element */}
          <div className="flex items-center justify-center">
            <div className="relative h-64 w-full max-w-md rounded-[35px] border border-white/8 bg-card p-8 sm:h-80">
              <div className="flex h-full items-center justify-center">
                <div className="relative">
                  <div className="relative h-32 w-32 overflow-hidden rounded-full border border-white/8 bg-transparent sm:h-40 sm:w-40">
                    <img
                      src="https://framerusercontent.com/images/Hun67z2gqUXTnugsKl7wDz54Uk.svg?width=64&height=64"
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                      decoding="async"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="https://framerusercontent.com/images/jAOS4kukxWANdGw4wXaCCw4SM.svg?width=23&height=24"
                      alt=""
                      className="h-16 w-16 object-cover rotate-[45.09deg] sm:h-20 sm:w-20"
                      decoding="async"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
