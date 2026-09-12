import { ArrowUp, Mail, MessageCircle, Phone, Sunrise } from "lucide-react";
import { Link } from "@/router";
import { services } from "@/data/services";
import { site } from "@/data/site";

function FooterColumn({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <nav aria-label={title}>
      <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-slate-500">{title}</h2>
      <ul className="mt-5 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link to={link.to} className="text-sm text-slate-400 transition-colors hover:text-gold-300">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07] bg-ink-950" aria-label="Footer">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_.8fr_.8fr] lg:gap-16">
          <div>
            <Link to="/" className="group inline-flex items-center gap-3" aria-label={`${site.name} home`}>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-300 via-gold-500 to-orange-600 shadow-[0_4px_24px_-4px_rgba(246,193,74,0.4)] transition-transform duration-500 group-hover:rotate-[10deg]">
                <Sunrise className="h-5 w-5 text-ink-950" strokeWidth={2.4} aria-hidden="true" />
              </span>
              <span className="font-display text-base font-bold tracking-tight text-white">
                Web Design <span className="text-gold-400">Pampanga</span>
              </span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-400">
              Web design and SEO for businesses across Pampanga.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6">
              <a href={site.phoneHref} className="inline-flex items-center gap-2.5 text-sm text-slate-300 transition-colors hover:text-gold-300">
                <Phone className="h-4 w-4 text-gold-400" aria-hidden="true" />
                {site.phoneDisplay}
              </a>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 text-sm text-slate-300 transition-colors hover:text-gold-300">
                <MessageCircle className="h-4 w-4 text-gold-400" aria-hidden="true" />
                WhatsApp
              </a>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2.5 text-sm text-slate-300 transition-colors hover:text-gold-300">
                <Mail className="h-4 w-4 text-gold-400" aria-hidden="true" />
                {site.email}
              </a>
            </div>
          </div>

          <FooterColumn
            title="Services"
            links={[
              { label: "Web Design", to: "/web-design/" },
              { label: "Web Development", to: "/web-development/" },
              { label: "Local SEO", to: "/local-seo/" },
              { label: "All Services", to: "/services/" },
            ]}
          />

          <FooterColumn
            title="Company"
            links={[
              { label: "Portfolio", to: "/portfolio/" },
              { label: "Pricing", to: "/pricing/" },
              { label: "About", to: "/about/" },
              { label: "Contact", to: "/contact/" },
            ]}
          />
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-white/[0.07] pt-7 sm:flex-row">
          <p className="text-center text-xs text-slate-500 sm:text-left">
            © {new Date().getFullYear()} {site.name}
          </p>

          <div className="flex items-center gap-5">
            <Link to="/privacy-policy/" className="text-xs text-slate-500 transition-colors hover:text-slate-300">Privacy</Link>
            <Link to="/terms/" className="text-xs text-slate-500 transition-colors hover:text-slate-300">Terms</Link>
            <Link to="/#top" aria-label="Back to top" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-slate-400 transition-all hover:-translate-y-1 hover:border-gold-400/40 hover:text-gold-300">
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
