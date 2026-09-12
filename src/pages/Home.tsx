import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  MessageCircle,
  Phone,
  Smartphone,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { IndustryStrip } from "@/components/IndustryStrip";
import {
  CTABand,
  CheckList,
  Eyebrow,
  FAQAccordion,
  GhostButton,
  GoldButton,
  InfoCardGrid,
  PricingCards,
  ProcessSteps,
  Section,
  SectionIntro,
  StatStrip,
} from "@/components/blocks";
import { Reveal, staggerItem } from "@/components/Reveal";
import { Link, usePageMeta } from "@/router";
import { featuredProjects } from "@/data/portfolio";
import { locations } from "@/data/locations";
import { services } from "@/data/services";
import { generalFaqs, painPoints, site } from "@/data/site";

const whyUs = [
  {
    icon: Users,
    title: "You deal with me directly",
    description: "No account manager or handoff. I handle the planning, design and SEO work and stay involved through launch.",
  },
  {
    icon: Target,
    title: "Scope before build",
    description: "Pages, features, timeline and price are agreed before the project starts, so there is less room for surprises later.",
  },
  {
    icon: Smartphone,
    title: "Mobile is part of the design",
    description: "The phone layout is planned from the start because that is where many local customers will see the site first.",
  },
  {
    icon: TrendingUp,
    title: "SEO is considered early",
    description: "Page structure, headings, metadata, internal links and local search needs are planned during the build, not after it.",
  },
];

export function HomePage() {
  usePageMeta("Web Design Pampanga | Professional Business Websites in Pampanga", site.description);

  return (
    <>
      <Hero />

      <Section id="work" divider>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <Reveal><Eyebrow>Sample work</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
                Website directions for <span className="text-gold-gradient">different businesses.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 text-base leading-relaxed text-slate-400">
                These are design samples, not client case studies. Each one shows a different approach to layout, content and mobile UX.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link to="/portfolio/" className="group inline-flex items-center gap-2 text-sm font-semibold text-gold-400 transition-colors hover:text-gold-300">
              View all samples
              <span className="h-px w-8 bg-current transition-all duration-300 group-hover:w-12" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-64px" }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
          className="mt-12 grid gap-10 md:grid-cols-2"
        >
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </Section>

      <IndustryStrip />

      <Section ambient divider>
        <SectionIntro
          eyebrow="Common website problems"
          title={<>A website can look fine and still <span className="text-gold-gradient">cost you enquiries.</span></>}
          description="Most problems are simple: the site is hard to understand, awkward on a phone, too slow, or makes it difficult to get in touch."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {painPoints.map((point, index) => (
            <Reveal key={point.title} delay={0.08 * index}>
              <div className="group flex h-full gap-5 rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-white/[0.012] p-6 transition-all duration-500 hover:border-gold-400/25 sm:p-7">
                <span className="font-display text-sm font-bold text-slate-600 transition-colors duration-500 group-hover:text-gold-400/70">0{index + 1}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{point.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-3xl border border-gold-400/20 bg-gradient-to-r from-gold-500/[0.08] to-white/[0.02] px-7 py-7 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="font-display text-lg font-semibold text-white">Start with the problem that matters most.</p>
              <p className="mt-1 text-sm text-slate-400">A redesign does not need to change everything. It needs to fix the parts that are getting in the way.</p>
            </div>
            <GoldButton to="/web-design/" className="w-full shrink-0 sm:w-auto">See web design service</GoldButton>
          </div>
        </Reveal>
      </Section>

      <Section id="services" divider>
        <SectionIntro
          eyebrow="Services"
          title={<>What I can <span className="text-gold-gradient">help with.</span></>}
          description="Web design, development, WordPress, ecommerce, redesigns, maintenance and SEO for businesses that want one person responsible for the website."
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-64px" }}
          transition={{ staggerChildren: 0.07, delayChildren: 0.08 }}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div key={service.slug} variants={staggerItem} whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 22 }}>
              <Link to={`/${service.slug}/`} className="group flex h-full flex-col rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.045] to-white/[0.012] p-6 transition-colors duration-500 hover:border-gold-400/30">
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gold-400/20 bg-gold-400/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-gold-400/20">
                    <service.icon className="h-5 w-5 text-gold-400" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <ArrowUpRight className="h-4 w-4 -translate-x-1 translate-y-1 text-slate-600 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-gold-400 group-hover:opacity-100" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-white">{service.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{service.short}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-gold-400/90">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section id="why-us" ambient divider>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal><Eyebrow>Why Web Design Pampanga</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
                Direct, practical and <span className="text-gold-gradient">easy to work with.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-slate-400">
                You work directly with me. I keep the scope clear, explain the trade-offs and build the site around the actual business, not a generic package.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-7">
                <CheckList items={["Price and scope agreed before work starts", "You keep control of your domain, hosting and files", "Based in Pampanga and available directly", "Updates in plain English"]} />
              </div>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="mt-8"><GoldButton to="/about/">About Erwin</GoldButton></div>
            </Reveal>
          </div>
          <InfoCardGrid items={whyUs} columns={2} />
        </div>

        <div className="mt-20">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <Eyebrow>How it works</Eyebrow>
                <h3 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">Four steps from brief to launch.</h3>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-slate-500">You know what is being worked on, what I need from you and what happens next.</p>
            </div>
          </Reveal>
          <ProcessSteps />
        </div>

        <div className="mt-16"><StatStrip /></div>
      </Section>

      <Section id="pricing" ambient divider>
        <SectionIntro
          eyebrow="Pricing"
          title={<>Clear <span className="text-gold-gradient">starting prices.</span></>}
          description="The final quote depends on page count, content, features and integrations. These are the starting points I use for most projects."
        />
        <div className="mt-14"><PricingCards /></div>
        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-3xl border border-white/[0.07] bg-white/[0.03] px-7 py-7 sm:flex-row">
            <p className="text-center text-sm text-slate-400 sm:text-left">
              Already have a website? Care plans start at <span className="font-semibold text-slate-200">₱3,500/month</span> for updates, backups and monitoring.
            </p>
            <GhostButton to="/pricing/">See full pricing</GhostButton>
          </div>
        </Reveal>
      </Section>

      <Section divider>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal><Eyebrow>FAQ</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl">
                Questions I get <span className="text-gold-gradient">all the time.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-slate-400">
                Cost, timing, mobile, redesigns and SEO. If your question is not here, send it through the contact page.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-7 flex flex-wrap gap-3"><GoldButton to="/contact/">Ask a question</GoldButton></div>
            </Reveal>
          </div>
          <FAQAccordion items={generalFaqs.slice(0, 5)} />
        </div>
      </Section>

      <Section id="contact" ambient divider>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <Reveal><Eyebrow>Get in touch</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
                Have a website project <span className="text-gold-gradient">in mind?</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400">
                Send the basics. I will review what you need and tell you what the next step should be.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 space-y-3">
                <a href={site.phoneHref} className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-400/30 hover:bg-white/[0.05]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-400/15"><Phone className="h-5 w-5 text-gold-400" aria-hidden="true" /></span>
                  <span><span className="block text-sm font-semibold text-white">{site.phoneDisplay}</span><span className="mt-0.5 block text-xs text-slate-500">Call or text · {site.hours}</span></span>
                </a>
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-400/30 hover:bg-white/[0.05]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/15"><MessageCircle className="h-5 w-5 text-emerald-400" aria-hidden="true" /></span>
                  <span><span className="block text-sm font-semibold text-white">WhatsApp</span><span className="mt-0.5 block text-xs text-slate-500">Send your business name and website link if you have one.</span></span>
                </a>
                <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-400/30 hover:bg-white/[0.05]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-400/15"><MapPin className="h-5 w-5 text-violet-300" aria-hidden="true" /></span>
                  <span><span className="block text-sm font-semibold text-white">{site.location}</span><span className="mt-0.5 block text-xs text-slate-500">View the business listing on Google</span></span>
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="glass rounded-[2rem] p-8">
              <h3 className="font-display text-xl font-semibold text-white">Before I quote</h3>
              <ol className="mt-6 space-y-6">
                {[
                  { title: "Tell me what you need", body: "Business name, current website if you have one, and the main thing you want to improve." },
                  { title: "I review the scope", body: "I may ask a few questions if they affect the page count, features or timeline." },
                  { title: "You get the price in writing", body: "The quote lists the scope, timeline, price and what is included." },
                ].map((item, index) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold-400/25 bg-gold-400/10 font-display text-xs font-bold text-gold-400">0{index + 1}</span>
                    <span><span className="block text-sm font-semibold text-white">{item.title}</span><span className="mt-1 block text-sm leading-relaxed text-slate-400">{item.body}</span></span>
                  </li>
                ))}
              </ol>
              <div className="mt-8"><GoldButton to="/contact/" className="w-full">Send project details</GoldButton></div>
              <p className="mt-4 text-center text-xs text-slate-500">{site.responseTime}</p>
              <ul className="mt-8 flex flex-wrap gap-2 border-t border-white/[0.07] pt-6" aria-label="Areas we serve">
                {locations.map((location) => (
                  <li key={location.slug}>
                    <Link to={`/locations/${location.slug}/`} className="block rounded-full border border-white/[0.08] px-3 py-1 text-[11px] text-slate-500 transition-colors hover:border-gold-400/30 hover:text-gold-300">
                      {location.shortName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTABand
        eyebrow="Need a better website?"
        title="Tell me what you are working with."
        intro="I can look at the current site, the new project or even just a rough idea and tell you what I would recommend next."
      />
    </>
  );
}
