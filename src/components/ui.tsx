import clsx from "clsx";
import type { ReactNode } from "react";

/** Encabezado de sección: antetítulo + título + bajada opcional. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  id,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  id?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={clsx("reveal max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      )}
      <h2 id={id} className="font-display text-[2.6rem] leading-[1.02] text-balance sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {lead && <p className="mt-5 text-lg leading-relaxed text-pretty text-ink-soft">{lead}</p>}
    </div>
  );
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}

const buttonBase =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition hover:brightness-110 active:scale-[0.98]";

export const buttonStyles = {
  base: buttonBase,
  primary: `${buttonBase} bg-accent text-accent-ink`,
  ghost:
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-current/30 px-6 text-sm font-semibold transition hover:bg-current/10 active:scale-[0.98]",
};
