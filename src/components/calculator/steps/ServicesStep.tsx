import { CalculatorState, Service } from "@/lib/calculator";
import { Check, ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  state: CalculatorState;
  updateState: (updates: Partial<CalculatorState>) => void;
  onNext: () => void;
  onPrev: () => void;
}

const SERVICES: Service[] = [
  "Venue Coordination",
  "Decor & Floral Design",
  "Photography",
  "Videography",
  "Bridal Makeup",
  "Entertainment",
  "Guest Management",
  "Catering",
  "Complete Wedding Planning"
];

export default function ServicesStep({ state, updateState, onNext, onPrev }: Props) {
  const toggleService = (service: Service) => {
    const currentServices = [...state.services];
    if (currentServices.includes(service)) {
      updateState({ services: currentServices.filter((s) => s !== service) });
    } else {
      updateState({ services: [...currentServices, service] });
    }
  };

  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto">
      <div className="w-full mb-6">
        <button onClick={onPrev} className="flex items-center text-[#8c8c8c] hover:text-[#2B2B2B] transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          Back
        </button>
      </div>

      <h2 className="text-3xl md:text-4xl font-serif text-[#2B2B2B] mb-2 text-center">Select your services</h2>
      <p className="text-[#8c8c8c] mb-8 text-center">Choose the services you need help with. You can select multiple.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
        {SERVICES.map((service) => {
          const isSelected = state.services.includes(service);
          return (
            <button
              key={service}
              onClick={() => toggleService(service)}
              className={`p-4 rounded-xl border-2 transition-all duration-300 flex items-center justify-between text-left
                ${isSelected 
                  ? "border-[#C2A572] bg-[#F7F4EF] shadow-sm" 
                  : "border-gray-100 hover:border-[#C2A572] hover:bg-gray-50"}`}
            >
              <span className={`text-base font-medium ${isSelected ? "text-[#2B2B2B]" : "text-gray-600"}`}>
                {service}
              </span>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors
                ${isSelected ? "bg-[#C2A572] border-[#C2A572]" : "border-gray-300"}`}>
                {isSelected && <Check size={14} className="text-white" />}
              </div>
            </button>
          );
        })}
      </div>

      <button
        onClick={onNext}
        className="w-full md:w-auto px-10 py-4 bg-[#2B2B2B] text-white rounded-full font-medium text-lg hover:bg-[#1a1a1a] transition-colors flex items-center justify-center"
      >
        Continue to Results
        <ArrowRight size={20} className="ml-2" />
      </button>
    </div>
  );
}
