"use client";

import { motion } from "framer-motion";
import {
  UserRound,
  Building,
  Flower2,
  Tent,
  Camera,
  BellRing,
  Brush,
  ClipboardList,
  Volume2,
  Plane,
} from "lucide-react";

const services = [
  { icon: UserRound, title: "Wedding Planning\nConsultation", desc: "Personalized guidance for\nyour dream wedding." },
  { icon: Building, title: "Venue\nCoordination", desc: "Finding and managing\nthe perfect venue." },
  { icon: Flower2, title: "Stage Décor &\nFloral Setup", desc: "Elegant décor tailored\nto your style." },
  { icon: Tent, title: "Bridal Entry\nCoordination", desc: "Memorable grand\nentrances." },
  { icon: Camera, title: "Photography &\nVideography", desc: "Capturing every\nprecious moment." },
  { icon: BellRing, title: "Guest\nManagement", desc: "Smooth guest handling\nand hospitality." },
  { icon: Brush, title: "Makeup Artist\nCoordination", desc: "Connecting you with\ntrusted professionals." },
  { icon: ClipboardList, title: "Wedding Day\nTimeline Management", desc: "Flawless event\nexecution." },
  { icon: Volume2, title: "Sound &\nLighting", desc: "Professional event\natmosphere." },
  { icon: Plane, title: "Honeymoon\nAssistance", desc: "Helping couples begin\ntheir journey stress-free." },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-[#FCFBF8] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 xl:px-12 relative z-10">
        
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
            Our Services
          </h2>
          <div className="w-12 h-px bg-[#BFA06C]"></div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 border-t border-l border-[#BFA06C]/20 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex flex-col items-center text-center p-6 sm:p-8 border-b border-r border-[#BFA06C]/20 bg-[#FCFBF8] hover:bg-[#FDFCF9] transition-colors duration-300"
            >
              <div className="text-[#BFA06C] mb-5">
                <service.icon size={36} strokeWidth={1} />
              </div>
              <h3 className="font-playfair font-semibold text-[13px] sm:text-[15px] text-[#111111] mb-2 leading-tight whitespace-pre-line">
                {service.title}
              </h3>
              <p className="font-poppins text-[11px] sm:text-[13px] text-[#111111]/70 leading-relaxed whitespace-pre-line">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
