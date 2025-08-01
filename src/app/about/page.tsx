"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-neutral-100 text-neutral-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/images/Sidecar-Slider-Bar-sliders-menu.jpg"
          alt="A collection of Sidecar Slider Bar sliders on a restaurant bar"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-center text-white px-4">
          <p className="text-lg tracking-widest uppercase">Get To Know</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
            Sidecar Slider Bar
          </h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <Image
            src="/images/Sidecar-Slider-Bar-pizza-street-view.jpg"
            alt="Sidecar Slider Bar street view with pizza"
            width={800}
            height={600}
            className="rounded-xl shadow-lg object-cover w-full h-auto"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="space-y-5 text-lg leading-relaxed">
            <p>
              Welcome to Sidecar Slider Bar, where bold flavor meets laid-back
              comfort. We&apos;re proud to serve crave-worthy sliders made with
              USDA-certified beef, hand-breaded chicken, and the freshest local
              ingredients.
            </p>
            <p>
              From classic favorites to chef-driven creations, every bite is
              crafted with care and packed with flavor. Pair your sliders with
              loaded tots, shareable apps, gourmet hot dogs, crisp salads, and
              more — there&apos;s something for every craving.
            </p>
            <p>
              Behind the bar, we keep things just as exciting. Discover a
              curated selection of Michigan craft beers, handcrafted cocktails,
              and a standout bourbon collection featuring rare, hard-to-find
              bottles you won&apos;t see anywhere else.
            </p>
            <p>
              What began as a cozy neighborhood bar in Birmingham, Michigan has
              grown into a Metro Detroit favorite with eight locations and
              counting, all carrying the same spirit: bold food, great drinks,
              and warm hospitality.
            </p>
            <p>
              Whether you&apos;re catching the game, meeting up with friends,
              enjoying happy hour, or just grabbing a bite, Sidecar is your
              go-to spot for good times and unforgettable flavor. We&apos;ll
              save you a seat.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
