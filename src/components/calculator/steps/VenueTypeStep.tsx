import { CalculatorState, VenueType } from "@/lib/calculator";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

interface Props {
  state: CalculatorState;
  updateState: (updates: Partial<CalculatorState>) => void;
  onNext: () => void;
  onPrev: () => void;
}

const VENUES: { type: VenueType; image: string }[] = [
  { type: "Convention Centre", image: "/images/venues/convention.png" },
  { type: "Hotel", image: "/images/venues/hotel.png" },
  { type: "Luxury Hotel", image: "/images/venues/luxury_hotel.png" },
  { type: "Resort", image: "/images/venues/resort.png" },
  { type: "Beach Venue", image: "/images/venues/beach.png" },
  { type: "Private Property", image: "/images/venues/private.png" }
];

export default function VenueTypeStep({ state, updateState, onNext, onPrev }: Props) {
  const handleSelect = (venueType: VenueType) => {
    updateState({ venueType });
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

      <h2 className="text-3xl md:text-4xl font-serif text-[#2B2B2B] mb-2 text-center">What type of venue?</h2>
      <p className="text-[#8c8c8c] mb-8 text-center">Select your preferred setting.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        {VENUES.map((venue) => (
          <button
            key={venue.type}
            onClick={() => handleSelect(venue.type)}
            className={`group relative rounded-2xl overflow-hidden transition-all duration-300 text-left aspect-[4/3]
              ${state.venueType === venue.type 
                ? "ring-4 ring-[#C2A572] shadow-xl scale-[1.02]" 
                : "ring-1 ring-gray-200 hover:ring-[#C2A572] hover:shadow-lg"}`}
          >
            <Image 
              src={venue.image} 
              alt={venue.type}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className={`absolute inset-0 transition-opacity duration-300
              ${state.venueType === venue.type 
                ? "bg-gradient-to-t from-black/80 via-black/30 to-transparent" 
                : "bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80"}`} 
            />
            
            <div className="absolute bottom-0 left-0 w-full p-5">
              <span className="text-xl font-serif text-white drop-shadow-md">
                {venue.type}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
