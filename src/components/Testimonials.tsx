"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Patel",
    city: "Bhopal, MP",
    initials: "RP",
    rating: 5,
    text: "Got ₹1,400 for my old newspapers, iron scrap, and broken fans — all in one pickup! The agent was on time, weighed everything transparently, and paid cash right there. Never knew selling scrap could be this easy.",
    avatarBg: "bg-saffron text-white",
  },
  {
    name: "Sunita Agarwal",
    city: "Lucknow, UP",
    initials: "SA",
    rating: 5,
    text: "Very professional service. I had an old AC and refrigerator lying unused for 2 years. WhatsApp booking took 2 minutes, they came next morning, and I got paid ₹1,900 on the spot. Highly recommend to everyone!",
    avatarBg: "bg-india-green text-white",
  },
  {
    name: "Mohd. Arshad",
    city: "Indore, MP",
    initials: "MA",
    rating: 5,
    text: "Best kabadi rates I have found in Indore. Booked via WhatsApp at 9 AM, team arrived by noon. The digital weighing gave me full confidence there was no cheating. Will definitely call again!",
    avatarBg: "bg-india-navy text-white",
  },
  {
    name: "Priya Mishra",
    city: "Kanpur, UP",
    initials: "PM",
    rating: 5,
    text: "I was skeptical at first but the experience was fantastic. They took old newspapers, plastic bottles, and a broken laptop. The agent explained the rates for each item separately. Very honest and professional team.",
    avatarBg: "bg-saffron text-white",
  },
  {
    name: "Suresh Kumar",
    city: "Gwalior, MP",
    initials: "SK",
    rating: 5,
    text: "I run a small shop and we had months of cardboard and plastic piling up. KabadiBaba sent a vehicle, cleared everything in one trip, and paid me UPI instantly. Saved me the trip to the kabadi market!",
    avatarBg: "bg-india-green text-white",
  },
  {
    name: "Anita Sharma",
    city: "Agra, UP",
    initials: "AS",
    rating: 5,
    text: "Clean, courteous, and fair. The agent wore a uniform and carried a proper digital scale. My children watched the whole weighing process — great experience in transparency. Will recommend to all my neighbours.",
    avatarBg: "bg-india-navy text-white",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-saffron font-semibold text-sm uppercase tracking-widest mb-2">
            Customer Stories
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-1 mt-3">
            {Array(5).fill(0).map((_, i) => (
              <Star key={i} size={20} className="fill-saffron text-saffron" />
            ))}
            <span className="text-gray-500 text-sm ml-2">4.9/5 from 1,200+ reviews</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <Quote size={32} className="absolute top-4 right-4 text-saffron-100" />
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-11 h-11 rounded-full ${t.avatarBg} flex items-center justify-center font-bold text-sm flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.city}</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array(t.rating).fill(0).map((_, j) => (
                    <Star key={j} size={13} className="fill-saffron text-saffron" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
