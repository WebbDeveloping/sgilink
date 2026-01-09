"use client";

export function DarkStatistics() {
  const statistics = [
    { value: "0", label: "Active Users" },
    { value: "0", label: "Total Trades" },
    { value: "0", label: "Uptime %" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section className="relative z-20 bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {statistics.map((stat) => (
              <div
                key={stat.label}
                className="group flex flex-col items-center text-center rounded-2xl border border-gradient-card bg-card/30 p-6 transition-all hover:bg-card/50 hover:shadow-lg hover:shadow-brand/10 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-brand"
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

