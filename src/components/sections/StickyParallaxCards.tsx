// components/sections/StickyParallaxCards.tsx
"use client";

import { ReactNode } from "react";

export interface StickyParallaxCard {
  id: string;
  content: ReactNode; // Flexible content rendering
}

export interface StickyParallaxCardsProps {
  cards: StickyParallaxCard[];
  stickyTop?: number; // Default: 80 (5rem)
  className?: string;
  containerClassName?: string;
  cardClassName?: string;
}

export function StickyParallaxCards({
  cards,
  stickyTop = 80,
  className = "",
  containerClassName = "",
  cardClassName = "",
}: StickyParallaxCardsProps) {
  return (
    <section className={className}>
      <div
        className={`relative sgi-parallax-cards-container ${containerClassName}`}
      >
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`sgi-parallax-card ${cardClassName}`}
            style={{
              position: "sticky",
              top: `${stickyTop}px`,
              zIndex: 10 + index * 10,
            }}
          >
            {card.content}
          </div>
        ))}
      </div>
    </section>
  );
}
