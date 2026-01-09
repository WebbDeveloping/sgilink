import { Section } from "@/components/sections/Section";
import { PrimaryLinkButton } from "@/components/buttons";

export default function CTA() {
  return (
    <Section background="brand-on" padding="standard">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            Ready to Start Trading?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-white">
            Join thousands of traders who trust SGI Link for their digital asset
            management.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="bg-surface text-brand text-black px-6 py-3 rounded-full">
              Sign Up Now
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
