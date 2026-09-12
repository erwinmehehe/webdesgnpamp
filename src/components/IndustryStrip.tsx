import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Building2, ChevronLeft, ChevronRight, Factory, HardHat, Hotel,
  Landmark, Plane, Stethoscope, UtensilsCrossed,
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
  const [canScroll, setCanScroll] = useState(true);

  const drag = useRef({ active: false, startX: 0, startScroll: 0 });
  const suppressClick = useRef(false);
  const paused = useRef(false);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  const getCycleWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    return track.scrollWidth / 2;
  }, []);

  const normalizeLoopPosition = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const cycleWidth = getCycleWidth();
    if (!cycleWidth) return;

    if (track.scrollLeft >= cycleWidth) track.scrollLeft -= cycleWidth;
    if (track.scrollLeft < 0) track.scrollLeft += cycleWidth;
  }, [getCycleWidth]);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const cycleWidth = getCycleWidth();
    if (!cycleWidth) return;

    const loopLeft = ((track.scrollLeft % cycleWidth) + cycleWidth) % cycleWidth;
    setProgress(Math.min(1, Math.max(0, loopLeft / cycleWidth)));
    setRatio(Math.min(1, track.clientWidth / cycleWidth));
    setCanScroll(cycleWidth > track.clientWidth + 8);
  }, [getCycleWidth]);

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

  useEffect(() => {
    const track = trackRef.current;
    if (!track || reduce || !canScroll) return;

    const speed = 28;

    const tick = (time: number) => {
      if (lastTimeRef.current == null) lastTimeRef.current = time;
      const delta = Math.min(40, time - lastTimeRef.current);
      lastTimeRef.current = time;

      if (!paused.current && !drag.current.active) {
        track.scrollLeft += (speed * delta) / 1000;
        normalizeLoopPosition();
      }

      rafRef.current = window.requestAnimationFrame(tick);
    };

    rafRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTimeRef.current = null;
    };
  }, [canScroll, normalizeLoopPosition, reduce]);

  const scrollByCards = useCallback(
    (direction: 1 | -1) => {
      const track = trackRef.current;
      if (!track) return;
      paused.current = true;
      track.scrollBy({ left: direction * 360, behavior: reduce ? "auto" : "smooth" });
      window.setTimeout(() => {
        normalizeLoopPosition();
        paused.current = false;
      }, 700);
    },
    [normalizeLoopPosition, reduce],
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track || reduce) return;

    const onDown = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || event.button !== 0) return;
      event.preventDefault();
      paused.current = true;
      suppressClick.current = false;
      drag.current = { active: true, startX: event.clientX, startScroll: track.scrollLeft };
      document.body.style.cursor = "grabbing";

      const onMove = (e: PointerEvent) => {
        if (!drag.current.active) return;
        const dx = e.clientX - drag.current.startX;
        if (Math.abs(dx) > 8) suppressClick.current = true;
        track.scrollLeft = drag.current.startScroll - dx;
        normalizeLoopPosition();
      };

      const onUp = () => {
        drag.current.active = false;
        document.body.style.cursor = "";
        normalizeLoopPosition();
        window.setTimeout(() => {
          suppressClick.current = false;
          paused.current = false;
        }, 250);
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
        window.removeEventListener("pointercancel", onUp);
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
  }, [normalizeLoopPosition, reduce]);

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollByCards(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollByCards(-1);
    }
  };

  const thumbPct = Math.min(100, Math.max(12, ratio * 100));
  const loopItems = [...items, ...items];

  return (
    <section className="relative overflow-hidden py-16 sm:py-20" aria-label="Industries we design for">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center font-mono text-[11px] font-medium uppercase tracking-[0.32em] text-slate-400 sm:text-xs">
            Built for the industries driving Pampanga &amp; Clark
          </p>
        </Reveal>
      </div>

      <div
        className="relative mt-8"
        onMouseEnter={() => { paused.current = true; }}
        onMouseLeave={() => { paused.current = false; }}
        onFocusCapture={() => { paused.current = true; }}
        onBlurCapture={() => { paused.current = false; }}
      >
        <div className="mask-fade-x">
          <motion.div
            ref={trackRef}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-48px" }}
            transition={{ staggerChildren: 0.045, delayChildren: 0.05 }}
            tabIndex={0}
            role="region"
            aria-label="Industries — moving left automatically. Hover or focus to pause, or drag to explore."
            onKeyDown={onKeyDown}
            className="flex cursor-grab select-none gap-4 overflow-x-auto px-5 pb-2 pt-1 outline-none [scrollbar-width:none] focus-visible:ring-2 focus-visible:ring-gold-400/60 focus-visible:ring-inset active:cursor-grabbing sm:px-8 [&::-webkit-scrollbar]:hidden"
          >
            {loopItems.map((item, index) => {
              const duplicate = index >= items.length;
              return (
                <motion.div
                  key={`${item.label}-${index}`}
                  variants={staggerItem}
                  className="shrink-0"
                  aria-hidden={duplicate || undefined}
                >
                  <Link
                    to={item.to}
                    draggable={false}
                    tabIndex={duplicate ? -1 : undefined}
                    className="group/card flex min-w-[212px] items-center gap-3.5 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/40 hover:bg-gold-400/[0.06] hover:shadow-[0_16px_40px_-16px_rgba(246,193,74,0.35)] sm:min-w-[244px]"
                  >
                    <item.icon className="h-5 w-5 shrink-0 text-gold-400 transition-transform duration-300 group-hover/card:scale-110" strokeWidth={1.9} aria-hidden="true" />
                    <span className="whitespace-nowrap font-display text-[15px] font-semibold text-white">{item.label}</span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <button
          type="button"
          onClick={() => scrollByCards(-1)}
          disabled={!canScroll}
          aria-label="Scroll industries left"
          className={cn(
            "absolute left-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 md:flex",
            canScroll
              ? "border-white/10 bg-ink-900/85 text-slate-300 hover:border-gold-400/40 hover:text-gold-300"
              : "cursor-default border-white/5 bg-ink-900/50 text-slate-700",
          )}
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={() => scrollByCards(1)}
          disabled={!canScroll}
          aria-label="Scroll industries right"
          className={cn(
            "absolute right-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 md:flex",
            canScroll
              ? "border-white/10 bg-ink-900/85 text-slate-300 hover:border-gold-400/40 hover:text-gold-300"
              : "cursor-default border-white/5 bg-ink-900/50 text-slate-700",
          )}
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <div className="mx-auto mt-5 flex max-w-7xl items-center px-5 sm:px-8">
        <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-white/[0.08]" aria-hidden="true">
          <div
            className="absolute top-0 h-full rounded-full bg-gradient-to-r from-gold-300 via-gold-500 to-orange-600"
            style={{ width: `${thumbPct}%`, left: `${progress * (100 - thumbPct)}%` }}
          />
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
