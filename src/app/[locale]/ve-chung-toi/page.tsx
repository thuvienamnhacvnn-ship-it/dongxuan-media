import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/home/CtaBand";
import { Process } from "@/components/home/Process";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site-config";
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
    title: dict.pages.about.title,
    description: dict.pages.about.subtitle,
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);
  const about = dict.pages.about;

  return (
    <>
      <PageHero
        eyebrow={dict.nav.about}
        title={about.title}
        subtitle={about.subtitle}
      />

      <Section className="bg-paper-white">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeader title={about.storyTitle} className="mb-6" />
              <div className="space-y-5">
                {about.story.map((p) => (
                  <p
                    key={p.slice(0, 32)}
                    className="text-base leading-relaxed text-ink-black/70 sm:text-lg"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="space-y-4 lg:col-span-5">
            <Reveal delay={0.08}>
              <div className="border border-ink-black/10 bg-ink-black p-7 text-warm-white">
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">
                  {about.visionTitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-warm-white/80">
                  {about.vision}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="border border-brand-red/20 bg-brand-red/5 p-7">
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-brand-red">
                  {about.missionTitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-black/70">
                  {about.mission}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="bg-warm-white">
        <SectionHeader title={about.valuesTitle} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {about.values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.05}>
              <div className="h-full border border-ink-black/10 bg-paper-white p-6">
                <span className="font-display text-3xl font-bold text-brand-red/25">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold uppercase tracking-wide">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-black/60">
                  {v.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-paper-white">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <SectionHeader title={about.advantageTitle} className="mb-4" />
            <p className="text-base leading-relaxed text-ink-black/70">
              {about.advantage}
            </p>
            <p className="mt-6 border-l-2 border-brand-gold pl-4 font-display text-xl font-bold uppercase leading-snug text-ink-black">
              {about.story[2]}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="border border-ink-black/10 bg-warm-white p-6">
              <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
                Team · Placeholder
              </p>
              <div className="grid grid-cols-3 gap-3">
                {["Design", "Print", "Digital"].map((role) => (
                  <div
                    key={role}
                    className="flex aspect-square flex-col items-center justify-center border border-ink-black/10 bg-[repeating-linear-gradient(45deg,#f7f3ea,#f7f3ea_6px,#fffdf8_6px,#fffdf8_12px)]"
                  >
                    <span className="h-10 w-10 rounded-full bg-ink-black/10" />
                    <span className="mt-2 text-[10px] font-bold uppercase tracking-wider text-ink-black/50">
                      {role}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-ink-black/45">
                [CẬP NHẬT] Ảnh đội ngũ thật
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Process locale={locale} dict={dict} />

      <Section className="bg-warm-white">
        <SectionHeader
          title={
            locale === "de" ? "Standort" : locale === "en" ? "Location" : "Vị trí"
          }
        />
        <div className="overflow-hidden border border-ink-black/10">
          <iframe
            title="Map — Dong Xuan Center Berlin"
            src={siteConfig.maps.embedUrl}
            className="h-72 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Section>

      <CtaBand locale={locale} dict={dict} />
    </>
  );
}
