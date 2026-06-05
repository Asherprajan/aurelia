"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const phoneNumber = "916282211630";
  const message = encodeURIComponent(
    "Hello! I am interested in your luxury wedding planning services."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Wedding"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Left-to-right gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/90 via-[#111111]/50 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Decorative floral elements on left and right corners */}
      <div className="absolute bottom-0 left-0 opacity-60 pointer-events-none z-10 transform -translate-x-1/4 translate-y-1/4">
        <div className="relative w-[300px] h-[400px]">
          <Image 
            src="/botanical_trace.svg" 
            alt="" 
            fill 
            className="object-contain object-bottom left-0"
          />
        </div>
      </div>
      
      <div className="absolute bottom-0 right-0 opacity-60 pointer-events-none z-10 transform translate-x-1/4 translate-y-1/4">
        <div className="relative w-[300px] h-[400px]">
          <Image 
            src="/botanical_trace.svg" 
            alt="" 
            fill 
            className="object-contain object-bottom right-0 scale-x-[-1]"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 md:pl-24 text-left flex flex-col items-start w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="font-great-vibes text-3xl md:text-4xl lg:text-5xl text-[#BFA06C] mb-6 block drop-shadow-md">
            From the first "yes" to "forever"
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="font-playfair font-medium text-4xl md:text-5xl lg:text-[4rem] text-white max-w-3xl leading-[1.1] mb-8 drop-shadow-lg">
            Turning Your Dream <br />Wedding Into <br />Timeless Memories
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="font-poppins text-white/90 text-sm md:text-base lg:text-lg max-w-2xl mb-12 leading-relaxed drop-shadow-md">
            From venue selection to the final farewell, Aurelia Events by Aleena manages every detail so you can celebrate every moment stress-free.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
        >
          <a
            href="#contact"
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
        </motion.div>
      </div>
    </section>
  );
}
