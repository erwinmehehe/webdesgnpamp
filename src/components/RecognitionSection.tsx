import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const recognition = [
  { name: "Awwwards", href: "https://www.awwwards.com/", type: "Design awards" },
  { name: "DesignRush", href: "https://www.designrush.com/", type: "Agency directory" },
  { name: "Clutch", href: "https://clutch.co/", type: "B2B directory" },
  { name: "GoodFirms", href: "https://www.goodfirms.co/", type: "Agency directory" },
  { name: "TechBehemoths", href: "https://techbehemoths.com/", type: "Tech directory" },
  { name: "The Manifest", href: "https://themanifest.com/", type: "B2B directory" },
  { name: "Sortlist", href: "https://www.sortlist.com/", type: "Agency marketplace" },
  { name: "CSS Design Awards", href: "https://www.cssdesignawards.com/", type: "Design awards" },
  { name: "CSS Winner", href: "https://www.csswinner.com/", type: "Design awards" },
  { name: "Web Guru Awards", href: "https://www.webguruawards.com/", type: "Design awards" },
];

export function RecognitionSection() {
  return (
    <section className="border-y border-white/[0.07] bg-white/[0.018] py-16 sm:py-20" aria-labelledby="recognition-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end lg:gap-16">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold-400">Awards &amp; recognition</p>
              <h2 id="recognition-heading" className="mt-4 max-w-xl font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl">
                Recognized across design and agency platforms.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-400 lg:justify-self-end">
              Web Design Pampanga has profiles, listings and recognition across established design award sites and agency directories.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 border-l border-t border-white/[0.08] sm:grid-cols-3 lg:grid-cols-5">
          {recognition.map((item, index) => (
            <Reveal key={item.name} delay={Math.min(index * 0.035, 0.25)}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-32 flex-col justify-between border-b border-r border-white/[0.08] bg-[#080a10]/60 p-5 transition-colors duration-300 hover:bg-white/[0.045] sm:min-h-36 sm:p-6"
                aria-label={`${item.name} - ${item.type}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="font-display text-lg font-semibold tracking-[-0.02em] text-white/90 transition-colors group-hover:text-gold-300 sm:text-xl">
                    {item.name}
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-700 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-400" aria-hidden="true" />
                </div>
                <span className="mt-8 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
                  {item.type}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
