import { MapPin, Phone } from "lucide-react";
import {
  CTABand, CheckList, CrossLinks, Eyebrow, FAQAccordion,
  GhostButton, GoldButton, InfoCardGrid, PageHero, Section, SectionIntro,
} from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { Link, usePageMeta } from "@/router";
import { industries } from "@/data/industries";
import { getLocation, locations } from "@/data/locations";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { NotFoundPage } from "@/pages/NotFound";

export function LocationPage({ slug }: { slug: string }) {
  const location = getLocation(slug);
  usePageMeta(location ? location.metaTitle : "Page not found | Web Design Pampanga", location?.metaDescription);

  if (!location) return <NotFoundPage />;

  const nearbyLocations = location.nearby
    .map((name) => locations.find((l) => l.name === name || l.shortName === name))
    .filter((l): l is NonNullable<typeof l> => Boolean(l));

  return (
    <>
      <PageHero
        eyebrow={`${location.name} · ${location.region}`}
        title={location.h1}
        intro={location.intro}
        crumbs={[{ label: "Locations", to: "/locations/" }, { label: location.shortName }]}
        chips={[`Nearby: ${location.nearby.slice(0, 4).join(", ")}`, "Mobile-first design", "Local SEO foundations"]}
      >
        <GoldButton to="/contact/">Get My Fixed-Price Quote</GoldButton>
        <GhostButton to={site.phoneHref}>
          <Phone className="h-4 w-4 text-gold-400" aria-hidden="true" />
          {site.phoneDisplay}
        </GhostButton>
      </PageHero>

      <Section divider>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <Reveal><Eyebrow>The local picture</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl">
                What we see in <span className="text-gold-gradient">{location.shortName}.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-400">
                {location.context.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="space-y-4">
            <Reveal delay={0.1}>
              <div className="glass rounded-3xl p-7">
                <h3 className="font-display text-lg font-semibold text-white">Who we help here</h3>
                <ul className="mt-5 space-y-3">
                  {location.businessTypes.map((type) => (
                    <li key={type} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" aria-hidden="true" />
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="rounded-3xl border border-white/[0.07] bg-white/[0.03] p-7">
                <h3 className="font-display text-base font-semibold text-white">Neighbouring areas</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {location.nearby.map((area) => {
                    const match = locations.find((l) => l.name === area || l.shortName === area);
                    return (
                      <li key={area}>
                        {match ? (
                          <Link to={`/locations/${match.slug}/`} className="block rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 text-xs text-slate-400 transition-colors hover:border-gold-400/30 hover:text-gold-300">
                            {area}
                          </Link>
                        ) : (
                          <span className="block rounded-full border border-white/[0.08] px-3.5 py-1.5 text-xs text-slate-500">{area}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
                <p className="mt-5 flex items-center gap-2 text-xs text-slate-500">
                  <MapPin className="h-3.5 w-3.5 text-gold-400/80" aria-hidden="true" />
                  We work across Pampanga and Central Luzon.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section ambient divider>
        <SectionIntro
          eyebrow="Where we focus"
          title={<>How we help {location.shortName} <span className="text-gold-gradient">businesses.</span></>}
          description="Three areas where a properly structured website changes outcomes for local businesses."
        />
        <div className="mt-12"><InfoCardGrid items={location.highlights} columns={3} /></div>
      </Section>

      <Section divider>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <Reveal><Eyebrow>Industry experience</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl">Design shaped by your industry.</h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 text-base leading-relaxed text-slate-400">Whichever sector you&rsquo;re in, we&rsquo;ve probably designed something similar — and we know the structure that usually works.</p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-7">
                <CheckList items={["Structure matched to how your customers decide", "Content that answers the questions they ask first", "Local search signals for your town and service area", "A site you can update yourself after launch"]} />
              </div>
            </Reveal>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {industries.slice(0, 6).map((industry, i) => (
              <Reveal key={industry.slug} delay={0.06 * i}>
                <Link to={`/industries/${industry.slug}/`} className="group flex h-full items-center gap-3.5 rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-white/[0.012] px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/30">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold-400/20 bg-gold-400/10 transition-all duration-500 group-hover:scale-110">
                    <industry.icon className="h-4 w-4 text-gold-400" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-slate-300 transition-colors group-hover:text-white">{industry.shortName}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section ambient divider>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal><Eyebrow>{location.shortName} FAQ</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl">
                Questions from local <span className="text-gold-gradient">business owners.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-slate-400">Something specific to your town or business type? Ask us directly — we answer in plain language.</p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-7 flex flex-wrap gap-3"><GoldButton to="/contact/">Ask your question</GoldButton></div>
            </Reveal>
          </div>
          <FAQAccordion items={location.faqs} />
        </div>
      </Section>

      <CrossLinks
        eyebrow="What we do"
        title={`Popular services for ${location.shortName} businesses`}
        links={services.slice(0, 6).map((s) => ({ label: s.name, description: s.short, to: `/${s.slug}/`, icon: s.icon }))}
      />

      {nearbyLocations.length > 0 && (
        <Section divider className="pt-0">
          <Reveal>
            <div className="flex flex-col items-center gap-4 text-center">
              <p className="text-sm text-slate-500">We also work in nearby areas</p>
              <div className="flex flex-wrap justify-center gap-3">
                {nearbyLocations.map((l) => (
                  <Link key={l.slug} to={`/locations/${l.slug}/`} className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs font-medium text-slate-400 transition-colors hover:border-gold-400/30 hover:text-gold-300">
                    Web design in {l.shortName}
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </Section>
      )}

      <CTABand eyebrow={`${location.shortName} businesses`} title={`Let's talk about your ${location.shortName} website.`} intro="Send a few details and we'll reply with practical questions, a clear scope and a fixed price — no obligation." />
    </>
  );
}
