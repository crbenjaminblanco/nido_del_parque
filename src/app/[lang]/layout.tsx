import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { localeTags, locales } from "@/i18n/config";
import { site } from "@/config/site";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BookingBar } from "@/components/booking-bar";
import { RevealObserver } from "@/components/reveal-observer";
import "../globals.css";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f3ee" },
    { media: "(prefers-color-scheme: dark)", color: "#0c1618" },
  ],
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getDictionary(locale);
  const languages = Object.fromEntries(locales.map((l) => [localeTags[l], `/${l}`]));

  return {
    metadataBase: new URL(site.url),
    title: { default: t.meta.title, template: t.meta.titleTemplate },
    description: t.meta.description,
    keywords: t.meta.keywords,
    applicationName: site.name,
    alternates: {
      canonical: `/${locale}`,
      languages: { ...languages, "x-default": "/es" },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: t.meta.title,
      description: t.meta.description,
      url: `/${locale}`,
      locale: localeTags[locale].replace("-", "_"),
      alternateLocale: locales.filter((l) => l !== locale).map((l) => localeTags[l].replace("-", "_")),
      images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: t.meta.ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
      images: ["/images/og.jpg"],
    },
    formatDetection: { telephone: false },
  };
}

/** Aplica el tema guardado (o el del sistema) antes del primer pintado. */
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t;if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.dataset.motion='on'}catch(e){}})()`;

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const locale = await getLocale();
  const t = await getDictionary(locale);

  return (
    <html
      lang={localeTags[locale]}
      data-theme="light"
      suppressHydrationWarning
      className={`${instrument.variable} ${jakarta.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh bg-paper text-ink">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          {t.a11y.skip}
        </a>
        <Header t={t} locale={locale} />
        <main id="contenido">{children}</main>
        <Footer t={t} />
        <BookingBar labels={{ ...t.bookingBar, whatsapp: t.a11y.floatingWhatsapp, newTab: t.a11y.newTab }} />
        <RevealObserver />
      </body>
    </html>
  );
}
