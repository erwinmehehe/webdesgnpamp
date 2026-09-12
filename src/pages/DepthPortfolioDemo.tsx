import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { ArrowDownRight, ArrowUpRight, Mail, MoveRight } from "lucide-react";
import { usePageMeta } from "@/router";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Northstar Commerce",
    role: "Frontend Lead",
    year: "2026",
    problem: "Mobile checkout leaked intent at the final two steps.",
    outcome: "+18% checkout completion",
    accent: "#c6f24e",
    gradient: "linear-gradient(135deg,#151a10 0%,#0d0f0c 54%,#263a13 100%)",
    eyebrow: "Commerce / React",
  },
  {
    title: "Atlas Ops",
    role: "Design Engineer",
    year: "2026",
    problem: "Dense operations data took too long to scan and act on.",
    outcome: "42% fewer clicks to key tasks",
    accent: "#7dd3fc",
    gradient: "linear-gradient(135deg,#09141c 0%,#0a0d12 55%,#12314a 100%)",
    eyebrow: "SaaS / TypeScript",
  },
  {
    title: "Fieldnote",
    role: "Frontend Developer",
    year: "2025",
    problem: "Editorial layouts broke rhythm across smaller screens.",
    outcome: "1.4s LCP on mobile 4G",
    accent: "#f0abfc",
    gradient: "linear-gradient(135deg,#1d101d 0%,#0e0b10 56%,#3a173a 100%)",
    eyebrow: "Publishing / Vite",
  },
  {
    title: "Beacon Health",
    role: "UI Engineer",
    year: "2025",
    problem: "Appointment booking asked too much before showing value.",
    outcome: "5 steps reduced to 3",
    accent: "#86efac",
    gradient: "linear-gradient(135deg,#0d1a13 0%,#0a0d0b 54%,#123825 100%)",
    eyebrow: "Health / Accessibility",
  },
  {
    title: "Meridian Capital",
    role: "Frontend Developer",
    year: "2025",
    problem: "Investor reporting felt static, slow and hard to compare.",
    outcome: "12 reusable data modules",
    accent: "#fbbf24",
    gradient: "linear-gradient(135deg,#1e1708 0%,#0d0c0a 55%,#3b2b0c 100%)",
    eyebrow: "Fintech / Data UI",
  },
  {
    title: "Tide Studio",
    role: "Creative Developer",
    year: "2024",
    problem: "The portfolio looked polished but had no sense of depth.",
    outcome: "60fps motion on mid-range mobile",
    accent: "#a5b4fc",
    gradient: "linear-gradient(135deg,#121329 0%,#0b0b11 56%,#232657 100%)",
    eyebrow: "Studio / Motion",
  },
] as const;

const tech = [
  "React",
  "TypeScript",
  "Vite",
  "Tailwind",
  "GSAP",
  "Lenis",
  "Accessibility",
  "Design Systems",
  "Performance",
  "Motion",
  "Testing",
  "WebGL",
];

function ProjectArtwork({ index, accent }: { index: number; accent: string }) {
  const patterns = [
    <>
      <div className="absolute left-[9%] top-[12%] h-[58%] w-[58%] rounded-[30px] border border-white/10 bg-black/20 backdrop-blur-sm" />
      <div className="absolute right-[8%] top-[20%] h-[44%] w-[38%] rounded-[24px] border border-white/10 bg-white/[0.045]" />
      <div className="absolute bottom-[11%] left-[16%] h-3 w-[54%] rounded-full bg-white/10" />
      <div className="absolute bottom-[18%] left-[16%] h-3 w-[35%] rounded-full" style={{ background: `${accent}66` }} />
    </>,
    <>
      <div className="absolute inset-x-[8%] top-[12%] grid grid-cols-5 gap-2">
        {[0, 1, 2, 3, 4].map((item) => (
          <div key={item} className="h-16 rounded-2xl border border-white/10 bg-white/[0.035]" />
        ))}
      </div>
      <div className="absolute inset-x-[8%] bottom-[12%] h-[48%] rounded-[26px] border border-white/10 bg-black/20 p-5">
        <div className="flex h-full items-end gap-3">
          {[36, 68, 48, 82, 58, 92, 72].map((height, item) => (
            <div key={item} className="flex-1 rounded-t-lg" style={{ height: `${height}%`, background: item === 5 ? accent : "rgba(255,255,255,.12)" }} />
          ))}
        </div>
      </div>
    </>,
    <>
      <div className="absolute left-[9%] top-[14%] text-[clamp(54px,7vw,112px)] font-semibold leading-none tracking-[-.07em] text-white/10">Aa</div>
      <div className="absolute bottom-[14%] left-[10%] right-[10%] grid grid-cols-[1.3fr_.7fr] gap-4">
        <div className="h-36 rounded-[24px] border border-white/10 bg-white/[0.04]" />
        <div className="h-36 rounded-[24px] border border-white/10" style={{ background: `${accent}22` }} />
      </div>
    </>,
    <>
      <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
      <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border" style={{ borderColor: `${accent}88` }} />
      <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: `${accent}33` }} />
      <div className="absolute inset-x-[12%] bottom-[12%] flex justify-between">
        {[0, 1, 2, 3].map((item) => <span key={item} className="h-2 w-[18%] rounded-full bg-white/10" />)}
      </div>
    </>,
    <>
      <div className="absolute left-[9%] top-[14%] w-[42%] space-y-3">
        <div className="h-4 w-2/3 rounded-full" style={{ background: accent }} />
        <div className="h-3 w-full rounded-full bg-white/12" />
        <div className="h-3 w-4/5 rounded-full bg-white/8" />
      </div>
      <div className="absolute bottom-[11%] right-[8%] h-[58%] w-[56%] rounded-[28px] border border-white/10 bg-black/20">
        <div className="absolute inset-x-5 bottom-5 top-10 flex items-end gap-2">
          {[54, 82, 44, 72, 94].map((height, item) => <span key={item} className="flex-1 rounded-t-md bg-white/10" style={{ height: `${height}%` }} />)}
        </div>
      </div>
    </>,
    <>
      <div className="absolute left-[10%] top-[15%] h-[66%] w-[80%] -rotate-3 rounded-[32px] border border-white/10 bg-white/[0.035]" />
      <div className="absolute left-[16%] top-[21%] h-[66%] w-[76%] rotate-3 rounded-[32px] border border-white/10 bg-black/25" />
      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: `${accent}2f`, boxShadow: `0 0 80px ${accent}30` }} />
    </>,
  ];

  return <div aria-hidden="true" className="absolute inset-0">{patterns[index % patterns.length]}</div>;
}

export function DepthPortfolioDemoPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);

  usePageMeta(
    "Alex Reyes — Frontend Developer Portfolio",
    "A smooth-scroll 3D frontend developer portfolio demo built with React, Vite, Tailwind, GSAP and Lenis.",
  );

  useEffect(() => {
    const meta = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const previous = meta?.content;
    if (meta) meta.content = "noindex,nofollow";
    return () => {
      if (meta && previous) meta.content = previous;
    };
  }, []);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const previousScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";

    if (reduceMotion) {
      ScrollTrigger.refresh();
      return () => {
        document.documentElement.style.scrollBehavior = previousScrollBehavior;
      };
    }

    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
    });

    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      const hero = root.querySelector<HTMLElement>("[data-dp-hero]");
      const headline = root.querySelector<HTMLElement>("[data-dp-headline]");
      const layers = Array.from(root.querySelectorAll<HTMLElement>("[data-dp-hero-layer]"));
      const layerY = [8, -10, 13, -16, 21];
      const layerZ = [-120, -55, 10, 75, 130];

      if (hero) {
        layers.forEach((layer, index) => {
          gsap.to(layer, {
            yPercent: layerY[index] ?? 10,
            z: layerZ[index] ?? 0,
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
            yPercent: -15,
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

      const revealItems = Array.from(root.querySelectorAll<HTMLElement>("[data-dp-reveal]"));
      revealItems.forEach((item) => {
        gsap.fromTo(
          item,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top 94%",
              end: "top 74%",
              scrub: 0.7,
            },
          },
        );
      });

      mm.add("(min-width: 768px)", () => {
        const stackCards = Array.from(root.querySelectorAll<HTMLElement>("[data-dp-stack-card]"));
        stackCards.forEach((card, index) => {
          ScrollTrigger.create({
            trigger: card,
            start: "top 58%",
            end: "bottom 42%",
            onEnter: () => setActiveProject(index),
            onEnterBack: () => setActiveProject(index),
          });

          if (index < stackCards.length - 1) {
            gsap.to(card, {
              scale: 0.93,
              opacity: 0.38,
              rotateX: -6,
              z: -110,
              ease: "none",
              scrollTrigger: {
                trigger: stackCards[index + 1],
                start: "top 88%",
                end: "top 34%",
                scrub: 1,
              },
            });
          }
        });

        const reel = root.querySelector<HTMLElement>("[data-dp-reel]");
        const track = root.querySelector<HTMLElement>("[data-dp-reel-track]");
        const ghost = root.querySelector<HTMLElement>("[data-dp-reel-ghost]");
        const reelCards = Array.from(root.querySelectorAll<HTMLElement>("[data-dp-reel-card]"));

        if (reel && track) {
          const distance = () => Math.max(0, track.scrollWidth - reel.clientWidth + 80);
          const tween = gsap.to(track, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: reel,
              start: "top top",
              end: () => `+=${Math.max(window.innerWidth * 1.8, distance() * 1.18)}`,
              pin: true,
              pinSpacing: true,
              scrub: 1,
              invalidateOnRefresh: true,
              anticipatePin: 1,
              onUpdate: () => {
                const center = window.innerWidth / 2;
                reelCards.forEach((card) => {
                  const rect = card.getBoundingClientRect();
                  const cardCenter = rect.left + rect.width / 2;
                  const normalized = gsap.utils.clamp(-1, 1, (cardCenter - center) / center);
                  gsap.set(card, {
                    rotateY: normalized * -16,
                    z: -Math.abs(normalized) * 88,
                  });
                });
              },
            },
          });

          if (ghost) {
            gsap.to(ghost, {
              xPercent: 18,
              ease: "none",
              scrollTrigger: {
                trigger: reel,
                start: "top top",
                end: () => `+=${Math.max(window.innerWidth * 1.8, distance() * 1.18)}`,
                scrub: 1,
              },
            });
          }

          void tween;
        }
      });

      const techSection = root.querySelector<HTMLElement>("[data-dp-tech]");
      const techRows = Array.from(root.querySelectorAll<HTMLElement>("[data-dp-tech-row]"));
      if (techSection && techRows.length === 2) {
        gsap.fromTo(
          techRows[0],
          { xPercent: 3 },
          {
            xPercent: -14,
            ease: "none",
            scrollTrigger: { trigger: techSection, start: "top bottom", end: "bottom top", scrub: 1 },
          },
        );
        gsap.fromTo(
          techRows[1],
          { xPercent: -13 },
          {
            xPercent: 5,
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
            if (image.complete) return resolve();
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
      }, 150);
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
    <div ref={rootRef} className="dp-page min-h-screen overflow-x-clip bg-[#08080d] text-[#f7f8f2]">
      <style>{`
        .dp-page { font-family: "Space Grotesk", ui-sans-serif, system-ui, sans-serif; }
        .dp-page .dp-mono { font-family: "JetBrains Mono", ui-monospace, monospace; }
        .dp-page .dp-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
        .dp-page .dp-scrollbar::-webkit-scrollbar { display: none; }
        .dp-page :focus-visible { outline: 2px solid #c6f24e; outline-offset: 4px; }
        @media (max-width: 767px) {
          .dp-page [data-dp-stack-card] { position: relative !important; top: auto !important; transform: none !important; opacity: 1 !important; }
          .dp-page [data-dp-reel-track] { transform: none !important; }
          .dp-page [data-dp-reel-card] { transform: none !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .dp-page [data-dp-hero-layer],
          .dp-page [data-dp-headline],
          .dp-page [data-dp-stack-card],
          .dp-page [data-dp-reel-track],
          .dp-page [data-dp-reel-card],
          .dp-page [data-dp-tech-row],
          .dp-page [data-dp-reveal] { transform: none !important; opacity: 1 !important; }
          .dp-page [data-dp-stack-card] { position: relative !important; top: auto !important; }
        }
      `}</style>

      <a href="#dp-main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[#c6f24e] focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-[#08080d]">
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#08080d]/75 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-5 sm:px-8">
          <a href="#top" className="dp-mono text-[11px] font-medium uppercase tracking-[.2em] text-white transition-colors duration-300 hover:text-[#c6f24e]">
            AR / 26
          </a>
          <nav aria-label="Portfolio navigation" className="flex items-center gap-5 sm:gap-8">
            <a href="#work" className="dp-mono text-[10px] uppercase tracking-[.18em] text-white/55 transition-colors duration-300 hover:text-white">Work</a>
            <a href="#stack" className="dp-mono hidden text-[10px] uppercase tracking-[.18em] text-white/55 transition-colors duration-300 hover:text-white sm:inline">Stack</a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2 text-xs font-medium text-white transition-[border-color,background-color,color] duration-300 hover:border-[#c6f24e]/60 hover:bg-[#c6f24e] hover:text-[#08080d]">
              Contact <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </header>

      <main id="dp-main">
        <section id="top" data-dp-hero className="relative min-h-[100svh] overflow-hidden pt-16" style={{ perspective: "1600px" }}>
          <div data-dp-hero-layer className="pointer-events-none absolute inset-0 [will-change:transform]" aria-hidden="true">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_22%,rgba(198,242,78,.10),transparent_25%),radial-gradient(circle_at_78%_38%,rgba(125,211,252,.09),transparent_28%),radial-gradient(circle_at_68%_82%,rgba(240,171,252,.07),transparent_24%)]" />
            <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:64px_64px]" />
          </div>

          <div data-dp-hero-layer className="pointer-events-none absolute left-1/2 top-[15%] -translate-x-1/2 whitespace-nowrap text-[clamp(82px,18vw,260px)] font-semibold leading-none tracking-[-.07em] text-white/[0.025] [will-change:transform]" aria-hidden="true">
            FRONTEND
          </div>

          <div className="relative mx-auto grid min-h-[calc(100svh-64px)] max-w-[1280px] items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.1fr_.9fr] md:py-24">
            <div data-dp-headline className="relative z-20 [will-change:transform,opacity]">
              <div className="mb-7 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 dp-mono text-[9px] uppercase tracking-[.18em] text-white/70">
                  <span className="h-2 w-2 rounded-full bg-[#c6f24e] shadow-[0_0_18px_rgba(198,242,78,.6)]" />
                  Available for selected builds
                </span>
                <span className="dp-mono text-[9px] uppercase tracking-[.18em] text-white/35">Pampanga, PH · GMT+8</span>
              </div>

              <p className="dp-mono mb-5 text-[10px] uppercase tracking-[.24em] text-[#c6f24e]">Frontend Developer / Creative Engineer</p>
              <h1 className="max-w-[10ch] text-[clamp(40px,9vw,120px)] font-semibold leading-[.9] tracking-[-.055em] text-white">
                ALEX<br />REYES
              </h1>
              <p className="mt-7 max-w-[58ch] text-[clamp(16px,2vw,20px)] leading-7 text-white/62">
                I build fast interfaces with enough motion to make hierarchy obvious, not noisy.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#work" className="group inline-flex items-center gap-3 rounded-full bg-[#c6f24e] px-6 py-3.5 text-sm font-semibold text-[#08080d] transition-transform duration-300 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1">
                  View selected work <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" aria-hidden="true" />
                </a>
                <a href="#contact" className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.025] px-6 py-3.5 text-sm font-medium text-white transition-[border-color,background-color] duration-300 hover:border-white/28 hover:bg-white/[0.06]">
                  Start a project
                </a>
              </div>

              <dl className="mt-12 grid max-w-xl grid-cols-3 gap-5 border-t border-white/10 pt-6">
                <div>
                  <dt className="dp-mono text-[9px] uppercase tracking-[.18em] text-white/35">Selected builds</dt>
                  <dd className="mt-2 text-2xl font-semibold tracking-[-.04em] text-white">06</dd>
                </div>
                <div>
                  <dt className="dp-mono text-[9px] uppercase tracking-[.18em] text-white/35">Perf target</dt>
                  <dd className="mt-2 text-2xl font-semibold tracking-[-.04em] text-white">95+</dd>
                </div>
                <div>
                  <dt className="dp-mono text-[9px] uppercase tracking-[.18em] text-white/35">Core stack</dt>
                  <dd className="mt-2 text-2xl font-semibold tracking-[-.04em] text-white">R / TS</dd>
                </div>
              </dl>
            </div>

            <div className="relative z-10 mx-auto w-full max-w-[470px] md:ml-auto">
              <div data-dp-hero-layer className="absolute -left-8 top-8 z-20 rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3 backdrop-blur-xl [will-change:transform] sm:-left-14">
                <div className="dp-mono text-[8px] uppercase tracking-[.18em] text-white/35">Current focus</div>
                <div className="mt-1 text-sm font-medium text-white">Motion systems that stay fast.</div>
              </div>

              <div data-dp-hero-layer className="relative z-10 overflow-hidden rounded-[38px] border border-white/10 bg-white/[0.035] p-2 shadow-[0_40px_100px_-48px_rgba(0,0,0,.95)] [will-change:transform]">
                <img
                  src="/depth-portfolio/portrait.svg"
                  alt="Abstract portrait placeholder for Alex Reyes"
                  width="960"
                  height="1200"
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[4/5] w-full rounded-[32px] object-cover"
                />
              </div>

              <div data-dp-hero-layer className="absolute -bottom-6 right-2 z-20 w-[72%] rounded-[24px] border border-white/10 bg-[#0d0d14]/80 p-5 backdrop-blur-xl [will-change:transform] sm:-right-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="dp-mono text-[8px] uppercase tracking-[.18em] text-white/35">Proof</div>
                    <div className="mt-2 text-sm leading-5 text-white/72">Interfaces tuned for mobile first, keyboard access and real load budgets.</div>
                  </div>
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[#7dd3fc]/25 bg-[#7dd3fc]/10 text-[#7dd3fc]">
                    <span className="dp-mono text-[10px]">60fps</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a href="#work" className="absolute bottom-7 left-1/2 z-30 -translate-x-1/2 dp-mono text-[9px] uppercase tracking-[.22em] text-white/32 transition-colors duration-300 hover:text-white">
            Scroll to work ↓
          </a>
        </section>

        <section id="work" className="relative border-t border-white/[0.07] px-5 py-16 sm:px-8 md:py-[120px]">
          <div className="mx-auto max-w-[1280px]">
            <div data-dp-reveal className="mb-14 flex flex-col gap-7 md:mb-20 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="dp-mono text-[10px] uppercase tracking-[.22em] text-[#c6f24e]">Selected work</p>
                <h2 className="mt-4 text-[clamp(38px,6vw,76px)] font-semibold leading-[.94] tracking-[-.05em] text-white">Six builds.<br /><span className="text-white/28">No filler.</span></h2>
              </div>
              <div className="flex items-center gap-4 md:pb-2">
                <span className="dp-mono text-[9px] uppercase tracking-[.18em] text-white/30">Live counter</span>
                <span aria-live="polite" className="dp-mono text-sm text-white"><span className="text-[#c6f24e]">{String(activeProject + 1).padStart(2, "0")}</span> / 06</span>
              </div>
            </div>

            <div className="relative" style={{ perspective: "1600px" }}>
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  data-dp-stack-card
                  className="relative mb-10 overflow-hidden rounded-[30px] border border-white/[0.09] bg-[#0d0d13] shadow-[0_34px_110px_-58px_rgba(0,0,0,.95)] md:sticky md:mb-[18vh] [transform-origin:top_center] [will-change:transform,opacity]"
                  style={{ top: `${88 + index * 14}px`, zIndex: index + 1 }}
                >
                  <div className="grid min-h-[68vh] md:grid-cols-[.86fr_1.14fr]">
                    <div className="flex flex-col justify-between p-6 sm:p-8 md:p-10">
                      <div>
                        <div className="flex items-center justify-between gap-4">
                          <span className="dp-mono text-[9px] uppercase tracking-[.18em]" style={{ color: project.accent }}>{String(index + 1).padStart(2, "0")}</span>
                          <span className="dp-mono text-[9px] uppercase tracking-[.18em] text-white/30">{project.year}</span>
                        </div>
                        <p className="dp-mono mt-10 text-[9px] uppercase tracking-[.2em] text-white/34">{project.eyebrow}</p>
                        <h3 className="mt-4 text-[clamp(34px,5vw,66px)] font-semibold leading-[.94] tracking-[-.05em] text-white">{project.title}</h3>
                        <p className="mt-4 text-sm text-white/45">{project.role}</p>
                      </div>

                      <div className="mt-12 space-y-7 border-t border-white/10 pt-7">
                        <div>
                          <div className="dp-mono text-[8px] uppercase tracking-[.2em] text-white/28">Problem</div>
                          <p className="mt-2 max-w-[44ch] text-[15px] leading-6 text-white/62">{project.problem}</p>
                        </div>
                        <div>
                          <div className="dp-mono text-[8px] uppercase tracking-[.2em] text-white/28">Outcome</div>
                          <p className="mt-2 text-[18px] font-medium tracking-[-.02em] text-white">{project.outcome}</p>
                        </div>
                      </div>
                    </div>

                    <div className="relative min-h-[360px] overflow-hidden border-t border-white/[0.07] md:min-h-full md:border-l md:border-t-0" style={{ background: project.gradient }}>
                      <ProjectArtwork index={index} accent={project.accent} />
                      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,.025),transparent_40%,rgba(0,0,0,.2))]" />
                      <a href="#contact" aria-label={`Discuss a project like ${project.title}`} className="group absolute bottom-6 right-6 grid h-14 w-14 place-items-center rounded-full border border-white/14 bg-black/30 text-white backdrop-blur-md transition-[transform,background-color,border-color] duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-black/50">
                        <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section data-dp-reel className="relative min-h-[100svh] overflow-hidden border-t border-white/[0.07] bg-[#0a0a0f] px-5 py-16 sm:px-8 md:flex md:items-center md:py-[120px]" style={{ perspective: "1600px" }}>
          <div data-dp-reel-ghost className="pointer-events-none absolute left-[2vw] top-[15%] whitespace-nowrap text-[clamp(76px,15vw,220px)] font-semibold leading-none tracking-[-.07em] text-white/[0.028] [will-change:transform]" aria-hidden="true">PLAYGROUND</div>
          <div className="mx-auto w-full max-w-[1280px]">
            <div className="mb-10 flex items-end justify-between gap-5 md:mb-14">
              <div data-dp-reveal>
                <p className="dp-mono text-[10px] uppercase tracking-[.22em] text-[#7dd3fc]">Interaction reel</p>
                <h2 className="mt-4 text-[clamp(36px,5vw,66px)] font-semibold leading-[.95] tracking-[-.05em] text-white">Motion should<br />explain the interface.</h2>
              </div>
              <span className="dp-mono hidden text-[9px] uppercase tracking-[.18em] text-white/28 md:block">Vertical scroll → horizontal motion</span>
            </div>

            <div className="-mx-5 overflow-x-auto px-5 dp-scrollbar snap-x snap-mandatory md:mx-0 md:overflow-visible md:px-0 md:snap-none">
              <div data-dp-reel-track className="flex w-max gap-5 pr-5 [will-change:transform] md:gap-7 md:pr-0">
                {projects.map((project, index) => (
                  <article key={`${project.title}-reel`} data-dp-reel-card className="relative h-[430px] w-[82vw] max-w-[430px] shrink-0 snap-center overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#101016] [transform-style:preserve-3d] [will-change:transform] sm:w-[62vw] md:h-[500px] md:w-[430px]">
                    <div className="absolute inset-0" style={{ background: project.gradient }}>
                      <ProjectArtwork index={index} accent={project.accent} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/8 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                      <div className="dp-mono text-[8px] uppercase tracking-[.18em]" style={{ color: project.accent }}>{project.role}</div>
                      <h3 className="mt-3 text-2xl font-semibold tracking-[-.04em] text-white">{project.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-white/52">{project.outcome}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="stack" data-dp-tech className="overflow-hidden border-t border-white/[0.07] py-16 md:py-[120px]">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
            <div data-dp-reveal className="mb-14 max-w-2xl">
              <p className="dp-mono text-[10px] uppercase tracking-[.22em] text-[#f0abfc]">Daily stack</p>
              <h2 className="mt-4 text-[clamp(38px,6vw,76px)] font-semibold leading-[.94] tracking-[-.05em] text-white">Tools change.<br /><span className="text-white/28">The bar doesn’t.</span></h2>
            </div>
          </div>

          <div className="space-y-4 overflow-hidden">
            <div data-dp-tech-row className="flex w-max gap-4 [will-change:transform]">
              {[...tech, ...tech].map((item, index) => (
                <span key={`a-${item}-${index}`} className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.025] px-5 py-3 dp-mono text-[10px] uppercase tracking-[.16em] text-white/55">{item}</span>
              ))}
            </div>
            <div data-dp-tech-row className="flex w-max gap-4 [will-change:transform]">
              {[...tech.slice().reverse(), ...tech.slice().reverse()].map((item, index) => (
                <span key={`b-${item}-${index}`} className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.025] px-5 py-3 dp-mono text-[10px] uppercase tracking-[.16em] text-white/40">{item}</span>
              ))}
            </div>
          </div>
        </section>

        <footer id="contact" className="border-t border-white/[0.07] px-5 py-16 sm:px-8 md:py-[120px]">
          <div className="mx-auto max-w-[1280px]">
            <div data-dp-reveal className="grid gap-12 md:grid-cols-[1fr_320px] md:items-end">
              <div>
                <p className="dp-mono text-[10px] uppercase tracking-[.22em] text-[#c6f24e]">Open for the right build</p>
                <h2 className="mt-5 max-w-[10ch] text-[clamp(44px,8vw,108px)] font-semibold leading-[.88] tracking-[-.06em] text-white">LET’S SHIP SOMETHING PEOPLE FEEL.</h2>
              </div>
              <div className="md:pb-2">
                <p className="max-w-[38ch] text-base leading-7 text-white/55">I’m best on product interfaces, design systems and motion-heavy frontends where performance still matters.</p>
                <a href="mailto:hello@example.com" className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#c6f24e] px-6 py-3.5 text-sm font-semibold text-[#08080d] transition-transform duration-300 hover:-translate-y-1">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  hello@example.com
                  <MoveRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-6 dp-mono text-[9px] uppercase tracking-[.18em] text-white/28 sm:flex-row sm:items-center sm:justify-between">
              <span>Alex Reyes · Frontend Developer</span>
              <span>React / TypeScript / Motion</span>
              <span>© 2026</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
