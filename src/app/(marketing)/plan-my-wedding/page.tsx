import WeddingCalculator from "@/components/calculator/WeddingCalculator";

export const metadata = {
  title: "Wedding Expense Calculator Kerala | Aurelia Events",
  description: "Try Kerala's first premium Wedding Expense Calculator. Estimate your luxury wedding budget, venue costs, and get a personalized theme recommendation.",
};

export default function PlanMyWeddingPage() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col">
      {/* Full Page Background Image */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/images/full_wedding_bg.png" 
          alt="Elegant Wedding Background" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-[#F7F4EF]/70 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F4EF]/90 via-[#F7F4EF]/50 to-[#F7F4EF]/80"></div>
      </div>

      <div className="relative z-10 flex-grow flex flex-col">
        {/* Header Section */}
        <div className="pt-[104px] pb-6">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2B2B2B] mb-2 md:mb-3 drop-shadow-sm">Kerala's Premier Wedding Expense Calculator</h1>
            <div className="flex justify-center mb-2 md:mb-3">
              <span className="w-8 md:w-12 h-[1px] bg-[#C2A572] mt-3 mr-3 md:mr-4"></span>
              <span className="text-[#C2A572] text-lg md:text-xl drop-shadow-sm">♥</span>
              <span className="w-8 md:w-12 h-[1px] bg-[#C2A572] mt-3 ml-3 md:ml-4"></span>
            </div>
            <p className="text-sm md:text-base lg:text-lg text-[#2B2B2B] font-medium max-w-2xl mx-auto leading-snug drop-shadow-sm">
              Answer a few quick questions to receive a personalized budget estimate and styling recommendation for your Aurelia Events experience.
            </p>
          </div>
        </div>
        
        {/* Calculator Section */}
        <div className="py-2 flex-grow flex items-center justify-center px-4 md:px-8">
          <div className="w-full max-w-6xl py-6 relative">
            <WeddingCalculator />
          </div>
        </div>
      </div>
    </main>
  );
}
