import { useEffect, useState } from "react";
import { AlertCircle, ArrowRight, Send } from "lucide-react";
import { Eyebrow, PageHero, Section } from "@/components/blocks";
import { navigate, usePageMeta } from "@/router";
import { cn } from "@/utils/cn";
import { trackEvent } from "@/utils/analytics";

type Estimate = {
  type?: string;
  pages?: string;
  seo?: boolean;
  copy?: boolean;
  scope?: string;
  price?: string;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  business: string;
  currentSite: string;
  goal: string;
};

type FormErrors = Partial<Record<keyof FormState | "contact", string>>;

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  business: "",
  currentSite: "",
  goal: "",
};

export function ContactPage() {
  usePageMeta(
    "Request a Website Quote | Web Design Pampanga",
    "Send your project details and request a website quote from Web Design Pampanga.",
  );

  const [form, setForm] = useState<FormState>(initialState);
  const [estimate, setEstimate] = useState<Estimate | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [sending, setSending] = useState(false);
  const [sendFailed, setSendFailed] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const estimateRaw = sessionStorage.getItem("wdp_quote_estimate");
    const auditUrl = sessionStorage.getItem("wdp_audit_url");

    if (estimateRaw) {
      try {
        setEstimate(JSON.parse(estimateRaw) as Estimate);
      } catch {
        setEstimate(null);
      }
    }

    if (auditUrl) {
      setForm((prev) => ({ ...prev, currentSite: auditUrl }));
    }
  }, []);

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined, contact: undefined }));
  };

  const markStarted = () => {
    if (started) return;
    setStarted(true);
    trackEvent("contact_started", {
      source: estimate ? "hero_estimator" : "contact_page",
      has_estimate: Boolean(estimate),
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    markStarted();

    const next: FormErrors = {};
    if (!form.name.trim()) next.name = "Please add your name.";
    if (!form.business.trim()) next.business = "Please add your business name.";
    if (!form.goal.trim()) next.goal = "Tell me what you want the website to achieve.";

    if (!form.email.trim() && !form.phone.trim()) {
      next.contact = "Add either an email address or WhatsApp / phone number.";
    }

    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
      next.email = "Please check the email address.";
    }

    setErrors(next);
    if (Object.keys(next).length) return;

    setSending(true);
    setSendFailed(false);

    try {
      const response = await fetch("https://formsubmit.co/ajax/erwinvalles20@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New website enquiry — ${form.business}`,
          Name: form.name,
          Email: form.email || "Not provided",
          "WhatsApp / phone": form.phone || "Not provided",
          Business: form.business,
          "Current website": form.currentSite || "Not provided",
          "What the website should achieve": form.goal,
          "Estimated project type": estimate?.type || "Not selected",
          "Estimated pages": estimate?.pages || "Not selected",
          "Likely scope": estimate?.scope || "Not selected",
          "Starting point": estimate?.price || "Not selected",
          "Lead-generation structure": estimate ? (estimate.seo ? "Included" : "Not selected") : "Not selected",
          "Copy support": estimate ? (estimate.copy ? "Needed" : "Client has copy") : "Not selected",
        }),
      });

      if (!response.ok) throw new Error("Form submission failed");

      trackEvent("contact_submitted", {
        source: estimate ? "hero_estimator" : "contact_page",
        project_type: estimate?.type || "not_selected",
        scope: estimate?.scope || "not_selected",
      });
      trackEvent("generate_lead", { form_name: "quote" });
      sessionStorage.removeItem("wdp_quote_estimate");
      sessionStorage.removeItem("wdp_audit_url");
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
        eyebrow="Get a quote"
        title={<>Tell me where the website needs to <span className="text-gold-gradient">take your business.</span></>}
        intro={estimate
          ? "Your estimator choices are already carried over. I only need the details required to review the project and reply with the next step."
          : "Keep it short. Tell me who you are, how to reach you and what you want the website to achieve."}
        crumbs={[{ label: "Contact" }]}
      />

      <Section divider>
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[.78fr_1.22fr] lg:items-start lg:gap-10">
          <div className="rounded-[1.8rem] border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7">
            <Eyebrow>{estimate ? "Your estimate" : "What happens next"}</Eyebrow>

            {estimate ? (
              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-600">Likely scope</p>
                  <p className="mt-1 font-display text-2xl font-bold text-white">{estimate.scope || estimate.type || "Website project"}</p>
                  {estimate.price && <p className="mt-1 text-sm text-gold-300">{estimate.price}</p>}
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-xl border border-white/[0.07] bg-black/10 p-3">
                    <span className="block text-slate-600">Project</span>
                    <span className="mt-1 block font-semibold text-slate-300">{estimate.type || "Website"}</span>
                  </div>
                  <div className="rounded-xl border border-white/[0.07] bg-black/10 p-3">
                    <span className="block text-slate-600">Pages</span>
                    <span className="mt-1 block font-semibold text-slate-300">{estimate.pages ? `${estimate.pages} pages` : "To confirm"}</span>
                  </div>
                  <div className="rounded-xl border border-white/[0.07] bg-black/10 p-3">
                    <span className="block text-slate-600">Lead-gen structure</span>
                    <span className="mt-1 block font-semibold text-slate-300">{estimate.seo ? "Included" : "Not selected"}</span>
                  </div>
                  <div className="rounded-xl border border-white/[0.07] bg-black/10 p-3">
                    <span className="block text-slate-600">Copy support</span>
                    <span className="mt-1 block font-semibold text-slate-300">{estimate.copy ? "Needed" : "I have copy"}</span>
                  </div>
                </div>
                <p className="text-xs leading-relaxed text-slate-500">This is a starting point, not a final quote. I confirm the exact scope after reviewing your requirements.</p>
              </div>
            ) : (
              <div className="mt-5 space-y-5 text-sm leading-relaxed text-slate-400">
                <div><span className="font-semibold text-white">1. I review the project.</span><br />I look at the goal, current website and what needs to be built.</div>
                <div><span className="font-semibold text-white">2. I reply with the next step.</span><br />If I need anything else to price it properly, I will ask only for what matters.</div>
                <div><span className="font-semibold text-white">3. Scope before work starts.</span><br />Pages, functionality, timeline and price are confirmed before the build begins.</div>
              </div>
            )}
          </div>

          <form
            className="rounded-[2rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.045] to-white/[0.012] p-7 sm:p-9"
            onSubmit={handleSubmit}
            onFocusCapture={markStarted}
            noValidate
          >
            <div className="flex items-end justify-between gap-4 border-b border-white/[0.07] pb-5">
              <div>
                <Eyebrow>Project details</Eyebrow>
                <h2 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">Where should I send the next step?</h2>
              </div>
              <span className="hidden text-xs text-slate-600 sm:block">About 1 minute</span>
            </div>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">Your name *</label>
                <input id="name" autoComplete="name" value={form.name} onChange={(event) => update("name", event.target.value)} className={fieldClass(errors.name)} placeholder="Your name" />
                {errors.name && <p className="mt-2 text-xs text-rose-400">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="business" className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">Business name *</label>
                <input id="business" autoComplete="organization" value={form.business} onChange={(event) => update("business", event.target.value)} className={fieldClass(errors.business)} placeholder="Your business" />
                {errors.business && <p className="mt-2 text-xs text-rose-400">{errors.business}</p>}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">Email</label>
                <input id="email" type="email" autoComplete="email" value={form.email} onChange={(event) => update("email", event.target.value)} className={fieldClass(errors.email)} placeholder="you@business.com" />
                {errors.email && <p className="mt-2 text-xs text-rose-400">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">WhatsApp / phone</label>
                <input id="phone" type="tel" autoComplete="tel" value={form.phone} onChange={(event) => update("phone", event.target.value)} className={fieldClass()} placeholder="09XX XXX XXXX" />
              </div>

              {errors.contact && (
                <p className="sm:col-span-2 flex items-center gap-2 text-xs text-rose-400">
                  <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                  {errors.contact}
                </p>
              )}

              <div className="sm:col-span-2">
                <label htmlFor="currentSite" className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">Current website <span className="normal-case tracking-normal text-slate-600">optional</span></label>
                <input id="currentSite" inputMode="url" value={form.currentSite} onChange={(event) => update("currentSite", event.target.value)} className={fieldClass()} placeholder="https://yourwebsite.com" />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="goal" className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">What do you want the website to achieve? *</label>
                <textarea
                  id="goal"
                  rows={5}
                  value={form.goal}
                  onChange={(event) => update("goal", event.target.value)}
                  className={cn(fieldClass(errors.goal), "resize-y")}
                  placeholder="For example: bring in more qualified enquiries, explain our services clearly and make it easier for customers to request a quote."
                />
                {errors.goal && <p className="mt-2 text-xs text-rose-400">{errors.goal}</p>}
              </div>
            </div>

            {sendFailed && (
              <div className="mt-5 flex items-start gap-3 rounded-2xl border border-rose-500/25 bg-rose-500/[0.07] p-4 text-sm text-rose-200">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                The form could not send right now. Please try again in a moment.
              </div>
            )}

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={sending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 px-7 py-4 text-sm font-bold text-ink-950 shadow-[0_8px_36px_-12px_rgba(246,193,74,.7)] transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {sending ? "Sending…" : "Send my project details"}
                {sending ? <Send className="h-4 w-4 animate-pulse" /> : <ArrowRight className="h-4 w-4" />}
              </button>
              <p className="text-xs leading-relaxed text-slate-600">No obligation. I will review the project before recommending the next step.</p>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
}
