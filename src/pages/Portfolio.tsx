import {
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowUpRight, Mail, Sparkles } from "lucide-react";
import { Link, usePageMeta } from "@/router";
import { projects, type Project } from "@/data/portfolio";
import { site } from "@/data/site";

const lime = "#c6f24e";
const cyan = "#7dd3fc";
const pink = "#f0abfc";

const tileGradients = [
  "linear-gradient(135deg,#0b2130 0%,#132c40 48%,#39b9f4 140%)",
  "linear-gradient(135deg,#2b1408 0%,#411f0b 48%,#fbbf24 145%)",
  "linear-gradient(135deg,#111019 0%,#24202b 55%,#f6c14a 145%)",
  "linear-gradient(135deg,#071d17 0%,#0d3024 52%,#34d399 145%)",
  "linear-gradient(135deg,#081c21 0%,#0c3139 52%,#67e8f9 145%)",
  "linear-gradient(135deg,#29130a 0%,#3d190c 52%,#f97316 145%)",
  "linear-gradient(135deg,#29230a 0%,#3e330b 52%,#facc15 145%)",
  "linear-gradient(135deg,#081d12 0%,#0b301b 52%,#4ade80 145%)",
  "linear-gradient(135deg,#071c1b 0%,#0a302d 52%,#2dd4bf 145%)",
  "linear-gradient(135deg,#0d1424 0%,#16223a 52%,#93c5fd 145%)",
];

function ProjectTile({ project, index }: { project: Project; index: number }) {
  const reduceMotion = useReducedMotion();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateY = useTransform(mx, [0, 1], [-7, 7]);
  const rotateX = useTransform(my, [0, 1], [7, -7]);
  const springRotateX = useSpring(rotateX, { stiffness: 160, damping: 22, mass: 0.45 });
  const springRotateY = useSpring(rotateY, { stiffness: 160, damping: 22, mass: 0.45 });
  const [hovered, setHovered] = useState(false);

  const move = (event: ReactPointerEvent<HTMLElement>) => {
    if (reduceMotion || event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    mx.set((event.clientX - rect.left) / rect.width);
    my.set((event.clientY - rect.top) / rect.height);
  };

  const reset = () => {
    mx.set(0.5);
    my.set(0.5);
    setHovered(false);
  };

  const accent = project.accent ?? lime;
  const background = tileGradients[index % tileGradients.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px -8%" }}
      transition={{ duration: 0.65, delay: (index % 3) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      onPointerMove={move}
      onPointerEnter={(event) => {
        if (event.pointerType !== "touch") setHovered(true);
      }}
      onPointerLeave={reset}
      onFocusCapture={() => setHovered(true)}
      onBlurCapture={reset}
      className="group relative min-w-0"
      style={{ perspective: 1200 }}
    >
      <motion.div
        style={reduceMotion ? undefined : { rotateX: springRotateX, rotateY: springRotateY, transformStyle: "preserve-3d" }}
        className="relative overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#101016] shadow-[0_26px_80px_-44px_rgba(0,0,0,.95)] transition-[border-color,box-shadow] duration-500 group-hover:border-white/20 group-hover:shadow-[0_32px_100px_-45px_rgba(198,242,78,.2)]"
      >
        <Link to={`/portfolio/${project.slug}/`} className="block focus:outline-none" aria-label={`Open ${project.name} website sample`}>
          <div className="relative aspect-[4/3] overflow-hidden" style={{ background }}>
            {project.image ? (
              <motion.img
                src={project.image}
                alt={`${project.name} website design`}
                loading="lazy"
                decoding="async"
                animate={{ scale: hovered && !reduceMotion ? 1.055 : 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 h-full w-full object-cover object-top opacity-90 mix-blend-luminosity transition-[filter,opacity] duration-500 group-hover:opacity-100 group-hover:mix-blend-normal"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-full rounded-[22px] border border-white/10 bg-black/20 p-7 shadow-2xl backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-white/60" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/10" />
                  </div>
                  <div className="mt-10 text-[clamp(26px,4vw,54px)] font-semibold leading-[.9] tracking-[-.05em] text-white">
                    {project.name}
                  </div>
                  <div className="mt-6 h-2 w-2/3 rounded-full bg-white/15" />
                  <div className="mt-3 h-2 w-1/2 rounded-full bg-white/10" />
                </div>
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
            <div
              className="absolute -right-16 -top-16 h-52 w-52 rounded-full blur-[70px] transition-opacity duration-500"
              style={{ background: accent, opacity: hovered ? 0.36 : 0.16 }}
            />

            <div className="absolute left-5 top-5 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.22em] text-white/60">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span className="h-px w-6 bg-white/25" />
              <span>{project.industry}</span>
            </div>

            <motion.div
              animate={{ x: hovered && !reduceMotion ? -3 : 0, y: hovered && !reduceMotion ? -3 : 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-5 right-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white text-black shadow-xl transition-transform duration-500 group-hover:scale-105"
            >
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </motion.div>
          </div>

          <div className="p-6 sm:p-7">
            <div className="flex items-start justify-between gap-5">
              <div>
                <h2 className="text-[clamp(24px,2.5vw,34px)] font-semibold leading-none tracking-[-.045em] text-white">
                  {project.name}
                </h2>
                <p className="mt-3 max-w-[48ch] text-sm leading-6 text-white/48">{project.summary}</p>
              </div>
              <span className="hidden shrink-0 font-mono text-[9px] uppercase tracking-[.18em] text-white/28 sm:block">
                {project.location}
              </span>
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.article>
  );
}

export function PortfolioPage() {
  usePageMeta(
    "Portfolio | Erwin Valles · Web Design Pampanga",
    "Selected website work by Erwin Valles and Web Design Pampanga across BPO, hospitality, healthcare, property, logistics, construction and local business.",
  );

  return (
    <div className="overflow-hidden bg-[#0a0a0a] text-white" style={{ fontFamily: '"Space Grotesk", ui-sans-serif, system-ui, sans-serif' }}>
      <section className="relative min-h-[92svh] overflow-hidden border-b border-white/[0.08] px-5 pb-16 pt-32 sm:px-8 lg:px-10 lg:pb-20 lg:pt-36">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 opacity-[.24]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.055) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.055) 1px,transparent 1px)", backgroundSize: "64px 64px" }} />
          <div className="absolute left-[8%] top-[18%] h-[420px] w-[420px] rounded-full bg-[#c6f24e]/[0.07] blur-[130px]" />
          <div className="absolute right-[8%] top-[10%] h-[360px] w-[360px] rounded-full bg-[#7dd3fc]/[0.07] blur-[130px]" />
        </div>

        <div className="relative mx-auto flex min-h-[calc(92svh-10rem)] max-w-[1280px] flex-col justify-between">
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[.2em] text-white/55">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#c6f24e]/30 bg-[#c6f24e]/[0.06] px-3.5 py-2 text-[#c6f24e]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#c6f24e]" />
              Available for selected projects
            </div>
            <div className="flex items-center gap-5">
              <span>Pampanga · Philippines</span>
              <span className="hidden sm:inline">2026 portfolio</span>
            </div>
          </div>

          <div className="grid items-center gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_390px] lg:gap-16">
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.2em] text-white/45"
              >
                <span className="h-px w-8 bg-[#c6f24e]" />
                Web designer · SEO specialist
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(58px,10.2vw,142px)] font-semibold uppercase leading-[.79] tracking-[-.065em]"
              >
                ERWIN
                <br />
                <span className="text-[#c6f24e]">VALLES</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 max-w-[58ch] text-base leading-7 text-white/55 sm:text-lg"
              >
                I design fast, clear websites for businesses that need to look credible, rank locally and turn visits into enquiries. No recycled layouts. No decorative noise without a job.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <a href="#work" className="inline-flex items-center gap-3 rounded-full bg-[#c6f24e] px-6 py-3.5 text-sm font-semibold text-[#0a0a0a] transition-transform duration-300 hover:-translate-y-1">
                  View selected work
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </a>
                <Link to="/contact/" className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/35 hover:bg-white/[0.05]">
                  Start a project
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto hidden aspect-square w-full max-w-[390px] lg:block"
              aria-hidden="true"
            >
              <div className="absolute inset-[9%] rounded-full border border-white/10" />
              <div className="absolute inset-[20%] rounded-full border border-[#c6f24e]/25" />
              <div className="absolute inset-[29%] rounded-full bg-[radial-gradient(circle_at_32%_28%,#ffffff_0%,#d7ff72_8%,#c6f24e_22%,#316b3d_55%,#0a0a0a_76%)] shadow-[0_0_100px_rgba(198,242,78,.18)]" />
              <div className="absolute inset-[4%] animate-[spin_20s_linear_infinite] rounded-full border border-dashed border-white/12" />
              <div className="absolute left-[2%] top-1/2 h-px w-[96%] -rotate-[17deg] bg-gradient-to-r from-transparent via-[#7dd3fc]/45 to-transparent" />
              <div className="absolute left-1/2 top-[2%] h-[96%] w-px rotate-[28deg] bg-gradient-to-b from-transparent via-[#f0abfc]/35 to-transparent" />
              <div className="glass absolute -left-8 bottom-8 w-48 rounded-[22px] p-5 shadow-2xl">
                <div className="font-mono text-[9px] uppercase tracking-[.18em] text-white/40">Proof</div>
                <div className="mt-2 text-3xl font-semibold tracking-[-.05em]">200+</div>
                <div className="mt-1 text-xs text-white/45">websites launched</div>
              </div>
              <div className="glass absolute -right-5 top-10 w-44 rounded-[22px] p-5 shadow-2xl">
                <Sparkles className="h-4 w-4 text-[#c6f24e]" />
                <div className="mt-4 text-sm font-semibold">Design + SEO</div>
                <div className="mt-1 text-xs leading-5 text-white/40">Built together, not bolted on later.</div>
              </div>
            </motion.div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["200+", "Websites launched"],
              ["10", "Selected samples"],
              ["Pampanga", "Based in Central Luzon"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-[22px] border border-white/[0.09] bg-white/[0.025] p-5 backdrop-blur-sm">
                <div className="text-2xl font-semibold tracking-[-.04em] text-white">{value}</div>
                <div className="mt-1 font-mono text-[9px] uppercase tracking-[.18em] text-white/38">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-b border-white/[0.08] bg-[#c6f24e] py-4 text-[#0a0a0a]" aria-label="Capabilities marquee">
        <div className="flex w-max animate-marquee items-center whitespace-nowrap font-mono text-[11px] font-semibold uppercase tracking-[.22em]" style={{ animationDuration: "24s" }}>
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
              {[
                "WEB DESIGN",
                "LOCAL SEO",
                "TECHNICAL SEO",
                "CONVERSION UX",
                "STRUCTURED DATA",
                "PERFORMANCE",
                "WORDPRESS",
                "REACT",
              ].map((item) => (
                <span key={`${copy}-${item}`} className="flex items-center">
                  <span className="px-7">{item}</span>
                  <span className="text-xl">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 flex flex-col justify-between gap-7 border-b border-white/[0.08] pb-8 sm:mb-16 md:flex-row md:items-end">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[.2em] text-[#c6f24e]">Selected work · 01–10</div>
              <h2 className="mt-4 max-w-4xl text-[clamp(42px,7vw,92px)] font-semibold leading-[.88] tracking-[-.055em]">
                Websites with a point of view.
              </h2>
            </div>
            <p className="max-w-[42ch] text-sm leading-6 text-white/45 md:text-right">
              Ten different industries. Ten different visual systems. The common thread is clarity, speed and a strong next step.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectTile key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.08] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-5 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[30px] border border-white/[0.09] bg-[#111115] p-7 sm:p-9 lg:col-span-7"
          >
            <div className="font-mono text-[10px] uppercase tracking-[.2em] text-[#c6f24e]">How I work</div>
            <h2 className="mt-6 max-w-[12ch] text-[clamp(40px,5.5vw,72px)] font-semibold leading-[.9] tracking-[-.055em]">Design the route before the decoration.</h2>
            <p className="mt-7 max-w-[58ch] text-base leading-7 text-white/48">I start with what a visitor needs to understand, trust and do next. The visual system comes after that, then performance, SEO structure and measurement are built into the same plan.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-[30px] border border-white/[0.09] bg-[#111115] p-7 sm:p-9 lg:col-span-5"
          >
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#7dd3fc]/15 blur-[100px]" />
            <div className="relative font-mono text-[10px] uppercase tracking-[.2em] text-[#7dd3fc]">Toolkit</div>
            <div className="relative mt-8 flex flex-wrap gap-2.5">
              {["React", "TypeScript", "Vite", "Tailwind", "WordPress", "Technical SEO", "Local SEO", "Schema", "GA4", "Clarity"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-white/70 transition-colors duration-300 hover:border-[#7dd3fc]/40 hover:text-white">{item}</span>
              ))}
            </div>
            <div className="relative mt-10 border-t border-white/[0.08] pt-7">
              <div className="font-mono text-[9px] uppercase tracking-[.18em] text-white/32">Current focus</div>
              <div className="mt-2 text-xl font-semibold tracking-[-.035em]">Local businesses that need a stronger digital first impression.</div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute left-1/2 top-1/2 h-[520px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c6f24e]/[0.08] blur-[150px]" />
        </div>
        <div className="relative mx-auto max-w-[1280px] text-center">
          <div className="font-mono text-[10px] uppercase tracking-[.22em] text-[#c6f24e]">Have a project?</div>
          <h2 className="mx-auto mt-7 max-w-[10ch] text-[clamp(48px,9vw,118px)] font-semibold uppercase leading-[.82] tracking-[-.065em]">Let’s make it hard to ignore.</h2>
          <p className="mx-auto mt-8 max-w-[52ch] text-base leading-7 text-white/48">Tell me what you sell, who you need to reach and what the current site is failing to do.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 rounded-full bg-[#c6f24e] px-7 py-4 text-sm font-semibold text-[#0a0a0a] transition-transform duration-300 hover:-translate-y-1">
              <Mail className="h-4 w-4" aria-hidden="true" />
              {site.email}
            </a>
            <Link to="/contact/" className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/35 hover:bg-white/[0.05]">
              Start a project
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
