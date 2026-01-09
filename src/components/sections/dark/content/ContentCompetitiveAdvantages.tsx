"use client";

function AdvantageBlock({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/8 bg-card/30 p-6 transition-all hover:bg-card/50 hover:border-white/20">
      <h3 className="mb-3 text-lg font-semibold text-white sm:text-xl">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-[rgb(156,157,159)] sm:text-base">
        {description}
      </p>
    </div>
  );
}

export function ContentCompetitiveAdvantages() {
  const advantages = [
    {
      title: "Fund Administration",
      description:
        "Unlike traditional fund administration platforms like Juniper Square or NAV Consulting, which rely on manual processes or focus on specific asset classes (e.g., real estate), SGI Link's automation spans the entire fund lifecycle, reducing human error and enabling scalability for multi-asset, cross-border funds.",
    },
    {
      title: "Investor Portal",
      description:
        "Compared to SS&C Eze or BlackRock Aladdin, which cater to institutional users with complex interfaces, SGI Link's portal is intuitive and accessible, designed for both accredited individuals and institutions, enhancing user adoption.",
    },
    {
      title: "Payment Integration",
      description:
        "Unlike Juniper Square's fiat-only focus or NAV Consulting's limited crypto support, SGI Link's dual payment system accommodates global investors, particularly in digital asset markets, ensuring flexibility and compliance.",
    },
    {
      title: "Compliance",
      description:
        "While competitors like NAV Consulting offer compliance support, they often require manual oversight. SGI Link's automation and offshore structure provide unmatched flexibility for cross-border funds, surpassing the jurisdictional limitations of platforms like Juniper Square.",
    },
    {
      title: "Affiliate Programs",
      description:
        "Unlike BlackRock Aladdin's institutional focus or Juniper Square's rigid syndicator models, SGI Link's customizable, automated affiliate tools are accessible to funds of all sizes, driving growth efficiently.",
    },
    {
      title: "Multi-Language",
      description:
        "Competitors like NAV Consulting and Juniper Square primarily support English-speaking markets, limiting their global reach. SGI Link's multi-language capability enhances usability for diverse investor bases.",
    },
  ];

  return (
    <section className="relative z-20 bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-subtle">
            Why SGI Link Stands Out
          </p>
          <h2 className="mt-4 text-2xl font-bold leading-tight text-text sm:text-3xl lg:text-4xl xl:text-5xl">
            Automation Beyond Traditional Platforms
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage) => (
            <AdvantageBlock
              key={advantage.title}
              title={advantage.title}
              description={advantage.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
