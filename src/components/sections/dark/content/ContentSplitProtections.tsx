"use client";

export function ContentSplitProtections() {
  const protection = {
    title: "Non-Custodial Model",
    howItWorks:
      "Investor funds are held in secure, third-party brokerage accounts managed by regulated BAPs, not by SGI Link. Fund Managers do not control or access these funds, reducing the risk of mismanagement or fraud.",
    benefit:
      "Unlike traditional funds where managers hold assets, SGI Link's model ensures investors retain control, with real-time access to withdraw or reallocate capital. This contrasts with platforms like NAV Consulting, where custodial arrangements may increase manager liability.",
  };

  return (
    <section className="relative z-20 bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left: Visual Element */}
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="relative h-24 w-24 rounded-[35px] border border-white/8 bg-card p-4 sm:h-32 sm:w-32"
                >
                  <div className="relative h-full w-full">
                    <div className="relative h-full w-full overflow-hidden rounded-full border border-white/8 bg-transparent">
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
                        className="h-6 w-6 object-cover rotate-[45.09deg] sm:h-8 sm:w-8"
                        decoding="async"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-subtle">
              Investor Safety
            </p>
            <h2 className="mt-4 text-2xl font-bold leading-tight text-text sm:text-3xl lg:text-4xl">
              {protection.title}
            </h2>
            <div className="mt-6 space-y-4">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand">
                  How It Works
                </p>
                <p className="text-sm leading-relaxed text-text-muted sm:text-base">
                  {protection.howItWorks}
                </p>
              </div>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand">
                  Benefit
                </p>
                <p className="text-sm leading-relaxed text-text-muted sm:text-base">
                  {protection.benefit}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
