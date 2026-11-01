import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { GoldButton, GhostButton, Section } from "@/components/blocks";
import { usePageMeta } from "@/router";
import { trackEvent } from "@/utils/analytics";

export function ThankYouPage() {
  const [confirmed, setConfirmed] = useState(false);
  usePageMeta(
    "Thank You | Web Design Pampanga",
    "Your website enquiry has been sent to Web Design Pampanga.",
  );

  useEffect(() => {
    const robots = document.querySelector('meta[name="robots"]');
    const previous = robots?.getAttribute("content") || "";
    robots?.setAttribute("content", "noindex,follow");

    if (sessionStorage.getItem("wdp_lead_submitted") === "1") {
      setConfirmed(true);
      trackEvent("generate_lead", { form_name: "quote" });
      sessionStorage.removeItem("wdp_lead_submitted");
    }

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
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-gold-400">{confirmed ? "Request accepted by form provider" : "Submission not confirmed"}</p>
        <h1 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">{confirmed ? "Your project details were submitted." : "We can't confirm an inquiry from this visit."}</h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400">
          {confirmed
            ? "The form provider accepted your request. The studio can now review the details and contact you about next steps."
            : "This page can also be opened directly. If you submitted an inquiry, please contact the studio to verify receipt; otherwise return to the form."}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <GoldButton to="/">Back to homepage</GoldButton>
          <GhostButton to="/portfolio/">View website samples</GhostButton>
        </div>
      </div>
    </Section>
  );
}