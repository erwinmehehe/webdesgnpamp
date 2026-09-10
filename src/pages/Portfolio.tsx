import { motion } from "framer-motion";
import {
  CTABand, CrossLinks, GhostButton, GoldButton,
  PageHero, Section, SectionIntro,
} from "@/components/blocks";
import { ProjectCard } from "@/components/ProjectCard";
import { usePageMeta } from "@/router";
import { projects } from "@/data/portfolio";
import { industries } from "@/data/industries";

export function PortfolioPage() {
  usePageMeta(
    "Portfolio | Web Design Pampanga",
    "Our portfolio — 10 website designs for Pampanga businesses across BPO, hospitality, restaurant, real estate, dental, logistics, construction, clinic and supply industries.",
  );

  return (
    <>
      <PageHero
        eyebrow="Our portfolio"
        title={<>Recent work for Pampanga <span className="text-gold-gradient">businesses.</span></>}
        intro="Ten website designs across ten different industries. Browse the full collection below — every project, all on one page."
        crumbs={[{ label: "Portfolio" }]}
        chips={["10 projects", "Pampanga industries"]}
      >
        <GoldButton to="/contact/">Discuss your project</GoldButton>
        <GhostButton to="/pricing/">See pricing</GhostButton>
      </PageHero>

      {/* All 10 projects — one simple grid, no sliders or tabs */}
      <Section divider>
        <SectionIntro
          eyebrow="Selected work"
          title="All 10 projects"
          description="A clean look at the sites we've designed — name, industry, location and a short summary for each."
          align="left"
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-64px" }}
          transition={{ staggerChildren: 0.06, delayChildren: 0.05 }}
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </Section>

      <CrossLinks
        eyebrow="By industry"
        title="See how we approach your sector"
        links={industries.slice(0, 6).map((i) => ({ label: i.name, description: i.blurb, to: `/industries/${i.slug}/`, icon: i.icon }))}
      />

      <CTABand
        eyebrow="Your turn"
        title="Let's design something worth showing off."
        intro="Send a few details about your business and we'll reply with a clear scope, a realistic timeline and a fixed price."
      />
    </>
  );
}
