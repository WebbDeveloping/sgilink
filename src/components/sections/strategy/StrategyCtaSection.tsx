// components/sections/strategy/StrategyCtaSection.tsx

export function StrategyCtaSection() {
  return (
    <div className="bg-brand-on">
      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            Accredited Investors Only
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-white/90">
            Our strategies are available by request only. Each investor receives a one-on-one walkthrough to understand the strategy options and select the path that fits.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-brand shadow-xs hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Request a Strategy Walkthrough
            </a>
            <a href="/about" className="text-sm/6 font-semibold text-white">
              Learn more
              <span aria-hidden="true"> →</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
