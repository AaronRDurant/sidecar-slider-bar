import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Sidecar Slider Bar",
  description:
    "A modern, mobile-first marketing site for a Michigan slider bar chain.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
