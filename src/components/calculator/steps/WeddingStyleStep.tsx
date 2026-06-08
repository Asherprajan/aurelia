import { CalculatorState, WeddingStyle } from "@/lib/calculator";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

interface Props {
  state: CalculatorState;
  updateState: (updates: Partial<CalculatorState>) => void;
  onNext: () => void;
  onPrev: () => void;
}

const STYLES: { type: WeddingStyle; image: string }[] = [
  { type: "Essential", image: "/images/styles/essential.png" },
  { type: "Classic", image: "/images/styles/classic.png" },
  { type: "Premium", image: "/images/styles/premium.png" },
  { type: "Luxury", image: "/images/styles/luxury.png" }
];

export default function WeddingStyleStep({ state, updateState, onNext, onPrev }: Props) {
  const handleSelect = (weddingStyle: WeddingStyle) => {
    updateState({ weddingStyle });
    setTimeout(onNext, 400);
  };

  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto">
      <div className="w-full mb-6">
        <button onClick={onPrev} className="flex items-center text-[#8c8c8c] hover:text-[#2B2B2B] transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          Back
        </button>
      </div>

      <h2 className="text-3xl md:text-4xl font-serif text-[#2B2B2B] mb-2 text-center">What is your desired style?</h2>
      <p className="text-[#8c8c8c] mb-8 text-center">Choose the level of detail and opulence.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        {STYLES.map((style) => (
          <button
            key={style.type}
            onClick={() => handleSelect(style.type)}
            className={`group relative rounded-2xl overflow-hidden transition-all duration-300 text-left aspect-[16/9] sm:aspect-[4/3]
              ${state.weddingStyle === style.type 
                ? "ring-4 ring-[#C2A572] shadow-xl scale-[1.02]" 
                : "ring-1 ring-gray-200 hover:ring-[#C2A572] hover:shadow-lg"}`}
          >
            <Image 
              src={style.image} 
              alt={style.type}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className={`absolute inset-0 transition-opacity duration-300
              ${state.weddingStyle === style.type 
                ? "bg-gradient-to-t from-black/80 via-black/30 to-transparent" 
                : "bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80"}`} 
            />
            
            <div className="absolute bottom-0 left-0 w-full p-6">
              <span className="text-2xl font-serif text-white drop-shadow-md">
                {style.type}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
