"use client";

function ProtectionCard({
  title,
  howItWorks,
  benefit,
}: {
  title: string;
  howItWorks: string;
  benefit: string;
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
          <h3 className="mb-4 text-xl font-semibold leading-tight text-white sm:text-2xl">
            {title}
          </h3>
          <div className="space-y-4">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand">
                How It Works
              </p>
              <p className="text-sm leading-[150%] text-[rgb(156,157,159)] sm:text-base">
                {howItWorks}
              </p>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand">
                Benefit
              </p>
              <p className="text-sm leading-[150%] text-[rgb(156,157,159)] sm:text-base">
                {benefit}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ContentInvestorProtections() {
  const protections = [
    {
      title: "Non-Custodial Model",
      howItWorks:
        "Investor funds are held in secure, third-party brokerage accounts managed by regulated BAPs, not by SGI Link. Fund Managers do not control or access these funds, reducing the risk of mismanagement or fraud.",
      benefit:
        "Unlike traditional funds where managers hold assets, SGI Link's model ensures investors retain control, with real-time access to withdraw or reallocate capital. This contrasts with platforms like NAV Consulting, where custodial arrangements may increase manager liability.",
    },
    {
      title: "Regulatory Compliance",
      howItWorks:
        "SGI Link integrates automated AML/KYC checks, verifying investor identities and monitoring transactions against global standards. The platform's Nevis-based structure leverages a permissive yet compliant jurisdiction.",
      benefit:
        "Investors are protected from illicit activities, and Fund Managers avoid regulatory penalties. Compared to Juniper Square's US-centric compliance, SGI Link's global focus supports cross-border operations seamlessly.",
    },
    {
      title: "Transparency and Reporting",
      howItWorks:
        "Investors receive real-time data on account balances, performance, and fees through the SGI Link portal. Audited performance reports, validated by third parties, can be shared securely.",
      benefit:
        "Transparency builds trust, unlike SS&C Eze's complex reporting, which is less accessible to individual investors. Audited reports enhance credibility, aiding capital-raising efforts.",
    },
    {
      title: "Secure Payment Processing",
      howItWorks:
        "SGI Link partners with trusted processors like Blockcommerce to handle fiat and cryptocurrency transactions, with end-to-end encryption and compliance checks.",
      benefit:
        "Investors' funds are safeguarded during transfers, unlike some platforms with limited payment options. This ensures secure, global capital flows, critical for digital asset trading.",
    },
    {
      title: "Investor Control",
      howItWorks:
        "Investors manage their accounts directly, avoiding lockup periods common in traditional funds. The portal enables flexible deposits, withdrawals, and monitoring.",
      benefit:
        "This empowers investors, contrasting with BlackRock Aladdin's institutional focus, where individual control is secondary. SGI Link's structure aligns with modern preferences for liquidity and autonomy.",
    },
  ];

  return (
    <section className="relative z-20 bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-subtle">
            Investor Safety
          </p>
          <h2 className="mt-4 text-2xl font-bold leading-tight text-text sm:text-3xl lg:text-4xl xl:text-5xl">
            Comprehensive Protection at Every Step
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-text-muted sm:mt-6 sm:text-base lg:text-lg">
            Non-custodial model with automated compliance ensures investor protection.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
          {protections.map((protection) => (
            <ProtectionCard
              key={protection.title}
              title={protection.title}
              howItWorks={protection.howItWorks}
              benefit={protection.benefit}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
