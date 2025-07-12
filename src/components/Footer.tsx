import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 text-neutral-700 text-sm">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About / SEO Text */}
          <div>
            <h2 className="font-semibold text-neutral-900">
              Sidecar Slider Bar
            </h2>
            <p className="mt-2 leading-relaxed text-neutral-600">
              Gourmet sliders, craft beer, and cocktails — served in a welcoming
              Michigan atmosphere. With locations across the state, we offer
              something for everyone, from classic beef to loaded tots.
            </p>
          </div>

          {/* Links */}
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

          {/* Quick Links */}
          <div>
            <h2 className="font-semibold text-neutral-900">Guests</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/order">Order Online</Link>
              </li>
              <li>
                <Link href="/vip">Become a VIP</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/careers">Join Our Team</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter (static placeholder for now) */}
          <div>
            <h2 className="font-semibold text-neutral-900">Stay in Touch</h2>
            <p className="mt-2 text-neutral-600">
              Get exclusive offers, event invites, and updates — no spam.
            </p>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm"
              />
              <button
                type="submit"
                className="mt-2 w-full rounded-md bg-neutral-900 px-3 py-2 text-sm font-medium text-white hover:bg-neutral-800"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 border-t border-neutral-200 pt-4 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Sidecar Slider Bar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
