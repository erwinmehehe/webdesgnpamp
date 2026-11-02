import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { Link, usePageMeta } from "@/router";
import { projects } from "@/data/portfolio";
import { isDemoSlug } from "@/data/portfolioShowcase";
import { SizzleHouseDemo } from "@/components/portfolio/demos/SizzleHouseDemo";
import { CoreAxisDemo } from "@/components/portfolio/demos/CoreAxisDemo";
import { IronpeakDemo } from "@/components/portfolio/demos/IronpeakDemo";
import { trackEvent } from "@/utils/analytics";
import { NotFoundPage } from "@/pages/NotFound";

export function ProjectDemoPage({ slug }: { slug: string }) {
  const project = projects.find((entry) => entry.slug === slug);
  usePageMeta(
    project ? project.name + " — Interactive Website Concept | Web Design Pampanga" : "Demo not found | Web Design Pampanga",
    project ? "Explore an interactive, fictional " + project.industry.toLowerCase() + " website design by Web Design Pampanga. No business enquiries are sent from the demo." : undefined,
  );

  useEffect(() => {
    // Demos are fictional, so do not allow them to be indexed as real companies.
    let robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const previouslyPresent = Boolean(robots);
    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.appendChild(robots);
    }
    const previous = robots.content;
    robots.content = "noindex,follow";
    return () => {
      if (!robots) return;
      if (previouslyPresent) robots.content = previous;
      else robots.remove();
    };
  }, []);

  if (!project || !isDemoSlug(slug)) return <NotFoundPage />;

  const onProjectContact = () => {
    sessionStorage.setItem("wdp_portfolio_interest", project.name);
    trackEvent("portfolio_demo_contact_clicked", { project_slug: slug });
  };

  return (
    <div className="min-h-screen bg-[#06080d] text-white">
      <a href="#demo-site" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-5 focus:py-3 focus:text-slate-950">
        Skip to interactive demo
      </a>

      <div className="relative z-50 border-b border-white/10 bg-[#070c17]">
        <div className="mx-auto flex min-h-[56px] max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2.5 sm:px-7">
          <a href={"/portfolio/" + slug + "/"} target="_top" rel="noopener" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-200 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Back to project case study</span>
            <span className="sm:hidden">Case study</span>
          </a>
          <div className="flex items-center gap-2 text-center">
            <span className="h-2 w-2 rounded-full bg-sky-400" aria-hidden="true" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.13em] text-slate-300 sm:text-xs">
              Interactive concept · No real transactions
            </span>
          </div>
          <a href="/contact/" target="_top" rel="noopener" onClick={onProjectContact}
            className="inline-flex min-h-10 items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#0a1425] hover:bg-sky-100">
            Discuss a similar site <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      <div id="demo-site">
        {slug === "sizzle-house" && <SizzleHouseDemo />}
        {slug === "coreaxis-bpo" && <CoreAxisDemo />}
        {slug === "ironpeak-builders" && <IronpeakDemo />}
      </div>

      <footer className="border-t border-white/10 bg-[#070c17] px-5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold text-white">Website design study by Web Design Pampanga</p>
            <p className="mt-2 max-w-xl text-xs leading-relaxed text-slate-400">
              This is a fictional interactive sample, not a client project. Images are illustrative; any prices, project types or roles are examples.
              All preview requests remain in your browser.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <Link to={"/portfolio/" + slug + "/"} className="text-sky-200 hover:text-white">Case study</Link>
            <a href="https://github.com/erwinmehehe" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white">
              <Github className="h-4 w-4" /> Developer GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
