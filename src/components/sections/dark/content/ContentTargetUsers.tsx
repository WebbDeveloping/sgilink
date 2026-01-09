"use client";

function UserTypeCard({
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

export function ContentTargetUsers() {
  const userTypes = [
    {
      title: "Fund Managers and Algorithmic Traders",
      description:
        "Professionals managing funds or trading strategies in FX, commodities, or digital assets. SGI Link enables them to automate operations, attract investors, and deliver transparent performance data without custodial responsibilities.",
      features: [
        "Automate operations",
        "Attract investors",
        "Deliver transparent performance data",
        "No custodial responsibilities",
      ],
    },
    {
      title: "Investors",
      description:
        "Accredited individuals, high-net-worth clients, or institutions seeking to invest in SGI Link-managed funds. The platform provides a secure, user-friendly interface to monitor and control investments in real-time.",
      features: [
        "Secure, user-friendly interface",
        "Real-time monitoring and control",
        "Accredited individuals and institutions",
        "SGI Link-managed funds",
      ],
    },
  ];

  return (
    <section className="relative z-20 bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-subtle">
            Built For
          </p>
          <h2 className="mt-4 text-2xl font-bold leading-tight text-text sm:text-3xl lg:text-4xl xl:text-5xl">
            Serving Two Primary Audiences
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-x-8 gap-y-10 sm:grid-cols-2 lg:gap-y-16">
          {userTypes.map((userType) => (
            <UserTypeCard
              key={userType.title}
              title={userType.title}
              description={userType.description}
              features={userType.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
