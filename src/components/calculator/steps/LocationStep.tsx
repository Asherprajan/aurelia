import { CalculatorState } from "@/lib/calculator";
import Image from "next/image";

interface Props {
  state: CalculatorState;
  updateState: (updates: Partial<CalculatorState>) => void;
  onNext: () => void;
}

const LOCATIONS = [
  { name: "Trivandrum", image: "/images/locations/trivandrum.png" },
  { name: "Kochi", image: "/images/locations/kochi.png" },
  { name: "Kollam", image: "/images/locations/kollam.png" },
  { name: "Other Kerala City", image: "/images/locations/other.png" },
  { name: "Destination Wedding", image: "/images/locations/destination.png" },
];

export default function LocationStep({ state, updateState, onNext }: Props) {
  const handleSelect = (location: string) => {
    updateState({ location });
    setTimeout(onNext, 400); // Small delay for visual feedback
  };

  return (
    <div className="flex flex-col items-center max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-serif text-[#2B2B2B] mb-1 text-center">Where are you planning to celebrate?</h2>
      <p className="text-[#8c8c8c] mb-6 text-sm md:text-base text-center">Select your preferred wedding location.</p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 w-full justify-center">
        {LOCATIONS.map((loc, index) => (
          <button
            key={loc.name}
            onClick={() => handleSelect(loc.name)}
            className={`group relative rounded-xl overflow-hidden transition-all duration-300 text-left aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]
              ${index === LOCATIONS.length - 1 ? 'col-span-2 md:col-span-1 lg:col-span-1' : ''}
              ${state.location === loc.name 
                ? "ring-4 ring-[#C2A572] shadow-xl scale-[1.02] z-10" 
                : "ring-1 ring-gray-200 hover:ring-[#C2A572] hover:shadow-lg"}`}
          >
            <Image 
              src={loc.image} 
              alt={loc.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className={`absolute inset-0 transition-opacity duration-300
              ${state.location === loc.name 
                ? "bg-gradient-to-t from-black/80 via-black/30 to-transparent" 
                : "bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80"}`} 
            />
            
            <div className="absolute bottom-0 left-0 w-full p-3 md:p-4">
              <span className="text-sm md:text-base font-serif text-white drop-shadow-md leading-tight block">
                {loc.name}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
