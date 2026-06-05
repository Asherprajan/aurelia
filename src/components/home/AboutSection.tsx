"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#FCFBF8] text-dark-text relative overflow-hidden">
      
      {/* Decorative floral element on the right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-80 pointer-events-none hidden lg:block">
        <div className="relative w-[300px] h-[600px]">
          <Image 
            src="/botanical_trace.svg" 
            alt="Decorative floral element" 
            fill 
            className="object-contain"
          />
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Column: Logo */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-64 h-64 md:w-80 md:h-80"
            >
              <Image 
                src="/about.png" 
                alt="Aurelia Events by Aleena Logo" 
                fill 
                className="object-contain" 
              />
            </motion.div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-7/12 lg:pr-12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="space-y-6"
            >
              {/* Eyebrow */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4 className="text-primary-gold text-sm tracking-[0.2em] font-semibold uppercase mb-2">
                  About Us
                </h4>
                <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-dark-text mb-6">
                  About Aurelia Events
                </h2>
              </motion.div>

              <div className="space-y-5 font-poppins text-dark-text/80 text-[15px] md:text-base leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  At Aurelia Events by Aleena, we believe every love story deserves a beautifully crafted celebration.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  From intimate engagements to grand weddings, our team handles planning, coordination, décor, vendor management, photography arrangements, and guest experiences with elegance and precision.
                </motion.p>
              </div>

              {/* Quote Area */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="pt-6"
              >
                <p className="font-poppins text-lg md:text-xl text-[#BFA06C] font-medium leading-relaxed">
                  We don't just organize events.<br />
                  We create memories that last forever.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
