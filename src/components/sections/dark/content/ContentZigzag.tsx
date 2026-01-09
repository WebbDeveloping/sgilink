"use client";

export function ContentZigzag() {
  const items = [
    {
      title: "Fund Administration and Automation",
      description: "Streamlined KYC/AML verification with integrated compliance checks. Customizable fee structures with daily or real-time calculations. Automated, auditable reports. Integration with hundreds of regulated offshore brokerages.",
      features: ["Streamlined KYC/AML verification", "Customizable fee structures", "Automated, auditable reports", "Integration with hundreds of regulated brokerages"],
    },
    {
      title: "Investor Portal",
      description: "Onboard without external accounts, completing KYC/AML checks in minutes. Monitor investments in real-time, including account balances, performance, and fees. Execute deposits and withdrawals directly through integrated payment systems.",
      features: ["Quick onboarding - KYC/AML in minutes", "Real-time investment monitoring", "Direct deposit and withdrawal execution"],
    },
    {
      title: "Payment Integration",
      description: "SGI Link supports both fiat and cryptocurrency payments, leveraging secure processors like Blockcommerce. Investors can fund accounts via bank transfers or digital assets (e.g., Bitcoin, Ethereum), with automated conversion and transaction tracking.",
      features: ["Fiat and cryptocurrency payment support", "Secure processors like Blockcommerce", "Automated conversion and tracking"],
    },
  ];

  return (
    <section className="relative z-20 bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-subtle">
            Key Features
          </p>
          <h2 className="mt-4 text-2xl font-bold leading-tight text-text sm:text-3xl lg:text-4xl">
            Complete Platform Features
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-6xl space-y-16">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col gap-8 lg:flex-row lg:items-center ${
                index % 2 === 0 ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">
                  {item.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {item.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-2 text-sm text-text-muted"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Element */}
              <div className="flex-1">
                <div className="relative h-64 w-full rounded-[35px] border border-white/8 bg-card p-8 sm:h-80">
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
          ))}
        </div>
      </div>
    </section>
  );
}
