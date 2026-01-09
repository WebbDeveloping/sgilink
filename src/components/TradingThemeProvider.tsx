"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function TradingThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (isHomePage) {
      // Activate trading theme (dark theme)
      const root = document.documentElement;
      root.setAttribute("data-theme", "trading");

      // Hide root header and footer
      const header = document.querySelector("body > header") as HTMLElement | null;
      const footer = document.querySelector("body > footer") as HTMLElement | null;
      const paddingDiv = document.querySelector('body > div[class*="pt-14"]') as HTMLElement | null;

      if (header) header.style.display = "none";
      if (footer) footer.style.display = "none";
      if (paddingDiv) paddingDiv.style.paddingTop = "0";

      return () => {
        // Restore on unmount
        root.removeAttribute("data-theme");
        if (header) header.style.display = "";
        if (footer) footer.style.display = "";
        if (paddingDiv) paddingDiv.style.paddingTop = "";
      };
    }
  }, [isHomePage]);

  return <>{children}</>;
}
