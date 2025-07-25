"use client";

const MOBILE_MESSAGE = (
  <>
    <span role="img" aria-label="burger">
      🍔
    </span>{" "}
    8 Michigan locations and counting
  </>
);

const DESKTOP_MESSAGE = (
  <>
    <span role="img" aria-label="burger">
      🍔
    </span>{" "}
    8 Michigan locations and counting — find your Sidecar Slider Bar today.
  </>
);

export default function InfoBar() {
  return (
    <div className="bg-[#0e1b34] text-white text-sm text-center px-4 py-2 font-medium">
      <div className="block sm:hidden">{MOBILE_MESSAGE}</div>
      <div className="hidden sm:block">{DESKTOP_MESSAGE}</div>
    </div>
  );
}
