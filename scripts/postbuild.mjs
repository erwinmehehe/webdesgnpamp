import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const origin = "https://webdesignpampanga.com";
const template = await readFile(path.join(dist, "index.html"), "utf8");

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

async function entriesFrom(file) {
  const source = await readFile(path.join(root, file), "utf8");
  const matches = source.matchAll(
    /\bslug:\s*["']([^"']+)["'][\s\S]*?\bmetaTitle:\s*["']([^"']+)["'][\s\S]*?\bmetaDescription:\s*["']([^"']+)["']/g,
  );
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
  ["/about/", { title: "About Web Design Pampanga | Local Web Design Studio", description: "Meet Web Design Pampanga, an independent studio building clear, fast and conversion-focused websites for businesses across Pampanga." }],
  ["/portfolio/", { title: "Web Design Portfolio | Web Design Pampanga", description: "Explore website design directions for businesses in Pampanga, including corporate, hospitality, healthcare, property and local service websites." }],
  ["/pricing/", { title: "Website Design Pricing Pampanga | Packages & Care Plans", description: "Website design pricing in Pampanga with clear starting prices, fixed project scopes and ongoing website care plans." }],
  ["/contact/", { title: "Contact Web Design Pampanga | Request a Fixed-Price Quote", description: "Contact Web Design Pampanga for a free consultation and fixed-price website quote. Call, WhatsApp or send your project details online." }],
  ["/industries/", { title: "Web Design by Industry | Web Design Pampanga", description: "Web design for Pampanga businesses across BPO, hospitality, healthcare, construction, property, logistics, restaurants and professional services." }],
  ["/locations/", { title: "Web Design Across Pampanga | Areas We Serve", description: "Web design services across Pampanga including San Fernando, Angeles City, Clark, Mabalacat, Guagua, Porac, Mexico and Bacolor." }],
  ["/blog/", { title: "Web Design & Local SEO Guides | Web Design Pampanga", description: "Practical guides about web design, website costs, local SEO, conversion and choosing a web designer in Pampanga." }],
]);

for (const entry of serviceEntries) routeMeta.set(`/${entry.slug}/`, entry);
for (const entry of industryEntries) routeMeta.set(`/industries/${entry.slug}/`, entry);
for (const entry of locationEntries) routeMeta.set(`/locations/${entry.slug}/`, entry);
for (const entry of blogEntries) routeMeta.set(`/blog/${entry.slug}/`, entry);

const routes = new Set([
  "/",
  ...routeMeta.keys(),
  ...portfolioSlugs.map((slug) => `/portfolio/${slug}/`),
]);

function forRoute(html, route) {
  const canonical = `${origin}${route}`;
  const meta = routeMeta.get(route);
  let output = html
    .replace(
      /<link rel="canonical" href="[^"]+"\s*\/>/,
      `<link rel="canonical" href="${canonical}" />`,
    )
    .replace(
      /<meta property="og:url" content="[^"]+"\s*\/>/,
      `<meta property="og:url" content="${canonical}" />`,
    );

  if (meta) {
    const title = escapeHtml(meta.title);
    const description = escapeHtml(meta.description);
    output = output
      .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
      .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/>/, `<meta name="description" content="${description}" />`)
      .replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/, `<meta property="og:title" content="${title}" />`)
      .replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/, `<meta property="og:description" content="${description}" />`);
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

const indexableRoutes = [...routes].filter((route) => !route.startsWith("/portfolio/") || route === "/portfolio/");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexableRoutes.map((route) => `  <url><loc>${origin}${route}</loc></url>`).join("\n")}
</urlset>\n`;
await writeFile(path.join(dist, "sitemap.xml"), sitemap, "utf8");

await writeFile(
  path.join(dist, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`,
  "utf8",
);

console.log(`Generated ${routes.size - 1} static route shells plus sitemap.xml and robots.txt.`);
