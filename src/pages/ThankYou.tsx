import { useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import { GoldButton, GhostButton, Section } from "@/components/blocks";
import { usePageMeta } from "@/router";
import { trackEvent } from "@/utils/analytics";

export function ThankYouPage() {
  usePageMeta(
    "Thank You | Web Design Pampanga",
    "Your enquiry has been sent to Web Design Pampanga.",
  );

  useEffect(() => {
    const robots = document.querySelector('meta[name="robots"]');
    const previous = robots?.getAttribute("content") || "";
    robots?.setAttribute("content", "noindex,follow");
    trackEvent("generate_lead", { form_name: "quote" });
    return () => {
      if (previous) robots?.setAttribute("content", previous);
    };
  }, []);

  return (
    <Section className="min-h-[70vh] pt-36 sm:pt-40">
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.045] to-white/[0.012] p-8 text-center sm:p-12">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/15">
          <CheckCircle2 className="h-8 w-8 text-emerald-400" aria-hidden="true" />
        </span>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-gold-400">Enquiry sent</p>
        <h1 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">Thanks. We have your project details.</h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400">We will review the enquiry and reply with the questions that affect scope, timeline and price. Most enquiries receive a response within a few business hours.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <GoldButton to="/">Back to Web Design Pampanga</GoldButton>
          <GhostButton to="/services/">View services</GhostButton>
        </div>
      </div>
    </Section>
  );
}
