"use client";

import Image from "next/image";
import type { Quote } from "./quoteData";

interface QuoteCardProps extends Quote {
  isActive: boolean;
}

export function QuoteCard({ quote, name, title, image, isActive }: QuoteCardProps) {
  return (
    <div
      className={`relative flex h-full w-full flex-col rounded-lg border border-white/8 bg-card/50 p-6 transition-all duration-300 ${
        isActive
          ? "opacity-100 scale-[1.08] z-10"
          : "opacity-30 scale-100 z-0"
      }`}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col">
        {/* Quote Text */}
        <div className="mb-6">
          <p className="text-[28px] leading-[140%] text-white">{quote}</p>
        </div>

        {/* Details */}
        <div className="mt-auto flex items-center gap-4">
          {/* Avatar */}
          <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-full">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>

          {/* Name and Title */}
          <div className="flex flex-col">
            <p className="text-2xl leading-[140%] text-white">{name}</p>
            <p className="text-lg font-extralight leading-[140%] text-text-muted">
              {title}
            </p>
          </div>
        </div>
      </div>

      {/* Background SVG-like decoration */}
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden rounded-lg opacity-50">
        <svg
          className="h-full w-full"
          viewBox="0 0 911 324"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H911V324H0V0Z"
            fill="url(#cardGradient)"
            fillOpacity="0.05"
          />
          <defs>
            <linearGradient
              id="cardGradient"
              x1="0"
              y1="0"
              x2="911"
              y2="324"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.535" stopColor="white" stopOpacity="0.02" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
