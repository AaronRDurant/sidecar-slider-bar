"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Locations", href: "/locations" },
    { label: "Catering", href: "/catering" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-[#fdfdfb] shadow-sm border-b border-neutral-200">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo placeholder */}
        <Link
          href="/"
          className="text-lg font-extrabold tracking-tight text-neutral-900"
        >
          Sidecar Slider Bar
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`transition-colors hover:text-black ${
                pathname === href ? "text-black" : "text-neutral-600"
              }`}
            >
              {label}
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="https://order.online/business/~108859"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 inline-flex items-center rounded-md border border-black px-4 py-1.5 text-sm font-semibold text-black transition-colors hover:bg-black hover:text-white"
          >
            Order Online
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-neutral-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            // Heroicons X Mark
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Heroicons Menu
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden border-t border-neutral-200 bg-[#fdfdfb] px-4 py-4">
          <ul className="space-y-4 text-sm font-medium">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`block transition-colors hover:text-black ${
                    pathname === href ? "text-black" : "text-neutral-700"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="https://order.online/business/~108859"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-block w-full rounded-md border border-black px-4 py-2 text-center font-semibold text-black transition-colors hover:bg-black hover:text-white"
              >
                Order Online
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
