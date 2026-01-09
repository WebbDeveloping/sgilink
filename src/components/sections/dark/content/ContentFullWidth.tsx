"use client";

import Link from "next/link";

export function ContentFullWidth() {
  return (
    <section className="relative z-20 overflow-hidden bg-gradient-to-br from-brand/20 via-brand/10 to-transparent py-24 sm:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-subtle">
            Ready to Begin
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-text sm:text-4xl lg:text-5xl xl:text-6xl">
            Get Started with SGI Link
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
            SGI Link is a cloud-based software platform that facilitates the administration of trading funds in foreign exchange (FX), commodities, and digital assets. Sign up at dart.cash to get started.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="https://clients.jc-securities.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-[80px] bg-[rgb(36,127,255)] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[rgb(36,127,255)]/90"
            >
              Get Started
            </Link>
            <Link
              href="https://clients.jc-securities.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-[80px] border border-white/20 bg-transparent px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/10"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
