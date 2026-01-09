"use client";

import { useState, useEffect } from "react";
import { sgiLinkDocs } from "@/lib/content/sgi-link-docs";

// Feature interface
interface Feature {
  icon: string;
  text: string;
  progress: number; // 0-100 percentage (repurposed to show feature strength/completeness)
  iconRotation?: string | null;
}

// Platform focus area data interface
interface PlatformFocus {
  name: string;
  title: string;
  description: string;
  topImage: string;
  topImageHeight: number; // Height of the top decorative image in pixels
  features: Feature[];
  selectButtonHref: string;
  selectButtonText: string;
}

const platformFocusAreas: PlatformFocus[] = [
  {
    name: "Investor Protections",
    title: "Investor Protections",
    description: "SGI Link's non-custodial model ensures investors retain control with real-time access to withdraw or reallocate capital, reducing risk of mismanagement or fraud.",
    topImage: "https://framerusercontent.com/images/wBlhAXXzYeTarQFLT3k7IlRrvvo.svg",
    topImageHeight: 88,
    features: [
      {
        icon: "https://framerusercontent.com/images/wIV3hrKnfMv5AdsVwgofg13r0.svg",
        text: sgiLinkDocs.investorProtections.sections.nonCustodial.keyPoints[0], // "Funds held in third-party brokerage accounts"
        progress: 100,
        iconRotation: null,
      },
      {
        icon: "https://framerusercontent.com/images/wIV3hrKnfMv5AdsVwgofg13r0.svg",
        text: sgiLinkDocs.investorProtections.sections.nonCustodial.keyPoints[2], // "Fund Managers cannot control or access funds"
        progress: 100,
        iconRotation: null,
      },
      {
        icon: "https://framerusercontent.com/images/wIV3hrKnfMv5AdsVwgofg13r0.svg",
        text: sgiLinkDocs.investorProtections.sections.transparency.keyPoints[0], // "Real-time data on balances, performance, and fees"
        progress: 100,
        iconRotation: null,
      },
      {
        icon: "https://framerusercontent.com/images/wIV3hrKnfMv5AdsVwgofg13r0.svg",
        text: sgiLinkDocs.investorProtections.sections.investorControl.keyPoints[1], // "No lockup periods"
        progress: 100,
        iconRotation: null,
      },
      {
        icon: "https://framerusercontent.com/images/wIV3hrKnfMv5AdsVwgofg13r0.svg",
        text: sgiLinkDocs.investorProtections.sections.investorControl.keyPoints[2], // "Flexible deposits and withdrawals"
        progress: 100,
        iconRotation: null,
      },
    ],
    selectButtonHref: "https://dart.cash",
    selectButtonText: "Get Started",
  },
  {
    name: "Platform Technology",
    title: "Platform Technology",
    description: "SGI Link's automation spans the entire fund lifecycle, reducing human error and enabling scalability for multi-asset, cross-border funds.",
    topImage: "https://framerusercontent.com/images/pFdl0ZM0ly1iBxMIM6InHI1LaXQ.svg",
    topImageHeight: 103,
    features: [
      {
        icon: "https://framerusercontent.com/images/wIV3hrKnfMv5AdsVwgofg13r0.svg",
        text: sgiLinkDocs.keyFunctionality.sections.fundAdministration.keyPoints[0], // "Streamlined KYC/AML verification"
        progress: 100,
        iconRotation: null,
      },
      {
        icon: "https://framerusercontent.com/images/wIV3hrKnfMv5AdsVwgofg13r0.svg",
        text: sgiLinkDocs.keyFunctionality.sections.fundAdministration.keyPoints[1], // "Customizable fee structures with real-time calculations"
        progress: 100,
        iconRotation: null,
      },
      {
        icon: "https://framerusercontent.com/images/wIV3hrKnfMv5AdsVwgofg13r0.svg",
        text: sgiLinkDocs.keyFunctionality.sections.fundAdministration.keyPoints[2], // "Automated, auditable performance reports"
        progress: 100,
        iconRotation: null,
      },
      {
        icon: "https://framerusercontent.com/images/wIV3hrKnfMv5AdsVwgofg13r0.svg",
        text: sgiLinkDocs.keyFunctionality.sections.compliance.keyPoints[1], // "Automated compliance checks"
        progress: 100,
        iconRotation: null,
      },
      {
        icon: "https://framerusercontent.com/images/wIV3hrKnfMv5AdsVwgofg13r0.svg",
        text: sgiLinkDocs.keyFunctionality.sections.fundAdministration.keyPoints[4], // "Full lifecycle automation vs. manual competitors"
        progress: 100,
        iconRotation: null,
      },
    ],
    selectButtonHref: "https://dart.cash",
    selectButtonText: "Learn More",
  },
  {
    name: "Global Access",
    title: "Global Access",
    description: "SGI Link supports multi-asset trading across global markets with multi-language interfaces, accommodating investors worldwide.",
    topImage: "https://framerusercontent.com/images/bagVjJA0eRFl0cbVuLmhYZQv48.svg",
    topImageHeight: 87,
    features: [
      {
        icon: "https://framerusercontent.com/images/wIV3hrKnfMv5AdsVwgofg13r0.svg",
        text: sgiLinkDocs.keyFunctionality.sections.fundAdministration.keyPoints[3], // "Integration with hundreds of regulated brokerages"
        progress: 100,
        iconRotation: "rotate-[59.85deg]",
      },
      {
        icon: "https://framerusercontent.com/images/wIV3hrKnfMv5AdsVwgofg13r0.svg",
        text: sgiLinkDocs.keyFunctionality.sections.fundAdministration.exactQuotes.tradeExecution, // "Integration with hundreds of regulated offshore brokerages for seamless trading in FX, commodities, and digital assets"
        progress: 100,
        iconRotation: "rotate-[59.76deg]",
      },
      {
        icon: "https://framerusercontent.com/images/wIV3hrKnfMv5AdsVwgofg13r0.svg",
        text: sgiLinkDocs.keyFunctionality.sections.paymentIntegration.keyPoints[0], // "Fiat and cryptocurrency payment support"
        progress: 100,
        iconRotation: null,
      },
      {
        icon: "https://framerusercontent.com/images/wIV3hrKnfMv5AdsVwgofg13r0.svg",
        text: sgiLinkDocs.keyFunctionality.sections.multiLanguage.keyPoints[0], // "Multiple language interfaces"
        progress: 100,
        iconRotation: null,
      },
      {
        icon: "https://framerusercontent.com/images/wIV3hrKnfMv5AdsVwgofg13r0.svg",
        text: sgiLinkDocs.keyFunctionality.sections.compliance.keyPoints[4], // "Cross-border flexibility"
        progress: 100,
        iconRotation: null,
      },
    ],
    selectButtonHref: "https://dart.cash",
    selectButtonText: "Sign Up",
  },
];

// Progress Bar Component
function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="relative h-full w-full">
      {/* Background */}
      <div
        className="absolute inset-0 rounded-[84.47px] border border-white/8"
        style={{
          background:
            "linear-gradient(90deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.04) 53.5%, rgba(255, 255, 255, 0.02) 100%)",
        }}
      />
      {/* Filled */}
      <div
        className="absolute inset-y-0 left-0 rounded-[32.49px] bg-[rgb(82,154,255)] transition-all"
        style={{
          width: `${progress}%`,
          opacity: progress > 0 ? 1 : 0,
        }}
      />
    </div>
  );
}

// Feature Item Component
function FeatureItem({ feature }: { feature: Feature }) {
  return (
    <div className="flex flex-col gap-2">
      {/* Icon and Text */}
      <div className="flex items-center gap-3">
        <div
          className={`relative h-[34px] w-[33px] shrink-0 ${feature.iconRotation || ""}`}
        >
          <img
            src={feature.icon}
            alt=""
            className="h-full w-full object-cover"
            decoding="async"
            loading="lazy"
          />
        </div>
        <p className="text-[15px] font-medium leading-[160%] tracking-[0.04em] text-white">
          {feature.text}
        </p>
      </div>
      {/* Progress Bar */}
      <div className="ml-[49px] h-[8px]">
        <ProgressBar progress={feature.progress} />
      </div>
    </div>
  );
}

// Platform Focus Card Component
function PlatformFocusCard({ focusArea }: { focusArea: PlatformFocus }) {
  return (
    <div className="relative w-full overflow-hidden rounded-lg border border-[rgb(51,51,51)] bg-[rgb(15,16,18)]">
      {/* Top Decorative Image */}
      <div
        className="absolute top-0 left-0 right-0 overflow-hidden rounded-t-lg"
        style={{ height: `${focusArea.topImageHeight}px` }}
      >
        <img
          src={focusArea.topImage}
          alt={`${focusArea.name} platform focus`}
          className="h-full w-full object-cover"
          decoding="async"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div
        className="relative p-6"
        style={{ paddingTop: `${focusArea.topImageHeight + 24}px` }}
      >
        {/* Heading Section */}
        <div className="mb-6">
          <p className="mb-2 text-[15px] font-medium leading-[1.2666667em] text-[rgb(36,127,255)]">
            {focusArea.title}
          </p>
          <p className="mb-4 text-sm leading-[160%] tracking-[0.04em] text-[rgb(156,157,159)]">
            {focusArea.description}
          </p>
          {/* Divider Line */}
          <div
            className="h-px"
            style={{
              background:
                "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.24) 53.9153%, rgba(255, 255, 255, 0) 100%)",
            }}
          />
        </div>

        {/* Features List */}
        <div className="mb-6 space-y-4">
          {focusArea.features.map((feature, index) => (
            <FeatureItem key={index} feature={feature} />
          ))}
        </div>

        {/* CTA Button */}
        <a
          href={focusArea.selectButtonHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center rounded-[12.18px] border border-black px-4 py-3 text-center text-base font-semibold leading-[160%] tracking-[-0.02em] text-white backdrop-blur-[9.74676px] transition-colors hover:opacity-90"
          style={{
            background:
              "linear-gradient(90deg, rgb(112, 150, 255) 0%, rgb(42, 98, 247) 51%, rgb(112, 151, 255) 100%)",
          }}
        >
          {focusArea.selectButtonText}
        </a>
      </div>
    </div>
  );
}

// Navigation Arrow Component
function NavigationArrow({
  direction,
  onClick,
  disabled = false,
}: {
  direction: "left" | "right";
  onClick: () => void;
  disabled?: boolean;
}) {
  const isLeft = direction === "left";
  return (
    <div className="relative opacity-100">
      <button
        onClick={onClick}
        disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        className={`relative flex h-16 w-16 items-center justify-center rounded-full bg-transparent transition-opacity ${
          disabled ? "cursor-not-allowed opacity-50" : "hover:opacity-80"
        }`}
        aria-label={`${isLeft ? "Previous" : "Next"} platform focus`}
      >
        {/* Background Circle */}
        <div
          className="absolute inset-0 rounded-full border border-white/8"
          style={{
            borderRadius: "100%",
          }}
        >
          <img
            src="https://framerusercontent.com/images/Hun67z2gqUXTnugsKl7wDz54Uk.svg"
            alt=""
            className="h-full w-full rounded-full object-cover"
            decoding="async"
            loading="lazy"
          />
        </div>
        {/* Arrow Icon */}
        <div className={`relative z-10 ${!isLeft ? "rotate-180" : ""}`}>
          <img
            src="https://framerusercontent.com/images/XEAchqdUH7UPcZ4DzWSpGF2s.svg"
            alt=""
            className="h-6 w-6 object-cover"
            decoding="async"
            loading="lazy"
          />
        </div>
      </button>
    </div>
  );
}

export function DarkAccountTypes() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (e.key === "ArrowRight" && currentIndex < platformFocusAreas.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < platformFocusAreas.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentFocus = platformFocusAreas[currentIndex];

  return (
    <section
      id="platform-features"
      className="relative bg-bg py-24 sm:py-32"
      style={{ willChange: "transform" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="mb-4 text-[32px] font-normal leading-[1.5em] text-[rgb(156,157,159)]">
            <span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(357deg, rgb(71, 72, 72) 35%, rgb(255, 255, 255) 69%)",
              }}
            >
              SGI Link Platform
            </span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-[1.5em] tracking-[-0.02em] text-[rgb(201,198,197)]">
            {sgiLinkDocs.overview.exactQuotes.platformDescription}
          </p>

          {/* Button Wrapper */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Get Started Button */}
            <a
              href="https://dart.cash"
              rel="noopener noreferrer"
              target="_blank"
              className="group relative flex items-center justify-center overflow-hidden rounded-lg border border-transparent bg-transparent px-6 py-3 transition-opacity hover:opacity-90"
            >
              <div className="absolute inset-0">
                <img
                  src="https://framerusercontent.com/images/5tmXHCGn78wpss8f1ETRJhebcUY.svg"
                  alt=""
                  className="h-full w-full object-contain"
                  decoding="async"
                  loading="lazy"
                />
              </div>
              <span className="relative text-base font-medium leading-[160%] tracking-[-0.02em] text-[rgb(36,127,255)]">
                Get Started
              </span>
            </a>

            {/* Sign Up Button */}
            <a
              href="https://dart.cash"
              rel="noopener noreferrer"
              target="_blank"
              className="group relative flex items-center justify-center overflow-hidden rounded-lg border border-transparent bg-transparent px-6 py-3 transition-opacity hover:opacity-90"
            >
              <div className="absolute inset-0">
                <img
                  src="https://framerusercontent.com/images/Qvj8XFiVA25VwzwAK0txBqnlZM.svg"
                  alt=""
                  className="h-full w-full object-contain"
                  decoding="async"
                  loading="lazy"
                />
              </div>
              <span className="relative text-base font-medium leading-[160%] tracking-[-0.02em] text-[rgb(156,157,159)]">
                Sign Up
              </span>
            </a>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative mx-auto max-w-6xl">
          {/* Navigation Arrows Container */}
          <div className="absolute left-0 right-0 top-1/2 z-10 flex -translate-y-1/2 items-center justify-between px-4 sm:px-6 lg:px-8">
            <NavigationArrow
              direction="left"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            />
            <NavigationArrow
              direction="right"
              onClick={handleNext}
              disabled={currentIndex === platformFocusAreas.length - 1}
            />
          </div>

          {/* Platform Focus Card */}
          <div className="mx-auto max-w-lg px-12 sm:px-16">
            <PlatformFocusCard focusArea={currentFocus} />
          </div>

          {/* Carousel Indicators */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {platformFocusAreas.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-[rgb(36,127,255)]"
                    : "w-2 bg-white/20 hover:bg-white/30"
                }`}
                aria-label={`Go to ${platformFocusAreas[index].name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

