import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Link, useRoute } from "@/router";
import { site } from "@/data/site";

/**
 * Persistent conversion paths on every page.
 * - Mobile: fixed bottom bar with three actions — Call · WhatsApp · Quote.
 * - Desktop: WhatsApp bubble once past the hero.
 *
 * Hidden on /contact, where the form is already in front of the visitor.
 */
export function FloatingContact() {
  const reduce = useReducedMotion();
  const { path } = useRoute();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setVisible(window.scrollY > 420);
  }, [path]);

  const showBar = visible && path !== "/contact";
  const duration = reduce ? 0 : 0.32;

  return (
    <>
      {/* Desktop WhatsApp bubble */}
      <AnimatePresence>
        {visible && (
          <motion.a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.6, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 16 }}
            transition={{ duration, ease: [0.21, 0.65, 0.15, 1] }}
            aria-label="Chat with us on WhatsApp"
            title="Chat with us on WhatsApp"
            className="group fixed bottom-6 right-6 z-40 hidden items-center rounded-full bg-[#25D366] py-3.5 pl-4 pr-4 text-white shadow-[0_12px_40px_-8px_rgba(37,211,102,0.6)] transition-shadow duration-300 hover:shadow-[0_16px_52px_-8px_rgba(37,211,102,0.8)] md:flex"
          >
            <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5" aria-hidden="true">
              <span className="absolute h-full w-full animate-ping rounded-full bg-white/70" />
              <span className="h-3.5 w-3.5 rounded-full border-2 border-[#25D366] bg-white" />
            </span>
            <MessageCircle className="h-6 w-6 shrink-0" aria-hidden="true" />
            <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:ml-2.5 group-hover:max-w-[160px] group-hover:opacity-100">
              Chat on WhatsApp
            </span>
          </motion.a>
        )}
      </AnimatePresence>

      {/* Mobile: fixed bottom action bar — Call · WhatsApp · Quote */}
      <AnimatePresence>
        {showBar && (
          <motion.div
            initial={{ y: 90 }}
            animate={{ y: 0 }}
            exit={{ y: 90 }}
            transition={{ duration, ease: [0.21, 0.65, 0.15, 1] }}
            className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink-950/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl md:hidden"
          >
            <div className="grid grid-cols-[1fr_1fr_1.3fr] gap-2 px-3 py-2.5">
              <a
                href={site.phoneHref}
                className="flex items-center justify-center gap-1.5 rounded-lg border border-white/15 bg-white/[0.06] px-2 py-2.5 text-[13px] font-semibold text-white active:scale-[0.98]"
              >
                <Phone className="h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
                Call
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 rounded-lg bg-[#25D366] px-2 py-2.5 text-[13px] font-semibold text-[#04301a] active:scale-[0.98]"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                WhatsApp
              </a>
              <Link
                to="/contact/"
                className="flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 px-2 py-2.5 text-[13px] font-semibold text-ink-950 active:scale-[0.98]"
              >
                Quote
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer so the bar never covers footer content on mobile */}
      {showBar && <div className="h-[64px] md:hidden" aria-hidden="true" />}
    </>
  );
}
