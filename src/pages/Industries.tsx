import { ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { CTABand, Eyebrow, FAQAccordion, InfoCardGrid, PageHero, Section, SectionIntro } from "@/components/blocks";
import { Reveal, staggerItem } from "@/components/Reveal";
import { Link, usePageMeta } from "@/router";
import { industries } from "@/data/industries";
import { generalFaqs, site } from "@/data/site";

const approach = [
  { title: "We learn how your buyers decide", description: "A hotel guest, a procurement officer and a patient all behave differently. The site structure follows their decision path, not a template order." },
  { title: "We speak your industry's language", description: "Specifications, certifications, inclusions, schedules, coverage — the details that make you credible inside your category." },
  { title: "We design for both audiences", description: "Most local businesses serve customers and candidates. Where that's true, we structure two clear paths instead of blurring them together." },
  { title: "We keep it maintainable", description: "Whatever we build, your team should be able to update prices, listings, roles or services without calling a developer every week." },
];

export function IndustriesPage() {
  usePageMeta(
    "Industries We Design For | Web Design Pampanga",
    "Web design for BPO, hotels, restaurants, clinics, dental, real estate, construction, logistics and manufacturing businesses across Pampanga.",
  );

  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={<>Websites shaped for how your <span className="text-gold-gradient">industry sells.</span></>}
        intro="A restaurant, a dental clinic, an outsourcing company and a trucking firm don't need the same website — even if they're all in Pampanga. We design around the way buyers in your category actually research, compare and decide."
        crumbs={[{ label: "Industries" }]}
        chips={industries.slice(0, 6).map((i) => i.shortName)}
      />

      <Section divider>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-64px" }} transition={{ staggerChildren: 0.08, delayChildren: 0.08 }} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <motion.div key={industry.slug} variants={staggerItem} whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 22 }}>
              <Link to={`/industries/${industry.slug}/`} className="group flex h-full flex-col rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.045] to-white/[0.012] p-7 transition-colors duration-500 hover:border-gold-400/30">
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold-400/20 bg-gold-400/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-gold-400/20">
                    <industry.icon className="h-5 w-5 text-gold-400" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <ArrowUpRight className="h-4 w-4 -translate-x-1 translate-y-1 text-slate-600 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-gold-400 group-hover:opacity-100" aria-hidden="true" />
                </div>
                <h2 className="mt-5 font-display text-lg font-semibold text-white transition-colors duration-300 group-hover:text-gold-300">{industry.name}</h2>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-400">{industry.blurb}</p>
                <span className="mt-5 flex items-center gap-1.5 text-xs text-slate-500">
                  <MapPin className="h-3 w-3 text-gold-400/70" aria-hidden="true" />
                  {industry.area}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section ambient divider>
        <SectionIntro eyebrow="How we adapt" title={<>Same studio, different <span className="text-gold-gradient">playbook.</span></>} description="Industry is not a theme choice — it changes structure, content priority, proof and the path to contact." />
        <div className="mt-14"><InfoCardGrid items={approach} columns={2} numbered /></div>
      </Section>

      <Section divider>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal><Eyebrow>Common questions</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl">Before you <span className="text-gold-gradient">commit.</span></h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-slate-400">The same questions come up across industries — budget, timeline, mobile, SEO and who keeps the keys afterwards.</p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 flex items-center gap-2 text-sm text-slate-500">
                <MapPin className="h-4 w-4 text-gold-400/80" aria-hidden="true" />
                {site.serviceArea}
              </p>
            </Reveal>
          </div>
          <FAQAccordion items={generalFaqs.slice(0, 6)} />
        </div>
      </Section>

      <CTABand eyebrow="Industry fit" title="Tell us your industry and what the site has to do." intro="We'll suggest the structure that usually works best in your category — and what it realistically costs in Pampanga." />
    </>
  );
}
