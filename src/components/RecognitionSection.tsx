import { ArrowUpRight } from "lucide-react";

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
    <section
      id="recognition"
      className="border-y border-white/[0.08] bg-[#080a10] py-10 sm:py-12"
      aria-labelledby="recognition-heading"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold-400">Awards &amp; recognition</p>
            <h2 id="recognition-heading" className="mt-3 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Featured and listed across leading design and agency platforms.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-slate-400">
            Direct links to the platforms where Web Design Pampanga maintains listings, profiles or recognition.
          </p>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
          {recognition.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-24 flex-col justify-between border border-white/[0.09] bg-white/[0.025] p-4 transition hover:border-gold-400/30 hover:bg-white/[0.05]"
              aria-label={`${item.name} - ${item.type}`}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="font-display text-base font-semibold text-white sm:text-lg">{item.name}</span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-600 transition group-hover:text-gold-400" aria-hidden="true" />
              </div>
              <span className="mt-4 font-mono text-[9px] uppercase tracking-[0.16em] text-slate-600">{item.type}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
