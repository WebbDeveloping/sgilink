"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Dialog,
  DialogPanel,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

// Logo Component
function MainLogo() {
  return (
    <div
      data-framer-component-type="Image"
      data-framer-name="Main Logo"
      aria-hidden="true"
      style={{
        opacity: 1,
        width: "100%",
        flexShrink: 0,
        position: "relative",
        minWidth: "120px",
        height: "40px",
      }}
    >
      <Image
        src="/images/SGI-logo-05.png"
        alt="SGI-LINK logo"
        fill
        style={{
          objectFit: "contain",
          objectPosition: "left center",
        }}
        priority
      />
    </div>
  );
}

// Hamburger Menu Button Component
function HamburgerButton({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="framer-8166mz-container md:hidden"
      style={{ opacity: 1, width: "24px", height: "24px" }}
    >
      <div
        className="framer-9cEyV framer-11ngpl1 framer-v-11ngpl1"
        data-framer-name="Default"
        data-highlight="true"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick();
          }
        }}
        style={{
          height: "100%",
          width: "100%",
          opacity: 1,
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "6px 0",
        }}
      >
        <div
          className="framer-1p3jxs2"
          data-framer-name="Line 1"
          style={{
            backgroundColor: "rgb(36, 127, 255)",
            borderRadius: "7px",
            transform: "none",
            opacity: 1,
            height: "3px",
            width: "100%",
          }}
        />
        <div
          className="framer-1nf5ukl"
          data-framer-name="Line 2"
          style={{
            backgroundColor: "rgb(36, 127, 255)",
            borderRadius: "7px",
            opacity: 1,
            height: "3px",
            width: "100%",
          }}
        />
        <div
          className="framer-hwjf89"
          data-framer-name="Line 3"
          style={{
            backgroundColor: "rgb(36, 127, 255)",
            borderRadius: "7px",
            transform: "none",
            opacity: 1,
            height: "3px",
            width: "100%",
          }}
        />
      </div>
    </div>
  );
}

export function DarkNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smooth scroll handler for section links
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div
      className="framer-1lrbplz-container"
      id="1lrbplz"
      style={{
        willChange: "transform",
        opacity: 1,
        transform: "translateX(-50%)",
        position: "fixed",
        left: "50%",
        top: 0,
        zIndex: 40,
        width: "100%",
        maxWidth: "100vw",
        paddingLeft: "16px",
        paddingRight: "16px",
        paddingTop: "18px",
        boxSizing: "border-box",
      }}
    >
      <div
        className="framer-0w9kf framer-1f7wcfs framer-v-ey288o"
        data-framer-name="Phone Close"
        style={{ width: "100%", opacity: 1, minWidth: "100%" }}
      >
        <div
          className="framer-175jpot"
          data-border="true"
          data-framer-name="Stroke"
          style={{
            "--border-bottom-width": "1px",
            "--border-color": "rgba(255, 255, 255, 0.08)",
            "--border-left-width": "1px",
            "--border-right-width": "1px",
            "--border-style": "solid",
            "--border-top-width": "1px",
            backdropFilter: "blur(10px)",
            background:
              "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.24) 54.254%, rgba(255, 255, 255, 0) 100%)",
            borderRadius: "106px",
            opacity: 1,
            borderBottomWidth: "var(--border-bottom-width)",
            borderColor: "var(--border-color)",
            borderLeftWidth: "var(--border-left-width)",
            borderRightWidth: "var(--border-right-width)",
            borderStyle: "var(--border-style)",
            borderTopWidth: "var(--border-top-width)",
            width: "100%",
            minWidth: "100%",
          } as React.CSSProperties & Record<string, string | number>}
        >
          <div
            className="framer-6zr4vf"
            data-framer-name="Nav Content"
            style={{
              backdropFilter: "none",
              background:
                "linear-gradient(90deg, rgba(15, 16, 18, 0.1) 0%, rgba(15, 16, 18, 0.7) 54.1971%, rgba(15, 16, 18, 0.1) 100%)",
              borderRadius: "106px",
              opacity: 1,
              width: "100%",
              minWidth: "100%",
            }}
          >
            <div
              className="framer-1w8rppt"
              data-framer-name="Container"
              style={{
                opacity: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 24px",
                flexWrap: "wrap",
                gap: "16px",
                width: "100%",
                minWidth: "100%",
                boxSizing: "border-box",
              }}
            >
              <div
                // className="framer-c8rp63 flex space-between"
                data-framer-name="Logo An Humbarger"
                style={{
                  opacity: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  flex: "1 1 auto",
                  justifyContent: "space-between",
                }}
              >
                <Link
                  className="framer-g2bpaz framer-eapuqi"
                  data-framer-name="Logo"
                  href="/"
                  style={{
                    opacity: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    textDecoration: "none",
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MainLogo />
                </Link>
                <div
                  className="lg:hidden"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "32px",
                    height: "32px",
                    flexShrink: 0,
                  }}
                >
                  <HamburgerButton onClick={() => setMobileMenuOpen(true)} />
                </div>
              </div>

              {/* Desktop nav */}
              <div className="hidden items-center gap-x-10 lg:flex">
                <a
                  href="#platform"
                  onClick={(e) => handleScrollToSection(e, "platform")}
                  className="text-sm font-semibold text-white hover:text-brand-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand transition-colors cursor-pointer"
                >
                  Platform
                </a>

                <a
                  href="#why-us"
                  onClick={(e) => handleScrollToSection(e, "why-us")}
                  className="text-sm font-semibold text-white hover:text-brand-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand transition-colors cursor-pointer"
                >
                  Why Us
                </a>

                <a
                  href="#timeline"
                  onClick={(e) => handleScrollToSection(e, "timeline")}
                  className="text-sm font-semibold text-white hover:text-brand-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand transition-colors cursor-pointer"
                >
                  Timeline
                </a>

                <a
                  href="#api-features"
                  onClick={(e) => handleScrollToSection(e, "api-features")}
                  className="text-sm font-semibold text-white hover:text-brand-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand transition-colors cursor-pointer"
                >
                  API
                </a>

                <a
                  href="#cta"
                  onClick={(e) => handleScrollToSection(e, "cta")}
                  className="text-sm font-semibold text-white hover:text-brand-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand transition-colors cursor-pointer"
                >
                  Contact
                </a>
              </div>

              {/* Desktop right side: actions */}
              <div className="hidden items-center gap-4 lg:flex">
                <Link
                  href="/contact"
                  className="rounded-full bg-brand px-4 py-1.5 text-sm font-semibold text-brand-on shadow-sm hover:bg-brand-dark active:bg-interactive-active transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  Investor Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-40 bg-bg/50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-xs overflow-y-auto border-l border-gradient-card bg-card p-6 shadow-xl ring-1 ring-border-card">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
              style={{ textDecoration: "none" }}
            >
              <span className="sr-only">SGI-LINK</span>
              <MainLogo />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-text-muted hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand transition-colors"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 space-y-2">
            <a
              href="#platform"
              onClick={(e) => handleScrollToSection(e, "platform")}
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-text hover:bg-card-highlight hover:text-brand-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand transition-colors cursor-pointer"
            >
              Platform
            </a>

            <a
              href="#why-us"
              onClick={(e) => handleScrollToSection(e, "why-us")}
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-text hover:bg-card-highlight hover:text-brand-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand transition-colors cursor-pointer"
            >
              Why Us
            </a>

            <a
              href="#timeline"
              onClick={(e) => handleScrollToSection(e, "timeline")}
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-text hover:bg-card-highlight hover:text-brand-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand transition-colors cursor-pointer"
            >
              Timeline
            </a>

            <a
              href="#api-features"
              onClick={(e) => handleScrollToSection(e, "api-features")}
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-text hover:bg-card-highlight hover:text-brand-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand transition-colors cursor-pointer"
            >
              API
            </a>

            <a
              href="#cta"
              onClick={(e) => handleScrollToSection(e, "cta")}
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-text hover:bg-card-highlight hover:text-brand-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand transition-colors cursor-pointer"
            >
              Contact
            </a>
          </div>

          <div className="mt-6 space-y-2 border-t border-border pt-4">
            <Link
              href="/contact"
              className="block rounded-lg bg-brand px-3 py-2 text-base font-semibold text-brand-on hover:bg-brand-dark active:bg-interactive-active transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              onClick={() => setMobileMenuOpen(false)}
            >
              Investor Login
            </Link>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
}
