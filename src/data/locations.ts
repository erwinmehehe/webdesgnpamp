export interface LocationPage {
  slug: string;
  name: string;
  shortName: string;
  region: string;
  h1: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  context: string[];
  highlights: { title: string; description: string }[];
  businessTypes: string[];
  nearby: string[];
  faqs: { question: string; answer: string }[];
}

const stdFaqs = (town: string) => [
  {
    question: `Do you meet clients in ${town}?`,
    answer: `Yes. Discovery meetings and design reviews can happen at your office, a nearby café, or on a call. For larger projects we schedule on-site reviews at key milestones.`,
  },
  {
    question: "How much does a business website cost?",
    answer: "Most projects start at ₱30,000 for a focused business website and around ₱50,000 for an expanded multi-service site. Larger custom builds are quoted per project after a short discovery call.",
  },
  {
    question: "How quickly can our website go live?",
    answer: "A focused business website usually takes three to four weeks from kickoff, assuming content and feedback move at a normal pace. We'll give you a realistic timeline in writing before you commit.",
  },
];

export const locations: LocationPage[] = [
  {
    slug: "clark-pampanga",
    name: "Clark Freeport Zone",
    shortName: "Clark",
    region: "Metro Clark · Pampanga",
    h1: "Web design in Clark Freeport Zone for businesses that look the part.",
    intro: "Clark companies compete with corporations, international brands and Manila firms for the same clients. A well structured, fast, credible website is the cheapest way to look like you belong in that group.",
    metaTitle: "Web Design Clark Pampanga | Websites for Clark Businesses",
    metaDescription: "Web design in Clark Freeport Zone. Corporate, BPO, hotel, logistics and retail websites.",
    context: [
      "Clark Freeport Zone hosts an unusual mix: outsourcing campuses, international hotels, logistics hubs, restaurants, clinics and retail. Each category has different customers and a different decision process, so a single generic layout rarely works for all of them.",
      "We work with Clark businesses on two fronts: credibility for corporate buyers who verify you online, and recruitment — because Clark teams hire constantly and a clear careers experience directly affects applicant quality.",
    ],
    highlights: [
      { title: "Corporate & enterprise buyers", description: "Structured service, capability and compliance content that supports procurement conversations." },
      { title: "Recruitment at scale", description: "Careers structure, role listings and application flows for companies filling seats every month." },
      { title: "Hospitality & tourism visibility", description: "Hotels, restaurants and activities designed for direct bookings and travellers searching Clark." },
    ],
    businessTypes: ["BPO & outsourcing", "Hotels & resorts", "Logistics & freight", "Manufacturing", "Aviation services", "Restaurants & cafés"],
    nearby: ["Angeles City", "Mabalacat", "San Fernando", "Porac"],
    faqs: stdFaqs("Clark"),
  },
  {
    slug: "angeles-city",
    name: "Angeles City",
    shortName: "Angeles",
    region: "Pampanga",
    h1: "Web design in Angeles City where competition for attention is fierce.",
    intro: "From the food scene to clinics, hotels and retail, Angeles businesses sell to an audience that decides on first impressions. Your website is the piece of your digital presence you fully control — it should look better and load faster than the competition.",
    metaTitle: "Web Design Angeles City | Websites for Angeles Businesses",
    metaDescription: "Web design in Angeles City, Pampanga. Restaurant, clinic, retail, hotel and service websites.",
    context: [
      "Angeles has one of the densest small-business markets in Central Luzon, with a strong food culture, a large hospitality base, established medical practices and a significant international community. Customers here compare options quickly on their phones.",
      "The businesses that win usually have a clear offer, visible reviews, and a website that answers 'what is this, how much, and how do I book' without friction.",
    ],
    highlights: [
      { title: "Menus, bookings and walk-ins", description: "Restaurants, cafés and bars with readable menus, reservation requests and event enquiries." },
      { title: "Local search that converts", description: "Google Business Profile and location pages structured so you appear when people search nearby." },
      { title: "Service businesses that look established", description: "Clinics, salons, studios and trades presented with the credibility customers look for." },
    ],
    businessTypes: ["Restaurants & bars", "Clinics & dental", "Hotels & apartments", "Salons & wellness", "Retail & shops", "Professional services"],
    nearby: ["Clark Freeport Zone", "Mabalacat", "Porac", "San Fernando"],
    faqs: stdFaqs("Angeles City"),
  },
  {
    slug: "san-fernando-pampanga",
    name: "San Fernando",
    shortName: "San Fernando",
    region: "Pampanga (provincial capital)",
    h1: "Web design in San Fernando for the province's professionals and enterprises.",
    intro: "As the provincial capital, San Fernando concentrates government, education, healthcare, real estate and professional services. Buyers here are deliberate — they read, compare and ask — which makes clear structure and honest content more valuable than flash.",
    metaTitle: "Web Design San Fernando Pampanga | Business Website Design",
    metaDescription: "Web design in San Fernando, Pampanga. Professional services, real estate, healthcare websites.",
    context: [
      "San Fernando's economy runs on relationships and reputation: law and accounting practices, clinics and hospitals, schools, real estate brokers and family businesses. These are categories where credibility signals matter more than discounts.",
      "That means the website has to carry proof — credentials, specialisations, projects, service standards — and make it easy for a serious client to start a conversation.",
    ],
    highlights: [
      { title: "Professional services credibility", description: "Practice pages, team profiles, credentials and clear service scopes for firms judged on trust." },
      { title: "Real estate and project marketing", description: "Listings and pre-selling projects with financing, area and availability detail." },
      { title: "Healthcare and education", description: "Schedules, services, enrolment or appointment flows that patients and parents need." },
    ],
    businessTypes: ["Legal & accounting", "Real estate", "Clinics & hospitals", "Schools & learning centres", "Contractors & suppliers", "Retail & wholesalers"],
    nearby: ["Bacolor", "Mexico", "Angeles City", "Mabalacat"],
    faqs: stdFaqs("San Fernando"),
  },
  {
    slug: "mabalacat",
    name: "Mabalacat",
    shortName: "Mabalacat",
    region: "Pampanga",
    h1: "Web design in Mabalacat for businesses on the Clark gateway.",
    intro: "Mabalacat sits between Clark's industrial zones and fast-growing residential districts. Visibility in local search matters more every year as the population and competition grow.",
    metaTitle: "Web Design Mabalacat | Pampanga Business Websites",
    metaDescription: "Web design in Mabalacat, Pampanga. Suppliers, retail, clinics, logistics and family businesses.",
    context: [
      "With subdivisions, schools and commercial areas expanding steadily, Mabalacat businesses increasingly serve customers who moved in recently and discover everything through search.",
      "We build sites that answer those questions clearly and make the first contact easy — for customers, and for corporate buyers sourcing local suppliers.",
    ],
    highlights: [
      { title: "Suppliers and trades", description: "Structured catalogues, service areas and quotation flows." },
      { title: "Retail and deliveries", description: "Clear stock, delivery coverage and payment options matched to how customers buy." },
      { title: "Local service visibility", description: "Medical, salon, tutoring and repair services positioned to win neighbourhood searches." },
    ],
    businessTypes: ["Suppliers & trading", "Retail & food", "Clinics & wellness", "Logistics & hauling", "Contractors", "Schools & tutoring"],
    nearby: ["Clark Freeport Zone", "Angeles City", "San Fernando"],
    faqs: stdFaqs("Mabalacat"),
  },
  {
    slug: "bacolor-pampanga",
    name: "Bacolor",
    shortName: "Bacolor",
    region: "Pampanga",
    h1: "Web design in Bacolor for heritage businesses with modern ambitions.",
    intro: "Bacolor combines a strong cultural identity with active manufacturing, trading and food businesses. That dual identity is an advantage online — but only if the website presents it with clarity and quality.",
    metaTitle: "Web Design Bacolor Pampanga | Local Business Websites",
    metaDescription: "Web design in Bacolor, Pampanga. Manufacturers, food producers, traders and cultural businesses.",
    context: [
      "Bacolor businesses usually trade across municipal lines — into San Fernando, Guagua and beyond — so the site needs to communicate reach as clearly as identity.",
      "We help local businesses tell their story properly while giving B2B buyers the operational information they need to shortlist you.",
    ],
    highlights: [
      { title: "Production & capacity detail", description: "Volume, certification and lead times presented to wholesale buyers." },
      { title: "Culture and heritage marketing", description: "Local events, crafts and tourism designed to draw visitors." },
      { title: "Wholesale enquiry flows", description: "Distributor forms capturing business type, volume and delivery area." },
    ],
    businessTypes: ["Food production", "Manufacturing", "Agricultural trading", "Wholesale & distribution", "Heritage & tourism", "Retail"],
    nearby: ["San Fernando", "Guagua", "Mexico"],
    faqs: stdFaqs("Bacolor"),
  },
  {
    slug: "guagua-pampanga",
    name: "Guagua",
    shortName: "Guagua",
    region: "Pampanga",
    h1: "Web design in Guagua for the trading hub of western Pampanga.",
    intro: "Guagua has long been a commercial centre for western Pampanga — retail, agri-trade, food and services serving neighbouring municipalities. For businesses with that reach, the website should signal scale and reliability.",
    metaTitle: "Web Design Guagua Pampanga | Business Websites",
    metaDescription: "Web design in Guagua, Pampanga. Traders, agri-business, food producers, retail and services.",
    context: [
      "Because Guagua customers come from across the district, search visibility across nearby towns genuinely changes revenue.",
      "For agri and trading businesses, buyers want specifics: stock availability, packaging, pricing terms and delivery schedules.",
    ],
    highlights: [
      { title: "Agri and trading catalogues", description: "Products, packaging, volumes and terms structured for wholesale buyers." },
      { title: "Wider district reach", description: "Coverage pages that speak to customers in neighbouring towns." },
      { title: "Retail and food presence", description: "Modern storefronts online with hours, location and clear contact options." },
    ],
    businessTypes: ["Agri-trading", "Food producers", "Wholesale & retail", "Hardware & supplies", "Services & repair", "Clinics & pharmacies"],
    nearby: ["Bacolor", "San Fernando"],
    faqs: stdFaqs("Guagua"),
  },
  {
    slug: "mexico-pampanga",
    name: "Mexico",
    shortName: "Mexico",
    region: "Pampanga",
    h1: "Web design in Mexico, Pampanga for growing local businesses.",
    intro: "Mexico combines agriculture, growing residential districts and businesses serving the industrial corridor. The businesses that grow fastest are the ones that become easy to find and easy to trust online.",
    metaTitle: "Web Design Mexico Pampanga | Local Business Websites",
    metaDescription: "Web design in Mexico, Pampanga. Agricultural businesses, food, retail, services and schools.",
    context: [
      "Much of Mexico's economy runs through relationships — a strength. But new residents and corporate buyers start their search online.",
      "We keep builds practical: clear services, real photos, honest pricing guidance, working contact paths, and foundations ready for growth.",
    ],
    highlights: [
      { title: "Agricultural and food businesses", description: "Production capacity, packaging and buyer enquiries for trade customers." },
      { title: "Schools and local services", description: "Enrolment information, schedules and service detail." },
      { title: "Growth-ready foundations", description: "A structure that can add branches, products or campaigns later." },
    ],
    businessTypes: ["Agriculture & aquaculture", "Food production", "Schools & learning centres", "Retail & services", "Contractors", "Transport"],
    nearby: ["San Fernando", "Bacolor"],
    faqs: stdFaqs("Mexico"),
  },
  {
    slug: "porac-pampanga",
    name: "Porac",
    shortName: "Porac",
    region: "Pampanga",
    h1: "Web design in Porac for industrial, logistics and eco-tourism businesses.",
    intro: "Porac mixes industrial parks and warehousing with eco-tourism and outdoor destinations. These audiences expect very different things — and both need precise information.",
    metaTitle: "Web Design Porac Pampanga | Industrial & Tourism Websites",
    metaDescription: "Web design in Porac, Pampanga. Industrial estates, logistics, warehousing, suppliers, eco-tourism.",
    context: [
      "Industrial and logistics clients evaluate capacity, coverage and compliance before anything else, while tourism customers want to know the experience, the cost, and how to book.",
      "We design for that split — specifications for trade buyers, clear booking information for visitors.",
    ],
    highlights: [
      { title: "Industrial and logistics capability", description: "Capacity, coverage, equipment and compliance for corporate buyers." },
      { title: "Tourism and adventure bookings", description: "Activity pages with inclusions, rates, schedules and enquiry flows." },
      { title: "Supplier visibility", description: "Parts and supply businesses structured for purchasing teams." },
    ],
    businessTypes: ["Industrial & warehousing", "Logistics & hauling", "Construction suppliers", "Eco-tourism & adventure", "Farm & agri-business", "Food & accommodation"],
    nearby: ["Angeles City", "Mabalacat"],
    faqs: stdFaqs("Porac"),
  },
];

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);
