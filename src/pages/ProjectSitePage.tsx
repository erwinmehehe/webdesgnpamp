import { ArrowLeft } from "lucide-react";
import { SiteEffects } from "@/components/portfolio/SiteEffects";
import { SiteFrame, SitePreview } from "@/components/portfolio/SitePreview";
import { Link, usePageMeta } from "@/router";
import { projects } from "@/data/portfolio";
import { NotFoundPage } from "@/pages/NotFound";

/**
 * Renders a single portfolio website design at full width.
 * This is the website itself — no case-study copy, no feature lists,
 * no carousel chrome. Reached only from "View Website".
 */
export function ProjectSitePage({ slug }: { slug: string }) {
  const project = projects.find((p) => p.slug === slug);

  usePageMeta(
    project ? `${project.name} | Web Design Pampanga` : "Not found | Web Design Pampanga",
    project?.summary,
  );

  if (!project) return <NotFoundPage />;

  return (
    <div className="min-h-screen bg-ink-950">
      <div className="sticky top-0 z-20 border-b border-white/[0.08] bg-ink-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3 sm:px-8">
          <Link
            to="/portfolio/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-gold-300"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to portfolio
          </Link>
          <div className="text-right">
            <div className="font-display text-sm font-semibold text-white">{project.name}</div>
            <div className="text-[11px] text-slate-500">
              {project.industry} · {project.location}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-3 py-6 sm:px-6">
        <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-[0_28px_100px_-48px_rgba(0,0,0,.9)]">
          <SiteFrame>
            <SitePreview slug={project.slug} />
          </SiteFrame>
          <SiteEffects slug={project.slug} active />
        </div>
        <p className="mt-4 text-center text-xs text-slate-600">
          Concept design · {project.industry}. Built to demonstrate visual direction and interaction design.
        </p>
      </div>
    </div>
  );
}
