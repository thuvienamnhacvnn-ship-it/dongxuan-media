import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/ui/Section";
import {
  blogPosts,
  blogCategories,
  getPostBySlug,
  getRelatedPosts,
} from "@/data/blog";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return ["vi", "de", "en"].flatMap((locale) =>
    blogPosts.map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) return {};
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title[localeParam],
    description: post.excerpt[localeParam],
    openGraph: {
      title: post.title[localeParam],
      description: post.excerpt[localeParam],
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const dict = await getDictionary(locale);
  const related = getRelatedPosts(slug);
  const cat = blogCategories[post.category as keyof typeof blogCategories];
  const base = `/${locale}`;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title[locale],
    datePublished: post.date,
    description: post.excerpt[locale],
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <PageHero
        eyebrow={cat?.[locale] ?? post.category}
        title={post.title[locale]}
        subtitle={`${post.date} · ${post.readMinutes} ${dict.pages.blog.minutes}`}
      />
      <Section className="bg-paper-white">
        <article className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-ink-black/75">
            {post.excerpt[locale]}
          </p>
          <div className="mt-8 space-y-5">
            {post.body.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-ink-black/70">
                {para[locale]}
              </p>
            ))}
          </div>
          <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-ink-black/40">
            {post.tags[locale]}
          </p>
        </article>

        <div className="mx-auto mt-16 max-w-3xl border-t border-ink-black/10 pt-10">
          <h2 className="font-display text-lg font-bold uppercase tracking-wide">
            {dict.pages.blog.related}
          </h2>
          <ul className="mt-4 space-y-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`${base}/kien-thuc/${r.slug}`}
                  className="text-sm font-medium text-brand-red hover:text-ink-black"
                >
                  {r.title[locale]}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={`${base}/kien-thuc`}
            className="mt-6 inline-block text-xs font-bold uppercase tracking-[0.16em] text-ink-black/50"
          >
            ← {dict.pages.blog.title}
          </Link>
        </div>
      </Section>
    </>
  );
}
