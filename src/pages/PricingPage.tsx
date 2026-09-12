import { Check, Info } from "lucide-react";
import {
  CTABand,
  CheckList,
  Eyebrow,
  FAQAccordion,
  GhostButton,
  GoldButton,
  InfoCardGrid,
  PageHero,
  PricingCards,
  Section,
  SectionIntro,
} from "@/components/blocks";
import { Reveal, staggerItem } from "@/components/Reveal";
import { motion } from "framer-motion";
import { Link, usePageMeta } from "@/router";
import { carePlans, essentials, generalFaqs } from "@/data/site";
import { cn } from "@/utils/cn";

const addOns = [
  { title: "Copywriting", description: "I can write the page copy from your existing material and a short interview." },
  { title: "Photography coordination", description: "I can help brief a local photographer for team, premises or product photos." },
  { title: "Campaign landing pages", description: "Extra pages for ads, promos or one-off campaigns, with tracking if needed." },
  { title: "Extra pages", description: "Additional service, location or project pages can be added to the agreed scope." },
  { title: "Multilingual build", description: "Additional language versions can be planned when the business genuinely needs them." },
  { title: "Booking or ordering flows", description: "Appointments, reservations, quotations or simple ordering with notifications." },
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
        title={<>Clear starting prices before we <span className="text-gold-gradient">talk scope.</span></>}
        intro="Starter websites begin at ₱30,000 and business websites at ₱50,000. The final quote depends on page count, content, features and integrations. You get the price in writing before work starts."
        crumbs={[{ label: "Pricing" }]}
        chips={["Starter sites from ₱30,000", "Business sites from ₱50,000", "Written scope before work starts"]}
      >
        <GoldButton to="/contact/">Request a quote</GoldButton>
        <GhostButton to="/portfolio/">See sample work</GhostButton>
      </PageHero>

      <Section divider>
        <SectionIntro
          eyebrow="Website packages"
          title="Three common starting points"
          description="If your project falls between two packages, I will quote the scope that actually fits rather than forcing it into a bigger package."
        />
        <div className="mt-14"><PricingCards /></div>
        <Reveal delay={0.15}>
          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-6 py-5 text-sm text-slate-400">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold-400/80" aria-hidden="true" />
            <p>Payment terms are confirmed in the quote. Domain and hosting should stay in accounts you can access and control.</p>
          </div>
        </Reveal>
      </Section>

      <Section ambient divider>
        <SectionIntro
          eyebrow="Included"
          title={<>The basics are part of the <span className="text-gold-gradient">website build.</span></>}
          description="Responsive layouts, contact paths, SEO basics and launch checks are standard parts of the project, not surprise extras at the end."
        />
        <div className="mt-14"><InfoCardGrid items={essentials} columns={3} /></div>
      </Section>

      <Section divider>
        <SectionIntro
          eyebrow="Ongoing care"
          title={<>Support after <span className="text-gold-gradient">launch.</span></>}
          description="If you want me to keep the site updated, backed up and monitored, these are the monthly care options. You can also manage the site yourself."
        />
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-64px" }} transition={{ staggerChildren: 0.12, delayChildren: 0.08 }} className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {carePlans.map((plan) => (
            <motion.div key={plan.name} variants={staggerItem} whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 280, damping: 22 }} className={cn("relative flex flex-col rounded-3xl p-8", plan.featured ? "border border-gold-400/40 bg-gradient-to-b from-gold-500/[0.1] to-ink-900 shadow-[0_32px_90px_-30px_rgba(246,193,74,0.3)]" : "border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01]")}>
              {plan.featured && <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-ink-950">Popular</span>}
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
            <div className="rounded-3xl border border-white/[0.07] bg-white/[0.03] px-7 py-6"><p className="font-display text-base font-semibold text-white">Hosting and domain</p><p className="mt-2 text-sm leading-relaxed text-slate-400">I can help choose and set up hosting in your name. You pay the provider directly and keep access to the account.</p></div>
            <div className="rounded-3xl border border-white/[0.07] bg-white/[0.03] px-7 py-6"><p className="font-display text-base font-semibold text-white">No monthly plan required</p><p className="mt-2 text-sm leading-relaxed text-slate-400">If you do not need a care plan, you can still request updates or fixes as separate work.</p></div>
          </div>
        </Reveal>
      </Section>

      <Section ambient divider>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <Reveal><Eyebrow>Optional extras</Eyebrow></Reveal>
            <Reveal delay={0.08}><h2 className="mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl">Add only what the project <span className="text-gold-gradient">actually needs.</span></h2></Reveal>
            <Reveal delay={0.14}><p className="mt-5 text-base leading-relaxed text-slate-400">Copywriting, photography, landing pages and extra functionality can be added when they are useful. They are not required for every site.</p></Reveal>
            <Reveal delay={0.2}><div className="mt-7"><CheckList items={["Quoted before the extra work starts", "Can be added later", "No retainer required for one-off extras"]} /></div></Reveal>
          </div>
          <InfoCardGrid items={addOns} columns={2} />
        </div>
      </Section>

      <Section divider>
        <SectionIntro eyebrow="Pricing questions" title="Common questions about cost" description="Budgets, timing, hosting and what happens when the scope changes." />
        <div className="mx-auto mt-12 max-w-3xl"><FAQAccordion items={[generalFaqs[0], generalFaqs[1], generalFaqs[4], generalFaqs[6]]} /></div>
      </Section>

      <CTABand eyebrow="Need a price?" title="Send the project details." intro="I will review the scope and send the next step in writing." />
    </>
  );
}
