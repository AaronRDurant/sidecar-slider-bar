"use client";

import { useState } from "react";
import PhoneInput from "./PhoneInput";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setError(null);

    // Honeypot
    const honey = (
      form.querySelector('input[name="extraField"]') as HTMLInputElement
    ).value;
    if (honey) return;

    // Build labeled FormData
    const formData = new FormData();
    const elements = Array.from(form.elements) as HTMLInputElement[];
    elements.forEach((el) => {
      if (!el.name || el.name === "extraField") return;
      if (el.value) {
        formData.append(el.dataset.label || el.name, el.value);
      }
    });

    try {
      const res = await fetch("https://formspree.io/f/xzzvvvzz", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
      form.reset();
      setSubmitted(true);
      document
        .querySelector("#contact-success")
        ?.scrollIntoView({ behavior: "smooth" });
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md space-y-6"
    >
      {/* Honeypot */}
      <input
        type="text"
        name="extraField"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-neutral-700">
            First Name<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            required
            data-label="First Name"
            className="w-full border border-neutral-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700">
            Last Name<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            required
            data-label="Last Name"
            className="w-full border border-neutral-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-700">
          Email Address<span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          data-label="Email"
          className="w-full border border-neutral-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-700">
          Phone Number
        </label>
        <PhoneInput name="phone" dataLabel="Phone" />
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-700">
          Message<span className="text-red-600">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          data-label="Message"
          className="w-full border border-neutral-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      <button
        type="submit"
        className="bg-red-700 text-white px-6 py-3 rounded-md font-medium hover:bg-red-800 transition"
      >
        Submit
      </button>

      {error && (
        <p className="text-red-600 text-sm font-medium text-center">{error}</p>
      )}

      {submitted && (
        <p
          id="contact-success"
          className="text-green-600 text-sm font-medium text-center"
        >
          Thanks for reaching out! We&rsquo;ll be in touch shortly.
        </p>
      )}
    </form>
  );
}
