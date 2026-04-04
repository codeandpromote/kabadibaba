"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, MapPin, Recycle, IndianRupee } from "lucide-react";

const stats = [
  { icon: Users, value: "10,000+", label: "Happy Households", color: "text-saffron" },
  { icon: MapPin, value: "30+", label: "Cities Covered", color: "text-india-green" },
  { icon: IndianRupee, value: "₹50L+", label: "Paid to Customers", color: "text-saffron" },
  { icon: Recycle, value: "500+", label: "Tons Recycled", color: "text-india-green" },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white border-y border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className={`p-3 rounded-full bg-saffron-50 ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <div className={`text-3xl font-extrabold ${stat.color}`}>{stat.value}</div>
              <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
