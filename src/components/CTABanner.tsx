import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919424612100?text=Hi%20KabadiBaba!%20I%20want%20to%20schedule%20a%20free%20scrap%20pickup.";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export default function CTABanner({
  title = "Ready to Turn Your Scrap Into Cash?",
  subtitle = "Free pickup across 40+ cities in MP & UP. Instant cash payment. No minimum quantity.",
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-gray-950 py-16 sm:py-20">
      {/* Decorative gradient blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-saffron/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-india-green/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tricolor accent */}
        <div className="flex justify-center mb-6">
          <div className="flex gap-1.5">
            <span className="w-6 h-1.5 rounded-full bg-saffron" />
            <span className="w-6 h-1.5 rounded-full bg-white/60" />
            <span className="w-6 h-1.5 rounded-full bg-india-green" />
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
          {title}
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">{subtitle}</p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/book-pickup"
            className="flex items-center gap-2 bg-saffron hover:bg-saffron-dark text-white font-bold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Book Free Pickup
            <ArrowRight size={18} />
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-india-green hover:bg-india-green-dark text-white font-bold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <MessageCircle size={18} />
            WhatsApp Us Now
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-600">
          Mon – Sat &nbsp;·&nbsp; 9:00 AM – 6:00 PM &nbsp;·&nbsp; +91 94246 12100
        </p>
      </div>
    </section>
  );
}
