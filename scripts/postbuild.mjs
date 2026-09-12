import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const origin = "https://webdesignpampanga.com";
const template = await readFile(path.join(dist, "index.html"), "utf8");

async function slugsFrom(file) {
  const source = await readFile(path.join(root, file), "utf8");
  return [...source.matchAll(/\bslug:\s*["']([^"']+)["']/g)].map((match) => match[1]);
}

const serviceSlugs = await slugsFrom("src/data/services.ts");
const industrySlugs = await slugsFrom("src/data/industries.ts");
const locationSlugs = await slugsFrom("src/data/locations.ts");
const portfolioSlugs = await slugsFrom("src/data/portfolio.ts");
const blogSlugs = await slugsFrom("src/data/blog.ts");

const routes = new Set([
  "/",
  "/about/",
  "/portfolio/",
  "/pricing/",
  "/contact/",
  "/industries/",
  "/locations/",
  "/blog/",
  ...serviceSlugs.map((slug) => `/${slug}/`),
  ...industrySlugs.map((slug) => `/industries/${slug}/`),
  ...locationSlugs.map((slug) => `/locations/${slug}/`),
  ...portfolioSlugs.map((slug) => `/portfolio/${slug}/`),
  ...blogSlugs.map((slug) => `/blog/${slug}/`),
]);

function withCanonical(html, route) {
  const canonical = `${origin}${route}`;
  const tag = `    <link rel="canonical" href="${canonical}" />\n`;
  return html.replace("    <meta name=\"theme-color\"", `${tag}    <meta name=\"theme-color\"`);
}

for (const route of routes) {
  if (route === "/") continue;
  const dir = path.join(dist, route.replace(/^\//, ""));
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, "index.html"), withCanonical(template, route), "utf8");
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
