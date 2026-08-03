"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { blogPosts, blogCategories } from "@/data/blog";
import { media } from "@/data/media";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

const thumbs = [media.menu.src, media.marketing.src, media.signage.src];

export function InsightsPreview({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const posts = blogPosts.slice(0, 3);
  const base = `/${locale}`;
  const [featured, ...rest] = posts;

  return (
    <Section className="overflow-hidden bg-paper-white" animate={false}>
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <SectionHeader
          eyebrow="Blog"
          title={dict.pages.blog.title}
          subtitle={dict.pages.blog.subtitle}
          className="mb-0"
        />
        <Magnetic>
          <Link
            href={`${base}/kien-thuc`}
            className="group inline-flex items-center gap-1.5 border border-brand-red bg-brand-red px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-warm-white transition-colors hover:bg-brand-red-dark"
          >
            {dict.pages.blog.readMore}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Magnetic>
      </div>

      {/* Magazine asymmetric layout */}
      <div className="mt-12 grid gap-5 lg:grid-cols-12 lg:grid-rows-2">
        {featured && (
          <Reveal className="lg:col-span-7 lg:row-span-2">
            <Link
              href={`${base}/kien-thuc/${featured.slug}`}
              className="group relative flex h-full min-h-[320px] flex-col overflow-hidden border border-ink-black/10 bg-ink-black lg:min-h-[480px]"
            >
              <Image
                src={thumbs[0]}
                alt={featured.title[locale]}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover opacity-70 transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-black via-ink-black/40 to-transparent" />
              <div className="relative mt-auto p-6 sm:p-8">
                <span className="inline-block bg-brand-red px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-warm-white">
                  {blogCategories[
                    featured.category as keyof typeof blogCategories
                  ]?.[locale] ?? featured.category}
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold uppercase leading-tight text-warm-white sm:text-3xl">
                  <span className="underline-draw">{featured.title[locale]}</span>
                </h3>
                <p className="mt-3 max-w-md text-sm text-warm-white/70 line-clamp-2">
                  {featured.excerpt[locale]}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-gold-light transition-all group-hover:gap-3">
                  {dict.pages.blog.readMore}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        )}

        {rest.map((post, i) => {
          const cat =
            blogCategories[post.category as keyof typeof blogCategories];
          return (
            <Reveal key={post.slug} delay={0.1 + i * 0.08} className="lg:col-span-5">
              <motion.article
                whileHover={{ x: 6 }}
                className="group flex h-full overflow-hidden border border-ink-black/10 bg-warm-white"
              >
                <div className="relative hidden w-36 shrink-0 overflow-hidden sm:block">
                  <Image
                    src={thumbs[i + 1] ?? media.print.src}
                    alt={post.title[locale]}
                    fill
                    sizes="144px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-red">
                    {cat?.[locale] ?? post.category} · {post.readMinutes}{" "}
                    {dict.pages.blog.minutes}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-bold uppercase leading-snug text-ink-black">
                    <Link
                      href={`${base}/kien-thuc/${post.slug}`}
                      className="underline-draw hover:text-brand-red"
                    >
                      {post.title[locale]}
                    </Link>
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-ink-black/60 line-clamp-2">
                    {post.excerpt[locale]}
                  </p>
                  <Link
                    href={`${base}/kien-thuc/${post.slug}`}
                    className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.16em] text-brand-red transition-all group-hover:gap-2"
                  >
                    {dict.pages.blog.readMore}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
