import Image from "next/image";
import EmploymentForm from "@/components/EmploymentForm";

export const metadata = {
  title: "Employment — Sidecar Slider Bar",
  description:
    "Apply to join the Sidecar team. We’re always looking for energetic, reliable team members.",
};

export default function EmploymentPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 md:h-96 w-full overflow-hidden">
        <Image
          src="/images/moto-sidecar-placeholder.jpg"
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
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Apply Now
          </h2>
          <p className="text-neutral-600 mt-2 max-w-2xl mx-auto">
            We’re always looking for energetic, reliable team members. Fill out
            the form below and we’ll be in touch if it’s a fit!
          </p>
        </div>
        <EmploymentForm />
      </section>
    </div>
  );
}
