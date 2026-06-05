"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

const igImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop" },
  { id: 2, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop" },
  { id: 3, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=600&auto=format&fit=crop" },
  { id: 4, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=600&auto=format&fit=crop" },
  { id: 5, src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=600&auto=format&fit=crop" },
  { id: 6, src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=600&auto=format&fit=crop" },
];

export default function InstagramFeedSection() {
  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="font-playfair text-[#111111] font-semibold uppercase tracking-[0.2em] text-[15px] mb-2">
            Follow Us
          </h2>
          <p className="font-poppins text-[#111111] font-semibold text-[11px] lowercase tracking-wider">
            @aurelia_events_by_aleena
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-2 mb-8">
            {igImages.map((img, index) => (
              <motion.a
                key={img.id}
                href="https://instagram.com/aurelia_events_by_aleena"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-square overflow-hidden group block rounded-sm"
              >
                <Image
                  src={img.src}
                  alt="Instagram post"
                  fill
                  sizes="(max-width: 768px) 33vw, 16vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#111111]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <FaInstagram className="text-white w-6 h-6" />
                </div>
              </motion.a>
            ))}
          </div>
      </div>

      <div className="text-center">
        <a
          href="https://instagram.com/aurelia_events_by_aleena"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-6 py-[14px] border border-[#BFA06C] text-[#111111] font-poppins text-xs font-semibold uppercase tracking-wider hover:bg-[#BFA06C] hover:text-white transition-colors duration-300 w-full rounded-sm"
        >
          <FaInstagram size={16} />
          Follow On Instagram
        </a>
      </div>
    </div>
  );
}
