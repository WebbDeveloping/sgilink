"use client";

import { Code2, Users, Database, ArrowRightLeft, Zap } from "lucide-react";
import { sgiLinkDocs } from "@/lib/content/sgi-link-docs";

export function ContentApiFeatures() {
  const features = [
    {
      icon: Users,
      title: "User Management",
      description: "Create and manage investor accounts programmatically.",
    },
    {
      icon: Database,
      title: "Data Queries",
      description: "Real-time balance and token value queries.",
    },
    {
      icon: ArrowRightLeft,
      title: "Fund Operations",
      description: "Automated fund transfers to main wallets.",
    },
  ];

  return (
    <section id="api-features" className="relative z-20 bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Badge and Heading Section */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-card px-4 py-2">
              <Code2 className="h-4 w-4 text-brand" />
              <p className="text-sm font-semibold text-text">
                <span className="font-medium text-text-muted">API Access for</span>{" "}
                Professionals
              </p>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-medium leading-tight text-text sm:text-4xl lg:text-5xl">
            API Integration – Connect Your Systems
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg leading-relaxed text-text-muted sm:text-xl">
            {sgiLinkDocs.apiIntegration.exactQuotes.apiDescription}
          </p>
        </div>

        {/* Card Wrapper */}
        <div className="mx-auto max-w-7xl space-y-8">
          {/* Large Feature Card */}
          <div className="grid gap-8 rounded-[35px] border border-white/8 bg-card p-6 sm:p-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold leading-tight text-text sm:text-3xl">
                Why Use SGI Link API?
              </h3>
              <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
                SGI Link API allows developers and fund managers to integrate external systems
                directly with the platform, enabling automation, custom solutions, and seamless
                workflows for maximum efficiency and control.
              </p>
            </div>

            {/* Right: Image Wrapper */}
            <div className="relative">
              <div className="relative h-64 w-full overflow-hidden rounded-[35px] border border-white/8 bg-card sm:h-80">
                <img
                  src="https://framerusercontent.com/images/n7u5bPhlfLGzWCvAnw5rXSMgjlM.png"
                  alt="API Integration"
                  className="h-full w-full object-cover"
                  decoding="async"
                  loading="lazy"
                />
              </div>
              {/* Floating Icons */}
              <div className="absolute -right-4 top-4 hidden h-12 w-12 items-center justify-center rounded-full border border-white/8 bg-card sm:flex">
                <Zap className="h-6 w-6 text-brand" />
              </div>
              <div className="absolute -bottom-4 left-4 hidden h-12 w-12 items-center justify-center rounded-full border border-white/8 bg-card sm:flex">
                <Code2 className="h-6 w-6 text-brand" />
              </div>
            </div>
          </div>

          {/* Three Feature Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="rounded-[35px] border border-white/8 bg-card p-6 sm:p-8"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/8 bg-white/5">
                      <IconComponent className="h-5 w-5 text-brand" />
                    </div>
                    <h4 className="text-xl font-medium leading-tight text-text">
                      {feature.title}
                    </h4>
                  </div>
                  <p className="text-base leading-relaxed text-text-muted">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Final Quote Card */}
          <div className="rounded-[35px] border border-white/8 bg-card p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Text Content */}
              <div className="flex flex-col justify-center">
                <p className="text-xl font-medium leading-relaxed text-text sm:text-2xl">
                  SGI Link API empowers you to build custom solutions—faster, smarter, and with
                  full control over your integrations.
                </p>
              </div>

              {/* Illustration */}
              <div className="relative">
                <div className="relative h-64 w-full overflow-hidden rounded-[35px] border border-white/8 bg-card sm:h-80">
                  <img
                    src="https://framerusercontent.com/images/WysMcnF2FnAv0x9wsdbJNYoqq0.png"
                    alt="API Integration Illustration"
                    className="h-full w-full object-cover"
                    decoding="async"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
