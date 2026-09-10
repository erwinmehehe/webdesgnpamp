import type { LucideIcon } from "lucide-react";
import {
  Building2,
  ClipboardList,
  Factory,
  HeartPulse,
  Home,
  Hotel,
  Stethoscope,
  Truck,
  UtensilsCrossed,
} from "lucide-react";

export interface Industry {
  slug: string;
  name: string;
  shortName: string;
  icon: LucideIcon;
  area: string;
  blurb: string;
  h1: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  challenges: { title: string; description: string }[];
  builds: { title: string; description: string }[];
  features: string[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
  relatedIndustries: string[];
}

export const industries: Industry[] = [
  {
    slug: "bpo-web-design-clark",
    name: "BPO & Outsourcing Web Design",
    shortName: "BPO & Outsourcing",
    icon: Building2,
    area: "Clark Freeport Zone & Metro Clark",
    blurb: "Sites that win client contracts and fill seats — two audiences, one credible platform.",
    h1: "BPO websites in Clark that win clients and fill seats.",
    intro: "A BPO website has two jobs: convincing overseas clients you're credible and capable, and convincing local talent you're worth applying to. We design corporate sites that serve both audiences without compromising either.",
    metaTitle: "BPO Web Design Clark | Corporate & Recruitment Websites",
    metaDescription: "BPO web design in Clark Freeport Zone. Corporate service pages, recruitment structure and applicant flows.",
    challenges: [
      { title: "Clients need proof, fast", description: "Buyers evaluate offshore partners quickly. Without clear service lines, capacity and credibility signals, you're dismissed before a call." },
      { title: "Recruitment runs 24/7", description: "Hiring never stops, but a generic careers page with a PDF form wastes the traffic you're already paying for." },
      { title: "Outgrown one-page setups", description: "Sites built for a 20-seat startup don't scale into multi-service operations with hundreds of staff." },
    ],
    builds: [
      { title: "Corporate service architecture", description: "Distinct pages for each service line with capability and process detail." },
      { title: "Recruitment and careers hub", description: "Role-based job listings, location and shift information, and an application flow that completes." },
      { title: "Proof and process sections", description: "Security, compliance, infrastructure and engagement models in a form decision-makers trust." },
      { title: "Applicant tracking integration", description: "Forms that feed your ATS or a structured inbox, so teams aren't retyping emails." },
    ],
    features: ["Multi-service corporate structure", "Careers portal with role listings", "Application forms with file upload", "Shift, site and benefits information", "Case studies and capability statements", "Multilingual support (EN / Filipino / Korean)", "Job feed integration", "Analytics on client vs. applicant journeys"],
    faqs: [
      { question: "Can the site separate client and applicant journeys?", answer: "Yes — and it should. Two clear paths from the homepage: one for enterprise clients, one for applicants, each with its own navigation, forms and tracking." },
      { question: "Do you integrate with applicant tracking systems?", answer: "Commonly yes. We connect forms to your ATS, Google Sheets or a structured inbox, mapped with you before building." },
      { question: "We already have a corporate site overseas. Can you handle local recruitment?", answer: "That's common. We build a Pampanga recruitment microsite localised for Philippine applicants while staying consistent with your global brand." },
    ],
    relatedServices: ["web-design", "web-development", "seo-services"],
    relatedIndustries: ["logistics-web-design", "manufacturing-web-design", "real-estate-web-design"],
  },
  {
    slug: "restaurant-web-design",
    name: "Restaurant Web Design",
    shortName: "Restaurants & Cafés",
    icon: UtensilsCrossed,
    area: "Angeles City, San Fernando & across Pampanga",
    blurb: "Menus, reservations and the online presence that matches your food.",
    h1: "Restaurant websites that turn hungry browsers into reservations.",
    intro: "Pampanga has one of the strongest food cultures in the country, and customers search before they travel. A restaurant website should answer three things instantly — what you serve, when you're open, and how to book — then get out of the way.",
    metaTitle: "Restaurant Web Design Pampanga | Menu & Reservation Websites",
    metaDescription: "Restaurant web design in Pampanga. Menus, reservations, delivery links and local SEO.",
    challenges: [
      { title: "Menus trapped in images", description: "When the menu is a photo of a printed page, it's unreadable on mobile and invisible to Google." },
      { title: "Bookings get lost in DMs", description: "Reservations scattered across comments and messages mean double bookings and dropped requests." },
      { title: "No reason to choose you", description: "Without your story, bestsellers and event details, your site looks like every other listing nearby." },
    ],
    builds: [
      { title: "Readable, structured menus", description: "Proper HTML menus with categories, prices and descriptions — searchable, updatable, easy to scan." },
      { title: "Reservation requests that work", description: "Simple booking forms with confirmation emails, plus WhatsApp for walk-in inquiries." },
      { title: "Location and hours clarity", description: "Embedded map, parking tips, landmarks and hours shown where visitors look first." },
      { title: "Events and function enquiries", description: "Dedicated pages for private dining, catering and functions — high-value bookings restaurants miss online." },
    ],
    features: ["Structured menu with categories & prices", "Reservation request forms", "WhatsApp and Messenger click-to-chat", "Delivery platform links", "Photo gallery optimised for large images", "Google Business Profile integration", "Events & catering enquiry pages", "Restaurant schema for search results"],
    faqs: [
      { question: "Can we update the menu ourselves?", answer: "Yes. Prices, dishes and availability can be edited in minutes from a phone. Specials and sold-out items shouldn't need a developer." },
      { question: "Do you handle online delivery links?", answer: "We add clear links to your preferred platforms, or help you take direct orders. Many restaurants see better margins pushing direct orders." },
      { question: "Is a website necessary if we're busy on social media?", answer: "Social gets people to your page; a website seals the decision. It's the one place you control — and it's what shows up when people search your name." },
    ],
    relatedServices: ["web-design", "local-seo", "website-maintenance"],
    relatedIndustries: ["hotel-web-design", "clinic-web-design", "real-estate-web-design"],
  },
  {
    slug: "hotel-web-design",
    name: "Hotel & Resort Web Design",
    shortName: "Hotels & Resorts",
    icon: Hotel,
    area: "Clark, Angeles City & Pampanga",
    blurb: "Direct bookings, fewer commissions, and a stay that looks worth the trip.",
    h1: "Hotel websites that earn direct bookings, not just viewings.",
    intro: "Every guest who books through an agent costs you commission. A hotel website built for direct booking — clear rooms, honest rates, fast mobile flow and trust signals — slowly reshapes where your reservations come from.",
    metaTitle: "Hotel Web Design Pampanga | Direct Booking Websites",
    metaDescription: "Hotel and resort web design in Clark and Pampanga. Room pages, direct booking flow, amenities content.",
    challenges: [
      { title: "OTA dependency", description: "Platforms bring volume but take a cut from every stay, and they own the guest relationship." },
      { title: "Rooms shown poorly", description: "If room types, inclusions and rates aren't clear, guests book elsewhere." },
      { title: "Slow, image-heavy pages", description: "Large unoptimised galleries feel luxurious on a laptop and unusable on a phone." },
    ],
    builds: [
      { title: "Room and rate clarity", description: "Room-type pages with capacity, inclusions, images and rate bands so guests decide confidently." },
      { title: "Direct booking flow", description: "Availability enquiry or integrated booking engine, positioned as the easiest option on the page." },
      { title: "Facilities and experience content", description: "Pool, events, dining, meetings and nearby attractions — what guests evaluate before committing." },
      { title: "Local and events demand", description: "Pages for weddings, corporate functions and Clark visitors — higher-value bookings OTAs underserve." },
    ],
    features: ["Room type pages with inclusions", "Direct booking enquiry or booking engine", "Optimised photo galleries", "Amenities and facilities detail", "Weddings & events enquiry pages", "Location and travel guidance", "Multilingual support for foreign guests", "Hotel schema and review integration"],
    faqs: [
      { question: "Can we link our existing booking engine?", answer: "Yes. We integrate the engine or channel manager you use and design the surrounding pages so booking feels natural." },
      { question: "How do you handle large photo galleries?", answer: "Images are resized, compressed and lazy-loaded — fast on mobile data while still high-end on large screens." },
      { question: "Will this reduce our OTA bookings?", answer: "Mostly it adds to them. Direct bookings grow alongside platform volume, and you keep the guest data and repeat stays." },
    ],
    relatedServices: ["web-design", "local-seo", "web-development"],
    relatedIndustries: ["restaurant-web-design", "real-estate-web-design", "logistics-web-design"],
  },
  {
    slug: "clinic-web-design",
    name: "Clinic & Medical Web Design",
    shortName: "Clinics & Medical",
    icon: HeartPulse,
    area: "Angeles City, San Fernando & Mabalacat",
    blurb: "Services, schedules and booking made clear and compliant.",
    h1: "Clinic websites that make booking care feel simple.",
    intro: "Patients arrive anxious and in a hurry. A clinic website should reassure in seconds: what you treat, who the doctor is, when you're open, and how to book — with the privacy and clarity families expect.",
    metaTitle: "Clinic Web Design Pampanga | Medical & Healthcare Websites",
    metaDescription: "Clinic web design for Pampanga. Service pages, doctor profiles, appointment requests and schedules.",
    challenges: [
      { title: "Appointments by chat only", description: "Coordinating through messaging apps overloads staff and loses patients who won't wait for a reply." },
      { title: "Unclear services", description: "Patients can't tell whether you offer their procedure, whether HMO applies, or what to bring." },
      { title: "Outdated health presence", description: "An old site undermines the trust that equipment, credentials and care have earned." },
    ],
    builds: [
      { title: "Service and procedure pages", description: "Clear explanations of what's offered and how the process works — written for patients." },
      { title: "Appointment request flows", description: "Structured forms capturing details and preferred dates, routed straight to your front desk." },
      { title: "Doctor and team profiles", description: "Credentials, specialisations and schedules so patients choose confidently." },
      { title: "Practical patient information", description: "HMO and payment details, hours, preparation instructions, directions and parking." },
    ],
    features: ["Treatment and service pages", "Online appointment request forms", "Doctor profiles and schedules", "HMO, insurance and payment info", "Location, parking and directions", "Patient preparation instructions", "MedicalClinic schema markup", "Branches and multi-location support"],
    faqs: [
      { question: "Is online booking safe for patient data?", answer: "We use minimum necessary data: name, contact, schedule and service type. Sensitive clinical information never goes through the website form." },
      { question: "Can you show multiple branches or doctors?", answer: "Yes. Each branch can have its own page, details and appointment routing within one consistent structure." },
      { question: "Do clinic websites need SEO?", answer: "Badly. Patients search by procedure and location. Proper service and location pages are what make those searches find you." },
    ],
    relatedServices: ["local-seo", "web-design", "website-maintenance"],
    relatedIndustries: ["dental-web-design", "hotel-web-design", "restaurant-web-design"],
  },
  {
    slug: "dental-web-design",
    name: "Dental & Orthodontic Web Design",
    shortName: "Dental & Orthodontics",
    icon: Stethoscope,
    area: "Angeles City, San Fernando & across Pampanga",
    blurb: "Treatment pages, trust signals and appointment requests that convert.",
    h1: "Dental websites that make patients book the consultation.",
    intro: "Dental marketing is trust work. Patients compare a few practices, look for evidence of skill and comfort, then check price signals. Your website has to answer those unspoken questions before the first visit.",
    metaTitle: "Dental Web Design Pampanga | Dental Practice Websites",
    metaDescription: "Dental web design in Pampanga. Treatment pages, appointment requests and local SEO.",
    challenges: [
      { title: "Price and process opacity", description: "When nobody explains ranges or steps, patients postpone treatment indefinitely." },
      { title: "Fear and hesitation", description: "Comfort and gentle-care signals are rarely communicated, so anxious patients delay." },
      { title: "Weak digital proof", description: "Reviews, certifications and case photos sit unused while competitors present them clearly." },
    ],
    builds: [
      { title: "Treatment pages that educate", description: "Dedicated pages for implants, orthodontics, whitening and more — with steps and expectations." },
      { title: "Appointment and inquiry flow", description: "Booking requests and free-consultation offers that reduce phone-tag with the front desk." },
      { title: "Trust architecture", description: "Credentials, reviews, technology and comfort options placed decisively on the page." },
      { title: "Case gallery structure", description: "A clean before-and-after layout that presents results respectfully." },
    ],
    features: ["Per-treatment landing pages", "Appointment request forms", "Before/after case galleries", "Reviews and credentials sections", "Financing and payment guidance", "Multi-branch location pages", "Local SEO for dental keywords", "Dentist schema for search results"],
    faqs: [
      { question: "Should we publish treatment prices?", answer: "Ranges work better than silence. Publishing 'from' prices filters mismatched enquiries and builds trust with serious patients." },
      { question: "Can you build landing pages for ads?", answer: "Yes — focused pages for campaigns, each with its own message, form and conversion tracking." },
      { question: "How do we attract patients outside our barangay?", answer: "Through treatment-specific content and location pages that rank across Pampanga, plus a Google profile that shows in map results." },
    ],
    relatedServices: ["local-seo", "seo-services", "web-design"],
    relatedIndustries: ["clinic-web-design", "restaurant-web-design", "hotel-web-design"],
  },
  {
    slug: "construction-web-design",
    name: "Construction & Contracting Web Design",
    shortName: "Construction",
    icon: ClipboardList,
    area: "Pampanga & Central Luzon",
    blurb: "Project credibility for contractors, builders and suppliers.",
    h1: "Construction websites that win bigger projects.",
    intro: "Contractors win work on evidence: completed projects, proper documentation, safety practices and the ability to handle scale. Your website either confirms you can deliver or casts doubt.",
    metaTitle: "Construction Web Design Pampanga | Contractor Websites",
    metaDescription: "Construction web design in Pampanga. Project portfolios, capability statements and quotation flows.",
    challenges: [
      { title: "No project evidence", description: "Years of quality work with nothing to show online — while weaker competitors present better." },
      { title: "Corporate buyers check first", description: "Developers and enterprises verify you look organised before inviting a bid." },
      { title: "Enquiries arrive as vague DMs", description: "Without structured quote requests, teams spend days qualifying enquiries with no real budget." },
    ],
    builds: [
      { title: "Project portfolio structure", description: "Completed and ongoing works organised by type, scale and location." },
      { title: "Capability and compliance pages", description: "Licences, safety practices, equipment and manpower in the format corporate buyers expect." },
      { title: "Structured quotation flow", description: "Scope-aware request forms so leads arrive qualified." },
      { title: "Service category pages", description: "Separate pages for residential, commercial, fit-out or civil works — matching how buyers search." },
    ],
    features: ["Project gallery by category", "Licenses and certifications section", "Safety and quality process pages", "Request-for-quotation forms", "Equipment and capacity listing", "Client and supplier logos", "Careers for skilled trades", "Local SEO across Pampanga"],
    faqs: [
      { question: "We don't have professional photos. Is that a problem?", answer: "It's common and solvable. We work with site photos, plan a structure you can add to, and advise when a photographer is worth it for flagships." },
      { question: "Can the website help with bidding?", answer: "Yes. Clear capability, compliance and past-performance information makes you easier to verify and present to procurement teams." },
      { question: "Do we need e-commerce for materials supply?", answer: "Only if you want online ordering. Many suppliers get better results from a structured catalogue with quote requests." },
    ],
    relatedServices: ["web-design", "seo-services", "local-seo"],
    relatedIndustries: ["manufacturing-web-design", "real-estate-web-design", "logistics-web-design"],
  },
  {
    slug: "logistics-web-design",
    name: "Logistics & Trucking Web Design",
    shortName: "Logistics & Trucking",
    icon: Truck,
    area: "Clark, Mabalacat & Central Luzon",
    blurb: "Fleet capability, coverage maps and quote requests that qualify.",
    h1: "Logistics websites that make shipping enquiries flow.",
    intro: "Shippers choose partners on capability and confidence: fleet size, coverage, cargo types, documentation ability and responsiveness. Your website should make a procurement officer believe you can handle their load before they call.",
    metaTitle: "Logistics Web Design Pampanga | Trucking & Freight Websites",
    metaDescription: "Logistics and trucking web design in Clark and Pampanga. Fleet capability, coverage, quote flows.",
    challenges: [
      { title: "Capability is invisible", description: "Fleet counts and coverage stay unstated, so you're judged on price alone." },
      { title: "Quote requests lack detail", description: "Enquiries arrive without origin, destination or cargo type — making accurate quoting impossible." },
      { title: "Corporate shippers need proof", description: "Manufacturers check documentation, tracking capability and reliability before onboarding." },
    ],
    builds: [
      { title: "Fleet and capability pages", description: "Vehicle types, capacity, tonnage and specialisations laid out clearly." },
      { title: "Coverage and network detail", description: "Maps and route descriptions for the lanes you serve reliably." },
      { title: "Structured quote requests", description: "Freight forms capturing pick-up, drop-off, cargo type, weight and schedule." },
      { title: "Client-facing trust content", description: "Accreditations, insurance, safety records and account management process." },
    ],
    features: ["Fleet and equipment listings", "Coverage maps and route tables", "Freight quote request forms", "Warehousing and 3PL service pages", "Accreditations and insurance detail", "Tracking integration guidance", "Client portal or account enquiries", "Careers for drivers and staff"],
    faqs: [
      { question: "Can you show a map of the areas we cover?", answer: "Yes — interactive coverage sections plus text-based route descriptions that search engines can read." },
      { question: "Do you integrate tracking systems?", answer: "We can surface your existing tracking on the site, or design a clean enquiry flow where capacity is limited." },
      { question: "Should we publish rates?", answer: "Generally not. Instead we make quoting fast and transparent: a short form, a stated response time, and clear pricing factors." },
    ],
    relatedServices: ["web-development", "web-design", "seo-services"],
    relatedIndustries: ["manufacturing-web-design", "bpo-web-design-clark", "construction-web-design"],
  },
  {
    slug: "manufacturing-web-design",
    name: "Manufacturing & Industrial Web Design",
    shortName: "Manufacturing",
    icon: Factory,
    area: "Clark, Mabalacat, Porac & industrial zones",
    blurb: "Technical credibility for factories, suppliers and exporters.",
    h1: "Manufacturing websites built for B2B credibility.",
    intro: "Buyers in manufacturing are technical and careful. They read specifications, check certifications, and look for signs you can hold tolerances and deliver on schedule. Your website needs to speak that language precisely.",
    metaTitle: "Manufacturing Web Design Pampanga | Industrial B2B Websites",
    metaDescription: "Manufacturing web design in Pampanga. Capability, certification and specification content.",
    challenges: [
      { title: "Technical buyers need specifics", description: "Without materials, tolerances, capacity and lead times, you're filtered out." },
      { title: "Certifications hidden", description: "ISO, FDA or export documentation is pass/fail — buyers should see it immediately." },
      { title: "Overseas buyers can't verify you", description: "International sourcing teams research factories online long before requesting samples." },
    ],
    builds: [
      { title: "Capability and specification pages", description: "Machines, processes, materials and capacity in a format engineers can evaluate." },
      { title: "Certification and compliance hub", description: "Quality systems and regulatory documentation organised to shorten verification." },
      { title: "Product and capability catalogue", description: "Structured listings with technical detail and downloadable spec sheets." },
      { title: "Export and OEM information", description: "MOQs, lead times, packaging and OEM capability for international buyers." },
    ],
    features: ["Product & capability catalogue", "Technical specification sections", "Certifications and compliance pages", "Downloadable spec sheets", "Request-for-quotation forms", "Plant, equipment and capacity detail", "Facility and virtual tour content", "Multilingual for export markets"],
    faqs: [
      { question: "Can we gate technical documents behind a form?", answer: "Yes, where it makes sense. We balance lead capture with buyer experience: some documents open, some gated." },
      { question: "Do you understand technical product content?", answer: "We work with your engineering or QA team to structure information correctly. Our job is architecture and clarity." },
      { question: "Can the site support multiple distributors?", answer: "Yes. Distributor listings, region-specific information and multilingual versions within one consistent brand." },
    ],
    relatedServices: ["web-development", "seo-services", "ecommerce-web-design"],
    relatedIndustries: ["logistics-web-design", "construction-web-design", "bpo-web-design-clark"],
  },
  {
    slug: "real-estate-web-design",
    name: "Real Estate Web Design",
    shortName: "Real Estate & Property",
    icon: Home,
    area: "San Fernando, Angeles City & across Pampanga",
    blurb: "Listings, project pages and lead capture that keep selling.",
    h1: "Real estate websites that capture buyers before the viewing.",
    intro: "Buyers research for weeks on their phones. A website that presents listings clearly — location, price band, financing and a fast way to inquire — keeps you in the conversation through a long decision cycle.",
    metaTitle: "Real Estate Web Design Pampanga | Property & Listing Websites",
    metaDescription: "Real estate web design in Pampanga. Listings, project pages, agent profiles and lead capture.",
    challenges: [
      { title: "Listings everywhere, nowhere", description: "Properties across groups and marketplaces with no consistent place to send serious buyers." },
      { title: "Buyers can't self-qualify", description: "Without clear price bands, areas and financing, agents field endless unqualified inquiries." },
      { title: "Developers need project credibility", description: "Pre-selling requires confidence: master plans, unit types, payment terms and progress updates." },
    ],
    builds: [
      { title: "Structured listing system", description: "Listings with images, area, price, features and status — filterable, shareable, easy to update." },
      { title: "Project and developer pages", description: "Master plan, unit types, amenities and payment schemes for buyers and investors." },
      { title: "Lead capture that qualifies", description: "Inquiry forms capturing intent, budget range and timeline, with instant agent notifications." },
      { title: "Agent and team profiles", description: "Named contacts with direct paths to call, message or schedule a viewing." },
    ],
    features: ["Property listings with filters", "Project & pre-selling pages", "Inquiry and viewing request forms", "Payment terms and financing options", "Agent profiles and contacts", "Map-based location context", "Saved-search or alert setup", "RealEstateListing schema markup"],
    faqs: [
      { question: "Can listings be updated without a developer?", answer: "Yes. Add photos, prices, areas and status yourself — sold or reserved in seconds." },
      { question: "Do you connect to property portals?", answer: "We structure listings so they're easy to export and sync with the portals you use most." },
      { question: "Can we track which listings generate inquiries?", answer: "Yes. Per-listing and per-page tracking shows which properties draw attention and which channels bring buyers." },
    ],
    relatedServices: ["web-design", "local-seo", "web-development"],
    relatedIndustries: ["construction-web-design", "hotel-web-design", "bpo-web-design-clark"],
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
