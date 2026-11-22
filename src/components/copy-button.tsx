"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import clsx from "clsx";

type Props = { value: string; label: string; text: string; copiedLabel: string; className?: string };

/** Copia un dato (correo, teléfono) y confirma con un mensaje accesible. */
export function CopyButton({ value, label, text, copiedLabel, className }: Props) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(id);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      /* portapapeles no disponible: el dato sigue visible para copiarlo a mano */
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={label}
      className={clsx(
        "relative z-10 inline-flex min-h-11 min-w-11 items-center justify-center gap-1.5 rounded-full border border-line px-3 max-sm:px-0 text-xs font-semibold transition hover:bg-paper-2",
        className,
      )}
    >
      {copied ? <Check aria-hidden className="size-3.5 text-leaf" /> : <Copy aria-hidden className="size-3.5" />}
      <span aria-live="polite" className="max-sm:sr-only">
        {copied ? copiedLabel : text}
      </span>
    </button>
  );
}
