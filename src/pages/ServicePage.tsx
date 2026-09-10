import { BadgeCheck, MessageCircle, Sparkles } from "lucide-react";
import {
  CTABand, CheckList, CrossLinks, Eyebrow, FAQAccordion,
  GhostButton, GoldButton, InfoCardGrid, PageHero, ProcessSteps, Section, SectionIntro,
} from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { Link, usePageMeta } from "@/router";
import { getIndustry } from "@/data/industries";
import { getService, services } from "@/data/services";
import { site } from "@/data/site";
import { NotFoundPage } from "@/pages/NotFound";

export function ServicePage({ slug }: { slug: string }) {
  const service = getService(slug);
  usePageMeta(service ? service.metaTitle : "Page not found | Web Design Pampanga", service?.metaDescription);

  if (!service) return <NotFoundPage />;

  const relatedServices = service.relatedServices.map((s) => getService(s)).filter((s): s is NonNullable<typeof s> => Boolean(s));
  const relatedIndustries = service.relatedIndustries.map((s) => getIndustry(s)).filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.h1}
        intro={service.intro}
        crumbs={[{ label: service.name }]}
        chips={[service.priceNote, "Includes SEO foundations", site.location]}
      >
        <GoldButton to="/contact/">Get My Fixed-Price Quote</GoldButton>
        <GhostButton to={site.whatsapp} external>
          <MessageCircle className="h-4 w-4 text-emerald-400" aria-hidden="true" />
          Quick question on WhatsApp
        </GhostButton>
      </PageHero>

      <Section divider>
        <SectionIntro
          eyebrow="What it means for you"
          title={<>What this actually <span className="text-gold-gradient">gets you.</span></>}
          description="Not features for their own sake — the practical outcomes a business feels in enquiries, credibility and time saved."
          align="left"
        />
        <div className="mt-12"><InfoCardGrid items={service.outcomes} columns={2} /></div>
      </Section>

      <Section ambient divider>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <Reveal><Eyebrow>Scope</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl">What&rsquo;s included</h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400">Every project is confirmed in a written scope before we start, so there&rsquo;s no ambiguity about what you&rsquo;re paying for.</p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8"><CheckList items={service.includes} columns={1} /></div>
            </Reveal>
          </div>
          <div className="space-y-4">
            <Reveal delay={0.1}>
              <div className="glass rounded-3xl p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gold-400/20 bg-gold-400/10">
                  <BadgeCheck className="h-5 w-5 text-gold-400" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">Who this suits best</h3>
                <ul className="mt-4 space-y-3">
                  {service.idealFor.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="rounded-3xl border border-gold-400/20 bg-gradient-to-b from-gold-500/[0.08] to-white/[0.02] p-8">
                <p className="font-display text-lg font-semibold text-white">Not sure this is the right starting point?</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">Tell us what the business needs to achieve and we&rsquo;ll recommend the sensible option — even if that&rsquo;s a smaller project than you expected.</p>
                <div className="mt-6"><GoldButton to="/contact/" className="w-full">Ask for a recommendation</GoldButton></div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section divider>
        <SectionIntro eyebrow="How it works" title="A simple process. A better website." description="Four stages with your feedback built in. You'll always know what's happening and what comes next." />
        <ProcessSteps />
      </Section>

      <Section ambient divider>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal><Eyebrow>FAQ</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl">
                {service.name} <span className="text-gold-gradient">questions.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-slate-400">The questions we hear most often about this work. Anything not covered, just ask — we answer in plain language, no sales script.</p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 flex items-center gap-2 text-sm text-slate-500">
                <Sparkles className="h-4 w-4 text-gold-400/80" aria-hidden="true" />
                {site.responseTime}
              </p>
            </Reveal>
          </div>
          <FAQAccordion items={service.faqs} />
        </div>
      </Section>

      <CrossLinks
        eyebrow="Also relevant"
        title="Related services & industries"
        columns={2}
        links={[
          ...relatedServices.map((s) => ({ label: s.name, description: s.short, to: `/${s.slug}/`, icon: s.icon })),
          ...relatedIndustries.map((i) => ({ label: i.name, description: i.blurb, to: `/industries/${i.slug}/`, icon: i.icon })),
        ].slice(0, 6)}
      />

      <Section divider className="pb-0">
        <Reveal>
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-sm text-slate-500">Looking for something else?</p>
            <div className="flex flex-wrap justify-center gap-3">
              {services.filter((s) => s.slug !== service.slug).slice(0, 4).map((s) => (
                <Link key={s.slug} to={`/${s.slug}/`} className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs font-medium text-slate-400 transition-colors hover:border-gold-400/30 hover:text-gold-300">
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      <CTABand eyebrow="Next step" title={`Let's talk about ${service.name.toLowerCase()}.`} intro="Send a few details about your business and what the website needs to do, and we'll reply with a clear scope and a fixed price." />
    </>
  );
}
