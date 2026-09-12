import { CheckCircle2, Clock, Github, HeartHandshake, MapPin, Palette, Search, ShieldCheck, Sparkles } from "lucide-react";
import {
  CTABand, CheckList, CrossLinks, Eyebrow, GoldButton,
  InfoCardGrid, PageHero, ProcessSteps, Section, SectionIntro, StatStrip,
} from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { Link, usePageMeta } from "@/router";
import { services } from "@/data/services";
import { site, testimonials } from "@/data/site";

const values = [
  { icon: HeartHandshake, title: "One studio, start to finish", description: "Design, development, SEO and maintenance under one roof — so nothing falls between two suppliers who never speak." },
  { icon: ShieldCheck, title: "Honest scope, fixed prices", description: "You get a written scope and a fixed number before we start. If something changes, you'll know the cost before any work continues." },
  { icon: Clock, title: "Respect for your time", description: "We ask good questions early, keep meetings short, and give you plain-language updates instead of jargon and silence." },
  { icon: Palette, title: "Craft over decoration", description: "Typography, spacing, hierarchy and speed get the attention. Trends and effects are used when they help the customer decide." },
];

const specialties = [
  "Conversion-focused web design",
  "Technical SEO and site architecture",
  "Local SEO for Pampanga businesses",
  "Structured data and schema markup",
  "Content structure and internal linking",
  "CRO, analytics and lead tracking",
];

export function AboutPage() {
  usePageMeta(
    "About Erwin Valles | Web Design Pampanga",
    "Meet Erwin Valles, the person behind Web Design Pampanga. Web design, technical SEO, local SEO and conversion-focused websites for Pampanga businesses.",
  );

  return (
    <>
      <PageHero
        eyebrow="About Web Design Pampanga"
        title={<>A local studio with a real person <span className="text-gold-gradient">behind the work.</span></>}
        intro="Web Design Pampanga is led by Erwin Valles. The work combines web design, SEO and conversion thinking so local businesses get a website that is easier to find, easier to trust and easier to contact."
        crumbs={[{ label: "About" }]}
      >
        <GoldButton to="/contact/">Get My Fixed-Price Quote</GoldButton>
      </PageHero>

      <Section divider>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <Reveal>
            <figure className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.03]">
              <img
                src="https://avatars.githubusercontent.com/u/20321511?v=4"
                alt="Erwin Valles, founder of Web Design Pampanga"
                loading="eager"
                className="aspect-square w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" aria-hidden="true" />
              <figcaption className="absolute bottom-5 left-5 right-5">
                <p className="font-display text-lg font-semibold text-white">Erwin Valles</p>
                <p className="mt-1 text-sm text-slate-300">Web Designer & SEO Specialist</p>
              </figcaption>
            </figure>
          </Reveal>

          <div>
            <Reveal><Eyebrow>Founder</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl">
                Meet <span className="text-gold-gradient">Erwin Valles.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-400">
                <p>Erwin is the person behind Web Design Pampanga. His work sits at the intersection of website design and SEO: planning pages around search intent, building clear customer journeys, improving technical crawlability, and making sure a website gives people an obvious next step.</p>
                <p>That means projects are not treated as a visual redesign alone. Site structure, metadata, schema, internal links, local search signals, mobile usability and conversion paths are considered alongside typography, layout and branding.</p>
                <p>For Pampanga businesses, the goal is practical: build a site that represents the business properly, can be understood by search engines, and helps turn more visitors into calls, messages, bookings or enquiries.</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="https://github.com/erwinmehehe"
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-gold-400/30 hover:text-gold-300"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  GitHub profile
                </a>
                <Link
                  to="/blog/"
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-gold-400/30 hover:text-gold-300"
                >
                  <Search className="h-4 w-4" aria-hidden="true" />
                  Read Erwin&rsquo;s articles
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((item, i) => (
            <Reveal key={item} delay={0.05 * i}>
              <div className="flex h-full items-start gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
                <span className="text-sm leading-relaxed text-slate-300">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16"><StatStrip /></div>
      </Section>

      <Section ambient divider>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <Reveal><Eyebrow>How we work</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl">
                Practical process, <span className="text-gold-gradient">careful craft.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-400">
                <p>Pampanga businesses rarely need a website for its own sake. They need more enquiries, better credibility with corporate buyers, an easier recruitment flow, or a presence that finally matches the quality of the work. We start there and work backwards into structure, design and code.</p>
                <p>A focused site that launches in a month and converts is worth far more than an ambitious build that stalls for six months. If something is not needed yet, we will say so and plan it for later.</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-7">
                <CheckList items={["Fixed price and written scope before any work starts", "Mobile-first design, tested on real devices", "On-page SEO foundations in every build", "You keep full ownership of domain, hosting and files"]} />
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <div className="glass rounded-[2rem] p-8">
              <Eyebrow>Local presence</Eyebrow>
              <div className="mt-5 flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold-400" aria-hidden="true" />
                <div>
                  <p className="font-display text-lg font-semibold text-white">Built for Pampanga businesses</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">Working with businesses across Clark, Angeles City, San Fernando, Mabalacat and the wider province, with on-site or online project discussions depending on what is practical.</p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-slate-400">Local knowledge matters most when it changes the work: the services customers search for, how they prefer to contact a business, what trust signals matter, and how location pages should be written without turning into thin copy.</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section divider>
        <SectionIntro eyebrow="What we stand for" title={<>Four commitments we don&rsquo;t <span className="text-gold-gradient">compromise on.</span></>} description="These shape how projects run and how decisions get made when scope, design and search requirements compete." />
        <div className="mt-14"><InfoCardGrid items={values} columns={2} /></div>
      </Section>

      <Section ambient divider>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal><Eyebrow>Process</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl">Four stages, no surprises.</h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-slate-400">Discovery, strategy, build and launch. Each stage has a clear purpose and a clear decision point before the project moves forward.</p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-7"><GoldButton to="/contact/">Start the conversation</GoldButton></div>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                <Sparkles className="h-3.5 w-3.5 text-gold-400/80" aria-hidden="true" />
                {site.responseTime}
              </p>
            </Reveal>
          </div>
          <ProcessSteps />
        </div>
      </Section>

      <Section divider>
        <SectionIntro eyebrow="In their words" title="What clients say after launch" description="Feedback from businesses that needed clearer websites, stronger mobile usability and better enquiry paths." />
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
