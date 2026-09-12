import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";
import { Link } from "@/router";
import { enableAnalytics } from "@/utils/analytics";

const storageKey = "wdp-analytics-consent";

type Consent = "granted" | "denied" | null;

export function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey) as Consent;
    setConsent(saved === "granted" || saved === "denied" ? saved : null);
    setReady(true);
  }, []);

  if (!ready || consent) return null;

  const choose = (value: Exclude<Consent, null>) => {
    window.localStorage.setItem(storageKey, value);
    setConsent(value);
    if (value === "granted") enableAnalytics();
  };

  return (
    <aside className="fixed inset-x-4 bottom-4 z-[80] mx-auto max-w-2xl rounded-3xl border border-white/10 bg-ink-900/95 p-5 shadow-[0_28px_90px_-24px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-6" aria-label="Analytics consent">
      <div className="flex items-start gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gold-400/12">
          <ShieldCheck className="h-5 w-5 text-gold-400" aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="font-display text-base font-semibold text-white">Help us improve the website</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            With your permission, we use Google Analytics and Microsoft Clarity to understand visits, clicks and form journeys. We do not need analytics cookies for the site to work.
          </p>
          <p className="mt-2 text-xs text-slate-500">Read our <Link to="/privacy-policy/" className="text-gold-400 hover:text-gold-300">Privacy Policy</Link>.</p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <button type="button" onClick={() => choose("granted")} className="rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-5 py-2.5 text-sm font-semibold text-ink-950">Allow analytics</button>
            <button type="button" onClick={() => choose("denied")} className="rounded-full border border-white/12 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white">Only necessary</button>
          </div>
        </div>
      </div>
    </aside>
  );
}
