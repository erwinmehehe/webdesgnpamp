import { motion } from "framer-motion";
import { ExternalLink, MapPin } from "lucide-react";
import { staggerItem } from "@/components/Reveal";
import { SiteFrame, SitePreview } from "@/components/portfolio/SitePreview";
import type { Project } from "@/data/portfolio";

/**
 * Simple portfolio card.
 *
 * Large photographic website preview (the full-page design), business name,
 * industry, location, short description, and a View Website button that
 * opens the design full-width in a new tab.
 *
 * Static grid item — no carousel, no numbered navigation, no hover-scroll.
 */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={staggerItem}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0d101b] transition-colors duration-300 hover:border-white/20"
    >
      {/* Website preview */}
      <div className="relative border-b border-white/[0.08] bg-[#0b0e17]">
        {project.image ? (
          <div className="aspect-[16/10] w-full overflow-hidden">
            <img
              src={project.image}
              alt={`${project.name} — ${project.industry} website design`}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        ) : (
          <SiteFrame>
            <SitePreview slug={project.slug} />
          </SiteFrame>
        )}
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <span className="font-medium text-gold-400">{project.industry}</span>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3 w-3" aria-hidden="true" />
            {project.location}
          </span>
        </div>

        <h3 className="mt-2 font-display text-lg font-semibold tracking-[-0.01em] text-white">
          {project.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{project.summary}</p>

        <div className="mt-6 flex-1" />

        <a
          href={`#/portfolio/${project.slug}/`}
          className="inline-flex items-center justify-center gap-2 self-start rounded-lg border border-white/[0.14] px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors duration-200 hover:border-gold-400/40 hover:text-gold-300"
        >
          View Website
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  );
}
