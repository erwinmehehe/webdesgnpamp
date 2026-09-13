import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Smartphone,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
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
import { services } from "@/data/services";
import { generalFaqs, site } from "@/data/site";

const whyUs = [
  {
    icon: Users,
    title: "You deal with me directly",
    description: "No account-manager handoff. I stay responsible for the website from the first conversation through launch.",
  },
  {
    icon: Target,
    title: "Built around enquiries",
    description: "The message, proof and calls to action are planned around what helps a serious visitor contact you.",
  },
  {
    icon: Smartphone,
    title: "Easy to act on mobile",
    description: "Calls, messages and enquiry forms stay obvious on the device many customers will use first.",
  },
  {
    icon: TrendingUp,
    title: "Clarity before cleverness",
    description: "Visitors should understand what you offer, why they should choose you and what to do next within seconds.",
  },
];

const conversionNotes: Record<string, string> = {
  "coreaxis-bpo": "Separates client services from careers so each audience reaches the right next step faster.",
  "sizzle-house": "Puts menu, opening information and the reservation path where mobile visitors can act quickly.",
  "skyline-hotel": "Makes room details and the direct enquiry path clear before a guest leaves for a booking platform.",
};

export function HomePage() {
  usePageMeta("Web Design Pampanga | Professional Business Websites in Pampanga", site.description);

  return (
    <>
      <Hero />

      <Section id="work" divider>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <Reveal><Eyebrow>Website examples</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[2.8rem]">
                See how the right page structure makes it easier to <span className="text-gold-gradient">enquire.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 text-base leading-relaxed text-slate-400">
                These are concept examples, but the conversion decisions are practical: make the offer clear, answer the biggest hesitation and keep the next action obvious.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link to="/portfolio/" className="group inline-flex items-center gap-2 text-sm font-semibold text-gold-400 transition-colors hover:text-gold-300">
              View all website samples
              <span className="h-px w-8 bg-current transition-all duration-300 group-hover:w-12" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-64px" }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
          className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {featuredProjects.slice(0, 3).map((project) => (
            <motion.div key={project.slug} variants={staggerItem} className="min-w-0">
              <ProjectCard project={project} />
              <p className="mx-2 mt-4 text-sm leading-relaxed text-slate-500">
                <span className="font-semibold text-slate-300">Conversion decision:</span> {conversionNotes[project.slug] || project.approach}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section id="services" divider>
        <SectionIntro
          eyebrow="What I can build"
          title={<>Everything your website needs to turn visits into <span className="text-gold-gradient">enquiries.</span></>}
          description="From a new business website to ecommerce or a redesign, the goal is the same: make it easier for the right customer to understand you, trust you and contact you."
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
                  See what is included
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
            <Reveal><Eyebrow>Why work with me</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[2.7rem]">
                Every page should move the visitor closer to <span className="text-gold-gradient">contacting you.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-slate-400">
                I start with the decision you want the visitor to make, then shape the page around the message, proof and next step that make that decision easier.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-7">
                <CheckList items={["Clear offer above the fold", "Proof before asking for the lead", "Contact paths that are easy to find", "No unnecessary sections that distract from the next step"]} />
              </div>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="mt-8"><GoldButton to="/contact/">Get a quote</GoldButton></div>
            </Reveal>
          </div>
          <InfoCardGrid items={whyUs} columns={2} />
        </div>

        <div className="mt-16"><StatStrip /></div>
      </Section>

      <Section id="pricing" divider>
        <SectionIntro
          eyebrow="Pricing"
          title={<>Know the starting point <span className="text-gold-gradient">before we talk.</span></>}
          description="Choose the closest package, then I will confirm the scope based on the pages, content and functionality you actually need."
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

      <Section ambient divider>
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <Eyebrow>Process</Eyebrow>
              <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-[1.08] text-white sm:text-4xl">
                From first brief to a website ready to <span className="text-gold-gradient">win enquiries.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-500">You always know what is being built, what I need from you and what happens next.</p>
          </div>
        </Reveal>
        <ProcessSteps />
      </Section>

      <Section ambient divider>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal><Eyebrow>FAQ</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl">
                Questions to answer before you <span className="text-gold-gradient">get started.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-slate-400">
                Cost, timing, redesigns, content and what I need from you. If your question is not here, send it through the quote form.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-7 flex flex-wrap gap-3"><GoldButton to="/contact/">Get a quote</GoldButton></div>
            </Reveal>
          </div>
          <FAQAccordion items={generalFaqs.slice(0, 5)} />
        </div>
      </Section>

      <CTABand
        eyebrow="Ready for more enquiries?"
        title="Turn your website into a stronger lead-generation tool."
        intro="Tell me what you offer and what you want visitors to do. I will help you build the clearest path from first visit to enquiry."
      />
    </>
  );
}
