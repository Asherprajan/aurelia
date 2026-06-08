import { CalculatorState, FunctionsCount } from "@/lib/calculator";
import { Calendar, CalendarHeart, CalendarRange, PartyPopper, Plane, ArrowLeft } from "lucide-react";

interface Props {
  state: CalculatorState;
  updateState: (updates: Partial<CalculatorState>) => void;
  onNext: () => void;
  onPrev: () => void;
}

const FUNCTIONS: { value: FunctionsCount; label: string; description: string; icon: any }[] = [
  { value: "Wedding Only", label: "Single Day", description: "The main wedding ceremony", icon: CalendarHeart },
  { value: "Engagement + Wedding", label: "Two Events", description: "Separate engagement & wedding dates", icon: CalendarRange },
  { value: "Reception + Wedding", label: "Back-to-Back", description: "Wedding followed by a grand reception", icon: PartyPopper },
  { value: "3-Day Celebration", label: "Full Traditional", description: "Haldi, Mehendi, Wedding & Reception", icon: Calendar },
  { value: "Destination Wedding Experience", label: "Multi-Day Journey", description: "A complete curated getaway for guests", icon: Plane }
];

export default function FunctionsStep({ state, updateState, onNext, onPrev }: Props) {
  const handleSelect = (functionsCount: FunctionsCount) => {
    updateState({ functionsCount });
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

      <h2 className="text-3xl md:text-4xl font-serif text-[#2B2B2B] mb-2 text-center">How many events?</h2>
      <p className="text-[#8c8c8c] mb-8 text-center">Select the scale of your celebration.</p>
      
      <div className="flex flex-col gap-4 w-full">
        {FUNCTIONS.map((func) => {
          const Icon = func.icon;
          return (
            <button
              key={func.value}
              onClick={() => handleSelect(func.value)}
              className={`p-5 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between text-left
                ${state.functionsCount === func.value 
                  ? "border-[#C2A572] bg-[#F7F4EF] shadow-md transform scale-[1.01]" 
                  : "border-gray-100 hover:border-[#C2A572] hover:shadow-sm"}`}
            >
              <div className="flex items-center space-x-5">
                <div className={`p-4 rounded-full transition-colors ${state.functionsCount === func.value ? "bg-[#C2A572] text-white" : "bg-gray-50 text-[#C2A572]"}`}>
                  <Icon size={26} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className={`text-xl font-medium mb-1 ${state.functionsCount === func.value ? "text-[#2B2B2B]" : "text-gray-800"}`}>
                    {func.value}
                  </h3>
                  <p className={`text-sm ${state.functionsCount === func.value ? "text-[#8c8c8c]" : "text-gray-500"}`}>
                    <span className="font-medium text-[#C2A572]">{func.label}</span> • {func.description}
                  </p>
                </div>
              </div>
              
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors shrink-0
                ${state.functionsCount === func.value ? "border-[#C2A572] bg-[#C2A572]" : "border-gray-300"}`}>
                {state.functionsCount === func.value && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
