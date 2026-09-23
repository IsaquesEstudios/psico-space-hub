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
  const horarios = [
    { dia: "Segunda a sexta", hora: "07h às 19h" },
    { dia: "Sábado e domingo", hora: "Fechado" },
  ];

  const redes = [
    { nome: site.instagram, href: site.instagramUrl, icone: <Instagram className="h-4 w-4" aria-hidden="true" /> },
    { nome: site.youtube, href: site.youtubeUrl, icone: <Youtube className="h-4 w-4" aria-hidden="true" /> },
    { nome: site.tiktok, href: site.tiktokUrl, icone: <TikTokIcon className="h-4 w-4" /> },
  ];

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
            href={site.telefoneLink}
            className="mt-4 flex gap-3 text-sm leading-relaxed text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            {site.telefone}
          </a>
          <div className="mt-4 flex gap-3 text-sm leading-relaxed text-muted-foreground">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <dl>
              {horarios.map((h) => (
                <div key={h.dia} className="grid grid-cols-[minmax(0,1fr)_auto] gap-4">
                  <dt>{h.dia}</dt>
                  <dd>{h.hora}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
            {redes.map((r) => (
              <a
                key={r.href}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {r.icone}
                {r.nome}
              </a>
            ))}
          </div>
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

