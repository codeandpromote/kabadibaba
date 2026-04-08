"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, MessageCircle } from "lucide-react";

const areas = [
  "Civil Lines",
  "George Town",
  "Allahpur",
  "Naini",
  "Phaphamau",
  "Jhunsi",
  "Bamrauli",
  "Kareli",
  "Mumfordganj",
  "Daraganj",
  "Rambagh",
  "Atala",
  "Kydganj",
  "Tagore Town",
  "Shivkuti",
  "Baghambari",
  "Lukerganj",
  "Colonelganj",
  "Mehdauri",
  "Mirpur",
  "Muthiganj",
  "Zero Road",
  "Stanley Road",
  "Subedarganj",
  "Chheoki",
];

export default function ServiceAreas() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cities" ref={ref} className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-saffron font-semibold text-sm uppercase tracking-widest mb-2">
            Currently Serving
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Prayagraj, Uttar Pradesh
          </h2>
          <p className="mt-3 text-gray-500 text-lg max-w-xl mx-auto">
            We cover all major localities and neighbourhoods across Prayagraj.
            More cities coming soon!
          </p>
        </motion.div>

        {/* City header card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-india-green text-white rounded-2xl px-6 py-5 flex items-center gap-4 mb-6 shadow-md"
        >
          <MapPin size={28} className="flex-shrink-0" />
          <div>
            <h3 className="font-bold text-lg">Prayagraj</h3>
            <p className="text-white/75 text-sm">Uttar Pradesh — {areas.length}+ localities covered</p>
          </div>
        </motion.div>

        {/* Localities grid */}
        <div className="flex flex-wrap gap-2 mb-10">
          {areas.map((area, i) => (
            <motion.span
              key={area}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.15 + i * 0.025 }}
              className="text-sm font-medium px-4 py-1.5 rounded-full border bg-india-green-50 text-india-green border-green-200"
            >
              {area}
            </motion.span>
          ))}
        </div>

        {/* Not in list */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-saffron-50 border border-saffron-100 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <div className="flex-1">
            <p className="font-semibold text-gray-900 mb-1">Don&apos;t see your locality?</p>
            <p className="text-sm text-gray-500">
              We may still be able to pick up from your area. Just call or WhatsApp us to confirm!
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href="https://wa.me/919575824800?text=Hi%20KabadiBaba!%20I%20am%20from%20Prayagraj.%20Can%20you%20pick%20up%20from%20my%20area?"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-india-green text-white text-sm font-semibold px-4 py-2.5 rounded-full hover:bg-india-green-dark transition-colors"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
            <a
              href="tel:+919575824800"
              className="flex items-center gap-2 bg-white border border-saffron text-saffron text-sm font-semibold px-4 py-2.5 rounded-full hover:bg-saffron-50 transition-colors"
            >
              <Phone size={15} />
              Call Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
