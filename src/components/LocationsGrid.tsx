"use client";

import Image from "next/image";

const locations = [
  "Birmingham",
  "Brighton",
  "Farmington",
  "Ferndale",
  "Grosse Pointe",
  "Lansing",
  "Plymouth",
  "Sterling Heights",
];

export default function LocationsGrid() {
  return (
    <section className="bg-white pb-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Find Your Sidecar
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((location) => (
            <div
              key={location}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src="/images/moto-sidecar-placeholder.jpg"
                alt={location}
                width={600}
                height={400}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white text-lg md:text-xl font-semibold uppercase tracking-wide">
                  {location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
