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

export default function Home() {
  return (
    <main className="min-h-screen bg-background-white flex flex-col relative overflow-x-hidden">
      <Navbar />
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
      
      <ContactCtaSection />
      <Footer />
      <WhatsAppFAB />
    </main>
  );
}
