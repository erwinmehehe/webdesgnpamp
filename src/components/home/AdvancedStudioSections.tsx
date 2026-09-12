import { useMemo, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Gauge,
  Layers3,
  LayoutDashboard,
  MousePointer2,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import { Eyebrow, GoldButton, Section, SectionIntro } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { Link } from "@/router";
import { projects } from "@/data/portfolio";

const proofProjects = projects.slice(0, 3);

function BeforeAfterDemo() {
  const [position, setPosition] = useState(56);

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#090b12] shadow-[0_34px_100px_-52px_rgba(0,0,0,.9)]">
      <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4 sm:px-6">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold-400">Redesign demo</p>
          <p className="mt-1 text-sm text-slate-400">Drag to compare a weak page with a clearer rebuild.</p>
        </div>
        <span className="hidden rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-slate-500 sm:inline-flex">Interactive</span>
      </div>

      <div className="relative aspect-[16/10] min-h-[360px] overflow-hidden bg-[#eef1f4] sm:min-h-[460px]">
        <div className="absolute inset-0 bg-[#f3f4f6] p-5 text-[#202329] sm:p-8">
          <div className="mx-auto max-w-4xl rounded-xl bg-white p-5 shadow-sm sm:p-7">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="h-5 w-32 rounded bg-slate-300" />
              <div className="flex gap-3"><span className="h-3 w-16 rounded bg-slate-200" /><span className="h-3 w-16 rounded bg-slate-200" /><span className="h-3 w-16 rounded bg-slate-200" /></div>
            </div>
            <div className="grid gap-7 py-8 lg:grid-cols-[1fr_.85fr] lg:items-center">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Welcome to our website</span>
                <div className="mt-4 h-8 w-5/6 rounded bg-slate-300" />
                <div className="mt-3 h-8 w-3/4 rounded bg-slate-300" />
                <div className="mt-6 space-y-2"><div className="h-3 w-full rounded bg-slate-200" /><div className="h-3 w-11/12 rounded bg-slate-200" /><div className="h-3 w-4/5 rounded bg-slate-200" /></div>
                <div className="mt-7 flex gap-3"><div className="h-10 w-28 rounded bg-slate-300" /><div className="h-10 w-28 rounded border border-slate-300" /></div>
              </div>
              <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-slate-300 to-slate-200" />
            </div>
            <div className="grid grid-cols-3 gap-3 border-t border-slate-200 pt-5">{[1,2,3].map((n) => <div key={n} className="rounded-lg bg-slate-100 p-4"><div className="h-4 w-1/2 rounded bg-slate-300" /><div className="mt-3 h-2.5 w-full rounded bg-slate-200" /><div className="mt-2 h-2.5 w-4/5 rounded bg-slate-200" /></div>)}</div>
          </div>
        </div>

        <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${position}%` }}>
          <div className="absolute inset-0 min-w-[100vw] bg-[#07101b] p-5 text-white sm:p-8" style={{ width: "100vw" }}>
            <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b1421] shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4 sm:px-7">
                <div className="flex items-center gap-2"><span className="h-7 w-7 rounded-lg bg-gold-400" /><span className="text-sm font-bold">ACME INDUSTRIES</span></div>
                <div className="hidden items-center gap-5 text-[11px] text-slate-400 sm:flex"><span>Services</span><span>Projects</span><span>About</span><span className="rounded-full bg-gold-400 px-4 py-2 font-semibold text-ink-950">Get a quote</span></div>
              </div>
              <div className="grid gap-7 px-5 py-8 sm:px-7 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold-400">Commercial construction · Pampanga</span>
                  <h3 className="mt-4 max-w-xl font-display text-3xl font-bold leading-[.98] tracking-[-0.04em] sm:text-5xl">Built for buyers who need proof before a call.</h3>
                  <p className="mt-5 max-w-lg text-sm leading-relaxed text-slate-400">Projects, capability, compliance and a quote path that asks the right questions before your team spends time on the lead.</p>
                  <div className="mt-6 flex flex-wrap gap-3"><span className="rounded-full bg-gold-400 px-5 py-2.5 text-xs font-bold text-ink-950">Request a quote</span><span className="rounded-full border border-white/15 px-5 py-2.5 text-xs font-semibold">View projects</span></div>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gold-400/35 via-orange-500/15 to-sky-500/15">
                  <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/15 bg-black/35 p-4 backdrop-blur"><p className="text-xs text-slate-300">Current capability</p><p className="mt-1 font-display text-xl font-bold">Commercial · Industrial · Fit-out</p></div>
                </div>
              </div>
              <div className="grid grid-cols-3 border-t border-white/[0.08]">{["Clear scope","Mobile first","SEO ready"].map((label) => <div key={label} className="border-r border-white/[0.08] p-4 text-center text-[11px] font-semibold text-slate-300 last:border-0 sm:p-5">{label}</div>)}</div>
            </div>
          </div>
        </div>

        <div className="absolute inset-y-0 z-20 w-px bg-white" style={{ left: `${position}%` }} aria-hidden="true">
          <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-ink-950 text-gold-400 shadow-xl"><ArrowRight className="h-4 w-4" /></span>
        </div>

        <input
          type="range"
          min="12"
          max="88"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label="Compare before and after website redesign"
          className="absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <div className="flex items-center justify-between px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 sm:px-6"><span>After</span><span>Before</span></div>
    </div>
  );
}

export function BeforeAfterSection() {
  return (
    <Section divider>
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-16">
        <div>
          <Reveal><Eyebrow>Before / after</Eyebrow></Reveal>
          <Reveal delay={0.08}><h2 className="mt-5 font-display text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-[2.8rem]">A redesign should change more than the <span className="text-gold-gradient">colour palette.</span></h2></Reveal>
          <Reveal delay={0.14}><p className="mt-5 max-w-lg text-base leading-relaxed text-slate-400">The useful work is underneath: clearer hierarchy, stronger calls to action, better mobile decisions and pages built around what customers actually need to know.</p></Reveal>
          <Reveal delay={0.2}><ul className="mt-7 space-y-3 text-sm text-slate-300">{["Sharper message in the first screen","One obvious primary action","Cleaner mobile hierarchy","SEO structure planned before launch"].map((item) => <li key={item} className="flex items-center gap-3"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-400/10 text-gold-400"><Check className="h-3.5 w-3.5" /></span>{item}</li>)}</ul></Reveal>
        </div>
        <Reveal delay={0.08}><BeforeAfterDemo /></Reveal>
      </div>
    </Section>
  );
}

function LabTiltCard() {
  const reduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const x = useSpring(rx, { stiffness: 120, damping: 18 });
  const y = useSpring(ry, { stiffness: 120, damping: 18 });

  const onMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    ry.set(((event.clientX - rect.left) / rect.width - 0.5) * 12);
    rx.set((0.5 - (event.clientY - rect.top) / rect.height) * 10);
  };

  return (
    <div className="[perspective:1200px]">
      <motion.div
        ref={cardRef}
        onPointerMove={onMove}
        onPointerLeave={() => { rx.set(0); ry.set(0); }}
        style={{ rotateX: x, rotateY: y, transformStyle: "preserve-3d" }}
        className="relative min-h-[300px] overflow-hidden rounded-[1.8rem] border border-white/[0.09] bg-gradient-to-br from-sky-400/15 via-white/[0.035] to-violet-400/10 p-7 will-change-transform"
      >
        <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-sky-400/20 blur-3xl" />
        <div style={{ transform: "translateZ(52px)" }}>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-sky-300">01 · 3D UI</p>
          <h3 className="mt-5 font-display text-2xl font-bold text-white">Cursor depth card</h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">Small 3D movement adds depth without turning the page into a tech demo.</p>
        </div>
        <div className="absolute bottom-7 left-7 right-7 grid grid-cols-3 gap-2" style={{ transform: "translateZ(36px)" }}>{["React","Motion","CSS 3D"].map((label) => <span key={label} className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-center text-[10px] font-semibold text-slate-300">{label}</span>)}</div>
      </motion.div>
    </div>
  );
}

function MagneticButtonDemo() {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14 });
  const sy = useSpring(y, { stiffness: 180, damping: 14 });
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex min-h-[300px] flex-col justify-between rounded-[1.8rem] border border-white/[0.09] bg-gradient-to-br from-gold-400/12 via-white/[0.03] to-transparent p-7">
      <div><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold-400">02 · Micro interaction</p><h3 className="mt-5 font-display text-2xl font-bold text-white">Magnetic CTA</h3><p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">The button reacts to the pointer, but stays predictable and accessible.</p></div>
      <div className="flex min-h-24 items-center justify-center">
        <motion.button
          ref={ref}
          type="button"
          style={{ x: sx, y: sy }}
          onPointerMove={(event) => {
            if (reduceMotion || event.pointerType === "touch") return;
            const rect = event.currentTarget.getBoundingClientRect();
            x.set((event.clientX - rect.left - rect.width / 2) * 0.2);
            y.set((event.clientY - rect.top - rect.height / 2) * 0.2);
          }}
          onPointerLeave={() => { x.set(0); y.set(0); }}
          className="group inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3 text-sm font-bold text-ink-950 shadow-[0_16px_50px_-18px_rgba(246,193,74,.8)]"
        >
          Hover me <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </motion.button>
      </div>
    </div>
  );
}

function LayoutMorphDemo() {
  const [mode, setMode] = useState<"desktop" | "mobile">("desktop");
  return (
    <div className="min-h-[300px] rounded-[1.8rem] border border-white/[0.09] bg-gradient-to-br from-fuchsia-400/10 via-white/[0.03] to-transparent p-7">
      <div className="flex items-start justify-between gap-4"><div><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-fuchsia-300">03 · Responsive system</p><h3 className="mt-5 font-display text-2xl font-bold text-white">Layout morph</h3></div><button type="button" onClick={() => setMode((value) => value === "desktop" ? "mobile" : "desktop")} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-300">{mode === "desktop" ? "Mobile" : "Desktop"}</button></div>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">The layout changes structure, not just size. Tap the toggle.</p>
      <motion.div layout className={`mx-auto mt-7 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0d13] p-3 ${mode === "desktop" ? "w-full" : "w-[46%] min-w-[150px]"}`}>
        <motion.div layout className="h-4 rounded bg-white/10" />
        <motion.div layout className={`mt-3 grid gap-2 ${mode === "desktop" ? "grid-cols-[1.2fr_.8fr]" : "grid-cols-1"}`}><div className="h-20 rounded-xl bg-fuchsia-400/20" /><div className="h-20 rounded-xl bg-white/[0.06]" /></motion.div>
        <motion.div layout className={`mt-2 grid gap-2 ${mode === "desktop" ? "grid-cols-3" : "grid-cols-1"}`}>{[1,2,3].map((item) => <div key={item} className="h-10 rounded-lg bg-white/[0.05]" />)}</motion.div>
      </motion.div>
    </div>
  );
}

export function StudioLabSection() {
  return (
    <Section ambient divider>
      <SectionIntro eyebrow="Web design lab" title={<>A few interactions I use when they <span className="text-gold-gradient">earn their place.</span></>} description="Good motion should help the page feel responsive and intentional. These are small examples of the kind of interaction work I can build into a site." />
      <div className="mt-12 grid gap-5 lg:grid-cols-3"><Reveal><LabTiltCard /></Reveal><Reveal delay={0.08}><MagneticButtonDemo /></Reveal><Reveal delay={0.16}><LayoutMorphDemo /></Reveal></div>
    </Section>
  );
}

const capabilities = [
  { icon: LayoutDashboard, title: "Design systems", text: "Reusable type, spacing, buttons, cards and content patterns so the site stays consistent as it grows.", chips: ["UI direction", "Responsive layouts", "CRO", "Accessibility"] },
  { icon: Code2, title: "Frontend", text: "Lean interfaces with deliberate motion, responsive states and maintainable components rather than one-off pages.", chips: ["React", "TypeScript", "Tailwind", "GSAP"] },
  { icon: Search, title: "SEO structure", text: "Search intent, headings, metadata, internal links, schema and crawlability planned into the build.", chips: ["Technical SEO", "Local SEO", "Schema", "Architecture"] },
  { icon: Gauge, title: "Performance", text: "Image sizing, script discipline, stable layouts and Core Web Vitals checks before launch.", chips: ["Lighthouse", "CWV", "Image optimisation", "QA"] },
];

export function CapabilitySection() {
  const [active, setActive] = useState(0);
  const current = capabilities[active];
  return (
    <Section divider>
      <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
        <div><Reveal><Eyebrow>Technical capability</Eyebrow></Reveal><Reveal delay={0.08}><h2 className="mt-5 font-display text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl">Design is only one part of the <span className="text-gold-gradient">build.</span></h2></Reveal><Reveal delay={0.14}><p className="mt-5 max-w-lg text-base leading-relaxed text-slate-400">A strong website needs the visual layer, the frontend, the search structure and the performance work to agree with each other.</p></Reveal></div>
        <div className="grid gap-4 sm:grid-cols-[.8fr_1.2fr]">
          <div className="space-y-2">{capabilities.map((item, index) => <button key={item.title} type="button" onClick={() => setActive(index)} className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-4 text-left transition-all ${active === index ? "border-gold-400/35 bg-gold-400/[0.08] text-white" : "border-white/[0.07] bg-white/[0.02] text-slate-400 hover:border-white/15 hover:text-slate-200"}`}><item.icon className={`h-4 w-4 ${active === index ? "text-gold-400" : "text-slate-500"}`} /><span className="text-sm font-semibold">{item.title}</span></button>)}</div>
          <motion.div key={current.title} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-[1.75rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.045] to-white/[0.015] p-7 sm:p-8"><current.icon className="h-6 w-6 text-gold-400" /><h3 className="mt-5 font-display text-2xl font-bold text-white">{current.title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-400">{current.text}</p><div className="mt-7 flex flex-wrap gap-2">{current.chips.map((chip) => <span key={chip} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[11px] font-semibold text-slate-300">{chip}</span>)}</div></motion.div>
        </div>
      </div>
    </Section>
  );
}

export function ProjectBreakdownsSection() {
  return (
    <Section ambient divider>
      <SectionIntro eyebrow="Design breakdowns" title={<>Three samples, three different <span className="text-gold-gradient">problems to solve.</span></>} description="These are concept projects, so the focus is on the design decisions rather than invented client results." />
      <div className="mt-12 space-y-5">{proofProjects.map((project, index) => <Reveal key={project.slug} delay={index * 0.06}><article className="grid overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.02] lg:grid-cols-[.95fr_1.05fr]"><div className="relative min-h-[270px] overflow-hidden bg-black/20"><img src={project.image} alt={`${project.name} website design sample`} loading="lazy" className="absolute inset-x-0 top-0 w-full" /><div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" /></div><div className="p-7 sm:p-9"><div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em]"><span style={{ color: project.accent }}>0{index + 1}</span><span className="text-slate-500">{project.industry}</span></div><h3 className="mt-4 font-display text-2xl font-bold text-white">{project.name}</h3><div className="mt-7 grid gap-5 sm:grid-cols-2"><div><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">Problem</p><p className="mt-2 text-sm leading-relaxed text-slate-300">{project.summary}</p></div><div><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">Design decision</p><p className="mt-2 text-sm leading-relaxed text-slate-300">{project.approach}</p></div></div><div className="mt-7 flex flex-wrap gap-2">{project.features.slice(0,4).map((feature) => <span key={feature} className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-[11px] text-slate-400">{feature}</span>)}</div><Link to={`/portfolio/${project.slug}/`} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold-400">Explore the sample <ArrowUpRight className="h-4 w-4" /></Link></div></article></Reveal>)}</div>
    </Section>
  );
}

type AuditResult = {
  performance?: number;
  accessibility?: number;
  seo?: number;
  bestPractices?: number;
  lcp?: string;
  cls?: string;
};

function normaliseUrl(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

export function SiteAuditSection() {
  const [domain, setDomain] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<AuditResult | null>(null);
  const cleanUrl = useMemo(() => normaliseUrl(domain), [domain]);

  const runAudit = async () => {
    if (!cleanUrl) { setError("Enter a website URL first."); return; }
    try { new URL(cleanUrl); } catch { setError("That URL does not look valid."); return; }
    setLoading(true); setError(""); setResult(null);
    try {
      const endpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(cleanUrl)}&strategy=mobile&category=performance&category=accessibility&category=seo&category=best-practices`;
      const response = await fetch(endpoint);
      if (!response.ok) throw new Error("Audit unavailable");
      const data = await response.json();
      const categories = data?.lighthouseResult?.categories ?? {};
      const audits = data?.lighthouseResult?.audits ?? {};
      setResult({
        performance: Math.round((categories.performance?.score ?? 0) * 100),
        accessibility: Math.round((categories.accessibility?.score ?? 0) * 100),
        seo: Math.round((categories.seo?.score ?? 0) * 100),
        bestPractices: Math.round((categories["best-practices"]?.score ?? 0) * 100),
        lcp: audits["largest-contentful-paint"]?.displayValue,
        cls: audits["cumulative-layout-shift"]?.displayValue,
      });
    } catch {
      setError("The live check could not run right now. You can still open the full PageSpeed report below.");
    } finally { setLoading(false); }
  };

  const pageSpeedUrl = cleanUrl ? `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(cleanUrl)}` : "https://pagespeed.web.dev/";
  const richResultsUrl = cleanUrl ? `https://search.google.com/test/rich-results?url=${encodeURIComponent(cleanUrl)}` : "https://search.google.com/test/rich-results";

  return (
    <Section divider>
      <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start lg:gap-16">
        <div><Reveal><Eyebrow>Quick site check</Eyebrow></Reveal><Reveal delay={0.08}><h2 className="mt-5 font-display text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl">Run a real mobile audit before we <span className="text-gold-gradient">talk.</span></h2></Reveal><Reveal delay={0.14}><p className="mt-5 max-w-lg text-base leading-relaxed text-slate-400">Enter a public URL. The check uses Google PageSpeed Insights data for performance, accessibility, SEO and best practices. Nothing is invented.</p></Reveal></div>
        <Reveal delay={0.08}><div className="rounded-[2rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.045] to-white/[0.015] p-6 sm:p-8"><label htmlFor="audit-domain" className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Website URL</label><div className="mt-3 flex flex-col gap-3 sm:flex-row"><input id="audit-domain" value={domain} onChange={(e) => setDomain(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") runAudit(); }} placeholder="example.com" className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:border-gold-400/50 focus:outline-none" /><button type="button" onClick={runAudit} disabled={loading} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gold-400 px-5 py-3.5 text-sm font-bold text-ink-950 disabled:opacity-60">{loading ? <Activity className="h-4 w-4 animate-spin" /> : <Gauge className="h-4 w-4" />}{loading ? "Checking…" : "Run mobile audit"}</button></div>{error && <p className="mt-3 text-sm text-amber-300">{error}</p>}{result && <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">{[["Performance",result.performance],["Accessibility",result.accessibility],["SEO",result.seo],["Best practices",result.bestPractices]].map(([label,score]) => <div key={String(label)} className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 text-center"><p className="font-display text-2xl font-bold text-white">{score}</p><p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-slate-500">{label}</p></div>)}</div>}{result && (result.lcp || result.cls) && <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-400">{result.lcp && <span className="rounded-full border border-white/10 px-3 py-2">LCP {result.lcp}</span>}{result.cls && <span className="rounded-full border border-white/10 px-3 py-2">CLS {result.cls}</span>}</div>}<div className="mt-6 flex flex-wrap gap-3 border-t border-white/[0.07] pt-5"><a href={pageSpeedUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-gold-400">Open full PageSpeed report <ArrowUpRight className="h-3.5 w-3.5" /></a><a href={richResultsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white">Test structured data <ArrowUpRight className="h-3.5 w-3.5" /></a></div></div></Reveal>
      </div>
    </Section>
  );
}

export function PerformanceProofSection() {
  const checks = [
    { icon: Gauge, title: "90+ target", text: "PageSpeed is treated as a build target, not a badge added after launch." },
    { icon: Smartphone, title: "Real mobile QA", text: "Navigation, forms, tap targets and layout are checked at phone sizes before launch." },
    { icon: ShieldCheck, title: "Technical launch checks", text: "Metadata, redirects, canonical URLs, schema, forms and analytics are reviewed together." },
    { icon: Layers3, title: "Stable components", text: "Reusable sections reduce one-off code and make later pages easier to build without regressions." },
  ];
  return (
    <Section ambient divider>
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <div><Reveal><Eyebrow>Performance proof</Eyebrow></Reveal><Reveal delay={0.08}><h2 className="mt-5 font-display text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl">The technical work should be <span className="text-gold-gradient">visible too.</span></h2></Reveal><Reveal delay={0.14}><p className="mt-5 max-w-lg text-base leading-relaxed text-slate-400">I do not want “fast” or “SEO-ready” to be empty marketing words. The site is checked against measurable launch standards.</p></Reveal><Reveal delay={0.2}><a href="https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwebdesignpampanga.com%2F" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold-400">Test this website on PageSpeed <ArrowUpRight className="h-4 w-4" /></a></Reveal></div>
        <div className="grid gap-4 sm:grid-cols-2">{checks.map((item, index) => <Reveal key={item.title} delay={index * 0.05}><div className="h-full rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6"><item.icon className="h-5 w-5 text-gold-400" /><h3 className="mt-5 font-display text-lg font-semibold text-white">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-400">{item.text}</p></div></Reveal>)}</div>
      </div>
    </Section>
  );
}

export function AdvancedStudioCTA() {
  return (
    <Section divider>
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.2rem] border border-gold-400/20 bg-gradient-to-br from-gold-500/[0.12] via-white/[0.025] to-violet-500/[0.06] px-7 py-10 sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="pointer-events-none absolute -right-12 -top-20 h-56 w-56 rounded-full bg-gold-400/10 blur-3xl" />
          <div className="relative"><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold-400">Have something more ambitious?</p><h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl">If the project needs custom interaction, I can build that too.</h2><p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400">Tell me what the site needs to do. I will tell you what is practical, what is unnecessary and what is worth building.</p></div>
          <div className="relative mt-7 lg:mt-0"><GoldButton to="/contact/">Talk about the project</GoldButton></div>
        </div>
      </Reveal>
    </Section>
  );
}
