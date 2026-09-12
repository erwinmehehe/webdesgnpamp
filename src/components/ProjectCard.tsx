import { CinematicProjectCard } from "@/components/portfolio/CinematicProjectCard";
import { projects, type Project } from "@/data/portfolio";

/**
 * Homepage portfolio card.
 * Reuses the same cinematic website walkthrough interaction as the main
 * portfolio showcase so featured work feels consistent sitewide.
 */
export function ProjectCard({ project }: { project: Project }) {
  const index = Math.max(0, projects.findIndex((item) => item.slug === project.slug));
  return <CinematicProjectCard project={project} index={index} />;
}
