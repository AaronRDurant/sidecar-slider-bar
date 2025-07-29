// app/not-found.tsx

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-100 px-4">
      <div className="max-w-xl w-full text-center space-y-8">
        <h1 className="text-4xl font-extrabold text-red-700">Page not found</h1>
        <p className="text-xl font-semibold text-neutral-800">
          You&apos;ve taken a wrong turn.
        </p>
        <p className="text-neutral-600 text-base">
          The page you&apos;re looking for doesn&apos;t exist — maybe it never
          did. But sliders, cocktails, and good times? Those definitely do.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="inline-block bg-red-700 text-white px-6 py-3 rounded-md font-medium hover:bg-red-800 transition"
          >
            Go Home
          </Link>
          <Link
            href="/locations"
            className="inline-block border border-red-700 text-red-700 px-6 py-3 rounded-md font-medium hover:bg-red-700 hover:text-white transition"
          >
            Find a Location
          </Link>
        </div>

        <p className="text-sm text-neutral-400 pt-8">
          Still stuck?{" "}
          <Link href="/contact" className="underline hover:text-neutral-600">
            Contact us
          </Link>{" "}
          and we&apos;ll point you in the right direction.
        </p>
      </div>
    </main>
  );
}
