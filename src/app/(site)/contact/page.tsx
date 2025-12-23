// app/contact/page.jsx

import { Mail, CalendarClock, MapPin, MessageCircle } from "lucide-react";
import {
  Eyebrow,
  SectionTitle,
  BodyText,
  SmallMuted,
} from "@/components/typography";
import { IconEyebrow } from "@/components/ui";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <ContactHeroFormSection />
      <ContactDetailsSection />
    </main>
  );
}

/** HERO + FORM – hero content left, form right */
function ContactHeroFormSection() {
  return (
    <section className="border-b border-border bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl gap-12 px-4 sm:px-6 md:grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:items-start">
        {/* Left: hero content (on desktop) / top (on mobile) */}
        <div className="mb-10 space-y-4 md:order-1 md:mb-0">
          <IconEyebrow
            icon={MessageCircle}
            label="Contact"
            className="text-text-muted"
            iconClassName="text-brand"
          />

          <SectionTitle
            as="h1"
            className="text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl"
          >
            Start a conversation with{" "}
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-1 h-2 rounded-full bg-section-blue" />
              <span className="relative">the SGI-LINK team</span>
            </span>
            .
          </SectionTitle>

          <BodyText className="text-sm text-text-muted sm:text-base">
            Use the form to share a bit about your interest or questions. We
            respond directly — no call centers, no automated sales funnels —
            with a focus on clarity and fit for accredited and qualified
            investors.
          </BodyText>
        </div>

        {/* Right: form (on desktop) / bottom (on mobile) */}
        <div className="md:order-2 rounded-2xl border border-border-card bg-surface p-6 shadow-sm shadow-slate-900/5 sm:p-8">
          <form className="space-y-5">
            <div className="space-y-1">
              <Eyebrow className="text-text-muted">Name</Eyebrow>
              <input
                type="text"
                name="name"
                autoComplete="name"
                className="block w-full rounded-xl border border-border-card bg-surface px-3 py-2 text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-1">
              <Eyebrow className="text-text-muted">Email</Eyebrow>
              <input
                type="email"
                name="email"
                autoComplete="email"
                className="block w-full rounded-xl border border-border-card bg-surface px-3 py-2 text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-1">
              <Eyebrow className="text-text-muted">Investor type</Eyebrow>
              <select
                name="investorType"
                className="block w-full rounded-xl border border-border-card bg-surface px-3 py-2 text-sm text-text focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
              >
                <option value="">Select an option</option>
                <option value="accredited">Accredited investor</option>
                <option value="quep">QUEP / high net worth</option>
                <option value="allocator">Institutional allocator</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-1">
              <Eyebrow className="text-text-muted">
                What would you like to discuss?
              </Eyebrow>
              <textarea
                name="message"
                rows={5}
                className="block w-full rounded-xl border border-border-card bg-surface px-3 py-2 text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
                placeholder="A brief description of your questions or interest..."
              />
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <SmallMuted className="text-text-muted">
                By submitting this form, you&apos;re indicating interest in
                learning more. This is not a solicitation to invest.
              </SmallMuted>

              <button
                type="submit"
                className="inline-flex text-nowrap items-center justify-center rounded-full bg-brand px-5 py-2 text-sm font-semibold text-surface shadow-sm shadow-slate-900/10 hover:bg-brand-dark"
              >
                Submit inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

/** DETAILS – email, scheduling link, optional office location */
function ContactDetailsSection() {
  return (
    <section className="bg-section-warm py-24">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6">
        {/* Intro */}
        <div className="max-w-3xl space-y-3">
          <IconEyebrow
            icon={Mail}
            label="Other Ways to Reach Us"
            className="text-text-muted"
            iconClassName="text-brand"
          />
          <SectionTitle>Contact details at a glance.</SectionTitle>
          <BodyText className="text-sm text-text-muted sm:text-base">
            For most investors, the form above is the easiest way to start the
            conversation. You can also reach us directly using the options
            below, especially if you already have materials or a specific
            diligence process in mind.
          </BodyText>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Email */}
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <h3 className="mb-3 text-sm font-semibold text-brand">Email</h3>

            <div className="flex items-start gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-chip-blue text-brand shadow-sm">
                <Mail className="h-4 w-4" />
              </span>

              <div className="space-y-1">
                <BodyText className="text-xs text-text sm:text-sm">
                  <a
                    href="mailto:contact@sgilink.com"
                    className="font-medium text-brand underline-offset-2 hover:underline"
                  >
                    contact@sgilink.com
                  </a>
                </BodyText>

                <SmallMuted className="text-text-muted">
                  For general questions, diligence requests, and follow-ups from
                  existing conversations.
                </SmallMuted>
              </div>
            </div>
          </div>

          {/* Schedule a call */}
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <h3 className="mb-3 text-sm font-semibold text-brand">
              Schedule a call
            </h3>

            <div className="flex items-start gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-chip-blue text-brand shadow-sm">
                <CalendarClock className="h-4 w-4" />
              </span>

              <div className="space-y-1">
                <BodyText className="text-xs text-text sm:text-sm">
                  <a
                    href="https://calendly.com/sgilink/intro"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-brand underline-offset-2 hover:underline"
                  >
                    Open scheduling link
                  </a>
                </BodyText>

                <SmallMuted className="text-text-muted">
                  Ideal if you’ve already confirmed accreditation and want to
                  book a call directly.
                </SmallMuted>
              </div>
            </div>
          </div>

          {/* Office location */}
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <h3 className="mb-3 text-sm font-semibold text-brand">
              Office location
            </h3>

            <div className="flex items-start gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-chip-blue text-brand shadow-sm">
                <MapPin className="h-4 w-4" />
              </span>

              <div className="space-y-1">
                <BodyText className="text-xs text-text sm:text-sm leading-relaxed">
                  SGI-LINK
                  <br />
                  123 Market Street
                  <br />
                  Suite 500
                  <br />
                  City, State, ZIP
                </BodyText>

                <SmallMuted className="text-text-muted">
                  In-person meetings are available for qualified investors by
                  appointment only.
                </SmallMuted>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
