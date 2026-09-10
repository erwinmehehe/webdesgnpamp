import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import {
  ArrowDown, ArrowRight, CalendarCheck2, Flame, Lock, MessageCircle,
  Smartphone, Sparkles, Timer, TrendingUp,
} from "lucide-react";
import { Link } from "@/router";
import { clientLogos, site, trustBar } from "@/data/site";

const easeOut = [0.21, 0.65, 0.15, 1] as const;

function FloatingCard({ className, x, y, floatClass, children }: { className?: string; x: ReturnType<typeof useSpring>; y: ReturnType<typeof useSpring>; floatClass: string; children: ReactNode }) {
  return (
    <motion.div style={{ x, y }} className={`absolute z-20 hidden lg:block ${className ?? ""}`}>
      <div className={`glass rounded-2xl p-4 shadow-[0_20px_60px_-18px_rgba(0,0,0,0.75)] ${floatClass}`}>
        {children}
      </div>
    </motion.div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 55, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 55, damping: 18, mass: 0.6 });

  const x1 = useTransform(sx, (v) => v * 24);
  const y1 = useTransform(sy, (v) => v * 16);
  const x2 = useTransform(sx, (v) => v * -30);
  const y2 = useTransform(sy, (v) => v * -18);
  const x3 = useTransform(sx, (v) => v * 16);
  const y3 = useTransform(sy, (v) => v * -22);
  const x4 = useTransform(sx, (v) => v * -20);
  const y4 = useTransform(sy, (v) => v * 20);

  return (
    <section
      id="top"
      className="relative overflow-hidden pb-16 pt-36 sm:pt-40 lg:pb-24 lg:pt-44"
      onMouseMove={(e) => {
        if (reduce) return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="bg-grid bg-grid-fade absolute inset-0" />
        <div className="animate-aurora absolute -top-40 left-1/2 h-[560px] w-[880px] -translate-x-1/2 rounded-full bg-gold-500/[0.13] blur-[130px]" />
        <div className="animate-aurora absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-violet-600/[0.12] blur-[120px] [animation-delay:-6s]" />
        <div className="absolute -right-40 top-24 h-[380px] w-[380px] rounded-full bg-orange-600/[0.1] blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: easeOut }} className="flex justify-center">
          <span className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-medium text-slate-300 sm:text-[13px]">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-gold-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
            </span>
            Independent web design studio · Pampanga, Philippines
            <Sparkles className="h-3.5 w-3.5 text-gold-400" aria-hidden="true" />
          </span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.08, ease: easeOut }} className="mx-auto mt-8 max-w-4xl text-center font-display text-[2.4rem] font-bold leading-[1.07] tracking-tight text-white sm:text-6xl lg:text-[4.3rem]">
          A better website for the business <span className="text-gold-gradient">you&rsquo;re building.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.2, ease: easeOut }} className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-slate-400 sm:text-lg">
          We design polished, easy-to-use websites that make your business feel credible, clear and worth contacting. Thoughtful on desktop, effortless on mobile, and built around what your customers actually need.
        </motion.p>

        <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.3 }} className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-400">
          {["Custom design", "Mobile-first", "Clear conversion paths"].map((item, i) => (
            <li key={item} className="flex items-center gap-2">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-gold-400/70" aria-hidden="true" />}
              {item}
            </li>
          ))}
        </motion.ul>

        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.38, ease: easeOut }} className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to="/contact/" className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 px-8 py-4 text-base font-semibold text-ink-950 shadow-[0_8px_40px_-8px_rgba(246,193,74,0.6)] transition-all duration-300 hover:shadow-[0_12px_52px_-6px_rgba(246,193,74,0.75)] hover:brightness-110 active:scale-[0.98] sm:w-auto">
            <span className="absolute inset-0 -translate-x-[120%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[120%]" aria-hidden="true" />
            Get My Fixed-Price Quote
            <ArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-[#04301a] transition-all duration-300 hover:brightness-110 active:scale-[0.98] sm:w-auto"
          >
            <MessageCircle className="h-[18px] w-[18px]" aria-hidden="true" />
            WhatsApp Us
          </a>
        </motion.div>

        {/* Micro-copy — removes hesitation */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.46 }}
          className="mt-4 text-center text-[13px] text-slate-500"
        >
          Free consult &middot; No obligation &middot; Reply within 2 hours
        </motion.p>

        {/* Trust bar — proof immediately after the CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.54 }}
          className="mx-auto mt-9 max-w-3xl"
        >
          <dl className="grid grid-cols-2 gap-y-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-5 py-5 sm:grid-cols-4 sm:divide-x sm:divide-white/[0.07]">
            {trustBar.map((item) => (
              <div key={item.note} className="text-center">
                <dd className="font-display text-xl font-bold tracking-[-0.01em] text-white sm:text-2xl">
                  {item.label}
                </dd>
                <dt className="mt-1 text-[11px] uppercase tracking-[0.14em] text-slate-500">
                  {item.note}
                </dt>
              </div>
            ))}
          </dl>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {clientLogos.map((logo) => (
              <span
                key={logo}
                className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600 transition-colors duration-300 hover:text-slate-400"
              >
                {logo}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="mt-8 flex flex-col items-center justify-center gap-3 text-sm text-slate-400 sm:flex-row sm:gap-5">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
            Free first consultation · no obligation
          </span>
          <span className="hidden h-4 w-px bg-white/15 sm:block" aria-hidden="true" />
          <span className="flex items-center gap-2">
            <Timer className="h-4 w-4 text-gold-400/80" aria-hidden="true" />
            Most projects launch in 3–4 weeks
          </span>
        </motion.div>

        {/* Browser mockup — interactive preview */}
        <motion.div initial={{ opacity: 0, y: 56, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1.1, delay: 0.55, ease: easeOut }} className="relative mx-auto mt-16 max-w-5xl sm:mt-20">
          <div className="absolute -inset-x-10 -top-12 bottom-0 rounded-[3rem] bg-gradient-to-b from-gold-500/[0.14] via-orange-500/[0.05] to-transparent blur-2xl" aria-hidden="true" />

          {!reduce && (
            <>
              <FloatingCard x={x1} y={y1} floatClass="animate-float" className="-left-14 top-14 xl:-left-24">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-400/15">
                    <Smartphone className="h-5 w-5 text-gold-400" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">Mobile-first</p>
                    <p className="mt-0.5 text-[11px] text-slate-400">Designed for phones first</p>
                  </div>
                </div>
              </FloatingCard>
              <FloatingCard x={x2} y={y2} floatClass="animate-float-slow" className="-right-12 top-8 xl:-right-20">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/15">
                    <TrendingUp className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">Clear next step</p>
                    <p className="mt-0.5 text-[11px] text-slate-400">Every page has one</p>
                  </div>
                </div>
              </FloatingCard>
              <FloatingCard x={x3} y={y3} floatClass="animate-float [animation-delay:-3s]" className="-left-10 bottom-20 xl:-left-16">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-400/15">
                    <MessageCircle className="h-5 w-5 text-violet-300" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">Easy enquiries</p>
                    <p className="mt-0.5 text-[11px] text-slate-400">Form, call &amp; WhatsApp</p>
                  </div>
                </div>
              </FloatingCard>
              <FloatingCard x={x4} y={y4} floatClass="animate-float-slow [animation-delay:-5s]" className="-right-8 bottom-14 xl:-right-14">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-400/15">
                    <CalendarCheck2 className="h-5 w-5 text-gold-400" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">Bookings built in</p>
                    <p className="mt-0.5 text-[11px] text-slate-400">Table, room or quote</p>
                  </div>
                </div>
              </FloatingCard>
            </>
          )}

          <div className="relative overflow-hidden rounded-t-2xl border border-white/10 bg-ink-900 shadow-[0_40px_120px_-24px_rgba(0,0,0,0.85)]">
            <div className="flex items-center gap-3 border-b border-white/[0.06] bg-ink-850 px-4 py-3">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]/80" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]/80" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]/80" />
              </div>
              <div className="mx-auto flex w-full max-w-xs items-center justify-center gap-2 rounded-lg bg-white/[0.05] px-3 py-1.5 text-xs text-slate-500">
                <Lock className="h-3 w-3" aria-hidden="true" />
                Interactive preview
              </div>
              <span className="hidden w-10 sm:block" aria-hidden="true" />
            </div>

            <div className="relative flex aspect-[16/11] flex-col sm:aspect-[16/9]">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold-500/[0.16] blur-[90px]" aria-hidden="true" />
              <div className="flex items-center justify-between px-5 pt-5 sm:px-8 sm:pt-6">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-gold-300 to-orange-600">
                    <Flame className="h-3.5 w-3.5 text-ink-950" aria-hidden="true" />
                  </span>
                  <span className="font-display text-xs font-bold text-white sm:text-sm">Business name</span>
                </div>
                <div className="hidden items-center gap-4 text-[10px] font-medium text-slate-400 sm:flex sm:gap-5 sm:text-[11px]">
                  <span>Services</span>
                  <span>About</span>
                  <span>Gallery</span>
                  <span>Contact</span>
                </div>
                <span className="rounded-full bg-gold-400 px-3 py-1.5 text-[9px] font-bold text-ink-950 sm:px-3.5 sm:text-[10px]">
                  Enquire Now
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-center px-5 py-6 sm:px-8 sm:py-8">
                <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-gold-400 sm:text-[9px]">
                  Pampanga, Philippines
                </p>
                <p className="mt-2 max-w-[74%] font-display text-base font-bold leading-tight text-white sm:text-2xl lg:text-[1.7rem]">
                  Clear message, clear services, <br className="hidden sm:block" /> clear next step.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2 sm:mt-4">
                  <span className="rounded-md bg-gold-400 px-2.5 py-1 text-[8px] font-bold text-ink-950 sm:rounded-lg sm:px-3 sm:py-1.5 sm:text-[10px]">
                    Get a Quote
                  </span>
                  <span className="rounded-md border border-white/15 px-2.5 py-1 text-[8px] font-medium text-slate-300 sm:rounded-lg sm:px-3 sm:py-1.5 sm:text-[10px]">
                    View Services
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 px-5 pb-5 sm:gap-3 sm:px-8 sm:pb-6">
                {[
                  { label: "Loads fast", value: "Optimised images" },
                  { label: "On mobile", value: "Fully responsive" },
                  { label: "Next step", value: "Form · Call · Chat" },
                ].map((c) => (
                  <div key={c.label} className="glass rounded-lg px-2.5 py-2 sm:rounded-xl sm:px-3.5 sm:py-3">
                    <p className="text-[8px] uppercase tracking-wider text-slate-500 sm:text-[9px]">{c.label}</p>
                    <p className="mt-0.5 text-[10px] font-semibold text-white sm:text-xs">{c.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="h-3 rounded-b-2xl bg-gradient-to-b from-ink-700 to-ink-850" aria-hidden="true" />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 1 }} className="mt-14 flex justify-center">
          <Link to="/#contact" aria-label="Scroll to contact" className="group flex flex-col items-center gap-2 text-slate-500 transition-colors hover:text-gold-300">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Let&rsquo;s talk about your business</span>
            <ArrowDown className="animate-scroll-hint h-4 w-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
