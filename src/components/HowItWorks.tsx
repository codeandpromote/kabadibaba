"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { CalendarCheck, Truck, BadgeIndianRupee } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: CalendarCheck,
    title: "Book a Pickup",
    description:
      "Call us, WhatsApp, or fill out the form below. Tell us what scrap you have and share your location.",
    color: "bg-saffron-50",
    iconColor: "text-saffron",
    borderColor: "border-saffron-100",
  },
  {
    number: "02",
    icon: Truck,
    title: "We Come to You",
    description:
      "Our trained and verified agent arrives at your doorstep — same day or next day, as per your schedule.",
    color: "bg-india-green-50",
    iconColor: "text-india-green",
    borderColor: "border-green-100",
  },
  {
    number: "03",
    icon: BadgeIndianRupee,
    title: "Weigh & Get Paid",
    description:
      "We weigh your scrap using certified digital scales and pay you cash or online (UPI/GPay/PhonePe) on the spot. No haggling, no waiting.",
    color: "bg-saffron-50",
    iconColor: "text-saffron-dark",
    borderColor: "border-saffron-100",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" ref={ref} className="py-20 bg-warm-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-saffron font-semibold text-sm uppercase tracking-widest mb-2">
            Simple & Hassle-Free
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900">
            How KabadiBaba Works
          </h2>
          <p className="mt-3 text-gray-500 text-lg max-w-xl mx-auto">
            Selling your scrap takes just 3 easy steps. No app needed, no minimum quantity.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-0.5 bg-gradient-to-r from-saffron via-india-green to-saffron-dark" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative ${step.color} border ${step.borderColor} rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow`}
            >
              {/* Step number */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white border-2 border-gray-100 text-gray-400 text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
                {step.number}
              </div>

              {/* Icon */}
              <div className={`mt-2 p-4 bg-white rounded-full shadow-sm ${step.iconColor} mb-5`}>
                <step.icon size={28} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/book-pickup"
            className="inline-flex items-center gap-2 bg-saffron hover:bg-saffron-dark text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Book Your Free Pickup Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
