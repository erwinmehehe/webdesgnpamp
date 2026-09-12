import { ArrowRight, Github, Search, LayoutTemplate, MapPin, Gauge } from "lucide-react";
import { Eyebrow, GhostButton, GoldButton, PageHero, Section, SectionIntro } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { posts } from "@/data/blog";
import { Link, usePageMeta } from "@/router";

const specialties = [
  {
    icon: LayoutTemplate,
    title: "Web design & UX",
    description: "Clear page structure, responsive design and conversion paths built around what customers need to decide.",
  },
  {
    icon: Search,
    title: "Technical & local SEO",
    description: "Site architecture, crawlability, metadata, structured data, internal linking and local search foundations.",
  },
  {
    icon: Gauge,
    title: "Performance & CRO",
    description: "Faster pages, cleaner journeys and measurable calls, form submissions and WhatsApp enquiries.",
  },
  {
    icon: MapPin,
    title: "Pampanga market focus",
    description: "Practical website and SEO work for businesses competing in San Fernando, Angeles City, Clark and across Pampanga.",
  },
];

export function AuthorPage() {
  usePageMeta(
    "Erwin Valles | Web Designer & SEO Specialist in Pampanga",
    "Erwin Valles is the founder of Web Design Pampanga, working across web design, technical SEO, local SEO, structured data and conversion-focused website planning.",
  );

  return (
    <>
      <PageHero
        eyebrow="Author & founder"
        title={<>Erwin Valles, <span className="text-gold-gradient">Web Designer & SEO Specialist.</span></>}
        intro="Erwin is the person behind Web Design Pampanga. His work combines web design, technical SEO, local search, structured data and conversion-focused page planning for businesses that need their website to do more than look good."
        crumbs={[{ label: "Erwin Valles" }]}
        chips={["Web design", "Technical SEO", "Local SEO", "Structured data", "CRO"]}
      >
        <GoldButton to="/contact/">Work with Erwin</GoldButton>
        <GhostButton to="https://github.com/erwinmehehe" external>
          <Github className="h-4 w-4" aria-hidden="true" />
          GitHub profile
        </GhostButton>
      </PageHero>

      <Section divider>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
          <Reveal>
            <div className="glass overflow-hidden rounded-[2rem] p-6">
              <img
                src="https://avatars.githubusercontent.com/u/20321511?v=4"
                alt="Erwin Valles, founder of Web Design Pampanga"
                className="aspect-square w-full rounded-2xl object-cover"
              />
              <div className="mt-6">
                <p className="font-display text-xl font-semibold text-white">Erwin Valles</p>
                <p className="mt-1 text-sm font-medium text-gold-400">Founder · Web Design Pampanga</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">Pampanga, Philippines</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal><Eyebrow>Experience in practice</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl">
                Websites, search visibility and conversion <span className="text-gold-gradient">planned together.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-400">
                <p>Erwin works on the parts of a website that usually get separated between different suppliers: information architecture, on-page SEO, technical cleanup, structured data, internal linking, page speed and the calls to action that turn visits into enquiries.</p>
                <p>That means design decisions are made with search and conversion in mind from the start. A service page is not treated as decoration around a keyword. It needs to answer the customer&apos;s questions, make the business credible and give search engines enough context to understand the page.</p>
                <p>His articles focus on the same practical problems that come up in client work: what a business website should cost, how to choose a provider, what local SEO actually requires and how Pampanga businesses can compete online without publishing thin pages just to chase keywords.</p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {specialties.map((item, index) => (
            <Reveal key={item.title} delay={0.06 * index}>
              <div className="h-full rounded-3xl border border-white/[0.07] bg-white/[0.025] p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gold-400/20 bg-gold-400/10">
                  <item.icon className="h-5 w-5 text-gold-400" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section ambient divider>
        <SectionIntro
          eyebrow="Articles by Erwin"
          title="Practical guides for business owners"
          description="Long-form articles about buying websites, local SEO, pricing and the decisions that affect search visibility and enquiries."
          align="left"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={0.06 * index}>
              <article className="group flex h-full flex-col rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-white/[0.012] p-7 transition-colors hover:border-gold-400/30">
                <p className="text-xs font-medium text-gold-400">{post.category} · {post.readTime}</p>
                <h2 className="mt-4 font-display text-xl font-semibold leading-snug text-white">{post.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}/`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-400 transition-colors hover:text-gold-300">
                  Read article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section divider>
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-gold-400/20 bg-gradient-to-br from-gold-500/[0.08] to-white/[0.02] p-8 text-center sm:p-10">
          <Eyebrow className="justify-center">Web Design Pampanga</Eyebrow>
          <h2 className="mt-5 font-display text-2xl font-bold text-white sm:text-3xl">Need help with your own site?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400">See how Web Design Pampanga approaches custom websites, technical SEO and local search for businesses across Pampanga.</p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <GoldButton to="/">Web Design Pampanga</GoldButton>
            <GhostButton to="/contact/">Start a project</GhostButton>
          </div>
        </div>
      </Section>
    </>
  );
}
