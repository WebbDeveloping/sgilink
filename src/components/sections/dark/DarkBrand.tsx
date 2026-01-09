"use client";

import { motion, useReducedMotion } from "framer-motion";

interface BrandLogo {
  src: string;
  width: number;
  height: number;
  alt: string;
}

const brandLogos: BrandLogo[] = [
  {
    src: "https://framerusercontent.com/images/OHHaBGXnBzexMpQS56eqj1rE4.png?width=453&height=127",
    width: 453,
    height: 127,
    alt: "Brand 01",
  },
  {
    src: "https://framerusercontent.com/images/61bABfcyWpkPqIImhXSfoCKv1sk.png?width=307&height=85",
    width: 307,
    height: 85,
    alt: "Brand 02",
  },
  {
    src: "https://framerusercontent.com/images/hyJSxEzZk8ysDmzeiho4Dz4.png?width=307&height=53",
    width: 307,
    height: 53,
    alt: "Brand 03",
  },
  {
    src: "https://framerusercontent.com/images/5zAsODti2ed3B7BaaNrQbNU37M4.svg?width=153&height=86",
    width: 153,
    height: 86,
    alt: "Brand 04",
  },
  {
    src: "https://framerusercontent.com/images/9SIeX9CE8oQHLlMPB8hLJuqw5Qo.svg?width=154&height=44",
    width: 154,
    height: 44,
    alt: "Brand 05",
  },
];

export function DarkBrand() {
  const shouldReduceMotion = useReducedMotion();

  // Duplicate logos 3 times for seamless infinite scroll
  // When animating, we move by exactly one set (33.33%), creating a perfect loop
  const duplicatedLogos = [...brandLogos, ...brandLogos, ...brandLogos];

  return (
    <section className="relative w-full py-8 sm:py-12" style={{ zIndex: 1 }}>
      <div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        style={{ position: "relative", zIndex: 2 }}
      >
        {/* Heading */}
        <div style={{ transform: "none" }}>
          <p
            style={{
              fontFamily: "'Inter', 'Inter Placeholder', sans-serif",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: "1.5em",
              textAlign: "center",
              color: "rgb(229, 225, 225)",
              margin: 0,
              padding: "0 0 2rem 0",
            }}
          >
            Trusted by beloved partners
          </p>
        </div>

        {/* Ticker Container */}
        {/* <div className="relative w-full overflow-hidden" style={{ zIndex: 10, minHeight: "80px" }}>
          <motion.section
            style={{
              display: "flex",
              width: "100%",
              minHeight: "80px",
              alignItems: "center",
              margin: 0,
              padding: "20px 0",
              listStyleType: "none",
              opacity: 1,
              maskImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
              overflow: "hidden",
              position: "relative",
              zIndex: 10,
            }}
            className="sm:min-h-[100px] md:min-h-[120px] lg:min-h-[140px]"
          >
            <motion.ul
              className="flex min-h-[80px] items-center gap-5 sm:gap-8 sm:min-h-[100px] md:min-h-[120px] lg:min-h-[140px]"
              style={{
                width: "fit-content",
                height: "100%",
                margin: 0,
                padding: 0,
                listStyleType: "none",
                position: "relative",
                flexDirection: "row",
                willChange: "transform",
                zIndex: 11,
              }}
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      x: [0, "-33.333%"],
                    }
              }
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {duplicatedLogos.map((brand, index) => (
                <li
                  key={`${brand.alt}-${index}`}
                  aria-hidden={index >= brandLogos.length ? "true" : undefined}
                  style={{
                    flexShrink: 0,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "auto",
                      height: "60px",
                      minHeight: "50px",
                      minWidth: "120px",
                    }}
                    className="sm:h-[80px] sm:min-h-[70px] md:h-[100px] md:min-h-[90px] lg:h-[120px] lg:min-h-[110px]"
                  >
                    <img
                      decoding="auto"
                      width={brand.width}
                      height={brand.height}
                      src={brand.src}
                      alt={brand.alt}
                      style={{
                        display: "block",
                        width: "auto",
                        height: "100%",
                        maxWidth: "180px",
                        maxHeight: "60px",
                        minWidth: "100px",
                        minHeight: "40px",
                        objectPosition: "center center",
                        objectFit: "contain",
                        zIndex: 2,
                        position: "relative",
                      }}
                      className="sm:max-w-[240px] sm:max-h-[80px] sm:min-w-[140px] md:max-w-[300px] md:max-h-[100px] md:min-w-[180px] lg:max-w-[380px] lg:max-h-[120px] lg:min-w-[220px]"
                    />
                  </div>
                </li>
              ))}
            </motion.ul>
          </motion.section>
        </div> */}
      </div>
    </section>
  );
}
