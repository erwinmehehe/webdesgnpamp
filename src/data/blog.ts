export interface PostBlock {
  type: "h2" | "p" | "ul" | "quote";
  text?: string;
  items?: string[];
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  metaTitle: string;
  metaDescription: string;
  blocks: PostBlock[];
}

export const posts: Post[] = [
  {
    slug: "choose-web-designer-pampanga",
    title: "How to choose a web designer in Pampanga without getting burned",
    excerpt: "Cheap quotes, vague scopes and disappearing developers are common stories locally. Here's how to evaluate a web designer before you pay a deposit.",
    category: "Hiring & process",
    date: "September 2026",
    readTime: "6 min read",
    author: "Web Design Pampanga",
    metaTitle: "How to Choose a Web Designer in Pampanga | Buying Guide",
    metaDescription: "A practical guide to choosing a web designer in Pampanga: what to ask, fair scopes, warning signs.",
    blocks: [
      { type: "p", text: "Most bad web design experiences in Pampanga don't start with bad intentions. They start with a vague scope: a cheap quote, a late launch, an unreachable developer, and a business that ends up paying twice. Here's how to evaluate anyone you're considering — including us." },
      { type: "h2", text: "1. Ask what happens after launch" },
      { type: "p", text: "This single question separates operators from professionals. You want a clear answer about hosting, updates, backups, who owns the files, and how content changes are handled." },
      { type: "h2", text: "2. Insist on a written scope before paying" },
      { type: "p", text: "A fair quote lists page count, design rounds, included features, integrations, timeline, payment schedule and what counts as extra work." },
      { type: "ul", items: ["Number of pages and what each one contains", "Who provides copy, photos and logo assets", "How many design revision rounds are included", "Whether hosting, domain and email are in scope", "Timeline with the dates your feedback is expected", "What maintenance costs after launch"] },
      { type: "h2", text: "3. Look at how their own site performs" },
      { type: "p", text: "Load it on your phone over mobile data. If it's slow, breaks on small screens, or hasn't been updated in years, that's the standard you're buying." },
      { type: "h2", text: "4. Check whether they understand your customers" },
      { type: "p", text: "A hotel in Clark, a dental clinic in Angeles, and a supplier in Guagua don't need the same website. Domain knowledge shows up in the questions they ask on the first call." },
      { type: "quote", text: "The cheapest quote is rarely the lowest total cost. Ask what the site will do for you in year two." },
      { type: "h2", text: "5. Confirm you own everything" },
      { type: "p", text: "Your domain, hosting account, analytics and website files should be in your name or transferred to you on completion." },
    ],
  },
  {
    slug: "website-cost-pampanga",
    title: "How much should a website cost in Pampanga? A realistic breakdown",
    excerpt: "From ₱8,000 templates to ₱300,000 platforms — what actually drives the price of a business website, and what's a fair budget.",
    category: "Budgeting",
    date: "September 2026",
    readTime: "7 min read",
    author: "Web Design Pampanga",
    metaTitle: "Website Cost in Pampanga 2026 | Price Guide & Breakdown",
    metaDescription: "What does a website cost in Pampanga? A realistic breakdown of design, development and maintenance budgets.",
    blocks: [
      { type: "p", text: "Quotes for the same business can vary by a factor of ten. The honest version: price tracks scope, and scope is driven by how much thinking, custom design and engineering your website genuinely needs." },
      { type: "h2", text: "What actually drives the price" },
      { type: "ul", items: ["Page count and how custom each page is", "Whether content and copy are supplied or written for you", "Functionality: booking, e-commerce, payments, integrations", "SEO structure and location or service page architecture", "Photography and brand asset work", "Timeline and feedback speed"] },
      { type: "h2", text: "Typical ranges for Pampanga businesses" },
      { type: "ul", items: ["Starter Website — from ₱30,000: core pages, custom design, contact form, SEO foundations", "Business Website — from ₱50,000: expanded services, conversion flow, local SEO structure, tracking", "Custom builds — quoted per project: corporate, e-commerce, recruitment, booking, integrations"] },
      { type: "h2", text: "The costs nobody quotes up front" },
      { type: "p", text: "Domain and hosting are annual costs you should own in your own name. Maintenance is the other one: a care plan from ₱3,500 per month is cheaper than one emergency repair." },
      { type: "h2", text: "What a website should return" },
      { type: "p", text: "The right question isn't 'what does it cost' but 'what does it need to produce'. If your average customer is worth ₱15,000 and the site brings three additional enquiries a month, payback is measured in weeks." },
      { type: "quote", text: "Budget conversations go better when they start with the value of one customer." },
      { type: "h2", text: "How to compare quotes fairly" },
      { type: "p", text: "Ask each provider for the same written scope. Once quotes are actually comparable, the cheapest option often stops looking cheapest." },
    ],
  },
  {
    slug: "website-design-clark-businesses",
    title: "What Clark businesses need from a website in 2026",
    excerpt: "Clark competes with Manila and international standards. Here's what actually matters for BPO, hotel, logistics and service businesses.",
    category: "Industry insights",
    date: "September 2026",
    readTime: "6 min read",
    author: "Web Design Pampanga",
    metaTitle: "Web Design for Clark Businesses | What Matters in 2026",
    metaDescription: "What Clark Freeport businesses need from a website: credibility, recruitment, direct bookings, speed.",
    blocks: [
      { type: "p", text: "Clark is an unusual market: enterprise clients, international hospitality, industrial operations and a talent pool that compares local employers against Metro Manila. That raises the bar — everyone you're compared with has a competent website already." },
      { type: "h2", text: "Two audiences, not one" },
      { type: "p", text: "Most Clark companies serve customers and candidates. Trying to serve both with one generic page pleases nobody. Structure them separately." },
      { type: "h2", text: "Recruitment pages are revenue pages" },
      { type: "p", text: "In high-turnover categories, hiring capacity is growth. A careers section with real role information and a working application flow outperforms job adverts — and it's the cheapest recruiting channel you own." },
      { type: "h2", text: "Direct bookings in hospitality" },
      { type: "p", text: "Room clarity, transparent inclusions, fast galleries and an obvious direct enquiry path are what shift the mix away from platform commissions." },
      { type: "h2", text: "Performance on real networks" },
      { type: "p", text: "Guests and staff browse on mobile data, not fibre. Optimised images and lean front-ends are the difference between a gallery that impresses and one that times out." },
      { type: "quote", text: "In Clark you're not competing with the business next door. You're competing with how the last site they saw felt." },
      { type: "h2", text: "What we'd build first" },
      { type: "p", text: "A strong homepage with two clear paths, three to six service pages, a credible about presence, a structured careers or booking flow, and analytics showing which path produces results." },
    ],
  },
  {
    slug: "local-seo-pampanga-business",
    title: "Local SEO for Pampanga businesses: a practical checklist",
    excerpt: "Getting found when people search 'near me' is mostly unglamorous consistency. Here's the work that actually moves rankings.",
    category: "SEO",
    date: "September 2026",
    readTime: "7 min read",
    author: "Web Design Pampanga",
    metaTitle: "Local SEO Pampanga | Practical Checklist for Local Rankings",
    metaDescription: "A practical local SEO checklist: Google Business Profile, location pages, reviews, schema, tracking.",
    blocks: [
      { type: "p", text: "Local SEO isn't a trick — it's maintenance on how clearly your business is described online. A handful of fundamentals do most of the work." },
      { type: "h2", text: "Start with your Google Business Profile" },
      { type: "ul", items: ["Choose the most specific primary category available", "List every service or product, not just categories", "Publish accurate hours, including holidays", "Add real photos: exterior, interior, team, work in progress", "Write a description naming your town and what you do", "Answer questions and use posts for offers"] },
      { type: "h2", text: "Build location pages that say something" },
      { type: "p", text: "Write about the specific market: districts, landmarks, customer types, and how service works in that area. Each municipality you serve deserves genuine content." },
      { type: "h2", text: "Make your details identical everywhere" },
      { type: "p", text: "Name, address, phone and hours should match exactly across your website, Google, Facebook and directories." },
      { type: "h2", text: "Turn reviews into a routine" },
      { type: "p", text: "Ask every satisfied customer at the moment they're happiest, with a direct link. Reviews are the strongest local ranking input for most small businesses." },
      { type: "h2", text: "Give search engines structure to read" },
      { type: "ul", items: ["Clear heading hierarchy on every page", "Unique title tags and meta descriptions", "LocalBusiness schema with correct details", "Internal links between services and locations", "Fast mobile performance and clean URLs"] },
      { type: "quote", text: "Consistency beats cleverness. Ninety percent of local SEO is being accurate and useful, repeatedly." },
      { type: "h2", text: "Measure what actually happened" },
      { type: "p", text: "Track profile views and calls, form submissions and direction requests monthly. If enquiries rise while none of these move, something else is driving them — and it's worth knowing which." },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
