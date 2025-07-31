"use client";

import Link from "next/link";

const MOBILE_MESSAGE = (
  <Link href="/locations" className="hover:text-red-600 transition-colors">
    <span role="img" aria-label="burger">
      🍔
    </span>{" "}
    8 Michigan locations and counting
  </Link>
);

const DESKTOP_MESSAGE = (
  <Link href="/locations" className="hover:text-red-600 transition-colors">
    <span role="img" aria-label="burger">
      🍔
    </span>{" "}
    8 Michigan locations and counting — find your Sidecar Slider Bar today.
  </Link>
);

export default function InfoBar() {
  return (
    <div className="bg-neutral-900 text-white text-sm text-center px-4 py-2 font-medium">
      <div className="block sm:hidden">{MOBILE_MESSAGE}</div>
      <div className="hidden sm:block">{DESKTOP_MESSAGE}</div>
    </div>
  );
}
