import { useEffect } from "react";
import { posts } from "@/data/blog";
import { locations } from "@/data/locations";
import { services } from "@/data/services";
import { useRoute } from "@/router";

const origin = "https://webdesignpampanga.com";
const businessId = `${origin}/#business`;
const websiteId = `${origin}/#website`;
const authorId = `${origin}/#erwin-valles`;
const authorUrl = `${origin}/author/erwin-valles/`;
const socialImage = `${origin}/brand/og-image.svg`;
const articlePublished = "2026-09-10";
const articleModified = "2026-09-12";

function canonicalPath(path: string) {
  if (path === "/") return "/";
  return `${path.replace(/\/+$/, "")}/`;
}

function breadcrumb(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${origin}${canonicalPath(item.path)}`,
    })),
  };
}

export function StructuredData() {
  const { path } = useRoute();

  useEffect(() => {
    document.getElementById("route-structured-data")?.remove();

    const cleanPath = canonicalPath(path);
    const url = `${origin}${cleanPath}`;
    const graph: Record<string, unknown>[] = [];

    const service = services.find((item) => `/${item.slug}` === path);
    if (service) {
      graph.push(
        {
          "@type": "Service",
          "@id": `${url}#service`,
          url,
          name: service.name,
          serviceType: service.name,
          description: service.metaDescription,
          provider: { "@id": businessId },
          areaServed: { "@type": "AdministrativeArea", name: "Pampanga, Philippines" },
          availableChannel: { "@type": "ServiceChannel", serviceUrl: `${origin}/contact/` },
          isPartOf: { "@id": websiteId },
        },
        breadcrumb([{ name: "Home", path: "/" }, { name: service.name, path: cleanPath }]),
      );
    }

    if (path === "/services") {
      graph.push(
        {
          "@type": "CollectionPage",
          "@id": `${url}#webpage`,
          url,
          name: "Web Design & SEO Services Pampanga",
          description: "Web design, development, WordPress, ecommerce, redesign, maintenance and SEO services for Pampanga businesses.",
          isPartOf: { "@id": websiteId },
          about: { "@id": businessId },
          inLanguage: "en-PH",
        },
        breadcrumb([{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }]),
      );
    }

    const locationMatch = path.match(/^\/locations\/([^/]+)$/);
    if (locationMatch) {
      const location = locations.find((item) => item.slug === locationMatch[1]);
      if (location) {
        graph.push(
          {
            "@type": "Service",
            "@id": `${url}#service`,
            url,
            name: `Web Design in ${location.name}`,
            serviceType: "Web Design",
            description: location.metaDescription,
            provider: { "@id": businessId },
            areaServed: { "@type": "Place", name: `${location.name}, Pampanga, Philippines` },
            isPartOf: { "@id": websiteId },
          },
          breadcrumb([{ name: "Home", path: "/" }, { name: "Locations", path: "/locations/" }, { name: location.shortName, path: cleanPath }]),
        );
      }
    }

    const postMatch = path.match(/^\/blog\/([^/]+)$/);
    if (postMatch) {
      const post = posts.find((item) => item.slug === postMatch[1]);
      if (post) {
        graph.push(
          {
            "@type": "Article",
            "@id": `${url}#article`,
            url,
            headline: post.title,
            description: post.metaDescription,
            image: [socialImage],
            datePublished: articlePublished,
            dateModified: articleModified,
            author: { "@id": authorId },
            publisher: { "@id": businessId },
            mainEntityOfPage: { "@id": `${url}#webpage` },
            isPartOf: { "@id": websiteId },
            inLanguage: "en-PH",
          },
          breadcrumb([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog/" }, { name: post.title, path: cleanPath }]),
        );
      }
    }

    if (path === "/author/erwin-valles") {
      graph.push(
        {
          "@type": "ProfilePage",
          "@id": `${authorUrl}#profile`,
          url: authorUrl,
          name: "Erwin Valles | Web Designer & SEO Specialist in Pampanga",
          description: "Erwin Valles is the founder of Web Design Pampanga and writes about web design, technical SEO, local SEO, structured data and conversion-focused website planning.",
          mainEntity: { "@id": authorId },
          isPartOf: { "@id": websiteId },
          inLanguage: "en-PH",
        },
        {
          "@type": "Person",
          "@id": authorId,
          name: "Erwin Valles",
          url: authorUrl,
          image: "https://avatars.githubusercontent.com/u/20321511?v=4",
          jobTitle: "Web Designer & SEO Specialist",
          worksFor: { "@id": businessId },
          knowsAbout: ["Web design", "Technical SEO", "Local SEO", "Structured data", "Conversion rate optimization", "Website architecture"],
          sameAs: ["https://github.com/erwinmehehe"],
        },
        breadcrumb([{ name: "Home", path: "/" }, { name: "Erwin Valles", path: "/author/erwin-valles/" }]),
      );
    }

    const staticCrumbs: Record<string, string> = {
      "/about": "About",
      "/why-web-design-pampanga": "Why Web Design Pampanga",
      "/portfolio": "Portfolio",
      "/pricing": "Pricing",
      "/contact": "Contact",
      "/industries": "Industries",
      "/locations": "Locations",
      "/blog": "Blog",
      "/privacy-policy": "Privacy Policy",
      "/terms": "Website Terms",
      "/case-studies": "Case Studies",
      "/thank-you": "Thank You",
    };
    if (staticCrumbs[path]) {
      graph.push(breadcrumb([{ name: "Home", path: "/" }, { name: staticCrumbs[path], path: cleanPath }]));
    }

    if (!graph.length) return;

    const script = document.createElement("script");
    script.id = "route-structured-data";
    script.type = "application/ld+json";
    script.text = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
    document.head.appendChild(script);

    return () => script.remove();
  }, [path]);

  return null;
}
