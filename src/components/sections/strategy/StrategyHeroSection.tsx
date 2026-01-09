// components/sections/strategy/StrategyHeroSection.tsx

const links = [
  { name: "Market Focus", href: "#market-focus" },
  { name: "Diversification", href: "#diversification" },
  { name: "Risk Management", href: "#risk-return" },
  { name: "Technology Stack", href: "#technology" },
];

const stats = [
  { name: "Market Focus", value: "Foreign Exchange & Commodities" },
  { name: "Strategy Approach", value: "Systematic" },
  { name: "Risk Profile", value: "Conservative" },
  { name: "Investment Style", value: "Passive" },
];

export function StrategyHeroSection() {
  return (
    <div className="relative isolate overflow-hidden bg-surface py-24 sm:py-32">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=screen"
        className="absolute inset-0 -z-10 size-full object-cover object-right opacity-10 md:object-center"
      />
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-brand-soft to-brand opacity-15"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-brand-soft to-brand opacity-15"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-text sm:text-7xl">
            Our Strategy
          </h2>
          <p className="mt-8 text-lg font-medium text-pretty text-text-muted sm:text-xl/8">
            You've worked hard to earn your capital—and you know it can do more
            than sit in a low-yield account or chase trends.
          </p>
          <p className="mt-4 text-base text-pretty text-text-muted sm:text-lg/8">
            But most investors are stuck between extremes: traditional options
            that feel too slow, risky plays that feel too unstable, or
            worse—strategies with zero transparency.
          </p>
          <p className="mt-4 text-base font-medium text-pretty text-text sm:text-lg/8">
            At <strong className="text-brand">SGI-LINK</strong>, we help you
            escape that trap by offering a smarter way forward—strategies backed
            by data, verified through rigorous testing, and aligned with your
            risk appetite.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-text sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-text-muted">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-text">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
