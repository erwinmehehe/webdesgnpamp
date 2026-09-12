import { ArrowRight } from "lucide-react";
import { CTABand, PageHero, Section, SectionIntro } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { Link, usePageMeta } from "@/router";
import { services } from "@/data/services";

export function ServicesPage() {
  usePageMeta(
    "Web Design & SEO Services Pampanga | Web Design Pampanga",
    "Web design, development, WordPress, ecommerce, redesign, maintenance and SEO services for businesses across Pampanga.",
  );

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Website and SEO help for <span className="text-gold-gradient">real business needs.</span></>}
        intro="I handle web design, development, WordPress, ecommerce, redesigns, maintenance and SEO. If you are not sure which service fits, send the problem and I will point you in the right direction."
        crumbs={[{ label: "Services" }]}
        chips={["Web design", "Development", "SEO", "Ongoing support"]}
      />

      <Section divider>
        <SectionIntro
          eyebrow="What I do"
          title="Choose the service closest to what you need"
          description="You do not need to know the technical answer before getting in touch. Start with the problem you want fixed."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={0.05 * index}>
              <Link to={`/${service.slug}/`} className="group flex h-full flex-col rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.045] to-white/[0.012] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/30">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gold-400/20 bg-gold-400/10">
                  <service.icon className="h-5 w-5 text-gold-400" aria-hidden="true" />
                </span>
                <h2 className="mt-5 font-display text-lg font-semibold text-white">{service.name}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{service.short}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-400">
                  View service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section ambient divider>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Start with the business problem", "Before choosing layouts or tools, I look at what the website needs to improve for the customer and the business."],
            ["Keep useful SEO work intact", "For redesigns, I check the URLs, content and metadata that are already doing a job before anything is changed."],
            ["Track actual enquiries", "Phone clicks, WhatsApp clicks and form submissions can be tracked so you can see whether the site is doing its job."],
          ].map(([title, text], index) => (
            <Reveal key={title} delay={index * 0.08}>
              <div className="h-full rounded-3xl border border-white/[0.07] bg-white/[0.025] p-7">
                <h2 className="font-display text-lg font-semibold text-white">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand eyebrow="Not sure where to start?" title="Tell me what is not working." intro="I will recommend the service and scope that make sense for the problem, not the biggest package." />
    </>
  );
}
