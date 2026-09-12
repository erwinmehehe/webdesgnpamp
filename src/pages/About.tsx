import { CheckCircle2, Clock, Github, HeartHandshake, MapPin, Palette, Search, ShieldCheck } from "lucide-react";
import {
  CTABand,
  CheckList,
  CrossLinks,
  Eyebrow,
  GoldButton,
  InfoCardGrid,
  PageHero,
  ProcessSteps,
  Section,
  SectionIntro,
  StatStrip,
} from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { Link, usePageMeta } from "@/router";
import { services } from "@/data/services";
import { site } from "@/data/site";

const values = [
  {
    icon: HeartHandshake,
    title: "Direct contact",
    description: "You work with me from the first conversation through launch. There is no account manager in the middle.",
  },
  {
    icon: ShieldCheck,
    title: "Clear scope and price",
    description: "I write down what is included, the timeline and the price before the project starts.",
  },
  {
    icon: Clock,
    title: "Respect for your time",
    description: "I keep meetings useful, ask for what I need and explain decisions without burying you in jargon.",
  },
  {
    icon: Palette,
    title: "Design with a job to do",
    description: "Typography, layout and motion should make the site easier to use. They are not there just to decorate the page.",
  },
];

const specialties = [
  "Web design",
  "Technical SEO",
  "Local SEO",
  "Structured data",
  "Content structure and internal linking",
  "CRO, analytics and lead tracking",
];

export function AboutPage() {
  usePageMeta(
    "About Erwin Valles | Web Design Pampanga",
    "Meet Erwin Valles, the web designer and SEO specialist behind Web Design Pampanga.",
  );

  return (
    <>
      <PageHero
        eyebrow="About"
        title={<>I&rsquo;m Erwin Valles, the person behind <span className="text-gold-gradient">Web Design Pampanga.</span></>}
        intro="I design and improve websites for businesses that need better presentation, clearer content and stronger SEO foundations. You deal with me directly from planning to launch."
        crumbs={[{ label: "About" }]}
      >
        <GoldButton to="/contact/">Start a project</GoldButton>
      </PageHero>

      <Section divider>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <Reveal>
            <figure className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.03]">
              <img
                src="https://avatars.githubusercontent.com/u/20321511?v=4"
                alt="Erwin Valles, founder of Web Design Pampanga"
                width="800"
                height="800"
                loading="eager"
                decoding="async"
                fetchPriority="high"
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
            <Reveal><Eyebrow>What I do</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl">
                Design, build and SEO in <span className="text-gold-gradient">one project.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-400">
                <p>I work on the parts of a website that affect whether people understand the business, trust it and get in touch.</p>
                <p>That includes the page structure, design, mobile layout, technical SEO, metadata, schema, internal links, forms and tracking. I would rather fix the basics properly than add effects that do not help the customer.</p>
                <p>Most of my work is with businesses in Pampanga, but the process works the same way for remote projects.</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="https://github.com/erwinmehehe" target="_blank" rel="me noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-gold-400/30 hover:text-gold-300">
                  <Github className="h-4 w-4" aria-hidden="true" />GitHub
                </a>
                <Link to="/author/erwin-valles/" className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-gold-400/30 hover:text-gold-300">
                  <Search className="h-4 w-4" aria-hidden="true" />Articles by Erwin
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((item, index) => (
            <Reveal key={item} delay={0.05 * index}>
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
            <Reveal><Eyebrow>How I work</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl">
                Keep the project <span className="text-gold-gradient">simple and useful.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-400">
                <p>Before I design anything, I want to know what the website is supposed to improve. That might be enquiries, credibility, recruitment, local visibility or simply making the business easier to understand.</p>
                <p>Once that is clear, the rest of the work is easier to judge. If a feature is not needed yet, I will say so.</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-7">
                <CheckList items={["Written scope and price before work starts", "Mobile layouts included", "SEO basics included in the build", "You keep control of domain, hosting and files"]} />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="glass rounded-[2rem] p-8">
              <Eyebrow>Based in Pampanga</Eyebrow>
              <div className="mt-5 flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold-400" aria-hidden="true" />
                <div>
                  <p className="font-display text-lg font-semibold text-white">Working with businesses across Pampanga</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">Clark, Angeles City, San Fernando, Mabalacat and nearby areas are all within the normal service area.</p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-slate-400">Projects can be discussed online or in person when that makes sense. The website still needs to work for the people actually searching, calling and messaging locally.</p>
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex text-sm font-semibold text-gold-400 hover:text-gold-300">View the Google Business Profile →</a>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section divider>
        <SectionIntro
          eyebrow="What you can expect"
          title={<>Four things I try to keep <span className="text-gold-gradient">consistent on every project.</span></>}
          description="Clear ownership, clear scope, useful communication and design decisions that have a reason behind them."
        />
        <div className="mt-14"><InfoCardGrid items={values} columns={2} /></div>
      </Section>

      <Section ambient divider>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal><Eyebrow>Process</Eyebrow></Reveal>
            <Reveal delay={0.08}><h2 className="mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl">Plan, design, build, launch.</h2></Reveal>
            <Reveal delay={0.14}><p className="mt-5 max-w-md text-base leading-relaxed text-slate-400">Four stages, with a clear decision before the project moves to the next one.</p></Reveal>
            <Reveal delay={0.2}><div className="mt-7"><GoldButton to="/contact/">Tell me about the project</GoldButton></div></Reveal>
            <Reveal delay={0.24}><p className="mt-4 text-xs text-slate-500">{site.responseTime}</p></Reveal>
          </div>
          <ProcessSteps />
        </div>
      </Section>

      <CrossLinks eyebrow="Services" title="What I can help with" links={services.slice(0, 6).map((service) => ({ label: service.name, description: service.short, to: `/${service.slug}/`, icon: service.icon }))} />
      <CTABand eyebrow="Have a project in mind?" title="Tell me what you need." intro="Send the basics and I will tell you what I would recommend, what it should cost and what I need from you to start." />
    </>
  );
}
