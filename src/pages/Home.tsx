import { motion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, MapPin, MessageCircle, Phone,
  Smartphone, Star, Target, TrendingUp, Users,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { IndustryStrip } from "@/components/IndustryStrip";
import {
  CTABand, CheckList, Eyebrow, FAQAccordion, GhostButton, GoldButton,
  InfoCardGrid, PricingCards, ProcessSteps, Section, SectionIntro, StatStrip,
} from "@/components/blocks";
import { Reveal, staggerItem } from "@/components/Reveal";
import { Link, usePageMeta } from "@/router";
import { featuredProjects } from "@/data/portfolio";
import { locations } from "@/data/locations";
import { services } from "@/data/services";
import { generalFaqs, painPoints, site, testimonials } from "@/data/site";
import { cn } from "@/utils/cn";

const whyUs = [
  { icon: Target, title: "Designed for your business", description: "The site is built around your brand, your customers and what they need to see before they contact you — not a template with your logo dropped in." },
  { icon: Users, title: "Built for customers", description: "Navigation, content and calls to action are organised around real visitor questions and buying intent, so people find what they came for." },
  { icon: Smartphone, title: "Mobile-first, always", description: "Most local customers see you on a phone first. We design for that screen and scale up — fast, readable and easy to use on mobile data." },
  { icon: TrendingUp, title: "Built to grow with you", description: "A clean structure gives you room to add services, campaigns and content later without the website becoming harder to use." },
];

export function HomePage() {
  usePageMeta("Web Design Pampanga | Professional Business Websites in Pampanga", site.description);

  return (
    <>
      <Hero />

      {/* Sample work — classic showcase grid */}
      <Section id="work" divider>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <Reveal><Eyebrow>Sample work</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
                A few directions we&rsquo;ve <span className="text-gold-gradient">explored.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 text-base leading-relaxed text-slate-400">
                Recent work across different industries, showing how we approach layout, messaging,
                mobile UX and calls to action.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link to="/portfolio/" className="group inline-flex items-center gap-2 text-sm font-semibold text-gold-400 transition-colors hover:text-gold-300">
              View all sample work
              <span className="h-px w-8 bg-current transition-all duration-300 group-hover:w-12" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-64px" }} transition={{ staggerChildren: 0.1, delayChildren: 0.1 }} className="mt-12 grid gap-10 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </Section>

      <IndustryStrip />

      {/* Pain points */}
      <Section ambient divider>
        <SectionIntro
          eyebrow="The real cost of a weak website"
          title={<>Is your website helping your business, or <span className="text-gold-gradient">holding it back?</span></>}
          description="Your website is often the first impression customers have of your business. If it looks outdated, loads slowly, is difficult to use, or doesn't clearly explain what you offer, potential customers leave before ever contacting you."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {painPoints.map((point, i) => (
            <Reveal key={point.title} delay={0.08 * i}>
              <div className="group flex h-full gap-5 rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-white/[0.012] p-6 transition-all duration-500 hover:border-gold-400/25 sm:p-7">
                <span className="font-display text-sm font-bold text-slate-600 transition-colors duration-500 group-hover:text-gold-400/70">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{point.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-3xl border border-gold-400/20 bg-gradient-to-r from-gold-500/[0.08] to-white/[0.02] px-7 py-7 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="font-display text-lg font-semibold text-white">We can fix that.</p>
              <p className="mt-1 text-sm text-slate-400">A focused rebuild usually solves all four problems at once — structure, message, speed and next step.</p>
            </div>
            <GoldButton to="/web-design/" className="w-full shrink-0 sm:w-auto">See how we design</GoldButton>
          </div>
        </Reveal>
      </Section>

      {/* Services */}
      <Section id="services" divider>
        <SectionIntro
          eyebrow="Services"
          title={<>Everything your business needs to <span className="text-gold-gradient">look better online.</span></>}
          description="Design, development, redesign, maintenance and SEO — handled by one studio in Pampanga, so you're not coordinating three freelancers who've never spoken to each other."
        />
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-64px" }} transition={{ staggerChildren: 0.07, delayChildren: 0.08 }} className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <motion.div key={service.slug} variants={staggerItem} whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 22 }}>
              <Link to={`/${service.slug}/`} className="group flex h-full flex-col rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.045] to-white/[0.012] p-6 transition-colors duration-500 hover:border-gold-400/30">
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gold-400/20 bg-gold-400/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-gold-400/20">
                    <service.icon className="h-5 w-5 text-gold-400" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <ArrowUpRight className="h-4 w-4 -translate-x-1 translate-y-1 text-slate-600 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-gold-400 group-hover:opacity-100" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-white">{service.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{service.short}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-gold-400/90">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Why us */}
      <Section id="why-us" ambient divider>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal><Eyebrow>Why Web Design Pampanga</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
                Thoughtful where it <span className="text-gold-gradient">matters.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-slate-400">
                A good website should feel easy for the customer and intentional for the business. We pay attention to the details that make both happen.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-7">
                <CheckList items={["Fixed pricing agreed before we start", "You own your domain, hosting and files", "Local studio — Clark, Angeles, San Fernando", "Plain-language updates at every stage"]} />
              </div>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="mt-8"><GoldButton to="/about/">More about the studio</GoldButton></div>
            </Reveal>
          </div>
          <InfoCardGrid items={whyUs} columns={2} />
        </div>

        <div className="mt-20">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <Eyebrow>How it works</Eyebrow>
                <h3 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">A simple process. A better website.</h3>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-slate-500">Four clear stages, with your feedback built in — so you always know what&rsquo;s happening and what comes next.</p>
            </div>
          </Reveal>
          <ProcessSteps />
        </div>

        <div className="mt-16"><StatStrip /></div>
      </Section>

      {/* Testimonials */}
      <Section divider>
        <SectionIntro
          eyebrow="In their words"
          title={<>What business owners tell us <span className="text-gold-gradient">after launch.</span></>}
          description="Feedback from conversations with businesses across Pampanga — the things that change once the website finally matches the work behind it."
        />
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-64px" }} transition={{ staggerChildren: 0.12, delayChildren: 0.08 }} className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className={cn("relative flex flex-col rounded-3xl border p-8", t.featured ? "border-gold-400/30 bg-gradient-to-b from-gold-500/[0.09] to-white/[0.02] shadow-[0_24px_80px_-32px_rgba(246,193,74,0.25)]" : "border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-white/[0.01]")}
            >
              <span className="font-display text-4xl leading-none text-gold-400/40" aria-hidden="true">&ldquo;</span>
              <div className="mt-3 flex items-center gap-1.5" aria-label="Rated 5 out of 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold-400 text-gold-400" aria-hidden="true" />
                ))}
                <span className="ml-1 text-[11px] text-slate-500">Verified Google review</span>
              </div>
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-300">{t.quote}</blockquote>
              <figcaption className="mt-7 flex items-center gap-4 border-t border-white/[0.07] pt-6">
                <span className={cn("flex h-12 w-12 items-center justify-center rounded-full font-display text-sm font-bold", t.featured ? "bg-gradient-to-br from-gold-300 to-orange-500 text-ink-950" : "bg-gradient-to-br from-slate-500 to-slate-600 text-white")} aria-hidden="true">
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{t.role} · {t.location}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </Section>

      {/* Pricing preview */}
      <Section id="pricing" ambient divider>
        <SectionIntro
          eyebrow="Pricing"
          title={<>Choose the right <span className="text-gold-gradient">starting point.</span></>}
          description="Every website is quoted based on scope, content, functionality and the amount of custom work required. These are the honest starting numbers."
        />
        <div className="mt-14"><PricingCards /></div>
        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-3xl border border-white/[0.07] bg-white/[0.03] px-7 py-7 sm:flex-row">
            <p className="text-center text-sm text-slate-400 sm:text-left">
              Already have a website? Care plans from <span className="font-semibold text-slate-200">₱3,500/month</span> keep it updated, secure and monitored.
            </p>
            <GhostButton to="/pricing/">See full pricing &amp; care plans</GhostButton>
          </div>
        </Reveal>
      </Section>

      {/* FAQ */}
      <Section divider>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal><Eyebrow>FAQ</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl">
                Questions business owners <span className="text-gold-gradient">usually ask.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-slate-400">
                Straight answers about cost, timelines, mobile, redesigns, hosting and SEO. If your question isn&rsquo;t here, just ask — we reply in plain language.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-7 flex flex-wrap gap-3"><GoldButton to="/contact/">Ask us anything</GoldButton></div>
            </Reveal>
          </div>
          <FAQAccordion items={generalFaqs.slice(0, 5)} />
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" ambient divider>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <Reveal><Eyebrow>Get in touch</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
                Let&rsquo;s build something <span className="text-gold-gradient">better.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400">
                Tell us about your business and what the website needs to do. If you&rsquo;re in Clark, include whether the site should support sales, recruitment, or both — we&rsquo;ll come back with a clear scope and a fixed price.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 space-y-3">
                <a href={site.phoneHref} className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-400/30 hover:bg-white/[0.05]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-400/15">
                    <Phone className="h-5 w-5 text-gold-400" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-white">{site.phoneDisplay}</span>
                    <span className="mt-0.5 block text-xs text-slate-500">Call or text · {site.hours}</span>
                  </span>
                </a>
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-400/30 hover:bg-white/[0.05]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/15">
                    <MessageCircle className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-white">Message on WhatsApp</span>
                    <span className="mt-0.5 block text-xs text-slate-500">Prefer a quick chat? Send your business name and website link.</span>
                  </span>
                </a>
                <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-400/30 hover:bg-white/[0.05]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-400/15">
                    <MapPin className="h-5 w-5 text-violet-300" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-white">{site.location}</span>
                    <span className="mt-0.5 block text-xs text-slate-500">View on Google Maps</span>
                  </span>
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="glass rounded-[2rem] p-8">
              <h3 className="font-display text-xl font-semibold text-white">What happens next</h3>
              <ol className="mt-6 space-y-6">
                {[
                  { title: "You send the details", body: "Business name, what you do, and what the site should achieve." },
                  { title: "We reply with questions", body: "A few practical questions — usually within a few hours." },
                  { title: "You get a written quote", body: "Scope, timeline, fixed price and what's included. No obligation." },
                ].map((item, i) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold-400/25 bg-gold-400/10 font-display text-xs font-bold text-gold-400">0{i + 1}</span>
                    <span>
                      <span className="block text-sm font-semibold text-white">{item.title}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-slate-400">{item.body}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <div className="mt-8"><GoldButton to="/contact/" className="w-full">Get My Fixed-Price Quote</GoldButton></div>
              <p className="mt-4 text-center text-xs text-slate-500">{site.responseTime}</p>
              <ul className="mt-8 flex flex-wrap gap-2 border-t border-white/[0.07] pt-6" aria-label="Areas we serve">
                {locations.map((location) => (
                  <li key={location.slug}>
                    <Link to={`/locations/${location.slug}/`} className="block rounded-full border border-white/[0.08] px-3 py-1 text-[11px] text-slate-500 transition-colors hover:border-gold-400/30 hover:text-gold-300">
                      {location.shortName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTABand
        eyebrow="Your next customer is searching"
        title="Your next customer could be looking for you right now."
        intro="Give them a website that makes the right first impression. No obligation — let's talk about your business first."
      />
    </>
  );
}
