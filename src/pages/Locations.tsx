import { ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { CTABand, CheckList, Eyebrow, FAQAccordion, GhostButton, GoldButton, PageHero, Section, SectionIntro } from "@/components/blocks";
import { Reveal, staggerItem } from "@/components/Reveal";
import { Link, usePageMeta } from "@/router";
import { locations } from "@/data/locations";
import { generalFaqs, site } from "@/data/site";

export function LocationsPage() {
  usePageMeta(
    "Areas We Serve in Pampanga | Web Design Pampanga",
    "Web design across Pampanga: Clark Freeport Zone, Angeles City, San Fernando, Mabalacat, Guagua, Porac, Mexico and Bacolor.",
  );

  return (
    <>
      <PageHero
        eyebrow="Locations"
        title={<>Based in Pampanga. Working with businesses <span className="text-gold-gradient">across the province.</span></>}
        intro="Local search matters here — customers search by town as often as they search by service. Below is where we work most often, with notes on the market and the businesses we help in each area."
        crumbs={[{ label: "Locations" }]}
        chips={locations.map((l) => l.shortName)}
      >
        <GoldButton to="/contact/">Get My Fixed-Price Quote</GoldButton>
        <GhostButton to={site.mapsUrl} external>
          <MapPin className="h-4 w-4 text-gold-400" aria-hidden="true" />
          View on Google Maps
        </GhostButton>
      </PageHero>

      <Section divider>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-64px" }} transition={{ staggerChildren: 0.08, delayChildren: 0.08 }} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => (
            <motion.div key={location.slug} variants={staggerItem} whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 22 }}>
              <Link to={`/locations/${location.slug}/`} className="group flex h-full flex-col rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.045] to-white/[0.012] p-7 transition-colors duration-500 hover:border-gold-400/30">
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold-400/20 bg-gold-400/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-gold-400/20">
                    <MapPin className="h-5 w-5 text-gold-400" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <ArrowUpRight className="h-4 w-4 -translate-x-1 translate-y-1 text-slate-600 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-gold-400 group-hover:opacity-100" aria-hidden="true" />
                </div>
                <h2 className="mt-5 font-display text-lg font-semibold text-white transition-colors duration-300 group-hover:text-gold-300">{location.name}</h2>
                <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-slate-500">{location.region}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{location.intro}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-gold-400/90">
                  Web design in {location.shortName}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section ambient divider>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:items-center">
          <div>
            <Reveal><Eyebrow>Coverage</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl">
                Not on the list? We probably still <span className="text-gold-gradient">cover you.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 text-base leading-relaxed text-slate-400">Pampanga is compact and well connected, and meetings happen in person or over a call — whichever suits you. We also work with clients in Metro Manila and overseas, entirely remotely.</p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-7">
                <CheckList items={["On-site meetings anywhere in Pampanga", "Remote projects nationwide and overseas", "Local market context in your messaging", "Support and maintenance after launch"]} />
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <div className="glass rounded-[2rem] p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-gold-400">Service area</p>
              <p className="mt-4 font-display text-xl font-semibold leading-snug text-white">{site.serviceArea}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">Plus the surrounding towns of Central Luzon — if you&rsquo;re within an hour of Clark, we can meet.</p>
              <div className="mt-6 flex flex-col gap-3">
                <GoldButton to="/contact/" className="w-full">Check your area</GoldButton>
                <GhostButton to="/pricing/">See pricing</GhostButton>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section divider>
        <SectionIntro eyebrow="Getting started" title="Common questions before you enquire" description="Cost, timelines, mobile, SEO and the practical bits — answered plainly." />
        <div className="mt-12 mx-auto max-w-3xl"><FAQAccordion items={generalFaqs.slice(0, 5)} /></div>
      </Section>

      <CTABand eyebrow="Talk to a local studio" title="Tell us where you're based and what you need." intro="Send your business name and a sentence about the website you need. We'll reply with practical questions and next steps." />
    </>
  );
}
