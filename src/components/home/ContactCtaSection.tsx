"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";
import Image from "next/image";

export default function ContactCtaSection() {
  const phoneNumber = "919995213345";
  const message = encodeURIComponent(
    "Hello! I am interested in your luxury wedding planning services."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden flex items-center justify-center min-h-[400px]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
          alt="Wedding details"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#111111]/80"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Ready To Plan Your Dream Wedding?
          </h2>
          <p className="font-poppins text-white/90 text-sm md:text-base max-w-2xl mx-auto mb-10">
            Let's create a celebration your family will remember forever.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5 w-full sm:w-auto">
            <a
              href="mailto:aureliaeventsbyaleena@gmail.com"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-[#BFA06C] text-white font-poppins font-semibold text-xs md:text-sm uppercase tracking-wider hover:bg-[#A68A5D] transition-colors duration-300 w-full sm:w-auto rounded-sm shadow-lg"
            >
              <Mail size={18} />
              Book Free Consultation
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 border border-white text-white font-poppins font-semibold text-xs md:text-sm uppercase tracking-wider hover:bg-white/10 transition-colors duration-300 w-full sm:w-auto rounded-sm"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
