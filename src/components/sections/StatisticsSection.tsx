// components/sections/StatisticsSection.tsx
"use client";

import { Section } from "./";

export function StatisticsSection() {
  const statistics = [
    { value: "0", label: "Active Users" },
    { value: "0", label: "Total Trades" },
    { value: "0", label: "Uptime %" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <Section background="warm" padding="standard" className="relative z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {statistics.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center"
              >
                <dd className="text-5xl font-semibold tracking-tight text-text sm:text-6xl lg:text-7xl">
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
    </Section>
  );
}

