"use client";

import Link from "next/link";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-black">
      {/* Background image */}
      <Image
        src="/images/Sidecar-Slider-Bar-sliders-hero.jpg"
        alt="Sidecar Slider Bar gourmet sliders and drinks on a wooden bar"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-65 z-10" />

      {/* Content */}
      <div className="relative z-20 px-6 text-center text-white max-w-2xl -mt-24 sm:-mt-32">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 drop-shadow-md">
          Sliders, Drinks & Chill Vibes
        </h1>
        <p className="text-lg sm:text-xl text-neutral-200 mb-4 max-w-md mx-auto">
          Fresh sliders, craft cocktails, and a laid-back neighborhood vibe
          you&apos;ll love — served up daily across Metro Detroit.
        </p>
        <Link
          href="/locations"
          className="inline-block rounded border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-neutral-900"
        >
          Find a Location
        </Link>
      </div>
    </section>
  );
}
