import { ArrowUpRight, Award } from "lucide-react";

const recognition = [
  { name: "Awwwards", href: "https://www.awwwards.com/", type: "Design awards", domain: "awwwards.com" },
  { name: "DesignRush", href: "https://www.designrush.com/", type: "Design awards & directory", domain: "designrush.com" },
  { name: "Clutch", href: "https://clutch.co/", type: "B2B recognition", domain: "clutch.co" },
  { name: "GoodFirms", href: "https://www.goodfirms.co/", type: "Agency recognition", domain: "goodfirms.co" },
  { name: "TechBehemoths", href: "https://techbehemoths.com/", type: "Tech awards & directory", domain: "techbehemoths.com" },
  { name: "The Manifest", href: "https://themanifest.com/", type: "B2B directory", domain: "themanifest.com" },
  { name: "Sortlist", href: "https://www.sortlist.com/", type: "Agency marketplace", domain: "sortlist.com" },
  { name: "CSS Design Awards", href: "https://www.cssdesignawards.com/", type: "Design awards", domain: "cssdesignawards.com" },
  { name: "CSS Winner", href: "https://www.csswinner.com/", type: "Design awards", domain: "csswinner.com" },
  { name: "Web Guru Awards", href: "https://www.webguruawards.com/", type: "Design awards", domain: "webguruawards.com" },
];

function platformIcon(domain: string) {
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`;
}

export function RecognitionSection() {
  return (
    <section
      id="recognition"
      className="border-y border-white/[0.08] bg-[#080a10] py-12 sm:py-16"
      aria-labelledby="recognition-heading"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold-400">Awards &amp; recognition</p>
            <h2 id="recognition-heading" className="mt-3 max-w-2xl font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Recognition from design and agency platforms.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-slate-400">
            Each badge links directly to the platform. Award-specific badges can replace these platform marks when their official badge files are available.
          </p>
        </div>

        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {recognition.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex min-h-52 flex-col items-center justify-center overflow-hidden border border-white/[0.10] bg-gradient-to-b from-white/[0.055] to-white/[0.018] px-4 py-6 text-center transition duration-300 hover:-translate-y-1 hover:border-gold-400/35 hover:bg-white/[0.06]"
              aria-label={`${item.name} - ${item.type}`}
            >
              <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/45 to-transparent" />

              <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-gold-400/25 bg-[#0d1018] shadow-[0_0_0_8px_rgba(246,193,74,0.035)]">
                <div className="absolute -inset-2 rounded-full border border-dashed border-gold-400/15" />
                <img
                  src={platformIcon(item.domain)}
                  alt={`${item.name} logo`}
                  width="64"
                  height="64"
                  loading="lazy"
                  className="h-14 w-14 rounded-xl object-contain"
                />
                <span className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full border border-gold-300/30 bg-gold-400 text-ink-950 shadow-lg">
                  <Award className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
                </span>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2">
                <span className="font-display text-base font-semibold text-white sm:text-lg">{item.name}</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-slate-600 transition group-hover:text-gold-400" aria-hidden="true" />
              </div>
              <span className="mt-2 font-mono text-[9px] uppercase tracking-[0.14em] text-slate-500">{item.type}</span>

              <span className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-400/80 opacity-70 transition group-hover:opacity-100">
                View recognition
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
