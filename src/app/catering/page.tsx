import Image from "next/image";
import CateringForm from "@/components/CateringForm";

export const metadata = {
  title: "Catering — Sidecar Slider Bar",
  description:
    "Bring Sidecar to your next event. Download our catering menu and inquire about availability today.",
};

export default function CateringPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 md:h-96 w-full overflow-hidden">
        <Image
          src="/images/moto-sidecar-placeholder.jpg"
          alt="Sidecar Catering Hero"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-4">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Bring the Best to Your Event
            </h1>
            <p className="mt-4 text-lg md:text-xl text-neutral-200">
              Whether it&#39;s a backyard party or a corporate event,
              Sidecar&#39;s catering brings the flavor.
            </p>
          </div>
        </div>
      </section>

      {/* CTA + Download */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
          Download Our Catering Menu
        </h2>
        <p className="text-neutral-600 max-w-xl mx-auto mb-6">
          From shareables to sliders, explore our catering options and see how
          Sidecar can serve your crowd.
        </p>
        <a
          href="/pdfs/sidecar-catering-menu.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-700 text-white px-6 py-3 rounded-md font-medium hover:bg-red-800 transition"
        >
          Download Menu PDF
        </a>
      </section>

      {/* Menu Preview */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            What&#39;s on the Menu?
          </h2>
          <p className="text-neutral-600 mt-2 max-w-2xl mx-auto">
            A taste of what we offer — full menu available in the PDF above.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-2">Salad Trays</h3>
            <ul className="text-neutral-700 space-y-1">
              <li>House or Caesar Salad — $60 (serves 20)</li>
              <li>Chopped Antipasto — $80 (serves 20)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Appetizers & Sides</h3>
            <ul className="text-neutral-700 space-y-1">
              <li>Fried Brussels Sprouts — $80</li>
              <li>Tots (Garlic Parm or Cajun) — $60</li>
              <li>Sidewinders (Spicy Curly Fries) — $70</li>
              <li>Chips & Queso — $60</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Sliders</h3>
            <ul className="text-neutral-700 space-y-1">
              <li>Choose any 3 slider types — $120</li>
              <li>Serves 20 with 60 total sliders</li>
              <li>Includes buns, cheese, toppings & condiments</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Pizza</h3>
            <p className="italic text-sm text-neutral-500 mb-1">
              Available at Birmingham, Grosse Pointe, and Sterling Heights only
            </p>
            <ul className="text-neutral-700 space-y-1">
              <li>Detroit-style or Round 14” — $20 each</li>
              <li>Pick any 3 toppings (options listed in PDF)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-neutral-100 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="text-neutral-600 mt-2 max-w-2xl mx-auto">
            Send us a few details about your event and we&#39;ll be in touch to
            help plan a Sidecar experience they won&#39;t forget.
          </p>
        </div>
        <CateringForm />
      </section>
    </div>
  );
}
