"use client";

export function ContentTimeline() {
  const steps = [
    {
      number: "1",
      title: "Contact the SGI Link team",
      description:
        "Set up a fund, integrate with brokerages, and configure trading strategies or scripts.",
    },
    {
      number: "2",
      title: "Sign up at dart.cash",
      description:
        "Complete KYC/AML verification and fund your account via fiat or cryptocurrency.",
    },
    {
      number: "3",
      title: "Access resources",
      description:
        "Reach out for assistance with onboarding, integrations, or platform navigation.",
    },
    {
      number: "4",
      title: "Begin operations",
      description:
        "Start managing funds and investments with SGI Link's automation tools.",
    },
  ];

  return (
    <section id="timeline" className="relative z-20 bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-subtle">
            Getting Started
          </p>
          <h2 className="mt-4 text-2xl font-bold leading-tight text-text sm:text-3xl lg:text-4xl">
            Simple Process to Begin
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 h-full w-0.5 bg-white/10 lg:left-1/2 lg:-translate-x-0.5" />

            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative flex gap-6 lg:items-center"
                >
                  {/* Step Number */}
                  <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-2 border-brand bg-card text-xl font-semibold text-white lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                    {step.number}
                  </div>

                  {/* Step Content */}
                  <div
                    className={`flex-1 rounded-[35px] border border-white/8 bg-card p-6 ${
                      index % 2 === 0
                        ? "lg:mr-auto lg:max-w-[45%]"
                        : "lg:ml-auto lg:max-w-[45%]"
                    }`}
                  >
                    <h3 className="text-xl font-regular text-white pb-1">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
