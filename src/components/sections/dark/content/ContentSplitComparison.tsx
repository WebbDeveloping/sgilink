"use client";

export function ContentSplitComparison() {
  const leftContent = {
    title: "Automation",
    description:
      "Unlike traditional fund administration platforms like Juniper Square or NAV Consulting, which rely on manual processes or focus on specific asset classes (e.g., real estate), SGI Link's automation spans the entire fund lifecycle, reducing human error and enabling scalability for multi-asset, cross-border funds.",
    features: ["Full lifecycle automation", "Reduced human error", "Multi-asset, cross-border scalability"],
  };

  const rightContent = {
    title: "Flexibility",
    description:
      "Unlike Juniper Square's fiat-only focus or NAV Consulting's limited crypto support, SGI Link's dual payment system accommodates global investors, particularly in digital asset markets, ensuring flexibility and compliance.",
    features: ["Dual payment system", "Global investor accommodation", "Digital asset market support"],
  };

  return (
    <section className="relative z-20 bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-subtle">
            Why SGI Link Stands Out
          </p>
          <h2 className="mt-4 text-2xl font-bold leading-tight text-text sm:text-3xl lg:text-4xl">
            Automation Beyond Traditional Platforms
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column */}
          <div className="rounded-[35px] border border-white/8 bg-card p-8">
            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              {leftContent.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">
              {leftContent.description}
            </p>
            <ul className="mt-6 space-y-2">
              {leftContent.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-text-muted"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="rounded-[35px] border border-white/8 bg-card p-8">
            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              {rightContent.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">
              {rightContent.description}
            </p>
            <ul className="mt-6 space-y-2">
              {rightContent.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-text-muted"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
