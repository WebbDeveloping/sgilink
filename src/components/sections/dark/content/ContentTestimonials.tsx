"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { QuoteCard } from "./QuoteCard";
import { quotes } from "./quoteData";

export function ContentTestimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi || !isPlaying) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [emblaApi, isPlaying]);

  const handleMouseEnter = () => setIsPlaying(false);
  const handleMouseLeave = () => setIsPlaying(true);

  return (
    <section
      className="relative isolate overflow-hidden bg-bg py-24 sm:py-32"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 bg-gradient-to-br from-transparent via-white/2 to-transparent blur-[82px]" />
        <div className="absolute left-1/4 top-1/3 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/2 bg-gradient-to-br from-transparent via-white/2 to-transparent blur-[60px]" />
        <div className="absolute right-1/4 bottom-1/3 h-[350px] w-[350px] translate-x-1/2 translate-y-1/2 rounded-full border border-white/2 bg-gradient-to-br from-transparent via-white/2 to-transparent blur-[70px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-[48px]">
            <span
              className="bg-gradient-to-b from-white via-white to-[#474747] bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "radial-gradient(50% 150% at 50% 50%, rgb(255, 255, 255) 0%, rgb(71, 71, 71) 100%)",
              }}
            >
              Traders Testimonials
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed tracking-wide text-text-muted sm:text-xl">
            Don't let your trading skills go unrewarded. prove yourself and start
            trading today.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative mt-12">
          {/* Outer wrapper - allows partial cards to show */}
          <div className="relative mx-auto max-w-6xl overflow-visible px-4 sm:px-8 lg:px-16">
            {/* Embla container - positioned to show partial cards on edges */}
            <div
              className="overflow-hidden -mx-8 px-8 sm:-mx-12 sm:px-12 lg:-mx-16 lg:px-16"
              ref={emblaRef}
            >
              <div className="flex gap-6">
                {quotes.map((quote, index) => (
                  <div
                    key={index}
                    className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_42%]"
                  >
                    <QuoteCard
                      {...quote}
                      isActive={selectedIndex === index}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 items-center justify-between px-4">
            {/* Previous Button */}
            <button
              onClick={scrollPrev}
              className="group relative flex h-16 w-16 items-center justify-center rounded-full border border-white/8 bg-transparent transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white/20"
              aria-label="Previous testimonial"
            >
              <div className="absolute inset-0 rounded-full border border-white/8" />
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>

            {/* Next Button */}
            <button
              onClick={scrollNext}
              className="group relative flex h-16 w-16 items-center justify-center rounded-full border border-white/8 bg-transparent transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white/20"
              aria-label="Next testimonial"
            >
              <div className="absolute inset-0 rounded-full border border-white/8" />
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
