"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is the pickup service really free?",
    a: "Yes, absolutely! We never charge for coming to your home or office. Our service is 100% free — you earn money from us, not the other way around.",
  },
  {
    q: "How quickly will your agent arrive after I book?",
    a: "In most cities, we offer same-day pickup if you book before 12 noon. Otherwise, we guarantee next-day pickup. We'll call you to confirm the exact time slot.",
  },
  {
    q: "Is there a minimum quantity of scrap required?",
    a: "No minimum quantity at all. Whether you have a single bag of newspapers or a truckload of metal scrap, we'll come to you.",
  },
  {
    q: "How do you pay me — cash or UPI?",
    a: "We pay you instantly on the spot in cash. We can also pay via UPI (Google Pay, PhonePe, Paytm) if you prefer a digital payment.",
  },
  {
    q: "How do I know I'm getting the right weight and fair rates?",
    a: "We use government-certified digital weighing scales. You're welcome to watch the entire weighing process. We show you the weight on the screen and calculate the amount in front of you — completely transparent.",
  },
  {
    q: "Do you pick up e-waste and old appliances?",
    a: "Yes! We take old TVs, refrigerators, ACs, washing machines, laptops, mobile phones, wires, and all types of electronic waste. Our rates for appliances are per piece.",
  },
  {
    q: "What areas in Madhya Pradesh and Uttar Pradesh do you cover?",
    a: "We currently cover 40+ cities including Bhopal, Indore, Jabalpur, Gwalior, Lucknow, Kanpur, Agra, Varanasi, Prayagraj, and many more. Check our full city list above or WhatsApp us to confirm your area.",
  },
  {
    q: "Are your agents verified and safe to let into my home?",
    a: "Yes. Every KabadiBaba agent is police-verified, trained, and wears a branded uniform. We also share their name and photo before arrival. Your safety is our top priority.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-saffron font-semibold text-sm uppercase tracking-widest mb-2">
            Got Questions?
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`border rounded-2xl overflow-hidden transition-colors ${
                open === i ? "border-saffron-100 bg-saffron-50" : "border-gray-100 bg-white hover:border-gray-200"
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-gray-900 text-sm pr-4">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-saffron transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-saffron-100 pt-4">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10 text-sm text-gray-500"
        >
          Still have questions?{" "}
          <a
            href="https://wa.me/919424612100"
            target="_blank"
            rel="noopener noreferrer"
            className="text-india-green font-semibold hover:underline"
          >
            WhatsApp us
          </a>{" "}
          or{" "}
          <a href="tel:+919424612100" className="text-saffron font-semibold hover:underline">
            call +91 94246 12100
          </a>
        </motion.p>
      </div>
    </section>
  );
}
