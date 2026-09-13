import { CheckCircle2 } from "lucide-react";
import { CTABand, GoldButton, PageHero, Section, SectionIntro } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { usePageMeta } from "@/router";

const reasons = [
  ["200+ sites launched", "Experience across small business, service and corporate website projects."],
  ["Scope before work starts", "You know the pages, features, timeline and price before the build begins."],
  ["SEO planned during the build", "Titles, headings, URLs, internal links and schema are handled as part of the website work."],
  ["Mobile included from day one", "The phone layout is planned alongside desktop instead of being squeezed in at the end."],
  ["You keep control", "Your domain, hosting, analytics and website files stay in accounts you can access."],
  ["You work with Erwin directly", "There is one named person responsible for the design, SEO and project communication."],
];

export function WhyWebDesignPampangaPage() {
  usePageMeta(
    "Why Choose Web Design Pampanga | 200+ Sites Launched",
    "Why businesses choose Web Design Pampanga: direct contact with Erwin Valles, clear scopes, mobile-first design and SEO foundations.",
  );

  return (
    <>
      <PageHero
        eyebrow="Why Web Design Pampanga"
        title={<>A straightforward way to build a <span className="text-gold-gradient">better website.</span></>}
        intro="You deal directly with me. The scope, price and timeline are written down before work starts, and the SEO and mobile details are handled during the build."
        crumbs={[{ label: "Why Web Design Pampanga" }]}
        chips={["200+ sites launched", "Fixed project scopes", "SEO included", "Direct contact with Erwin"]}
      >
        <GoldButton to="/contact/">Request a quote</GoldButton>
      </PageHero>

      <Section divider>
        <SectionIntro
          eyebrow="What you get"
          title="A website project without the mystery"
          description="The work covers the design, build and SEO basics that affect how the site looks, works and gets found."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(([title, text], index) => (
            <Reveal key={title} delay={0.05 * index}>
              <div className="h-full rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-white/[0.012] p-7">
                <CheckCircle2 className="h-5 w-5 text-gold-400" aria-hidden="true" />
                <h2 className="mt-4 font-display text-lg font-semibold text-white">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand
        eyebrow="Ready to talk?"
        title="Send the project details and I will take a look."
        intro="I will ask only the questions that affect scope, timeline or price, then send the next step in writing."
      />
    </>
  );
}
