import { ArrowRight, CalendarDays, Clock, Tag } from "lucide-react";
import { CTABand, Eyebrow, GhostButton, GoldButton, PageHero, Section, SectionIntro } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { Link, usePageMeta } from "@/router";
import { getPost, posts, type Post } from "@/data/blog";
import { site } from "@/data/site";
import { NotFoundPage } from "@/pages/NotFound";

export function BlogPage() {
  usePageMeta(
    "Blog | Web Design & SEO Insights for Pampanga Businesses",
    "Practical guides on website costs, choosing a web designer, local SEO and what Clark businesses need from a website.",
  );

  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={<>Practical notes on websites, search and <span className="text-gold-gradient">local business.</span></>}
        intro="No fluff and no jargon: buying guides, pricing breakdowns and local SEO advice written for business owners in Pampanga who'd rather not become web experts."
        crumbs={[{ label: "Blog" }]}
        chips={[...new Set(posts.map((p) => p.category))]}
      >
        <GoldButton to="/contact/">Ask a question</GoldButton>
        <GhostButton to="/pricing/">See pricing</GhostButton>
      </PageHero>

      <Section divider>
        <Reveal>
          <article className="group relative overflow-hidden rounded-[2rem] border border-gold-400/20 bg-gradient-to-br from-gold-500/[0.08] via-white/[0.03] to-ink-900 p-8 sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-400/10 blur-[90px]" aria-hidden="true" />
            <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/25 bg-gold-400/10 px-3 py-1 font-medium text-gold-300">
                    <Tag className="h-3 w-3" aria-hidden="true" />
                    {featured.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                    {featured.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {featured.readTime}
                  </span>
                </div>
                <h2 className="mt-5 font-display text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-[2.2rem]">{featured.title}</h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400">{featured.excerpt}</p>
                <div className="mt-7">
                  <Link to={`/blog/${featured.slug}/`} className="group/link inline-flex items-center gap-2 text-sm font-semibold text-gold-400 transition-colors hover:text-gold-300">
                    Read the guide
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </div>
              <div className="glass rounded-3xl p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold-400">In this guide</p>
                <ul className="mt-4 space-y-3">
                  {featured.blocks.filter((b) => b.type === "h2").slice(0, 4).map((block) => (
                    <li key={block.text} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" aria-hidden="true" />
                      {block.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </Reveal>
      </Section>

      <Section ambient divider>
        <SectionIntro eyebrow="All articles" title="More reading for Pampanga business owners" align="left" />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={0.08 * i}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand eyebrow="Not sure where to start?" title="Let's talk about your website instead." intro="Reading is useful, but a short conversation about your actual business is faster. Send a message and we'll tell you what we'd do." />
    </>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-white/[0.012] p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/30">
      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
        <span className="rounded-full border border-white/[0.08] px-3 py-1 font-medium text-gold-400/90">{post.category}</span>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          {post.readTime}
        </span>
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-gold-300">{post.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{post.excerpt}</p>
      <div className="mt-6 flex items-center justify-between border-t border-white/[0.07] pt-5">
        <span className="text-xs text-slate-500">{post.date}</span>
        <Link to={`/blog/${post.slug}/`} className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-400" aria-label={`Read ${post.title}`}>
          Read
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export function BlogPostPage({ slug }: { slug: string }) {
  const post = getPost(slug);
  usePageMeta(post ? post.metaTitle : "Article not found | Web Design Pampanga", post?.metaDescription);

  if (!post) return <NotFoundPage />;

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        <section className="relative overflow-hidden pb-10 pt-32 sm:pt-36 lg:pt-40">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="bg-grid bg-grid-fade absolute inset-0" />
            <div className="animate-aurora absolute -top-40 left-1/2 h-[440px] w-[700px] -translate-x-1/2 rounded-full bg-gold-500/[0.1] blur-[130px]" />
          </div>
          <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                <li><Link to="/" className="transition-colors hover:text-gold-300">Home</Link></li>
                <li className="flex items-center gap-2">
                  <span className="text-slate-700" aria-hidden="true">/</span>
                  <Link to="/blog/" className="transition-colors hover:text-gold-300">Blog</Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-slate-700" aria-hidden="true">/</span>
                  <span className="text-slate-400">{post.category}</span>
                </li>
              </ol>
            </nav>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/25 bg-gold-400/10 px-3 py-1 font-medium text-gold-300">
                <Tag className="h-3 w-3" aria-hidden="true" />
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {post.readTime}
              </span>
            </div>
            <h1 className="mt-6 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.85rem]">{post.title}</h1>
            <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">{post.excerpt}</p>
            <p className="mt-6 text-sm text-slate-500">By {post.author} · {site.location}</p>
          </div>
        </section>

        <Section className="pt-6">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-6">
              {post.blocks.map((block, i) => {
                if (block.type === "h2") {
                  return (
                    <Reveal key={i} y={18}>
                      <h2 className="pt-6 font-display text-xl font-bold tracking-tight text-white sm:text-2xl">{block.text}</h2>
                    </Reveal>
                  );
                }
                if (block.type === "ul") {
                  return (
                    <Reveal key={i} y={18}>
                      <ul className="space-y-3 rounded-3xl border border-white/[0.07] bg-white/[0.03] p-6 sm:p-7">
                        {block.items?.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-slate-300">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </Reveal>
                  );
                }
                if (block.type === "quote") {
                  return (
                    <Reveal key={i} y={18}>
                      <blockquote className="rounded-3xl border border-gold-400/20 bg-gradient-to-r from-gold-500/[0.08] to-white/[0.02] px-7 py-7">
                        <p className="font-display text-lg font-semibold leading-snug text-gold-100 sm:text-xl">{block.text}</p>
                      </blockquote>
                    </Reveal>
                  );
                }
                return (
                  <Reveal key={i} y={18}>
                    <p className="text-[15px] leading-relaxed text-slate-400 sm:text-base">{block.text}</p>
                  </Reveal>
                );
              })}
            </div>
            <Reveal delay={0.1}>
              <div className="mt-14 rounded-[2rem] border border-white/[0.07] bg-gradient-to-b from-white/[0.045] to-white/[0.012] p-8">
                <Eyebrow>Written by the studio</Eyebrow>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  {site.name} is an independent web design studio based in Pampanga. We design clear, conversion-focused websites for businesses in Clark, Angeles City, San Fernando and across the province.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <GoldButton to="/contact/" className="sm:w-auto">Get My Fixed-Price Quote</GoldButton>
                  <GhostButton to="/portfolio/">See sample work</GhostButton>
                </div>
              </div>
            </Reveal>
          </div>
        </Section>

        <Section ambient divider>
          <SectionIntro eyebrow="Keep reading" title="Related articles" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {related.map((item, i) => (
              <Reveal key={item.slug} delay={0.08 * i}>
                <PostCard post={item} />
              </Reveal>
            ))}
          </div>
        </Section>
      </article>

      <CTABand eyebrow="Ready when you are" title="Your next customer could be looking for you right now." intro="Give them a website that makes the right first impression. No obligation — let's talk about your business first." />
    </>
  );
}
