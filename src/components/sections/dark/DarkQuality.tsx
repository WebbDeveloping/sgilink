"use client";

import { CheckCircle2 } from "lucide-react";
import { QualityFeatureCard } from "./QualityFeatureCard";
import { sgiLinkDocs } from "@/lib/content/sgi-link-docs";

// Stars animation component (simplified - can be enhanced later)
function StarsAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-lg opacity-60">
      <canvas
        className="pointer-events-none h-full w-full"
        width={614}
        height={726}
      />
    </div>
  );
}

export function DarkQuality() {
  // Features aligned with approved SGI Link documentation
  const features = [
    {
      text: sgiLinkDocs.investorProtections.sections.nonCustodial.keyPoints[0],
    }, // "Funds held in third-party brokerage accounts"
    { text: sgiLinkDocs.keyFunctionality.sections.compliance.keyPoints[1] }, // "Automated compliance checks"
    {
      text: sgiLinkDocs.keyFunctionality.sections.fundAdministration
        .keyPoints[3],
    }, // "Integration with hundreds of regulated brokerages"
    {
      text: sgiLinkDocs.investorProtections.sections.transparency.keyPoints[0],
    }, // "Real-time data on balances, performance, and fees"
  ];

  const stats = [
    {
      title: "Full Lifecycle Automation",
      subtitle:
        "Automation spans the entire fund lifecycle, reducing human error and enabling scalability.",
      iconBg:
        "https://framerusercontent.com/images/Hun67z2gqUXTnugsKl7wDz54Uk.svg?width=64&height=64",
      icon: "https://framerusercontent.com/images/jAOS4kukxWANdGw4wXaCCw4SM.svg?width=23&height=24",
      rotation: "rotate-[45.09deg]",
    },
    {
      title: "Multi-Asset Support",
      subtitle:
        "Seamless trading in FX, commodities, and digital assets across global markets.",
      iconBg:
        "https://framerusercontent.com/images/Hun67z2gqUXTnugsKl7wDz54Uk.svg?width=64&height=64",
      icon: "https://framerusercontent.com/images/tnsg2cw9YfbcGAYdf7gzWrTIaFM.png?width=46&height=47",
      rotation: "rotate-[47.16deg]",
    },
  ];

  // Feature cards aligned with approved SGI Link functionality
  const featureCards = [
    {
      title: "Streamlined Onboarding",
      description:
        "Streamlined KYC/AML verification with integrated compliance checks, enabling quick investor onboarding.",
      icon: "https://framerusercontent.com/images/EsnYopqyFikVcBzWQrBtoxo2Mg.svg?width=32&height=32",
      bgImage:
        "https://framerusercontent.com/images/ad1lcht6wcPAtUxOATBFwuhSsj8.svg",
    },
    {
      title: "Customizable Fee Structures",
      description:
        "Customizable fee structures with daily or real-time calculations and distributions, ideal for algorithmic trading.",
      icon: "https://framerusercontent.com/images/rKhTmTXgxungmyNyeZKsCqQ8xE.svg?width=32&height=32",
      bgImage:
        "https://framerusercontent.com/images/ad1lcht6wcPAtUxOATBFwuhSsj8.svg",
    },
    {
      title: "Automated Performance Reports",
      description:
        "Automated, auditable performance reports detailing returns, risk metrics, and fees, easily shareable with investors.",
      icon: "https://framerusercontent.com/images/nNhE01yX6FZwksD4c5a9SZgrivY.svg?width=32&height=32",
      bgImage:
        "https://framerusercontent.com/images/ad1lcht6wcPAtUxOATBFwuhSsj8.svg",
    },
    {
      title: "Dual Payment System",
      description:
        "Support for both fiat and cryptocurrency payments with automated conversion and transaction tracking.",
      icon: "https://framerusercontent.com/images/GuCljYGU4fQxELLQfiVHV09Row.svg?width=32&height=32",
      bgImage:
        "https://framerusercontent.com/images/ad1lcht6wcPAtUxOATBFwuhSsj8.svg",
    },
    {
      title: "Real-Time Monitoring",
      description:
        "Monitor investments in real-time, including account balances, performance metrics, and fee calculations.",
      icon: "https://framerusercontent.com/images/FDGeQqaAwiRIxkcAQN5cPxMXC7g.svg?width=32&height=32",
      bgImage:
        "https://framerusercontent.com/images/ad1lcht6wcPAtUxOATBFwuhSsj8.svg",
    },
    {
      title: "Multi-Language Support",
      description:
        "Multi-language interfaces with localized onboarding forms and support, ensuring accessibility for global investors.",
      icon: "https://framerusercontent.com/images/IYOkolVKLDZEURTXc7YjbIU24s.svg?width=32&height=32",
      bgImage:
        "https://framerusercontent.com/images/ad1lcht6wcPAtUxOATBFwuhSsj8.svg",
    },
  ];

  // Chart bar heights (relative values)
  const chartBars = [
    { height: 177 },
    { height: 234 },
    { height: 307 },
    { height: 366 },
    { height: 481 },
    { height: 383 },
  ];

  return (
    <section
      id="platform"
      className="relative z-20 bg-bg pt-24 pb-16 sm:pt-32 h-auto"
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .chart-bar-mobile {
          height: clamp(60px, var(--bar-height-mobile), 100%) !important;
        }
        @media (min-width: 640px) {
          .chart-bar-mobile {
            height: clamp(40px, var(--bar-height-desktop), 100%) !important;
          }
        }
      `,
        }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto mb-8 flex max-w-4xl items-center justify-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-white/8 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <p className="text-sm font-medium leading-[1.6em] text-text-muted">
              Platform Technology
            </p>
          </div>
        </div>

        {/* Headline Section */}
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="text-3xl font-medium leading-[1.3333333em] text-white sm:text-4xl lg:text-4xl">
            Enterprise-Grade Infrastructure for Fund Administration
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-[1.5em] text-[rgb(201,198,197)] sm:mt-6 sm:text-lg">
            Built for reliability, security, and scalability across global
            markets.
          </p>
        </div>

        {/* Main Card Section */}
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-card">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://framerusercontent.com/images/cXeabqL04myaevSzNBT5LovoLzM.png?width=686&height=1850"
              alt=""
              className="h-full w-full object-fill"
              decoding="async"
              loading="lazy"
            />
          </div>

          {/* Content Grid */}
          <div className="relative grid gap-8 p-8 lg:grid-cols-2 lg:gap-12 lg:p-12">
            {/* Left Content */}
            <div className="flex flex-col">
              {/* Heading */}
              <h3 className="mb-6 text-xl font-medium leading-[120%] tracking-[-0.02em] text-white sm:text-2xl">
                Why Our Software Model Works
              </h3>

              {/* Checkmarks List */}
              <div className="mb-8 flex flex-col gap-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-white" />
                    <p className="text-base leading-[160%] text-[rgb(254,255,255)]">
                      {features[0].text}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-white" />
                    <p className="text-base leading-[160%] text-[rgb(254,255,255)]">
                      {features[1].text}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-white" />
                    <p className="text-base leading-[160%] text-[rgb(254,255,255)]">
                      {features[2].text}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-white" />
                    <p className="text-base leading-[160%] text-[rgb(254,255,255)]">
                      {features[3].text}
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider Line */}
              <div className="mb-8 h-px bg-white/10" />

              {/* Stats Section */}
              <div className="mb-8 flex flex-col gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="relative h-16 w-16 flex-shrink-0">
                      <div
                        className={`absolute inset-0 ${stat.rotation} transition-transform`}
                      >
                        <img
                          src={stat.iconBg}
                          alt=""
                          className="h-full w-full object-cover"
                          decoding="async"
                          loading="lazy"
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img
                          src={stat.icon}
                          alt=""
                          className="h-6 w-6 object-cover"
                          decoding="async"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-white sm:text-xl">
                        {stat.title}
                      </p>
                      <p className="text-sm text-[rgb(156,157,159)]">
                        {stat.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-auto">
                <a
                  href="/contact"
                  className="flex w-full items-center justify-center rounded-[80px] bg-[rgb(36,127,255)] px-6 py-4 text-center text-lg font-semibold text-white backdrop-blur-[12px] transition-colors hover:bg-[rgb(36,127,255)]/90"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex flex-col">
              {/* Mobile Screenshot Container */}
              <div className="h-full w-full relative overflow-hidden rounded-lg border border-white/8 bg-gradient-to-br from-white/[0.02] via-white/[0.08] to-white/[0.02] grid grid-rows-1 grid-cols-12 min-h-[200px] sm:min-h-0">
                {/* Screenshot */}
                <div className="relative aspect-[615/127] sm:aspect-[615/127] w-full">
                  <img
                    src="https://framerusercontent.com/images/j4c1ZfHcwzcH3jwDXgs3HISXo.svg"
                    alt="Platform interface"
                    className="h-full w-full object-contain p-2"
                    decoding="async"
                    loading="lazy"
                  />
                </div>

                {/* Stars Animation */}
                <StarsAnimation />

                {/* Chart Bars */}
                <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end gap-1 sm:gap-2 px-2 sm:px-4 pb-2 sm:pb-4 h-full">
                  {chartBars.map((bar, index) => {
                    // Calculate height ratio relative to max bar (481)
                    const heightRatio = bar.height / 481;
                    // Mobile: use 75% of container height for better visibility
                    // Desktop: use 85% of container height
                    const mobileHeight = `${heightRatio * 75}%`;
                    const desktopHeight = `${heightRatio * 85}%`;

                    return (
                      <div
                        key={index}
                        className="chart-bar-mobile translate-y-2 sm:translate-y-5 flex-1 rounded-[11.51px] opacity-60 transition-transform"
                        style={
                          {
                            "--bar-height-mobile": mobileHeight,
                            "--bar-height-desktop": desktopHeight,
                          } as React.CSSProperties & {
                            "--bar-height-mobile": string;
                            "--bar-height-desktop": string;
                          }
                        }
                      >
                        <img
                          src={`https://framerusercontent.com/images/${
                            index === 0
                              ? "HaLQevfIgldoh1cAf51tzCLBz4.svg"
                              : index === 1
                              ? "FnUG03z9p2jJZlTy85tvbKS1wk.svg"
                              : index === 2
                              ? "Sp9wEplXfTXZdog2q8nJ3ef8OUc.svg"
                              : index === 3
                              ? "lt023YWgWfVa2cABEQQ1rbT8tGo.svg"
                              : index === 4
                              ? "rqBtt5QGcciev7i7hesYQQaKU.svg"
                              : "H9WdNdboSiNxfBt9kdNaLJoncIM.svg"
                          }`}
                          alt=""
                          className="h-full w-full rounded-[11.51px] object-fill"
                          decoding="async"
                          loading="lazy"
                        />
                      </div>
                    );
                  })}
                </div>

                {/* Precision Badge - Top Left Overlay */}
                <a
                  href="/contact"
                  className="group absolute left-4 top-4 z-20 overflow-hidden rounded-xl border border-white/10 p-4 backdrop-blur-[10px] transition-all hover:border-white/20"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 rounded-xl">
                    <img
                      src="https://framerusercontent.com/images/uid2IJfMMwzuY8luF5xf9rMORfE.svg"
                      alt=""
                      className="h-full w-full rounded-xl object-cover"
                      decoding="async"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center justify-center text-center">
                    {/* <div className="mb-2 flex items-center justify-center">
                      <img
                        src="https://framerusercontent.com/images/uid2IJfMMwzuY8luF5xf9rMORfE.svg"
                        alt=""
                        className="h-auto w-full max-w-[270px] object-contain"
                        decoding="async"
                        loading="lazy"
                      />
                    </div> */}
                    <p className="font-medium leading-[160%] text-white">
                      Automated fund administration
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="mx-auto mt-16 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((card, index) => (
            <QualityFeatureCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
