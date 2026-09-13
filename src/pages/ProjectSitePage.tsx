import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Code2, Layers3, MousePointerClick, Search, Smartphone } from "lucide-react";
import { SiteEffects } from "@/components/portfolio/SiteEffects";
import { SiteFrame, SitePreview } from "@/components/portfolio/SitePreview";
import { Link, usePageMeta } from "@/router";
import { projects } from "@/data/portfolio";
import { NotFoundPage } from "@/pages/NotFound";

const steps = [
  ["walkthrough-hero", "Hero"],
  ["walkthrough-services", "Services"],
  ["walkthrough-mobile", "Mobile"],
  ["walkthrough-cta", "CTA"],
  ["walkthrough-seo", "SEO"],
] as const;

export function ProjectSitePage({ slug }: { slug: string }) {
  const project = projects.find((p) => p.slug === slug);
  const [activeStep, setActiveStep] = useState("walkthrough-hero");

  usePageMeta(
    project ? `${project.name} Walkthrough | Web Design Pampanga` : "Not found | Web Design Pampanga",
    project?.summary,
  );

  useEffect(() => {
    const elements = steps.map(([id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!elements.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveStep(visible.target.id);
      },
      { rootMargin: "-30% 0px -55%", threshold: [0, 0.2, 0.55] },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [project?.slug]);

  if (!project) return <NotFoundPage />;

  const accent = project.accent ?? "#f6c14a";
  const seoCards = [
    { icon: Search, title: "Metadata", text: `${project.industry} website · ${project.location}` },
    { icon: Code2, title: "Schema", text: "Organization / LocalBusiness where supported" },
    { icon: Layers3, title: "Heading structure", text: "H1 → service H2s → supporting H3s" },
    { icon: Smartphone, title: "Mobile crawlability", text: "Same useful content, responsive presentation" },
  ];

  return (
    <div className="min-h-screen bg-ink-950 text-slate-300">
      <div className="sticky top-0 z-40 border-b border-white/[0.08] bg-ink-950/90 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[64px] max-w-[1500px] items-center gap-4 px-4 py-2 sm:px-7">
          <Link to="/portfolio/" className="inline-flex shrink-0 items-center gap-2 text-sm text-slate-400 transition-colors hover:text-gold-300">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Portfolio</span>
          </Link>
          <div className="mx-auto flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-white/[0.07] bg-white/[0.025] p-1">
            {steps.map(([id, label]) => (
              <a key={id} href={`#${id}`} className={`whitespace-nowrap rounded-full px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] transition-colors ${activeStep === id ? "bg-white/10 text-white" : "text-slate-600 hover:text-slate-300"}`}>
                {label}
              </a>
            ))}
          </div>
          <Link to="/contact/" className="hidden shrink-0 rounded-full bg-gold-400 px-4 py-2 text-xs font-bold text-ink-950 sm:inline-flex">Build something like this</Link>
        </div>
      </div>

      <section id="walkthrough-hero" className="scroll-mt-20 border-b border-white/[0.06] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1450px] gap-10 lg:grid-cols-[.74fr_1.26fr] lg:items-center lg:gap-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em]" style={{ color: accent }}>01 · Full project walkthrough</p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[.98] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">{project.name}</h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400">{project.summary}</p>
            <div className="mt-7 flex flex-wrap gap-2 text-xs text-slate-500">
              <span className="rounded-full border border-white/10 px-3 py-2">{project.industry}</span>
              <span className="rounded-full border border-white/10 px-3 py-2">{project.location}</span>
              <span className="rounded-full border border-white/10 px-3 py-2">Responsive concept</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.8, delay: .08 }} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#090b11] shadow-[0_38px_120px_-50px_rgba(0,0,0,.95)]">
            <SiteFrame><SitePreview slug={project.slug} /></SiteFrame>
            <SiteEffects slug={project.slug} active />
          </motion.div>
        </div>
      </section>

      <section id="walkthrough-services" className="scroll-mt-20 border-b border-white/[0.06] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em]" style={{ color: accent }}>02 · Services and hierarchy</p>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-4xl">The page explains the offer before asking for the lead.</h2>
              <p className="mt-5 text-base leading-relaxed text-slate-400">{project.approach}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {project.features.map((feature, index) => (
                <motion.div key={feature} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .05 }} className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/[0.05]" style={{ color: accent }}><Layers3 className="h-4 w-4" /></div>
                  <h3 className="mt-5 text-base font-semibold text-white">{feature}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">Placed as a clear decision point instead of buried inside generic page copy.</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="walkthrough-mobile" className="scroll-mt-20 border-b border-white/[0.06] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_.75fr] lg:items-center lg:gap-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em]" style={{ color: accent }}>03 · Mobile system</p>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-4xl">The phone layout changes priority, not just width.</h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400">The mobile version keeps the strongest message, primary action and trust detail above the fold, then stacks the supporting content into a thumb-friendly reading order.</p>
            <ul className="mt-7 space-y-3 text-sm text-slate-300">
              {["Shorter first-screen copy", "One clear primary action", "Larger tap targets", "Content stacked by decision priority"].map((item) => <li key={item} className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4" style={{ color: accent }} />{item}</li>)}
            </ul>
          </div>
          <div className="mx-auto w-full max-w-[390px] rounded-[2.8rem] border border-white/15 bg-[#07090e] p-3 shadow-[0_42px_110px_-55px_rgba(0,0,0,.95)]">
            <div className="overflow-hidden rounded-[2.25rem] border border-white/[0.07] bg-[#0d1017]">
              <div className="mx-auto mt-3 h-1.5 w-20 rounded-full bg-white/10" />
              <div className="px-5 pb-7 pt-8">
                <div className="flex items-center justify-between"><span className="text-xs font-bold text-white">{project.name}</span><span className="h-8 w-8 rounded-full border border-white/10" /></div>
                <p className="mt-10 text-[9px] uppercase tracking-[0.18em]" style={{ color: accent }}>{project.industry}</p>
                <h3 className="mt-3 font-display text-3xl font-semibold leading-[.98] tracking-[-0.04em] text-white">A clear reason to act from a phone.</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-500">{project.summary}</p>
                <button type="button" className="mt-6 flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-ink-950" style={{ background: accent }}>Request details <ArrowRight className="h-4 w-4" /></button>
                <div className="mt-6 grid grid-cols-2 gap-2">{project.features.slice(0,4).map((feature) => <div key={feature} className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3 text-[10px] leading-relaxed text-slate-400">{feature}</div>)}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="walkthrough-cta" className="scroll-mt-20 border-b border-white/[0.06] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.02] p-7 sm:p-9">
              <MousePointerClick className="h-5 w-5 text-slate-500" />
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">Weak CTA pattern</p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white/60">Learn more about our company</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">Generic next steps make the visitor decide what to do.</p>
              <span className="mt-6 inline-flex rounded-full border border-white/10 px-5 py-3 text-sm text-slate-600">Learn more</span>
            </div>
            <div className="rounded-[2rem] border p-7 sm:p-9" style={{ borderColor: `${accent}55`, background: `linear-gradient(135deg, ${accent}14, rgba(255,255,255,.02))` }}>
              <MousePointerClick className="h-5 w-5" style={{ color: accent }} />
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: accent }}>Conversion CTA</p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white">Give the visitor a specific next step.</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">The action matches what a serious visitor wants next for this type of business.</p>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-ink-950" style={{ background: accent }}>Request project details <ArrowRight className="h-4 w-4" /></span>
            </div>
          </div>
        </div>
      </section>

      <section id="walkthrough-seo" className="scroll-mt-20 px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em]" style={{ color: accent }}>05 · SEO structure</p>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-4xl">Search structure is planned with the design.</h2>
            <p className="mt-5 text-base leading-relaxed text-slate-400">This walkthrough is a concept, so it does not claim rankings or client results. It shows the structure I would build: one clear H1, service-led H2s, useful internal links, metadata and supported schema.</p>
          </div>
          <div className="rounded-[2rem] border border-white/[0.08] bg-[#090b11] p-6 sm:p-8">
            <div className="grid gap-3 sm:grid-cols-2">
              {seoCards.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
                  <Icon className="h-4 w-4" style={{ color: accent }} />
                  <p className="mt-4 text-sm font-semibold text-white">{title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">{text}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-white/[0.07] bg-black/20 p-5 font-mono text-[11px] leading-6 text-slate-500">
              <span className="text-slate-300">H1</span> {project.name}<br />
              <span className="text-slate-300">H2</span> {project.features[0]}<br />
              <span className="text-slate-300">H2</span> {project.features[1]}<br />
              <span className="text-slate-300">H2</span> Contact / enquiry path
            </div>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-5xl rounded-[2.2rem] border border-gold-400/20 bg-gradient-to-br from-gold-500/[0.10] via-white/[0.025] to-transparent px-7 py-10 text-center sm:px-10 sm:py-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold-400">End of walkthrough</p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold text-white sm:text-4xl">Want this level of thinking applied to your own website?</h2>
          <div className="mt-7"><Link to="/contact/" className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3 text-sm font-bold text-ink-950">Start a project brief <ArrowRight className="h-4 w-4" /></Link></div>
        </div>
      </section>
    </div>
  );
}
