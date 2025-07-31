import Image from "next/image";
import EmploymentForm from "@/components/EmploymentForm";

export const metadata = {
  title: "Employment — Sidecar Slider Bar",
  description:
    "Apply to join the Sidecar team. We're always looking for energetic, reliable team members.",
};

export default function EmploymentPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 md:h-96 w-full overflow-hidden">
        <Image
          src="/images/Sidecar-Slider-Bar-menu-items.jpg"
          alt="Join the Sidecar Team"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-4">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Join the Sidecar Team
            </h1>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="bg-neutral-100 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Apply Now
          </h2>
          <p className="text-neutral-600 mt-2 max-w-xl mx-auto">
            Sidecar Slider Bar is growing fast — and we&apos;re building a team
            just as bold as our flavors. Ready to join us?
          </p>
        </div>
        <EmploymentForm />
      </section>
    </div>
  );
}
