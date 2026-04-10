import { Phone, Mail, Clock, MessageCircle } from "lucide-react";

const quickLinks = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Scrap Rates", href: "/rates" },
  { label: "About Us", href: "/about" },
  { label: "Book Free Pickup", href: "/book-pickup" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 flex-shrink-0">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="20" cy="20" r="20" fill="#1f2937" />
                  <path d="M20 8 L14 16 L17 16 C17 22 13 25 9 25 C12 30 18 32 23 29 L21 26 L26 26 L26 32 C30 29 32 24 30 19 L27 21 L24 15 C22 11 21 9 20 8Z" fill="#ff9933" />
                  <path d="M28 12 C33 16 34 22 31 27 L28 25 L25 31 L31 31 C33 27 33 20 29 15Z" fill="#138808" opacity="0.9" />
                  <circle cx="20" cy="20" r="3" fill="#1a237e" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-lg text-white">
                  Kabadi<span className="text-saffron">Baba</span>
                </div>
                <div className="text-xs text-gray-500 -mt-0.5">Nothing Is Impossible.</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Making sustainable waste management accessible to every household in
              Prayagraj, Uttar Pradesh since 2020.
            </p>
            <div className="space-y-2">
              <a
                href="https://wa.me/919575824800"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-india-green hover:text-india-green-light transition-colors text-sm"
              >
                <MessageCircle size={16} />
                +91 95758 24800
              </a>
              <a
                href="tel:+919575824800"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Phone size={16} />
                +91 95758 24800
              </a>
              <a
                href="mailto:kabadibaba.prayagraj@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Mail size={16} />
                kabadibaba.prayagraj@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-saffron transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Working Hours
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-saffron flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm text-white font-medium">Monday – Saturday</div>
                  <div className="text-xs text-gray-400">9:00 AM – 6:00 PM</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-gray-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm text-gray-500">Sunday</div>
                  <div className="text-xs text-gray-600">Closed (WhatsApp available)</div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-gray-900 rounded-xl p-4">
              <p className="text-xs text-gray-400 mb-3">Book a pickup right now:</p>
              <a
                href="https://wa.me/919575824800?text=Hi%20KabadiBaba!%20I%20want%20to%20schedule%20a%20pickup."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-india-green hover:bg-india-green-dark text-white text-sm font-semibold py-2.5 rounded-lg transition-colors"
              >
                WhatsApp Us Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <span>© {new Date().getFullYear()} KabadiBaba. Making India Clean, One Pickup at a Time. 🇮🇳</span>
          <div className="flex gap-4">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
