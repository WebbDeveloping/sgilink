// components/sections/FinalCtaSection.tsx
import { ShieldCheck } from "lucide-react";
import { Section, ContentBlock } from "./";
import { PrimaryLinkButton } from "@/components/buttons";

export function FinalCtaSection() {
  return (
    <Section background="brand-on" padding="standard" className="relative z-20 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <ContentBlock
          title="Ready to Explore a Different Approach?"
          description={
            <>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-brand-soft sm:text-xl">
                When conventional strategies no longer serve your objectives, we&apos;re here to discuss alternatives. SGI-LINK partners with accredited investors and business owners who built their success on systems, not speculation.
              </p>
            </>
          }
          align="center"
          maxWidth="lg"
          className="[&_h2]:text-4xl [&_h2]:font-semibold [&_h2]:sm:text-5xl [&_h2]:text-surface"
        >
          {/* CTA buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            <PrimaryLinkButton href="/contact" className="bg-surface text-brand hover:bg-chip-blue">
              Schedule Your Private Consultation
            </PrimaryLinkButton>

            <a
              href="/fund-deck"
              className="text-sm font-semibold text-surface hover:text-brand-soft"
            >
              Request Fund Documentation
              <span aria-hidden="true" className="ml-1">→</span>
            </a>
          </div>

          {/* Disclaimer */}
          <div className="mx-auto mt-8 flex max-w-xl items-start justify-center gap-2 text-sm leading-relaxed text-brand-soft">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-soft" />
            <span>
              SGI-LINK is available only to qualified and accredited investors.
              This section is informational and does not constitute an offer to
              sell any security.
            </span>
          </div>
        </ContentBlock>
      </div>
    </Section>
  );
}

