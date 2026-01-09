"use client";

import Link from "next/link";

export function DarkCta() {
  return (
    <section className="relative z-20 border-t border-gradient-trading bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-text sm:text-5xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-text-muted">
            Join SGI Link today and experience the future of digital trading.
            Create your account and start your journey with AI-powered trading
            solutions.
          </p>
          <div className="mt-10 flex items-center justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-3 text-base font-semibold leading-snug text-brand-on shadow-md hover:bg-brand-dark active:bg-interactive-active hover:shadow-lg hover:shadow-brand/30 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand whitespace-nowrap min-h-[44px] sm:min-h-0 sm:py-2.5"
            >
              Create Your Account
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

