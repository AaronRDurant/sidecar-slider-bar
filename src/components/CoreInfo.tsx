import Image from "next/image";

export default function CoreInfo() {
  return (
    <section className="bg-neutral-100 text-neutral-800 px-4 py-20">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">More Than Just Sliders</h2>
          <p className="text-lg leading-relaxed">
            Whether you&apos;re catching up with friends, unwinding after work,
            or just grabbing a late-night bite, Sidecar Slider Bar delivers a
            chill neighborhood vibe every time. Local brews, good people, and
            real flavor — it&apos;s that simple.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/moto-sidecar-placeholder.jpg"
            alt="Interior of Sidecar Slider Bar"
            width={1200}
            height={800}
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
