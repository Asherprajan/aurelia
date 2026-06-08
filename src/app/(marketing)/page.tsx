import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import ServicesSection from "@/components/home/ServicesSection";
import PackagesSection from "@/components/home/PackagesSection";
import ProcessSection from "@/components/home/ProcessSection";
import GallerySection from "@/components/home/GallerySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import InstagramFeedSection from "@/components/home/InstagramFeedSection";
import ContactCtaSection from "@/components/home/ContactCtaSection";
import { Calculator, Palette, ClipboardList, Lock, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background-white flex flex-col relative overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <PackagesSection />
      <ProcessSection />
      <section className="py-24 bg-[#FCFBF8]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start">
            <GallerySection />
            <TestimonialsSection />
            <InstagramFeedSection />
          </div>
        </div>
      </section>

      <section className="relative py-24 w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/cta_bg.png" 
            alt="Elegant Wedding Background" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-[#F7F4EF]/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#F7F4EF] via-transparent to-[#F7F4EF] opacity-60"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
          {/* Logo / Monogram */}
        

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2B2B2B] mb-4">Plan Your Dream Wedding</h2>
          
          <div className="flex justify-center mb-4">
            <span className="text-[#C2A572] text-xl">♥</span>
          </div>

          <p className="text-[#595959] text-lg max-w-2xl mx-auto mb-12">
            Answer a few quick questions to receive a personalized budget estimate and styling recommendation for your Aurelia Events experience.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 mb-12 max-w-3xl mx-auto divide-x divide-[#C2A572]/20">
            <div className="flex flex-col items-center px-4">
              <Calculator className="w-8 h-8 text-[#C2A572] mb-3 stroke-[1.5]" />
              <span className="text-sm text-[#2B2B2B] font-medium leading-tight">Personalized Budget Estimate</span>
            </div>
            <div className="flex flex-col items-center px-4">
              <Palette className="w-8 h-8 text-[#C2A572] mb-3 stroke-[1.5]" />
              <span className="text-sm text-[#2B2B2B] font-medium leading-tight">Styling & Theme Recommendation</span>
            </div>
            <div className="flex flex-col items-center px-4">
              <ClipboardList className="w-8 h-8 text-[#C2A572] mb-3 stroke-[1.5]" />
              <span className="text-sm text-[#2B2B2B] font-medium leading-tight">Tailored to Your Preferences</span>
            </div>
            <div className="flex flex-col items-center px-4 border-l-0 md:border-l md:border-[#C2A572]/20">
              <Lock className="w-8 h-8 text-[#C2A572] mb-3 stroke-[1.5]" />
              <span className="text-sm text-[#2B2B2B] font-medium leading-tight">100% Private & Confidential</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-center">
            <a
              href="/plan-my-wedding"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#d4b988] to-[#b8955a] text-white rounded-full font-serif text-xl hover:from-[#c2a572] hover:to-[#a8864c] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Plan My Wedding Budget <span className="ml-3 font-sans">→</span>
            </a>
            
            <div className="mt-4 flex items-center text-xs text-[#8c8c8c]">
              <ShieldCheck className="w-4 h-4 mr-1 text-[#C2A572]" />
              It's quick, easy and completely free
            </div>
          </div>
        </div>
      </section>
      
      <ContactCtaSection />
    </main>
  );
}
