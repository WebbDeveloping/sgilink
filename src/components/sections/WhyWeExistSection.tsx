// components/sections/WhyWeExistSection.tsx
"use client";

import { FadeInUp } from "@/components/animations";
import { SectionTitle, BodyText } from "@/components/typography";

export function WhyWeExistSection() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-brand-on px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
          {/* Background image */}
          <img
            alt=""
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80"
            className="absolute inset-0 size-full object-cover brightness-125 saturate-0"
          />
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-brand-on/90 mix-blend-multiply" />
          
          {/* Decorative blur elements using SGI brand colors */}
          <div aria-hidden="true" className="absolute -top-56 -left-80 transform-gpu blur-3xl">
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="aspect-1097/845 w-274.25 bg-gradient-to-r from-brand-soft to-brand opacity-45"
            />
          </div>
          <div
            aria-hidden="true"
            className="hidden md:absolute md:bottom-16 md:right-0 md:block md:transform-gpu md:blur-3xl"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="aspect-1097/845 w-274.25 bg-gradient-to-r from-brand-soft to-brand opacity-25"
            />
          </div>

          {/* Content - center aligned */}
          <div className="relative mx-auto max-w-3xl text-center">
            <FadeInUp>
              <SectionTitle className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                Why We Exist
              </SectionTitle>
            </FadeInUp>
            <FadeInUp delay="short">
              <BodyText className="mt-6 text-lg font-medium text-white/95 sm:text-xl/8">
                Because traditional wealth building isn&apos;t built for sophisticated investors.
              </BodyText>
            </FadeInUp>
            <FadeInUp delay="long">
              <BodyText className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg/8">
                You&apos;ve already bet on yourself. We&apos;re here to give you another edge: 
                data-driven investment strategies designed to compound performance, not just preserve it.
              </BodyText>
            </FadeInUp>
          </div>
        </div>
      </div>
    </div>
  );
}

