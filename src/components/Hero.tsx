"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle, ShieldCheck, Star, Zap } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919424612100?text=Hi%20KabadiBaba!%20I%20want%20to%20schedule%20a%20scrap%20pickup.";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-saffron-50 via-white to-india-green-50 pointer-events-none" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-saffron/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-india-green/8 rounded-full blur-3xl pointer-events-none" />

      {/* Ashoka Chakra watermark */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none select-none hidden lg:block">
        <svg viewBox="0 0 200 200" className="w-96 h-96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="90" stroke="#1a237e" strokeWidth="8" />
          <circle cx="100" cy="100" r="12" stroke="#1a237e" strokeWidth="6" />
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i * 15 * Math.PI) / 180;
            const x1 = 100 + 12 * Math.cos(angle);
            const y1 = 100 + 12 * Math.sin(angle);
            const x2 = 100 + 88 * Math.cos(angle);
            const y2 = 100 + 88 * Math.sin(angle);
            return (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1a237e" strokeWidth="3" />
            );
          })}
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-saffron-50 border border-saffron-100 text-saffron-dark rounded-full px-4 py-1.5 text-sm font-semibold mb-6"
          >
            <Star size={14} className="fill-saffron text-saffron" />
            Trusted by 10,000+ households across MP & UP
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight"
          >
            Turn Your Scrap
            <br />
            <span className="text-saffron">Into Cash.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl"
          >
            Free doorstep pickup anywhere in{" "}
            <span className="font-semibold text-india-green">Madhya Pradesh</span> &{" "}
            <span className="font-semibold text-saffron">Uttar Pradesh</span>. We
            weigh your scrap transparently and pay <span className="font-semibold">cash instantly</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="mt-9 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/book-pickup"
              className="flex items-center justify-center gap-2 bg-saffron hover:bg-saffron-dark text-white font-bold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Schedule Free Pickup
              <ArrowRight size={18} />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-india-green hover:bg-india-green-dark text-white font-bold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-5"
          >
            {[
              { icon: ShieldCheck, color: "text-india-green", text: "Verified & Trained Agents" },
              { icon: Zap, color: "text-saffron", text: "Same-Day Pickup Available" },
              { icon: Star, color: "text-india-navy", text: "Best Rates Guaranteed" },
            ].map(({ icon: Icon, color, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                <Icon size={17} className={color} />
                {text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
      >
        <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-300 to-transparent" />
      </motion.div>
    </section>
  );
}
