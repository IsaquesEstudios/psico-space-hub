import type { ReactNode } from "react";
import { Clock, Instagram, MapPin, Phone, Youtube } from "lucide-react";

import { mapaEmbedUrl, mapaLinkUrl, site } from "@/data/site";
import { TikTokIcon } from "@/components/site/TikTokIcon";


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

export function MapaLocalizacao() {
  return (
    <Section className="bg-muted">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
        <div>
          <Eyebrow>Onde atendemos</Eyebrow>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl">Nossa localização</h2>
          <p className="mt-5 flex gap-3 text-sm leading-relaxed text-muted-foreground">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            {site.cidade}
          </p>
          <a
            href={mapaLinkUrl}
            target="_blank"
            rel="noreferrer"
            className="eyebrow mt-8 inline-flex items-center gap-2 text-primary"
          >
            Abrir no Google Maps
          </a>
        </div>
        <iframe
          src={mapaEmbedUrl}
          title={`Mapa com a localização da ${site.nome}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-72 w-full border-0 sm:h-96"
        />
      </div>
    </Section>
  );
}

