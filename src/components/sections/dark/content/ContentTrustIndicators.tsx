"use client";

export function ContentTrustIndicators() {
  const statistics = [
    { value: "—", label: "Fund Managers" },
    { value: "—", label: "Active Investors" },
    { value: "—", label: "Uptime" },
    { value: "—", label: "Support" },
  ];

  return (
    <section className="relative z-20 bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-subtle">
            Platform Statistics
          </p>
          <h2 className="mt-4 text-2xl font-bold leading-tight text-text sm:text-3xl lg:text-4xl xl:text-5xl">
            Platform Capabilities
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-text-muted sm:mt-6 sm:text-base">
            Note: Specific statistics are not available in official documentation.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {statistics.map((stat) => (
              <div
                key={stat.label}
                className="group flex flex-col items-center text-center rounded-2xl border border-white/8 bg-card/30 p-6 transition-all hover:bg-card/50 hover:border-white/20"
              >
                <dd className="text-5xl font-semibold tracking-tight text-text transition-colors group-hover:text-brand-soft sm:text-6xl lg:text-7xl">
                  {stat.value}
                </dd>
                <dt className="mt-3 text-sm font-medium text-text-muted sm:text-base">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
