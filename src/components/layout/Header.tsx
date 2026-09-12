import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, Sunrise, X } from "lucide-react";
import { Link, useRoute } from "@/router";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { cn } from "@/utils/cn";

interface MenuItem {
  label: string;
  href: string;
  description?: string;
}

interface MenuGroup {
  label: string;
  href?: string;
  items?: MenuItem[];
  footer?: { label: string; href: string };
}

const menu: MenuGroup[] = [
  {
    label: "Services",
    href: "/services/",
    items: services.map((s) => ({ label: s.name, href: `/${s.slug}/`, description: s.short })),
    footer: { label: "View all services →", href: "/services/" },
  },
  { label: "Work", href: "/portfolio/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "Why Us", href: "/why-web-design-pampanga/" },
  { label: "About", href: "/about/" },
  { label: "Blog", href: "/blog/" },
];

function DesktopGroup({ group }: { group: MenuGroup }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const reveal = () => { window.clearTimeout(closeTimer.current); setOpen(true); };
  const hide = () => { closeTimer.current = window.setTimeout(() => setOpen(false), 160); };

  if (!group.items) {
    return <li><Link to={group.href!} className="relative rounded-full px-3.5 py-2 text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-white after:absolute after:inset-x-3.5 after:bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-gold-400 after:transition-transform after:duration-300 hover:after:scale-x-100">{group.label}</Link></li>;
  }

  return (
    <li className="relative" onMouseEnter={reveal} onMouseLeave={hide}>
      <div className="flex items-center">
        <Link to={group.href!} className="rounded-full px-3.5 py-2 text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-white">{group.label}</Link>
        <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label={`Toggle ${group.label} menu`} className="-ml-2 flex h-7 w-7 items-center justify-center rounded-full text-slate-500 transition-colors hover:text-gold-300">
          <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-300", open && "rotate-180")} aria-hidden="true" />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: 10, scale: 0.985 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8, scale: 0.985 }} transition={{ duration: 0.24 }} className="absolute left-1/2 top-full z-50 w-[520px] -translate-x-1/2 pt-3" onFocus={reveal}>
            <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-ink-900/95 p-2 shadow-[0_30px_90px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl">
              <ul className="grid max-h-[60vh] grid-cols-2 gap-1 overflow-y-auto">
                {group.items.map((item) => <li key={item.href}><Link to={item.href} onClick={() => setOpen(false)} className="group block rounded-2xl px-4 py-3 transition-colors hover:bg-white/[0.05]"><span className="block text-sm font-medium text-slate-200 group-hover:text-gold-300">{item.label}</span>{item.description && <span className="mt-0.5 block text-xs leading-snug text-slate-500">{item.description}</span>}</Link></li>)}
              </ul>
              {group.footer && <Link to={group.footer.href} onClick={() => setOpen(false)} className="mt-1 block rounded-2xl border-t border-white/[0.06] px-4 py-3.5 text-xs font-semibold text-gold-400 hover:bg-gold-400/[0.07]">{group.footer.label}</Link>}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const { path } = useRoute();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setMobileOpen(false); }, [path]);
  useEffect(() => { document.body.style.overflow = mobileOpen ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [mobileOpen]);

  return (
    <motion.header initial={{ y: -72, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled || mobileOpen ? "border-b border-white/[0.06] bg-ink-950/85 shadow-[0_8px_40px_-16px_rgba(0,0,0,0.8)] backdrop-blur-xl" : "border-b border-transparent")}>
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8" aria-label="Main">
        <Link to="/" className="group flex shrink-0 items-center gap-3" aria-label={`${site.name} — home`}>
          <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-300 via-gold-500 to-orange-600 shadow-[0_4px_24px_-4px_rgba(246,193,74,0.5)] transition-transform duration-500 group-hover:rotate-[10deg] group-hover:scale-105"><Sunrise className="h-5 w-5 text-ink-950" strokeWidth={2.4} aria-hidden="true" /></span>
          <span className="font-display text-[15px] font-bold tracking-tight text-white">Web Design <span className="text-gold-400">Pampanga</span></span>
        </Link>
        <ul className="hidden items-center gap-0.5 xl:flex">{menu.map((group) => <DesktopGroup key={group.label} group={group} />)}</ul>
        <div className="hidden items-center gap-3 xl:flex">
          <a href={site.phoneHref} className="flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-gold-300"><Phone className="h-4 w-4" aria-hidden="true" /><span className="hidden 2xl:inline">{site.phoneDisplay}</span></a>
          <Link to="/contact/" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 px-5 py-2.5 text-sm font-semibold text-ink-950 shadow-[0_4px_28px_-6px_rgba(246,193,74,0.55)] transition-all hover:brightness-110">Get a Quote</Link>
        </div>
        <button type="button" onClick={() => setMobileOpen((v) => !v)} aria-expanded={mobileOpen} aria-label={mobileOpen ? "Close menu" : "Open menu"} className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-200 xl:hidden">{mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
      </nav>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-white/[0.06] bg-ink-950/95 backdrop-blur-xl xl:hidden">
            <div className="max-h-[calc(100vh-72px)] overflow-y-auto px-5 py-6 sm:px-8">
              <ul className="space-y-1">{menu.map((group) => <li key={group.label} className="border-b border-white/[0.05] pb-1 last:border-0">{group.items ? <><div className="flex items-center"><Link to={group.href!} className="flex-1 rounded-xl px-3 py-3.5 text-base font-medium text-slate-200">{group.label}</Link><button type="button" onClick={() => setMobileGroup(mobileGroup === group.label ? null : group.label)} className="p-3" aria-label={`Toggle ${group.label}`}><ChevronDown className={cn("h-4 w-4", mobileGroup === group.label && "rotate-180 text-gold-400")} /></button></div><AnimatePresence>{mobileGroup === group.label && <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pl-2">{group.items.map((item) => <li key={item.href}><Link to={item.href} className="block rounded-xl px-3 py-2.5 text-sm text-slate-400 hover:text-gold-300">{item.label}</Link></li>)}</motion.ul>}</AnimatePresence></> : <Link to={group.href!} className="block rounded-xl px-3 py-3.5 text-base font-medium text-slate-200 hover:text-gold-300">{group.label}</Link>}</li>)}</ul>
              <div className="mt-6 grid gap-3 sm:grid-cols-2"><Link to="/contact/" className="flex items-center justify-center rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 px-5 py-3.5 text-sm font-semibold text-ink-950">Request a Quote</Link><a href={site.phoneHref} className="flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3.5 text-sm font-semibold text-white"><Phone className="h-4 w-4 text-gold-400" />{site.phoneDisplay}</a></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
