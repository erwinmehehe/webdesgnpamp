import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, MessageCircle, Search, ShoppingCart, Smartphone } from "lucide-react";
import { navigate } from "@/router";
import { site, trustBar } from "@/data/site";

const easeOut = [0.21, 0.65, 0.15, 1] as const;

const projectTypes = [
  { id: "starter", label: "Starter website", detail: "Focused small-business site", icon: Smartphone },
  { id: "business", label: "Business website", detail: "More pages and stronger enquiry paths", icon: FileText },
  { id: "ecommerce", label: "Ecommerce", detail: "Products, payments or catalogue", icon: ShoppingCart },
  { id: "custom", label: "Custom build", detail: "Booking, recruitment or integrations", icon: Search },
] as const;

type ProjectType = typeof projectTypes[number]["id"];

export function Hero() {
  const [type, setType] = useState<ProjectType>("business");
  const [pages, setPages] = useState("6-10");
  const [leadStructure, setLeadStructure] = useState(true);
  const [copy, setCopy] = useState(false);

  const scope = useMemo(() => {
    if (type === "starter" && pages === "1-5") return { name: "Starter Website", price: "Starting at ₱30,000" };
    if ((type === "starter" || type === "business") && pages !== "11+") return { name: "Business Website", price: "Starting at ₱50,000" };
    return { name: type === "ecommerce" ? "Ecommerce / Custom Website" : "Custom Website", price: "Needs a project scope" };
  }, [type, pages]);

  const startBrief = () => {
    const selected = projectTypes.find((item) => item.id === type);
    sessionStorage.setItem("wdp_quote_estimate", JSON.stringify({
      type: selected?.label ?? "Website",
      pages,
      seo: leadStructure,
      copy,
      scope: scope.name,
      price: scope.price,
    }));
    navigate("/contact/");
  };

  return (
    <section id="top" className="relative overflow-hidden pb-18 pt-32 sm:pt-36 lg:pb-24 lg:pt-40">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="bg-grid bg-grid-fade absolute inset-0" />
        <div className="animate-aurora absolute -top-40 left-1/2 h-[560px] w-[880px] -translate-x-1/2 rounded-full bg-gold-500/[0.13] blur-[130px]" />
        <div className="animate-aurora absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-violet-600/[0.1] blur-[120px] [animation-delay:-6s]" />
        <div className="absolute -right-40 top-24 h-[380px] w-[380px] rounded-full bg-orange-600/[0.09] blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-center lg:gap-12 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.78, ease: easeOut }}
          >
            <span className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-medium text-slate-300 sm:text-[13px]">
              <span className="h-2 w-2 rounded-full bg-gold-400" aria-hidden="true" />
              Websites built to win more enquiries
            </span>

            <h1 className="mt-7 max-w-2xl font-display text-[2.55rem] font-bold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-[3.65rem] xl:text-[4rem]">
              Turn more website visitors into <span className="text-gold-gradient">calls, messages and enquiries.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              I build clear, credible websites that make it easier for the right customer to understand your offer, trust your business and contact you.
            </p>

            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-400">
              {["Clear offer", "Strong calls to action", "Fast on mobile"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-400/80" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-[#04301a] transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
              >
                <MessageCircle className="h-[17px] w-[17px]" aria-hidden="true" />
                WhatsApp me
              </a>
              <span className="text-sm text-slate-500">Or use the quick estimator.</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.82, delay: 0.08, ease: easeOut }}
            className="rounded-[2rem] border border-white/[0.09] bg-[#0d0f15]/90 p-5 shadow-[0_38px_120px_-48px_rgba(0,0,0,.9)] backdrop-blur-xl sm:p-7"
          >
            <div className="flex flex-col gap-2 border-b border-white/[0.07] pb-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold-400">Quick project estimator</p>
                <h2 className="mt-2 font-display text-2xl font-bold text-white">Get a realistic starting point.</h2>
              </div>
              <p className="text-xs text-slate-500">About 20 seconds</p>
            </div>

            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">1. What are you building?</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {projectTypes.map((item) => {
                const active = type === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setType(item.id)}
                    aria-pressed={active}
                    className={`flex items-start gap-3 rounded-2xl border p-3.5 text-left transition-all ${active ? "border-gold-400/45 bg-gold-400/[0.09]" : "border-white/[0.08] bg-white/[0.02] hover:border-white/15"}`}
                  >
                    <item.icon className={`mt-0.5 h-4 w-4 shrink-0 ${active ? "text-gold-400" : "text-slate-500"}`} />
                    <span>
                      <span className="block text-sm font-semibold text-white">{item.label}</span>
                      <span className="mt-1 block text-[11px] leading-relaxed text-slate-500">{item.detail}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">2. Rough page count</p>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {["1-5", "6-10", "11+"].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setPages(value)}
                  aria-pressed={pages === value}
                  className={`rounded-xl border px-3 py-2.5 text-xs font-semibold transition-all ${pages === value ? "border-gold-400/45 bg-gold-400/[0.09] text-gold-200" : "border-white/[0.08] text-slate-400 hover:text-white"}`}
                >
                  {value} pages
                </button>
              ))}
            </div>

            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => setLeadStructure((value) => !value)}
                aria-pressed={leadStructure}
                className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left text-xs font-semibold ${leadStructure ? "border-gold-400/30 bg-gold-400/[0.06] text-white" : "border-white/[0.08] text-slate-400"}`}
              >
                <span>Lead-gen structure</span><span>{leadStructure ? "Included" : "Not needed"}</span>
              </button>
              <button
                type="button"
                onClick={() => setCopy((value) => !value)}
                aria-pressed={copy}
                className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left text-xs font-semibold ${copy ? "border-gold-400/30 bg-gold-400/[0.06] text-white" : "border-white/[0.08] text-slate-400"}`}
              >
                <span>Copy support</span><span>{copy ? "Needed" : "I have copy"}</span>
              </button>
            </div>

            <div className="mt-6 rounded-2xl border border-gold-400/20 bg-gold-400/[0.055] p-5 sm:flex sm:items-center sm:justify-between sm:gap-5">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold-400">Likely scope</p>
                <p className="mt-2 font-display text-xl font-bold text-white">{scope.name}</p>
                <p className="mt-1 text-sm text-slate-400">{scope.price}</p>
              </div>
              <button
                type="button"
                onClick={startBrief}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 px-5 py-3 text-sm font-bold text-ink-950 shadow-[0_8px_32px_-12px_rgba(246,193,74,.75)] transition-all hover:brightness-110 sm:mt-0 sm:w-auto"
              >
                Continue to brief <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-3 text-[11px] leading-relaxed text-slate-600">No obligation. Final pricing is confirmed after the exact pages, content and functionality are reviewed.</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.22, ease: easeOut }}
          className="mx-auto mt-10 max-w-4xl"
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
      </div>
    </section>
  );
}
