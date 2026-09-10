import { useEffect, useRef, useState, type ReactNode } from "react";
import { SiteBrightSmile, SiteCoreAxis, SiteGoldenfield, SiteSkylineHotel, SiteSizzleHouse } from "./sitesA";
import { SiteIronpeak, SiteNorthvale, SiteStarlane, SiteTradeline, SiteVerdant } from "./sitesB";

/** Fixed design width every portfolio site is authored at. */
export const SITE_WIDTH = 1200;
export const SITE_HEIGHT = 760;

/**
 * Scales a full website design down to fit its container, exactly like a
 * browser screenshot. The design is authored once at 1200px wide and
 * scaled proportionally, so type and spacing stay true at any card size.
 */
export function SiteFrame({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => setScale(el.clientWidth / SITE_WIDTH);
    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: `${SITE_WIDTH} / ${SITE_HEIGHT}` }}
    >
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{
          width: SITE_WIDTH,
          transform: `scale(${scale})`,
          visibility: scale ? "visible" : "hidden",
        }}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}

/** Renders the website design for a given project slug. */
export function SitePreview({ slug }: { slug: string }) {
  switch (slug) {
    case "coreaxis-bpo":
      return <SiteCoreAxis />;
    case "sizzle-house":
      return <SiteSizzleHouse />;
    case "skyline-hotel":
      return <SiteSkylineHotel />;
    case "goldenfield-estates":
      return <SiteGoldenfield />;
    case "brightsmile-dental":
      return <SiteBrightSmile />;
    case "starlane-logistics":
      return <SiteStarlane />;
    case "ironpeak-builders":
      return <SiteIronpeak />;
    case "northvale-clinic":
      return <SiteNorthvale />;
    case "verdant-property":
      return <SiteVerdant />;
    case "tradeline-supply":
      return <SiteTradeline />;
    default:
      return null;
  }
}
