import { PageHero, Section } from "@/components/blocks";
import { usePageMeta } from "@/router";
import { site } from "@/data/site";

const sections = [
  ["Information you send us", "When you use the quote form, we may receive your name, email address, phone number, business name, website URL and the project details you choose to provide. We use this information to respond to your enquiry, prepare a scope or quote, and communicate about the requested work."],
  ["Form delivery", "Website enquiries are delivered through FormSubmit to the studio inbox. Do not include passwords, payment card details or other highly sensitive information in the enquiry form."],
  ["Analytics and session insights", "If you choose to allow analytics, the site may load Google Analytics and Microsoft Clarity. These tools help us understand visits, navigation, clicks and conversion journeys so we can improve the website. Analytics is optional and the site remains usable if you choose only necessary functionality."],
  ["Google Business Profile and third-party links", "The website links to Google Maps and the Web Design Pampanga Google Business Profile, as well as other third-party services such as WhatsApp and GitHub. When you open an external service, that provider's own privacy terms apply."],
  ["How long information is kept", "Enquiry information is kept only as long as reasonably needed to respond, prepare or discuss a project, maintain business records, or meet legal and accounting obligations that apply to the studio."],
  ["Your choices", "You can decline analytics from the consent banner. You can also contact us to ask what personal information you previously sent through the website, request corrections, or ask that information be deleted where there is no legal reason to retain it."],
  ["Security", "We use reasonable measures to protect website and enquiry data, but no website, email service or internet transmission can be guaranteed completely secure."],
  ["Changes to this policy", "We may update this policy when the website, analytics setup or business processes change. The current version published on this page applies to use of the website."],
];

export function PrivacyPolicyPage() {
  usePageMeta(
    "Privacy Policy | Web Design Pampanga",
    "Privacy policy for Web Design Pampanga covering quote enquiries, analytics, Microsoft Clarity, Google Analytics and third-party links.",
  );

  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        intro="How Web Design Pampanga handles information submitted through this website and optional analytics tools."
        crumbs={[{ label: "Privacy Policy" }]}
        chips={["Last updated: September 12, 2026"]}
      />
      <Section divider>
        <div className="mx-auto max-w-3xl space-y-10">
          <p className="text-base leading-relaxed text-slate-400">Web Design Pampanga respects the information people share when asking about website and SEO services. This page explains the main categories of data used by the website and the choices available to visitors.</p>
          {sections.map(([title, body]) => (
            <section key={title}>
              <h2 className="font-display text-xl font-semibold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">{body}</p>
            </section>
          ))}
          <section className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-7">
            <h2 className="font-display text-xl font-semibold text-white">Contact</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">Questions about this policy can be sent to <a className="font-semibold text-gold-400 hover:text-gold-300" href={`mailto:${site.email}`}>{site.email}</a> or by calling <a className="font-semibold text-gold-400 hover:text-gold-300" href={site.phoneHref}>{site.phoneDisplay}</a>.</p>
          </section>
        </div>
      </Section>
    </>
  );
}
