"use client";

import { useState } from "react";

export default function CateringForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [phone, setPhone] = useState("");

  const formatPhone = (value: string) =>
    value
      .replace(/\D/g, "")
      .slice(0, 10)
      .replace(/(\d{3})(\d{0,3})(\d{0,4})/, (_, a, b, c) =>
        [a, b, c].filter(Boolean).join("-")
      );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    formData.set("phone", phone); // use formatted phone value

    try {
      const res = await fetch("https://formspree.io/f/your-form-id", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        e.currentTarget.reset();
        setPhone("");
      } else {
        throw new Error("Form submission failed");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-xl shadow max-w-3xl mx-auto space-y-6"
    >
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
            className="w-full border border-neutral-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block font-medium mb-1">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(formatPhone(e.target.value))}
            className="w-full border border-neutral-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div>
          <label htmlFor="eventDate" className="block font-medium mb-1">
            Pickup Date (Required)
          </label>
          <input
            required
            type="datetime-local"
            name="eventDate"
            id="eventDate"
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
          rows={5}
          className="w-full border border-neutral-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-red-700 text-white px-6 py-3 rounded-md font-medium hover:bg-red-800 transition disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send Inquiry"}
      </button>

      {status === "success" && (
        <p className="text-green-600 text-sm font-medium pt-2">
          Thanks! We&rsquo;ll be in touch shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-sm font-medium pt-2">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
