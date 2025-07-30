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
              At Sidecar Slider Bar, we serve crave-worthy sliders, shareable
              apps, and a full bar lineup in a welcoming, laid-back atmosphere.
            </p>
            <p>
              Our menu includes classic beef sliders, creative chef-inspired
              options, gourmet hot dogs, loaded tots, salads, and more.
              There&apos;s truly something for everyone.
            </p>
            <p>
              Behind the bar, you&apos;ll find a curated mix of Michigan craft
              beers, signature cocktails, wine, and one of the most impressive
              bourbon selections in the area — featuring rare bottles you
              won&apos;t find anywhere else.
            </p>
            <p>
              What started as a small bar in Birmingham, Michigan, has grown
              into a local favorite with{" "}
              <strong>eight locations across Metro Detroit</strong>. Each one
              brings the same bold flavors, welcoming service, and neighborhood
              vibe that made us who we are.
            </p>
            <p>
              Whether you&apos;re grabbing lunch, catching the game, celebrating
              with friends, or winding down at happy hour, we&apos;re here to
              make it memorable.
            </p>
            <p>See you at Sidecar Slider Bar soon!</p>
          </div>
        </div>
      </section>
    </main>
  );
}
