import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "@/router";
import { SiteEffects } from "@/components/portfolio/SiteEffects";
import { SITE_WIDTH, SitePreview } from "@/components/portfolio/SitePreview";
import type { Project } from "@/data/portfolio";

const cardShapes = [
  "rounded-[2.4rem]",
  "rounded-[1.35rem]",
  "rounded-[3rem]",
  "rounded-[1.8rem]",
  "rounded-[2.7rem]",
] as const;

const frameShapes = [
  "rounded-[1.5rem]",
  "rounded-[0.65rem]",
  "rounded-[2rem]",
  "rounded-[1.1rem]",
  "rounded-[1.7rem]",
] as const;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function ScreenshotWalkthrough({ project, active }: { project: Project; active: boolean }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [shift, setShift] = useState(0);
  const reduceMotion = useReducedMotion();

  const measure = (image: HTMLImageElement) => {
    const viewport = viewportRef.current;
    if (!viewport || !image.naturalWidth || !image.naturalHeight) return;
    const renderedHeight = viewport.clientWidth * (image.naturalHeight / image.naturalWidth);
    setShift(Math.max(0, renderedHeight - viewport.clientHeight));
  };

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const image = viewport.querySelector("img");
    if (!(image instanceof HTMLImageElement)) return;

    const update = () => measure(image);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(viewport);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const duration = clamp(4.8 + shift / 85, 5.2, 8.5);

  return (
    <div ref={viewportRef} className="relative h-full w-full overflow-hidden bg-black/25">
      <motion.img
        src={project.image}
        alt={`${project.name} ${project.industry} website preview`}
        loading="lazy"
        decoding="async"
        onLoad={(event) => measure(event.currentTarget)}
        className="absolute left-0 top-0 h-auto w-full select-none"
        animate={{
          y: active && !reduceMotion ? -shift : 0,
          scale: active && !reduceMotion ? 1.018 : 1,
        }}
        transition={{
          y: active
            ? { duration, ease: [0.2, 0.72, 0.18, 1] }
            : { duration: 1.25, ease: [0.2, 0.72, 0.18, 1] },
          scale: { duration: 1.4, ease: [0.2, 0.72, 0.18, 1] },
        }}
      />
      <SiteEffects slug={project.slug} active={active} subtle />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-16 bg-gradient-to-t from-black/35 to-transparent opacity-70" />
    </div>
  );
}

function LiveWalkthrough({ project, active }: { project: Project; active: boolean }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);
  const [shift, setShift] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const viewport = viewportRef.current;
    const content = contentRef.current;
    if (!viewport || !content) return;

    const update = () => {
      const nextScale = viewport.clientWidth / SITE_WIDTH;
      const visibleHeightAtDesignScale = viewport.clientHeight / nextScale;
      setScale(nextScale);
      setShift(Math.max(0, content.scrollHeight - visibleHeightAtDesignScale));
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(viewport);
    ro.observe(content);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const duration = clamp(5 + shift / 140, 5.2, 8.5);

  return (
    <div ref={viewportRef} className="relative h-full w-full overflow-hidden bg-white">
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{ width: SITE_WIDTH, transform: `scale(${scale})`, visibility: scale ? "visible" : "hidden" }}
      >
        <motion.div
          ref={contentRef}
          animate={{ y: active && !reduceMotion ? -shift : 0 }}
          transition={{
            duration: active ? duration : 1.25,
            ease: [0.2, 0.72, 0.18, 1],
          }}
        >
          <SitePreview slug={project.slug} />
        </motion.div>
      </div>
      <SiteEffects slug={project.slug} active={active} subtle />
    </div>
  );
}

function BrowserChrome({ project }: { project: Project }) {
  return (
    <div className="flex h-11 items-center gap-3 border-b border-white/[0.08] bg-[#090b11]/95 px-4 sm:px-5">
      <div className="flex gap-1.5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/[0.07]" />
      </div>
      <div className="mx-auto max-w-[55%] truncate rounded-full border border-white/[0.06] bg-white/[0.035] px-4 py-1.5 text-center font-mono text-[9px] tracking-[0.08em] text-white/35 sm:text-[10px]">
        {project.slug.replaceAll("-", "")}.com
      </div>
      <span className="w-[43px]" aria-hidden="true" />
    </div>
  );
}

export function CinematicProjectCard({ project, index }: { project: Project; index: number }) {
  const [active, setActive] = useState(false);
  const reduceMotion = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const x = useSpring(px, { stiffness: 90, damping: 22, mass: 0.45 });
  const y = useSpring(py, { stiffness: 90, damping: 22, mass: 0.45 });
  const shape = cardShapes[index % cardShapes.length];
  const frameShape = frameShapes[index % frameShapes.length];
  const number = String(index + 1).padStart(2, "0");
  const accent = project.accent ?? "#f6c14a";

  const style = {
    "--project-accent": accent,
    backgroundImage: `radial-gradient(circle at ${index % 2 ? "85% 0%" : "10% 0%"}, ${accent}18, transparent 31%), linear-gradient(180deg, rgba(255,255,255,.035), rgba(255,255,255,.012))`,
  } as CSSProperties;

  const onPointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (reduceMotion || event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    px.set(((event.clientX - rect.left) / rect.width - 0.5) * 8);
    py.set(((event.clientY - rect.top) / rect.height - 0.5) * 8);
  };

  const reset = () => {
    setActive(false);
    px.set(0);
    py.set(0);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 46 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px -10%" }}
      transition={{ duration: 0.8, delay: index % 2 ? 0.08 : 0, ease: [0.21, 0.65, 0.15, 1] }}
      onPointerEnter={(event) => {
        if (event.pointerType !== "touch") setActive(true);
      }}
      onPointerLeave={reset}
      onPointerMove={onPointerMove}
      onFocusCapture={() => setActive(true)}
      onBlurCapture={reset}
      className={`${shape} group relative overflow-hidden border border-white/[0.08] shadow-[0_28px_100px_-52px_rgba(0,0,0,.85)] transition-colors duration-700 hover:border-white/[0.16] ${index % 2 ? "lg:mt-24" : ""}`}
      style={style}
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-0 blur-[100px] transition-opacity duration-1000 group-hover:opacity-30" style={{ background: accent }} />

      <motion.div style={{ x, y }} className="relative p-3 sm:p-4 lg:p-5">
        <div className={`${frameShape} overflow-hidden border border-white/[0.1] bg-[#090b11] shadow-[0_30px_80px_-34px_rgba(0,0,0,.95)]`}>
          <BrowserChrome project={project} />
          <div className="h-[230px] sm:h-[310px] lg:h-[360px]">
            {project.image ? (
              <ScreenshotWalkthrough project={project} active={active} />
            ) : (
              <LiveWalkthrough project={project} active={active} />
            )}
          </div>
        </div>
      </motion.div>

      <div className="relative flex items-end justify-between gap-5 px-6 pb-7 pt-3 sm:px-8 sm:pb-8 sm:pt-4">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
            <span style={{ color: accent }}>{number}</span>
            <span>{project.industry}</span>
            <span className="inline-flex items-center gap-1.5 normal-case tracking-normal text-white/30">
              <MapPin className="h-3 w-3" aria-hidden="true" />
              {project.location}
            </span>
          </div>
          <h2 className="mt-3 font-display text-[1.55rem] font-semibold leading-none tracking-[-0.035em] text-white sm:text-[1.85rem]">
            {project.name}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-500 transition-colors duration-500 group-hover:text-slate-400">
            {project.summary}
          </p>
        </div>

        <Link
          to={`/portfolio/${project.slug}/`}
          aria-label={`Explore ${project.name}`}
          className="group/button hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-all duration-500 hover:scale-105 hover:border-white/25 hover:bg-white/[0.08] sm:flex"
        >
          <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>

      <div className="px-6 pb-7 sm:hidden">
        <Link
          to={`/portfolio/${project.slug}/`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-white"
        >
          Explore website
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  );
}
