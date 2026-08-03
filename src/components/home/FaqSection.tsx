import { Section, SectionHeader } from "@/components/ui/Section";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

export function FaqSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <Section className="bg-paper-white" id="faq">
      <SectionHeader
        eyebrow="FAQ"
        title={dict.faqSection?.title ?? "Câu hỏi thường gặp"}
        subtitle={dict.faqSection?.subtitle}
      />
      <FaqAccordion locale={locale} />
    </Section>
  );
}
