import type { ReactElement } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { StructuredData } from "@/components/StructuredData";
import { RouterProvider, matchRoute, useRoute } from "@/router";
import { HomePage } from "@/pages/Home";
import { AboutPage } from "@/pages/About";
import { AuthorPage } from "@/pages/Author";
import { ServicePage } from "@/pages/ServicePage";
import { IndustriesPage } from "@/pages/Industries";
import { IndustryPage } from "@/pages/IndustryPage";
import { LocationsPage } from "@/pages/Locations";
import { LocationPage } from "@/pages/LocationPage";
import { PortfolioPage } from "@/pages/Portfolio";
import { PricingPage } from "@/pages/PricingPage";
import { BlogPage, BlogPostPage } from "@/pages/Blog";
import { ContactPage } from "@/pages/Contact";
import { NotFoundPage } from "@/pages/NotFound";
import { ProjectSitePage } from "@/pages/ProjectSitePage";
import { services } from "@/data/services";

interface RouteDefinition {
  pattern: string;
  render: (params: Record<string, string>) => ReactElement;
}

const routes: RouteDefinition[] = [
  { pattern: "/", render: () => <HomePage /> },
  { pattern: "/about", render: () => <AboutPage /> },
  { pattern: "/author/erwin-valles", render: () => <AuthorPage /> },
  { pattern: "/portfolio", render: () => <PortfolioPage /> },
  { pattern: "/portfolio/:slug", render: (p) => <ProjectSitePage slug={p.slug} /> },
  { pattern: "/pricing", render: () => <PricingPage /> },
  { pattern: "/contact", render: () => <ContactPage /> },

  { pattern: "/industries", render: () => <IndustriesPage /> },
  { pattern: "/industries/:slug", render: (p) => <IndustryPage slug={p.slug} /> },
  { pattern: "/locations", render: () => <LocationsPage /> },
  { pattern: "/locations/:slug", render: (p) => <LocationPage slug={p.slug} /> },
  { pattern: "/blog", render: () => <BlogPage /> },
  { pattern: "/blog/:slug", render: (p) => <BlogPostPage slug={p.slug} /> },
  ...services.map((service) => ({
    pattern: `/${service.slug}`,
    render: () => <ServicePage slug={service.slug} />,
  })),
];

function Routes() {
  const { path } = useRoute();
  for (const route of routes) {
    const params = matchRoute(path, route.pattern);
    if (params) return route.render(params);
  }
  return <NotFoundPage />;
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-gold-300 via-gold-500 to-orange-600"
      aria-hidden="true"
    />
  );
}

function Shell() {
  const { path } = useRoute();

  return (
    <div className="relative min-h-screen bg-ink-950 text-slate-300">
      <StructuredData />
      <ScrollProgress />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-gold-400 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-ink-950"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" key={path}>
        <Routes />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <Shell />
    </RouterProvider>
  );
}
