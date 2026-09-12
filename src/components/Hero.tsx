import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "@/router";
import { site, trustBar } from "@/data/site";

const easeOut = [0.21, 0.65, 0.15, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-36 sm:pt-40 lg:pb-28 lg:pt-44">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="bg-grid bg-grid-fade absolute inset-0" />
        <div className="animate-aurora absolute -top-40 left-1/2 h-[560px] w-[880px] -translate-x-1/2 rounded-full bg-gold-500/[0.13] blur-[130px]" />
        <div className="animate-aurora absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-violet-600/[0.1] blur-[120px] [animation-delay:-6s]" />
        <div className="absolute -right-40 top-24 h-[380px] w-[380px] rounded-full bg-orange-600/[0.09] blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: easeOut }}
          className="flex justify-center"
        >
          <span className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-medium text-slate-300 sm:text-[13px]">
            <span className="h-2 w-2 rounded-full bg-gold-400" aria-hidden="true" />
            Web design · Pampanga, Philippines
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.08, ease: easeOut }}
          className="mx-auto mt-8 max-w-5xl text-center font-display text-[2.45rem] font-bold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-[4.5rem]"
        >
          Web Design Pampanga for businesses that want <span className="text-gold-gradient">more enquiries.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: easeOut }}
          className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-slate-400 sm:text-lg"
        >
          I design fast, mobile-friendly websites for businesses in Pampanga. Clear pages, solid SEO foundations, and an easy way for customers to call, message or enquire.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.28 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-400"
        >
          {["Custom design", "Mobile-first", "SEO foundations"].map((item, index) => (
            <li key={item} className="flex items-center gap-2">
              {index > 0 && <span className="h-1 w-1 rounded-full bg-gold-400/70" aria-hidden="true" />}
              {item}
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.34, ease: easeOut }}
          className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            to="/contact/"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 px-8 py-4 text-base font-semibold text-ink-950 shadow-[0_8px_40px_-8px_rgba(246,193,74,0.6)] transition-all duration-300 hover:brightness-110 active:scale-[0.98] sm:w-auto"
          >
            Get a Website Quote
            <ArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-[#04301a] transition-all duration-300 hover:brightness-110 active:scale-[0.98] sm:w-auto"
          >
            <MessageCircle className="h-[18px] w-[18px]" aria-hidden="true" />
            WhatsApp
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.42 }}
          className="mt-4 text-center text-[13px] text-slate-500"
        >
          Starter websites from ₱30,000 · Typical small business build: 3-4 weeks
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.5, ease: easeOut }}
          className="mx-auto mt-10 max-w-3xl"
        >
          <dl className="grid grid-cols-2 gap-y-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-5 py-5 sm:grid-cols-4 sm:divide-x sm:divide-white/[0.07]">
            {trustBar.map((item) => (
              <div key={item.note} className="text-center">
                <dd className="font-display text-xl font-bold tracking-[-0.01em] text-white sm:text-2xl">{item.label}</dd>
                <dt className="mt-1 text-[11px] uppercase tracking-[0.14em] text-slate-500">{item.note}</dt>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.56, ease: easeOut }}
          className="mx-auto mt-14 max-w-5xl"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-white/[0.055] to-white/[0.015] p-6 shadow-[0_36px_120px_-55px_rgba(0,0,0,.9)] sm:p-8 lg:p-10">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold-400/[0.09] blur-[90px]" aria-hidden="true" />
            <div className="relative grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[.22em] text-gold-400">What the site should do</p>
                <h2 className="mt-4 font-display text-2xl font-semibold leading-tight text-white sm:text-3xl">
                  Make it easy to understand your business and easy to contact you.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
                  Good design helps, but the basics matter more: clear services, useful proof, fast mobile pages and visible contact options.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["01", "What do you do?", "Say it quickly and in plain English."],
                  ["02", "Why choose you?", "Show the facts people need before they trust you."],
                  ["03", "How do I contact you?", "Keep the next step obvious on every key page."],
                ].map(([number, title, body]) => (
                  <div key={number} className="rounded-2xl border border-white/[0.08] bg-black/10 p-5">
                    <p className="font-mono text-[10px] text-gold-400">{number}</p>
                    <h3 className="mt-3 text-sm font-semibold text-white">{title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-500">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
