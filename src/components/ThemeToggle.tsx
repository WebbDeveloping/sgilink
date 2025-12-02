"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  // Initialize theme
  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;
    const stored = localStorage.getItem("theme");
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const shouldDark = stored === "dark" || (!stored && system);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDark(shouldDark);

    if (shouldDark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, []);

  // Toggle
  const toggle = () => {
    const root = document.documentElement;
    const next = !isDark;
    setIsDark(next);

    if (next) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggle}
      className="inline-flex items-center rounded-full border border-(--border) bg-(--surface) px-3 py-1 text-xs font-medium text-(--text)"
    >
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
