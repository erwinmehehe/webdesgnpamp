import { motion, useReducedMotion } from "framer-motion";

interface SiteEffectsProps {
  slug: string;
  active?: boolean;
  subtle?: boolean;
}

const sweep = [0.22, 0.72, 0.18, 1] as const;

export function SiteEffects({ slug, active = true, subtle = false }: SiteEffectsProps) {
  const reduceMotion = useReducedMotion();
  const on = active && !reduceMotion;
  const opacity = subtle ? 0.42 : 0.68;

  const base = (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.015] via-transparent to-black/[0.08]" />
      <div className="absolute inset-0 shadow-[inset_0_0_70px_rgba(0,0,0,0.16)]" />
    </>
  );

  let effect: React.ReactNode = null;

  switch (slug) {
    case "coreaxis-bpo":
      effect = (
        <>
          <motion.div
            className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-300/80 to-transparent shadow-[0_0_18px_rgba(125,211,252,.55)]"
            initial={{ top: "10%", opacity: 0 }}
            animate={on ? { top: ["10%", "88%"], opacity: [0, opacity, 0] } : { top: "10%", opacity: 0 }}
            transition={{ duration: 3.8, repeat: Infinity, repeatDelay: 0.9, ease: "linear" }}
          />
          <motion.div
            className="absolute right-[5%] top-[9%] h-20 w-28 rounded-md border border-sky-300/20 bg-sky-300/[0.035] backdrop-blur-[1px]"
            animate={on ? { y: [0, -5, 0], opacity: [0.3, 0.65, 0.3] } : { opacity: 0.24 }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="m-3 h-px w-10 bg-sky-300/50" />
            <div className="mx-3 mt-2 h-px w-16 bg-sky-300/25" />
            <div className="mx-3 mt-2 h-px w-12 bg-sky-300/20" />
          </motion.div>
        </>
      );
      break;

    case "sizzle-house":
      effect = (
        <>
          <motion.div
            className="absolute -left-1/4 top-[-30%] h-[150%] w-1/2 rotate-[18deg] bg-gradient-to-r from-transparent via-amber-200/[0.12] to-transparent blur-xl"
            animate={on ? { x: ["-20%", "250%"] } : { x: "-20%" }}
            transition={{ duration: 5.8, repeat: Infinity, repeatDelay: 1.6, ease: sweep }}
          />
          <motion.div
            className="absolute bottom-[8%] right-[7%] h-24 w-24 rounded-full bg-amber-500/20 blur-[42px]"
            animate={on ? { scale: [0.9, 1.18, 0.9], opacity: [0.22, 0.5, 0.22] } : { opacity: 0.2 }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      );
      break;

    case "skyline-hotel":
      effect = (
        <>
          <motion.div
            className="absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-16deg] bg-gradient-to-r from-transparent via-[#f6e2ba]/[0.16] to-transparent blur-2xl"
            animate={on ? { x: ["0%", "430%"] } : { x: "0%" }}
            transition={{ duration: 7.2, repeat: Infinity, repeatDelay: 2.3, ease: sweep }}
          />
          <motion.div
            className="absolute left-1/2 top-[8%] h-28 w-28 -translate-x-1/2 rounded-full border border-[#d7bd8a]/25"
            animate={on ? { scale: [0.92, 1.05, 0.92], opacity: [0.12, 0.32, 0.12] } : { opacity: 0.12 }}
            transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      );
      break;

    case "goldenfield-estates":
      effect = (
        <>
          {[0, 1, 2].map((ring) => (
            <motion.div
              key={ring}
              className="absolute -bottom-16 -right-14 rounded-full border border-emerald-300/20"
              style={{ width: 130 + ring * 70, height: 130 + ring * 70 }}
              animate={on ? { rotate: ring % 2 ? -360 : 360, scale: [1, 1.04, 1] } : { rotate: 0 }}
              transition={{ rotate: { duration: 20 + ring * 5, repeat: Infinity, ease: "linear" }, scale: { duration: 5 + ring, repeat: Infinity, ease: "easeInOut" } }}
            />
          ))}
          <motion.div
            className="absolute bottom-[18%] right-[14%] h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,.85)]"
            animate={on ? { scale: [1, 1.7, 1], opacity: [0.5, 1, 0.5] } : { opacity: 0.45 }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      );
      break;

    case "brightsmile-dental":
      effect = (
        <>
          {[
            ["12%", "18%", 18],
            ["78%", "20%", 26],
            ["68%", "70%", 14],
          ].map(([left, top, size], i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-cyan-200/35 bg-cyan-100/[0.06] backdrop-blur-[1px]"
              style={{ left, top, width: size, height: size }}
              animate={on ? { y: [0, -10 - i * 4, 0], x: [0, i % 2 ? 5 : -4, 0], opacity: [0.2, 0.58, 0.2] } : { opacity: 0.18 }}
              transition={{ duration: 4.2 + i * 0.8, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </>
      );
      break;

    case "starlane-logistics":
      effect = (
        <>
          <svg className="absolute inset-x-[8%] bottom-[10%] h-[32%] w-[84%] overflow-visible" viewBox="0 0 500 120" fill="none" aria-hidden="true">
            <motion.path
              d="M8 98 C90 8 150 112 235 46 C315 -14 380 100 492 20"
              stroke="rgba(251,146,60,.55)"
              strokeWidth="2"
              strokeDasharray="7 10"
              initial={{ pathLength: 0.12, opacity: 0.15 }}
              animate={on ? { pathLength: [0.12, 1, 0.12], opacity: [0.2, 0.72, 0.2] } : { pathLength: 0.35, opacity: 0.18 }}
              transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
          <motion.div
            className="absolute bottom-[22%] left-[18%] h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_16px_rgba(251,146,60,.9)]"
            animate={on ? { x: [0, 180, 320], y: [0, -42, -18], opacity: [0, 1, 0] } : { opacity: 0 }}
            transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      );
      break;

    case "ironpeak-builders":
      effect = (
        <>
          <motion.div
            className="absolute -left-1/3 top-0 h-full w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-yellow-300/[0.14] to-transparent blur-xl"
            animate={on ? { x: ["0%", "430%"] } : { x: "0%" }}
            transition={{ duration: 6.2, repeat: Infinity, repeatDelay: 1.2, ease: sweep }}
          />
          <div className="absolute inset-0 opacity-[0.11]" style={{ backgroundImage: "linear-gradient(rgba(250,204,21,.38) 1px, transparent 1px), linear-gradient(90deg, rgba(250,204,21,.38) 1px, transparent 1px)", backgroundSize: "38px 38px" }} />
        </>
      );
      break;

    case "northvale-clinic":
      effect = (
        <>
          <svg className="absolute bottom-[9%] left-[6%] h-12 w-[88%]" viewBox="0 0 520 60" fill="none" aria-hidden="true">
            <motion.path
              d="M0 32 H110 L128 32 L140 14 L154 49 L169 25 L184 32 H300 L320 32 L333 18 L346 45 L360 28 L374 32 H520"
              stroke="rgba(74,222,128,.58)"
              strokeWidth="2"
              initial={{ pathLength: 0.1, opacity: 0.1 }}
              animate={on ? { pathLength: [0.1, 1], opacity: [0.12, 0.72, 0.12] } : { pathLength: 0.35, opacity: 0.15 }}
              transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
          <motion.div
            className="absolute right-[8%] top-[14%] h-16 w-16 rounded-full bg-green-300/10 blur-2xl"
            animate={on ? { scale: [0.8, 1.35, 0.8], opacity: [0.15, 0.45, 0.15] } : { opacity: 0.15 }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      );
      break;

    case "verdant-property":
      effect = (
        <>
          {[0, 1, 2, 3].map((ring) => (
            <motion.div
              key={ring}
              className="absolute left-[72%] top-[62%] rounded-full border border-teal-300/20"
              style={{ width: 60 + ring * 48, height: 60 + ring * 48, marginLeft: -(30 + ring * 24), marginTop: -(30 + ring * 24) }}
              animate={on ? { scale: [0.86, 1.08, 0.86], opacity: [0.1, 0.38, 0.1] } : { opacity: 0.12 }}
              transition={{ duration: 4.2 + ring * 0.65, repeat: Infinity, delay: ring * 0.25, ease: "easeInOut" }}
            />
          ))}
        </>
      );
      break;

    case "tradeline-supply":
      effect = (
        <>
          <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: "linear-gradient(rgba(147,197,253,.45) 1px, transparent 1px), linear-gradient(90deg, rgba(147,197,253,.45) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <motion.div
            className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-300/80 to-transparent shadow-[0_0_20px_rgba(147,197,253,.55)]"
            animate={on ? { top: ["8%", "92%"], opacity: [0, 0.66, 0] } : { top: "8%", opacity: 0 }}
            transition={{ duration: 4.2, repeat: Infinity, repeatDelay: 0.8, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-[10%] left-[7%] h-16 w-28 border-l border-t border-blue-300/35"
            animate={on ? { opacity: [0.18, 0.55, 0.18] } : { opacity: 0.18 }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      );
      break;
  }

  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden" aria-hidden="true">
      {base}
      {effect}
    </div>
  );
}
