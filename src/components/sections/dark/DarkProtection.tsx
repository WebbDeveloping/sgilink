"use client";

import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

// Placeholder SVG Components
// TODO: Replace with actual SVG path data from original source
function YelpIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      {/* Placeholder - actual path data needed */}
      <rect x="0" y="0" width="28" height="29" rx="4" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

function MessengerIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      {/* Placeholder - actual path data needed */}
      <circle cx="19.5" cy="19.5" r="18" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      {/* Placeholder - actual path data needed */}
      <circle cx="19.5" cy="19.5" r="18" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

function CreditCardIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      {/* Placeholder - actual path data needed */}
      <rect x="1" y="1" width="18" height="14" rx="2" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

function BitcoinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 21 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      {/* Placeholder - actual path data needed */}
      <rect x="2" y="2" width="17" height="20" rx="2" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

function EthereumIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 17 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      {/* Placeholder - actual path data needed */}
      <polygon
        points="8.5,2 2,14 8.5,18 15,14"
        fill="currentColor"
        opacity="0.3"
      />
      <rect x="6" y="18" width="5" height="7" rx="1" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

function BankTransferIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 22 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      {/* Placeholder - actual path data needed */}
      <rect x="1" y="4" width="20" height="12" rx="1" fill="currentColor" opacity="0.3" />
      <rect x="1" y="1" width="20" height="2" rx="1" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

function DecorativeLine({ viewBox, className }: { viewBox: string; className?: string }) {
  const [width, height] = viewBox.split(" ").slice(2).map(Number);
  return (
    <svg
      className={className}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      {/* Placeholder - actual path data needed */}
      <line
        x1="0"
        y1={height / 2}
        x2={width}
        y2={height / 2}
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
      />
    </svg>
  );
}

function DecorativeCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 53 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      {/* Placeholder - actual path data needed */}
      <circle cx="26.5" cy="26.5" r="25" fill="currentColor" opacity="0.2" />
    </svg>
  );
}

// Decorative Icon Card Component
interface DecorativeIconCardProps {
  icon?: React.ReactNode;
  innerIcon?: React.ReactNode;
  innerCircleBg?: boolean;
  containerRotate?: string;
  iconRotate?: string;
  innerRotate?: string;
  className?: string;
}

function DecorativeIconCard({
  icon,
  innerIcon,
  innerCircleBg = false,
  containerRotate = "",
  iconRotate = "",
  innerRotate = "",
  className = "",
}: DecorativeIconCardProps) {
  return (
    <div
      className={`relative flex items-center justify-center border border-white/10 backdrop-blur-[43px] bg-[rgba(35,127,255,0.38)] rounded-[55.62px] shadow-[rgba(248,248,248,0.06)_1.73825px_3.4765px_13.906px_0px_inset] opacity-100 ${containerRotate} ${className}`}
    >
      {icon && <div className={`flex-shrink-0 ${iconRotate} flex items-center justify-center`}>{icon}</div>}
      {innerIcon && (
        <div className={`absolute inset-0 flex items-center justify-center ${innerRotate}`}>
          {innerCircleBg && (
            <div className="bg-[rgb(30,30,30)] rounded-[123px] w-3/4 h-3/4 flex items-center justify-center">
              {innerIcon}
            </div>
          )}
          {!innerCircleBg && <div className="flex items-center justify-center">{innerIcon}</div>}
        </div>
      )}
    </div>
  );
}

export function DarkProtection() {
  const leftFeatures = [
    { text: "Account metrix" },
    { text: "Trading journal" },
    { text: "Economic calendar" },
    { text: "Direct payouts" },
  ];

  const rightFeatures = [
    { text: "Account analysis" },
    { text: "Risk management calculators" },
    { text: "Personal Wallet" },
    { text: "Affiliate portal" },
  ];

  return (
    <section id="protection" className="relative bg-bg py-24 sm:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Container */}
        <div className="relative w-full">
          {/* Decorative Floating Icons - Top Left Section */}
          <div className="absolute top-0 left-0 opacity-100 z-10">
            <div className="flex flex-col gap-4">
              {/* Icon Card 1 */}
              <DecorativeIconCard
                icon={<YelpIcon className="w-7 h-7" />}
                innerIcon={<CreditCardIcon className="w-5 h-4" />}
                innerCircleBg
                containerRotate="rotate-[-90deg]"
                iconRotate="rotate-[90deg]"
                innerRotate="rotate-[90deg]"
                className="w-14 h-14"
              />

              {/* Icon Card 2 */}
              <DecorativeIconCard
                icon={<MessengerIcon className="w-10 h-10" />}
                innerIcon={<BitcoinIcon className="w-5 h-6" />}
                innerCircleBg
                containerRotate="rotate-[-90deg]"
                iconRotate="rotate-[90deg]"
                innerRotate="rotate-[75deg] [&>*]:rotate-[15deg]"
                className="w-14 h-14"
              />

              {/* Icon Card 3 */}
              <DecorativeIconCard
                icon={<AppleIcon className="w-10 h-10" />}
                innerIcon={<EthereumIcon className="w-4 h-7" />}
                innerCircleBg
                className="w-14 h-14"
              />

              {/* Icon Card 4 */}
              <DecorativeIconCard
                icon={<BankTransferIcon className="w-5 h-4" />}
                containerRotate="rotate-[180deg]"
                iconRotate="rotate-[-180deg]"
                className="w-14 h-14"
              />
            </div>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-transparent to-black/25 rotate-[-90deg] opacity-100 pointer-events-none" />

          {/* Main Content Container */}
          <div className="relative opacity-80 will-change-transform z-20">
            <div className="opacity-100">
              <div className="opacity-100">
                {/* Heading Section */}
                <div className="opacity-100 max-w-4xl">
                  <div className="opacity-100">
                    <h2 className="text-[32px] font-medium leading-[120%] tracking-[-0.02em] text-white">
                      Guaranteed security and fund protection
                    </h2>
                    <p className="mt-4 text-[20px] leading-[160%] text-[rgb(156,157,159)]">
                      Your investments are safeguarded with advanced security
                      measures and strict regulatory compliance, ensuring reliable
                      protection at all times.
                    </p>
                  </div>

                  {/* Divider Line */}
                  <div className="my-8 w-full max-w-[660px] h-px bg-white/10 opacity-100" />

                  {/* Features Grid */}
                  <div className="opacity-100 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="flex flex-col gap-4">
                      {leftFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 opacity-100">
                          <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-white" />
                          <p className="text-[18px] leading-[160%] tracking-[0.04em] text-[rgb(254,255,255)]">
                            {feature.text}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-4">
                      {rightFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 opacity-100">
                          <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-white" />
                          <p className="text-[18px] leading-[160%] tracking-[0.04em] text-[rgb(254,255,255)]">
                            {feature.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8 opacity-100">
                    <a
                      href="https://clients.jc-securities.com"
                      rel="noopener"
                      target="_blank"
                      className="inline-flex items-center justify-center backdrop-blur-[12px] bg-[rgb(36,127,255)] rounded-[80px] px-8 py-4 text-center text-[20px] font-semibold text-white opacity-100 transition-colors hover:bg-[rgb(36,127,255)]/90"
                    >
                      Fund Account
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Image */}
          <div className="relative mt-12 will-change-transform opacity-100 z-30">
            <div className="relative w-full aspect-[920/694] rounded-lg overflow-hidden">
              <Image
                src="https://framerusercontent.com/images/NDIu3IiSdotpmKdT6dTL1jZs.png"
                alt="Protection security illustration"
                fill
                className="object-contain object-center"
                decoding="async"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 920px"
              />
            </div>
            {/* Blur Effect */}
            <div className="absolute inset-0 bg-[rgb(134,184,255)] blur-[150px] rounded-full opacity-100 -z-10 scale-150" />
          </div>

          {/* Additional Decorative Elements - Bottom Right Section */}
          <div className="absolute bottom-0 right-0 opacity-100 z-10">
            <div className="flex flex-col gap-4 items-end">
              {/* Icon Card 5 (Scaled) */}
              <div className="will-change-transform opacity-100 scale-[0.7] rotate-[-90deg]">
                <DecorativeIconCard
                  icon={<BankTransferIcon className="w-5 h-4" />}
                  containerRotate="rotate-[180deg]"
                  iconRotate="rotate-[-180deg]"
                  className="w-14 h-14"
                />
                <DecorativeLine
                  viewBox="0 0 121 8"
                  className="w-full h-2 flex-shrink-0 opacity-100 mt-2"
                />
              </div>

              {/* Icon Card 6 (Scaled) */}
              <div className="will-change-transform opacity-100 scale-[0.7] rotate-[-90deg]">
                <DecorativeLine
                  viewBox="0 0 106 8"
                  className="w-full h-2 flex-shrink-0 opacity-100 mb-2"
                />
                <DecorativeIconCard
                  icon={<YelpIcon className="w-7 h-7" />}
                  innerIcon={<CreditCardIcon className="w-5 h-4" />}
                  innerCircleBg
                  containerRotate="rotate-[-90deg]"
                  iconRotate="rotate-[90deg]"
                  innerRotate="rotate-[90deg]"
                  className="w-14 h-14"
                />
              </div>

              {/* Icon Card 7 (Scaled) */}
              <div className="will-change-transform opacity-100 scale-[0.7] rotate-[-90deg]">
                <DecorativeIconCard
                  icon={<AppleIcon className="w-10 h-10" />}
                  innerIcon={<EthereumIcon className="w-4 h-7" />}
                  innerCircleBg
                  className="w-14 h-14"
                />
                <DecorativeLine
                  viewBox="0 0 114 4"
                  className="w-full h-1 flex-shrink-0 opacity-100 mt-2"
                />
              </div>

              {/* Icon Card 8 (Scaled) */}
              <div className="will-change-transform opacity-100 scale-[0.7] rotate-[-90deg]">
                <DecorativeLine
                  viewBox="0 0 106 8"
                  className="w-full h-2 flex-shrink-0 opacity-100 mb-2"
                />
                <DecorativeIconCard
                  icon={<MessengerIcon className="w-10 h-10" />}
                  innerIcon={<BitcoinIcon className="w-5 h-6" />}
                  innerCircleBg
                  containerRotate="rotate-[-90deg]"
                  iconRotate="rotate-[90deg]"
                  innerRotate="rotate-[75deg] [&>*]:rotate-[15deg]"
                  className="w-14 h-14"
                />
              </div>

              {/* Icon Card 9 (Scaled with Circle) */}
              <div className="will-change-transform opacity-100 scale-[0.7] rotate-[-90deg]">
                <DecorativeCircleIcon className="w-[53px] h-[53px] flex-shrink-0 opacity-100" />
                <DecorativeLine
                  viewBox="0 0 121 8"
                  className="w-full h-2 flex-shrink-0 opacity-100 mt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

