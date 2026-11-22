"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { locales, type Locale } from "@/i18n/config";

type Props = {
  locale: Locale;
  label: string;
  names: Record<Locale, string>;
  wide?: boolean;
};

export function LanguageSwitcher({ locale, label, names, wide }: Props) {
  const pathname = usePathname() ?? `/${locale}`;
  const rest = pathname.split("/").slice(2).join("/");

  return (
    <div role="group" aria-label={label} className={clsx("flex rounded-full border border-line p-0.5", wide && "w-full")}>
      {locales.map((l) => {
        const active = l === locale;
        return (
          <Link
            key={l}
            href={`/${l}${rest ? `/${rest}` : ""}`}
            hrefLang={l}
            lang={l}
            aria-current={active ? "true" : undefined}
            className={clsx(
              "rounded-full text-center font-semibold transition-colors",
              wide ? "flex-1 px-3 py-2.5 text-sm" : "inline-flex min-h-10 items-center px-3 text-xs uppercase tracking-wider",
              active ? "bg-ink text-paper" : "text-ink-soft hover:text-ink",
            )}
          >
            <span aria-hidden={!wide}>{wide ? names[l] : l}</span>
            {!wide && <span className="sr-only">{names[l]}</span>}
          </Link>
        );
      })}
    </div>
  );
}
