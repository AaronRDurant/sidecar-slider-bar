import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 text-neutral-700 text-sm">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
          {/* About / Branding */}
          <div>
            <h2 className="font-semibold text-neutral-900">
              Sidecar Slider Bar
            </h2>
            <p className="mt-2 max-w-sm leading-relaxed text-neutral-600">
              Gourmet sliders, craft beer, and cocktails — served in a welcoming
              Michigan atmosphere. With locations across the state, we offer
              something for everyone, from classic beef to loaded tots.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h2 className="font-semibold text-neutral-900">Explore</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/menus">Menus</Link>
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
          <div>
            <h2 className="font-semibold text-neutral-900">Info</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/press">Press</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/careers">Join Our Team</Link>
              </li>
              <li>
                <Link href="/order">Order Online</Link>
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
