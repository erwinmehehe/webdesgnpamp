import { ArrowUp, MapPin, MessageCircle, Phone, Sunrise } from "lucide-react";
import { Link } from "@/router";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { site } from "@/data/site";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-7.2h2.42l.36-2.8H13.5V9.2c0-.81.22-1.36 1.39-1.36h1.48V5.36c-.26-.03-1.14-.11-2.16-.11-2.14 0-3.61 1.3-3.61 3.7V11H8.18v2.8h2.42V21h2.9Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.94 8.5v10.25H4.06V8.5h2.88ZM5.5 3.75a1.69 1.69 0 1 1 0 3.38 1.69 1.69 0 0 1 0-3.38ZM9.7 8.5h2.76v1.4h.04c.38-.72 1.32-1.48 2.72-1.48 2.9 0 3.44 1.9 3.44 4.37v5.96h-2.87v-5.28c0-1.26-.02-2.88-1.76-2.88-1.76 0-2.03 1.37-2.03 2.79v5.37H9.7V8.5Z" />
    </svg>
  );
}

const socials = [
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: LinkedInIcon, label: "LinkedIn", href: "#" },
];

function FooterColumn({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <nav aria-label={title}>
      <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-slate-500">{title}</h2>
      <ul className="mt-5 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link to={link.to} className="text-sm text-slate-400 transition-colors duration-300 hover:text-gold-300">
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
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="group inline-flex items-center gap-3" aria-label={`${site.name} — home`}>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-300 via-gold-500 to-orange-600 shadow-[0_4px_24px_-4px_rgba(246,193,74,0.4)] transition-transform duration-500 group-hover:rotate-[10deg]">
                <Sunrise className="h-5 w-5 text-ink-950" strokeWidth={2.4} aria-hidden="true" />
              </span>
              <span className="font-display text-base font-bold tracking-tight text-white">
                Web Design <span className="text-gold-400">Pampanga</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">{site.description}</p>

            <div className="mt-6 space-y-2.5">
              <a href={site.phoneHref} className="flex items-center gap-2.5 text-sm text-slate-300 transition-colors hover:text-gold-300">
                <Phone className="h-4 w-4 text-gold-400" aria-hidden="true" />
                {site.phoneDisplay}
              </a>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-slate-300 transition-colors hover:text-gold-300">
                <MessageCircle className="h-4 w-4 text-gold-400" aria-hidden="true" />
                WhatsApp / Viber
              </a>
              <span className="flex items-center gap-2.5 text-sm text-slate-400">
                <MapPin className="h-4 w-4 text-gold-400" aria-hidden="true" />
                {site.location}
              </span>
            </div>

            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a key={social.label} href={social.href} aria-label={social.label} className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/40 hover:bg-gold-400/10 hover:text-gold-300">
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Services" links={services.map((s) => ({ label: s.name, to: `/${s.slug}/` }))} />
          <FooterColumn
            title="Industries"
            links={[
              { label: "All industries", to: "/industries/" },
              ...industries.map((i) => ({ label: i.shortName, to: `/industries/${i.slug}/` })),
            ]}
          />
          <FooterColumn
            title="Studio"
            links={[
              { label: "About", to: "/about/" },
              { label: "Portfolio", to: "/portfolio/" },
              { label: "Pricing", to: "/pricing/" },
              { label: "Blog", to: "/blog/" },
              { label: "Contact", to: "/contact/" },
            ]}
          />
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/[0.07] pt-8 sm:flex-row">
          <p className="text-center text-xs text-slate-500 sm:text-left">
            © {new Date().getFullYear()} {site.name}. Independent web design studio in Pampanga, Philippines.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-slate-500 transition-colors hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="text-xs text-slate-500 transition-colors hover:text-slate-300">Terms of Service</a>
            <Link to="/#top" aria-label="Back to top" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/40 hover:text-gold-300">
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
