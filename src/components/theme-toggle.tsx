"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ label }: { label: string }) {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* almacenamiento no disponible: el cambio aplica solo a esta visita */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="grid size-11 place-items-center rounded-full text-ink-soft transition-colors hover:bg-paper-2 hover:text-ink"
    >
      <Sun aria-hidden className="hidden size-[18px] dark:block" />
      <Moon aria-hidden className="size-[18px] dark:hidden" />
    </button>
  );
}
