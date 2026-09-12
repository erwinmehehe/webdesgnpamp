import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { ArrowDownRight, ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { Link, usePageMeta } from "@/router";
import { projects, type Project } from "@/data/portfolio";
import { site } from "@/data/site";
import { ScrollThreeScene } from "@/components/portfolio/ScrollThreeScene";

gsap.registerPlugin(ScrollTrigger);

const selectedProjects = projects.slice(0, 6);

const skills = [
  {
    number: "01",
    title: "Web design",
    text: "Clear hierarchy, strong typography and conversion paths built around what the customer needs next.",
    items: ["UI direction", "Responsive systems", "CRO", "Content structure"],
  },
  {
    number: "02",
    title: "Frontend",
    text: "Fast, maintainable interfaces with motion that supports the page instead of distracting from it.",
    items: ["React", "TypeScript", "Vite", "Tailwind", "GSAP"],
  },
  {
    number: "03",
    title: "SEO",
    text: "Technical foundations, information architecture and local search structure planned before launch.",
    items: ["Technical SEO", "Local SEO", "Schema", "Internal linking"],
  },
  {
    number: "04",
    title: "Performance",
    text: "Lean assets, stable layouts and practical Core Web Vitals work for real mobile connections.",
    items: ["Performance QA", "Accessibility", "Analytics", "Launch QA"],
  },
] as const;

const accents = ["#c6f24e", "#7dd3fc", "#f0abfc", "#f6c14a", "#67e8f9", "#f97316"];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const boundsRef = useRef<DOMRect | null>(null);
  const frameRef = useRef<number | null>(null);
  const latestPointer = useRef({ x: 0, y: 0 });
  const accent = project.accent ?? accents[index % accents.length];

  const canTilt = () =>
    window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches;

  const applyTilt = () => {
    frameRef.current = null;
    const card = cardRef.current;
    const rect = boundsRef.current;
    if (!card || !rect) return;

    const px = (latestPointer.current.x - rect.left) / rect.width;
    const py = (latestPointer.current.y - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 8;
    const rotateX = (0.5 - py) * 7;

    gsap.to(card, {
      rotateX,
      rotateY,
      scale: 1.012,
      duration: 0.42,
      ease: "power3.out",
      overwrite: true,
    });
  };

  const onPointerEnter = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!canTilt() || event.pointerType === "touch") return;
    boundsRef.current = event.currentTarget.getBoundingClientRect();
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!boundsRef.current || !canTilt() || event.pointerType === "touch") return;
    latestPointer.current = { x: event.clientX, y: event.clientY };
    if (frameRef.current == null) frameRef.current = requestAnimationFrame(applyTilt);
  };

  const reset = () => {
    boundsRef.current = null;
    if (frameRef.current != null) cancelAnimationFrame(frameRef.current);
    frameRef.current = null;
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.55,
      ease: "power3.out",
      overwrite: true,
    });
  };

  return (
    <article data-project-card className="min-w-0 [perspective:1400px]">
      <div
        ref={cardRef}
        onPointerEnter={onPointerEnter}
        onPointerMove={onPointerMove}
        onPointerLeave={reset}
        onFocusCapture={() => {
          if (cardRef.current) gsap.to(cardRef.current, { scale: 1.01, duration: 0.3, ease: "power3.out" });
        }}
        onBlurCapture={reset}
        className="group relative overflow-hidden rounded-[30px] border border-white/[0.09] bg-[#0d0d12] shadow-[0_32px_90px_-52px_rgba(0,0,0,.95)] transition-colors duration-500 hover:border-white/[0.18]"
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
      >
        <Link
          to={`/portfolio/${project.slug}/`}
          className="block focus:outline-none"
          aria-label={`Open ${project.name} website sample`}
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-[#101017]">
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.name} website design sample`}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-top opacity-90 transition-[transform,filter,opacity] duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.025] group-hover:opacity-100"
                style={{ transform: "translateZ(28px) scale(1.015)", willChange: "transform" }}
              />
            ) : (
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle at 72% 20%, ${accent}44, transparent 25%), linear-gradient(135deg,#12121a,#09090d 68%)`,
                  transform: "translateZ(24px)",
                }}
              >
                <div className="absolute inset-8 rounded-[24px] border border-white/10 bg-white/[0.025] p-7">
                  <div className="flex gap-2">
                    <span className="h-2 w-2 rounded-full bg-white/40" />
                    <span className="h-2 w-2 rounded-full bg-white/15" />
                    <span className="h-2 w-2 rounded-full bg-white/10" />
                  </div>
                  <div className="mt-12 max-w-[80%] text-[clamp(28px,4vw,56px)] font-semibold leading-[.92] tracking-[-.05em] text-white">
                    {project.name}
                  </div>
                </div>
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-black/10" />
            <div
              className="absolute -right-14 -top-14 h-48 w-48 rounded-full blur-[70px] opacity-20 transition-opacity duration-500 group-hover:opacity-35"
              style={{ background: accent }}
            />

            <div
              className="absolute left-5 top-5 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.22em] text-white/60 sm:left-6 sm:top-6"
              style={{ transform: "translateZ(42px)" }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span className="h-px w-6 bg-white/30" />
              <span>{project.industry}</span>
            </div>

            <div
              className="absolute bottom-5 right-5 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-md transition-[background-color,color,transform] duration-300 group-hover:scale-105 sm:bottom-6 sm:right-6"
              style={{ transform: "translateZ(52px)" }}
            >
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </div>
          </div>

          <div className="grid gap-4 p-6 sm:p-7 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h3 className="text-[clamp(24px,2.4vw,34px)] font-semibold leading-none tracking-[-.04em] text-white">
                {project.name}
              </h3>
              <p className="mt-3 max-w-[48ch] text-sm leading-6 text-white/48">{project.summary}</p>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[.18em] text-white/35">{project.location}</div>
          </div>
        </Link>
      </div>
    </article>
  );
}

export function InteractivePortfolioPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [sceneRoot, setSceneRoot] = useState<HTMLElement | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("work");

  usePageMeta(
    "Erwin Valles — Interactive Portfolio",
    "Web design, frontend and SEO portfolio by Erwin Valles, presented as a smooth-scroll interactive experience.",
  );

  useEffect(() => {
    const meta = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const previous = meta?.content;
    if (meta) meta.content = "noindex,nofollow";
    return () => {
      if (meta && previous) meta.content = previous;
    };
  }, []);

  useEffect(() => {
    setSceneRoot(rootRef.current);
  }, []);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const previousScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";

    const onNativeScroll = () => setScrolled(window.scrollY > 56);
    window.addEventListener("scroll", onNativeScroll, { passive: true });
    onNativeScroll();

    if (reduceMotion) {
      ScrollTrigger.refresh();
      return () => {
        window.removeEventListener("scroll", onNativeScroll);
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
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      const hero = root.querySelector<HTMLElement>("[data-ip-hero]");
      const heroCopy = root.querySelector<HTMLElement>("[data-ip-hero-copy]");
      const heroPanel = root.querySelector<HTMLElement>("[data-ip-hero-panel]");
      const heroGhost = root.querySelector<HTMLElement>("[data-ip-hero-ghost]");

      mm.add("(min-width: 768px)", () => {
        if (hero && heroCopy) {
          gsap.to(heroCopy, {
            yPercent: -18,
            z: -180,
            rotateX: 8,
            opacity: 0.16,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom 18%",
              scrub: 1,
            },
          });
        }

        if (hero && heroPanel) {
          gsap.to(heroPanel, {
            yPercent: 20,
            z: 130,
            rotateX: -8,
            rotateY: -9,
            scale: 0.94,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
        }

        if (hero && heroGhost) {
          gsap.to(heroGhost, {
            xPercent: 14,
            yPercent: -12,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "70% top",
              scrub: 1,
            },
          });
        }

        const about = root.querySelector<HTMLElement>("[data-ip-about]");
        const aboutLabel = root.querySelector<HTMLElement>("[data-ip-about-label]");
        if (about && aboutLabel) {
          ScrollTrigger.create({
            trigger: about,
            start: "top 18%",
            end: "bottom 55%",
            pin: aboutLabel,
            pinSpacing: false,
          });
        }
      });

      const revealItems = Array.from(root.querySelectorAll<HTMLElement>("[data-ip-reveal]"));
      revealItems.forEach((item) => {
        gsap.fromTo(
          item,
          { y: 42, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      const projectCards = Array.from(root.querySelectorAll<HTMLElement>("[data-project-card]"));
      projectCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            y: 72,
            opacity: 0,
            rotateX: 8,
            rotateY: index % 2 === 0 ? -5 : 5,
            z: -90,
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            rotateY: 0,
            z: 0,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 96%",
              end: "top 68%",
              scrub: 0.75,
            },
          },
        );
      });

      ["about", "work", "skills", "contact"].forEach((id) => {
        const section = root.querySelector<HTMLElement>(`#${id}`);
        if (!section) return;
        ScrollTrigger.create({
          trigger: section,
          start: "top 48%",
          end: "bottom 48%",
          onEnter: () => setActiveSection(id),
          onEnterBack: () => setActiveSection(id),
        });
      });
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
      }, 140);
    };
    window.addEventListener("resize", onResize, { passive: true });

    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener("scroll", onNativeScroll);
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

  const navItems = [
    ["work", "Work"],
    ["about", "About"],
    ["skills", "Skills"],
    ["contact", "Contact"],
  ] as const;

  return (
    <div
      ref={rootRef}
      className="relative min-h-screen overflow-x-clip bg-[#08080d] text-[#f5f5ef]"
      style={{ fontFamily: '"Space Grotesk", Inter, ui-sans-serif, system-ui, sans-serif' }}
    >
      <ScrollThreeScene root={sceneRoot} />

      <nav
        aria-label="Portfolio navigation"
        className={`fixed left-1/2 top-4 z-50 flex w-[calc(100%-24px)] max-w-[1120px] -translate-x-1/2 items-center justify-between rounded-full border px-3 py-2.5 transition-all duration-500 sm:top-5 sm:w-[calc(100%-40px)] sm:px-4 ${
          scrolled
            ? "border-white/10 bg-[#0a0a0f]/78 shadow-[0_12px_50px_-28px_rgba(0,0,0,.9)] backdrop-blur-xl"
            : "border-white/[0.07] bg-black/10 backdrop-blur-sm"
        }`}
      >
        <a
          href="#top"
          className="grid h-9 w-9 place-items-center rounded-full bg-white text-[11px] font-bold tracking-[-.03em] text-black transition-transform duration-300 hover:scale-105"
          aria-label="Back to top"
        >
          EV
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`rounded-full px-4 py-2 text-[12px] font-medium transition-colors duration-300 ${
                activeSection === id ? "bg-white/[0.08] text-white" : "text-white/45 hover:text-white"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href={`mailto:${site.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-[#c6f24e] px-4 py-2 text-[11px] font-semibold text-[#090b08] transition-[transform,filter] duration-300 hover:scale-[1.03] hover:brightness-105"
        >
          Start a project
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </nav>

      <main id="top" className="relative z-10">
        <section
          data-ip-hero
          className="relative min-h-[100svh] overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:px-10"
          style={{ perspective: "1500px" }}
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:64px_64px]" />
          <div
            data-ip-hero-ghost
            className="pointer-events-none absolute -left-[4vw] top-[20%] hidden whitespace-nowrap text-[clamp(110px,18vw,300px)] font-semibold leading-none tracking-[-.07em] text-white/[0.025] md:block"
            aria-hidden="true"
            style={{ willChange: "transform,opacity" }}
          >
            WEB / SEO / FRONTEND
          </div>

          <div className="relative mx-auto grid min-h-[calc(100svh-144px)] max-w-[1280px] items-end gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,.62fr)] lg:gap-16">
            <div data-ip-hero-copy className="pb-4 [transform-style:preserve-3d]" style={{ willChange: "transform,opacity" }}>
              <div className="mb-8 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[.22em] text-white/48">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#c6f24e] shadow-[0_0_18px_rgba(198,242,78,.75)]" />
                  Available for select projects
                </span>
                <span>Pampanga, Philippines</span>
              </div>

              <h1 className="max-w-[1050px] text-[clamp(48px,9vw,120px)] font-semibold leading-[.88] tracking-[-.062em] text-white">
                ERWIN
                <br />
                <span className="text-white/24">VALLES.</span>
              </h1>

              <div className="mt-9 grid max-w-[820px] gap-7 sm:grid-cols-[1fr_auto] sm:items-end">
                <p className="max-w-[58ch] text-[clamp(16px,1.7vw,22px)] leading-[1.45] text-white/58">
                  I design and build websites that make businesses easier to trust, find and contact. Web design, frontend and SEO in one workflow.
                </p>
                <a
                  href="#work"
                  className="group inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.2em] text-white/50 transition-colors hover:text-white"
                >
                  View selected work
                  <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div
              data-ip-hero-panel
              className="relative mb-2 overflow-hidden rounded-[32px] border border-white/[0.1] bg-white/[0.035] p-6 shadow-[0_28px_110px_-55px_rgba(0,0,0,.95)] backdrop-blur-md sm:p-7"
              style={{ transformStyle: "preserve-3d", willChange: "transform" }}
            >
              <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-[#7dd3fc]/10 blur-[60px]" />
              <div className="absolute bottom-0 left-0 h-36 w-36 rounded-full bg-[#c6f24e]/10 blur-[60px]" />

              <div className="relative flex items-start justify-between gap-6">
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-[.22em] text-white/35">Current focus</div>
                  <div className="mt-3 text-2xl font-semibold leading-tight tracking-[-.04em] text-white">
                    Better business websites.
                  </div>
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[.16em] text-white/45">2026</span>
              </div>

              <div className="relative mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-[22px] bg-white/[0.08]">
                <div className="bg-[#0c0c12] p-5">
                  <div className="text-[clamp(28px,4vw,46px)] font-semibold leading-none tracking-[-.05em] text-white">200+</div>
                  <div className="mt-2 text-xs leading-5 text-white/35">websites designed & launched</div>
                </div>
                <div className="bg-[#0c0c12] p-5">
                  <div className="text-[clamp(28px,4vw,46px)] font-semibold leading-none tracking-[-.05em] text-[#c6f24e]">3</div>
                  <div className="mt-2 text-xs leading-5 text-white/35">disciplines in one build process</div>
                </div>
              </div>

              <div className="relative mt-6 flex items-center justify-between border-t border-white/[0.08] pt-5 text-xs text-white/38">
                <span>Design · Frontend · SEO</span>
                <span className="font-mono text-[9px] uppercase tracking-[.18em]">Scroll ↓</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" data-ip-about className="relative border-t border-white/[0.07] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
          <div className="mx-auto grid max-w-[1280px] gap-14 md:grid-cols-[220px_minmax(0,1fr)] lg:gap-24">
            <div data-ip-about-label className="h-fit">
              <div className="font-mono text-[10px] uppercase tracking-[.22em] text-[#c6f24e]">01 / About</div>
            </div>

            <div>
              <h2 data-ip-reveal className="max-w-[950px] text-[clamp(36px,6vw,78px)] font-medium leading-[.98] tracking-[-.05em] text-white">
                I care about what the website does after the first impression.
              </h2>

              <div className="mt-12 grid gap-8 border-t border-white/[0.08] pt-8 md:grid-cols-2 md:gap-14">
                <p data-ip-reveal className="max-w-[58ch] text-[17px] leading-8 text-white/50">
                  I work across interface design, frontend implementation and SEO structure. That means the visual direction, code quality and search foundations are planned together instead of handed between separate teams.
                </p>
                <p data-ip-reveal className="max-w-[58ch] text-[17px] leading-8 text-white/50">
                  The goal is simple: make the business look credible, make the site easy to use, keep it fast on mobile, and make the next action obvious.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="relative border-t border-white/[0.07] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-14 grid gap-8 md:grid-cols-[1fr_auto] md:items-end lg:mb-20">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[.22em] text-[#c6f24e]">02 / Selected work</div>
                <h2 data-ip-reveal className="mt-5 max-w-[850px] text-[clamp(42px,7vw,92px)] font-semibold leading-[.9] tracking-[-.055em] text-white">
                  Websites with a job to do.
                </h2>
              </div>
              <p data-ip-reveal className="max-w-[42ch] text-sm leading-6 text-white/40 md:text-right">
                Six samples across BPO, hospitality, real estate, healthcare and logistics. Move your cursor over a project on desktop.
              </p>
            </div>

            <div className="grid gap-7 md:grid-cols-2 lg:gap-9" style={{ perspective: "1500px" }}>
              {selectedProjects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="relative border-t border-white/[0.07] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,.7fr)_minmax(0,1.3fr)] lg:gap-24">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[.22em] text-[#c6f24e]">03 / Capabilities</div>
                <h2 data-ip-reveal className="mt-5 max-w-[600px] text-[clamp(40px,6vw,76px)] font-semibold leading-[.92] tracking-[-.05em] text-white">
                  One build process. Fewer handoffs.
                </h2>
              </div>

              <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
                {skills.map((skill) => (
                  <div key={skill.number} data-ip-reveal className="group grid gap-5 py-7 sm:grid-cols-[54px_1fr] sm:py-8">
                    <div className="font-mono text-[10px] tracking-[.18em] text-white/28">{skill.number}</div>
                    <div>
                      <div className="grid gap-4 md:grid-cols-[210px_1fr] md:gap-8">
                        <h3 className="text-2xl font-medium tracking-[-.035em] text-white transition-colors duration-300 group-hover:text-[#c6f24e]">
                          {skill.title}
                        </h3>
                        <p className="max-w-[52ch] text-sm leading-6 text-white/42">{skill.text}</p>
                      </div>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {skill.items.map((item) => (
                          <span key={item} className="rounded-full border border-white/[0.09] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[.13em] text-white/34">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden border-t border-white/[0.07] px-5 pb-12 pt-20 sm:px-8 sm:pt-24 lg:px-10 lg:pt-32">
          <div className="pointer-events-none absolute bottom-[-18vw] right-[-6vw] h-[42vw] w-[42vw] rounded-full border border-[#c6f24e]/10" aria-hidden="true" />
          <div className="pointer-events-none absolute bottom-[-14vw] right-[-2vw] h-[34vw] w-[34vw] rounded-full border border-white/[0.045]" aria-hidden="true" />

          <div className="relative mx-auto max-w-[1280px]">
            <div className="font-mono text-[10px] uppercase tracking-[.22em] text-[#c6f24e]">04 / Contact</div>
            <h2 data-ip-reveal className="mt-6 max-w-[1050px] text-[clamp(48px,8.2vw,112px)] font-semibold leading-[.88] tracking-[-.06em] text-white">
              Need a better website?
              <br />
              <span className="text-white/22">Let&rsquo;s make it useful.</span>
            </h2>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${site.email}`}
                className="group inline-flex items-center justify-between gap-5 rounded-full bg-[#c6f24e] px-6 py-4 text-sm font-semibold text-[#08080d] transition-[transform,filter] duration-300 hover:scale-[1.02] hover:brightness-105"
              >
                <span className="inline-flex items-center gap-3">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {site.email}
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>

              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-between gap-5 rounded-full border border-white/[0.12] bg-white/[0.035] px-6 py-4 text-sm font-medium text-white transition-[background-color,border-color,transform] duration-300 hover:scale-[1.02] hover:border-white/25 hover:bg-white/[0.06]"
              >
                <span className="inline-flex items-center gap-3">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-24 flex flex-col gap-5 border-t border-white/[0.08] py-7 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
              <span>Erwin Valles · Web Designer & SEO Specialist</span>
              <span>{site.location}</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
