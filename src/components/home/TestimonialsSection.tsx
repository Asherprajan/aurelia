"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Aurelia Events made our wedding completely stress-free. Every detail was handled perfectly. We just enjoyed our big day!",
    author: "Anu & Jithin",
    rating: 5,
  },
  {
    id: 2,
    quote: "Our guests still talk about the décor and arrangements. Truly the best decision we made!",
    author: "Neha & Arjun",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <div className="flex flex-col h-full">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6"
      >
        <h2 className="font-playfair text-[#111111] font-semibold uppercase tracking-[0.2em] text-[15px]">
          Testimonials
        </h2>
      </motion.div>

      <div className="flex flex-col gap-6 flex-grow">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col text-left py-4 ${index !== testimonials.length - 1 ? 'border-b border-[#BFA06C]/20' : ''}`}
            >
              <div className="flex gap-4">
                <div className="text-[#BFA06C]/40 text-5xl font-playfair font-black leading-none pt-2">
                  “
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#BFA06C] text-[#BFA06C]" />
                    ))}
                  </div>
                  
                  <p className="font-poppins text-[#111111]/80 leading-relaxed text-[13px] mb-4">
                    {testimonial.quote}
                  </p>
                  
                  <h4 className="font-poppins font-semibold text-xs text-[#111111]">
                    — {testimonial.author}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
}
