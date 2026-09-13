import { useMemo, useState } from "react";
import { Activity, ArrowRight, ArrowUpRight, Check, FileText, Gauge, Search, ShoppingCart, Smartphone } from "lucide-react";
import { Eyebrow, Section } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { navigate } from "@/router";

type AuditIssue = { title: string; value?: string; score: number };
type AuditResult = {
  performance: number;
  accessibility: number;
  seo: number;
  bestPractices: number;
  lcp?: string;
  cls?: string;
  issues: AuditIssue[];
};

function normaliseUrl(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

function scoreTone(score: number) {
  if (score >= 90) return "text-emerald-300";
  if (score >= 70) return "text-amber-300";
  return "text-rose-300";
}

export function WebsiteRoastSection() {
  const [domain, setDomain] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<AuditResult | null>(null);
  const cleanUrl = useMemo(() => normaliseUrl(domain), [domain]);

  const runAudit = async () => {
    if (!cleanUrl) { setError("Enter a website URL first."); return; }
    try { new URL(cleanUrl); } catch { setError("That URL does not look valid."); return; }
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const endpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(cleanUrl)}&strategy=mobile&category=performance&category=accessibility&category=seo&category=best-practices`;
      const response = await fetch(endpoint);
      if (!response.ok) throw new Error("Audit unavailable");
      const data = await response.json();
      const categories = data?.lighthouseResult?.categories ?? {};
      const audits = data?.lighthouseResult?.audits ?? {};
      const issues = Object.values(audits)
        .filter((audit: any) => typeof audit?.score === "number" && audit.score < 0.9 && audit.scoreDisplayMode !== "notApplicable" && audit.title)
        .sort((a: any, b: any) => (a.score ?? 1) - (b.score ?? 1))
        .slice(0, 5)
        .map((audit: any) => ({ title: audit.title, value: audit.displayValue, score: Math.round((audit.score ?? 0) * 100) }));

      setResult({
        performance: Math.round((categories.performance?.score ?? 0) * 100),
        accessibility: Math.round((categories.accessibility?.score ?? 0) * 100),
        seo: Math.round((categories.seo?.score ?? 0) * 100),
        bestPractices: Math.round((categories["best-practices"]?.score ?? 0) * 100),
        lcp: audits["largest-contentful-paint"]?.displayValue,
        cls: audits["cumulative-layout-shift"]?.displayValue,
        issues,
      });
    } catch {
      setError("Google's live audit is unavailable right now. Try again in a moment.");
    } finally {
      setLoading(false);
    }
  };

  const continueToBrief = () => {
    if (typeof window !== "undefined" && cleanUrl) {
      sessionStorage.setItem("wdp_audit_url", cleanUrl);
    }
    navigate("/contact/");
  };

  return (
    <Section id="website-audit" divider>
      <div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-start lg:gap-16">
        <div>
          <Reveal><Eyebrow>Roast my website</Eyebrow></Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl">
              Put your current site under a <span className="text-gold-gradient">real test.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-400">
              Enter a public URL. I pull Google's mobile Lighthouse data, then surface the weakest checks instead of hiding everything behind one score.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-7 grid grid-cols-2 gap-3 text-xs text-slate-400">
              {["Performance", "Accessibility", "SEO", "Best practices"].map((item) => (
                <span key={item} className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-gold-400" />{item}</span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div className="rounded-[2rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.045] to-white/[0.015] p-6 sm:p-8">
            <label htmlFor="roast-domain" className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Your website</label>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <input
                id="roast-domain"
                value={domain}
                onChange={(event) => setDomain(event.target.value)}
                onKeyDown={(event) => { if (event.key === "Enter") runAudit(); }}
                placeholder="yourwebsite.com"
                inputMode="url"
                className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:border-gold-400/50 focus:outline-none"
              />
              <button type="button" onClick={runAudit} disabled={loading} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gold-400 px-5 py-3.5 text-sm font-bold text-ink-950 transition-transform hover:-translate-y-0.5 disabled:opacity-60">
                {loading ? <Activity className="h-4 w-4 animate-spin" /> : <Gauge className="h-4 w-4" />}
                {loading ? "Testing…" : "Roast my website"}
              </button>
            </div>

            {error && <p className="mt-3 text-sm text-amber-300">{error}</p>}

            {result && (
              <>
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    ["Performance", result.performance],
                    ["Accessibility", result.accessibility],
                    ["SEO", result.seo],
                    ["Best practices", result.bestPractices],
                  ].map(([label, score]) => (
                    <div key={String(label)} className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 text-center">
                      <p className={`font-display text-2xl font-bold ${scoreTone(Number(score))}`}>{score}</p>
                      <p className="mt-1 text-[9px] uppercase tracking-[0.12em] text-slate-500">{label}</p>
                    </div>
                  ))}
                </div>

                {(result.lcp || result.cls) && (
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-400">
                    {result.lcp && <span className="rounded-full border border-white/10 px-3 py-2">LCP {result.lcp}</span>}
                    {result.cls && <span className="rounded-full border border-white/10 px-3 py-2">CLS {result.cls}</span>}
                  </div>
                )}

                <div className="mt-6 border-t border-white/[0.07] pt-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold-400">What I would inspect first</p>
                  {result.issues.length ? (
                    <ol className="mt-3 space-y-2">
                      {result.issues.map((issue, index) => (
                        <li key={issue.title} className="flex items-start gap-3 rounded-xl bg-white/[0.025] px-4 py-3">
                          <span className="font-mono text-[10px] text-slate-600">0{index + 1}</span>
                          <span className="min-w-0"><span className="block text-sm font-semibold text-slate-200">{issue.title}</span>{issue.value && <span className="mt-0.5 block text-xs text-slate-500">{issue.value}</span>}</span>
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <p className="mt-3 text-sm text-slate-400">No major Lighthouse failures surfaced in this run.</p>
                  )}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button type="button" onClick={continueToBrief} className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-5 py-3 text-sm font-bold text-ink-950">
                    Ask me to review it <ArrowRight className="h-4 w-4" />
                  </button>
                  <a href={`https://pagespeed.web.dev/analysis?url=${encodeURIComponent(cleanUrl)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-slate-300 hover:border-white/20 hover:text-white">
                    Full Google report <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

const projectTypes = [
  { id: "starter", label: "Starter website", detail: "Focused small-business site", icon: Smartphone },
  { id: "business", label: "Business website", detail: "More pages and stronger enquiry paths", icon: FileText },
  { id: "ecommerce", label: "Ecommerce", detail: "Products, payments or catalogue", icon: ShoppingCart },
  { id: "custom", label: "Custom build", detail: "Booking, recruitment or integrations", icon: Search },
] as const;

type ProjectType = typeof projectTypes[number]["id"];

export function QuoteEstimatorSection() {
  const [type, setType] = useState<ProjectType>("business");
  const [pages, setPages] = useState("6-10");
  const [seo, setSeo] = useState(true);
  const [copy, setCopy] = useState(false);

  const scope = useMemo(() => {
    if (type === "starter" && pages === "1-5") return { name: "Starter Website", price: "Starting at ₱30,000", custom: false };
    if ((type === "starter" || type === "business") && pages !== "11+") return { name: "Business Website", price: "Starting at ₱50,000", custom: false };
    return { name: type === "ecommerce" ? "Ecommerce / Custom Website" : "Custom Website", price: "Needs a project scope", custom: true };
  }, [type, pages]);

  const startBrief = () => {
    const selected = projectTypes.find((item) => item.id === type);
    const payload = {
      type: selected?.label ?? "Website",
      pages,
      seo,
      copy,
      scope: scope.name,
      price: scope.price,
    };
    sessionStorage.setItem("wdp_quote_estimate", JSON.stringify(payload));
    navigate("/contact/");
  };

  return (
    <Section id="quote-estimator" ambient divider>
      <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start lg:gap-16">
        <div>
          <Reveal><Eyebrow>Project scope estimator</Eyebrow></Reveal>
          <Reveal delay={0.08}><h2 className="mt-5 font-display text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl">Get a realistic starting point <span className="text-gold-gradient">before you enquire.</span></h2></Reveal>
          <Reveal delay={0.14}><p className="mt-5 max-w-lg text-base leading-relaxed text-slate-400">Choose the type of website, rough page count and the support you need. I will carry those choices into the project brief so you do not have to repeat yourself.</p></Reveal>
        </div>

        <Reveal delay={0.08}>
          <div className="rounded-[2rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.045] to-white/[0.015] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">1. What are you building?</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {projectTypes.map((item) => {
                const active = type === item.id;
                return (
                  <button key={item.id} type="button" onClick={() => setType(item.id)} aria-pressed={active} className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition-all ${active ? "border-gold-400/40 bg-gold-400/[0.08]" : "border-white/[0.08] bg-white/[0.02] hover:border-white/15"}`}>
                    <item.icon className={`mt-0.5 h-4 w-4 ${active ? "text-gold-400" : "text-slate-500"}`} />
                    <span><span className="block text-sm font-semibold text-white">{item.label}</span><span className="mt-1 block text-xs leading-relaxed text-slate-500">{item.detail}</span></span>
                  </button>
                );
              })}
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">2. Rough page count</p>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {["1-5", "6-10", "11+"].map((value) => <button key={value} type="button" onClick={() => setPages(value)} aria-pressed={pages === value} className={`rounded-xl border px-3 py-3 text-xs font-semibold transition-all ${pages === value ? "border-gold-400/40 bg-gold-400/[0.08] text-gold-200" : "border-white/[0.08] text-slate-400 hover:text-white"}`}>{value} pages</button>)}
            </div>

            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              <button type="button" onClick={() => setSeo((value) => !value)} aria-pressed={seo} className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left text-xs font-semibold ${seo ? "border-gold-400/30 bg-gold-400/[0.06] text-white" : "border-white/[0.08] text-slate-400"}`}><span>Lead-generation structure</span><span>{seo ? "Included" : "Not needed"}</span></button>
              <button type="button" onClick={() => setCopy((value) => !value)} aria-pressed={copy} className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left text-xs font-semibold ${copy ? "border-gold-400/30 bg-gold-400/[0.06] text-white" : "border-white/[0.08] text-slate-400"}`}><span>Copy support</span><span>{copy ? "Needed" : "I have copy"}</span></button>
            </div>

            <div className="mt-7 rounded-2xl border border-gold-400/20 bg-gold-400/[0.055] p-5 sm:flex sm:items-end sm:justify-between sm:gap-5">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold-400">Likely scope</p>
                <p className="mt-2 font-display text-xl font-bold text-white">{scope.name}</p>
                <p className="mt-1 text-sm text-slate-400">{scope.price}</p>
              </div>
              <button type="button" onClick={startBrief} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-400 px-5 py-3 text-sm font-bold text-ink-950 sm:mt-0 sm:w-auto">
                Continue with this scope <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-3 text-[11px] leading-relaxed text-slate-600">The final price is confirmed only after page count, content, functionality and integrations are reviewed.</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
