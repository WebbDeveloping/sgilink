"use client";

import Link from "next/link";

function GettingStartedColumn({
  title,
  description,
  steps,
  ctaText,
  ctaHref,
}: {
  title: string;
  description: string;
  steps: string[];
  ctaText: string;
  ctaHref: string;
}) {
  return (
    <div className="flex flex-col rounded-[35px] border border-white/8 bg-card p-8 sm:p-10">
      <h3 className="mb-4 text-2xl font-semibold leading-tight text-white sm:text-3xl">
        {title}
      </h3>
      <p className="mb-6 text-sm leading-relaxed text-[rgb(156,157,159)] sm:text-base">
        {description}
      </p>
      <ul className="mb-8 space-y-3">
        {steps.map((step, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-sm leading-relaxed text-[rgb(156,157,159)] sm:text-base"
          >
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
            <span>{step}</span>
          </li>
        ))}
      </ul>
      <Link
        href={ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center justify-center rounded-[80px] bg-[rgb(36,127,255)] px-8 py-4 text-center text-lg font-semibold text-white transition-colors hover:bg-[rgb(36,127,255)]/90"
      >
        {ctaText}
      </Link>
    </div>
  );
}

export function ContentGettingStarted() {
  return (
    <section className="relative z-20 bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-subtle">
            Ready to Begin
          </p>
          <h2 className="mt-4 text-2xl font-bold leading-tight text-text sm:text-3xl lg:text-4xl xl:text-5xl">
            Get Started with SGI Link
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 sm:grid-cols-2 lg:gap-12">
          <GettingStartedColumn
            title="For Fund Managers"
            description="Contact the SGI Link team to set up a fund, integrate with brokerages, and configure trading strategies or scripts."
            steps={[
              "Contact the SGI Link team",
              "Integrate with brokerages",
              "Configure trading strategies or scripts",
            ]}
            ctaText="Contact Sales"
            ctaHref="https://clients.jc-securities.com"
          />
          <GettingStartedColumn
            title="For Investors"
            description="Sign up at dart.cash, complete KYC/AML verification, and fund your account via fiat or cryptocurrency."
            steps={[
              "Sign up at dart.cash",
              "Complete KYC/AML verification",
              "Fund account via fiat or cryptocurrency",
            ]}
            ctaText="Sign Up Now"
            ctaHref="https://clients.jc-securities.com"
          />
        </div>

        <div className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-sm leading-relaxed text-text-muted sm:text-base">
            <strong className="text-text">Support:</strong> Access resources or reach out for assistance with onboarding, integrations, or platform navigation.
          </p>
        </div>
      </div>
    </section>
  );
}
