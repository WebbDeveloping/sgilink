"use client";

function DarkIconCard({
  iconBg,
  icon,
  rotation,
  title,
  body,
}: {
  iconBg: string;
  icon: string;
  rotation: string;
  title: string;
  body: string;
}) {
  return (
    <article className="group relative h-full overflow-hidden rounded-[35px] border border-white/8 bg-card transition-all hover:border-white/20">
      {/* Content Wrapper */}
      <div className="relative z-10 flex h-full flex-col p-6 sm:p-8">
        {/* Icon Wrapper */}
        <div className="mb-6 flex items-center gap-3">
          <div className="relative shrink-0">
            {/* Outer Circle */}
            <div className="relative h-16 w-16 overflow-hidden rounded-full border border-white/8 bg-transparent">
              <img
                src={iconBg}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                decoding="async"
                loading="lazy"
              />
            </div>
            {/* Inner Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={icon}
                alt=""
                className={`h-8 w-8 object-cover ${rotation}`}
                decoding="async"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-auto">
          <h3 className="mb-2 text-xl font-semibold leading-tight text-white sm:text-2xl">
            {title}
          </h3>
          <p className="text-sm leading-[150%] text-[rgb(156,157,159)] sm:text-base">
            {body}
          </p>
        </div>
      </div>
    </article>
  );
}

export function DarkWhyUs() {
  const cards = [
    {
      iconBg:
        "https://framerusercontent.com/images/Hun67z2gqUXTnugsKl7wDz54Uk.svg?width=64&height=64",
      icon: "https://framerusercontent.com/images/jAOS4kukxWANdGw4wXaCCw4SM.svg?width=23&height=24",
      rotation: "rotate-[45.09deg]",
      title: "AI-Powered Trading",
      body: "Advanced algorithms analyze market patterns to optimize your trading strategies.",
    },
    {
      iconBg:
        "https://framerusercontent.com/images/Hun67z2gqUXTnugsKl7wDz54Uk.svg?width=64&height=64",
      icon: "https://framerusercontent.com/images/jAOS4kukxWANdGw4wXaCCw4SM.svg?width=23&height=24",
      rotation: "rotate-[45.09deg]",
      title: "Bank-Grade Security",
      body: "Your assets are protected with military-grade encryption and security protocols.",
    },
    {
      iconBg:
        "https://framerusercontent.com/images/Hun67z2gqUXTnugsKl7wDz54Uk.svg?width=64&height=64",
      icon: "https://framerusercontent.com/images/jAOS4kukxWANdGw4wXaCCw4SM.svg?width=23&height=24",
      rotation: "rotate-[45.09deg]",
      title: "Real-Time Analysis",
      body: "Monitor market movements and performance metrics with instant updates and comprehensive analytics.",
    },
  ];

  return (
    <section id="why-us" className="relative z-20 bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-subtle">
            Meet SGI-LINK
          </p>
          <h2 className="mt-4 text-2xl font-bold leading-tight text-text sm:text-3xl lg:text-4xl xl:text-5xl">
            Why Choose SGI Link?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-text-muted sm:mt-6 sm:text-base lg:text-lg">
            Advanced technology meets intuitive design for the ultimate trading
            experience.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
          {cards.map((card) => (
            <DarkIconCard
              key={card.title}
              iconBg={card.iconBg}
              icon={card.icon}
              rotation={card.rotation}
              title={card.title}
              body={card.body}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
