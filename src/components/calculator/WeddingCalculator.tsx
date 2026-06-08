"use client";

import { useState } from "react";
import { CalculatorState, initialState, GuestCount, VenueType, WeddingStyle, FunctionsCount, Service } from "@/lib/calculator";
import { AnimatePresence, motion } from "framer-motion";
import LocationStep from "./steps/LocationStep";
import GuestCountStep from "./steps/GuestCountStep";
import VenueTypeStep from "./steps/VenueTypeStep";
import WeddingStyleStep from "./steps/WeddingStyleStep";
import FunctionsStep from "./steps/FunctionsStep";
import ServicesStep from "./steps/ServicesStep";
import LeadCaptureStep from "./steps/LeadCaptureStep";
import ResultPage from "./ResultPage";

const STEPS = [
  "Location",
  "Guest Count",
  "Venue Type",
  "Wedding Style",
  "Functions",
  "Services",
  "Almost Done",
  "Result"
];

export default function WeddingCalculator() {
  const [state, setState] = useState<CalculatorState>(initialState);
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, STEPS.length - 1));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const updateState = (updates: Partial<CalculatorState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  const handleLeadSubmit = async () => {
    setIsSubmitting(true);
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      });
      nextStep();
    } catch (error) {
      console.error("Error submitting lead:", error);
      // Still proceed to results even if tracking fails, to not block the user
      nextStep();
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentStepName = STEPS[currentStep];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-2">
      {currentStepName !== "Result" && (
        <div className="mb-4">
          <div className="text-center mt-3 text-xs text-[#595959] uppercase tracking-wider font-semibold drop-shadow-sm">
            Step {currentStep + 1} of {STEPS.length - 1}
          </div>
        </div>
      )}

      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {currentStepName === "Location" && (
              <LocationStep state={state} updateState={updateState} onNext={nextStep} />
            )}
            {currentStepName === "Guest Count" && (
              <GuestCountStep state={state} updateState={updateState} onNext={nextStep} onPrev={prevStep} />
            )}
            {currentStepName === "Venue Type" && (
              <VenueTypeStep state={state} updateState={updateState} onNext={nextStep} onPrev={prevStep} />
            )}
            {currentStepName === "Wedding Style" && (
              <WeddingStyleStep state={state} updateState={updateState} onNext={nextStep} onPrev={prevStep} />
            )}
            {currentStepName === "Functions" && (
              <FunctionsStep state={state} updateState={updateState} onNext={nextStep} onPrev={prevStep} />
            )}
            {currentStepName === "Services" && (
              <ServicesStep state={state} updateState={updateState} onNext={nextStep} onPrev={prevStep} />
            )}
            {currentStepName === "Almost Done" && (
              <LeadCaptureStep state={state} updateState={updateState} onSubmit={handleLeadSubmit} isSubmitting={isSubmitting} onPrev={prevStep} />
            )}
            {currentStepName === "Result" && (
              <ResultPage state={state} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
