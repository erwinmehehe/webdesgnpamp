import { useMemo, useState } from "react";
import { AlertCircle, ArrowLeft, ArrowRight, Send } from "lucide-react";
import { FAQAccordion, Eyebrow, PageHero, Section, SectionIntro } from "@/components/blocks";
import { navigate, usePageMeta } from "@/router";
import { generalFaqs, site } from "@/data/site";
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

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  business: "",
  currentSite: "",
  budget: "",
  timeline: "",
  message: "",
};

const budgets = ["Under ₱30,000", "₱30,000 – ₱50,000", "₱50,000 – ₱120,000", "Above ₱120,000", "Not sure yet"];
const timelines = ["As soon as possible", "1–2 months", "3–6 months", "Just planning ahead"];

export function ContactPage() {
  usePageMeta(
    "Contact Web Design Pampanga | Request a Website Quote",
    "Tell Web Design Pampanga what you need and request a website quote for design, development, redesign, maintenance or SEO.",
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
    ]
      .filter(Boolean)
      .join("\n");

    return `https://wa.me/639672488693?text=${encodeURIComponent(summary)}`;
  }, [form, needs]);

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const toggleNeed = (value: string) => {
    setNeeds((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]));
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
    if (!form.name.trim()) next.name = "Please add your name.";
    if (!form.email.trim()) next.email = "Please add your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) next.email = "Please check the email address.";
    if (!form.message.trim()) next.message = "Add a short note about the project.";

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

  const fieldClass = (hasError?: string) =>
    cn(
      "w-full rounded-2xl border bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder:text-slate-600 transition-colors focus:outline-none",
      hasError
        ? "border-rose-500/60 focus:border-rose-400"
        : "border-white/[0.09] hover:border-white/[0.16] focus:border-gold-400/60",
    );

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Tell me what you <span className="text-gold-gradient">need.</span></>}
        intro="Share a few details about the website. I’ll review them and reply with the right next step, usually within a few business hours."
        crumbs={[{ label: "Contact" }]}
      />

      <Section divider>
        <div className="mx-auto max-w-4xl">
          <div className="rounded-[2rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.045] to-white/[0.012] p-7 sm:p-9 lg:p-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <Eyebrow>{step === 1 ? "Project details" : "Contact details"}</Eyebrow>
                <h2 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
                  {step === 1 ? "What are you looking for?" : "How can I reach you?"}
                </h2>
              </div>
              <span className="shrink-0 rounded-full border border-white/10 px-3 py-1 text-xs text-slate-500">
                {step}/2
              </span>
            </div>

            <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/[0.06]">
              <div className={cn("h-full rounded-full bg-gold-400 transition-all", step === 1 ? "w-1/2" : "w-full")} />
            </div>

            {step === 1 ? (
              <div className="mt-8">
                <fieldset>
                  <legend className="mb-3 block text-xs font-medium uppercase tracking-wider text-slate-400">
                    What do you need help with? *
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {[...services.map((service) => service.name), "Something else"].map((option) => {
                      const active = needs.includes(option);
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => toggleNeed(option)}
                          aria-pressed={active}
                          className={cn(
                            "rounded-full border px-4 py-2.5 text-xs font-medium transition-all",
                            active
                              ? "border-gold-400/50 bg-gold-400/15 text-gold-200"
                              : "border-white/[0.09] bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-slate-200",
                          )}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                  {errors.needs && (
                    <p className="mt-2 flex items-center gap-1.5 text-xs text-rose-400">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.needs}
                    </p>
                  )}
                </fieldset>

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="business" className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">Business name</label>
                    <input id="business" value={form.business} onChange={(event) => update("business", event.target.value)} className={fieldClass()} placeholder="Your business" />
                  </div>
                  <div>
                    <label htmlFor="currentSite" className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">Current website</label>
                    <input id="currentSite" value={form.currentSite} onChange={(event) => update("currentSite", event.target.value)} className={fieldClass()} placeholder="Optional" />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={continueToContact}
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 px-7 py-4 text-sm font-semibold text-ink-950 sm:w-auto"
                >
                  Next: contact details
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <form className="mt-8" onSubmit={handleSubmit} noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">Your name *</label>
                    <input id="name" value={form.name} onChange={(event) => update("name", event.target.value)} className={fieldClass(errors.name)} placeholder="Your name" />
                    {errors.name && <p className="mt-2 text-xs text-rose-400">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">Email *</label>
                    <input id="email" type="email" value={form.email} onChange={(event) => update("email", event.target.value)} className={fieldClass(errors.email)} placeholder="you@business.com" />
                    {errors.email && <p className="mt-2 text-xs text-rose-400">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">Phone / Viber</label>
                    <input id="phone" value={form.phone} onChange={(event) => update("phone", event.target.value)} className={fieldClass()} placeholder="09XX XXX XXXX" />
                  </div>
                  <div>
                    <label htmlFor="budget" className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">Budget</label>
                    <select id="budget" value={form.budget} onChange={(event) => update("budget", event.target.value)} className={cn(fieldClass(), "appearance-none bg-ink-900")}>
                      <option value="">Select one</option>
                      {budgets.map((budget) => <option key={budget}>{budget}</option>)}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="timeline" className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">When do you want to start?</label>
                    <select id="timeline" value={form.timeline} onChange={(event) => update("timeline", event.target.value)} className={cn(fieldClass(), "appearance-none bg-ink-900")}>
                      <option value="">Select one</option>
                      {timelines.map((timeline) => <option key={timeline}>{timeline}</option>)}
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">Anything else I should know? *</label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(event) => update("message", event.target.value)}
                    className={cn(fieldClass(errors.message), "resize-y")}
                    placeholder="What does your business do, and what would you like the website to improve?"
                  />
                  {errors.message && <p className="mt-2 text-xs text-rose-400">{errors.message}</p>}
                </div>

                {sendFailed && (
                  <div className="mt-6 rounded-2xl border border-rose-500/30 bg-rose-500/[0.06] px-5 py-4 text-sm text-rose-200">
                    The form did not send. Please try again or <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="font-semibold underline">send it on WhatsApp</a>.
                  </div>
                )}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button type="button" onClick={() => setStep(1)} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white">
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </button>
                  <button type="submit" disabled={sending} className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 px-7 py-3.5 text-sm font-semibold text-ink-950 disabled:opacity-60">
                    <Send className="h-4 w-4" />
                    {sending ? "Sending…" : "Send enquiry"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Section>

      <Section ambient divider className="pb-28 sm:pb-32">
        <SectionIntro
          eyebrow="Before you send"
          title="A few useful answers"
          description="Pricing, timelines, mobile support and redesigns, without the sales pitch."
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <FAQAccordion items={generalFaqs.slice(0, 4)} />
        </div>
      </Section>
    </>
  );
}
