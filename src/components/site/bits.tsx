import type { ReactNode } from "react";
import { MapPin } from "lucide-react";

import { mapaEmbedUrl, mapaLinkUrl, site } from "@/data/site";


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
    <section id={id} className={`px-5 py-16 sm:py-20 lg:px-10 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function WhatsAppButton({ href, label = "Falar com equipe Evoluta" }: { href: string; label?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="eyebrow inline-flex max-w-full items-center justify-center gap-2 bg-primary px-6 py-4 text-center text-primary-foreground transition-opacity hover:opacity-90 sm:px-7"
    >
      {label}
    </a>
  );
}
