"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md space-y-6"
    >
      {submitted ? (
        <p className="text-green-600 text-center font-medium">
          Thanks for reaching out! We&apos;ll be in touch shortly.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700">
                First Name<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                required
                className="mt-1 block w-full border border-neutral-300 rounded-md px-4 py-2 focus:ring-red-700 focus:border-red-700"
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
                className="mt-1 block w-full border border-neutral-300 rounded-md px-4 py-2 focus:ring-red-700 focus:border-red-700"
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
              className="mt-1 block w-full border border-neutral-300 rounded-md px-4 py-2 focus:ring-red-700 focus:border-red-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              className="mt-1 block w-full border border-neutral-300 rounded-md px-4 py-2 focus:ring-red-700 focus:border-red-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700">
              Message<span className="text-red-600">*</span>
            </label>
            <textarea
              name="message"
              required
              rows={5}
              className="mt-1 block w-full border border-neutral-300 rounded-md px-4 py-2 focus:ring-red-700 focus:border-red-700"
            />
          </div>

          <button
            type="submit"
            className="bg-red-700 text-white px-6 py-3 rounded-md font-medium hover:bg-red-800 transition"
          >
            Submit
          </button>
        </>
      )}
    </form>
  );
}
