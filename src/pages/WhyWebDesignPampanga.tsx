import { CheckCircle2, ExternalLink, MapPin, ShieldCheck } from "lucide-react";
import { CTABand, GoldButton, GhostButton, PageHero, Section, SectionIntro } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { usePageMeta } from "@/router";
import { googleReviewsUrl, site } from "@/data/site";

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
        <GhostButton to={googleReviewsUrl} external>View Google Business Profile <ExternalLink className="h-4 w-4" /></GhostButton>
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

      <Section ambient divider>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <Reveal>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-gold-400">Check the business</p>
              <h2 className="mt-5 font-display text-3xl font-bold text-white">Want to verify who you are dealing with first?</h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
                The Google Business Profile is linked here so you can check the business listing and location information before you send an enquiry.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <GoldButton to={googleReviewsUrl} external>Open Google Business Profile</GoldButton>
                <GhostButton to="/about/">About Erwin Valles</GhostButton>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[2rem] border border-gold-400/20 bg-gradient-to-b from-gold-500/[0.08] to-white/[0.02] p-8">
              <ShieldCheck className="h-7 w-7 text-gold-400" aria-hidden="true" />
              <p className="mt-5 font-display text-2xl font-bold text-white">Web Design Pampanga</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">Use the public Google listing to check the business details instead of relying only on claims made on this website.</p>
              <p className="mt-6 flex items-start gap-2 text-sm text-slate-300"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" /> {site.location}</p>
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300">
                View on Google <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
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
