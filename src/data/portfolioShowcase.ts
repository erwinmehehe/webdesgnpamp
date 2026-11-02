/**
 * Original demonstration sites. These are design and engineering samples,
 * never commissioned-client work or proof of business outcomes.
 */
export const demoSlugs = ["sizzle-house", "coreaxis-bpo", "ironpeak-builders"] as const;
export type DemoSlug = (typeof demoSlugs)[number];

export const isDemoSlug = (slug: string): slug is DemoSlug =>
  (demoSlugs as readonly string[]).includes(slug);

type Story = {
  challenge: string;
  designDecisions: string[];
  demonstrated: string[];
  conversionPath: string;
  mobile: string;
  limitations: string;
};

export const showcaseStories: Record<DemoSlug, Story> = {
  "sizzle-house": {
    challenge: "A mobile restaurant visitor needs to check the menu, find a dish and understand how to request a table without navigating through image-only price lists.",
    designDecisions: [
      "Pair food-led editorial imagery with a legible HTML menu that remains searchable and accessible.",
      "Keep menu browsing and booking as separate, unmistakable customer journeys.",
      "Use a short booking form with a local confirmation preview instead of pretending to have restaurant availability.",
    ],
    demonstrated: ["Responsive restaurant homepage", "Filterable HTML menu and shortlist", "Gallery with keyboard-accessible details", "Booking-request preview"],
    conversionPath: "Browse the menu → choose a dish → preview a table request",
    mobile: "Mobile menus stack into one column and navigation collapses to large, tap-friendly controls. The same content remains available.",
    limitations: "Fictional restaurant. Menu prices and opening hours are illustrative; the booking preview does not send an enquiry.",
  },
  "coreaxis-bpo": {
    challenge: "A BPO website serves two incompatible audiences: procurement teams assessing capability and candidates looking for suitable jobs.",
    designDecisions: [
      "Separate buyer and candidate paths directly in the navigation instead of mixing sales and recruitment CTAs.",
      "Give procurement visitors meaningful service comparisons and a scope-building enquiry preview.",
      "Let candidates filter sample roles and inspect requirements without claiming those positions are vacant.",
    ],
    demonstrated: ["Responsive B2B homepage", "Capability tabs and enquiry builder", "Sample role filters and details", "Separate buyer and careers journeys"],
    conversionPath: "Choose a visitor journey → evaluate relevant details → preview a targeted enquiry",
    mobile: "Both journeys work through a compact, keyboard-accessible menu with larger buttons and no horizontally scrolling data tables.",
    limitations: "Fictional outsourcing business. No actual jobs, certifications, staffing numbers or customer results are asserted, and requests are not transmitted.",
  },
  "ironpeak-builders": {
    challenge: "Commercial construction buyers need to assess project fit, compare capabilities and supply enough detail for an informed quotation conversation.",
    designDecisions: [
      "Keep the original high-contrast industrial identity while making the project gallery genuinely filterable.",
      "Use a focused project-detail view to explain a type of engagement without claiming a fictitious completed build.",
      "Provide a progressive quotation worksheet with a review screen and no simulated submission success.",
    ],
    demonstrated: ["Responsive construction homepage", "Filterable concept gallery", "Individual project briefs", "Multi-step quotation worksheet"],
    conversionPath: "Explore relevant project types → inspect a brief → prepare a quotation request",
    mobile: "One-column project cards and a clearly labeled step-by-step scope form replace cramped desktop grids.",
    limitations: "All builds, dates and capabilities are illustrative. No construction licences, safety statistics or bids are represented as genuine. Nothing is submitted.",
  },
};
