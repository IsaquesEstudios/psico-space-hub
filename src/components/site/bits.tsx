import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow text-primary">{children}</p>;
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-5 py-20 lg:px-10 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function WhatsAppButton({ href, label = "Falar no WhatsApp" }: { href: string; label?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="eyebrow inline-flex items-center gap-2 bg-primary px-7 py-4 text-primary-foreground transition-opacity hover:opacity-90"
    >
      {label}
    </a>
  );
}
