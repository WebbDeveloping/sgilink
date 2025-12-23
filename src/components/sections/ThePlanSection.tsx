// components/sections/ThePlanSection.tsx
"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { Section, ContentBlock } from "./";
import { PrimaryLinkButton } from "@/components/buttons";

interface PlanStep {
  number: string;
  stepLabel: string;
  title: string;
  description: string;
}

export function ThePlanSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const numberRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressBarRefs = useRef<(HTMLDivElement | null)[]>([]);
  const reducedMotion = useReducedMotion() ?? false;

  const steps: PlanStep[] = [
    {
      number: "01",
      stepLabel: "Step 1",
      title: "Personal Walk Through",
      description:
        "Our strategies aren't for everyone. Let us walk you through them personally to confirm they fit your goals.",
    },
    {
      number: "02",
      stepLabel: "Step 2",
      title: "Open Your Own Managed Account",
      description:
        "You stay in full control while benefiting from our infrastructure and expertise.",
    },
    {
      number: "03",
      stepLabel: "Step 3",
      title: "Select a Strategy. Track. Adapt.",
      description:
        "Choose the level of risk and return that fits your style. Pivot when you want.",
    },
  ];

  // Scroll animation logic
  useEffect(() => {
    if (reducedMotion || !sectionRef.current) return;

    // Disable scroll animations on mobile (below lg breakpoint)
    const isMobile = window.innerWidth < 1024;
    if (isMobile) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const stickyTop = 120; // Distance from top when step becomes active
      const tolerance = 200; // Tolerance for determining active step

      let newActiveIndex = 0;
      let closestDistance = Infinity;

      // Find which step should be active
      stepRefs.current.forEach((stepRef, index) => {
        if (!stepRef) return;

        const rect = stepRef.getBoundingClientRect();
        const stepTop = rect.top;
        const stepBottom = rect.bottom;

        // Check if step is in the active zone (around stickyTop)
        if (
          stepTop <= stickyTop + tolerance &&
          stepBottom >= stickyTop - tolerance
        ) {
          const distance = Math.abs(stepTop - stickyTop);
          if (distance < closestDistance) {
            closestDistance = distance;
            newActiveIndex = index;
          }
        }
      });

      // Fallback: if no step found in tolerance zone, find the closest one
      if (closestDistance === Infinity) {
        stepRefs.current.forEach((stepRef, index) => {
          if (!stepRef) return;
          const rect = stepRef.getBoundingClientRect();
          const distance = Math.abs(rect.top - stickyTop);
          if (distance < closestDistance) {
            closestDistance = distance;
            newActiveIndex = index;
          }
        });
      }

      // Ensure we have a valid active index
      if (newActiveIndex < 0) newActiveIndex = 0;
      if (newActiveIndex >= steps.length) newActiveIndex = steps.length - 1;

      // Update active step index (used internally for animations)
      // newActiveIndex is used below for number and progress bar animations

      // Apply animations to numbers
      numberRefs.current.forEach((numberRef, index) => {
        if (!numberRef) return;

        if (index === newActiveIndex) {
          // Active step: full opacity
          numberRef.style.opacity = "1";
          numberRef.style.transform = "perspective(1100px)";
        } else {
          // Inactive steps: dimmed
          numberRef.style.opacity = "0.1";
          numberRef.style.transform = "perspective(1100px)";
        }
      });

      // Animate progress bars (only for steps 0 and 1, not the last step)
      progressBarRefs.current.forEach((progressBarRef, index) => {
        if (!progressBarRef || index >= steps.length - 1) return;

        const progressBar = progressBarRef.querySelector(
          "[data-progress-fill]"
        ) as HTMLElement;
        if (!progressBar) return;

        const stepRef = stepRefs.current[index];
        if (!stepRef) return;

        const rect = stepRef.getBoundingClientRect();
        const stepHeight = rect.height;

        if (index < newActiveIndex) {
          // Steps before active: fully filled
          progressBar.style.width = "100%";
        } else if (index === newActiveIndex) {
          // Active step: calculate fill based on scroll position within the step
          const stepTop = rect.top;
          const scrollProgress = Math.max(
            0,
            Math.min(1, (stickyTop - stepTop) / stepHeight)
          );
          progressBar.style.width = `${scrollProgress * 100}%`;
        } else {
          // Steps after active: empty
          progressBar.style.width = "0%";
        }
      });
    };

    // Optimized scroll handler
    let rafId: number | null = null;
    const optimizedScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        handleScroll();
        rafId = null;
      });
    };

    window.addEventListener("scroll", optimizedScroll, { passive: true });
    window.addEventListener("resize", optimizedScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", optimizedScroll);
      window.removeEventListener("resize", optimizedScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [reducedMotion, steps.length]);

  // Handle resize to enable/disable animations
  useEffect(() => {
    const handleResize = () => {
      // Re-trigger scroll effect when crossing breakpoint
      if (sectionRef.current) {
        window.dispatchEvent(new Event("scroll"));
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Section
      ref={sectionRef}
      background="blue"
      padding="large"
      className="relative border-b border-border-blue"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Split Column Layout */}
        <div className="grid gap-x-8 gap-y-12 lg:grid-cols-2 lg:items-start lg:gap-x-12 lg:gap-y-0">
          {/* Left Column: Title, Description, Button */}
          <div className="lg:sticky lg:top-24">
            <ContentBlock
              title="The Plan"
              description="A private start, full control, and flexible strategies built around you. No noise, no complexity—just smart action."
              align="left"
              maxWidth="md"
              className="[&_h2]:text-3xl [&_h2]:sm:text-4xl [&_h2]:lg:text-5xl [&_h2]:text-brand-on [&_p]:text-base/7 [&_p]:sm:text-lg/8 [&_p]:text-brand-on-soft"
            >
              <div className="mt-6 sm:mt-8">
                <PrimaryLinkButton href="/contact" className="w-full sm:w-auto">
                  Start Now
                </PrimaryLinkButton>
              </div>
            </ContentBlock>
          </div>

          {/* Right Column: Timeline */}
          <div>
            <div className="space-y-12 sm:space-y-16 lg:space-y-24">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  ref={(el) => {
                    stepRefs.current[index] = el;
                  }}
                  className="grid gap-6 sm:gap-8 lg:grid-cols-[200px_1fr] lg:gap-12"
                >
                  {/* Left: Number and Progress Bar */}
                  <div className="flex flex-col">
                    <div className="relative">
                      <div
                        ref={(el) => {
                          numberRefs.current[index] = el;
                        }}
                        className="text-5xl font-bold text-brand-on sm:text-6xl lg:text-7xl xl:text-8xl"
                        style={{
                          willChange: reducedMotion
                            ? "auto"
                            : "transform, opacity",
                          transition: reducedMotion
                            ? "none"
                            : "opacity 0.3s ease-out, transform 0.3s ease-out",
                        }}
                      >
                        {step.number}
                      </div>

                      {/* Progress Bar (only for steps 1 and 2) */}
                      {index < steps.length - 1 && (
                        <div
                          ref={(el) => {
                            progressBarRefs.current[index] = el;
                          }}
                          className="mt-3 h-1 w-full bg-border-blue/30 sm:mt-4"
                        >
                          <div
                            data-progress-fill
                            className="h-full bg-brand transition-all duration-500 ease-out"
                            style={{ width: "0%" }}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right: Step Content */}
                  <div className="flex items-center">
                    <div className="w-full">
                      <div className="mb-2 flex items-center gap-2 sm:mb-3 sm:gap-3">
                        <div className="h-2.5 w-2.5 rotate-45 bg-brand sm:h-3 sm:w-3" />
                        <span className="text-xs font-medium text-brand-on-soft uppercase tracking-wide sm:text-sm">
                          {step.stepLabel}
                        </span>
                      </div>
                      <h3 className="mb-2 text-xl font-semibold text-brand-on sm:mb-3 sm:text-2xl lg:text-3xl">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-brand-on-soft sm:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
