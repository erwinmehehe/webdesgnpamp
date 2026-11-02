import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Monitor, MousePointerClick, Smartphone } from "lucide-react";
import { Link } from "@/router";
import type { Project } from "@/data/portfolio";
import type { DemoSlug } from "@/data/portfolioShowcase";
import { showcaseStories } from "@/data/portfolioShowcase";
import { trackEvent } from "@/utils/analytics";

export function FlagshipCaseStudy({ project, slug }: { project: Project; slug: DemoSlug }) {
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  const story = showcaseStories[slug];
  const demoUrl = "/portfolio/" + slug + "/demo/";
  const openContact = () => {
    sessionStorage.setItem("wdp_portfolio_interest", project.name);
    trackEvent("portfolio_case_study_contact_clicked", { project_slug: slug });
  };

  return (
    <article className="min-h-screen bg-ink-950 text-slate-200">
      <div className="sticky top-[72px] z-30 border-b border-white/10 bg-[#080c16]/95 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[58px] max-w-7xl items-center justify-between gap-3 px-5 sm:px-8">
          <Link to="/portfolio/" className="inline-flex min-h-11 items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> <span className="hidden sm:inline">Back to portfolio</span><span className="sm:hidden">Portfolio</span>
          </Link>
          <span className="hidden text-[10px] font-semibold uppercase tracking-[0.15em] text-gold-300 lg:block">
            {project.industry} · Interactive website concept
          </span>
          <Link to="/contact/" onClick={openContact} className="inline-flex min-h-10 items-center gap-2 rounded-full bg-gold-400 px-4 py-2 text-xs font-bold text-ink-950 hover:bg-gold-300">
            Discuss a similar website <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      <section className="relative overflow-hidden border-b border-white/10 px-5 pb-20 pt-16 sm:px-8 lg:pb-28 lg:pt-24">
        <div className="pointer-events-none absolute -left-24 top-0 h-96 w-96 rounded-full bg-gold-400/[0.06] blur-[110px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-gold-300">Portfolio concept · Original web design study</p>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[4.9rem]">{project.name}</h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300">{project.summary}</p>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-500">
              The work shown here is a designed and coded demonstration, not a launched client project. The interactive prototype is available to inspect.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to={demoUrl} onClick={() => trackEvent("portfolio_demo_opened", { project_slug: slug, source: "case_study" })}
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-gold-400 px-6 py-3 text-sm font-bold text-ink-950 hover:bg-gold-300">
                <MousePointerClick className="h-4 w-4" /> Explore working demo
              </Link>
              <a href="#responsive-demo" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-white/50">
                Preview desktop and mobile
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
              <div><p className="text-[10px] uppercase tracking-wider text-gold-300">Industry</p><p className="mt-2 text-sm font-semibold text-white">{project.industry}</p></div>
              <div><p className="text-[10px] uppercase tracking-wider text-gold-300">Evidence type</p><p className="mt-2 text-sm font-semibold text-white">Interactive design concept</p></div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#0d1119] p-3 shadow-[0_35px_120px_-55px_rgba(0,0,0,.95)] sm:p-5">
            <div className="mb-3 flex items-center justify-between border-b border-white/10 px-2 pb-3">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" /><span className="h-2.5 w-2.5 rounded-full bg-white/10" /><span className="h-2.5 w-2.5 rounded-full bg-white/[0.06]" />
              </div>
              <span className="text-[10px] font-medium text-slate-400">Original project visuals</span>
            </div>
            {project.image ? (
              <img src={project.image} alt={project.name + " full-page website design preview"} className="aspect-[4/3] w-full rounded-xl object-cover object-top" />
            ) : (
              <div className="grid aspect-[4/3] place-items-center rounded-xl bg-white/5 text-slate-400">Explore the interactive sample</div>
            )}
            <div className="mt-4 flex items-center justify-between gap-3 px-1 text-xs text-slate-400">
              <span>Concept presentation</span>
              <span className="text-gold-300">Designed, not commissioned</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-300">01 / THE DESIGN PROBLEM</p>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.05] text-white sm:text-4xl">Solve a real UX problem, not just fill a template.</h2>
            <p className="mt-6 leading-relaxed text-slate-400">{story.challenge}</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Decisions behind the interface</p>
            <div className="mt-5 grid gap-4">
              {story.designDecisions.map((decision, index) => (
                <div key={decision} className="flex items-start gap-5 rounded-2xl border border-white/10 bg-white/[0.025] p-6">
                  <span className="font-mono text-sm font-semibold text-gold-300">0{index + 1}</span>
                  <p className="text-sm leading-relaxed text-slate-200 sm:text-base">{decision}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="responsive-demo" className="scroll-mt-24 border-b border-white/10 px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-300">02 / THE ACTUAL INTERACTIVE WEBSITE</p>
          <div className="mt-5 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight text-white sm:text-5xl">Try the real responsive experience.</h2>
              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base">
                These frames load the same functioning demo at different viewport widths. This is not a desktop screenshot squeezed into a phone shape.
                Scroll and interact inside the preview or open the site at full size.
              </p>
            </div>
            <Link to={demoUrl} onClick={() => trackEvent("portfolio_demo_opened", { project_slug: slug, source: "responsive_frame" })}
              className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full border border-gold-400/50 px-6 py-3 text-sm font-bold text-gold-300 hover:bg-gold-400/10">
              Open demo full screen <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div className="flex gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1" role="group" aria-label="Responsive demo viewport">
              <button type="button" aria-pressed={device === "desktop"} onClick={() => { setDevice("desktop"); trackEvent("portfolio_device_selected", { project_slug: slug, device: "desktop" }); }}
                className={"inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-sm font-semibold " + (device === "desktop" ? "bg-white text-ink-950" : "text-slate-300 hover:text-white")}>
                <Monitor className="h-4 w-4" /> Desktop
              </button>
              <button type="button" aria-pressed={device === "mobile"} onClick={() => { setDevice("mobile"); trackEvent("portfolio_device_selected", { project_slug: slug, device: "mobile" }); }}
                className={"inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-sm font-semibold " + (device === "mobile" ? "bg-white text-ink-950" : "text-slate-300 hover:text-white")}>
                <Smartphone className="h-4 w-4" /> Mobile
              </button>
            </div>
            <p className="text-xs text-slate-500">Real responsive iframe · Demo transactions disabled</p>
          </div>

          <div className="mt-7 flex justify-center">
            <div className={"w-full overflow-hidden rounded-[1.6rem] border border-white/15 bg-[#090c13] p-2 shadow-[0_30px_110px_-40px_rgba(0,0,0,.85)] transition-[max-width] duration-300 sm:p-4 " +
              (device === "mobile" ? "max-w-[390px]" : "max-w-[1140px]")}>
              <div className="flex items-center justify-between border-b border-white/10 px-3 pb-3">
                <div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-white/20" /><span className="h-2 w-2 rounded-full bg-white/10" /><span className="h-2 w-2 rounded-full bg-white/[0.06]" /></div>
                <span className="text-[10px] text-slate-400">{device === "mobile" ? "Mobile viewport" : "Desktop viewport"}</span>
              </div>
              <iframe
                key={slug + "-" + device}
                src={demoUrl}
                title={project.name + " functioning " + device + " viewport preview"}
                loading="lazy"
                className="h-[630px] w-full rounded-b-lg border-0 bg-white sm:h-[690px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-300">03 / FUNCTIONAL PROOF</p>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">Work you can test for yourself.</h2>
            <p className="mt-6 leading-relaxed text-slate-400">{story.mobile}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {story.demonstrated.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" />
                <p className="text-sm font-medium leading-relaxed text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl rounded-[1.5rem] border border-white/10 bg-[#111726] p-7 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-300">Example customer journey</p>
          <p className="mt-4 text-xl font-semibold leading-snug text-white sm:text-2xl">{story.conversionPath}</p>
          <p className="mt-5 max-w-4xl text-sm leading-relaxed text-slate-400">{story.limitations}</p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-300">04 / YOUR PROJECT</p>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">Want a working website experience for your business?</h2>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-slate-400">This design study demonstrates the approach. A real project starts with your audience, requirements, content and business constraints.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link to="/contact/" onClick={openContact} className="inline-flex min-h-12 items-center gap-2 rounded-full bg-gold-400 px-8 py-3 text-sm font-bold text-ink-950 hover:bg-gold-300">
              Discuss a similar website <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/portfolio/" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white hover:border-white/50">
              Explore all ten designs
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
