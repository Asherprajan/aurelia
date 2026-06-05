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

const mobileConfig = [
  // 1: Left -> 2: Right
  { pos: 'left', path: "M 0 0 C 0 90, 300 60, 300 150" }, 
  // 2: Right -> 3: Left
  { pos: 'right', path: "M 300 0 C 300 90, 0 60, 0 150" }, 
  // 3: Left -> 4: Right
  { pos: 'left', path: "M 0 0 C 0 90, 300 60, 300 150" }, 
  // 4: Right -> 5: Left
  { pos: 'right', path: "M 300 0 C 300 90, 0 60, 0 150" }, 
  // 5: Left
  { pos: 'left', path: null }, 
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

        <div className="relative max-w-5xl mx-auto">
          
          {/* Desktop Layout: Horizontal Timeline */}
          <div className="hidden md:flex relative justify-between items-start gap-4">
            {/* Connector Line */}
            <div className="absolute top-7 left-[10%] right-[10%] border-t border-dashed border-[#BFA06C] opacity-50 z-0"></div>

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
                <p className="font-poppins text-[11px] text-[#111111]/70 leading-relaxed">
                  {process.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mobile Layout: SVG Snake Timeline */}
          <div className="md:hidden flex flex-col relative py-10 px-2 max-w-sm mx-auto">
            {processes.map((process, index) => {
              const config = mobileConfig[index];
              return (
                <div key={process.title} className={`relative flex items-start w-full mb-16 ${config.pos === 'left' ? 'justify-start' : 'justify-end'}`}>
                  
                  {/* Connector Line SVG */}
                  {config.path && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.5 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="absolute top-7 -bottom-[5.75rem] left-7 w-[calc(100%-3.5rem)] z-0"
                    >
                      <svg width="100%" height="100%" viewBox="0 0 300 150" preserveAspectRatio="none" className="overflow-visible">
                        <path 
                          d={config.path} 
                          fill="none" 
                          stroke="#BFA06C" 
                          strokeWidth="2" 
                          strokeDasharray="6 6" 
                        />
                      </svg>
                    </motion.div>
                  )}

                  {/* Icon */}
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={`relative z-10 flex flex-col items-center w-14 ${config.pos === 'left' ? 'order-1' : 'order-2'}`}
                  >
                    <div className="w-14 h-14 rounded-full bg-[#BFA06C] flex items-center justify-center shadow-md">
                      <process.icon size={24} strokeWidth={1.5} className="text-white" />
                    </div>
                    {/* Number badge moved OUTSIDE the rounded-full container to prevent browser clipping */}
                    <div className={`absolute -top-1 ${config.pos === 'left' ? '-right-1' : '-left-1'} w-5 h-5 rounded-full bg-[#111111] text-white flex items-center justify-center font-playfair font-bold text-[10px] shadow-sm`}>
                      {process.step}
                    </div>
                  </motion.div>
                  
                  {/* Text Content */}
                  <motion.div 
                    initial={{ opacity: 0, x: config.pos === 'left' ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`flex flex-col pt-2 px-4 ${config.pos === 'left' ? 'order-2 text-left' : 'order-1 text-right'} flex-1 relative z-10`}
                  >
                    <h3 className="font-playfair font-semibold text-[16px] text-[#111111] mb-1">
                      {process.title}
                    </h3>
                    <p className="font-poppins text-[12px] text-[#111111]/70 leading-relaxed">
                      {process.desc}
                    </p>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
