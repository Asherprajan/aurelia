"use client";

import { useState } from "react";
import { X, Calendar, Phone, Mail, User, MessageSquare } from "lucide-react";

interface BookConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookConsultationModal({ isOpen, onClose }: BookConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "Failed to submit request.");

      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred.");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="bg-[#FAF9F6] w-full max-w-lg rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="relative bg-[#2B2B2B] text-[#FAF9F6] p-6 text-center">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-[#FAF9F6]/70 hover:text-[#D4AF37] transition-colors"
          >
            <X size={24} />
          </button>
          <h2 className="font-playfair text-2xl md:text-3xl font-semibold tracking-wider text-[#D4AF37] mb-2">
            Book Consultation
          </h2>
          <p className="font-poppins text-sm text-[#FAF9F6]/80">
            Let's discuss how we can make your dream wedding a reality.
          </p>
        </div>

        <div className="p-6 md:p-8">
          {status === "success" ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-[#2B2B2B] mb-2">Request Received!</h3>
              <p className="font-poppins text-sm text-[#595959] mb-6">
                Thank you for reaching out. We will get back to you shortly to schedule your consultation.
              </p>
              <button 
                onClick={onClose}
                className="px-8 py-3 bg-[#2B2B2B] text-[#FAF9F6] font-poppins text-sm uppercase tracking-wider hover:bg-[#D4AF37] transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-poppins text-xs font-semibold uppercase tracking-wider text-[#595959] mb-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-[#C2A572]" size={18} />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-[#E5E5E5] rounded-md focus:outline-none focus:border-[#D4AF37] font-poppins text-sm"
                    placeholder="Jane Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-poppins text-xs font-semibold uppercase tracking-wider text-[#595959] mb-1">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-[#C2A572]" size={18} />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-[#E5E5E5] rounded-md focus:outline-none focus:border-[#D4AF37] font-poppins text-sm"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-poppins text-xs font-semibold uppercase tracking-wider text-[#595959] mb-1">Phone / WhatsApp</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 text-[#C2A572]" size={18} />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-[#E5E5E5] rounded-md focus:outline-none focus:border-[#D4AF37] font-poppins text-sm"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block font-poppins text-xs font-semibold uppercase tracking-wider text-[#595959] mb-1">Event Date (Optional)</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 text-[#C2A572]" size={18} />
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({...formData, eventDate: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-[#E5E5E5] rounded-md focus:outline-none focus:border-[#D4AF37] font-poppins text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block font-poppins text-xs font-semibold uppercase tracking-wider text-[#595959] mb-1">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-[#C2A572]" size={18} />
                  <textarea
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-[#E5E5E5] rounded-md focus:outline-none focus:border-[#D4AF37] font-poppins text-sm resize-none"
                    placeholder="Tell us a little bit about what you are looking for..."
                  ></textarea>
                </div>
              </div>

              {status === "error" && (
                <div className="text-red-500 text-sm font-poppins bg-red-50 p-3 rounded-md">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-4 mt-2 bg-[#D4AF37] text-[#2B2B2B] font-poppins font-semibold text-sm uppercase tracking-wider hover:bg-[#C2A572] transition-colors disabled:opacity-70"
              >
                {status === "submitting" ? "Sending Request..." : "Submit Request"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
