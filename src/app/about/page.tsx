"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-neutral-100 text-neutral-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/images/moto-sidecar-placeholder.jpg"
          alt="Interior of Sidecar Slider Bar"
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
            src="/images/moto-sidecar-placeholder.jpg"
            alt="Sidecar Slider Bar Sign"
            width={800}
            height={600}
            className="rounded-xl shadow-lg object-cover w-full h-auto"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="space-y-5 text-lg leading-relaxed">
            <p>
              At Sidecar Slider Bar, we pride ourselves on serving up delicious
              sliders and a wide array of craft beverages in a relaxed and
              casual atmosphere.
            </p>
            <p>
              Our menu features a variety of mouth-watering sliders, including
              classic beef, pulled pork, chicken, fish and vegetarian options.
              We also offer a variety of gourmet hot dogs, shareable sides, and
              salads.
            </p>
            <p>
              Our bar offers an extensive selection of local and regional craft
              beers, interesting wines, cocktails, and non-alcoholic beverages.
              We pride ourselves on our large selection of bourbons, including
              rare and highly-sought after bottles.
            </p>
            <p>
              The team at Sidecar Slider Bar is committed to providing
              exceptional service and a memorable dining experience for all our
              guests. We have something for everyone, whether you&apos;re
              stopping in for a quick lunch, a happy hour drink, or a fun night
              out with friends.
            </p>
            <p>
              Sidecar Slider Bar started in downtown Birmingham, Michigan, as a
              small restaurant &amp; bar that was a &quot;sidecar&quot; to a
              bigger venue. The B-ham spot quickly grew popular with local
              diners and moved to a larger space, while Sidecar also grew to new
              locations in southeast Michigan. With six locations (and more on
              the way!) we hope to see you at a Sidecar Slider Bar near you
              soon.
            </p>
            <p>Cheers!</p>
          </div>
        </div>
      </section>
    </main>
  );
}
