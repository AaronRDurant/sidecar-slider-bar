import Image from "next/image";
import Link from "next/link";
import locationData from "@/data/locations";

export const metadata = {
  title: "Find a Location — Sidecar Slider Bar",
  description: "Explore all Sidecar Slider Bar locations across Michigan.",
};

export default function LocationsPage() {
  return (
    <main className="max-w-screen-xl mx-auto px-4 py-16 space-y-20">
      {/* Hero */}
      <section className="relative h-[60vh] rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/images/moto-sidecar-placeholder.jpg"
          alt="Find a Location"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl font-bold uppercase tracking-tight">
            Find a Sidecar Near You
          </h1>
          <p className="text-lg text-neutral-200 mt-2 max-w-2xl">
            View all Michigan locations, browse menus, and plan your visit.
          </p>
        </div>
      </section>

      {/* Location Cards */}
      <section className="grid gap-12 md:grid-cols-2">
        {Object.entries(locationData).map(([slug, data]) => (
          <Link
            key={slug}
            href={`/locations/${slug}`}
            className="group block rounded-xl overflow-hidden shadow hover:shadow-xl transition-shadow duration-300 bg-white"
          >
            <div className="relative h-56 w-full">
              <Image
                src={data.heroImage ?? "/images/moto-sidecar-placeholder.jpg"}
                alt={`${data.name} Hero`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold uppercase tracking-wide group-hover:text-neutral-700">
                {data.name}
              </h2>
              <p className="text-sm text-neutral-600 mt-2">{data.address}</p>
              <p className="text-sm text-neutral-600">{data.phone}</p>
              {data.hours.split("\n").map((line, i) => (
                <p key={i} className="text-sm text-neutral-500">
                  {line}
                </p>
              ))}
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
