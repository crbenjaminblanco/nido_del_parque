import Link from "next/link";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { buttonStyles, Container } from "@/components/ui";

export default async function NotFound() {
  const locale = await getLocale();
  const t = await getDictionary(locale);
  return (
    <section className="py-32">
      <Container className="max-w-2xl text-center">
        <p className="font-display text-8xl text-accent">404</p>
        <h1 className="mt-6 font-display text-5xl">{t.notFound.title}</h1>
        <p className="mt-4 text-lg text-ink-soft">{t.notFound.text}</p>
        <Link href={`/${locale}`} className={`${buttonStyles.primary} mt-8`}>
          {t.notFound.cta}
        </Link>
      </Container>
    </section>
  );
}
