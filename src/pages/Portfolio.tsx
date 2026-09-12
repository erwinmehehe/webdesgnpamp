import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { Link, usePageMeta } from "@/router";
import { projects } from "@/data/portfolio";
import { site } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

const specs = [
  {
    slug: "coreaxis-bpo",
    role: "Strategy · UI · Frontend",
    year: "2026",
    problem: "Two audiences were fighting for one homepage.",
    outcome: "2 clear entry paths",
  },
  {
    slug: "sizzle-house",
    role: "UI · Content system",
    year: "2026",
    problem: "Menu, hours and booking details were buried.",
    outcome: "3-tap booking path",
  },
  {
    slug: "skyline-hotel",
    role: "Art direction · UX",
    year: "2026",
    problem: "Room discovery leaned too heavily on booking platforms.",
    outcome: "4 room types compared fast",
  },
  {
    slug: "goldenfield-estates",
    role: "UX · Interface design",
    year: "2026",
    problem: "Buyers could not self-qualify before contacting an agent.",
    outcome: "4 buyer filters upfront",
  },
  {
    slug: "brightsmile-dental",
    role: "UX writing · UI",
    year: "2026",
    problem: "Different treatments looked interchangeable to patients.",
    outcome: "1 page per core treatment",
  },
  {
    slug: "starlane-logistics",
    role: "Information design · Build",
    year: "2026",
    problem: "Shipping buyers had to call before knowing fleet fit.",
    outcome: "3 quote inputs capture scope",
  },
] as const;

const showcase = specs.map((spec) => ({
  ...spec,
  project: projects.find((project) => project.slug === spec.slug)!,
}));

const tech = [
  "React",
  "TypeScript",
  "Vite",
  "Tailwind",
  "GSAP",
  "Lenis",
  "WordPress",
  "Technical SEO",
  "Schema",
  "GA4",
  "Clarity",
  "Supabase",
];

function number(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function PortfolioPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);

  usePageMeta(
    "Interactive Web Design Portfolio | Web Design Pampanga",
    "Explore six interactive website concepts by Web Design Pampanga with smooth-scroll 3D motion, sticky depth stacking and responsive interface design.",
  );

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const previousScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";

    if (reducedMotion) {
      ScrollTrigger.refresh();
      return () => {
        document.documentElement.style.scrollBehavior = previousScrollBehavior;
      };
    }

    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
      wheelMultiplier: 0.92,
      touchMultiplier: 1,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(root);

      mm.add("(min-width: 768px)", () => {
        const hero = q("[data-hero]")[0] as HTMLElement | undefined;
        const headline = q("[data-hero-headline]")[0] as HTMLElement | undefined;
        const heroLayers = Array.from(root.querySelectorAll<HTMLElement>("[data-hero-layer]"));
        const layerMotion = [10, -12, 18, -20, 24];
        const layerDepth = [-70, -30, 10, 55, 95];

        if (hero) {
          heroLayers.forEach((layer, index) => {
            gsap.to(layer, {
              yPercent: layerMotion[index] ?? 12,
              z: layerDepth[index] ?? 0,
              ease: "none",
              scrollTrigger: {
                trigger: hero,
                start: "top top",
                end: "bottom top",
                scrub: 1,
              },
            });
          });

          if (headline) {
            gsap.to(headline, {
              yPercent: -18,
              opacity: 0,
              ease: "none",
              scrollTrigger: {
                trigger: hero,
                start: "top top",
                end: "65% top",
                scrub: 1,
              },
            });
          }
        }

        const stackCards = Array.from(root.querySelectorAll<HTMLElement>("[data-stack-card]"));
        stackCards.forEach((card, index) => {
          const inner = card.querySelector<HTMLElement>("[data-stack-inner]");

          ScrollTrigger.create({
            trigger: card,
            start: "top 52%",
            end: "bottom 45%",
            onEnter: () => setActiveProject(index),
            onEnterBack: () => setActiveProject(index),
          });

          if (inner) {
            gsap.from(inner, {
              y: 52,
              opacity: 0,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top 94%",
                end: "top 72%",
                scrub: 1,
              },
            });
          }

          if (index < stackCards.length - 1) {
            gsap.to(card, {
              scale: 0.92,
              opacity: 0.42,
              rotateX: -7,
              z: -120,
              ease: "none",
              scrollTrigger: {
                trigger: stackCards[index + 1],
                start: "top 82%",
                end: "top 28%",
                scrub: 1,
              },
            });
          }
        });

        const reelSection = q("[data-reel-section]")[0] as HTMLElement | undefined;
        const reelTrack = q("[data-reel-track]")[0] as HTMLElement | undefined;
        const reelGhost = q("[data-reel-ghost]")[0] as HTMLElement | undefined;
        const reelCards = Array.from(root.querySelectorAll<HTMLElement>("[data-reel-card]"));

        if (reelSection && reelTrack) {
          const shift = () => Math.max(0, reelTrack.scrollWidth - window.innerWidth + Math.max(56, window.innerWidth * 0.08));

          gsap.to(reelTrack, {
            x: () => -shift(),
            ease: "none",
            scrollTrigger: {
              trigger: reelSection,
              start: "top top",
              end: () => `+=${Math.max(window.innerWidth * 1.7, reelTrack.scrollWidth * 0.72)}`,
              pin: true,
              pinSpacing: true,
              scrub: 1,
              invalidateOnRefresh: true,
              anticipatePin: 1,
              onUpdate: () => {
                const viewportCenter = window.innerWidth / 2;
                reelCards.forEach((card) => {
                  const rect = card.getBoundingClientRect();
                  const cardCenter = rect.left + rect.width / 2;
                  const distance = gsap.utils.clamp(-1, 1, (cardCenter - viewportCenter) / viewportCenter);
                  gsap.set(card, {
                    rotateY: distance * -16,
                    z: -Math.abs(distance) * 90,
                  });
                });

                if (reelGhost) {
                  const progress = reelSection.getBoundingClientRect().top / Math.max(1, window.innerHeight);
                  gsap.set(reelGhost, { xPercent: gsap.utils.clamp(-16, 16, progress * 14) });
                }
              },
            },
          });
        }
      });

      const techSection = q("[data-tech-section]")[0] as HTMLElement | undefined;
      const techRows = Array.from(root.querySelectorAll<HTMLElement>("[data-tech-row]"));
      if (techSection && techRows.length === 2) {
        gsap.fromTo(
          techRows[0],
          { xPercent: 4 },
          {
            xPercent: -14,
            ease: "none",
            scrollTrigger: { trigger: techSection, start: "top bottom", end: "bottom top", scrub: 1 },
          },
        );
        gsap.fromTo(
          techRows[1],
          { xPercent: -12 },
          {
            xPercent: 6,
            ease: "none",
            scrollTrigger: { trigger: techSection, start: "top bottom", end: "bottom top", scrub: 1 },
          },
        );
      }
    }, root);

    const images = Array.from(root.querySelectorAll<HTMLImageElement>("img"));
    Promise.all(
      images.map(
        (image) =>
          new Promise<void>((resolve) => {
            if (image.complete) {
              resolve();
              return;
            }
            image.addEventListener("load", () => resolve(), { once: true });
            image.addEventListener("error", () => resolve(), { once: true });
          }),
      ),
    ).then(() => ScrollTrigger.refresh());

    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        lenis.resize();
        ScrollTrigger.refresh();
      }, 160);
    };

    window.addEventListener("resize", onResize);
    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener("resize", onResize);
      window.clearTimeout(resizeTimer);
      mm.revert();
      ctx.revert();
      gsap.ticker.remove(raf);
      gsap.ticker.lagSmoothing(500, 33);
      lenis.destroy();
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
    };
  }, []);

  return (
    <div ref={rootRef} className="portfolio-depth relative min-h-screen">
      <section
        data-hero
        aria-labelledby="portfolio-title"
        className="relative min-h-[100svh] overflow-hidden border-b border-white/[0.08] px-5 pb-16 pt-32 sm:px-8 lg:px-10"
        style={{ perspective: "1600px" }}
      >
        <div data-hero-layer className="pointer-events-none absolute inset-0 [will-change:transform]" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(198,242,78,.09),transparent_28%),radial-gradient(circle_at_80%_35%,rgba(125,211,252,.08),transparent_26%),linear-gradient(180deg,#08080d_0%,#0b0b12_100%)]" />
          <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:64px_64px]" />
        </div>

        <div data-hero-layer className="pointer-events-none absolute inset-x-0 top-[18%] overflow-hidden [will-change:transform]" aria-hidden="true">
          <div className="whitespace-nowrap text-center text-[clamp(5.5rem,18vw,15rem)] font-semibold leading-none tracking-[-0.07em] text-white/[0.025]">
            DEPTH / MOTION / WEB
          </div>
        </div>

        <div className="relative mx-auto flex min-h-[calc(100svh-9rem)] max-w-[1280px] flex-col justify-between">
          <div className="portfolio-mono flex flex-wrap items-center justify-between gap-4 text-[10px] uppercase tracking-[0.2em] text-white/50">
            <span>Erwin Valles · Web Design Pampanga</span>
            <span className="inline-flex items-center gap-2 text-[#c6f24e]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c6f24e]" />
              Available for selected builds
            </span>
          </div>

          <div className="relative grid items-end gap-12 py-16 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-16">
            <div data-hero-headline className="relative z-10 [will-change:transform,opacity]">
              <p className="portfolio-mono mb-5 text-[11px] uppercase tracking-[0.22em] text-[#c6f24e]">Web design + SEO · Pampanga</p>
              <h1 id="portfolio-title" className="portfolio-depth-display max-w-[9ch] font-semibold text-white">
                Websites with depth.
              </h1>
              <p className="mt-7 max-w-[60ch] text-base leading-7 text-white/60 sm:text-lg">
                I design fast, conversion-focused websites with motion that follows the scroll, not the other way around.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#c6f24e] px-6 py-3 text-sm font-semibold text-[#08080d] transition-transform duration-300 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1 focus-visible:outline-[#c6f24e]"
                >
                  See the work
                  <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" aria-hidden="true" />
                </a>
                <Link
                  to="/contact/"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white transition-all duration-300 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1 hover:border-white/35 hover:bg-white/[0.07]"
                >
                  Start a project
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="relative min-h-[360px] lg:min-h-[430px]">
              <div
                data-hero-layer
                className="absolute inset-x-8 top-0 aspect-[4/5] rounded-[2.25rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,.08),rgba(255,255,255,.015))] shadow-[0_40px_120px_-60px_rgba(0,0,0,.95)] backdrop-blur-xl [will-change:transform] sm:inset-x-14 lg:inset-x-0"
              >
                <div className="absolute inset-5 rounded-[1.6rem] border border-white/[0.07] bg-[#0d0d15]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[clamp(5rem,12vw,9rem)] font-semibold tracking-[-0.08em] text-[#c6f24e]">EV</span>
                </div>
                <div className="portfolio-mono absolute bottom-7 left-7 text-[9px] uppercase tracking-[0.2em] text-white/35">Design / SEO / Build</div>
              </div>

              <div
                data-hero-layer
                className="absolute -left-2 bottom-5 z-10 rounded-2xl border border-white/10 bg-[#111119]/90 p-5 shadow-2xl backdrop-blur-xl [will-change:transform] sm:left-0"
              >
                <div className="portfolio-mono text-[9px] uppercase tracking-[0.18em] text-white/35">Proof</div>
                <div className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-white">200+</div>
                <div className="mt-1 text-sm text-white/50">websites launched</div>
              </div>

              <div
                data-hero-layer
                className="absolute -right-1 top-8 z-10 rounded-2xl border border-white/10 bg-[#111119]/90 p-5 shadow-2xl backdrop-blur-xl [will-change:transform] sm:right-0"
              >
                <div className="portfolio-mono text-[9px] uppercase tracking-[0.18em] text-white/35">Focus</div>
                <div className="mt-2 text-lg font-semibold text-[#7dd3fc]">Design that moves</div>
                <div className="mt-1 max-w-[17ch] text-xs leading-5 text-white/45">without fighting native scroll</div>
              </div>
            </div>
          </div>

          <div className="portfolio-mono flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-white/35">
            <span>Scroll to enter</span>
            <span className="h-px w-16 bg-white/15" />
          </div>
        </div>
      </section>

      <section id="work" className="relative px-5 py-16 sm:px-8 md:py-24 lg:px-10 lg:py-[120px]">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 flex items-end justify-between gap-6 md:mb-20">
            <div>
              <p className="portfolio-mono text-[10px] uppercase tracking-[0.22em] text-[#c6f24e]">Selected work</p>
              <h2 className="mt-4 max-w-[9ch] text-[clamp(2.5rem,7vw,6.25rem)] font-semibold leading-[0.92] tracking-[-0.045em] text-white">
                Six ways to solve the page.
              </h2>
            </div>
            <div className="portfolio-mono hidden text-right text-xs uppercase tracking-[0.16em] text-white/35 md:block">
              <span className="text-[#c6f24e]">{number(activeProject)}</span> / {String(showcase.length).padStart(2, "0")}
            </div>
          </div>

          <div className="depth-stack-stage portfolio-swipe flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:block md:overflow-visible md:pb-0">
            {showcase.map(({ project, role, year, problem, outcome }, index) => (
              <article
                key={project.slug}
                data-stack-card
                className="depth-stack-card relative min-w-[88vw] shrink-0 snap-start md:sticky md:mb-16 md:min-w-0 lg:mb-20"
                style={{ top: `calc(88px + ${index * 18}px)` }}
              >
                <div
                  data-stack-inner
                  className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#101017] shadow-[0_40px_120px_-65px_rgba(0,0,0,.95)] md:grid md:min-h-[560px] md:grid-cols-[1.18fr_.82fr]"
                >
                  <div className="relative min-h-[300px] overflow-hidden bg-black md:min-h-full">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.name} ${project.industry} website concept`}
                        loading={index < 2 ? "eager" : "lazy"}
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] hover:scale-[1.025]"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(198,242,78,.22),transparent_35%),linear-gradient(145deg,#13131c,#09090f)]" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                    <div className="portfolio-mono absolute left-5 top-5 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[9px] uppercase tracking-[0.17em] text-white/70 backdrop-blur-md">
                      Concept {number(index)}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                    <div>
                      <div className="portfolio-mono flex items-center justify-between gap-4 text-[9px] uppercase tracking-[0.17em] text-white/35">
                        <span>{role}</span>
                        <span>{year}</span>
                      </div>
                      <h3 className="mt-8 text-[clamp(2rem,4vw,4rem)] font-semibold leading-[0.92] tracking-[-0.045em] text-white">
                        {project.name}
                      </h3>
                      <p className="mt-5 max-w-[48ch] text-sm leading-6 text-white/52 sm:text-base sm:leading-7">{problem}</p>
                    </div>

                    <div className="mt-10 border-t border-white/10 pt-6">
                      <div className="portfolio-mono text-[9px] uppercase tracking-[0.18em] text-white/30">Outcome</div>
                      <div className="mt-2 text-xl font-semibold tracking-[-0.025em] text-[#c6f24e] sm:text-2xl">{outcome}</div>
                      <Link
                        to={`/portfolio/${project.slug}/`}
                        className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors duration-300 hover:text-[#c6f24e]"
                        aria-label={`Explore ${project.name} concept`}
                      >
                        Explore concept
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="portfolio-mono mt-5 text-[9px] uppercase tracking-[0.16em] text-white/28 md:hidden">Swipe sideways to browse the stack</p>
        </div>
      </section>

      <section data-reel-section className="relative overflow-hidden border-y border-white/[0.07] bg-[#0a0a10] px-5 py-16 sm:px-8 md:min-h-[100svh] md:py-0 lg:px-10">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div data-reel-ghost className="absolute left-[8vw] top-[14%] whitespace-nowrap text-[clamp(6rem,18vw,16rem)] font-semibold leading-none tracking-[-0.07em] text-white/[0.025]">
            SCROLL / TILT / REPEAT
          </div>
        </div>

        <div className="relative mx-auto flex max-w-[1280px] flex-col justify-center md:min-h-[100svh]">
          <div className="mb-8 flex items-end justify-between gap-5 md:mb-12">
            <div>
              <p className="portfolio-mono text-[10px] uppercase tracking-[0.22em] text-[#7dd3fc]">Pinned reel</p>
              <h2 className="mt-3 text-[clamp(2rem,5vw,4.6rem)] font-semibold leading-[0.94] tracking-[-0.045em] text-white">The work from another angle.</h2>
            </div>
            <p className="hidden max-w-[32ch] text-sm leading-6 text-white/42 md:block">Vertical scroll drives the reel. No autoplay. No hijacked wheel.</p>
          </div>

          <div data-lenis-prevent className="portfolio-swipe overflow-x-auto md:overflow-visible">
            <div data-reel-track className="reel-track-3d flex w-max snap-x snap-mandatory gap-5 pb-3 [will-change:transform] md:snap-none md:pb-0">
              {showcase.map(({ project, outcome }, index) => (
                <article
                  key={`reel-${project.slug}`}
                  data-reel-card
                  className="reel-card-3d w-[82vw] max-w-[720px] shrink-0 snap-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111119] transition-colors duration-300 hover:border-white/25 sm:w-[68vw] md:w-[58vw] [will-change:transform]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.name} website concept preview`}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] hover:scale-[1.025]"
                      />
                    ) : (
                      <div className="h-full w-full bg-[linear-gradient(145deg,#15151f,#09090e)]" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                    <div className="portfolio-mono absolute left-5 top-5 text-[9px] uppercase tracking-[0.18em] text-white/55">{number(index)} / {project.industry}</div>
                    <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
                      <h3 className="max-w-[11ch] text-2xl font-semibold leading-none tracking-[-0.04em] text-white sm:text-3xl">{project.name}</h3>
                      <span className="portfolio-mono text-right text-[9px] uppercase tracking-[0.14em] text-[#c6f24e]">{outcome}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <p className="portfolio-mono mt-5 text-[9px] uppercase tracking-[0.16em] text-white/28 md:hidden">Swipe the reel</p>
        </div>
      </section>

      <section data-tech-section className="overflow-hidden px-5 py-20 sm:px-8 md:py-28 lg:px-10 lg:py-[120px]">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-10 max-w-[650px]">
            <p className="portfolio-mono text-[10px] uppercase tracking-[0.22em] text-[#f0abfc]">Stack</p>
            <h2 className="mt-3 text-[clamp(2rem,5vw,4.6rem)] font-semibold leading-[0.95] tracking-[-0.045em] text-white">Built with tools that stay out of the way.</h2>
          </div>
        </div>

        <div className="-mx-[12vw] space-y-4">
          {[tech, [...tech].reverse()].map((row, rowIndex) => (
            <div key={rowIndex} data-tech-row className="flex w-max gap-3 px-[12vw] [will-change:transform]">
              {[...row, ...row].map((item, index) => (
                <div
                  key={`${rowIndex}-${item}-${index}`}
                  className="portfolio-mono rounded-full border border-white/10 bg-white/[0.025] px-5 py-3 text-[10px] uppercase tracking-[0.16em] text-white/55 transition-all duration-300 hover:border-[#c6f24e]/40 hover:bg-[#c6f24e]/[0.06] hover:text-white"
                >
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="relative border-t border-white/[0.08] px-5 py-20 sm:px-8 md:py-28 lg:px-10 lg:py-[120px]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(198,242,78,.08),transparent_34%)]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <p className="portfolio-mono text-[10px] uppercase tracking-[0.22em] text-[#c6f24e]">Next</p>
            <h2 className="mt-4 max-w-[10ch] text-[clamp(2.8rem,8vw,7rem)] font-semibold leading-[0.9] tracking-[-0.05em] text-white">
              Make the site feel expensive.
            </h2>
            <p className="mt-7 max-w-[58ch] text-base leading-7 text-white/50">I handle the structure, visual direction, build and SEO foundation. You bring the business.</p>
          </div>

          <div className="space-y-3">
            <Link
              to="/contact/"
              className="group flex items-center justify-between rounded-2xl bg-[#c6f24e] px-6 py-5 text-sm font-semibold text-[#08080d] transition-transform duration-300 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="group flex items-center justify-between rounded-2xl border border-white/12 bg-white/[0.025] px-6 py-5 text-sm font-medium text-white transition-all duration-300 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.05]"
            >
              {site.email}
              <Mail className="h-4 w-4 text-white/50 transition-colors group-hover:text-[#7dd3fc]" aria-hidden="true" />
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="portfolio-mono block px-1 pt-2 text-[9px] uppercase tracking-[0.16em] text-white/30 transition-colors hover:text-[#c6f24e]"
            >
              Or message on WhatsApp ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
