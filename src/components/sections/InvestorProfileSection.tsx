// components/sections/InvestorProfileSection.tsx
import { Users2 } from "lucide-react";
import { SectionTitle, BodyText } from "@/components/typography";
import { IconEyebrow, CtaLink } from "@/components/ui";
import { InfoCard } from "@/components/cards";
import { Section } from "./";

export function InvestorProfileSection() {
  return (
    <Section background="surface" padding="standard">
      <div className="mx-auto max-w-7xl space-y-10 px-6 lg:px-8">
        <div className="max-w-xl space-y-3">
          <IconEyebrow icon={Users2} label="Investor Profile" />
          <SectionTitle className="text-pretty sm:text-balance">For patient, qualified capital.</SectionTitle>
          <BodyText className="text-lg/8">
            SGI-LINK is designed for investors who value discipline,
            transparency, and a repeatable process more than short-term
            headlines.
          </BodyText>
        </div>

        <div className="grid gap-x-8 gap-y-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.1fr)] md:items-start lg:gap-y-16">
          {/* Left main card */}
          <div className="space-y-5 rounded-xl p-6 text-sm/7 ring-1 ring-border-card shadow-xl text-text">
            <h3 className="text-sm font-semibold text-brand leading-snug">
              Who we typically work with
            </h3>
            <ul className="space-y-3">
              <li>
                <span className="font-medium text-brand">Investor type ·</span>{" "}
                Accredited and qualified investors, institutions, and family
                offices.
              </li>
              <li>
                <span className="font-medium text-brand">Time horizon ·</span>{" "}
                Multi-year allocation with tolerance for normal drawdowns along
                the way.
              </li>
              <li>
                <span className="font-medium text-brand">
                  Role in portfolio ·
                </span>{" "}
                Systematic sleeve within a diversified alternatives allocation.
              </li>
            </ul>

            <div className="grid gap-4 pt-3 text-xs/7 text-text sm:grid-cols-2">
              <InfoCard title="Works well for">
                <ul className="space-y-1">
                  <li>• Investors comfortable with rules-based processes</li>
                  <li>
                    • Those wanting non-discretionary FX &amp; commodities
                  </li>
                </ul>
              </InfoCard>
              <InfoCard title="Typical allocation size">
                <p>
                  • Part of an alternatives sleeve, not a full-portfolio bet.
                </p>
              </InfoCard>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-5">
            <div className="rounded-xl p-5 text-xs/7 ring-1 ring-border-card shadow-xl text-text">
              <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted">
                May not be a fit if...
              </p>
              <ul className="space-y-1.5">
                <li>• You require daily liquidity and zero drawdowns.</li>
                <li>
                  • You view systematic strategies as &quot;black boxes&quot;.
                </li>
                <li>
                  • You prefer discretionary macro or single-name equities.
                </li>
              </ul>
            </div>

            <div className="space-y-3 text-xs/7 text-text-muted">
              <CtaLink href="/why-sgi">See why SGI may be a fit</CtaLink>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

