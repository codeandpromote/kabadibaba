"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Star,
  Zap,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919575824800?text=Hi%20KabadiBaba!%20I%20want%20to%20schedule%20a%20scrap%20pickup.";

const scrapCards = [
  {
    emoji: "📰",
    label: "Newspaper",
    sub: "Paper & Books",
    rate: "₹13/kg",
    bg: "bg-amber-50",
    border: "border-amber-200",
    rateColor: "text-amber-600",
    delay: 0,
  },
  {
    emoji: "🔩",
    label: "Iron & Metal",
    sub: "Copper, Brass, Steel",
    rate: "₹28–430/kg",
    bg: "bg-gray-50",
    border: "border-gray-200",
    rateColor: "text-gray-600",
    delay: 0.15,
  },
  {
    emoji: "♻️",
    label: "Plastic",
    sub: "Bottles, Containers",
    rate: "₹6–12/kg",
    bg: "bg-blue-50",
    border: "border-blue-200",
    rateColor: "text-blue-500",
    delay: 0.3,
  },
  {
    emoji: "📺",
    label: "Old Appliances",
    sub: "AC, Fridge, TV",
    rate: "₹200–1,500/pc",
    bg: "bg-india-green-50",
    border: "border-green-200",
    rateColor: "text-india-green",
    delay: 0.45,
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-saffron-50 via-white to-india-green-50 pointer-events-none" />

      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-saffron/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-india-green/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ── Left: Text content ── */}
          <div className="max-w-xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-saffron-50 border border-saffron-100 text-saffron-dark rounded-full px-4 py-1.5 text-sm font-semibold mb-6"
            >
              <Star size={14} className="fill-saffron text-saffron" />
              Trusted by 5,000+ households in Prayagraj
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
              <span className="text-saffron">Into Cash & Online.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed"
            >
              Free doorstep pickup anywhere in{" "}
              <span className="font-semibold text-india-green">
                Prayagraj, Uttar Pradesh
              </span>
              . We weigh your scrap transparently and pay{" "}
              <span className="font-semibold">cash or online instantly</span>.
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
                {
                  icon: ShieldCheck,
                  color: "text-india-green",
                  text: "Verified & Trained Agents",
                },
                {
                  icon: Zap,
                  color: "text-saffron",
                  text: "Same-Day Pickup Available",
                },
                {
                  icon: Star,
                  color: "text-india-navy",
                  text: "Best Rates Guaranteed",
                },
              ].map(({ icon: Icon, color, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-sm text-gray-600 font-medium"
                >
                  <Icon size={17} className={color} />
                  {text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Floating scrap cards ── */}
          <div className="hidden lg:flex flex-col items-center justify-center gap-4 relative">
            {/* Central recycling icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="w-48 h-48 rounded-full bg-saffron/5 border-2 border-dashed border-saffron/20 flex items-center justify-center">
                <span className="text-6xl select-none">♻️</span>
              </div>
            </motion.div>

            {/* 2×2 grid of cards */}
            <div className="grid grid-cols-2 gap-5 relative z-10">
              {scrapCards.map((card) => (
                // Outer div: entry animation (fade + slide up)
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.3 + card.delay }}
                >
                  {/* Inner div: continuous float */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 3.5 + card.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: card.delay,
                    }}
                    className={`${card.bg} border ${card.border} rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow w-44`}
                  >
                    <div className="text-3xl mb-3">{card.emoji}</div>
                    <div className="font-bold text-gray-900 text-sm leading-snug">
                      {card.label}
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5 mb-3">
                      {card.sub}
                    </div>
                    <div
                      className={`text-base font-extrabold ${card.rateColor}`}
                    >
                      {card.rate}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* "Free Pickup" floating pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex items-center gap-2 bg-india-green text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg mt-2"
            >
              <span className="w-2 h-2 bg-white rounded-full animate-ping" />
              Free Doorstep Pickup — Prayagraj
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
      >
        <span className="text-xs font-medium tracking-wider uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-300 to-transparent" />
      </motion.div>
    </section>
  );
}
