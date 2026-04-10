"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Info } from "lucide-react";

const rateCategories = [
  {
    category: "Paper",
    color: "border-amber-200 bg-amber-50",
    headingColor: "text-amber-700",
    items: [
      { name: "Newspaper" },
      { name: "Books & Copies" },
      { name: "Cardboard / Corrugated" },
      { name: "Mixed Paper" },
      { name: "Magazines" },
    ],
  },
  {
    category: "Plastic",
    color: "border-blue-200 bg-blue-50",
    headingColor: "text-blue-600",
    items: [
      { name: "PET Bottles (clear)" },
      { name: "Hard Plastic (rigid)" },
      { name: "Soft / Mixed Plastic" },
      { name: "PVC Pipes / Fittings" },
      { name: "Plastic Containers" },
    ],
  },
  {
    category: "Metal",
    color: "border-gray-300 bg-gray-50",
    headingColor: "text-gray-700",
    items: [
      { name: "Iron / Steel (heavy)" },
      { name: "Aluminium" },
      { name: "Copper" },
      { name: "Brass" },
      { name: "Steel Utensils" },
    ],
  },
  {
    category: "Appliances & E-Waste",
    color: "border-india-green/30 bg-india-green-50",
    headingColor: "text-india-green",
    items: [
      { name: "Old Air Conditioner" },
      { name: "Old Refrigerator" },
      { name: "Old Washing Machine" },
      { name: "Old TV / Monitor" },
      { name: "Laptop / Desktop CPU" },
    ],
  },
];

export default function Rates() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="rates" ref={ref} className="py-20 bg-warm-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-saffron font-semibold text-sm uppercase tracking-widest mb-2">
            Transparent Pricing
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Today&apos;s Scrap Rates
          </h2>
          <p className="mt-3 text-gray-500 text-lg max-w-xl mx-auto">
            We offer the best market rates in Prayagraj — no hidden deductions, transparent digital weighing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {rateCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`border ${cat.color} rounded-2xl overflow-hidden`}
            >
              <div className={`px-6 py-4 border-b border-current/10`}>
                <h3 className={`text-lg font-bold ${cat.headingColor}`}>{cat.category}</h3>
              </div>
              <div className="divide-y divide-gray-100/60">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-center px-6 py-3">
                    <span className="text-sm text-gray-700">{item.name}</span>
                    <span className="text-xs font-semibold text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm">
                      Varies by item
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 flex items-start gap-3 bg-saffron-50 border border-saffron-100 rounded-xl p-4"
        >
          <Info size={18} className="text-saffron flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-600">
            <strong>Note:</strong> Rates shown are approximate market prices for{" "}
            <strong>Prayagraj, Uttar Pradesh</strong> as of April 2025. Actual rates may vary
            based on material quality, quantity, and current market conditions. Call us for the
            latest rates before scheduling your pickup.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
