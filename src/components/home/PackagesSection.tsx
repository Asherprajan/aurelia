"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

const packages = [
  {
    name: "Classic Elegance",
    subtitle: "PACKAGE",
    features: [
      "Wedding Planning Consultation",
      "Venue Coordination",
      "Basic Stage Décor & Floral Setup",
      "Bridal Entry Coordinations",
      "Photography & Videography",
      "Guest Management",
      "Makeup Artist Coordination",
      "Wedding Day Timeline Management",
      "Standard Sound & Lighting",
      "Honeymoon Assistance"
    ],
    featured: false,
  },
  {
    name: "Royal Standard",
    subtitle: "PACKAGE",
    badge: "MOST POPULAR",
    features: [
      "Complete wedding planning & coordination",
      "Theme based decor",
      "Floral arrangements & entrance decor",
      "Bridal and groom entry concepts",
      "Premium photography & cinematography",
      "Pre-wedding shoot coordination",
      "Entertainment & DJ coordination",
      "Invitations & guest assistance",
      "Catering coordination",
      "Luxury car arrangements",
      "Honeymoon package (Premium domestic)"
    ],
    featured: true,
  },
  {
    name: "Premium Luxe",
    subtitle: "PACKAGE",
    features: [
      "End-to-end luxury wedding planning",
      "Personalised wedding theme & styling",
      "Premium floral and designer decor",
      "Destination wedding assistance",
      "Luxury bridal & groom stay concepts",
      "Cinematic wedding film",
      "Exclusive entertainment arrangements",
      "Couple choreography",
      "Premium catering",
      "Luxury transportation & accommodation",
      "Personalised wedding gifts & hampers",
      "Honeymoon Package (International trip)"
    ],
    featured: false,
  },
];

export default function PackagesSection() {
  return (
    <section id="packages" className="py-20 bg-[#FCFBF8] relative overflow-hidden">
      
      {/* Decorative floral element on the right edge of section */}
      <div className="absolute right-0 top-1/2 opacity-80 pointer-events-none hidden lg:block transform -translate-y-1/2 translate-x-1/4">
        <div className="relative w-[400px] h-[600px]">
          <Image 
            src="/botanical_trace.svg" 
            alt="" 
            fill 
            className="object-contain"
          />
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 flex items-center justify-center gap-4"
        >
          <div className="w-12 h-px bg-[#BFA06C]"></div>
          <h2 className="font-playfair text-[#111111] font-semibold uppercase tracking-[0.2em] text-sm md:text-base">
            Our Packages
          </h2>
          <div className="w-12 h-px bg-[#BFA06C]"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8 lg:gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col pt-10 pb-10 px-8 rounded-2xl w-full lg:w-[360px] bg-[#F9F7F2] ${
                pkg.featured
                  ? "border border-[#BFA06C] shadow-sm z-10"
                  : "border border-transparent"
              }`}
            >
              {/* Card Background Container (for clipping floral watermark without clipping the badge) */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                {/* Floral watermark for the first card */}
                {index === 0 && (
                  <div className="absolute bottom-0 right-0 opacity-80 transform translate-x-8 translate-y-8 w-32 h-48">
                    <Image 
                      src="/botanical_trace.svg" 
                      alt="" 
                      fill 
                      className="object-contain object-bottom right-0"
                    />
                  </div>
                )}
              </div>

              {pkg.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#BFA06C] text-white text-[10px] font-poppins font-semibold px-4 py-[6px] tracking-widest uppercase shadow-sm z-20">
                  {pkg.badge}
                </div>
              )}

              <div className="text-center mb-10 relative z-10">
                <h3 className="font-playfair text-lg text-[#111111] mb-1 uppercase tracking-wider">
                  {pkg.name}
                </h3>
                <span className="font-poppins text-[10px] text-[#111111]/50 tracking-[0.2em] uppercase block">
                  {pkg.subtitle}
                </span>
              </div>
                
              <div className="space-y-4 text-left flex-grow relative z-10 pl-2">
                {pkg.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={14} strokeWidth={2} className="text-[#BFA06C] flex-shrink-0" />
                    <span className="font-poppins text-[13px] text-[#111111]/80">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center relative z-10">
                <a href="#contact" className="inline-block border border-[#BFA06C] text-[#BFA06C] hover:bg-[#BFA06C] hover:text-white transition-colors px-6 py-3 font-poppins text-xs font-semibold tracking-widest uppercase rounded-sm">
                  Contact Us
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
