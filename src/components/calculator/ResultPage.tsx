import { CalculatorState, calculateBudgetRange, generateThemeRecommendation } from "@/lib/calculator";
import { MessageCircle, Sparkles, CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface Props {
  state: CalculatorState;
}

export default function ResultPage({ state }: Props) {
  const { formatted } = calculateBudgetRange(state);
  const theme = generateThemeRecommendation(state);

  const handleWhatsAppRedirect = () => {
    const message = `Hi Aurelia Events,\n\nI completed the Wedding Budget Estimator. My estimated budget is ${formatted} for a ${state.weddingStyle} style wedding (${state.guestCount} guests). I would like a personalized consultation.`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Determine which image to show based on the selected wedding style
  const getStyleImage = () => {
    switch (state.weddingStyle) {
      case "Essential": return "/images/styles/essential.png";
      case "Classic": return "/images/styles/classic.png";
      case "Premium": return "/images/styles/premium.png";
      case "Luxury": return "/images/styles/luxury.png";
      default: return "/images/styles/premium.png";
    }
  };

  return (
    <div className="flex flex-col items-center max-w-3xl mx-auto pb-12">
      {/* Top Banner */}
      <div className="w-full text-center mb-10 mt-4">
        <div className="inline-flex items-center justify-center space-x-2 bg-[#F7F4EF] text-[#C2A572] px-4 py-1.5 rounded-full text-sm font-medium tracking-wide mb-6">
          <Sparkles size={16} />
          <span>ESTIMATE UNLOCKED</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-serif text-[#2B2B2B] mb-4">Your Wedding Budget</h2>
        <p className="text-[#8c8c8c] text-lg max-w-xl mx-auto">
          Based on your choices, we have crafted a personalized estimate and styling direction for your special day.
        </p>
      </div>

      {/* Main Budget Card */}
      <div className="w-full bg-gradient-to-br from-[#FCFBF8] to-[#F7F4EF] rounded-3xl p-8 md:p-12 mb-10 border border-[#E5E0D8] shadow-sm relative overflow-hidden">
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-[#C2A572]/20 rounded-tl-3xl m-4"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#C2A572]/20 rounded-br-3xl m-4"></div>
        
        <div className="text-center relative z-10">
          <h3 className="text-[#8c8c8c] uppercase tracking-widest text-sm font-medium mb-4">Estimated Range</h3>
          <div className="text-5xl md:text-7xl font-serif text-[#C2A572] mb-6 drop-shadow-sm">
            {formatted}
          </div>
          <div className="bg-white/60 rounded-xl p-4 inline-block backdrop-blur-sm border border-white/40">
            <p className="text-[#2B2B2B] font-medium text-sm md:text-base">
              {state.guestCount} Guests • {state.weddingStyle} Style • {state.functionsCount} • {state.venueType}
            </p>
          </div>
        </div>
      </div>

      {/* Recommended Style Section */}
      <div className="w-full mb-12">
        <h3 className="text-center text-2xl font-serif text-[#2B2B2B] mb-6 flex items-center justify-center">
          <span className="w-12 h-[1px] bg-[#C2A572] mr-4"></span>
          Recommended Styling
          <span className="w-12 h-[1px] bg-[#C2A572] ml-4"></span>
        </h3>
        
        <div className="bg-white rounded-3xl overflow-hidden border border-[#E5E0D8] shadow-sm grid grid-cols-1 md:grid-cols-2 group hover:shadow-md transition-shadow">
          <div className="relative h-64 md:h-auto overflow-hidden">
            <Image 
              src={getStyleImage()}
              alt={theme.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <h4 className="text-2xl font-serif text-white">{theme.name}</h4>
            </div>
          </div>
          
          <div className="p-8 flex flex-col justify-center space-y-6">
            <div>
              <span className="block text-[#8c8c8c] text-xs uppercase tracking-wider font-bold mb-2">Color Palette</span>
              <span className="text-[#2B2B2B] font-medium text-lg">{theme.palette}</span>
            </div>
            <div className="w-full h-[1px] bg-gray-100"></div>
            <div>
              <span className="block text-[#8c8c8c] text-xs uppercase tracking-wider font-bold mb-2">Floral Style</span>
              <span className="text-[#2B2B2B] font-medium text-lg">{theme.floral}</span>
            </div>
            <div className="w-full h-[1px] bg-gray-100"></div>
            <div>
              <span className="block text-[#8c8c8c] text-xs uppercase tracking-wider font-bold mb-2">Suggested Venue Type</span>
              <span className="text-[#2B2B2B] font-medium text-lg">{theme.venue}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps CTA */}
      <div className="w-full bg-[#2B2B2B] text-white rounded-3xl p-8 md:p-10 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C2A572] rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C2A572] rounded-full blur-[100px] opacity-20 translate-y-1/2 -translate-x-1/4"></div>
        
        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-serif mb-4">Turn this vision into reality</h3>
          <p className="text-gray-300 max-w-lg mx-auto mb-8">
            This is just a starting point. Let's discuss your exact requirements to create a customized proposal.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleWhatsAppRedirect}
              className="px-8 py-4 bg-[#25D366] text-white rounded-full font-medium text-lg hover:bg-[#20bd5a] transition-all flex items-center justify-center shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:-translate-y-1 w-full sm:w-auto"
            >
              <MessageCircle className="mr-3" />
              Chat on WhatsApp
            </button>
            <div className="flex items-center text-sm text-gray-400">
              <CheckCircle2 size={16} className="mr-1 text-[#C2A572]" />
              No commitment required
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
