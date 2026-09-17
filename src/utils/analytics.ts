type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
const clarityId = import.meta.env.VITE_CLARITY_PROJECT_ID?.trim();
let analyticsEnabled = false;
let listenersBound = false;

function injectScript(src: string, id: string) {
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

export function trackEvent(name: string, params: EventParams = {}) {
  if (!analyticsEnabled) return;
  window.gtag?.("event", name, params);
  window.clarity?.("event", name);
}

function trackPageView() {
  if (!analyticsEnabled) return;
  const pagePath = `${window.location.pathname}${window.location.search}`;
  window.gtag?.("event", "page_view", {
    page_title: document.title,
    page_location: window.location.href,
    page_path: pagePath,
  });
}

function classifyClick(anchor: HTMLAnchorElement) {
  const href = anchor.href;
  const path = anchor.pathname.replace(/\/+$/, "") || "/";

  if (href.startsWith("tel:")) {
    trackEvent("phone_clicked", { link_url: href });
    return;
  }
  if (/wa\.me|whatsapp\.com/i.test(href)) {
    trackEvent("whatsapp_clicked", { link_url: href });
    return;
  }
  if (path === "/contact") {
    trackEvent("quote_clicked", { link_url: href });
    return;
  }
  if (path === "/pricing") {
    trackEvent("pricing_opened", { link_url: href });
    return;
  }
  if (path.startsWith("/portfolio")) {
    trackEvent("portfolio_opened", { link_url: href });
  }
}

function bindInteractionTracking() {
  if (listenersBound) return;
  listenersBound = true;

  const onNavigation = () => window.setTimeout(trackPageView, 50);
  window.addEventListener("popstate", onNavigation);
  window.addEventListener("hashchange", onNavigation);

  document.addEventListener("click", (event) => {
    const target = event.target as Element | null;
    const anchor = target?.closest("a");
    if (anchor instanceof HTMLAnchorElement) classifyClick(anchor);
  });
}

export function enableAnalytics() {
  if (analyticsEnabled) return;
  analyticsEnabled = true;

  const gaAlreadyLoaded = typeof window.gtag === "function";

  if (gaId && !gaAlreadyLoaded) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
    window.gtag("js", new Date());
    window.gtag("config", gaId, { send_page_view: false });
    injectScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`, "ga4-script");
  }

  if (clarityId) {
    window.clarity = window.clarity || ((...args: unknown[]) => {
      const queued = window.clarity as unknown as { q?: unknown[] };
      queued.q = queued.q || [];
      queued.q.push(args);
    });
    injectScript(`https://www.clarity.ms/tag/${encodeURIComponent(clarityId)}`, "clarity-script");
  }

  bindInteractionTracking();

  if (!gaAlreadyLoaded && gaId) {
    window.setTimeout(trackPageView, 50);
  }
}

export function initAnalytics() {
  enableAnalytics();
}
