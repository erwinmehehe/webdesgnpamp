import { CheckCircle2, ExternalLink, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { CTABand, GoldButton, GhostButton, PageHero, Section, SectionIntro } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { usePageMeta } from "@/router";
import { googleReviewsUrl, site } from "@/data/site";

const reasons = [
  ["200+ sites launched", "Experience across small business, service, corporate and conversion-focused website projects."],
  ["Fixed project scope", "You know what is included, what is not, the timeline and the price before the build begins."],
  ["SEO built into the structure", "Titles, headings, crawlable URLs, internal links, schema and migration details are considered during the build rather than bolted on afterwards."],
  ["Mobile-first decisions", "Navigation, copy hierarchy and calls to action are planned for the screen most local customers use first."],
  ["You keep ownership", "Your domain, hosting, analytics and website assets should remain under accounts you can access."],
  ["A named person behind the work", "Erwin Valles is publicly identified as the founder, web designer and SEO specialist behind Web Design Pampanga."],
];

export function WhyWebDesignPampangaPage() {
  usePageMeta(
    "Why Choose Web Design Pampanga | 200+ Sites Launched",
    "Why businesses choose Web Design Pampanga: 200+ sites launched, fixed scopes, mobile-first design, SEO foundations and direct local support.",
  );

  return (
    <>
      <PageHero
        eyebrow="Why Web Design Pampanga"
        title={<>A local website partner focused on <span className="text-gold-gradient">clarity, ownership and results.</span></>}
        intro="A polished website is useful only if customers understand it, search engines can crawl it, your team can own it and the project is managed clearly from first scope to launch."
        crumbs={[{ label: "Why Web Design Pampanga" }]}
        chips={["200+ sites launched", "5-star Google reviews", "Fixed-price scopes", "SEO + web design"]}
      >
        <GoldButton to="/contact/">Get My Fixed-Price Quote</GoldButton>
        <GhostButton to={googleReviewsUrl} external>View Google Business Profile <ExternalLink className="h-4 w-4" /></GhostButton>
      </PageHero>

      <Section divider>
        <SectionIntro eyebrow="What you are buying" title="More than a visual redesign" description="The work combines design, website structure, SEO foundations and conversion planning so the finished site is easier to use and easier to grow." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(([title, text], i) => (
            <Reveal key={title} delay={0.05 * i}>
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
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-gold-400">Local and verifiable</p>
              <h2 className="mt-5 font-display text-3xl font-bold text-white">Check the business before you enquire.</h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400">Web Design Pampanga links directly to its Google Business Profile so visitors can verify the listing, location information and reviews independently.</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <GoldButton to={googleReviewsUrl} external>Open Google Business Profile</GoldButton>
                <GhostButton to="/about/">Meet Erwin Valles</GhostButton>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-[2rem] border border-gold-400/20 bg-gradient-to-b from-gold-500/[0.08] to-white/[0.02] p-8">
              <ShieldCheck className="h-7 w-7 text-gold-400" aria-hidden="true" />
              <p className="mt-5 font-display text-2xl font-bold text-white">5 ★ Google reviews</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">Review proof should be verifiable, so we link to the Google listing rather than relying only on website claims.</p>
              <p className="mt-6 flex items-start gap-2 text-sm text-slate-300"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" /> {site.location}</p>
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300">View location on Google <ExternalLink className="h-4 w-4" /></a>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTABand eyebrow="Ready to compare options?" title="Get a clear scope before you make a decision." intro="Tell us what you need and we will reply with the questions that affect scope, timeline and price." />
    </>
  );
}
