import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { CinematicProjectCard } from "@/components/portfolio/CinematicProjectCard";
import { Link, usePageMeta } from "@/router";
import { projects } from "@/data/portfolio";

const easeOut = [0.21, 0.65, 0.15, 1] as const;

export function PortfolioPage() {
  usePageMeta(
    "Web Design Portfolio | Web Design Pampanga",
    "Explore 10 website designs by Web Design Pampanga across BPO, hospitality, restaurants, property, healthcare, logistics, construction and industrial supply.",
  );

  return (
    <div className="relative overflow-hidden bg-ink-950">
      <section className="relative min-h-[76vh] overflow-hidden border-b border-white/[0.06] pb-20 pt-36 sm:pt-40 lg:flex lg:min-h-[82vh] lg:items-end lg:pb-24 lg:pt-44">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="bg-grid bg-grid-fade absolute inset-0 opacity-55" />
          <div className="animate-aurora absolute -left-56 -top-48 h-[620px] w-[620px] rounded-full bg-gold-500/[0.09] blur-[150px]" />
          <div className="animate-aurora absolute -right-48 top-10 h-[520px] w-[520px] rounded-full bg-violet-600/[0.08] blur-[150px] [animation-delay:-8s]" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-ink-950 to-transparent" />
        </div>

        <div className="relative mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-gold-400"
          >
            <span className="h-px w-10 bg-gold-400/70" />
            Selected websites · 01–10
          </motion.div>

          <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:gap-20">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.08, ease: easeOut }}
                className="max-w-5xl font-display text-[3rem] font-semibold leading-[0.96] tracking-[-0.055em] text-white sm:text-6xl lg:text-[5.7rem] xl:text-[6.6rem]"
              >
                Ten websites.
                <br />
                <span className="text-white/32">Explore them.</span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
              className="lg:pb-2"
            >
              <p className="max-w-md text-base leading-relaxed text-slate-400">
                Different industries, different visual languages, one standard of craft. Hover a project to move through the website.
              </p>
              <div className="mt-7 flex items-center gap-3 text-xs text-slate-600">
                <span className="hidden h-2 w-2 rounded-full bg-gold-400 sm:block" />
                <span className="hidden sm:inline">Move through each site with your cursor</span>
                <span className="sm:hidden">Tap a project to explore</span>
              </div>
            </motion.div>
          </div>

          <motion.a
            href="#projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.55 }}
            className="mt-16 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-slate-600 transition-colors hover:text-gold-300 lg:mt-20"
          >
            View the work
            <ArrowDown className="h-4 w-4 animate-scroll-hint" aria-hidden="true" />
          </motion.a>
        </div>
      </section>

      <section id="projects" className="relative scroll-mt-20 py-20 sm:py-24 lg:py-32">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute left-1/2 top-[13%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gold-500/[0.025] blur-[150px]" />
          <div className="absolute -right-40 top-[54%] h-[460px] w-[460px] rounded-full bg-violet-500/[0.035] blur-[150px]" />
        </div>

        <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-4 xl:gap-x-14">
            {projects.map((project, index) => (
              <CinematicProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/[0.06] py-24 sm:py-28 lg:py-36">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute left-1/2 top-1/2 h-[460px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/[0.07] blur-[150px]" />
        </div>
        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold-400"
          >
            Project 11 could be yours
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.08, ease: easeOut }}
            className="mx-auto mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl"
          >
            Let&rsquo;s build something worth showing off.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.18, ease: easeOut }}
            className="mt-9 flex justify-center"
          >
            <Link
              to="/contact/"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 px-8 py-4 text-sm font-semibold text-ink-950 shadow-[0_16px_60px_-18px_rgba(246,193,74,.7)] transition-all duration-500 hover:scale-[1.025] hover:brightness-110"
            >
              Start your project
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
