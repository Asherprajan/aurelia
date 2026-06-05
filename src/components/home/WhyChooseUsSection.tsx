"use client";

import { motion } from "framer-motion";
import { HeartHandshake, ClipboardList, Gem } from "lucide-react";

const features = [
  {
    icon: HeartHandshake,
    title: "Personalized Planning",
    description: "Every wedding is designed around your vision and preferences.",
  },
  {
    icon: ClipboardList,
    title: "Stress-Free Execution",
    description: "We manage vendors, timelines, logistics, and coordination seamlessly.",
  },
  {
    icon: Gem,
    title: "Elegant Experiences",
    description: "Luxury styling and attention to every detail for unforgettable celebrations.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-[#FCFBF8]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 flex items-center justify-center gap-4"
        >
          <div className="w-12 h-px bg-[#BFA06C]"></div>
          <h2 className="font-playfair text-[#111111] font-semibold uppercase tracking-[0.2em] text-sm md:text-base">
            Why Choose Us
          </h2>
          <div className="w-12 h-px bg-[#BFA06C]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col items-center text-center px-8 md:px-12 py-8 ${
                index !== features.length - 1 ? "md:border-r border-[#BFA06C]/30" : ""
              } ${index !== features.length - 1 ? "border-b md:border-b-0 border-[#BFA06C]/30" : ""}`}
            >
              <div className="text-[#BFA06C] mb-6">
                <feature.icon size={48} strokeWidth={1} />
              </div>
              <h3 className="font-playfair text-lg md:text-xl font-semibold text-[#111111] mb-4">
                {feature.title}
              </h3>
              <p className="font-poppins text-[#111111]/70 leading-relaxed text-[13px] md:text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
