"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";

const serviceAreas = {
  mp: {
    label: "Madhya Pradesh",
    shortCode: "MP",
    color: "bg-saffron text-white",
    tagColor: "bg-saffron-50 text-saffron-dark border-saffron-100",
    cities: [
      "Bhopal", "Indore", "Jabalpur", "Gwalior", "Ujjain",
      "Sagar", "Rewa", "Satna", "Dewas", "Chhindwara",
      "Khandwa", "Bhind", "Morena", "Shivpuri", "Vidisha",
      "Burhanpur", "Damoh", "Mandsaur", "Neemuch", "Hoshangabad",
    ],
  },
  up: {
    label: "Uttar Pradesh",
    shortCode: "UP",
    color: "bg-india-green text-white",
    tagColor: "bg-india-green-50 text-india-green border-green-200",
    cities: [
      "Lucknow", "Kanpur", "Agra", "Varanasi", "Prayagraj",
      "Ghaziabad", "Meerut", "Mathura", "Aligarh", "Bareilly",
      "Moradabad", "Gorakhpur", "Jhansi", "Firozabad", "Muzaffarnagar",
      "Shahjahanpur", "Noida", "Faizabad", "Sitapur", "Sultanpur",
    ],
  },
};

export default function ServiceAreas() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cities" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-saffron font-semibold text-sm uppercase tracking-widest mb-2">
            Serving 40+ Cities
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900">
            We Pick Up From Your City
          </h2>
          <p className="mt-3 text-gray-500 text-lg max-w-xl mx-auto">
            Currently operating across Madhya Pradesh and Uttar Pradesh. Expanding soon!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.values(serviceAreas).map((state, si) => (
            <motion.div
              key={state.label}
              initial={{ opacity: 0, x: si === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: si * 0.15 }}
              className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
            >
              {/* State header */}
              <div className={`${state.color} px-6 py-4 flex items-center gap-3`}>
                <MapPin size={20} />
                <div>
                  <h3 className="font-bold text-lg">{state.label}</h3>
                  <p className="text-white/75 text-xs mt-0.5">{state.cities.length} cities covered</p>
                </div>
              </div>

              {/* Cities */}
              <div className="p-6 flex flex-wrap gap-2">
                {state.cities.map((city, i) => (
                  <motion.span
                    key={city}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: si * 0.15 + i * 0.025 }}
                    className={`text-xs font-medium px-3 py-1.5 rounded-full border ${state.tagColor}`}
                  >
                    {city}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Not in list note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-sm text-gray-500 mt-8"
        >
          Don&apos;t see your city?{" "}
          <a
            href="https://wa.me/919424612100?text=Hi%20KabadiBaba!%20I%20am%20from%20[my%20city].%20Do%20you%20offer%20pickup%20here?"
            target="_blank"
            rel="noopener noreferrer"
            className="text-india-green font-semibold hover:underline"
          >
            WhatsApp us
          </a>{" "}
          — we might still be able to help!
        </motion.p>
      </div>
    </section>
  );
}
