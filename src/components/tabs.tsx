"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import clsx from "clsx";

type Tab = { id: string; label: string; panel: ReactNode };

/** Pestañas accesibles (flechas, Inicio, Fin). Los paneles llegan ya renderizados del servidor. */
export function Tabs({ tabs, label, className }: { tabs: Tab[]; label: string; className?: string }) {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: KeyboardEvent) => {
    const next: Record<string, number> = {
      ArrowRight: (active + 1) % tabs.length,
      ArrowLeft: (active - 1 + tabs.length) % tabs.length,
      Home: 0,
      End: tabs.length - 1,
    };
    if (!(e.key in next)) return;
    e.preventDefault();
    setActive(next[e.key]);
    refs.current[next[e.key]]?.focus();
  };

  return (
    <div className={className}>
      <div
        role="tablist"
        aria-label={label}
        onKeyDown={onKeyDown}
        className="flex w-full gap-1 rounded-[1.5rem] border border-line bg-card p-1 sm:inline-flex sm:w-auto sm:rounded-full"
      >
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            role="tab"
            type="button"
            id={`${baseId}-tab-${tab.id}`}
            aria-selected={i === active}
            aria-controls={`${baseId}-panel-${tab.id}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className={clsx(
              "min-h-11 flex-1 rounded-[1.25rem] px-2 py-1.5 text-center text-sm leading-tight font-semibold transition-colors sm:flex-none sm:rounded-full sm:px-5 sm:whitespace-nowrap",
              i === active ? "bg-ink text-paper" : "text-ink-soft hover:text-ink",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab, i) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`${baseId}-panel-${tab.id}`}
          aria-labelledby={`${baseId}-tab-${tab.id}`}
          hidden={i !== active}
          className="mt-6 animate-[fade_.35s_ease]"
        >
          {tab.panel}
        </div>
      ))}
    </div>
  );
}
