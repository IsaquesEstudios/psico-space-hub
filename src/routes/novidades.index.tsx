import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Section, WhatsAppButton } from "@/components/site/bits";
import { brandShareImage, fotosJessica, novidades, site } from "@/data/site";


export const Route = createFileRoute("/novidades/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Novidades | Clínica Evoluta" },
      {
        name: "description",
        content:
          "Agenda de vagas, turmas abertas, formações em escolas e encontros com famílias.",
      },
      { property: "og:title", content: "Novidades | Clínica Evoluta" },
      {
        property: "og:description",
        content: "Acompanhe vagas, turmas e eventos do consultório.",
      },
      { property: "og:image", content: brandShareImage },
      { name: "twitter:image", content: brandShareImage },
    ],
  }),
  component: Novidades,
});

function Novidades() {
  return (
    <>
      <section className="relative flex min-h-[600px] items-center overflow-hidden bg-deep px-5 py-24 text-deep-foreground lg:min-h-[720px] lg:px-10 lg:py-28">
        <img
          src={fotosJessica.novidades}
          alt="Jéssica Pelissari trabalhando em seu consultório"
          width={1080}
          height={720}
          className="absolute inset-0 h-full w-full object-cover object-top lg:object-[72%_20%]"
        />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-deep from-[0%] via-deep/90 via-[34%] to-transparent to-[82%] lg:block" />
        <div className="absolute inset-0 bg-deep/70 lg:hidden" />
        <div className="relative mx-auto w-full max-w-7xl">
          <p className="eyebrow text-deep-foreground/60">Novidades</p>
          <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Avisos, vagas e agenda
          </h1>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-4xl">
          {novidades.map((n) => (
            <Link
              key={n.slug}
              to="/novidades/$slug"
              params={{ slug: n.slug }}
              className="group grid gap-4 border-b border-border py-10 sm:grid-cols-[10rem_1fr] sm:gap-10"
            >
              <div>
                <p className="eyebrow text-primary">{n.etiqueta}</p>
                <p className="mt-2 text-xs text-muted-foreground">{n.data}</p>
              </div>
              <div className="min-w-0">
                <h2 className="font-display text-3xl leading-snug transition-colors group-hover:text-primary">
                  {n.titulo}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{n.texto}</p>
                <span className="eyebrow mt-4 inline-flex items-center gap-2 text-primary">
                  Ler a notícia
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}


          <div className="mt-14 bg-muted p-6 text-center sm:p-10">
            <h2 className="font-display text-3xl">Quer ser avisada das próximas turmas?</h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Envie uma mensagem pedindo para entrar na lista de espera e aviso assim que abrir vaga.
            </p>
            <div className="mt-8">
              <WhatsAppButton href={site.whatsapp} label="Entrar na lista" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
