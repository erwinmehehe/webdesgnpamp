import { PageHero, Section } from "@/components/blocks";
import { usePageMeta } from "@/router";

const sections = [
  ["Website information", "The information on this website is provided for general information about Web Design Pampanga's services. It is not a binding project scope, quotation or guarantee. A project becomes agreed only when the parties accept a written scope, price and terms."],
  ["Pricing", "Published prices are starting points unless a page states otherwise. Final pricing depends on scope, content, integrations, migration requirements, revisions and other project-specific needs."],
  ["Timelines", "Published timelines describe typical projects, not guaranteed delivery dates. Actual schedules depend on scope, content availability, feedback, approvals and third-party dependencies."],
  ["Portfolio and examples", "Concept work, demonstrations and sample layouts are presented as examples of design direction and should not be interpreted as client endorsements, results or live client projects unless the page explicitly identifies them as such."],
  ["Third-party services", "Links to Google, WhatsApp, GitHub, hosting providers, analytics platforms and other external services are provided for convenience. Those services operate under their own terms and policies."],
  ["Intellectual property", "Unless otherwise stated, website copy, original design elements and code published on this website belong to Web Design Pampanga or are used under applicable licenses. Client project ownership is governed by the written terms for that project."],
  ["No guaranteed rankings or results", "SEO, conversion and marketing outcomes depend on many factors outside the studio's control. No specific ranking, traffic, lead or revenue result is guaranteed unless a written agreement expressly says otherwise."],
  ["Changes", "These website terms may be updated as the site, services or business processes change. The version published here is the current version."],
];

export function TermsPage() {
  usePageMeta(
    "Website Terms | Web Design Pampanga",
    "Website terms for Web Design Pampanga covering pricing, timelines, portfolio examples, third-party services and project information.",
  );

  return (
    <>
      <PageHero eyebrow="Terms" title="Website Terms" intro="General terms for using webdesignpampanga.com and understanding the service information published here." crumbs={[{ label: "Website Terms" }]} chips={["Last updated: September 12, 2026"]} />
      <Section divider>
        <div className="mx-auto max-w-3xl space-y-10">
          {sections.map(([title, body]) => (
            <section key={title}>
              <h2 className="font-display text-xl font-semibold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">{body}</p>
            </section>
          ))}
        </div>
      </Section>
    </>
  );
}
