"use client";

import { motion } from "framer-motion";
import { MessageSquareHeart, CalendarHeart, Sparkles, Wand2, GlassWater } from "lucide-react";

const processes = [
  { step: "1", icon: MessageSquareHeart, title: "Consultation", desc: "Discuss your vision and budget." },
  { step: "2", icon: CalendarHeart, title: "Planning", desc: "Create timelines and vendor strategy." },
  { step: "3", icon: Sparkles, title: "Design", desc: "Finalize décor and experiences." },
  { step: "4", icon: Wand2, title: "Execution", desc: "Flawless wedding day management." },
  { step: "5", icon: GlassWater, title: "Celebration", desc: "Enjoy your day while we handle everything." },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-[#FCFBF8] overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 flex items-center justify-center gap-4"
        >
          <div className="w-12 h-px bg-[#BFA06C]"></div>
          <h2 className="font-playfair text-[#111111] font-semibold uppercase tracking-[0.2em] text-sm md:text-base">
            How We Work
          </h2>
          <div className="w-12 h-px bg-[#BFA06C]"></div>
        </motion.div>

        <div className="relative flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4 max-w-5xl mx-auto">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-7 left-[10%] right-[10%] border-t border-dashed border-[#BFA06C] opacity-50 z-0"></div>

          {processes.map((process, index) => (
            <motion.div
              key={process.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative z-10 flex flex-col items-center text-center flex-1"
            >
              <div className="w-14 h-14 rounded-full bg-[#BFA06C] flex items-center justify-center mb-6 relative z-10 shadow-sm">
                <process.icon size={26} strokeWidth={1.5} className="text-white" />
              </div>
              
              <div className="font-playfair font-semibold text-lg text-[#111111] mb-1">
                {process.step}
              </div>
              <h3 className="font-playfair font-semibold text-[15px] text-[#111111] mb-2">
                {process.title}
              </h3>
              <p className="font-poppins text-[11px] text-[#111111]/70 leading-relaxed max-w-[140px]">
                {process.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
