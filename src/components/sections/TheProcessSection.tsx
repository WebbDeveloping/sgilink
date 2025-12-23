// components/sections/TheProcessSection.tsx
import { Users2, ShieldCheck, LineChart } from "lucide-react";
import { ContentBlock } from "./";

export function TheProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Comprehensive Strategy Review",
      body: "These algorithms aren't suited for every investor profile. We conduct personalized consultations to ensure our systematic approach aligns with your wealth objectives and risk parameters.",
      icon: Users2,
    },
    {
      number: "02",
      title: "Establish Your Independently Managed Account",
      body: "Maintain complete custody and control of your capital while leveraging our institutional-grade infrastructure, execution technology, and algorithmic expertise.",
      icon: ShieldCheck,
    },
    {
      number: "03",
      title: "Deploy Your Strategy. Monitor Performance. Adjust Exposure.",
      body: "Select the risk-reward profile that matches your investment thesis. Modify allocations as your goals evolve. You remain in control—always.",
      icon: LineChart,
    },
  ];

  return (
    <section className="relative z-20 bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ContentBlock
          title="How It Works"
          description="Transparent entry. Complete autonomy. Strategies calibrated to your objectives. No hidden fees, no forced complexity—just institutional execution."
          align="center"
          maxWidth="md"
          className="[&_h2]:text-4xl [&_h2]:sm:text-5xl [&_p]:text-lg/8"
        />

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid gap-x-8 gap-y-10 lg:grid-cols-3 lg:gap-y-16">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative rounded-xl p-8 text-center ring-1 ring-border-card shadow-xl"
              >
                <div className="mb-4 text-4xl font-bold text-brand/30">
                  {step.number}
                </div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-chip-blue text-brand">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-text">
                  {step.title}
                </h3>
                <p className="text-base/7 text-text-muted">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

