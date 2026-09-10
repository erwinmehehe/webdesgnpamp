import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Building2, ChevronLeft, ChevronRight, Factory, HardHat, Hotel,
  Landmark, MoveHorizontal, Plane, Stethoscope, UtensilsCrossed,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "@/router";
import { Reveal, staggerItem } from "@/components/Reveal";
import { cn } from "@/utils/cn";

interface StripItem {
  label: string;
  to: string;
  icon: LucideIcon;
}

const items: StripItem[] = [
  { label: "Hotels & Resorts", to: "/industries/hotel-web-design/", icon: Hotel },
  { label: "Real Estate", to: "/industries/real-estate-web-design/", icon: Landmark },
  { label: "Restaurants", to: "/industries/restaurant-web-design/", icon: UtensilsCrossed },
  { label: "Clinics & Dental", to: "/industries/", icon: Stethoscope },
  { label: "Logistics", to: "/industries/logistics-web-design/", icon: Plane },
  { label: "BPO & Outsourcing", to: "/industries/bpo-web-design-clark/", icon: Building2 },
  { label: "Construction", to: "/industries/construction-web-design/", icon: HardHat },
  { label: "Manufacturing", to: "/industries/manufacturing-web-design/", icon: Factory },
];

export function IndustryStrip() {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [ratio, setRatio] = useState(0.3);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
  const [hintVisible, setHintVisible] = useState(true);

  const drag = useRef({ active: false, startX: 0, startScroll: 0 });
  const suppressClick = useRef(false);
  const hasInteracted = useRef(false);
  const nudged = useRef(false);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = Math.max(1, track.scrollWidth - track.clientWidth);
    setProgress(Math.min(1, Math.max(0, track.scrollLeft / max)));
    setRatio(track.clientWidth / Math.max(1, track.scrollWidth));
    setCanLeft(track.scrollLeft > 4);
    setCanRight(track.scrollLeft < max - 4);
    if (track.scrollLeft > 24) {
      hasInteracted.current = true;
      setHintVisible(false);
    }
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateScrollState();
    track.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      track.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByCards = useCallback(
    (direction: 1 | -1) => {
      hasInteracted.current = true;
      setHintVisible(false);
      trackRef.current?.scrollBy({ left: direction * 360, behavior: reduce ? "auto" : "smooth" });
    },
    [reduce],
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track || reduce) return;

    const onDown = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || event.button !== 0) return;
      event.preventDefault();
      suppressClick.current = false;
      drag.current = { active: true, startX: event.clientX, startScroll: track.scrollLeft };
      document.body.style.cursor = "grabbing";

      const onMove = (e: PointerEvent) => {
        if (!drag.current.active) return;
        const dx = e.clientX - drag.current.startX;
        if (Math.abs(dx) > 8) suppressClick.current = true;
        track.scrollLeft = drag.current.startScroll - dx;
      };
      const onUp = () => {
        drag.current.active = false;
        hasInteracted.current = true;
        setHintVisible(false);
        document.body.style.cursor = "";
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
        window.removeEventListener("pointercancel", onUp);
        window.setTimeout(() => { suppressClick.current = false; }, 250);
      };
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
      window.addEventListener("pointercancel", onUp);
    };

    const onClickCapture = (event: MouseEvent) => {
      if (suppressClick.current) {
        event.preventDefault();
        event.stopPropagation();
        suppressClick.current = false;
      }
    };

    track.addEventListener("pointerdown", onDown);
    track.addEventListener("click", onClickCapture, true);
    return () => {
      track.removeEventListener("pointerdown", onDown);
      track.removeEventListener("click", onClickCapture, true);
    };
  }, [reduce]);

  const runNudge = useCallback(() => {
    if (reduce || nudged.current || hasInteracted.current) return;
    const track = trackRef.current;
    if (!track || track.scrollWidth <= track.clientWidth + 8) return;
    nudged.current = true;
    window.setTimeout(() => {
      if (hasInteracted.current) return;
      track.scrollTo({ left: 150, behavior: "smooth" });
      window.setTimeout(() => {
        if (!hasInteracted.current) track.scrollTo({ left: 0, behavior: "smooth" });
      }, 900);
    }, 600);
  }, [reduce]);

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    if (event.key === "ArrowRight") { event.preventDefault(); scrollByCards(1); }
    else if (event.key === "ArrowLeft") { event.preventDefault(); scrollByCards(-1); }
    else if (event.key === "Home") { event.preventDefault(); track.scrollTo({ left: 0, behavior: reduce ? "auto" : "smooth" }); }
    else if (event.key === "End") { event.preventDefault(); track.scrollTo({ left: track.scrollWidth, behavior: reduce ? "auto" : "smooth" }); }
  };

  const thumbPct = Math.min(100, Math.max(12, ratio * 100));

  return (
    <section className="relative overflow-hidden py-16 sm:py-20" aria-label="Industries we design for">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center font-mono text-[11px] font-medium uppercase tracking-[0.32em] text-slate-400 sm:text-xs">
            Built for the industries driving Pampanga &amp; Clark
          </p>
        </Reveal>
      </div>

      <div className="relative mt-8">
        <div className="mask-fade-x">
          <motion.div
            ref={trackRef}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-48px" }}
            onViewportEnter={runNudge}
            transition={{ staggerChildren: 0.06, delayChildren: 0.05 }}
            tabIndex={0}
            role="region"
            aria-label="Industries — scroll horizontally to explore all. Use left and right arrow keys."
            onKeyDown={onKeyDown}
            className="flex cursor-grab snap-x snap-proximity select-none gap-4 overflow-x-auto px-5 pt-1 pb-2 outline-none [scrollbar-width:none] focus-visible:ring-2 focus-visible:ring-gold-400/60 focus-visible:ring-inset active:cursor-grabbing sm:px-8 [&::-webkit-scrollbar]:hidden"
          >
            {items.map((item) => (
              <motion.div key={item.label} variants={staggerItem} className="shrink-0 snap-start">
                <Link
                  to={item.to}
                  draggable={false}
                  className="group/card flex min-w-[212px] items-center gap-3.5 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/40 hover:bg-gold-400/[0.06] hover:shadow-[0_16px_40px_-16px_rgba(246,193,74,0.35)] sm:min-w-[244px]"
                >
                  <item.icon className="h-5 w-5 shrink-0 text-gold-400 transition-transform duration-300 group-hover/card:scale-110" strokeWidth={1.9} aria-hidden="true" />
                  <span className="font-display text-[15px] font-semibold whitespace-nowrap text-white">{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <button type="button" onClick={() => scrollByCards(-1)} disabled={!canLeft} aria-label="Scroll industries left"
          className={cn("absolute top-1/2 left-4 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 md:flex",
            canLeft ? "border-white/10 bg-ink-900/85 text-slate-300 hover:border-gold-400/40 hover:text-gold-300" : "cursor-default border-white/5 bg-ink-900/50 text-slate-700")}>
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button type="button" onClick={() => scrollByCards(1)} disabled={!canRight} aria-label="Scroll industries right"
          className={cn("absolute top-1/2 right-4 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 md:flex",
            canRight ? "border-white/10 bg-ink-900/85 text-slate-300 hover:border-gold-400/40 hover:text-gold-300" : "cursor-default border-white/5 bg-ink-900/50 text-slate-700")}>
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <div className="mx-auto mt-5 flex max-w-7xl items-center gap-4 px-5 sm:px-8">
        <AnimatePresence>
          {hintVisible && (
            <motion.span key="hint" initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }} transition={{ duration: 0.4 }} className="flex shrink-0 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
              <motion.span animate={reduce ? undefined : { x: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }} className="flex" aria-hidden="true">
                <MoveHorizontal className="h-3.5 w-3.5 text-gold-400/80" />
              </motion.span>
              <span className="sm:hidden">Swipe to explore</span>
              <span className="hidden sm:inline">Drag to explore</span>
            </motion.span>
          )}
        </AnimatePresence>
        <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-white/[0.08]" aria-hidden="true">
          <div className="absolute top-0 h-full rounded-full bg-gradient-to-r from-gold-300 via-gold-500 to-orange-600" style={{ width: `${thumbPct}%`, left: `${progress * (100 - thumbPct)}%` }} />
        </div>
      </div>

      <Reveal delay={0.15}>
        <div className="mt-7 text-center">
          <Link to="/industries/" className="group inline-flex items-center gap-2 text-sm font-semibold text-gold-400 transition-colors hover:text-gold-300">
            Explore all industries
            <span className="h-px w-8 bg-current transition-all duration-300 group-hover:w-12" aria-hidden="true" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
