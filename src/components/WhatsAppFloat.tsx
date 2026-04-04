"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919424612100?text=Hi%20KabadiBaba!%20I%20want%20to%20schedule%20a%20free%20scrap%20pickup.";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-india-green hover:bg-india-green-dark text-white font-bold text-sm px-4 py-3 rounded-full shadow-2xl hover:shadow-india-green/40 transition-all duration-200 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-india-green animate-ping opacity-25 pointer-events-none" />
      <MessageCircle size={22} className="flex-shrink-0" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </motion.a>
  );
}
