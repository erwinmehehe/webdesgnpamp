import { useEffect } from "react";
import { CTABand, PageHero, Section } from "@/components/blocks";
import { Link, usePageMeta } from "@/router";
import { caseStudies } from "@/data/caseStudies";

export function CaseStudiesPage() {
  usePageMeta(
    "Web Design Case Studies | Web Design Pampanga",
    "Verified Web Design Pampanga case studies with real client work, project scope and supportable outcomes.",
  );

  useEffect(() => {
    if (caseStudies.length) return;
    const robots = document.querySelector('meta[name="robots"]');
    const previous = robots?.getAttribute("content") || "";
    robots?.setAttribute("content", "noindex,follow");
    return () => { if (previous) robots?.setAttribute("content", previous); };
  }, []);

  return (
    <>
      <PageHero eyebrow="Case studies" title={<>Real work, documented with <span className="text-gold-gradient">real context.</span></>} intro="Case studies are published only when the client work, screenshots and outcomes can be represented accurately and with permission." crumbs={[{ label: "Case Studies" }]} />
      <Section divider>
        {caseStudies.length ? (
          <div className="grid gap-6 lg:grid-cols-2">
            {caseStudies.map((item) => (
              <article key={item.slug} className="rounded-3xl border border-white/[0.07] bg-white/[0.03] p-7">
                <p className="text-xs font-medium uppercase tracking-wider text-gold-400">{item.industry} · {item.location}</p>
                <h2 className="mt-4 font-display text-2xl font-semibold text-white">{item.client}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.summary}</p>
                <Link to={`/case-studies/${item.slug}/`} className="mt-5 inline-flex text-sm font-semibold text-gold-400">Read case study →</Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/[0.08] bg-white/[0.03] p-8 text-center sm:p-10">
            <h2 className="font-display text-2xl font-semibold text-white">Verified case studies are being prepared.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400">We are deliberately not turning concept work into fake client proof. Real projects will be added here with the business, scope, screenshots and measurable outcomes where those details can be published.</p>
          </div>
        )}
      </Section>
      <CTABand eyebrow="Want to discuss your project?" title="Start with the problem your current website needs to solve." />
    </>
  );
}
