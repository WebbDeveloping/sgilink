"use client";

function DistinctionCard({
  title,
  description,
}: {
  title: string;
  description: string;
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
          <p className="text-sm leading-[150%] text-[rgb(156,157,159)] sm:text-base">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}

export function ContentSoftwareModel() {
  const distinctions = [
    {
      title: "No Asset Custody",
      description:
        "SGI Link does not hold or manage investor funds, which are stored in regulated third-party brokerage accounts. This reduces risk compared to custodial platforms like some hedge fund administrators.",
    },
    {
      title: "No Trade Execution",
      description:
        "SGI Link integrates with brokerages to facilitate trades but does not execute them itself, unlike brokers or trading platforms. This ensures SGI Link remains a neutral software provider.",
    },
    {
      title: "Administrative Focus",
      description:
        "SGI Link automates onboarding, compliance, fee calculations, and reporting, acting as a backend solution rather than a financial intermediary. This contrasts with platforms like SS&C Eze, which blend software with advisory services.",
    },
  ];

  return (
    <section className="relative z-20 bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-subtle">
            Our Model
          </p>
          <h2 className="mt-4 text-2xl font-bold leading-tight text-text sm:text-3xl lg:text-4xl xl:text-5xl">
            Software Platform, Not Financial Entity
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-text-muted sm:mt-6 sm:text-base lg:text-lg">
            Technology provider enabling fund management without holding assets.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
          {distinctions.map((distinction) => (
            <DistinctionCard
              key={distinction.title}
              title={distinction.title}
              description={distinction.description}
            />
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-sm leading-relaxed text-text-muted sm:text-base">
            SGI Link's software-only model minimizes regulatory and fiduciary risks, offering a leaner, more scalable solution than competitors with broader financial roles. Its focus on automation and integration sets it apart as a purpose-built tool for multi-asset, cross-border fund management.
          </p>
        </div>
      </div>
    </section>
  );
}
