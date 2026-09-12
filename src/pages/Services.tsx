import { ArrowRight } from "lucide-react";
import { CTABand, PageHero, Section, SectionIntro } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { Link, usePageMeta } from "@/router";
import { services } from "@/data/services";

export function ServicesPage() {
  usePageMeta(
    "Web Design & SEO Services Pampanga | Web Design Pampanga",
    "Explore web design, development, WordPress, ecommerce, redesign, maintenance and SEO services for businesses across Pampanga.",
  );

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Web design and SEO services built around <span className="text-gold-gradient">business outcomes.</span></>}
        intro="One studio for design, development, technical SEO, local SEO and ongoing website support. Start with the service closest to what you need, or ask us to recommend the right scope."
        crumbs={[{ label: "Services" }]}
        chips={["Custom websites", "SEO-ready builds", "Fixed project scopes", "Pampanga-based"]}
      />

      <Section divider>
        <SectionIntro
          eyebrow="What we do"
          title="Choose the service that matches the problem"
          description="Each service has its own scope, but the work is connected: clearer structure, better mobile usability, faster pages, stronger local visibility and a simpler path to enquiry."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={0.05 * i}>
              <Link to={`/${service.slug}/`} className="group flex h-full flex-col rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.045] to-white/[0.012] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/30">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gold-400/20 bg-gold-400/10">
                  <service.icon className="h-5 w-5 text-gold-400" aria-hidden="true" />
                </span>
                <h2 className="mt-5 font-display text-lg font-semibold text-white">{service.name}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{service.short}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-400">Explore service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section ambient divider>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Start with the customer journey", "We plan what visitors need to understand before deciding on layouts, effects or technology."],
            ["Protect search visibility", "Existing URLs, metadata, internal links and redirects are considered before redesigns and migrations go live."],
            ["Measure what matters", "Calls, WhatsApp clicks, quote starts and successful enquiries can be tracked so the site is judged on outcomes."],
          ].map(([title, text], i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-white/[0.07] bg-white/[0.025] p-7">
                <h2 className="font-display text-lg font-semibold text-white">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand eyebrow="Not sure which service fits?" title="Tell us what is not working. We will recommend the scope." />
    </>
  );
}
