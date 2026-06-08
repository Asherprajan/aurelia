import { CalculatorState } from "@/lib/calculator";
import { ArrowLeft, ArrowRight, Lock } from "lucide-react";

interface Props {
  state: CalculatorState;
  updateState: (updates: Partial<CalculatorState>) => void;
  onSubmit: () => void;
  onPrev: () => void;
  isSubmitting: boolean;
}

export default function LeadCaptureStep({ state, updateState, onSubmit, onPrev, isSubmitting }: Props) {
  const isFormValid = state.lead.name && state.lead.whatsapp && state.lead.email && state.lead.date;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid && !isSubmitting) {
      onSubmit();
    }
  };

  return (
    <div className="flex flex-col items-center max-w-lg mx-auto">
      <div className="w-full mb-6">
        <button onClick={onPrev} className="flex items-center text-[#8c8c8c] hover:text-[#2B2B2B] transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          Back
        </button>
      </div>

      <div className="bg-[#F7F4EF] w-full p-8 rounded-2xl shadow-sm border border-[#E5E0D8]">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-serif text-[#2B2B2B] mb-2">Almost Done...</h2>
          <p className="text-[#8c8c8c]">Your Wedding Estimate is Ready. Enter your details to unlock it.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              required
              value={state.lead.name}
              onChange={(e) => updateState({ lead: { ...state.lead, name: e.target.value } })}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C2A572] focus:ring-1 focus:ring-[#C2A572] outline-none transition-all"
              placeholder="e.g. Priya & Rahul"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number</label>
            <input
              type="tel"
              required
              value={state.lead.whatsapp}
              onChange={(e) => updateState({ lead: { ...state.lead, whatsapp: e.target.value } })}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C2A572] focus:ring-1 focus:ring-[#C2A572] outline-none transition-all"
              placeholder="+91 98765 43210"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              required
              value={state.lead.email}
              onChange={(e) => updateState({ lead: { ...state.lead, email: e.target.value } })}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C2A572] focus:ring-1 focus:ring-[#C2A572] outline-none transition-all"
              placeholder="hello@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Wedding Date (or Month/Year)</label>
            <input
              type="text"
              required
              value={state.lead.date}
              onChange={(e) => updateState({ lead: { ...state.lead, date: e.target.value } })}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C2A572] focus:ring-1 focus:ring-[#C2A572] outline-none transition-all"
              placeholder="e.g. December 2026"
            />
          </div>

          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className={`w-full mt-6 py-4 rounded-lg font-medium text-lg flex items-center justify-center transition-all
              ${isFormValid && !isSubmitting
                ? "bg-[#C2A572] text-white hover:bg-[#a68c61] shadow-md" 
                : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
          >
            {isSubmitting ? "Generating..." : "Unlock My Estimate"}
            {!isSubmitting && <ArrowRight size={20} className="ml-2" />}
          </button>
        </form>

        <div className="mt-4 flex items-center justify-center text-xs text-gray-400">
          <Lock size={12} className="mr-1" />
          Your information is kept secure and confidential.
        </div>
      </div>
    </div>
  );
}
