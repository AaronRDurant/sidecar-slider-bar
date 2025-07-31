"use client";

import Image from "next/image";
import Link from "next/link";

const locations = [
  {
    name: "Birmingham",
    image: "/images/locations/Birmingham-Sidecar-Slider-Bar.jpg",
    alt: "Interior of Sidecar Slider Bar Birmingham location with seating and bar",
    link: "/locations/birmingham",
  },
  {
    name: "Brighton",
    image: "/images/locations/Brighton-Sidecar-Slider-Bar.jpg",
    alt: "Inside Sidecar Slider Bar Brighton with brick walls and bar seating",
    link: "/locations/brighton",
  },
  {
    name: "Farmington",
    image: "/images/locations/Farmington-Sidecar-Slider-Bar.jpg",
    alt: "Sidecar Slider Bar Farmington sliders and drinks at the bar",
    link: "/locations/farmington",
  },
  {
    name: "Ferndale",
    image: "/images/locations/Ferndale-Sidecar-Slider-Bar.jpg",
    alt: "Bar area at Sidecar Slider Bar Ferndale with signature motorcycle mural",
    link: "/locations/ferndale",
  },
  {
    name: "Grosse Pointe",
    image: "/images/locations/Grosse-Pointe-Sidecar-Slider-Bar.jpg",
    alt: "Dining area inside Sidecar Slider Bar Grosse Pointe with booths and TVs",
    link: "/locations/grosse-pointe",
  },
  {
    name: "Lansing",
    image: "/images/locations/Lansing-Sidecar-Slider-Bar.jpg",
    alt: "Sliders and drinks on the bar at Sidecar Slider Bar Lansing location",
    link: "/locations/lansing",
  },
  {
    name: "Plymouth",
    image: "/images/locations/Plymouth-Sidecar-Slider-Bar.jpg",
    alt: "Wide view of the bar and seating at Sidecar Slider Bar Plymouth",
    link: "/locations/plymouth",
  },
  {
    name: "Sterling Heights",
    image: "/images/locations/Sterling-Heights-Sidecar-Slider-Bar.jpg",
    alt: "Bar and dining area at Sidecar Slider Bar Sterling Heights location",
    link: "/locations/sterling-heights",
  },
];

export default function LocationsGrid() {
  return (
    <section className="bg-white pb-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Find Your Sidecar
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map(({ name, image, alt, link }) => (
            <Link
              key={name}
              href={link}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src={image}
                alt={alt}
                width={600}
                height={400}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white text-lg md:text-xl font-semibold uppercase tracking-wide">
                  {name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
