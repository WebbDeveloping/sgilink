"use client";

function FeatureCard({
  title,
  description,
  features,
}: {
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <article className="group relative h-full overflow-hidden rounded-[35px] border border-white/8 bg-card transition-all hover:border-white/20">
      <div className="relative z-10 flex h-full flex-col p-6 sm:p-8">
        {/* Icon Wrapper */}
        <div className="mb-6 flex items-center gap-3">
          <div className="relative shrink-0">
            <div className="relative h-16 w-16 overflow-hidden rounded-full border border-white/8 bg-transparent">
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
                className="h-8 w-8 object-cover rotate-[45.09deg]"
                decoding="async"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-auto">
          <h3 className="mb-3 text-xl font-semibold leading-tight text-white sm:text-2xl">
            {title}
          </h3>
          <p className="mb-4 text-sm leading-[150%] text-[rgb(156,157,159)] sm:text-base">
            {description}
          </p>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm leading-[150%] text-[rgb(156,157,159)]"
              >
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export function ContentKeyFeatures() {
  const features = [
    {
      title: "Fund Administration and Automation",
      description: "Streamlined KYC/AML verification with integrated compliance checks. Customizable fee structures with daily or real-time calculations. Automated, auditable reports. Integration with hundreds of regulated offshore brokerages.",
      features: [
        "Streamlined KYC/AML verification",
        "Customizable fee structures with real-time calculations",
        "Automated, auditable performance reports",
        "Integration with hundreds of regulated brokerages",
      ],
    },
    {
      title: "Investor Portal",
      description: "Onboard without external accounts, completing KYC/AML checks in minutes. Monitor investments in real-time, including account balances, performance, and fees. Execute deposits and withdrawals directly through integrated payment systems.",
      features: [
        "Quick onboarding - KYC/AML in minutes",
        "Real-time investment monitoring",
        "Direct deposit and withdrawal execution",
        "Intuitive interface for individuals and institutions",
      ],
    },
    {
      title: "Payment Integration",
      description: "SGI Link supports both fiat and cryptocurrency payments, leveraging secure processors like Blockcommerce. Investors can fund accounts via bank transfers or digital assets (e.g., Bitcoin, Ethereum), with automated conversion and transaction tracking.",
      features: [
        "Fiat and cryptocurrency payment support",
        "Secure processors like Blockcommerce",
        "Bank transfers and digital assets",
        "Automated conversion and tracking",
      ],
    },
    {
      title: "Compliance and Regulatory Support",
      description: "SGI Link's robust infrastructure aligns with global AML/KYC standards, including Financial Action Task Force (FATF) guidelines. Automated compliance checks verify investor identities and monitor transactions, ensuring adherence to regulations in Nevis and beyond.",
      features: [
        "Global AML/KYC standards including FATF guidelines",
        "Automated compliance checks",
        "Identity verification and transaction monitoring",
        "Cross-border flexibility",
      ],
    },
    {
      title: "Affiliate and Feeder-Fund Programs",
      description: "Fund Managers can create revenue-sharing models for affiliates or feeder funds, with automated commission calculations and distributions. These programs support scalable investor acquisition and strategic partnerships.",
      features: [
        "Revenue-sharing models for affiliates and feeder funds",
        "Automated commission calculations and distributions",
        "Scalable investor acquisition",
        "Accessible to funds of all sizes",
      ],
    },
    {
      title: "Multi-Language Support",
      description: "The platform offers interfaces in multiple languages (e.g., English, Spanish, Mandarin, Arabic), with localized onboarding forms and support resources, ensuring accessibility for global investors.",
      features: [
        "Multiple language interfaces",
        "Localized onboarding forms",
        "Global investor accessibility",
        "Advantage over English-only competitors",
      ],
    },
  ];

  return (
    <section className="relative z-20 bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-subtle">
            Core Functionality
          </p>
          <h2 className="mt-4 text-2xl font-bold leading-tight text-text sm:text-3xl lg:text-4xl xl:text-5xl">
            Complete Fund Administration and Automation
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              features={feature.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
