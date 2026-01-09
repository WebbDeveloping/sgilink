"use client";

import Link from "next/link";

export function ContentApiIntegration() {
  return (
    <section className="relative z-20 bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <article className="group relative overflow-hidden rounded-[35px] border border-white/8 bg-card transition-all hover:border-white/20">
            <div className="relative z-10 p-8 sm:p-10">
              {/* Eyebrow */}
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-subtle">
                For Developers
              </p>

              {/* Title */}
              <h2 className="mt-4 text-2xl font-bold leading-tight text-text sm:text-3xl lg:text-4xl">
                API Integration Available
              </h2>

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base lg:text-lg">
                SGI Link offers a robust API for external systems to connect with the platform, enabling user management (e.g., creating investor accounts), balance and token value queries, and fund transfers to main wallets.
              </p>

              {/* Features List */}
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 text-sm leading-relaxed text-[rgb(156,157,159)] sm:text-base">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                  <span>User management (e.g., creating investor accounts)</span>
                </li>
                <li className="flex items-start gap-3 text-sm leading-relaxed text-[rgb(156,157,159)] sm:text-base">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                  <span>Balance and token value queries</span>
                </li>
                <li className="flex items-start gap-3 text-sm leading-relaxed text-[rgb(156,157,159)] sm:text-base">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                  <span>Fund transfers to main wallets</span>
                </li>
              </ul>

              {/* API Endpoint */}
              <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-text-muted">
                  API Endpoint
                </p>
                <code className="block break-all text-sm font-mono text-brand sm:text-base">
                  https://api.dart.cash/api
                </code>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  href="https://clients.jc-securities.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-[80px] bg-[rgb(36,127,255)] px-8 py-4 text-center text-lg font-semibold text-white transition-colors hover:bg-[rgb(36,127,255)]/90"
                >
                  Request API Documentation
                </Link>
              </div>

              {/* Note */}
              <p className="mt-6 text-xs leading-relaxed text-text-muted">
                Detailed API guides are available upon request for Fund Managers integrating custom solutions.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
