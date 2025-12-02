import "./globals.css";
import { NavBar } from "@/components/NavBar";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-(--bg) text-(--text)">
        {/* <NavBar /> */}
        {children}
      </body>
    </html>
  );
}
