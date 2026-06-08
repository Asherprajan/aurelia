"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Packages", href: "/#packages" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isLightBackground = pathname === "/plan-my-wedding";
  const textColor = isLightBackground ? "text-[#2B2B2B]" : "text-ivory";

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent py-4">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-4">
          <div className="relative w-16 h-16 md:w-20 md:h-20 overflow-hidden flex-shrink-0 -translate-y-5">
            <Image src="/logo.svg" alt="Aurelia Events Monogram" fill className="object-cover object-top" priority sizes="(max-width: 768px) 64px, 80px" />
          </div>
          <div className="flex flex-col items-center">
            <span className={`${textColor} font-playfair font-semibold text-xl md:text-2xl tracking-[0.15em] leading-none uppercase transition-colors`}>
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
              className={`text-sm font-poppins ${textColor} uppercase tracking-wider hover:text-primary-gold transition-colors`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/#contact"
            className="px-6 py-3 bg-primary-gold text-dark-text font-poppins font-semibold text-sm uppercase tracking-wider hover:bg-accent-gold transition-colors"
          >
            Book Consultation
          </a>
        </div>

      </div>
    </header>
  );
}
