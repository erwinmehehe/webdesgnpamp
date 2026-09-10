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

/* Hash-based router — every page reachable from a single static index.html.
 *   #/            -> home
 *   #/about/      -> about page
 *   #/#contact    -> home page, scrolled to #contact
 */

export interface RouteState {
  path: string;
  anchor: string;
}

function normalize(path: string) {
  let p = path.trim();
  if (!p.startsWith("/")) p = "/" + p;
  p = p.replace(/\/+$/, "");
  return p === "" ? "/" : p;
}

export function parseHash(hash: string = window.location.hash): RouteState {
  const raw = hash.replace(/^#/, "");
  const [pathPart, anchor = ""] = raw.split("#");
  return { path: normalize(pathPart || "/"), anchor };
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
  const next = to.startsWith("#") ? to : `#${to}`;
  if (window.location.hash === next) {
    window.dispatchEvent(new Event("hashchange"));
    return;
  }
  if (opts.replace) {
    window.history.replaceState(null, "", next);
    window.dispatchEvent(new Event("hashchange"));
  } else {
    window.location.hash = next;
  }
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [route, setRoute] = useState<RouteState>(() => parseHash());

  useEffect(() => {
    const onChange = () => setRoute(parseHash());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
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
    <a href={isExternal ? to : `#${to}`} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}

export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title;
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }
  }, [title, description]);
}
