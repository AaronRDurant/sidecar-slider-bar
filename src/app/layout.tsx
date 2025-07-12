import "./globals.css";
import { ReactNode } from "react";

import InfoBar from "@/components/InfoBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sidecar Slider Bar",
  description:
    "A modern, mobile-first marketing site for a Michigan slider bar chain.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900 font-sans antialiased">
        <InfoBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
