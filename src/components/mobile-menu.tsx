"use client";

import { useEffect, useId, useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";

type Props = {
  links: { href: string; label: string }[];
  openLabel: string;
  closeLabel: string;
  navLabel: string;
  switcher: ReactNode;
};

export function MobileMenu({ links, openLabel, closeLabel, navLabel, switcher }: Props) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? closeLabel : openLabel}
        onClick={() => setOpen((v) => !v)}
        className="grid size-11 place-items-center rounded-full text-ink transition-colors hover:bg-paper-2"
      >
        {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-line bg-paper px-4 pt-6 pb-10"
      >
        <nav aria-label={navLabel}>
          <ul className="flex flex-col">
            {links.map((l, i) => (
              <li key={l.href} className="border-b border-line">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-4 font-display text-4xl"
                >
                  <span className="font-sans text-xs tabular-nums text-ink-soft">{String(i + 1).padStart(2, "0")}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-8">{switcher}</div>
      </div>
    </div>
  );
}
