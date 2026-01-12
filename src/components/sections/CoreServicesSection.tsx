// components/sections/CoreServicesSection.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SectionTitle } from "@/components/typography";

export function CoreServicesSection() {
  const services = [
    {
      title: "Not Wall Street. Not Hype. Not for Everyone.",
      description:
        "SGILINK isn't chasing trends or playing into hype cycles. We exist for those who value substance over noise and understand that smart investing requires more than just following the crowd.",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
      imageAlt: "Professional financial trading floor",
    },
    {
      title: "Built for Leaders, Builders, and Bold Decision-Makers",
      description:
        "Our institutional quant trading strategies are tailored for people who create and lead. SGILINK empowers action-takers with data-driven strategies that align with ambition, expertise, and real-world leadership.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      imageAlt: "Business leaders in modern office",
    },
    {
      title: "Performance-Driven Algorithms Across Global Markets",
      description:
        "Our proprietary algorithms operate across forex, crypto, and CFDs, delivering results backed by verified performance. We're built for investors who recognize the crucial difference between strategy and speculation.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      imageAlt: "Data visualization and analytics dashboard",
    },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateReducedMotion = (matches: boolean) => {
      setReducedMotion(matches);
    };

    // Set initial value
    updateReducedMotion(mediaQuery.matches);

    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      updateReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleReducedMotionChange);

    return () => {
      mediaQuery.removeEventListener("change", handleReducedMotionChange);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion || !sectionRef.current || !containerRef.current) return;

    const handleScroll = () => {
      if (!sectionRef.current || !containerRef.current) return;

      const stickyTop = 80; // Match CSS top value (5rem = 80px)
      const tolerance = 100; // Tolerance for determining active card

      // Determine which card is currently active (sticky at the top)
      let activeCardIndex = -1;
      let closestDistance = Infinity;

      for (let i = 0; i < cardRefs.current.length; i++) {
        const card = cardRefs.current[i];
        if (!card) continue;

        const rect = card.getBoundingClientRect();
        const distance = Math.abs(rect.top - stickyTop);

        // Card is active if it's at or near the sticky position
        if (
          rect.top <= stickyTop + tolerance &&
          rect.top >= stickyTop - tolerance
        ) {
          activeCardIndex = i;
          break;
        }

        // Track the closest card to sticky position (within reasonable range)
        if (
          distance < closestDistance &&
          rect.top <= stickyTop + 300 &&
          rect.top >= stickyTop - 200
        ) {
          closestDistance = distance;
          activeCardIndex = i;
        }
      }

      // Fallback to first card if no card found
      if (activeCardIndex === -1) {
        activeCardIndex = 0;
      }

      const activeCard = cardRefs.current[activeCardIndex];
      if (!activeCard) return;

      const activeCardRect = activeCard.getBoundingClientRect();
      const activeCardBottom = activeCardRect.bottom;
      const activeCardTop = activeCardRect.top;

      // Apply transforms to ALL cards based on their position relative to active card
      cardRefs.current.forEach((cardRef, index) => {
        if (!cardRef) return;

        const cardRect = cardRef.getBoundingClientRect();
        const cardTop = cardRect.top;
        const cardBottom = cardRect.bottom;
        const cardHeight = cardRect.height;

        if (index === activeCardIndex) {
          // Active card - HIGHEST z-index to ensure it's always on top and readable
          cardRef.style.transform = "none";
          cardRef.style.opacity = "1";
          cardRef.style.zIndex = "1000"; // Very high z-index for active card
        } else if (index < activeCardIndex) {
          // Card is before/behind the active card - scale it down, LOW z-index
          const distanceBehind = activeCardTop - cardBottom;
          const maxDistance = cardHeight * 2.5; // Maximum distance to consider for scaling

          if (distanceBehind > 0) {
            // Card is behind the active card
            const behindProgress = Math.min(1, distanceBehind / maxDistance);
            // Scale from 0.85 (when just behind) to 0.65 (when far behind)
            const scale = 0.85 - behindProgress * 0.2;
            const opacity = 0.9 - behindProgress * 0.2; // Fade slightly

            cardRef.style.transform = `scale(${scale})`;
            cardRef.style.opacity = `${opacity}`;
            // Very low z-index for cards behind (1-10 range)
            cardRef.style.zIndex = `${Math.max(1, 10 - index)}`;
          } else {
            // Card is transitioning behind - slight scale
            const transitionDistance = Math.abs(distanceBehind);
            const transitionProgress = Math.min(
              1,
              transitionDistance / (cardHeight * 0.3)
            );
            const scale = 1 - transitionProgress * 0.15; // Scale from 1 to 0.85
            const opacity = 1 - transitionProgress * 0.1;

            cardRef.style.transform = `scale(${scale})`;
            cardRef.style.opacity = `${opacity}`;
            // Low z-index for transitioning cards
            cardRef.style.zIndex = `${Math.max(1, 10 - index)}`;
          }
        } else {
          // Card is after the active card - normal size, MEDIUM z-index (but always < 1000)
          const distanceFromActiveBottom = cardTop - activeCardBottom;

          if (
            distanceFromActiveBottom < cardHeight * 0.5 &&
            distanceFromActiveBottom > -cardHeight * 0.2
          ) {
            // Card is scrolling over the active card - slight upward movement
            const overProgress = Math.min(
              1,
              Math.max(0, distanceFromActiveBottom / (cardHeight * 0.5))
            );
            const translateY = -overProgress * 15; // Subtle upward movement

            cardRef.style.transform = `translateY(${translateY}px)`;
            cardRef.style.opacity = "1";
            // Medium-high z-index for cards scrolling over (100-500 range)
            cardRef.style.zIndex = `${100 + index * 50}`;
          } else {
            // Card is below active card area - normal behavior
            cardRef.style.transform = "none";
            cardRef.style.opacity = "1";
            // Medium z-index for cards below (100-500 range, but less than active)
            cardRef.style.zIndex = `${100 + index * 50}`;
          }
        }
      });
    };

    // Use requestAnimationFrame for smooth performance
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
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="relative z-30 bg-surface py-12 sm:py-8"
      id="services"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <div className="sgi-section-fade-1">
            <SectionTitle as="h2" className="text-center">
              Introducing SGILINK
            </SectionTitle>
          </div>
        </div>

        <div
          ref={containerRef}
          className="relative sgi-parallax-cards-container"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="sgi-parallax-card"
                style={{
                  willChange: reducedMotion ? "auto" : "transform",
                }}
              >
                <div className="relative isolate overflow-hidden bg-brand-on px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                  {/* <svg
                    viewBox="0 0 1024 1024"
                    aria-hidden="true"
                    className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                  >
                    <circle
                      r={512}
                      cx={512}
                      cy={512}
                      fill={`url(#gradient-${index})`}
                      fillOpacity="0.7"
                    />
                    <defs>
                      <radialGradient id={`gradient-${index}`}>
                        <stop stopColor="#3a5e7b" />
                        <stop offset={1} stopColor="#8db7e8" />
                      </radialGradient>
                    </defs>
                  </svg> */}
                  <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                    <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-6 text-lg/8 text-pretty text-text-muted">
                      {service.description}
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                      <a
                        href="#contact"
                        className="rounded-md bg-surface px-3.5 py-2.5 text-sm font-semibold text-text shadow-xs hover:bg-section-warm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        Get started
                      </a>
                      <a
                        href="#about"
                        className="text-sm/6 font-semibold text-white hover:text-brand-soft"
                      >
                        Learn more
                        <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                  <div className="relative z-10 mt-16 h-80 lg:mt-8 lg:h-96">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      width={1824}
                      height={1080}
                      className="absolute top-0 left-0 w-228 max-w-none rounded-md bg-surface/5 ring-1 ring-white/10 object-cover"
                      sizes="(max-width: 1024px) 100vw, 57rem"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
