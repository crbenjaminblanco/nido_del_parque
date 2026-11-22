import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { navLinks } from "./nav-items";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";
import { MobileMenu } from "./mobile-menu";
import { HeaderShell } from "./header-shell";

export function Header({ t, locale }: { t: Dictionary; locale: Locale }) {
  const links = navLinks(t);
  const switcherLabels = { label: t.a11y.language, names: t.languageNames };

  return (
    <HeaderShell>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href={`/${locale}`} aria-label={t.a11y.home} className="flex min-h-11 shrink-0 items-center gap-2.5">
          <Image src="/images/logo.png" alt="" width={538} height={253} preload className="header-logo h-7 w-auto dark:invert" />
          <span className="font-display text-xl">Nido del Parque</span>
        </Link>

        <nav aria-label={t.a11y.mainNav} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="inline-flex min-h-11 items-center rounded-full px-3.5 text-sm font-medium text-ink-soft transition-colors hover:bg-paper-2 hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <div className="hidden sm:block">
            <LanguageSwitcher locale={locale} {...switcherLabels} />
          </div>
          <ThemeToggle label={t.a11y.themeToggle} />
          <MobileMenu
            links={links}
            openLabel={t.a11y.openMenu}
            closeLabel={t.a11y.closeMenu}
            navLabel={t.a11y.mainNav}
            switcher={<LanguageSwitcher locale={locale} {...switcherLabels} wide />}
          />
        </div>
      </div>
    </HeaderShell>
  );
}
