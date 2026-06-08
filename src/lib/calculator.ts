export type GuestCount = "Under 100" | "100-250" | "250-500" | "500-800" | "800+";
export type VenueType = "Convention Centre" | "Hotel" | "Luxury Hotel" | "Resort" | "Beach Venue" | "Private Property";
export type WeddingStyle = "Essential" | "Classic" | "Premium" | "Luxury";
export type FunctionsCount = "Wedding Only" | "Engagement + Wedding" | "Reception + Wedding" | "3-Day Celebration" | "Destination Wedding Experience";
export type Service = "Venue Coordination" | "Decor & Floral Design" | "Photography" | "Videography" | "Bridal Makeup" | "Entertainment" | "Guest Management" | "Catering" | "Complete Wedding Planning";

export interface CalculatorState {
  location: string;
  guestCount: GuestCount | "";
  venueType: VenueType | "";
  weddingStyle: WeddingStyle | "";
  functionsCount: FunctionsCount | "";
  services: Service[];
  lead: {
    name: string;
    whatsapp: string;
    email: string;
    date: string;
  };
}

export const initialState: CalculatorState = {
  location: "",
  guestCount: "",
  venueType: "",
  weddingStyle: "",
  functionsCount: "",
  services: [],
  lead: {
    name: "",
    whatsapp: "",
    email: "",
    date: "",
  },
};

const BASE_BUDGETS: Record<GuestCount, { min: number; max: number }> = {
  "Under 100": { min: 300000, max: 600000 },
  "100-250": { min: 600000, max: 1200000 },
  "250-500": { min: 1200000, max: 2000000 },
  "500-800": { min: 2000000, max: 3500000 },
  "800+": { min: 3500000, max: 5000000 }, // Using 50L+ as upper bound for logic
};

const VENUE_MULTIPLIERS: Record<string, number> = {
  "Convention Centre": 1.0,
  "Hotel": 1.1,
  "Luxury Hotel": 1.5,
  "Resort": 1.3,
  "Beach Venue": 1.4,
  "Private Property": 1.2,
};

const LOCATION_MULTIPLIERS: Record<string, number> = {
  "Destination Wedding": 1.8,
};

const STYLE_MULTIPLIERS: Record<WeddingStyle, number> = {
  "Essential": 1.0,
  "Classic": 1.2,
  "Premium": 1.5,
  "Luxury": 2.0,
};

const FUNCTION_MULTIPLIERS: Record<FunctionsCount, number> = {
  "Wedding Only": 1.0,
  "Engagement + Wedding": 1.4,
  "Reception + Wedding": 1.5,
  "3-Day Celebration": 2.2,
  "Destination Wedding Experience": 2.5,
};

const SERVICE_COSTS: Record<Service, number> = {
  "Photography": 75000,
  "Videography": 100000,
  "Decor & Floral Design": 200000,
  "Bridal Makeup": 30000,
  "Entertainment": 100000,
  "Guest Management": 50000,
  "Venue Coordination": 50000,
  "Complete Wedding Planning": 150000,
  "Catering": 0, // Assume included in base guest count budget, unless specifically an add-on
};

export function calculateBudgetRange(state: CalculatorState): { min: number; max: number; formatted: string } {
  if (!state.guestCount || !state.venueType || !state.weddingStyle || !state.functionsCount) {
    return { min: 0, max: 0, formatted: "₹0" };
  }

  const base = BASE_BUDGETS[state.guestCount];
  let min = base.min;
  let max = base.max;

  // Venue Multiplier
  const venueMultiplier = VENUE_MULTIPLIERS[state.venueType] || 1.0;
  
  // Location Multiplier (if Destination Wedding)
  const locMultiplier = LOCATION_MULTIPLIERS[state.location] || 1.0;

  // Style Multiplier
  const styleMultiplier = STYLE_MULTIPLIERS[state.weddingStyle] || 1.0;

  // Functions Multiplier
  const funcMultiplier = FUNCTION_MULTIPLIERS[state.functionsCount] || 1.0;

  const totalMultiplier = venueMultiplier * locMultiplier * styleMultiplier * funcMultiplier;

  min = min * totalMultiplier;
  max = max * totalMultiplier;

  // Add services
  let servicesTotal = 0;
  state.services.forEach((service) => {
    servicesTotal += SERVICE_COSTS[service] || 0;
  });

  min += servicesTotal;
  max += servicesTotal;

  // Format the output
  const formatLakhs = (val: number) => {
    return `₹${(val / 100000).toFixed(0)}L`;
  };

  const formatted = state.guestCount === "800+" && max > 5000000 
    ? `${formatLakhs(min)}+` 
    : `${formatLakhs(min)} - ${formatLakhs(max)}`;

  return { min, max, formatted };
}

export function generateThemeRecommendation(state: CalculatorState) {
  const { weddingStyle, venueType, location } = state;

  if (location === "Destination Wedding" || state.functionsCount === "Destination Wedding Experience") {
    return {
      name: "Tropical Destination Experience",
      palette: "Sunset Orange, Palm Green, Ivory, Sand",
      floral: "Exotic Orchids, Anthuriums, and lush tropical foliage",
      venue: "Luxury Beachfront Resort or Private Island"
    };
  }

  if (venueType === "Beach Venue" && (weddingStyle === "Premium" || weddingStyle === "Luxury")) {
    return {
      name: "Coastal Elegance Theme",
      palette: "Ocean Blue, Sandy Beige, Pearl White, Hints of Gold",
      floral: "Pampas grass, white roses, and dried palm leaves",
      venue: "Exclusive Beachfront with open-air marquees"
    };
  }

  if ((venueType === "Resort" || venueType === "Luxury Hotel") && weddingStyle === "Luxury") {
    return {
      name: "Aurelia Ivory & Gold Signature Wedding",
      palette: "Ivory, Champagne Gold, Charcoal Black",
      floral: "Cascading white phalaenopsis orchids, hydrangeas, and classic roses",
      venue: "Grand Ballroom or Heritage Resort Courtyard"
    };
  }
  
  if (weddingStyle === "Classic") {
    return {
      name: "Aurelia Classic Romance",
      palette: "Blush Pink, Sage Green, Crisp White",
      floral: "Peonies, garden roses, and eucalyptus garlands",
      venue: "Elegant Hotel Banquet or Convention Centre"
    };
  }
  
  if (weddingStyle === "Premium") {
    return {
      name: "Aurelia Modern Premium",
      palette: "Emerald Green, Metallic Gold, Deep Velvet Red",
      floral: "Rich floral arches, bold centerpieces with seasonal premium blooms",
      venue: "Premium Convention Centre or Upscale Hotel"
    };
  }

  return {
    name: "Aurelia Essential Elegance",
    palette: "Pastel Shades, White, Gold Accents",
    floral: "Minimalist floral arrangements with local seasonal flowers",
    venue: "Beautifully curated traditional venue"
  };
}
