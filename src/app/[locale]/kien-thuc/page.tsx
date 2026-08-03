import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/ui/Section";
import { blogPosts, blogCategories } from "@/data/blog";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  const dict = await getDictionary(localeParam);
  return {
    title: dict.pages.blog.title,
    description: dict.pages.blog.subtitle,
  };
}

export default async function BlogIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const base = `/${locale}`;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={dict.pages.blog.title}
        subtitle={dict.pages.blog.subtitle}
      />
      <Section className="bg-paper-white">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => {
            const cat =
              blogCategories[post.category as keyof typeof blogCategories];
            return (
              <article
                key={post.slug}
                className="flex flex-col border border-ink-black/10 bg-warm-white transition-shadow hover:shadow-[0_16px_40px_-24px_rgba(17,18,22,0.4)]"
              >
                <div
                  className="h-36 border-b border-ink-black/5"
                  style={{
                    background: `linear-gradient(135deg, #C8101E22, #D9A12E33), repeating-linear-gradient(90deg, #f7f3ea 0 12px, #fffdf8 12px 24px)`,
                  }}
                />
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-red">
                    {cat?.[locale] ?? post.category} · {post.readMinutes}{" "}
                    {dict.pages.blog.minutes}
                  </p>
                  <h2 className="mt-2 font-display text-lg font-bold uppercase leading-snug text-ink-black">
                    <Link
                      href={`${base}/kien-thuc/${post.slug}`}
                      className="hover:text-brand-red"
                    >
                      {post.title[locale]}
                    </Link>
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-black/65">
                    {post.excerpt[locale]}
                  </p>
                  <Link
                    href={`${base}/kien-thuc/${post.slug}`}
                    className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-brand-red"
                  >
                    {dict.pages.blog.readMore} →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Section>
    </>
  );
}
