import { Check, ExternalLink, Info, Star } from "lucide-react";
import {
  CTABand, CheckList, Eyebrow, FAQAccordion, GhostButton,
  GoldButton, InfoCardGrid, PageHero, PricingCards, Section, SectionIntro,
} from "@/components/blocks";
import { Reveal, staggerItem } from "@/components/Reveal";
import { motion } from "framer-motion";
import { Link, usePageMeta } from "@/router";
import { carePlans, essentials, generalFaqs, googleReviewsUrl } from "@/data/site";
import { cn } from "@/utils/cn";

const addOns = [
  { title: "Copywriting", description: "We write the page content for you, based on a short interview and your existing materials." },
  { title: "Photography coordination", description: "We brief and coordinate a local photographer for premises, team or product shots." },
  { title: "Campaign landing pages", description: "Focused pages for ads and promos, with tracking so you can see what worked." },
  { title: "Extra pages", description: "Additional service, location or project pages scoped and priced individually." },
  { title: "Multilingual build", description: "Filipino, English, Korean or other language versions for wider audiences." },
  { title: "Booking or ordering flows", description: "Reservations, appointments, quotations or simple ordering with notifications." },
];

export function PricingPage() {
  usePageMeta(
    "Website Pricing Pampanga | Starting Prices & Care Plans",
    "Website pricing in Pampanga: Starter Website from ₱30,000, Business Website from ₱50,000, custom builds quoted per project. Care plans from ₱3,500/month.",
  );

  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={<>Honest starting prices. Fixed quotes before we <span className="text-gold-gradient">begin.</span></>}
        intro="Every website is quoted based on scope, content, functionality and the amount of custom work required. These are the numbers most Pampanga projects actually start from — you'll always get a written, fixed quote before any work starts."
        crumbs={[{ label: "Pricing" }]}
        chips={["Fixed project pricing", "50% to start, 50% at launch", "You own everything on completion"]}
      >
        <GoldButton to="/contact/">Get My Fixed-Price Quote</GoldButton>
        <GhostButton to="/portfolio/">See sample work</GhostButton>
      </PageHero>

      <Section divider>
        <SectionIntro eyebrow="Project packages" title="Choose the right starting point" description="Three typical scopes. If your project sits between two, we'll recommend the one that gets you launched sooner and tell you what can wait." />
        <div className="mt-14"><PricingCards /></div>
        <Reveal delay={0.15}>
          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-6 py-5 text-sm text-slate-400">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold-400/80" aria-hidden="true" />
            <p>Payment terms: 50% to begin, 50% at launch. Domain and hosting are set up in your own name and are paid directly by you, so you always keep control of your assets.</p>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="mt-5 flex flex-col items-start justify-between gap-4 rounded-2xl border border-gold-400/20 bg-gradient-to-r from-gold-500/[0.08] to-white/[0.02] px-6 py-5 transition-colors hover:border-gold-400/40 sm:flex-row sm:items-center">
            <span>
              <span className="flex items-center gap-1.5 text-gold-400">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</span>
              <span className="mt-2 block text-sm font-semibold text-white">5-star Google reviews</span>
              <span className="mt-1 block text-xs text-slate-500">Verify the business and reviews directly on Google before you enquire.</span>
            </span>
            <span className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-gold-400">Open Google Business Profile <ExternalLink className="h-3.5 w-3.5" /></span>
          </a>
        </Reveal>
      </Section>

      <Section ambient divider>
        <SectionIntro eyebrow="Included in every build" title={<>The essentials should not be <span className="text-gold-gradient">add-ons.</span></>} description="Every website starts with the technical and conversion basics needed for a professional launch — never billed as extras." />
        <div className="mt-14"><InfoCardGrid items={essentials} columns={3} /></div>
      </Section>

      <Section divider>
        <SectionIntro eyebrow="Ongoing care" title={<>After launch, someone should be <span className="text-gold-gradient">watching.</span></>} description="Websites need updates, backups and security work. Choose a plan, or handle it yourself with our guidance — either is fine, but doing neither is how sites quietly break." />
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-64px" }} transition={{ staggerChildren: 0.12, delayChildren: 0.08 }} className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {carePlans.map((plan) => (
            <motion.div key={plan.name} variants={staggerItem} whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 280, damping: 22 }} className={cn("relative flex flex-col rounded-3xl p-8", plan.featured ? "border border-gold-400/40 bg-gradient-to-b from-gold-500/[0.1] to-ink-900 shadow-[0_32px_90px_-30px_rgba(246,193,74,0.3)]" : "border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01]")}>
              {plan.featured && <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-ink-950">Most chosen</span>}
              <h3 className="font-display text-lg font-semibold text-white">{plan.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{plan.description}</p>
              <div className="mt-6 flex items-baseline gap-1.5"><span className="font-display text-[2.25rem] font-bold leading-none tracking-tight text-white">{plan.price}</span><span className="text-sm text-slate-500">{plan.period}</span></div>
              <ul className="mt-7 flex-1 space-y-3 border-t border-white/[0.07] pt-7">{plan.features.map((feature) => <li key={feature} className="flex items-start gap-3 text-sm text-slate-300"><span className={cn("mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full", plan.featured ? "bg-gold-400/20" : "bg-white/[0.07]")}><Check className={cn("h-3 w-3", plan.featured ? "text-gold-400" : "text-slate-400")} strokeWidth={3} /></span>{feature}</li>)}</ul>
              <Link to="/contact/" className={cn("group mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-all", plan.featured ? "bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 text-ink-950 hover:brightness-110" : "border border-white/12 bg-white/[0.04] text-white hover:border-gold-400/40")}>Ask about {plan.name}</Link>
            </motion.div>
          ))}
        </motion.div>
        <Reveal delay={0.15}>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/[0.07] bg-white/[0.03] px-7 py-6"><p className="font-display text-base font-semibold text-white">Hosting and domain</p><p className="mt-2 text-sm leading-relaxed text-slate-400">We recommend and set up reliable hosting in your name. Typical business hosting runs a few thousand pesos per year and is paid directly by you.</p></div>
            <div className="rounded-3xl border border-white/[0.07] bg-white/[0.03] px-7 py-6"><p className="font-display text-base font-semibold text-white">No plan? Still supported</p><p className="mt-2 text-sm leading-relaxed text-slate-400">Past clients can always reach us for help on an hourly or per-task basis — a plan simply makes it cheaper and proactive.</p></div>
          </div>
        </Reveal>
      </Section>

      <Section ambient divider>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16"><div><Reveal><Eyebrow>Optional add-ons</Eyebrow></Reveal><Reveal delay={0.08}><h2 className="mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl">Extra work, priced <span className="text-gold-gradient">separately.</span></h2></Reveal><Reveal delay={0.14}><p className="mt-5 text-base leading-relaxed text-slate-400">Nothing here is required to launch a good website. They&rsquo;re useful when you want us to handle content, photography, campaigns or additional functionality.</p></Reveal><Reveal delay={0.2}><div className="mt-7"><CheckList items={["Fixed price agreed before each piece of work", "No retainer required for add-on projects", "Can be phased across months if budget is tight"]} /></div></Reveal></div><InfoCardGrid items={addOns} columns={2} /></div>
      </Section>

      <Section divider><SectionIntro eyebrow="Pricing questions" title="What owners ask about cost and terms" description="Straight answers about budgets, timelines, hosting and what happens if scope changes." /><div className="mx-auto mt-12 max-w-3xl"><FAQAccordion items={[generalFaqs[0], generalFaqs[1], generalFaqs[4], generalFaqs[6]]} /></div></Section>
      <CTABand eyebrow="Get a real number" title="Send your details, get a fixed quote." intro="Tell us what the website needs to do and we'll reply with a written scope, timeline and price — usually within a few hours on business days." />
    </>
  );
}
