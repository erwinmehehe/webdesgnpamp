import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, ChevronDown, ChevronRight, MapPin, MessageCircle, Phone, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "@/router";
import { Reveal, staggerItem } from "@/components/Reveal";
import { plans, process, site, stats } from "@/data/site";
import { cn } from "@/utils/cn";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-gold-400", className)}>
      <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold-400/70" aria-hidden="true" />
      {children}
    </span>
  );
}

export function GoldButton({ to, children, external, className }: { to: string; children: ReactNode; external?: boolean; className?: string }) {
  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-[0_8px_36px_-8px_rgba(246,193,74,0.55)] transition-all duration-300 hover:shadow-[0_12px_46px_-6px_rgba(246,193,74,0.7)] hover:brightness-110 active:scale-[0.98]",
    className,
  );
  const shine = (
    <span className="absolute inset-0 -translate-x-[120%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[120%]" aria-hidden="true" />
  );
  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={classes}>
        {shine}
        {children}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
      </a>
    );
  }
  return (
    <Link to={to} className={classes}>
      {shine}
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  );
}

export function GhostButton({ to, children, external }: { to: string; children: ReactNode; external?: boolean }) {
  const classes =
    "inline-flex items-center justify-center gap-2.5 rounded-full border border-white/12 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-gold-400/40 hover:bg-white/[0.07] active:scale-[0.98]";
  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  );
}

export function WhatsAppButton({ label = "WhatsApp Us" }: { label?: string }) {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-[#04301a] transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      {label}
    </a>
  );
}

export interface Crumb {
  label: string;
  to?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
        <li>
          <Link to="/" className="transition-colors hover:text-gold-300">Home</Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <ChevronRight className="h-3 w-3 text-slate-700" aria-hidden="true" />
            {item.to ? (
              <Link to={item.to} className="transition-colors hover:text-gold-300">{item.label}</Link>
            ) : (
              <span className="text-slate-400">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow, title, intro, crumbs, children, chips, align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  crumbs?: Crumb[];
  children?: ReactNode;
  chips?: string[];
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <section className="relative overflow-hidden pb-14 pt-32 sm:pt-36 lg:pb-20 lg:pt-40">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="bg-grid bg-grid-fade absolute inset-0" />
        <div className="animate-aurora absolute -top-40 left-1/2 h-[480px] w-[780px] -translate-x-1/2 rounded-full bg-gold-500/[0.11] blur-[130px]" />
        <div className="animate-aurora absolute -right-32 top-24 h-[340px] w-[340px] rounded-full bg-violet-600/[0.1] blur-[120px] [animation-delay:-7s]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className={cn(centered && "mx-auto max-w-3xl text-center")}>
          {crumbs && !centered && <Breadcrumbs items={crumbs} />}
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.21, 0.65, 0.15, 1] }}>
            <Eyebrow className={cn(centered && "justify-center")}>{eyebrow}</Eyebrow>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.21, 0.65, 0.15, 1] }}
            className="mt-6 max-w-4xl font-display text-[2.1rem] font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease: [0.21, 0.65, 0.15, 1] }}
            className={cn("mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg", centered && "mx-auto")}
          >
            {intro}
          </motion.p>
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.24, ease: [0.21, 0.65, 0.15, 1] }}
              className={cn("mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap", centered && "sm:justify-center")}
            >
              {children}
            </motion.div>
          )}
          {chips && (
            <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.34 }} className={cn("mt-8 flex flex-wrap gap-2.5", centered && "justify-center")}>
              {chips.map((chip) => (
                <li key={chip} className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-slate-400">
                  {chip}
                </li>
              ))}
            </motion.ul>
          )}
        </div>
      </div>
    </section>
  );
}

export function Section({ children, className, id, ambient = false, divider = false }: { children: ReactNode; className?: string; id?: string; ambient?: boolean; divider?: boolean }) {
  return (
    <section id={id} className={cn("relative scroll-mt-24 py-20 sm:py-24 lg:py-28", className)}>
      {divider && (
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />
      )}
      {ambient && (
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-40 top-1/4 h-[380px] w-[380px] rounded-full bg-gold-500/[0.05] blur-[130px]" />
          <div className="absolute -right-32 bottom-10 h-[340px] w-[340px] rounded-full bg-violet-600/[0.05] blur-[120px]" />
        </div>
      )}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function SectionIntro({ eyebrow, title, description, align = "center", className }: { eyebrow: string; title: ReactNode; description?: string; align?: "left" | "center"; className?: string }) {
  const centered = align === "center";
  return (
    <div className={cn(centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl", className)}>
      <Reveal>
        <Eyebrow className={cn(centered && "justify-center")}>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">{description}</p>
        </Reveal>
      )}
    </div>
  );
}

export function InfoCardGrid({ items, columns = 2, numbered = false }: { items: { title: string; description: string; icon?: LucideIcon }[]; columns?: 2 | 3; numbered?: boolean }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-64px" }}
      transition={{ staggerChildren: 0.09, delayChildren: 0.08 }}
      className={cn("grid gap-4", columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3")}
    >
      {items.map((item, i) => (
        <motion.div
          key={item.title}
          variants={staggerItem}
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.045] to-white/[0.012] p-6 transition-colors duration-500 hover:border-gold-400/30 sm:p-7"
        >
          <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-gold-400/[0.08] opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" aria-hidden="true" />
          <div className="relative">
            {item.icon ? (
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gold-400/20 bg-gold-400/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-gold-400/20">
                <item.icon className="h-5 w-5 text-gold-400" strokeWidth={1.8} aria-hidden="true" />
              </span>
            ) : numbered ? (
              <span className="font-mono text-xs tracking-[0.2em] text-gold-400/80">0{i + 1}</span>
            ) : null}
            <h3 className={cn("font-display text-lg font-semibold text-white", (item.icon || numbered) && "mt-5")}>{item.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-400">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export function CheckList({ items, columns = 1 }: { items: string[]; columns?: 1 | 2 }) {
  return (
    <ul className={cn("space-y-3", columns === 2 && "grid gap-x-8 gap-y-3 sm:grid-cols-2 sm:space-y-0")}>
      {items.map((item, i) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.05 * i }}
          className="flex items-start gap-3 text-sm leading-relaxed text-slate-300"
        >
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-400/15">
            <Check className="h-3 w-3 text-gold-400" strokeWidth={3} aria-hidden="true" />
          </span>
          {item}
        </motion.li>
      ))}
    </ul>
  );
}

export function StatStrip() {
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.06] lg:grid-cols-4">
      {stats.map((stat, i) => (
        <Reveal key={stat.label} delay={0.07 * i} y={18} className="bg-ink-950">
          <div className="h-full px-6 py-8 text-center sm:px-7">
            <dd className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              <span className="text-gold-gradient">{stat.value}{stat.suffix}</span>
            </dd>
            <dt className="mt-2 text-sm font-medium text-slate-400">{stat.label}</dt>
            <p className="mt-1 text-xs text-slate-500">{stat.note}</p>
          </div>
        </Reveal>
      ))}
    </dl>
  );
}

export function ProcessSteps() {
  return (
    <div className="relative mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-gold-400/0 via-gold-400/35 to-gold-400/0 lg:block" aria-hidden="true" />
      {process.map((item, i) => (
        <Reveal key={item.step} delay={0.1 * i}>
          <div className="group relative">
            <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-400/25 bg-ink-900 font-display text-sm font-bold text-gold-400 shadow-[0_0_30px_-8px_rgba(246,193,74,0.35)] transition-all duration-500 group-hover:scale-110 group-hover:border-gold-400/60">
              {item.step}
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function FAQAccordion({ items, defaultOpen = 0 }: { items: { question: string; answer: string }[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  return (
    <div className="space-y-3">
      {items.map((faq, i) => {
        const isOpen = open === i;
        return (
          <Reveal key={faq.question} delay={0.05 * i} y={16}>
            <div className={cn("overflow-hidden rounded-2xl border transition-colors duration-500", isOpen ? "border-gold-400/25 bg-gradient-to-b from-gold-500/[0.07] to-white/[0.02]" : "border-white/[0.07] bg-white/[0.03] hover:border-white/[0.14]")}>
              <h3>
                <button type="button" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen} aria-controls={`faq-panel-${i}`} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                  <span className={cn("font-display text-[15px] font-semibold transition-colors duration-300 sm:text-base", isOpen ? "text-gold-300" : "text-white")}>
                    {faq.question}
                  </span>
                  <span className={cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-500", isOpen ? "rotate-180 border-gold-400/40 bg-gold-400/15 text-gold-300" : "border-white/10 bg-white/[0.04] text-slate-500")} aria-hidden="true">
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div id={`faq-panel-${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.42, ease: [0.21, 0.65, 0.15, 1] }}>
                    <p className="px-6 pb-6 text-sm leading-relaxed text-slate-400">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

export function PricingCards() {
  return (
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-64px" }} transition={{ staggerChildren: 0.12, delayChildren: 0.08 }} className="grid items-stretch gap-6 lg:grid-cols-3">
      {plans.map((plan) => (
        <motion.div
          key={plan.name}
          variants={staggerItem}
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
          className={cn("relative flex flex-col rounded-3xl p-8", plan.featured ? "border border-gold-400/40 bg-gradient-to-b from-gold-500/[0.1] to-ink-900 shadow-[0_32px_90px_-30px_rgba(246,193,74,0.3)]" : "border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01]")}
        >
          {plan.featured && (
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-ink-950 shadow-[0_6px_24px_-4px_rgba(246,193,74,0.6)]">
              Most popular
            </span>
          )}
          <h3 className="font-display text-lg font-semibold text-white">{plan.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">{plan.tagline}</p>
          <div className="mt-6 flex items-baseline gap-2">
            <span className="font-display text-[2.5rem] font-bold leading-none tracking-tight text-white">{plan.price}</span>
            <span className="text-xs text-slate-500">{plan.priceNote}</span>
          </div>
          <ul className="mt-7 flex-1 space-y-3 border-t border-white/[0.07] pt-7">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                <span className={cn("mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full", plan.featured ? "bg-gold-400/20" : "bg-white/[0.07]")}>
                  <Check className={cn("h-3 w-3", plan.featured ? "text-gold-400" : "text-slate-400")} strokeWidth={3} aria-hidden="true" />
                </span>
                {feature}
              </li>
            ))}
          </ul>
          <Link to="/contact/" className={cn("group mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 active:scale-[0.98]", plan.featured ? "bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 text-ink-950 shadow-[0_8px_32px_-8px_rgba(246,193,74,0.6)] hover:brightness-110" : "border border-white/12 bg-white/[0.04] text-white hover:border-gold-400/40 hover:bg-white/[0.07]")}>
            {plan.cta}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}

export interface CrossLink {
  label: string;
  description: string;
  to: string;
  icon?: LucideIcon;
}

export function CrossLinks({ eyebrow, title, links, columns = 3 }: { eyebrow: string; title: string; links: CrossLink[]; columns?: 2 | 3 }) {
  return (
    <Section ambient divider>
      <SectionIntro eyebrow={eyebrow} title={title} />
      <div className={cn("mt-12 grid gap-4", columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3")}>
        {links.map((link, i) => (
          <Reveal key={link.to} delay={0.06 * i}>
            <Link to={link.to} className="group flex h-full items-start gap-4 rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-white/[0.012] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/30">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-gold-400/20 bg-gold-400/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-gold-400/20">
                {link.icon ? <link.icon className="h-5 w-5 text-gold-400" strokeWidth={1.8} aria-hidden="true" /> : <Sparkles className="h-5 w-5 text-gold-400" aria-hidden="true" />}
              </span>
              <span>
                <span className="flex items-center gap-1.5 font-display text-base font-semibold text-white">
                  {link.label}
                  <ArrowRight className="h-3.5 w-3.5 text-gold-400 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" aria-hidden="true" />
                </span>
                <span className="mt-1.5 block text-sm leading-relaxed text-slate-400">{link.description}</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function CTABand({ title = "Ready when you are.", intro = "Tell us about your business and what the website needs to do, and we'll come back with a clear scope and a fixed price.", eyebrow = "Get in touch" }: { title?: string; intro?: string; eyebrow?: string }) {
  return (
    <Section className="pb-28 sm:pb-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-gold-400/20 px-6 py-14 sm:px-12 sm:py-16 lg:py-20">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-850 to-ink-900" />
            <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_75%_80%_at_50%_40%,black,transparent)]" />
            <div className="animate-aurora absolute -top-32 left-1/2 h-[340px] w-[600px] -translate-x-1/2 rounded-full bg-gold-500/[0.15] blur-[110px]" />
            <div className="absolute -bottom-36 -left-24 h-[300px] w-[300px] rounded-full bg-orange-600/[0.11] blur-[100px]" />
          </div>
          <div className="relative mx-auto max-w-3xl text-center">
            <Eyebrow className="justify-center">{eyebrow}</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.9rem]">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">{intro}</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <GoldButton to="/contact/" className="w-full sm:w-auto">Get My Fixed-Price Quote</GoldButton>
              <WhatsAppButton />
            </div>
            <p className="mt-4 text-[13px] text-slate-500">
              Free consult &middot; No obligation &middot; Reply within 2 hours
            </p>
            <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-500">
              {["Fixed pricing, agreed up front", "Reply within hours", "No pushy sales calls"].map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-gold-400/80" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 text-sm text-slate-500 sm:flex-row sm:gap-7">
              <a href={site.phoneHref} className="flex items-center gap-2 transition-colors hover:text-gold-300">
                <Phone className="h-4 w-4 text-gold-400/80" aria-hidden="true" />
                {site.phoneDisplay}
              </a>
              <span className="hidden h-4 w-px bg-white/10 sm:block" aria-hidden="true" />
              <Link to="/#contact" className="flex items-center gap-2 transition-colors hover:text-gold-300">
                <MessageCircle className="h-4 w-4 text-gold-400/80" aria-hidden="true" />
                Send a quick message
              </Link>
              <span className="hidden h-4 w-px bg-white/10 sm:block" aria-hidden="true" />
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold-400/80" aria-hidden="true" />
                {site.location}
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
