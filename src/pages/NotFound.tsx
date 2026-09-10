import { Compass } from "lucide-react";
import { CTABand, Eyebrow, GhostButton, GoldButton, PageHero, Section } from "@/components/blocks";
import { Link, usePageMeta } from "@/router";
import { industries } from "@/data/industries";
import { locations } from "@/data/locations";
import { services } from "@/data/services";

export function NotFoundPage() {
  usePageMeta("Page not found | Web Design Pampanga");

  const quickLinks = [
    ...services.slice(0, 4).map((s) => ({ label: s.name, to: `/${s.slug}/` })),
    { label: "Sample work", to: "/portfolio/" },
    { label: "Pricing", to: "/pricing/" },
    { label: "Blog", to: "/blog/" },
  ];

  return (
    <>
      <PageHero
        eyebrow="404 · Page not found"
        title={<>That page has <span className="text-gold-gradient">moved or never existed.</span></>}
        intro="No harm done. Use the links below to get back to something useful — or send us a message and we'll point you in the right direction."
        crumbs={[{ label: "Not found" }]}
        align="center"
      >
        <GoldButton to="/">Back to homepage</GoldButton>
        <GhostButton to="/contact/">Contact the studio</GhostButton>
      </PageHero>

      <Section divider>
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <Eyebrow>Popular pages</Eyebrow>
            <ul className="mt-5 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-slate-400 transition-colors hover:text-gold-300">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>Industries</Eyebrow>
            <ul className="mt-5 space-y-2.5">
              {industries.slice(0, 5).map((industry) => (
                <li key={industry.slug}>
                  <Link to={`/industries/${industry.slug}/`} className="text-sm text-slate-400 transition-colors hover:text-gold-300">{industry.shortName}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>Locations</Eyebrow>
            <ul className="mt-5 space-y-2.5">
              {locations.slice(0, 5).map((location) => (
                <li key={location.slug}>
                  <Link to={`/locations/${location.slug}/`} className="text-sm text-slate-400 transition-colors hover:text-gold-300">{location.shortName}</Link>
                </li>
              ))}
            </ul>
            <span className="mt-6 flex items-center gap-2 text-xs text-slate-600">
              <Compass className="h-3.5 w-3.5" aria-hidden="true" />
              Or browse the full sitemap in the footer.
            </span>
          </div>
        </div>
      </Section>

      <CTABand eyebrow="Still stuck?" title="Tell us what you were looking for." intro="Send a quick message describing what you needed and we'll send you the right page — or answer the question directly." />
    </>
  );
}
