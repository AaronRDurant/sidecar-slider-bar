import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 text-neutral-700 text-sm">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
          {/* About / Branding */}
          <div className="text-center sm:text-left">
            <Link href="/" className="inline-block mx-auto sm:mx-0">
              <Image
                src="/images/Sidecar-Slider-Bar-sidecar-logo.svg"
                alt="Sidecar Slider Bar"
                width={180}
                height={100}
                className="h-14 w-auto"
                priority
              />
            </Link>
            <p className="mt-3 max-w-sm mx-auto sm:mx-0 leading-relaxed text-neutral-600">
              Gourmet sliders, craft beer, and handcrafted cocktails, all served
              in a warm, authentically Michigan setting. With eight locations
              and counting, we&apos;ve got something for everyone, from juicy
              USDA-certified beef sliders to hand-breaded chicken, loaded tots,
              and more.
            </p>
          </div>

          {/* Explore */}
          <div className="text-center sm:text-left">
            <h2 className="font-semibold text-neutral-900">Explore</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/locations">Locations</Link>
              </li>
              <li>
                <Link href="/catering">Catering</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div className="text-center sm:text-left">
            <h2 className="font-semibold text-neutral-900">Info</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/apply">Join Our Team</Link>
              </li>
              <li>
                <Link
                  href="https://order.online/business/~108859"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order Online
                </Link>
              </li>
              <li>
                <Link
                  href="https://services.shift4.com/gc/SidecarSliderBar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-neutral-200 pt-4 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Sidecar Slider Bar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
