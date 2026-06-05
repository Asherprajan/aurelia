import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white py-16">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 lg:gap-12 pb-12">
        {/* Brand Col */}
        <div className="flex flex-col items-center md:items-start justify-center">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 md:w-20 md:h-20 overflow-hidden flex-shrink-0">
              <Image src="/logo.svg" alt="Aurelia Events Monogram" fill className="object-contain object-center" sizes="(max-width: 768px) 64px, 80px" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-white font-playfair font-medium text-xl md:text-2xl tracking-[0.2em] uppercase leading-tight">
                Aurelia
              </span>
              <span className="text-white/60 font-playfair font-medium text-xs md:text-sm tracking-[0.4em] uppercase leading-tight mb-1">
                Events
              </span>
              <span className="text-lg font-great-vibes text-[#BFA06C] leading-none">
                by Aleena
              </span>
            </div>
          </div>
        </div>

        {/* Contact Info Col */}
        <div className="flex flex-col items-center md:items-start justify-center gap-4 font-poppins text-xs md:text-sm text-white/80">
          <div className="flex items-center gap-3">
            <MapPin size={16} className="text-[#BFA06C]" />
            <span>Kerala, India</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={16} className="text-[#BFA06C]" />
            <a href="tel:+919895212345" className="hover:text-[#BFA06C] transition">
              +91 98952 12345
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={16} className="text-[#BFA06C]" />
            <a href="mailto:aureliaeventsbyaleena@gmail.com" className="hover:text-[#BFA06C] transition">
              aureliaeventsbyaleena@gmail.com
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2 font-poppins text-xs md:text-sm text-center md:text-left text-white/80 justify-center">
          <h4 className="text-white text-xs uppercase tracking-wider font-semibold mb-2">Quick Links</h4>
          <Link href="#home" className="hover:text-[#BFA06C] transition">Home</Link>
          <Link href="#about" className="hover:text-[#BFA06C] transition">About</Link>
          <Link href="#services" className="hover:text-[#BFA06C] transition">Services</Link>
          <Link href="#packages" className="hover:text-[#BFA06C] transition">Packages</Link>
          <Link href="#gallery" className="hover:text-[#BFA06C] transition">Gallery</Link>
          <Link href="#contact" className="hover:text-[#BFA06C] transition">Contact</Link>
        </div>

        {/* Follow Us */}
        <div className="flex flex-col gap-4 items-center md:items-start justify-center">
          <h4 className="text-white text-xs uppercase tracking-wider font-semibold font-poppins mb-1">Follow Us</h4>
          <div className="flex gap-4">
            <a href="https://instagram.com/aurelia_events_by_aleena" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:border-[#BFA06C] hover:text-[#BFA06C] transition text-white">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:border-[#BFA06C] hover:text-[#BFA06C] transition text-white">
              <FaFacebook size={18} />
            </a>
            <a href="https://wa.me/919895212345" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:border-[#BFA06C] hover:text-[#BFA06C] transition text-white">
              <FaWhatsapp size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-6 text-center font-poppins text-xs text-white/50 border-t border-white/10 pt-8">
        &copy; {new Date().getFullYear()} Aurelia Events by Aleena. All Rights Reserved.
      </div>
    </footer>
  );
}
