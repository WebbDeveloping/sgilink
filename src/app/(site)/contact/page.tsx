// app/contact/page.jsx
import { PhoneCall, FileText, Users2 } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-white text-slate-900 min-h-screen">
      <ContactHeroSection />
      <ContactLayoutSection />
    </main>
  );
}

function ContactHeroSection() {
  return (
    <section className="border-b border-[#EFE3CE] bg-white py-20 lg:py-24">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 lg:px-8 space-y-6">
        <div className="max-w-3xl space-y-4">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-slate-600 uppercase">
            <PhoneCall className="h-3.5 w-3.5 text-[#3A5E7B]" />
            Contact
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3A5E7B] tracking-tight">
            Connect with the SGI-LINK team.
          </h1>
          <p className="text-sm sm:text-base text-slate-700">
            If you&apos;d like to learn more about SGI-LINK, request materials,
            or discuss a potential allocation, please use the form below or
            reach out via email. We&apos;ll follow up with next steps and
            suggested times for an introductory call.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactLayoutSection() {
  return (
    <section className="bg-[#EFE3CE]/40 py-20 lg:py-24">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-2 rounded-2xl border border-[#EFE3CE] bg-white p-6 sm:p-8">
          <h2 className="text-sm font-semibold text-[#3A5E7B] mb-1">
            Send us a message
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            Please share a few details about your interests and we&apos;ll
            respond with the appropriate materials or next steps.
          </p>

          {/* Non-functional placeholder form; hook into your form handler later */}
          <form className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-[#EFE3CE] bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-[#3A5E7B]"
                  placeholder="First and last name"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-[#EFE3CE] bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-[#3A5E7B]"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full rounded-lg border border-[#EFE3CE] bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-[#3A5E7B]"
                placeholder="Briefly share what you’d like to discuss."
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Investor type (optional)
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-[#EFE3CE] bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-[#3A5E7B]"
                  placeholder="e.g., Accredited, Family Office"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Approximate allocation size (optional)
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-[#EFE3CE] bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-[#3A5E7B]"
                  placeholder="e.g., $250k–$1M"
                />
              </div>
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-[#3A5E7B] px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#324f68] transition"
            >
              Submit inquiry
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-[#EFE3CE] bg-white p-6">
            <h3 className="text-sm font-semibold text-[#3A5E7B] mb-1 flex items-center gap-2">
              <Users2 className="h-4 w-4" />
              Contact details
            </h3>
            <p className="text-sm text-slate-700 mb-3">
              For investor inquiries, materials, or follow-ups:
            </p>
            <div className="space-y-1 text-sm text-slate-700">
              <p>
                Email:{" "}
                <a
                  href="mailto:info@sgi-link.com"
                  className="text-[#3A5E7B] underline-offset-2 hover:underline"
                >
                  info@sgi-link.com
                </a>
              </p>
              <p>
                Investor:{" "}
                <a
                  href="mailto:investor@sgi-link.com"
                  className="text-[#3A5E7B] underline-offset-2 hover:underline"
                >
                  investor@sgi-link.com
                </a>
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-[#EFE3CE] bg-white p-6 space-y-2">
            <h3 className="text-sm font-semibold text-[#3A5E7B] mb-1 flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Scheduling & location
            </h3>
            <p className="text-sm text-slate-700">
              Optional: add a calendar link and any office or meeting location
              details here once they are finalized.
            </p>
            <p className="text-[11px] text-slate-500">
              For now, initial conversations are typically held via video or
              phone after an email introduction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
