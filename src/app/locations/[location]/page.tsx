import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";

import birmingham from "@/data/locations/birmingham/info";
import brighton from "@/data/locations/brighton/info";
import farmington from "@/data/locations/farmington/info";
import ferndale from "@/data/locations/ferndale/info";
import grossePointe from "@/data/locations/grosse-pointe/info";
import lansing from "@/data/locations/lansing/info";
import plymouth from "@/data/locations/plymouth/info";
import sterlingHeights from "@/data/locations/sterling-heights/info";

type DeliveryPartner = { name: string; url: string };
type MenuItem = { name: string; description: string; price: string };
type MenuSection = { category: string; items: MenuItem[] };

type LocationData = {
  name: string;
  address: string;
  phone: string;
  hours: string;
  coordinates: { lat: number; lng: number };
  heroImage: string;
  deliveryPartners?: DeliveryPartner[];
  menu?: MenuSection[];
  galleryImages?: string[];
};

const allowedLocations = [
  "birmingham",
  "brighton",
  "farmington",
  "ferndale",
  "grosse-pointe",
  "lansing",
  "plymouth",
  "sterling-heights",
] as const;

type Location = (typeof allowedLocations)[number];

const locationData: Record<Location, LocationData> = {
  birmingham,
  brighton,
  farmington,
  ferndale,
  "grosse-pointe": grossePointe,
  lansing,
  plymouth,
  "sterling-heights": sterlingHeights,
};

function isValidLocation(value: string): value is Location {
  return allowedLocations.includes(value as Location);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location } = await params;

  if (!isValidLocation(location)) {
    return {
      title: "Sidecar Slider Bar",
      description: "Explore Sidecar Slider Bar locations in Michigan.",
    };
  }

  const data = locationData[location];
  return {
    title: `Sidecar Slider Bar — ${data.name}`,
    description: `Visit Sidecar Slider Bar in ${data.name}, MI. Order online, view our menu, and explore our location.`,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;

  if (!isValidLocation(location)) return notFound();

  const data = locationData[location];

  return (
    <main className="max-w-screen-xl mx-auto px-4 py-12 space-y-20">
      <section className="relative h-[60vh] rounded-xl overflow-hidden shadow-lg">
        <Image
          src={data.heroImage}
          alt={`${data.name} Hero`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl font-bold tracking-tight uppercase">
            {data.name}
          </h1>
        </div>
      </section>

      <section className="text-center space-y-4">
        <p className="text-lg">{data.address}</p>
        <p className="font-semibold">{data.phone}</p>
        <p className="text-sm text-neutral-600 whitespace-pre-line">
          {data.hours}
        </p>
        {(data.deliveryPartners?.length ?? 0) > 0 && (
          <div className="flex justify-center gap-4 mt-2">
            {data.deliveryPartners!.map((partner: DeliveryPartner) => (
              <a
                key={partner.name}
                href={partner.url}
                className="text-sm underline hover:underline hover:text-neutral-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                {partner.name}
              </a>
            ))}
          </div>
        )}
        <hr className="w-24 mx-auto mt-6 border-t border-neutral-300" />
      </section>

      <section className="rounded-lg overflow-hidden w-full aspect-[3/2] md:aspect-[3/1]">
        <iframe
          className="w-full h-full border-none"
          loading="lazy"
          allowFullScreen
          src={`https://maps.google.com/maps?q=${data.coordinates.lat},${data.coordinates.lng}&z=15&output=embed`}
        ></iframe>
      </section>

      {/*
        === TEMPORARILY DISABLED MENU SECTION ===
        This section displays a location's full menu from the hardcoded data.
        It's currently commented out until we implement (most likely) Sanity CMS,
        at which point the menu will be dynamically managed by the client.
      */}
      {/*
      {(data.menu?.length ?? 0) > 0 && (
        <section>
          <h2 className="text-2xl font-bold uppercase text-center mb-8">
            Our Menu
          </h2>
          <div className="space-y-12">
            {data.menu!.map((section: MenuSection) => (
              <div key={section.category}>
                <h3 className="text-xl font-semibold mb-4 border-b pb-2">
                  {section.category}
                </h3>
                <ul className="grid gap-6 sm:grid-cols-2">
                  {section.items.map((item: MenuItem) => (
                    <li key={item.name}>
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-sm text-neutral-600">
                            {item.description}
                          </p>
                        </div>
                        <span className="text-sm font-medium">
                          {item.price}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}
      */}

      {(data.galleryImages?.length ?? 0) > 0 && (
        <section>
          <h2 className="text-2xl font-bold uppercase text-center mb-6">
            Take a Look Inside
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.galleryImages!.map((img: string, i: number) => (
              <Image
                key={i}
                src={img}
                alt={`${data.name} gallery ${i + 1}`}
                width={400}
                height={300}
                className="rounded-md object-cover w-full h-48"
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
