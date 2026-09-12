import { useReducedMotion } from "framer-motion";
import {
  Building2, Factory, HardHat, Hotel, Landmark, Plane, Stethoscope, UtensilsCrossed,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "@/router";
import { Reveal } from "@/components/Reveal";

interface StripItem {
  label: string;
  to: string;
  icon: LucideIcon;
}

const items: StripItem[] = [
  { label: "Hotels & Resorts", to: "/industries/hotel-web-design/", icon: Hotel },
  { label: "Real Estate", to: "/industries/real-estate-web-design/", icon: Landmark },
  { label: "Restaurants", to: "/industries/restaurant-web-design/", icon: UtensilsCrossed },
  { label: "Clinics & Dental", to: "/industries/", icon: Stethoscope },
  { label: "Logistics", to: "/industries/logistics-web-design/", icon: Plane },
  { label: "BPO & Outsourcing", to: "/industries/bpo-web-design-clark/", icon: Building2 },
  { label: "Construction", to: "/industries/construction-web-design/", icon: HardHat },
  { label: "Manufacturing", to: "/industries/manufacturing-web-design/", icon: Factory },
];

function IndustryGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div
      className="flex shrink-0 gap-4 pr-4"
      aria-hidden={duplicate || undefined}
    >
      {items.map((item) => (
        <Link
          key={`${duplicate ? "copy-" : ""}${item.label}`}
          to={item.to}
          tabIndex={duplicate ? -1 : undefined}
          className="group flex min-w-[220px] items-center gap-3.5 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/40 hover:bg-gold-400/[0.06] hover:shadow-[0_16px_40px_-16px_rgba(246,193,74,0.35)] sm:min-w-[244px]"
        >
          <item.icon
            className="h-5 w-5 shrink-0 text-gold-400 transition-transform duration-300 group-hover:scale-110"
            strokeWidth={1.9}
            aria-hidden="true"
          />
          <span className="whitespace-nowrap font-display text-[15px] font-semibold text-white">
            {item.label}
          </span>
        </Link>
      ))}
    </div>
  );
}

export function IndustryStrip() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-16 sm:py-20" aria-label="Industries we design for">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center font-mono text-[11px] font-medium uppercase tracking-[0.32em] text-slate-400 sm:text-xs">
            Built for the industries driving Pampanga &amp; Clark
          </p>
        </Reveal>
      </div>

      <div className="relative mt-9 overflow-hidden mask-fade-x">
        {reduceMotion ? (
          <div className="overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:px-8 [&::-webkit-scrollbar]:hidden">
            <IndustryGroup />
          </div>
        ) : (
          <div
            className="flex w-max animate-marquee py-1 will-change-transform"
            role="region"
            aria-label="Industries moving continuously from right to left"
          >
            <IndustryGroup />
            <IndustryGroup duplicate />
          </div>
        )}
      </div>

      <Reveal delay={0.12}>
        <div className="mt-8 text-center">
          <Link
            to="/industries/"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-gold-400 transition-colors hover:text-gold-300"
          >
            Explore all industries
            <span
              className="h-px w-8 bg-current transition-all duration-300 group-hover:w-12"
              aria-hidden="true"
            />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
