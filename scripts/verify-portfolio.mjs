import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const demos = ["sizzle-house", "coreaxis-bpo", "ironpeak-builders"];
const portfolio = readFileSync(path.join(root, "src/data/portfolio.ts"), "utf8");
const sitemap = readFileSync(path.join(dist, "sitemap.xml"), "utf8");

for (const slug of demos) {
  assert.match(portfolio, new RegExp('slug: "' + slug + '"'), "Portfolio source is missing " + slug);

  const caseStudyPath = path.join(dist, "portfolio", slug, "index.html");
  const demoPath = path.join(dist, "portfolio", slug, "demo", "index.html");
  assert.ok(existsSync(caseStudyPath), "Missing case-study static route: " + caseStudyPath);
  assert.ok(existsSync(demoPath), "Missing direct-link-safe demo route: " + demoPath);

  const html = readFileSync(demoPath, "utf8");
  assert.match(html, /<meta name="robots" content="noindex,follow"\s*\/>/, slug + " must remain noindex");
  assert.ok(html.includes('href="https://webdesignpampanga.com/portfolio/' + slug + '/demo/"'), "Wrong canonical for " + slug);
  assert.ok(html.includes("Interactive Website Concept"), "Missing concept-specific page metadata");
  assert.ok(!sitemap.includes("/portfolio/" + slug + "/demo/"), "Fictional demo must not appear in sitemap");
}

const allConcepts = [...portfolio.matchAll(/status: "concept",/g)].length;
assert.equal(allConcepts, 10, "Expected 10 clearly labeled concept projects");

console.log("Portfolio checks passed: 3 standalone demos, 3 direct-link case studies, 10 labeled concepts, noindex and sitemap safeguards.");
