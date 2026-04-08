"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Scrap Rates", href: "/rates" },
  { label: "Our Cities", href: "/cities" },
  { label: "About Us", href: "/about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On inner pages always show solid bg; on home transparent until scroll
  const solidBg = !isHome || scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solidBg ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      {/* Tricolor top bar */}
      <div className="h-1 tricolor-bar" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-9 h-9 flex-shrink-0">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="20" cy="20" r="20" fill="#fff8ee" />
                <path d="M20 8 L14 16 L17 16 C17 22 13 25 9 25 C12 30 18 32 23 29 L21 26 L26 26 L26 32 C30 29 32 24 30 19 L27 21 L24 15 C22 11 21 9 20 8Z" fill="#ff9933" />
                <path d="M28 12 C33 16 34 22 31 27 L28 25 L25 31 L31 31 C33 27 33 20 29 15Z" fill="#138808" opacity="0.8" />
                <circle cx="20" cy="20" r="3" fill="#1a237e" />
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className={`font-bold text-lg tracking-tight transition-colors ${solidBg ? "text-gray-900" : "text-gray-900"}`}>
                Kabadi<span className="text-saffron">Baba</span>
              </span>
              <span className="text-[10px] text-india-green font-medium tracking-wider uppercase -mt-0.5">
                Sell Scrap. Go Green.
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors border-b-2 pb-0.5 ${
                    active
                      ? "text-saffron border-saffron"
                      : `border-transparent hover:text-saffron hover:border-saffron/40 ${solidBg ? "text-gray-700" : "text-gray-800"}`
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919575824800"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-saffron ${
                solidBg ? "text-gray-700" : "text-gray-800"
              }`}
            >
              <Phone size={15} />
              +91 95758 24800
            </a>
            <Link
              href="/book-pickup"
              className="bg-saffron hover:bg-saffron-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Book Free Pickup
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-saffron"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium py-2 border-b border-gray-50 ${
                    active ? "text-saffron" : "text-gray-700 hover:text-saffron"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="tel:+919575824800"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-saffron py-1"
              onClick={() => setMenuOpen(false)}
            >
              <Phone size={15} />
              +91 95758 24800
            </a>
            <Link
              href="/book-pickup"
              className="bg-saffron text-white text-center font-semibold py-3 rounded-full mt-1"
              onClick={() => setMenuOpen(false)}
            >
              Book Free Pickup
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
