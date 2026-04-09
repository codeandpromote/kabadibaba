"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Zap, Scale, Banknote, Leaf, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified & Trained Agents",
    description:
      "Every agent is background-checked, uniformed, and trained to handle scrap professionally. You're always in safe hands.",
    color: "text-india-green",
    bg: "bg-india-green-50",
  },
  {
    icon: Zap,
    title: "Same-Day Pickup",
    description:
      "Book before noon and get a same-day pickup in most cities. Next-day guaranteed across all service areas.",
    color: "text-saffron",
    bg: "bg-saffron-50",
  },
  {
    icon: Scale,
    title: "Digital & Certified Weighing",
    description:
      "We use government-certified digital scales. You can watch the weighing process — no shortcuts, no tricks.",
    color: "text-india-navy",
    bg: "bg-blue-50",
  },
  {
    icon: Banknote,
    title: "Cash or Online Payment",
    description:
      "Get paid on the spot — choose cash, UPI (GPay, PhonePe, Paytm), or bank transfer. No waiting, no cheques.",
    color: "text-india-green",
    bg: "bg-india-green-50",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Recycling",
    description:
      "100% of collected scrap is sent to certified recycling partners. We help reduce landfill waste across central India.",
    color: "text-saffron",
    bg: "bg-saffron-50",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Customer Support",
    description:
      "Call or WhatsApp us 6 days a week. We're here to answer questions, resolve issues, and ensure you're happy.",
    color: "text-india-navy",
    bg: "bg-blue-50",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-20 bg-warm-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-saffron font-semibold text-sm uppercase tracking-widest mb-2">
            Why KabadiBaba?
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900">
            The Smarter Way to Sell Scrap
          </h2>
          <p className="mt-3 text-gray-500 text-lg max-w-xl mx-auto">
            We started in Bhopal with a mission to make scrap selling dignified, transparent,
            and rewarding for every household.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <div className={`inline-flex p-3 ${f.bg} rounded-xl ${f.color} mb-4`}>
                <f.icon size={22} />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
