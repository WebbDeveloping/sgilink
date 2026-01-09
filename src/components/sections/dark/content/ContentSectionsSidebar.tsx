"use client";

import { useRef } from "react";
import { Bars3Icon, XMarkIcon, ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { sectionsByCategory, categories, type SectionConfig } from "./sectionsConfig";

interface ContentSectionsSidebarProps {
  activeSection: string | null;
  expandedCategories: Set<string>;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  toggleCategory: (category: string) => void;
  scrollToSection: (sectionId: string) => void;
  getCategoryFromSectionId: (sectionId: string) => string | null;
}

export function ContentSectionsSidebar({
  activeSection,
  expandedCategories,
  mobileMenuOpen,
  setMobileMenuOpen,
  toggleCategory,
  scrollToSection,
  getCategoryFromSectionId,
}: ContentSectionsSidebarProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        type="button"
        onClick={() => setMobileMenuOpen(true)}
        className="fixed left-4 top-4 z-40 rounded-md bg-card p-2 shadow-lg ring-1 ring-white/8 hover:bg-card/80 lg:hidden"
        aria-label="Open navigation menu"
      >
        <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
      </button>

      {/* Backdrop Overlay (Mobile Only) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-80 transform overflow-y-auto border-r border-white/8 bg-card p-6 transition-transform duration-300 ease-in-out lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Sections</h2>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-md p-1 text-text-muted hover:bg-white/5 hover:text-white lg:hidden"
            aria-label="Close navigation menu"
          >
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <nav ref={menuRef} className="space-y-2" aria-label="Sections navigation">
          {categories.map((category) => {
            const isExpanded = expandedCategories.has(category);
            const sections = sectionsByCategory[category] || [];
            return (
              <div key={category} className="mb-5">
                <button
                  onClick={() => toggleCategory(category)}
                  className="mb-2 flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-semibold uppercase tracking-wide text-text-muted transition-colors hover:bg-white/5 hover:text-white"
                  aria-expanded={isExpanded}
                  aria-label={`${isExpanded ? "Collapse" : "Expand"} ${category} category`}
                >
                  <span>{category}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-normal text-text-subtle">
                      ({sections.length})
                    </span>
                    {isExpanded ? (
                      <ChevronDownIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                    ) : (
                      <ChevronRightIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                    )}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="space-y-1.5">
                    {sections.map((section) => {
                      const isActive = activeSection === section.id;
                      return (
                        <li key={section.id}>
                          <button
                            id={`menu-${section.id}`}
                            onClick={() => scrollToSection(section.id)}
                            className={`w-full rounded-md px-4 py-2.5 text-left text-sm transition-colors ${
                              isActive
                                ? "bg-brand text-white font-medium"
                                : "text-text-muted hover:bg-white/5 hover:text-white"
                            }`}
                          >
                            {section.name}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
