import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type AnchorHTMLAttributes,
  type ReactNode,
} from "react";

export interface RouteState {
  path: string;
  anchor: string;
}

const origin = "https://webdesignpampanga.com";

function normalize(path: string) {
  let p = path.trim();
  if (!p.startsWith("/")) p = "/" + p;
  p = p.replace(/\/+$/, "");
  return p === "" ? "/" : p;
}

function canonicalPath(path: string) {
  if (path === "/") return "/";
  return `${normalize(path)}/`;
}

export function parseLocation(): RouteState {
  const legacyHash = window.location.hash;
  if (legacyHash.startsWith("#/")) {
    const raw = legacyHash.slice(1);
    const [legacyPath, legacyAnchor = ""] = raw.split("#");
    return { path: normalize(legacyPath || "/"), anchor: legacyAnchor };
  }

  return {
    path: normalize(window.location.pathname || "/"),
    anchor: window.location.hash.replace(/^#/, ""),
  };
}

const RouteContext = createContext<RouteState>({ path: "/", anchor: "" });

export function useRoute() {
  return useContext(RouteContext);
}

export function matchRoute(path: string, pattern: string): Record<string, string> | null {
  const p = normalize(path).split("/").filter(Boolean);
  const s = normalize(pattern).split("/").filter(Boolean);
  if (p.length !== s.length) return null;
  const params: Record<string, string> = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i].startsWith(":")) {
      params[s[i].slice(1)] = decodeURIComponent(p[i]);
    } else if (s[i].toLowerCase() !== p[i].toLowerCase()) {
      return null;
    }
  }
  return params;
}

export function navigate(to: string, opts: { replace?: boolean } = {}) {
  const target = to.startsWith("#") ? `${window.location.pathname}${to}` : to;
  const method = opts.replace ? "replaceState" : "pushState";
  window.history[method](null, "", target);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [route, setRoute] = useState<RouteState>(() => parseLocation());

  useEffect(() => {
    if (window.location.hash.startsWith("#/")) {
      const next = canonicalPath(route.path) + (route.anchor ? `#${route.anchor}` : "");
      window.history.replaceState(null, "", next);
      setRoute(parseLocation());
      return;
    }

    const onChange = () => setRoute(parseLocation());
    window.addEventListener("popstate", onChange);
    window.addEventListener("hashchange", onChange);
    return () => {
      window.removeEventListener("popstate", onChange);
      window.removeEventListener("hashchange", onChange);
    };
  }, []);

  useEffect(() => {
    if (route.anchor) {
      const id = window.setTimeout(() => {
        const el = document.getElementById(route.anchor);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 88;
          window.scrollTo({ top: y, behavior: "smooth" });
          return;
        }
        window.scrollTo({ top: 0 });
      }, 60);
      return () => window.clearTimeout(id);
    }
    window.scrollTo({ top: 0 });
  }, [route.path, route.anchor]);

  const value = useMemo(() => route, [route]);

  return <RouteContext.Provider value={value}>{children}</RouteContext.Provider>;
}

export function Link({
  to,
  children,
  onClick,
  ...rest
}: { to: string } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isExternal = /^(https?:|mailto:|tel:)/.test(to);
  const href = isExternal ? to : to.startsWith("#") ? to : canonicalPath(to);
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      onClick?.(event);
      if (isExternal) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
      event.preventDefault();
      navigate(to);
    },
    [isExternal, onClick, to],
  );

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}

function upsertMeta(selector: string, attr: string, value: string) {
  let tag = document.querySelector(selector);
  if (!tag) {
    tag = document.createElement("meta");
    const match = selector.match(/meta\[(name|property)="([^"]+)"\]/);
    if (match) tag.setAttribute(match[1], match[2]);
    document.head.appendChild(tag);
  }
  tag.setAttribute(attr, value);
}

export function usePageMeta(title: string, description?: string) {
  const { path } = useRoute();

  useEffect(() => {
    const resolvedTitle =
      path === "/" && title === "Web Design Pampanga | Professional Business Websites in Pampanga"
        ? "Web Design Pampanga | Custom Websites for Local Businesses"
        : title;
    const resolvedDescription =
      path === "/" && description
        ? "Custom web design for Pampanga businesses. Mobile-first websites built for credibility, local SEO and more calls, messages and enquiries."
        : description;

    document.title = resolvedTitle;
    if (resolvedDescription) {
      upsertMeta('meta[name="description"]', "content", resolvedDescription);
      upsertMeta('meta[property="og:description"]', "content", resolvedDescription);
    }
    upsertMeta('meta[property="og:title"]', "content", resolvedTitle);

    const canonical = `${origin}${canonicalPath(path)}`;
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", canonical);
    upsertMeta('meta[property="og:url"]', "content", canonical);
  }, [title, description, path]);
}
