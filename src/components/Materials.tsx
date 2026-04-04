"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Newspaper, Recycle, Wrench, Monitor, Refrigerator, GlassWater } from "lucide-react";

const materials = [
  {
    icon: Newspaper,
    title: "Paper & Cardboard",
    examples: ["Newspaper", "Books & Magazines", "Cardboard boxes", "Office paper"],
    rateRange: "₹6 – ₹15 /kg",
    color: "bg-amber-50",
    iconColor: "text-amber-600",
    borderColor: "border-amber-100",
  },
  {
    icon: Recycle,
    title: "Plastic",
    examples: ["PET bottles", "Hard plastic", "Plastic containers", "PVC pipes"],
    rateRange: "₹6 – ₹12 /kg",
    color: "bg-blue-50",
    iconColor: "text-blue-500",
    borderColor: "border-blue-100",
  },
  {
    icon: Wrench,
    title: "Metal & Iron",
    examples: ["Iron & Steel", "Copper wire", "Aluminium", "Brass utensils"],
    rateRange: "₹28 – ₹450 /kg",
    color: "bg-gray-50",
    iconColor: "text-gray-600",
    borderColor: "border-gray-200",
  },
  {
    icon: Monitor,
    title: "E-Waste",
    examples: ["Old phones & laptops", "TVs & monitors", "Printers", "Wires & cables"],
    rateRange: "Varies by item",
    color: "bg-purple-50",
    iconColor: "text-purple-500",
    borderColor: "border-purple-100",
  },
  {
    icon: Refrigerator,
    title: "Old Appliances",
    examples: ["AC & Refrigerator", "Washing machine", "Fans & geysers", "Mixers & grinders"],
    rateRange: "₹300 – ₹1,500 /piece",
    color: "bg-india-green-50",
    iconColor: "text-india-green",
    borderColor: "border-green-100",
  },
  {
    icon: GlassWater,
    title: "Glass & Others",
    examples: ["Glass bottles", "Rubber tyres", "Steel utensils", "Old furniture"],
    rateRange: "₹2 – ₹35 /kg",
    color: "bg-saffron-50",
    iconColor: "text-saffron",
    borderColor: "border-saffron-100",
  },
];

export default function Materials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="materials" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-saffron font-semibold text-sm uppercase tracking-widest mb-2">
            40+ Recyclable Items
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900">
            What We Collect
          </h2>
          <p className="mt-3 text-gray-500 text-lg max-w-xl mx-auto">
            From old newspapers to broken appliances — if it's scrap, we take it.
            No minimum quantity required.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`${item.color} border ${item.borderColor} rounded-2xl p-6 hover:shadow-md transition-shadow group`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 bg-white rounded-xl shadow-sm ${item.iconColor} flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <item.icon size={22} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 text-base">{item.title}</h3>
                  <ul className="mt-2 space-y-1">
                    {item.examples.map((ex) => (
                      <li key={ex} className="text-xs text-gray-500 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={`mt-4 pt-3 border-t border-current/10 flex items-center justify-between`}>
                <span className="text-xs text-gray-400 font-medium">Indicative rate</span>
                <span className={`text-sm font-bold ${item.iconColor}`}>{item.rateRange}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-6">
          * Rates are indicative and may vary by location, quality, and current market prices.
        </p>
      </div>
    </section>
  );
}
