import { CalculatorState, GuestCount } from "@/lib/calculator";
import { Users, User, UsersRound, ArrowLeft } from "lucide-react";

interface Props {
  state: CalculatorState;
  updateState: (updates: Partial<CalculatorState>) => void;
  onNext: () => void;
  onPrev: () => void;
}

const COUNTS: { value: GuestCount; label: string; description: string; icon: any }[] = [
  { value: "Under 100", label: "Intimate Gathering", description: "Close family & a few friends", icon: User },
  { value: "100-250", label: "Micro Wedding", description: "Small & personal celebration", icon: Users },
  { value: "250-500", label: "Classic Celebration", description: "The traditional wedding size", icon: UsersRound },
  { value: "500-800", label: "Grand Affair", description: "A large, lively celebration", icon: UsersRound },
  { value: "800+", label: "Royal Extravaganza", description: "A massive, opulent event", icon: UsersRound }
];

export default function GuestCountStep({ state, updateState, onNext, onPrev }: Props) {
  const handleSelect = (guestCount: GuestCount) => {
    updateState({ guestCount });
    setTimeout(onNext, 400);
  };

  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto">
      <div className="w-full mb-6">
        <button onClick={onPrev} className="flex items-center text-[#8c8c8c] hover:text-[#2B2B2B] transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          Back
        </button>
      </div>

      <h2 className="text-3xl md:text-4xl font-serif text-[#2B2B2B] mb-2 text-center">How many guests?</h2>
      <p className="text-[#8c8c8c] mb-8 text-center">Estimate the size of your gathering.</p>
      
      <div className="flex flex-col gap-4 w-full">
        {COUNTS.map((count) => {
          const Icon = count.icon;
          return (
            <button
              key={count.value}
              onClick={() => handleSelect(count.value)}
              className={`p-5 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between text-left
                ${state.guestCount === count.value 
                  ? "border-[#C2A572] bg-[#F7F4EF] shadow-md transform scale-[1.01]" 
                  : "border-gray-100 hover:border-[#C2A572] hover:shadow-sm"}`}
            >
              <div className="flex items-center space-x-5">
                <div className={`p-4 rounded-full transition-colors ${state.guestCount === count.value ? "bg-[#C2A572] text-white" : "bg-gray-50 text-[#C2A572]"}`}>
                  <Icon size={26} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className={`text-xl font-medium mb-1 ${state.guestCount === count.value ? "text-[#2B2B2B]" : "text-gray-800"}`}>
                    {count.value} Guests
                  </h3>
                  <p className={`text-sm ${state.guestCount === count.value ? "text-[#8c8c8c]" : "text-gray-500"}`}>
                    <span className="font-medium text-[#C2A572]">{count.label}</span> • {count.description}
                  </p>
                </div>
              </div>
              
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors
                ${state.guestCount === count.value ? "border-[#C2A572] bg-[#C2A572]" : "border-gray-300"}`}>
                {state.guestCount === count.value && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
