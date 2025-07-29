"use client";

import { StarIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "The sliders were insane. Crispy, juicy, totally unique — like a gourmet food truck parked inside a bar.",
  },
  {
    text: "We came for happy hour and stayed all night. Killer drinks, even better energy. The staff made us feel like regulars.",
  },
  {
    text: "Best bourbon selection I've seen at a casual spot. They had pours I usually only find in downtown speakeasies.",
  },
  {
    text: "Sidecar is our go-to after work. Apps come out fast, the drinks are strong, and there's always a chill vibe.",
  },
  {
    text: "Had a surprise birthday here. They handled everything — food, drinks, space — flawlessly. Total pros.",
  },
  {
    text: "Somehow it's a perfect date night and a great place to watch the game. Sidecar hits both ends of the spectrum.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
          What People Are Saying
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-800 rounded-2xl p-6 flex flex-col shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
            >
              <div className="flex justify-center mb-3">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                      aria-hidden="true"
                    />
                  ))}
              </div>
              <p className="text-white/90 text-base leading-relaxed text-center">
                “{testimonial.text}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
