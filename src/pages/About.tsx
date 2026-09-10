import { CheckCircle2, Clock, HeartHandshake, MapPin, Palette, ShieldCheck, Sparkles } from "lucide-react";
import {
  CTABand, CheckList, CrossLinks, Eyebrow, GoldButton,
  InfoCardGrid, PageHero, ProcessSteps, Section, SectionIntro, StatStrip,
} from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { usePageMeta } from "@/router";
import { services } from "@/data/services";
import { site, testimonials } from "@/data/site";

const values = [
  { icon: HeartHandshake, title: "One studio, start to finish", description: "Design, development, SEO and maintenance under one roof — so nothing falls between two suppliers who never speak." },
  { icon: ShieldCheck, title: "Honest scope, fixed prices", description: "You get a written scope and a fixed number before we start. If something changes, you'll know the cost before any work continues." },
  { icon: Clock, title: "Respect for your time", description: "We ask good questions early, keep meetings short, and give you plain-language updates instead of jargon and silence." },
  { icon: Palette, title: "Craft over decoration", description: "Typography, spacing, hierarchy and speed get the attention. Trends and effects are used when they help the customer decide." },
];

export function AboutPage() {
  usePageMeta(
    "About | Web Design Pampanga — Independent Studio in Pampanga",
    "Web Design Pampanga is an independent studio designing polished, clear, conversion-focused websites for businesses in Clark, Angeles City, San Fernando and across Pampanga.",
  );

  return (
    <>
      <PageHero
        eyebrow="About the studio"
        title={<>We build websites that make businesses look <span className="text-gold-gradient">their best.</span></>}
        intro="Web Design Pampanga is an independent studio for businesses that want a stronger, more considered presence online. Most business owners didn't start a company to think about websites — our job is to translate what you're good at into a clear, credible online presence."
        crumbs={[{ label: "About" }]}
      >
        <GoldButton to="/contact/">Get My Fixed-Price Quote</GoldButton>
      </PageHero>

      <Section divider>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <figure className="relative overflow-hidden rounded-[2rem] border border-white/[0.08]">
              <img
                src="https://images.pexels.com/photos/8102000/pexels-photo-8102000.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Design team collaborating on website layouts in a modern studio"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" aria-hidden="true" />
              <figcaption className="absolute bottom-5 left-5 right-5 flex items-center gap-2.5 text-xs text-slate-300">
                <MapPin className="h-3.5 w-3.5 text-gold-400" aria-hidden="true" />
                {site.location} · working with businesses across Central Luzon
              </figcaption>
            </figure>
          </Reveal>
          <div>
            <Reveal><Eyebrow>How we work</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl">
                Practical process, <span className="text-gold-gradient">careful craft.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 text-base leading-relaxed text-slate-400">We keep things practical: understand the business, make the message clearer, design the experience, and build something you can be proud to send people to.</p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-400">
                <p>Pampanga businesses rarely need a website for its own sake. They need more enquiries, better credibility with corporate buyers, an easier recruitment flow, or a presence that finally matches the quality of the work. We start there and work backwards into structure, design and code.</p>
                <p>A focused site that launches in a month and converts is worth far more than an ambitious build that stalls for six months. If something isn't needed yet, we'll say so and plan it for later.</p>
              </div>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="mt-7">
                <CheckList items={["Fixed price and written scope before any work starts", "Mobile-first design, tested on real devices", "On-page SEO foundations in every build", "You keep full ownership of domain, hosting and files"]} />
              </div>
            </Reveal>
          </div>
        </div>
        <div className="mt-16"><StatStrip /></div>
      </Section>

      <Section ambient divider>
        <SectionIntro eyebrow="What we stand for" title={<>Four commitments we don&rsquo;t <span className="text-gold-gradient">compromise on.</span></>} description="These shape how projects run and how we make decisions when a build gets complicated — which, occasionally, it does." />
        <div className="mt-14"><InfoCardGrid items={values} columns={2} /></div>
      </Section>

      <Section divider>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <Reveal><Eyebrow>Local, on purpose</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl">Why Pampanga businesses choose a local studio.</h2>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-400">
                <p>A studio that lives here understands the market: the corporate standards in Clark, the seasonal patterns in San Fernando, the way customers search and buy, and the reality that many teams are small and time-poor.</p>
                <p>It also means meetings you can attend, decisions made without a time zone gap, and accountability that isn't a chatbot. We work with clients outside Pampanga too — but our roots show in the work.</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[site.serviceArea, "On-site meetings when you need them", "Local considerations in messaging", "Support after launch, same studio"].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <div className="glass h-full rounded-[2rem] p-8">
              <Eyebrow>How it works</Eyebrow>
              <h3 className="mt-4 font-display text-xl font-semibold text-white">Four stages, no surprises</h3>
              <ol className="mt-6 space-y-5">
                {[
                  { t: "Discovery", d: "We learn your business, customers, competitors and goals." },
                  { t: "Strategy & design", d: "Structure and message first, then the visual direction." },
                  { t: "Build", d: "Responsive development plus testing across devices." },
                  { t: "Launch & support", d: "Live, indexed and ready — with support afterwards." },
                ].map((step, i) => (
                  <li key={step.t} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold-400/25 bg-gold-400/10 font-display text-xs font-bold text-gold-400">0{i + 1}</span>
                    <span>
                      <span className="block text-sm font-semibold text-white">{step.t}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-slate-400">{step.d}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <div className="mt-8"><GoldButton to="/contact/" className="w-full">Start the conversation</GoldButton></div>
              <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-slate-500">
                <Sparkles className="h-3.5 w-3.5 text-gold-400/80" aria-hidden="true" />
                {site.responseTime}
              </p>
            </div>
          </Reveal>
        </div>
        <div className="mt-20"><ProcessSteps /></div>
      </Section>

      <Section ambient divider>
        <SectionIntro eyebrow="In their words" title="What clients say after launch" description="Three responses that come up again and again in conversations with Pampanga business owners." />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={0.08 * i}>
              <figure className="glass flex h-full flex-col rounded-3xl p-8">
                <blockquote className="flex-1 text-[15px] leading-relaxed text-slate-300">{t.quote}</blockquote>
                <figcaption className="mt-6">
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{t.role} · {t.location}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      <CrossLinks eyebrow="Where to next" title="Explore what we do" links={services.slice(0, 6).map((s) => ({ label: s.name, description: s.short, to: `/${s.slug}/`, icon: s.icon }))} />

      <CTABand eyebrow="Let's talk" title="Tell us what your website needs to do." intro="A short conversation is usually enough to know whether we're the right studio for your project — and what it would realistically cost." />
    </>
  );
}
