"use client";

import Link from "next/link";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-black">
      {/* Background image */}
      <Image
        src="/images/moto-sidecar-placeholder.jpg" // Replace with actual image
        alt="Sidecar Sliders"
        layout="fill"
        objectFit="cover"
        priority
        className="z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* Content */}
      <div className="relative z-20 px-6 text-center text-white max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Sliders, Spirits & Real Good Vibes
        </h1>
        <p className="text-lg sm:text-xl text-neutral-200 mb-6">
          From craft sliders and gourmet dogs to rare bourbons and local brews,
          Sidecar Slider Bar brings bold flavors and laid-back vibes to
          neighborhoods across Metro Detroit.
        </p>
        <Link
          href="/locations"
          className="mt-6 inline-block rounded border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-neutral-900"
        >
          Find a Location
        </Link>
      </div>
    </section>
  );
}
