"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  // MoonIcon,
  // SunIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

// Grouped nav so desktop isn't crazy long

const resourceLinks = [
  { name: "FAQs", href: "/faq" },
  { name: "Contact", href: "/contact" },
  { name: "Risk Disclosure", href: "/disclosures" },
];

// NOTE: Theme is intentionally fixed to light.
// If/when you re-enable theming, reintroduce Theme type, state, and effects here.

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-surface/90 backdrop-blur-xl">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:py-4 lg:px-8"
      >
        {/* Logo – kept left-aligned, no flex grow on desktop */}
        <div className="flex items-center">
          <Link
            href="/"
            className="-m-1.5 p-1.5 flex items-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">SGI-LINK</span>
            <div className="relative h-8 w-32 sm:h-9 sm:w-36">
              <Image
                src="/images/SGI-logo-05.png"
                alt="SGI-LINK logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Theme toggle intentionally disabled; site is light-only for now. */}
          {/* <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-2.5 py-1 text-sm text-text-muted shadow-sm hover:bg-chip-blue"
            aria-label="Toggle color theme"
          >
            {theme === "dark" ? (
              <SunIcon className="h-4 w-4" aria-hidden="true" />
            ) : (
              <MoonIcon className="h-4 w-4" aria-hidden="true" />
            )}
          </button> */}

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-text-muted"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop nav */}
        <PopoverGroup className="hidden items-center gap-x-10 lg:flex">
          {/* Home (single link) */}
          <Link
            href="/"
            className="text-sm font-semibold text-text hover:text-brand"
          >
            Home
          </Link>

          {/* About (single link) */}
          <Link
            href="/about"
            className="text-sm font-semibold text-text hover:text-brand"
          >
            About
          </Link>

          {/* Strategy (single link) */}
          <Link
            href="/strategy"
            className="text-sm font-semibold text-text hover:text-brand"
          >
            Strategy
          </Link>

          {/* Resources dropdown */}
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-text hover:text-brand">
              Resources
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-text-muted"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-3 w-64 -translate-x-1/2 overflow-hidden rounded-2xl bg-surface shadow-lg ring-1 ring-border-card data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[enter]:ease-out data-[leave]:duration-150 data-[leave]:ease-in"
            >
              <div className="p-3">
                {resourceLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-text hover:bg-chip-warm hover:text-brand"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
        </PopoverGroup>

        {/* Desktop right side: actions (theme toggle removed for light-only) */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="https://dart.cash/"
            className="text-sm font-semibold text-text hover:text-brand"
          >
            Investor Login <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-brand px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark"
          >
            Request Access
          </Link>
        </div>
      </nav>

      {/* Mobile menu ---------------------------------------------------- */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-40 bg-black/20" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-xs overflow-y-auto bg-surface p-6 shadow-xl ring-1 ring-border-card">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="-m-1.5 p-1.5 flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">SGI-LINK</span>
              <div className="relative h-8 w-32">
                <Image
                  src="/logo-blue.png"
                  alt="SGI-LINK logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-text-muted"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 space-y-2">
            {/* Home */}
            <Link
              href="/"
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-text hover:bg-chip-warm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* About */}
            <Link
              href="/about"
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-text hover:bg-chip-warm"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>

            {/* Strategy */}
            <Link
              href="/strategy"
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-text hover:bg-chip-warm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Strategy
            </Link>

            {/* Resources */}
            <Disclosure as="div" className="-mx-3">
              <DisclosureButton className="group flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-base font-semibold text-text hover:bg-chip-warm">
                Resources
                <ChevronDownIcon
                  aria-hidden="true"
                  className="h-5 w-5 flex-none text-text-muted group-data-[open]:rotate-180 transition"
                />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 space-y-1">
                {resourceLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg px-6 py-1.5 text-sm font-semibold text-text-muted hover:bg-chip-warm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </DisclosurePanel>
            </Disclosure>
          </div>

          <div className="mt-6 space-y-2 border-t border-border pt-4">
            {/* Theme toggle intentionally removed – light theme is the only mode. */}
            {/* <button>...</button> */}

            <Link
              href="/investor-login"
              className="block rounded-lg px-3 py-2 text-base font-semibold text-text hover:bg-chip-warm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Investor Login
            </Link>
            <Link
              href="/contact"
              className="block rounded-lg bg-brand px-3 py-2 text-base font-semibold text-white hover:bg-brand-dark"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request Access
            </Link>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
