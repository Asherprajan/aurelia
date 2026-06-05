"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFAB() {
  const phoneNumber = "916282211630";
  const message = encodeURIComponent(
    "Hello! I am interested in your luxury wedding planning services."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
      {/* Tooltip on hover */}
      <span className="absolute right-full mr-4 bg-dark-text text-white text-xs font-poppins px-3 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us!
      </span>
    </a>
  );
}
