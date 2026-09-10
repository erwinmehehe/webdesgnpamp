import type { LucideIcon } from "lucide-react";
import {
  Gauge,
  LayoutTemplate,
  LifeBuoy,
  MapPin,
  Palette,
  ShoppingCart,
  TrendingUp,
  Wrench,
} from "lucide-react";

export interface Service {
  slug: string;
  name: string;
  short: string;
  icon: LucideIcon;
  eyebrow: string;
  h1: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  priceNote: string;
  outcomes: { title: string; description: string }[];
  includes: string[];
  idealFor: string[];
  faqs: { question: string; answer: string }[];
  relatedIndustries: string[];
  relatedServices: string[];
}

export const services: Service[] = [
  {
    slug: "web-design",
    name: "Web Design",
    short: "Custom design built around your customers",
    icon: Palette,
    eyebrow: "Web design · Pampanga",
    h1: "Web design that makes your business look worth contacting.",
    intro:
      "We design sites around the questions your customers actually ask — what you do, who it's for, how much it costs, and how to reach you. The result is a website that feels considered on desktop, effortless on mobile, and obvious about the next step.",
    metaTitle: "Web Design Pampanga | Custom Business Website Design",
    metaDescription: "Custom web design for Pampanga businesses. Clear messaging, mobile-first layouts and conversion-focused structure.",
    priceNote: "Usually a Starter or Business Website",
    outcomes: [
      { title: "Designed around your customer", description: "Every section answers a real question a customer has before they get in touch — instead of decorating a page and hoping." },
      { title: "Custom, never templated", description: "Your layout, type, colour and imagery are built for your brand. We don't resell the same theme to fifty local businesses." },
      { title: "Conversion paths built in", description: "Clear calls to action, visible contact details, and forms that match how people in Pampanga actually reach out." },
      { title: "A system you can grow into", description: "Consistent components mean new services, branches or campaigns can be added later without the site falling apart." },
    ],
    includes: ["Discovery session & site structure plan", "Page-by-page wireframes before design", "Custom visual design, not a purchased theme", "Mobile, tablet and desktop layouts", "Headline & messaging guidance", "Reusable design system for future pages", "Design review rounds with your feedback"],
    idealFor: ["New businesses that need a credible first website", "Established businesses whose site looks a decade old", "Companies rebranding or launching new services", "Teams whose website no longer explains what they sell"],
    faqs: [
      { question: "What does custom web design actually mean?", answer: "The layout, typography, colour, imagery and page flow are created for your business — not applied from a marketplace theme. You get a design direction that suits your industry and your customers." },
      { question: "How many design revisions are included?", answer: "You review the structure before design starts, then review the design in rounds. Small tweaks are unlimited within the agreed direction; a full change of direction after approval is quoted separately." },
      { question: "Do you write the content too?", answer: "We guide it — headlines, structure and what each page needs. Full copywriting is available as an add-on, and many clients supply service details while we handle the framing." },
    ],
    relatedIndustries: ["restaurant-web-design", "dental-web-design", "construction-web-design"],
    relatedServices: ["web-development", "website-redesign", "local-seo"],
  },
  {
    slug: "web-development",
    name: "Web Development",
    short: "Fast, clean builds that behave properly",
    icon: Gauge,
    eyebrow: "Web development · Pampanga",
    h1: "Clean, fast websites that work properly on every device.",
    intro:
      "Design gets noticed, but the build decides whether the site actually performs. We develop responsive, lightweight front-ends with forms, integrations and tracking that function the way they should — including on the average mobile connection in Pampanga.",
    metaTitle: "Web Development Pampanga | Fast, Responsive Website Builds",
    metaDescription: "Web development in Pampanga: responsive builds, fast loading, working forms and integrations.",
    priceNote: "Quoted per project based on scope",
    outcomes: [
      { title: "Speed that keeps people on the page", description: "Compressed images, sensible scripts and lean markup — because local mobile data punishes heavy websites." },
      { title: "Forms and integrations that work", description: "Inquiry forms, booking requests, chat links and analytics wired up correctly and tested with real submissions." },
      { title: "Easy to maintain later", description: "Organised structure and clean conventions so the site stays quick and predictable as you add to it." },
      { title: "Tested on real devices", description: "We check across phones, tablets and desktops — plus the browsers and connection speeds your customers actually use." },
    ],
    includes: ["Responsive front-end development", "Contact, inquiry and booking form setup", "Email notifications and auto-replies", "WhatsApp, Messenger and phone click-paths", "Analytics, Search Console and tag setup", "Accessibility and semantic markup basics", "Cross-browser and device QA before launch"],
    idealFor: ["Businesses ready to move from design into a real build", "Sites with broken forms or untracked enquiries", "Companies needing booking, quoting or application flows", "Teams frustrated by slow or unstable websites"],
    faqs: [
      { question: "What technology do you build with?", answer: "For most business websites we build on a maintainable CMS so you can edit content yourself. For larger or highly customised sites we hand-code the front-end and connect the pieces you need." },
      { question: "Will my site be fast?", answer: "Performance is part of the build. We compress and size images properly, keep scripts lean, and test against PageSpeed and real-device load times before launch." },
      { question: "Can you connect forms to our existing tools?", answer: "Yes — email, Google Sheets, CRMs, applicant tracking and email marketing tools are all common integrations. If it has an API or a plugin, there's usually a clean way to connect it." },
    ],
    relatedIndustries: ["bpo-web-design-clark", "logistics-web-design", "manufacturing-web-design"],
    relatedServices: ["web-design", "ecommerce-web-design", "website-maintenance"],
  },
  {
    slug: "wordpress-web-design",
    name: "WordPress Web Design",
    short: "Sites you can confidently update yourself",
    icon: LayoutTemplate,
    eyebrow: "WordPress · Pampanga",
    h1: "WordPress websites you can actually update yourself.",
    intro:
      "WordPress powers a large share of the web for a reason — but a badly configured site is a security and speed headache. We design custom WordPress builds with an editing experience simple enough that you'll genuinely use it.",
    metaTitle: "WordPress Web Design Pampanga | Custom WordPress Sites",
    metaDescription: "Custom WordPress web design in Pampanga. Editable, secure, fast websites with training included.",
    priceNote: "Ideal for Starter and Business Websites",
    outcomes: [
      { title: "Edit your own content safely", description: "A tidy editing experience where changing a price, photo or paragraph takes minutes — not a support ticket." },
      { title: "Custom design, real platform", description: "The reliability and tooling of WordPress, with a design that looks nothing like a default theme." },
      { title: "Security you don't have to think about", description: "Hardened setup, sensible plugins only, and a maintenance routine that keeps the site updated." },
      { title: "Room to grow", description: "Blog, careers, listings or ecommerce can be layered in later without rebuilding from scratch." },
    ],
    includes: ["Custom WordPress theme design & build", "Simple block-based editing setup", "Training session plus written notes", "Security hardening and spam protection", "Plugin audit — only what earns its place", "Backup and restore configuration", "Staging site for safe future changes"],
    idealFor: ["Businesses that want to post news or offers themselves", "Companies replacing a WordPress theme that broke", "Teams with a blog, careers page or listings to manage", "Owners who want independence from their developer"],
    faqs: [
      { question: "Will I be able to update it myself?", answer: "That's the point. We hand over a straightforward editing layout plus a walkthrough. If you'd rather not touch it, our maintenance plans cover ongoing edits." },
      { question: "Why do some WordPress sites become slow?", answer: "Usually heavy page builders, too many plugins, oversized images and cheap hosting. We avoid bloated builders, keep plugins to essentials, and recommend hosting that fits your traffic." },
      { question: "Is WordPress secure?", answer: "Core WordPress is well maintained; problems come from neglected installs and abandoned plugins. We harden the setup and keep everything updated — via a care plan or a schedule we teach you." },
    ],
    relatedIndustries: ["clinic-web-design", "restaurant-web-design", "real-estate-web-design"],
    relatedServices: ["web-design", "website-maintenance", "seo-services"],
  },
  {
    slug: "ecommerce-web-design",
    name: "E-commerce Web Design",
    short: "Online stores built to make buying easy",
    icon: ShoppingCart,
    eyebrow: "E-commerce · Pampanga",
    h1: "E-commerce websites that make buying simple.",
    intro:
      "Selling online in the Philippines means meeting customers where they are: browsing on a phone, paying with GCash or bank transfer, and asking a question on Messenger before committing. We design stores that handle all three gracefully.",
    metaTitle: "E-commerce Web Design Pampanga | Online Store Design",
    metaDescription: "E-commerce web design for Pampanga. Product pages, smooth checkout, GCash and COD options.",
    priceNote: "Custom project · quoted with growth in mind",
    outcomes: [
      { title: "A smooth path to checkout", description: "Browse, choose, pay, confirm — with fewer steps and fewer reasons to abandon the cart." },
      { title: "Payment options locals expect", description: "GCash, bank transfer, cards and cash on delivery, explained clearly at checkout." },
      { title: "Orders without the chaos", description: "Product management, stock levels and order notifications organised so daily selling stays simple." },
      { title: "Product pages that sell", description: "Clear photos, honest descriptions, variants, shipping info and trust signals placed where they matter." },
    ],
    includes: ["Store architecture and category planning", "Product page templates with variant support", "Cart and checkout flow design", "Payment gateway guidance & setup", "Shipping, delivery and COD configuration", "Order and customer notification emails", "Product SEO foundations"],
    idealFor: ["Businesses graduating from Marketplace or form-based orders", "Retailers who want one organised place for their catalogue", "Brands selling nationwide from Pampanga", "Sellers juggling payments and orders manually in chats"],
    faqs: [
      { question: "Can customers pay with GCash?", answer: "Yes. We set up the payment options that suit your market — GCash, e-wallets, bank transfer, cards or COD — and make the process clear on the checkout page." },
      { question: "Is e-commerce worth it versus selling on social media?", answer: "The best setup is usually both: social for discovery, your own store for credibility, order management and owning the customer relationship." },
      { question: "How many products can the store handle?", answer: "No practical limit for the platforms we use. We'll recommend the right setup based on catalogue size, variants and how inventory is managed." },
    ],
    relatedIndustries: ["manufacturing-web-design", "restaurant-web-design", "clinic-web-design"],
    relatedServices: ["web-development", "web-design", "seo-services"],
  },
  {
    slug: "website-redesign",
    name: "Website Redesign",
    short: "Modernise without losing what works",
    icon: TrendingUp,
    eyebrow: "Website redesign · Pampanga",
    h1: "Website redesign that keeps what's already working.",
    intro:
      "A redesign shouldn't mean throwing away your rankings, content and history. We audit what you have, keep the parts that earn their keep, and rebuild the rest with a clearer structure and a modern, mobile-first design.",
    metaTitle: "Website Redesign Pampanga | Modernise Your Business Website",
    metaDescription: "Website redesign for Pampanga. SEO-safe migration, clearer structure, modern mobile-first design.",
    priceNote: "Quoted per project after a free audit",
    outcomes: [
      { title: "Modern look, intact visibility", description: "We map old URLs to new ones, preserve titles and content, and protect the pages already bringing traffic." },
      { title: "Reorganise, don't restart", description: "Good content is kept and sharpened. The structure around it changes so it's easier to find and trust." },
      { title: "Faster and mobile-first", description: "Old sites carry years of accumulated weight. The rebuild ships lean, quick and designed for phones first." },
      { title: "A clearer next step", description: "Redesigns consistently produce more enquiries — not because they're prettier, but because the path to contact is obvious." },
    ],
    includes: ["Full audit: design, content, technical & SEO", "Content inventory and keep/rewrite decisions", "SEO-safe redirect map and migration plan", "New information architecture and page flow", "Modern design applied to real content", "Performance rebuild and device testing", "30-day post-launch monitoring"],
    idealFor: ["Businesses with a site that's years out of date", "Sites that get traffic but very few enquiries", "Companies whose content has outgrown the layout", "Sites that broke after plugin or theme updates"],
    faqs: [
      { question: "Will I lose my Google rankings?", answer: "Not if the migration is handled properly. We keep working content and titles, add redirects for changed URLs, submit a refreshed sitemap, and monitor Search Console after launch." },
      { question: "Can you redesign just part of the site?", answer: "Partial redesigns usually create a mismatched site. Where it makes sense we phase work — homepage and key pages first — while keeping one consistent design system." },
      { question: "How long does a redesign take?", answer: "Most run four to eight weeks depending on page count and content rewriting. The audit gives an accurate timeline before we start." },
    ],
    relatedIndustries: ["bpo-web-design-clark", "clinic-web-design", "logistics-web-design"],
    relatedServices: ["web-design", "web-development", "local-seo"],
  },
  {
    slug: "website-maintenance",
    name: "Website Maintenance",
    short: "Updates, backups and fixes on a schedule",
    icon: Wrench,
    eyebrow: "Website maintenance · Pampanga",
    h1: "Website maintenance so nothing quietly breaks.",
    intro:
      "Most websites don't fail dramatically — they degrade quietly. Plugins age, backups stop running, forms break silently, and content goes stale. A maintenance plan keeps your site healthy so it's always ready to make the right impression.",
    metaTitle: "Website Maintenance Pampanga | Care Plans & Support",
    metaDescription: "Website maintenance plans in Pampanga from ₱3,500/month. Updates, backups, monitoring, edits.",
    priceNote: "Care plans from ₱3,500 / month",
    outcomes: [
      { title: "Updates handled on schedule", description: "Core, theme and plugin updates applied in a controlled way — tested, not clicked blindly." },
      { title: "Backups that actually exist", description: "Scheduled off-site backups with restore points, so a mistake or attack costs hours, not years." },
      { title: "Problems caught early", description: "Uptime, security and form checks mean issues surface from monitoring rather than from an angry customer." },
      { title: "Content edits without the wait", description: "Send a change and we make it — prices, photos, new services, seasonal promotions." },
    ],
    includes: ["Core, theme and plugin updates", "Off-site backups and restore points", "Security and malware monitoring", "Uptime and form submission checks", "Monthly hours of content edits", "Performance review and image optimisation", "Clear monthly report of what changed"],
    idealFor: ["WordPress businesses with nobody watching the install", "Sites with forms quietly failing", "Owners who don't want to think about updates", "Businesses that make frequent content changes"],
    faqs: [
      { question: "Do I need maintenance if my site is brand new?", answer: "A new site is the easiest time to start. Monthly upkeep costs less than one emergency repair, and it keeps the speed and security you paid for." },
      { question: "What's included in the monthly hours?", answer: "Edits to existing pages: text, images, prices, staff, services, promotions, new posts from supplied content. Larger new sections are quoted separately." },
      { question: "What if I'm not on a plan?", answer: "We still help — hourly or per-task. Without a plan there's no monitoring, so problems surface later and cost more." },
    ],
    relatedIndustries: ["clinic-web-design", "hotel-web-design", "manufacturing-web-design"],
    relatedServices: ["wordpress-web-design", "web-development", "seo-services"],
  },
  {
    slug: "local-seo",
    name: "Local SEO",
    short: "Be visible when people search near you",
    icon: MapPin,
    eyebrow: "Local SEO · Pampanga",
    h1: "Local SEO for businesses people search for nearby.",
    intro:
      "When someone searches “dentist near me” or “hotel in Clark”, visibility depends on more than keywords: it's your Google Business Profile, local pages, reviews, and how clearly your site signals where you operate. We build those foundations properly.",
    metaTitle: "Local SEO Pampanga | Rank in Google Maps & Local Search",
    metaDescription: "Local SEO for Pampanga. Google Business Profile, local landing pages, citations and reviews.",
    priceNote: "Included in SEO engagements · monthly retainer",
    outcomes: [
      { title: "A Google profile that works for you", description: "Categories, services, photos, hours, attributes and posts optimised for the searches that matter." },
      { title: "Pages that signal your locations", description: "Clear location and service pages so Google understands exactly which areas you serve." },
      { title: "Reviews managed deliberately", description: "A simple, polite system for requesting and responding to reviews — the strongest local ranking input." },
      { title: "Consistent business details", description: "Name, address, phone and hours aligned across your website, profile and major directories." },
    ],
    includes: ["Google Business Profile optimisation", "Local keyword and competitor mapping", "Location and service page planning", "On-page local signals and LocalBusiness schema", "Citation and directory consistency review", "Review request templates and guidance", "Call tracking or form tracking setup", "Monthly local visibility reporting"],
    idealFor: ["Businesses depending on customers within a few kilometres", "Clinics, dental, salons and service providers", "Restaurants, hotels and tourism businesses in Clark", "Companies serving several Pampanga municipalities"],
    faqs: [
      { question: "How long until local SEO shows results?", answer: "Profile and on-page improvements can move within weeks. Competitive terms in Metro Clark typically take three to six months, reported monthly." },
      { question: "Do you guarantee first-page rankings?", answer: "No — and be cautious with anyone who does. We guarantee a sound plan, proper technical work, transparent reporting and honest expectations." },
      { question: "Can you work on my Google profile for me?", answer: "Yes — managed on your behalf, or optimised with a simple routine you run yourself. Most clients choose the second option with our guidance." },
    ],
    relatedIndustries: ["dental-web-design", "hotel-web-design", "restaurant-web-design"],
    relatedServices: ["seo-services", "web-design", "website-maintenance"],
  },
  {
    slug: "seo-services",
    name: "SEO Services",
    short: "Technical and content work that compounds",
    icon: LifeBuoy,
    eyebrow: "SEO services · Pampanga",
    h1: "SEO that compounds instead of tricks that expire.",
    intro:
      "We approach SEO as maintenance on your visibility: fix the technical issues holding the site back, understand what your customers actually search for, publish content that answers those searches, and keep it consistent month after month.",
    metaTitle: "SEO Services Pampanga | Technical SEO & Content Strategy",
    metaDescription: "SEO services for Pampanga. Technical audits, keyword research, content roadmaps and reporting.",
    priceNote: "Monthly engagement · scoped after a free audit",
    outcomes: [
      { title: "Technical problems fixed first", description: "Crawlability, indexation, speed, duplicates and structured data resolved before any content is produced." },
      { title: "Content mapped to intent", description: "Pages planned around what people search when they're ready to buy — not keyword lists that attract the wrong traffic." },
      { title: "Progress you can verify", description: "Reports show rankings, impressions, sessions and enquiries together, so you can judge whether it's working." },
      { title: "Sustainable, no gimmicks", description: "No purchased links, no spam, no shortcuts that risk your domain. Just fundamentals, executed consistently." },
    ],
    includes: ["Technical SEO audit and issues log", "Keyword and search intent research", "Content roadmap with priorities", "On-page optimisation of key pages", "Internal linking and structure improvements", "Core Web Vitals and speed work", "Google Search Console & Analytics setup", "Monthly reporting with clear next steps"],
    idealFor: ["Businesses whose site gets little search traffic", "Companies competing with stronger national brands", "Teams with traffic but few enquiries", "Brands with content but no consistent plan"],
    faqs: [
      { question: "What's the difference between SEO and local SEO?", answer: "Local SEO focuses on map results and proximity searches. SEO covers the wider effort: technical health, content, and rankings beyond your immediate area. Most Pampanga businesses benefit from both." },
      { question: "How much does a monthly engagement cost?", answer: "It depends on scope and competition. We scope after an audit so the work is defined and the cost is fixed monthly." },
      { question: "Do I need a new website to do SEO?", answer: "Not always. If the platform is fighting you — slow, uneditable, structurally confused — we'll say so, because a redesign is often cheaper long term." },
    ],
    relatedIndustries: ["bpo-web-design-clark", "real-estate-web-design", "construction-web-design"],
    relatedServices: ["local-seo", "web-development", "website-maintenance"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
