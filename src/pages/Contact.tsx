import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { FAQAccordion, Eyebrow, PageHero, Section, SectionIntro, GoldButton, GhostButton } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { Link, usePageMeta } from "@/router";
import { generalFaqs, plans, site } from "@/data/site";
import { services } from "@/data/services";
import { cn } from "@/utils/cn";

interface FormState {
  name: string;
  email: string;
  phone: string;
  business: string;
  currentSite: string;
  budget: string;
  timeline: string;
  message: string;
}

const initialState: FormState = { name: "", email: "", phone: "", business: "", currentSite: "", budget: "", timeline: "", message: "" };
const budgets = ["Under ₱30,000", "₱30,000 – ₱50,000", "₱50,000 – ₱120,000", "Above ₱120,000", "Not sure yet"];
const timelines = ["As soon as possible", "1–2 months", "3–6 months", "Just planning ahead"];

export function ContactPage() {
  usePageMeta(
    "Contact | Web Design Pampanga — Free Quote & Consultation",
    "Contact Web Design Pampanga for a free quote. Call or text 0967 248 8693, message on WhatsApp, or send project details for a fixed price within 48 hours.",
  );

  const [form, setForm] = useState<FormState>(initialState);
  const [needs, setNeeds] = useState<string[]>([]);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState | "needs", string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const whatsappLink = useMemo(() => {
    const summary = [
      `Hi ${site.name}, I'd like to ask about a website.`,
      form.business ? `Business: ${form.business}` : "",
      needs.length ? `Needs: ${needs.join(", ")}` : "",
      form.budget ? `Budget: ${form.budget}` : "",
      form.timeline ? `Timeline: ${form.timeline}` : "",
      form.message ? `Details: ${form.message}` : "",
    ].filter(Boolean).join("\n");
    return `https://wa.me/639672488693?text=${encodeURIComponent(summary)}`;
  }, [form, needs]);

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const toggleNeed = (value: string) => {
    setNeeds((prev) => (prev.includes(value) ? prev.filter((n) => n !== value) : [...prev, value]));
    setErrors((prev) => ({ ...prev, needs: undefined }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next: Partial<Record<keyof FormState | "needs", string>> = {};
    if (!form.name.trim()) next.name = "Please tell us your name.";
    if (!form.email.trim()) next.email = "Please add an email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) next.email = "That email doesn't look right.";
    if (!form.message.trim()) next.message = "A short description helps us help you.";
    if (!needs.length) next.needs = "Pick at least one option, or choose 'Something else'.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSubmitted(true);
  };

  const fieldClass = (hasError?: string) =>
    cn(
      "w-full rounded-2xl border bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder:text-slate-600 transition-colors duration-300 focus:outline-none focus:ring-0",
      hasError ? "border-rose-500/60 focus:border-rose-400" : "border-white/[0.09] hover:border-white/[0.16] focus:border-gold-400/60",
    );

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let&rsquo;s build something <span className="text-gold-gradient">great.</span></>}
        intro="Tell us about your business and what the website needs to do. If you're in Clark, include whether the site should support sales, recruitment, or both — we'll reply with practical questions, a clear scope and a fixed price."
        crumbs={[{ label: "Contact" }]}
        chips={["Free consultation", "Proposal within 48 hours", "No obligation"]}
      />

      <Section divider>
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <div>
            <div className="rounded-[2rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.045] to-white/[0.012] p-7 sm:p-9">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div key="success" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
                    <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/15">
                      <CheckCircle2 className="h-8 w-8 text-emerald-400" aria-hidden="true" />
                    </span>
                    <h2 className="mt-6 font-display text-2xl font-bold text-white">Thanks, {form.name.split(" ")[0] || "there"} — message noted.</h2>
                    <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-400">
                      This demo form confirms your details locally. On the live site this would be sent straight to the studio inbox. To reach us immediately, use the phone or WhatsApp options on this page.
                    </p>
                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                      <GoldButton to={whatsappLink} external>Send these details on WhatsApp</GoldButton>
                      <GhostButton to={`mailto:${site.email}`}>
                        <Mail className="h-4 w-4 text-gold-400" aria-hidden="true" />
                        Email instead
                      </GhostButton>
                    </div>
                    <button type="button" onClick={() => { setSubmitted(false); setForm(initialState); setNeeds([]); }} className="mt-6 text-xs text-slate-500 underline-offset-4 transition-colors hover:text-gold-300 hover:underline">
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} onSubmit={handleSubmit} noValidate>
                    <Eyebrow>Project details</Eyebrow>
                    <h2 className="mt-4 font-display text-2xl font-bold text-white">Request a free quote</h2>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">Only your name, email, message and what you need are required. Everything else helps us quote more accurately.</p>

                    <div className="mt-8 grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">Your name *</label>
                        <input id="name" name="name" value={form.name} onChange={(e) => update("name", e.target.value)} aria-invalid={Boolean(errors.name)} className={fieldClass(errors.name)} placeholder="Juan Dela Cruz" />
                        {errors.name && <p className="mt-2 flex items-center gap-1.5 text-xs text-rose-400"><AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">Email *</label>
                        <input id="email" name="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} aria-invalid={Boolean(errors.email)} className={fieldClass(errors.email)} placeholder="you@business.ph" />
                        {errors.email && <p className="mt-2 flex items-center gap-1.5 text-xs text-rose-400"><AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />{errors.email}</p>}
                      </div>
                      <div>
                        <label htmlFor="phone" className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">Phone / Viber</label>
                        <input id="phone" name="phone" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={fieldClass()} placeholder="09XX XXX XXXX" />
                      </div>
                      <div>
                        <label htmlFor="business" className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">Business name</label>
                        <input id="business" name="business" value={form.business} onChange={(e) => update("business", e.target.value)} className={fieldClass()} placeholder="Your business" />
                      </div>
                    </div>

                    <fieldset className="mt-7">
                      <legend className="mb-3 block text-xs font-medium uppercase tracking-wider text-slate-400">What do you need? *</legend>
                      <div className="flex flex-wrap gap-2">
                        {[...services.map((s) => s.name), "Something else"].map((option) => {
                          const active = needs.includes(option);
                          return (
                            <button key={option} type="button" onClick={() => toggleNeed(option)} aria-pressed={active}
                              className={cn("rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300", active ? "border-gold-400/50 bg-gold-400/15 text-gold-200" : "border-white/[0.09] bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-slate-200")}>
                              {option}
                            </button>
                          );
                        })}
                      </div>
                      {errors.needs && <p className="mt-2 flex items-center gap-1.5 text-xs text-rose-400"><AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />{errors.needs}</p>}
                    </fieldset>

                    <div className="mt-7 grid gap-5 sm:grid-cols-3">
                      <div>
                        <label htmlFor="budget" className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">Budget range</label>
                        <select id="budget" value={form.budget} onChange={(e) => update("budget", e.target.value)} className={cn(fieldClass(), "appearance-none bg-ink-900")}>
                          <option value="">Select…</option>
                          {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="timeline" className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">Timeline</label>
                        <select id="timeline" value={form.timeline} onChange={(e) => update("timeline", e.target.value)} className={cn(fieldClass(), "appearance-none bg-ink-900")}>
                          <option value="">Select…</option>
                          {timelines.map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="currentSite" className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">Current website</label>
                        <input id="currentSite" value={form.currentSite} onChange={(e) => update("currentSite", e.target.value)} className={fieldClass()} placeholder="Optional" />
                      </div>
                    </div>

                    <div className="mt-7">
                      <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">Tell us about the project *</label>
                      <textarea id="message" rows={5} value={form.message} onChange={(e) => update("message", e.target.value)} aria-invalid={Boolean(errors.message)} className={cn(fieldClass(errors.message), "resize-y")} placeholder="What does the business do, who are your customers, and what should the website achieve?" />
                      {errors.message && <p className="mt-2 flex items-center gap-1.5 text-xs text-rose-400"><AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />{errors.message}</p>}
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                      <button type="submit" className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 px-8 py-4 text-sm font-semibold text-ink-950 shadow-[0_8px_36px_-8px_rgba(246,193,74,0.55)] transition-all duration-300 hover:brightness-110 active:scale-[0.98]">
                        <span className="absolute inset-0 -translate-x-[120%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[120%]" aria-hidden="true" />
                        <Send className="h-4 w-4" aria-hidden="true" />
                        Send my request
                      </button>
                      <p className="text-xs text-slate-500">We reply to most enquiries within a few hours on business days.</p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="space-y-4">
            <Reveal delay={0.08}>
              <a href={site.phoneHref} className="flex items-center gap-4 rounded-3xl border border-white/[0.07] bg-white/[0.03] px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/30">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-400/15">
                  <Phone className="h-5 w-5 text-gold-400" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">{site.phoneDisplay}</span>
                  <span className="mt-0.5 block text-xs text-slate-500">Call or text · {site.hours}</span>
                </span>
              </a>
            </Reveal>
            <Reveal delay={0.14}>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-3xl border border-white/[0.07] bg-white/[0.03] px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/15">
                  <MessageCircle className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">Message on WhatsApp</span>
                  <span className="mt-0.5 block text-xs text-slate-500">Send your business name and website link</span>
                </span>
              </a>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-white/[0.07] bg-white/[0.03] px-6 py-5">
                <span className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-400/15">
                    <MapPin className="h-5 w-5 text-violet-300" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-white">{site.location}</span>
                    <span className="mt-0.5 block text-xs text-slate-500">Serving all of Pampanga</span>
                  </span>
                </span>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                  <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-gold-400 transition-colors hover:text-gold-300">
                    View on Google Maps →
                  </a>
                  <Link to="/locations/" className="inline-flex items-center gap-2 text-xs font-semibold text-gold-400 transition-colors hover:text-gold-300">
                    See areas we serve →
                  </Link>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="glass rounded-3xl p-6">
                <h2 className="font-display text-lg font-semibold text-white">What happens next</h2>
                <ol className="mt-5 space-y-5">
                  {[
                    { t: "We read your details", d: "Usually the same business day." },
                    { t: "A short reply with questions", d: "Only the ones that change the scope or price." },
                    { t: "A written quote", d: "Scope, timeline, fixed price. No obligation." },
                  ].map((step, i) => (
                    <li key={step.t} className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold-400/25 bg-gold-400/10 font-display text-[11px] font-bold text-gold-400">0{i + 1}</span>
                      <span>
                        <span className="block text-sm font-semibold text-white">{step.t}</span>
                        <span className="mt-0.5 block text-xs leading-relaxed text-slate-400">{step.d}</span>
                      </span>
                    </li>
                  ))}
                </ol>
                <p className="mt-5 flex items-center gap-2 border-t border-white/[0.07] pt-5 text-xs text-slate-500">
                  <Clock className="h-3.5 w-3.5 text-gold-400/80" aria-hidden="true" />
                  {site.responseTime}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="rounded-3xl border border-gold-400/20 bg-gradient-to-b from-gold-500/[0.08] to-white/[0.02] p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold-400">Starting points</p>
                <ul className="mt-4 space-y-2">
                  {plans.map((plan) => (
                    <li key={plan.name} className="flex items-center justify-between gap-3 text-sm text-slate-300">
                      <span>{plan.name}</span>
                      <span className="font-semibold text-white">{plan.price}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/pricing/" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-gold-400 transition-colors hover:text-gold-300">
                  See full pricing →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section ambient divider className="pb-28 sm:pb-32">
        <SectionIntro eyebrow="Before you send" title="Quick answers to the usual questions" />
        <div className="mx-auto mt-12 max-w-3xl">
          <FAQAccordion items={generalFaqs.slice(0, 4)} />
        </div>
      </Section>
    </>
  );
}
