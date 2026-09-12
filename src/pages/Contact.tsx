import { useMemo, useState } from "react";
import { AlertCircle, ArrowLeft, ArrowRight, Clock, ExternalLink, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { FAQAccordion, Eyebrow, PageHero, Section, SectionIntro } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { Link, navigate, usePageMeta } from "@/router";
import { generalFaqs, googleReviewsUrl, plans, site } from "@/data/site";
import { services } from "@/data/services";
import { cn } from "@/utils/cn";
import { trackEvent } from "@/utils/analytics";

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
    "Contact Web Design Pampanga | Request a Fixed-Price Quote",
    "Contact Web Design Pampanga for a free consultation and fixed-price website quote. Call, WhatsApp or send your project details online.",
  );

  const [form, setForm] = useState<FormState>(initialState);
  const [needs, setNeeds] = useState<string[]>([]);
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState | "needs", string>>>({});
  const [sending, setSending] = useState(false);
  const [sendFailed, setSendFailed] = useState(false);

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

  const continueToContact = () => {
    if (!needs.length) {
      setErrors((prev) => ({ ...prev, needs: "Choose at least one option." }));
      return;
    }
    trackEvent("quote_step_complete", { step: 1 });
    setStep(2);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next: Partial<Record<keyof FormState | "needs", string>> = {};
    if (!form.name.trim()) next.name = "Please tell us your name.";
    if (!form.email.trim()) next.email = "Please add an email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) next.email = "That email doesn't look right.";
    if (!form.message.trim()) next.message = "A short description helps us help you.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setSending(true);
    setSendFailed(false);
    trackEvent("form_submit_attempt", { form_name: "quote" });
    try {
      const response = await fetch("https://formsubmit.co/ajax/erwinvalles20@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New website enquiry — ${form.business || form.name}`,
          Name: form.name,
          Email: form.email,
          Phone: form.phone || "Not provided",
          Business: form.business || "Not provided",
          "Current site": form.currentSite || "Not provided",
          Needs: needs.join(", "),
          Budget: form.budget || "Not specified",
          Timeline: form.timeline || "Not specified",
          Message: form.message,
        }),
      });
      if (!response.ok) throw new Error("Form submission failed");
      trackEvent("form_submit", { form_name: "quote" });
      navigate("/thank-you/");
    } catch {
      setSendFailed(true);
    } finally {
      setSending(false);
    }
  };

  const fieldClass = (hasError?: string) => cn(
    "w-full rounded-2xl border bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder:text-slate-600 transition-colors focus:outline-none",
    hasError ? "border-rose-500/60 focus:border-rose-400" : "border-white/[0.09] hover:border-white/[0.16] focus:border-gold-400/60",
  );

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Tell us what the website needs to <span className="text-gold-gradient">do better.</span></>}
        intro="Start with the project. Contact details come second. Most enquiries receive a reply within a few business hours and a written scope follows once the requirements are clear."
        crumbs={[{ label: "Contact" }]}
        chips={["Free consultation", "Fixed-price scope", "No obligation"]}
      />

      <Section divider>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:gap-16">
          <div className="rounded-[2rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.045] to-white/[0.012] p-7 sm:p-9">
            <div className="flex items-center justify-between gap-4">
              <div>
                <Eyebrow>Request a quote</Eyebrow>
                <h2 className="mt-4 font-display text-2xl font-bold text-white">Step {step} of 2</h2>
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-500">{step === 1 ? "Project" : "Contact"}</span>
            </div>
            <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/[0.06]"><div className={cn("h-full rounded-full bg-gold-400 transition-all", step === 1 ? "w-1/2" : "w-full")} /></div>

            {step === 1 ? (
              <div className="mt-8">
                <fieldset>
                  <legend className="mb-3 block text-xs font-medium uppercase tracking-wider text-slate-400">What do you need? *</legend>
                  <div className="flex flex-wrap gap-2">
                    {[...services.map((s) => s.name), "Something else"].map((option) => {
                      const active = needs.includes(option);
                      return <button key={option} type="button" onClick={() => toggleNeed(option)} aria-pressed={active} className={cn("rounded-full border px-4 py-2.5 text-xs font-medium transition-all", active ? "border-gold-400/50 bg-gold-400/15 text-gold-200" : "border-white/[0.09] bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-slate-200")}>{option}</button>;
                    })}
                  </div>
                  {errors.needs && <p className="mt-2 flex items-center gap-1.5 text-xs text-rose-400"><AlertCircle className="h-3.5 w-3.5" />{errors.needs}</p>}
                </fieldset>
                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <div><label htmlFor="business" className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">Business name</label><input id="business" value={form.business} onChange={(e) => update("business", e.target.value)} className={fieldClass()} placeholder="Your business" /></div>
                  <div><label htmlFor="currentSite" className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">Current website</label><input id="currentSite" value={form.currentSite} onChange={(e) => update("currentSite", e.target.value)} className={fieldClass()} placeholder="https://... (optional)" /></div>
                </div>
                <button type="button" onClick={continueToContact} className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 px-7 py-4 text-sm font-semibold text-ink-950 sm:w-auto">Continue <ArrowRight className="h-4 w-4" /></button>
              </div>
            ) : (
              <form className="mt-8" onSubmit={handleSubmit} noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div><label htmlFor="name" className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">Your name *</label><input id="name" value={form.name} onChange={(e) => update("name", e.target.value)} className={fieldClass(errors.name)} placeholder="Juan Dela Cruz" />{errors.name && <p className="mt-2 text-xs text-rose-400">{errors.name}</p>}</div>
                  <div><label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">Email *</label><input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className={fieldClass(errors.email)} placeholder="you@business.ph" />{errors.email && <p className="mt-2 text-xs text-rose-400">{errors.email}</p>}</div>
                  <div><label htmlFor="phone" className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">Phone / Viber</label><input id="phone" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={fieldClass()} placeholder="09XX XXX XXXX" /></div>
                  <div><label htmlFor="budget" className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">Budget range</label><select id="budget" value={form.budget} onChange={(e) => update("budget", e.target.value)} className={cn(fieldClass(), "appearance-none bg-ink-900")}><option value="">Select…</option>{budgets.map((b) => <option key={b}>{b}</option>)}</select></div>
                  <div className="sm:col-span-2"><label htmlFor="timeline" className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">Timeline</label><select id="timeline" value={form.timeline} onChange={(e) => update("timeline", e.target.value)} className={cn(fieldClass(), "appearance-none bg-ink-900")}><option value="">Select…</option>{timelines.map((t) => <option key={t}>{t}</option>)}</select></div>
                </div>
                <div className="mt-6"><label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">Tell us about the project *</label><textarea id="message" rows={5} value={form.message} onChange={(e) => update("message", e.target.value)} className={cn(fieldClass(errors.message), "resize-y")} placeholder="What does the business do and what should the website improve?" />{errors.message && <p className="mt-2 text-xs text-rose-400">{errors.message}</p>}</div>
                {sendFailed && <div className="mt-6 rounded-2xl border border-rose-500/30 bg-rose-500/[0.06] px-5 py-4 text-sm text-rose-200">Something went wrong sending the form. Try again or <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="font-semibold underline">send the details on WhatsApp</a>.</div>}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button type="button" onClick={() => setStep(1)} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white"><ArrowLeft className="h-4 w-4" /> Back</button>
                  <button type="submit" disabled={sending} className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 px-7 py-3.5 text-sm font-semibold text-ink-950 disabled:opacity-60"><Send className="h-4 w-4" /> {sending ? "Sending…" : "Send my request"}</button>
                </div>
              </form>
            )}
          </div>

          <div className="space-y-4">
            <Reveal><a href={site.phoneHref} className="flex items-center gap-4 rounded-3xl border border-white/[0.07] bg-white/[0.03] p-6 hover:border-gold-400/30"><Phone className="h-5 w-5 text-gold-400" /><span><span className="block text-sm font-semibold text-white">{site.phoneDisplay}</span><span className="mt-1 block text-xs text-slate-500">Call or text · {site.hours}</span></span></a></Reveal>
            <Reveal delay={0.06}><a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-3xl border border-white/[0.07] bg-white/[0.03] p-6 hover:border-emerald-400/30"><MessageCircle className="h-5 w-5 text-emerald-400" /><span><span className="block text-sm font-semibold text-white">WhatsApp</span><span className="mt-1 block text-xs text-slate-500">Send your business name and website</span></span></a></Reveal>
            <Reveal delay={0.12}><a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="block rounded-3xl border border-gold-400/20 bg-gradient-to-b from-gold-500/[0.08] to-white/[0.02] p-6"><div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-gold-400" /><div><p className="text-sm font-semibold text-white">Web Design Pampanga on Google</p><p className="mt-1 text-xs text-slate-500">{site.location}</p></div></div><span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-gold-400">Open Google Business Profile <ExternalLink className="h-3.5 w-3.5" /></span></a></Reveal>
            <Reveal delay={0.18}><div className="glass rounded-3xl p-6"><h2 className="font-display text-lg font-semibold text-white">What happens next</h2><ol className="mt-5 space-y-4">{[["We review the details", "Usually the same business day."],["We ask only scope-changing questions", "No long discovery form before a useful reply."],["You receive a written quote", "Scope, timeline and fixed price before work starts."]].map(([t,d],i)=><li key={t} className="flex gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-400/10 text-[11px] font-bold text-gold-400">0{i+1}</span><span><span className="block text-sm font-semibold text-white">{t}</span><span className="mt-1 block text-xs leading-relaxed text-slate-400">{d}</span></span></li>)}</ol><p className="mt-5 flex items-center gap-2 border-t border-white/[0.07] pt-5 text-xs text-slate-500"><Clock className="h-3.5 w-3.5 text-gold-400" />{site.responseTime}</p></div></Reveal>
            <Reveal delay={0.24}><div className="rounded-3xl border border-white/[0.07] bg-white/[0.03] p-6"><p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold-400">Starting points</p><ul className="mt-4 space-y-2">{plans.map((plan)=><li key={plan.name} className="flex items-center justify-between gap-3 text-sm text-slate-300"><span>{plan.name}</span><span className="font-semibold text-white">{plan.price}</span></li>)}</ul><Link to="/pricing/" className="mt-5 inline-flex text-xs font-semibold text-gold-400">See full pricing →</Link></div></Reveal>
          </div>
        </div>
      </Section>

      <Section ambient divider className="pb-28 sm:pb-32">
        <SectionIntro eyebrow="Before you send" title="Quick answers to the usual questions" />
        <div className="mx-auto mt-12 max-w-3xl"><FAQAccordion items={generalFaqs.slice(0, 4)} /></div>
      </Section>
    </>
  );
}
