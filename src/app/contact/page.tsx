import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import locations from "@/data/locations";

export const metadata = {
  title: "Contact — Sidecar Slider Bar",
  description:
    "Reach out to Sidecar Slider Bar for questions, feedback, or catering inquiries.",
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 md:h-96 w-full overflow-hidden">
        <Image
          src="/images/moto-sidecar-placeholder.jpg"
          alt="Sidecar Contact Hero"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-4">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              We Would Love to Hear from You
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-neutral-100 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Contact Us
          </h2>
          <p className="text-neutral-600 mt-2 max-w-2xl mx-auto">
            Have a question, request, or just want to say hello? Drop us a line
            and we&apos;ll get back to you as soon as we can.
          </p>
        </div>
        <ContactForm />
      </section>

      {/* Location Contact Info */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Call a Location Directly
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {Object.entries(locations).map(([slug, location]) => (
            <li
              key={slug}
              className="bg-white rounded shadow p-6 text-center border border-neutral-200"
            >
              <h3 className="text-lg font-semibold mb-1">{location.name}</h3>
              <p className="text-neutral-700">
                <a
                  href={`tel:${location.phone.replace(/\D/g, "")}`}
                  className="underline hover:text-red-600"
                >
                  {location.phone}
                </a>
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
