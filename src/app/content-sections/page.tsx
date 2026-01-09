"use client";

import { useEffect, useRef, useState } from "react";
import {
  sections,
  type SectionConfig,
} from "@/components/sections/dark/content/sectionsConfig";
import { ContentSectionsSidebar } from "@/components/sections/dark/content/ContentSectionsSidebar";
import { SectionMetadata } from "@/components/sections/dark/content/SectionMetadata";

export default function ContentSectionsPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  );
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Toggle category expansion
  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  // Get category from section ID
  const getCategoryFromSectionId = (sectionId: string): string | null => {
    const section = sections.find((s) => s.id === sectionId);
    return section ? section.category : null;
  };

  // Scroll to section when menu item is clicked
  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Update active section immediately
      setActiveSection(sectionId);

      // Auto-expand the category containing this section
      const category = getCategoryFromSectionId(sectionId);
      if (category) {
        setExpandedCategories((prev) => new Set(prev).add(category));
      }

      // Close mobile menu after navigation
      setMobileMenuOpen(false);
    }
  };

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen]);

  // Track scroll position to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 80;

      for (const [sectionId, element] of Object.entries(sectionRefs.current)) {
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);

            // Auto-expand the category containing the active section
            const category = getCategoryFromSectionId(sectionId);
            if (category) {
              setExpandedCategories((prev) => new Set(prev).add(category));
            }

            // Auto-scroll menu to active item
            const menuItem = document.getElementById(`menu-${sectionId}`);
            if (menuItem && menuItem.parentElement) {
              const menuRect = menuItem.parentElement.getBoundingClientRect();
              const itemRect = menuItem.getBoundingClientRect();
              if (
                itemRect.top < menuRect.top ||
                itemRect.bottom > menuRect.bottom
              ) {
                menuItem.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                });
              }
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen bg-bg">
      <ContentSectionsSidebar
        activeSection={activeSection}
        expandedCategories={expandedCategories}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        toggleCategory={toggleCategory}
        scrollToSection={scrollToSection}
        getCategoryFromSectionId={getCategoryFromSectionId}
      />

      {/* Main Content */}
      <main className="flex-1 w-full lg:ml-10">
        <div className="p-4 sm:p-6 lg:p-8">
          {sections.map((section) => {
            const SectionComponent = section.component;
            return (
              <div
                key={section.id}
                id={section.id}
                ref={(el) => {
                  sectionRefs.current[section.id] = el;
                }}
                className="mb-16 scroll-mt-20"
              >
                <SectionMetadata section={section} />
                <div className="rounded-lg border border-white/8 bg-bg/50 p-4">
                  <SectionComponent />
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
