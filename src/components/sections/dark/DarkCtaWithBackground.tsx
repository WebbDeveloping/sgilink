"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { sgiLinkDocs } from "@/lib/content/sgi-link-docs";

export function DarkCtaWithBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Star field animation
    const stars: Array<{
      x: number;
      y: number;
      radius: number;
      opacity: number;
      speed: number;
    }> = [];
    const numStars = 100;

    // Initialize stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random(),
        speed: Math.random() * 0.5 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Update star position
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }

        // Twinkle effect
        star.opacity += (Math.random() - 0.5) * 0.02;
        star.opacity = Math.max(0.3, Math.min(1, star.opacity));

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section id="cta" className="relative z-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative w-full overflow-hidden rounded-[32px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://framerusercontent.com/images/KfVDQ377fhynEibLbdbmshAlGY.png"
              alt=""
              className="h-full w-full object-cover"
              decoding="async"
              loading="lazy"
            />
          </div>

          {/* Decorative SVG Frames */}
          {/* Frame 01 */}
          <div
            className="absolute left-4 top-4 z-[2] opacity-100"
            style={{ transform: "scale(0.8488)" }}
          >
            <div className="h-12 w-12 rounded-lg  backdrop-blur-sm sm:h-16 sm:w-16" />
          </div>

          {/* Frame 02 */}
          <div
            className="absolute right-8 top-12 z-[2] opacity-100"
            style={{ transform: "scale(0.853825)" }}
          >
            <div className="h-10 w-10 rounded-full  backdrop-blur-sm sm:h-14 sm:w-14" />
          </div>

          {/* Frame 03 */}
          <div
            className="absolute bottom-8 left-12 z-[2] opacity-100"
            style={{ transform: "scale(0.85885)" }}
          >
            <div className="h-14 w-14 rounded-lg  backdrop-blur-sm sm:h-20 sm:w-20" />
          </div>

          {/* Stars Canvas */}
          <div className="absolute inset-0 z-[1]">
            <div className="relative h-full w-full overflow-hidden">
              <canvas
                ref={canvasRef}
                className="absolute h-full w-full"
                style={{ position: "absolute" }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex min-h-[400px] flex-col items-center justify-center px-6 py-16 text-center sm:min-h-[500px] sm:px-8 sm:py-24">
            <div className="mx-auto max-w-4xl">
              {/* Eyebrow */}
              <p className="text-xl font-semibold uppercase tracking-[0.04em] text-brand sm:text-2xl">
                Ready to Get Started
              </p>

              {/* Main Heading with Gradient */}
              <h2 className="mt-6 text-4xl font-medium leading-[120%] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                <span
                  className="bg-gradient-to-b from-white via-white to-gray-600 bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "radial-gradient(63.3515% 163.115% at 50% 13.6612%, rgb(255, 255, 255) 0%, rgb(70, 72, 71) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Start Your Trading Journey Today
                </span>
              </h2>

              {/* Description */}
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
                {sgiLinkDocs.gettingStarted.exactQuotes.investors}
              </p>

              {/* CTA Button */}
              <div className="mt-10">
                <Link
                  href="https://clients.jc-securities.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-[80px] bg-[rgb(36,127,255)] px-8 py-4 text-lg font-semibold text-white backdrop-blur-md transition-all hover:bg-[rgb(36,127,255)]/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
