"use client";

import { useState } from "react";
import PhoneInput from "./PhoneInput";

export default function CateringForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setError(null);

    // Honeypot: reject if filled
    const honey = (
      form.querySelector('input[name="extraField"]') as HTMLInputElement
    ).value;
    if (honey) return;

    // Build labeled FormData (remove honeypot & map data-label)
    const formData = new FormData(form);
    formData.delete("extraField");

    const labeledData = new FormData();
    for (const [key, value] of formData.entries()) {
      const el = form.querySelector(`[name="${key}"]`) as HTMLElement | null;
      const label = el?.getAttribute("data-label") || key;
      labeledData.append(label, value as string);
    }

    try {
      const res = await fetch("https://formspree.io/f/mpwllrvj", {
        method: "POST",
        body: labeledData,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
      form.reset();
      setSubmitted(true);
      document
        .querySelector("#catering-success")
        ?.scrollIntoView({ behavior: "smooth" });
    } catch (err) {
      console.error("Catering form submission failed:", err);
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-xl shadow max-w-3xl mx-auto space-y-6"
    >
      {/* Honeypot */}
      <input
        type="text"
        name="extraField"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            Name (Required)
          </label>
          <input
            required
            type="text"
            name="name"
            id="name"
            data-label="Name"
            className="w-full border border-neutral-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email (Required)
          </label>
          <input
            required
            type="email"
            name="email"
            id="email"
            data-label="Email"
            className="w-full border border-neutral-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block font-medium mb-1">
            Phone
          </label>
          <PhoneInput name="phone" dataLabel="Phone" />
        </div>
        <div>
          <label htmlFor="eventDate" className="block font-medium mb-1">
            Pickup Date (Required)
          </label>
          <input
            required
            type="date"
            name="eventDate"
            id="eventDate"
            data-label="Pickup Date"
            className="w-full border border-neutral-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div>
          <label htmlFor="groupSize" className="block font-medium mb-1">
            Group Size
          </label>
          <input
            type="text"
            name="groupSize"
            id="groupSize"
            data-label="Group Size"
            className="w-full border border-neutral-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div>
          <label htmlFor="location" className="block font-medium mb-1">
            Location (Required)
          </label>
          <select
            required
            name="location"
            id="location"
            data-label="Location"
            className="w-full border border-neutral-300 rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">Select a location</option>
            <option value="Birmingham">Birmingham</option>
            <option value="Brighton">Brighton</option>
            <option value="Farmington">Farmington</option>
            <option value="Ferndale">Ferndale</option>
            <option value="Grosse Pointe">Grosse Pointe</option>
            <option value="Lansing">Lansing</option>
            <option value="Plymouth">Plymouth</option>
            <option value="Sterling Heights">Sterling Heights</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block font-medium mb-1">
          Please tell us a little bit about your catering interest (Required)
        </label>
        <textarea
          required
          name="message"
          id="message"
          data-label="Message"
          rows={5}
          className="w-full border border-neutral-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      <button
        type="submit"
        className="bg-red-700 text-white px-6 py-3 rounded-md font-medium hover:bg-red-800 transition"
      >
        Send Inquiry
      </button>

      {error && (
        <p className="text-red-600 text-sm font-medium pt-2">{error}</p>
      )}

      {submitted && (
        <p
          id="catering-success"
          className="text-green-600 text-sm font-medium pt-2"
        >
          Thanks! We&rsquo;ll be in touch shortly.
        </p>
      )}
    </form>
  );
}
