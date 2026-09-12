import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const origin = "https://webdesignpampanga.com";
const template = await readFile(path.join(dist, "index.html"), "utf8");
const socialImage = `${origin}/brand/og-image.svg`;
const articlePublished = "2026-09-10";
const articleModified = "2026-09-12";
const siteModified = "2026-09-12";
const authorId = `${origin}/#erwin-valles`;
const authorUrl = `${origin}/author/erwin-valles/`;

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

async function entriesFrom(file) {
  const source = await readFile(path.join(root, file), "utf8");
  const matches = source.matchAll(/\bslug:\s*["']([^"']+)["'][\s\S]*?\bmetaTitle:\s*["']([^"']+)["'][\s\S]*?\bmetaDescription:\s*["']([^"']+)["']/g);
  return [...matches].map((match) => ({ slug: match[1], title: match[2], description: match[3] }));
}

async function slugsFrom(file) {
  const source = await readFile(path.join(root, file), "utf8");
  return [...source.matchAll(/\bslug:\s*["']([^"']+)["']/g)].map((match) => match[1]);
}

const serviceEntries = await entriesFrom("src/data/services.ts");
const industryEntries = await entriesFrom("src/data/industries.ts");
const locationEntries = await entriesFrom("src/data/locations.ts");
const blogEntries = await entriesFrom("src/data/blog.ts");
const portfolioSlugs = await slugsFrom("src/data/portfolio.ts");

const routeMeta = new Map([
  ["/about/", { title: "About Erwin Valles | Web Design Pampanga", description: "Meet Erwin Valles, the person behind Web Design Pampanga. Web design, technical SEO, local SEO and conversion-focused websites for Pampanga businesses." }],
  ["/author/erwin-valles/", { title: "Erwin Valles | Web Designer & SEO Specialist in Pampanga", description: "Erwin Valles is the founder of Web Design Pampanga, working across web design, technical SEO, local SEO, structured data and conversion-focused website planning." }],
  ["/services/", { title: "Web Design & SEO Services Pampanga | Web Design Pampanga", description: "Explore web design, development, WordPress, ecommerce, redesign, maintenance and SEO services for businesses across Pampanga." }],
  ["/why-web-design-pampanga/", { title: "Why Choose Web Design Pampanga | 200+ Sites Launched", description: "Why businesses choose Web Design Pampanga: 200+ sites launched, fixed scopes, mobile-first design, SEO foundations and direct local support." }],
  ["/privacy-policy/", { title: "Privacy Policy | Web Design Pampanga", description: "Privacy policy for Web Design Pampanga covering quote enquiries, analytics, Microsoft Clarity, Google Analytics and third-party links." }],
  ["/terms/", { title: "Website Terms | Web Design Pampanga", description: "Website terms for Web Design Pampanga covering pricing, timelines, portfolio examples, third-party services and project information." }],
  ["/thank-you/", { title: "Thank You | Web Design Pampanga", description: "Your enquiry has been sent to Web Design Pampanga." }],
  ["/case-studies/", { title: "Web Design Case Studies | Web Design Pampanga", description: "Verified Web Design Pampanga case studies with real client work, project scope and supportable outcomes." }],
  ["/portfolio/", { title: "Web Design Portfolio | Web Design Pampanga", description: "Explore website design directions for businesses in Pampanga, including corporate, hospitality, healthcare, property and local service websites." }],
  ["/pricing/", { title: "Website Design Pricing Pampanga | Packages & Care Plans", description: "Website design pricing in Pampanga with clear starting prices, fixed project scopes and ongoing website care plans." }],
  ["/contact/", { title: "Contact Web Design Pampanga | Request a Fixed-Price Quote", description: "Contact Web Design Pampanga for a free consultation and fixed-price website quote. Call, WhatsApp or send your project details online." }],
  ["/industries/", { title: "Web Design by Industry | Web Design Pampanga", description: "Web design for Pampanga businesses across BPO, hospitality, healthcare, construction, property, logistics, restaurants and professional services." }],
  ["/locations/", { title: "Web Design Across Pampanga | Areas We Serve", description: "Web design services across Pampanga including San Fernando, Angeles City, Clark, Mabalacat, Guagua, Porac, Mexico and Bacolor." }],
  ["/blog/", { title: "Web Design & SEO Guides by Erwin Valles | Web Design Pampanga", description: "Detailed guides by Erwin Valles about web design, website costs, local SEO, conversion and choosing a web designer in Pampanga." }],
]);

const routeKind = new Map([
  ["/author/erwin-valles/", { kind: "author" }],
]);
for (const entry of serviceEntries) { const route = `/${entry.slug}/`; routeMeta.set(route, entry); routeKind.set(route, { kind: "service", entry }); }
for (const entry of industryEntries) { const route = `/industries/${entry.slug}/`; routeMeta.set(route, entry); routeKind.set(route, { kind: "industry", entry }); }
for (const entry of locationEntries) { const route = `/locations/${entry.slug}/`; routeMeta.set(route, entry); routeKind.set(route, { kind: "location", entry }); }
for (const entry of blogEntries) { const route = `/blog/${entry.slug}/`; routeMeta.set(route, entry); routeKind.set(route, { kind: "article", entry }); }

const routes = new Set(["/", ...routeMeta.keys(), ...portfolioSlugs.map((slug) => `/portfolio/${slug}/`)]);

function titleBeforePipe(title) { return title.split("|")[0].trim(); }
function humanizeSlug(slug) {
  const special = { seo: "SEO", bpo: "BPO", ecommerce: "E-commerce", wordpress: "WordPress" };
  return slug.split("-").map((part) => special[part] ?? `${part.charAt(0).toUpperCase()}${part.slice(1)}`).join(" ");
}
function pageLabel(route, meta) {
  const info = routeKind.get(route);
  if (info?.kind === "service") return humanizeSlug(info.entry.slug);
  if (info?.kind === "location") return titleBeforePipe(meta.title).replace(/^Web Design\s+/i, "").trim();
  return titleBeforePipe(meta.title);
}
function breadcrumbList(route, meta) {
  const canonical = `${origin}${route}`;
  const parts = route.split("/").filter(Boolean);
  const items = [{ name: "Home", item: `${origin}/` }];
  const parentNames = { locations: "Locations", industries: "Industries", blog: "Blog", portfolio: "Portfolio" };
  if (parts.length > 1 && parentNames[parts[0]]) items.push({ name: parentNames[parts[0]], item: `${origin}/${parts[0]}/` });
  items.push({ name: pageLabel(route, meta), item: canonical });
  return { "@type": "BreadcrumbList", "@id": `${canonical}#breadcrumb`, itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: item.item })) };
}

function schemaForRoute(route, meta) {
  if (!meta) return "";
  const canonical = `${origin}${route}`;
  const info = routeKind.get(route);
  const graph = [{ "@type": "WebPage", "@id": `${canonical}#webpage`, url: canonical, name: meta.title, description: meta.description, isPartOf: { "@id": `${origin}/#website` }, about: { "@id": info?.kind === "author" ? authorId : `${origin}/#business` }, inLanguage: "en-PH" }, breadcrumbList(route, meta)];

  if (info?.kind === "service") {
    const serviceName = humanizeSlug(info.entry.slug);
    graph.push({ "@type": "Service", "@id": `${canonical}#service`, name: serviceName, serviceType: serviceName, description: meta.description, url: canonical, provider: { "@id": `${origin}/#business` }, areaServed: { "@type": "AdministrativeArea", name: "Pampanga, Philippines" } });
  }
  if (info?.kind === "location") {
    const locationName = pageLabel(route, meta);
    graph.push({ "@type": "Service", "@id": `${canonical}#service`, name: `Web Design in ${locationName}`, serviceType: "Web Design", description: meta.description, url: canonical, provider: { "@id": `${origin}/#business` }, areaServed: { "@type": "Place", name: locationName } });
  }
  if (info?.kind === "article") {
    graph.push({ "@type": "Article", "@id": `${canonical}#article`, headline: titleBeforePipe(meta.title), description: meta.description, url: canonical, image: [socialImage], datePublished: articlePublished, dateModified: articleModified, mainEntityOfPage: { "@id": `${canonical}#webpage` }, author: { "@id": authorId }, publisher: { "@id": `${origin}/#business` }, inLanguage: "en-PH" });
  }
  if (info?.kind === "author") {
    graph.push({ "@type": "ProfilePage", "@id": `${authorUrl}#profile`, url: authorUrl, name: meta.title, description: meta.description, mainEntity: { "@id": authorId }, isPartOf: { "@id": `${origin}/#website` }, inLanguage: "en-PH" }, { "@type": "Person", "@id": authorId, name: "Erwin Valles", url: authorUrl, image: "https://avatars.githubusercontent.com/u/20321511?v=4", jobTitle: "Web Designer & SEO Specialist", worksFor: { "@id": `${origin}/#business` }, knowsAbout: ["Web design", "Technical SEO", "Local SEO", "Structured data", "Conversion rate optimization", "Website architecture"], sameAs: ["https://github.com/erwinmehehe"] });
  }
  return `    <script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": graph })}</script>\n`;
}

function forRoute(html, route) {
  const canonical = `${origin}${route}`;
  const meta = routeMeta.get(route);
  const isConceptProject = route.startsWith("/portfolio/") && route !== "/portfolio/";
  const isUtilityNoindex = route === "/thank-you/" || route === "/case-studies/";
  let output = html.replace(/<link rel="canonical" href="[^"]+"\s*\/>/, `<link rel="canonical" href="${canonical}" />`).replace(/<meta property="og:url" content="[^"]+"\s*\/>/, `<meta property="og:url" content="${canonical}" />`);
  if (isConceptProject || isUtilityNoindex) output = output.replace(/<meta name="robots" content="[^"]+"\s*\/>/, '<meta name="robots" content="noindex,follow" />');

  if (meta) {
    const title = escapeHtml(meta.title);
    const description = escapeHtml(meta.description);
    output = output.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`).replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/>/, `<meta name="description" content="${description}" />`).replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/, `<meta property="og:title" content="${title}" />`).replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/, `<meta property="og:description" content="${description}" />`).replace(/<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${title}" />`).replace(/<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${description}" />`);
    if (routeKind.get(route)?.kind === "article") output = output.replace('<meta property="og:type" content="website" />', '<meta property="og:type" content="article" />').replace("  </head>", `    <meta property="article:published_time" content="${articlePublished}" />\n    <meta property="article:modified_time" content="${articleModified}" />\n  </head>`);
    output = output.replace("  </head>", `${schemaForRoute(route, meta)}  </head>`);
  }
  return output;
}

for (const route of routes) {
  if (route === "/") continue;
  const dir = path.join(dist, route.replace(/^\//, ""));
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, "index.html"), forRoute(template, route), "utf8");
}

await writeFile(path.join(dist, "404.html"), template, "utf8");

const indexableRoutes = [...routes].filter((route) => (!route.startsWith("/portfolio/") || route === "/portfolio/") && route !== "/thank-you/" && route !== "/case-studies/");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${indexableRoutes.map((route) => `  <url><loc>${origin}${route}</loc><lastmod>${route.startsWith("/blog/") && route !== "/blog/" ? articleModified : siteModified}</lastmod></url>`).join("\n")}\n</urlset>\n`;
await writeFile(path.join(dist, "sitemap.xml"), sitemap, "utf8");
await writeFile(path.join(dist, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`, "utf8");
console.log(`Generated ${routes.size - 1} static route shells plus sitemap.xml and robots.txt.`);
