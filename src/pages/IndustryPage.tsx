import { MessageCircle, Sparkles } from "lucide-react";
import {
  CTABand, CheckList, CrossLinks, Eyebrow, FAQAccordion,
  GhostButton, GoldButton, InfoCardGrid, PageHero, ProcessSteps, Section, SectionIntro,
} from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { Link, usePageMeta } from "@/router";
import { getIndustry, industries } from "@/data/industries";
import { getService } from "@/data/services";
import { site } from "@/data/site";
import { NotFoundPage } from "@/pages/NotFound";

export function IndustryPage({ slug }: { slug: string }) {
  const industry = getIndustry(slug);
  usePageMeta(industry ? industry.metaTitle : "Page not found | Web Design Pampanga", industry?.metaDescription);

  if (!industry) return <NotFoundPage />;

  const relatedServices = industry.relatedServices.map((s) => getService(s)).filter((s): s is NonNullable<typeof s> => Boolean(s));
  const relatedIndustries = industry.relatedIndustries.map((s) => getIndustry(s)).filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <PageHero
        eyebrow={`${industry.name} · Pampanga`}
        title={industry.h1}
        intro={industry.intro}
        crumbs={[{ label: "Industries", to: "/industries/" }, { label: industry.shortName }]}
        chips={[`Serving ${industry.area}`, "Mobile-first design", "SEO foundations included"]}
      >
        <GoldButton to="/contact/">Get My Fixed-Price Quote</GoldButton>
        <GhostButton to={site.whatsapp} external>
          <MessageCircle className="h-4 w-4 text-emerald-400" aria-hidden="true" />
          Ask about your project
        </GhostButton>
      </PageHero>

      <Section divider>
        <SectionIntro
          eyebrow="Where it usually goes wrong"
          title={<>What holds {industry.shortName.toLowerCase()} websites <span className="text-gold-gradient">back.</span></>}
          description={`Patterns we see repeatedly in ${industry.shortName.toLowerCase()} businesses across Pampanga — and the reasons customers quietly go elsewhere.`}
          align="left"
        />
        <div className="mt-12"><InfoCardGrid items={industry.challenges} columns={2} numbered /></div>
      </Section>

      <Section ambient divider>
        <SectionIntro
          eyebrow="How we solve it"
          title={<>What we build for <span className="text-gold-gradient">{industry.shortName.toLowerCase()}</span> businesses.</>}
          description="Structure and content chosen for the way your customers evaluate and buy — not a generic template reordered."
        />
        <div className="mt-12"><InfoCardGrid items={industry.builds} columns={2} /></div>
      </Section>

      <Section divider>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <Reveal><Eyebrow>Typical build scope</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl">Features we usually include</h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400">Every project is scoped to your business, so this is a starting point rather than a package. We&rsquo;ll confirm exactly what&rsquo;s included in writing before we begin.</p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8"><CheckList items={industry.features} columns={1} /></div>
            </Reveal>
          </div>
          <div className="space-y-4">
            <Reveal delay={0.1}>
              <div className="glass rounded-3xl p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold-400/20 bg-gold-400/10">
                  <industry.icon className="h-5 w-5 text-gold-400" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{industry.shortName} businesses we work with</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">{industry.area}</p>
                <p className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                  <Sparkles className="h-3.5 w-3.5 text-gold-400/80" aria-hidden="true" />
                  {site.responseTime}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="rounded-3xl border border-gold-400/20 bg-gradient-to-b from-gold-500/[0.08] to-white/[0.02] p-8">
                <p className="font-display text-lg font-semibold text-white">Want to see what this looks like?</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">Our portfolio shows the approach — layout, messaging and conversion structure for local industries.</p>
                <div className="mt-6 flex flex-col gap-3">
                  <GoldButton to="/portfolio/" className="w-full">View sample work</GoldButton>
                  <GhostButton to="/pricing/">See pricing</GhostButton>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section ambient divider>
        <SectionIntro eyebrow="How it works" title="A simple process. A better website." description="Four stages with your feedback built in — so you always know what's happening and what comes next." />
        <ProcessSteps />
      </Section>

      <Section divider>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal><Eyebrow>{industry.shortName} FAQ</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl">
                Questions from {industry.shortName.toLowerCase()} <span className="text-gold-gradient">owners.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-slate-400">Industry-specific answers. For general questions about cost and timelines, our pricing and contact pages cover the rest.</p>
            </Reveal>
          </div>
          <FAQAccordion items={industry.faqs} />
        </div>
      </Section>

      <CrossLinks
        eyebrow="Keep exploring"
        title="Related industries & services"
        columns={2}
        links={[
          ...relatedIndustries.map((i) => ({ label: i.name, description: i.blurb, to: `/industries/${i.slug}/`, icon: i.icon })),
          ...relatedServices.map((s) => ({ label: s.name, description: s.short, to: `/${s.slug}/`, icon: s.icon })),
        ].slice(0, 6)}
      />

      <Section divider className="pb-0">
        <Reveal>
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-sm text-slate-500">Other industries we design for</p>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.filter((i) => i.slug !== industry.slug).map((i) => (
                <Link key={i.slug} to={`/industries/${i.slug}/`} className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs font-medium text-slate-400 transition-colors hover:border-gold-400/30 hover:text-gold-300">
                  {i.shortName}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      <CTABand eyebrow="Industry fit" title={`Let's build the website your ${industry.shortName.toLowerCase()} customers expect.`} intro="Tell us how your customers find you today and what you want the website to do. We'll reply with a clear scope and a fixed price." />
    </>
  );
}
