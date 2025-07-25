import "./globals.css";
import { ReactNode } from "react";

import InfoBar from "@/components/InfoBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sidecar Slider Bar",
  description:
    "Sidecar Slider Bar serves gourmet sliders, craft beer, and cocktails across Michigan. Find locations, menus, and more.",
  metadataBase: new URL("https://sidecarsliderbar.com"),
  openGraph: {
    title: "Sidecar Slider Bar",
    description:
      "Sidecar Slider Bar serves gourmet sliders, craft beer, and cocktails across Michigan. Find locations, menus, and more.",
    url: "https://sidecarsliderbar.com",
    siteName: "Sidecar Slider Bar",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sidecar Slider Bar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sidecar Slider Bar",
    description:
      "Gourmet sliders, craft beer & cocktails. Find your nearest Sidecar Slider Bar.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900 font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          <InfoBar />
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
