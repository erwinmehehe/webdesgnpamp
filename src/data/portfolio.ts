import type { LucideIcon } from "lucide-react";
import { Building2, ClipboardList, HeartPulse, Home, Stethoscope, Truck } from "lucide-react";
import {
  pageClinic,
  pageConstruction,
  pageCorporate,
  pageDental,
  pageHotel,
  pageLogistics,
  pageProperty,
  pageRealestate,
  pageRestaurant,
} from "@/assets/images";

export interface Project {
  slug: string;
  name: string;
  industry: string;
  industrySlug?: string;
  location: string;
  summary: string;
  approach: string;
  features: string[];
  image?: string;
  /** Accent colour used by the full-page preview (hero gradient + CTA). */
  accent?: string;
  icon?: LucideIcon;
}

const img = {
  corporate: pageCorporate,
  restaurant: pageRestaurant,
  hotel: pageHotel,
  realestate: pageRealestate,
  dental: pageDental,
  logistics: pageLogistics,
  construction: pageConstruction,
  clinic: pageClinic,
  property: pageProperty,
};

/** Portfolio projects — 10 total. Previews are full-page designs you can scroll on hover. */
export const projects: Project[] = [
  {
    slug: "coreaxis-bpo",
    name: "CoreAxis BPO Solutions",
    industry: "BPO & Outsourcing",
    industrySlug: "bpo-web-design-clark",
    location: "Clark Freeport Zone",
    summary: "A corporate outsourcing site balancing two audiences: enterprise clients evaluating capability, and local talent applying for seats.",
    approach: "We separated the journey early — client services on one path, careers and recruitment on the other — with a consistent, confident visual language for both.",
    features: ["Corporate service architecture", "Recruitment & careers hub", "Capability and process content", "Applicant enquiry flow"],
    image: img.corporate,
    accent: "#38bdf8",
  },
  {
    slug: "sizzle-house",
    name: "Sizzle House Kitchen",
    industry: "Restaurants & Cafés",
    industrySlug: "restaurant-web-design",
    location: "Angeles City",
    summary: "A restaurant site built around the three questions every hungry visitor asks: what's on the menu, are you open, and how do I book.",
    approach: "Structured HTML menus instead of photographed price lists, reservation requests that reach the front desk, and a mobile-first layout for customers deciding where to eat.",
    features: ["Structured menu & prices", "Reservation requests", "Event & catering pages", "Restaurant schema markup"],
    image: img.restaurant,
    accent: "#fbbf24",
  },
  {
    slug: "skyline-hotel",
    name: "Skyline Clark Hotel",
    industry: "Hotels & Resorts",
    industrySlug: "hotel-web-design",
    location: "Clark Freeport Zone",
    summary: "A hospitality design focused on direct bookings, with room clarity that reduces dependence on booking platforms.",
    approach: "Room-type pages with inclusions and rate bands, an easy direct enquiry path, and galleries optimised to stay fast on mobile data.",
    features: ["Room types & inclusions", "Direct booking path", "Optimised galleries", "Weddings & events enquiries"],
    image: img.hotel,
    accent: "#f6c14a",
  },
  {
    slug: "goldenfield-estates",
    name: "Goldenfield Estates",
    industry: "Real Estate",
    industrySlug: "real-estate-web-design",
    location: "San Fernando",
    summary: "A property website where buyers can self-qualify — area, price band, financing and availability — before an agent gets involved.",
    approach: "Structured listing pages with filters, project detail for pre-selling, agent profiles, and enquiry forms that capture intent.",
    features: ["Filterable listings", "Project & payment details", "Agent profiles", "Lead-qualifying enquiry forms"],
    image: img.realestate,
    accent: "#34d399",
  },
  {
    slug: "brightsmile-dental",
    name: "BrightSmile Dental Studio",
    industry: "Dental & Orthodontics",
    industrySlug: "dental-web-design",
    location: "Angeles City",
    summary: "Treatment-focused pages that answer the price, comfort and process questions patients avoid asking directly.",
    approach: "One page per core treatment with steps and expectation-setting, comfort signals placed early, and a short appointment request form.",
    features: ["Per-treatment pages", "Appointment requests", "Comfort & technology content", "Multi-branch structure"],
    image: img.dental,
    accent: "#67e8f9",
    icon: Stethoscope,
  },
  {
    slug: "starlane-logistics",
    name: "Starlane Logistics",
    industry: "Logistics & Trucking",
    industrySlug: "logistics-web-design",
    location: "Mabalacat",
    summary: "Fleet capability and coverage made legible, so shipping buyers can judge fit before requesting a rate.",
    approach: "Fleet listing with capacity bands, route tables written as real content, and a freight quote form capturing the details that matter.",
    features: ["Fleet & capacity listing", "Coverage & route tables", "Freight quote requests", "Warehousing service pages"],
    image: img.logistics,
    accent: "#f97316",
    icon: Truck,
  },
  {
    slug: "ironpeak-builders",
    name: "Ironpeak Builders",
    industry: "Construction",
    industrySlug: "construction-web-design",
    location: "Pampanga",
    summary: "A contractor presence built on evidence — projects, capacity, compliance and a quotation flow that filters enquiries.",
    approach: "Project portfolio organised by category, licensing and safety content for corporate buyers, and a scope-aware quotation form.",
    features: ["Project portfolio", "Licenses & compliance", "RFQ form", "Careers for skilled trades"],
    image: img.construction,
    accent: "#facc15",
    icon: ClipboardList,
  },
  {
    slug: "northvale-clinic",
    name: "Northvale Medical Clinic",
    industry: "Clinics & Medical",
    industrySlug: "clinic-web-design",
    location: "San Fernando",
    summary: "Clear services, doctor schedules and HMO information that answer the practical questions patients call to ask.",
    approach: "Service pages written for patients, appointment request forms routing to the front desk, and branch details with hours and directions.",
    features: ["Service pages", "Appointment requests", "Doctor profiles & schedules", "HMO & payment info"],
    image: img.clinic,
    accent: "#4ade80",
    icon: HeartPulse,
  },
  {
    slug: "verdant-property",
    name: "Verdant Property Group",
    industry: "Real Estate",
    industrySlug: "real-estate-web-design",
    location: "Mexico",
    summary: "A subdivision and lot sales presence focused on clarity — areas, price ranges, terms and availability.",
    approach: "Comparison-friendly listing layouts, financing explanation, and enquiry forms that capture budget range and timeline up front.",
    features: ["Listing comparison layouts", "Financing explainers", "Site development pages", "Buyer qualification forms"],
    image: img.property,
    accent: "#2dd4bf",
    icon: Home,
  },
  {
    slug: "tradeline-supply",
    name: "Tradeline Industrial Supply",
    industry: "Manufacturing & Supply",
    industrySlug: "manufacturing-web-design",
    location: "Guagua",
    summary: "A supply business presenting catalogue depth and trade terms without publishing prices that change weekly.",
    approach: "Catalogue structure by category with specification detail, plus a trade enquiry path for volume pricing and lead times.",
    features: ["Category catalogue", "Specification detail", "Trade enquiry flow", "Downloadable product lists"],
    icon: Building2,
    accent: "#93c5fd",
  },
];

export const featuredProjects = projects.slice(0, 4);
export const conceptProjects = projects.slice(4);
