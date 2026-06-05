"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Packages", href: "#packages" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="absolute top-0 left-0 right-0 z-50 bg-transparent py-4"
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-4">
          <div className="relative w-16 h-16 md:w-20 md:h-20 overflow-hidden flex-shrink-0 -translate-y-5">
            <Image src="/logo.svg" alt="Aurelia Events Monogram" fill className="object-cover object-top" priority sizes="(max-width: 768px) 64px, 80px" />
          </div>
          <div className="flex flex-col items-center">
            <span className="text-ivory font-playfair font-semibold text-xl md:text-2xl tracking-[0.15em] leading-none uppercase">
              Aurelia Events
            </span>
            <div className="flex items-center gap-3 mt-2 w-full px-2">
              <div className="flex-grow border-t border-primary-gold"></div>
              <span className="text-xl md:text-2xl font-great-vibes text-primary-gold leading-none pb-1">
                by Aleena
              </span>
              <div className="flex-grow border-t border-primary-gold"></div>
            </div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-poppins text-ivory uppercase tracking-wider hover:text-primary-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#contact"
            className="px-6 py-3 bg-primary-gold text-dark-text font-poppins font-semibold text-sm uppercase tracking-wider hover:bg-accent-gold transition-colors"
          >
            Book Consultation
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-primary-gold"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-dark-text/95 backdrop-blur-md shadow-lg"
          >
            <div className="flex flex-col items-center py-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-poppins text-ivory uppercase tracking-wider hover:text-primary-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 px-8 py-4 bg-primary-gold text-dark-text font-poppins font-semibold text-sm uppercase tracking-wider hover:bg-accent-gold transition-colors"
              >
                Book Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
