import Image from "next/image";

export default function HappyHour() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <Image
              src="/images/Sidecar-Slider-Bar-tap-handles.jpg"
              alt="Beer and cocktail taps lined up at Sidecar Slider Bar"
              width={1000}
              height={667}
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Daily Happy Hour
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              From 3–6 pm, every day of the week. Enjoy $6 apps and classic
              cocktails, $5 beers and wine, and $4 canned cocktails. Come for
              the sliders, stay for the drinks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
