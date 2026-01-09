"use client";

import { PrimaryLinkButton } from "@/components/buttons";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-surface">
      {/* Video Background */}
      <div className="absolute inset-0 -z-20">
        <video
          src="https://video.gumlet.io/67b0aaac8d1f0bda6de7b963/67f16bcae6d1a5d6bccbf3b4/download.mp4"
          loop
          preload="auto"
          playsInline
          autoPlay
          muted
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-label="Trading platform background video"
        />
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/60" />

      <div className="relative z-10 px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-text-muted ring-1 ring-border hover:ring-border-strong">
              The Future of Digital Trading
              <a href="#" className="font-semibold text-brand">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div> */}
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              The Future of Digital Trading
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8">
              Experience revolutionary AI-powered trading with SGI Link. Secure,
              intelligent, and profitable digital asset management.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <PrimaryLinkButton href="#">Get started</PrimaryLinkButton>
              <a href="#" className="text-sm/6 font-semibold text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
