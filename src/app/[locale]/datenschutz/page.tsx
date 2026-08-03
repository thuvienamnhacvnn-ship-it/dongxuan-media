import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/PageHero";
import { Section } from "@/components/ui/Section";
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
  return { title: dict.pages.legal.datenschutzTitle };
}

export default async function DatenschutzPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <PageHero title={dict.pages.legal.datenschutzTitle} />
      <Section className="bg-paper-white">
        <div className="mx-auto max-w-3xl space-y-4 text-sm leading-relaxed text-ink-black/75">
          <p className="border border-brand-gold/40 bg-brand-gold/10 px-4 py-3 text-ink-black">
            {dict.pages.legal.disclaimer}
          </p>
          <h2 className="font-display text-lg font-bold uppercase text-ink-black">
            1. Verantwortliche Stelle
          </h2>
          <p>
            [CẬP NHẬT] Name, Anschrift, E-Mail des Verantwortlichen gemäß DSGVO.
          </p>
          <h2 className="font-display text-lg font-bold uppercase text-ink-black">
            2. Hosting & Server-Logs
          </h2>
          <p>
            [CẬP NHẬT] Angaben zum Hosting-Anbieter (z. B. Vercel) und
            Server-Log-Verarbeitung.
          </p>
          <h2 className="font-display text-lg font-bold uppercase text-ink-black">
            3. Kontaktformulare
          </h2>
          <p>
            Daten aus Formularen (Name, E-Mail, Telefon, Nachricht, Dateien)
            werden zur Bearbeitung von Anfragen verarbeitet. [CẬP NHẬT]
            Speicherdauer und Auftragsverarbeiter.
          </p>
          <h2 className="font-display text-lg font-bold uppercase text-ink-black">
            4. Cookies
          </h2>
          <p>
            Essenzielle Cookies sind erforderlich. Analytics und Marketing nur
            nach Einwilligung (Cookie-Banner). Analytics wird nicht geladen, bis
            der Nutzer zustimmt.
          </p>
          <h2 className="font-display text-lg font-bold uppercase text-ink-black">
            5. Ihre Rechte
          </h2>
          <p>
            Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch,
            Datenübertragbarkeit und Beschwerde bei einer Aufsichtsbehörde —
            Details durch Fachberatung ergänzen.
          </p>
        </div>
      </Section>
    </>
  );
}
