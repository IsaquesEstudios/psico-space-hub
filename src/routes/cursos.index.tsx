import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Eyebrow, Section, WhatsAppButton } from "@/components/site/bits";
import { brandShareImage, cursos, fotosJessica, site } from "@/data/site";

export const Route = createFileRoute("/cursos/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Cursos | Clínica Evoluta" },
      {
        name: "description",
        content:
          "Cursos online para educadores, terapeutas e famílias: alfabetização, funções executivas e apoio familiar.",
      },
      { property: "og:title", content: "Cursos | Clínica Evoluta" },
      {
        property: "og:description",
        content: "Formações práticas com encontros ao vivo e material de apoio.",
      },
      { property: "og:image", content: brandShareImage },
      { name: "twitter:image", content: brandShareImage },
    ],
  }),
  component: CursosIndex,
});

function CursosIndex() {
  return (
    <>
      <section className="relative flex min-h-[600px] items-center overflow-hidden bg-deep px-5 py-24 text-deep-foreground lg:min-h-[720px] lg:px-10 lg:py-28">
        <img
          src={fotosJessica.cursos}
          alt="Jéssica Pelissari, neuropsicóloga e mentora"
          width={1080}
          height={720}
          className="absolute inset-0 h-full w-full object-cover object-top lg:object-[72%_20%]"
        />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-deep from-[0%] via-deep/90 via-[34%] to-transparent to-[82%] lg:block" />
        <div className="absolute inset-0 bg-deep/50 lg:hidden" />
        <div className="relative mx-auto w-full max-w-7xl">
          <p className="eyebrow text-deep-foreground/60">Cursos</p>
          <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Formações práticas, para aplicar na semana seguinte
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-deep-foreground/70">
            Encontros ao vivo, material de apoio e espaço para trazer casos reais. Inscrições e valores
            pelo WhatsApp.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          {cursos.map((c) => (
            <article key={c.slug} className="flex flex-col bg-muted">
              <img
                src={c.imagem}
                alt={`Jéssica, da Clínica Evoluta — ${c.titulo}`}
                loading="lazy"
                width={1200}
                height={800}
                className="h-56 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <Eyebrow>{c.etiqueta}</Eyebrow>
                <h2 className="mt-3 font-display text-3xl leading-snug">{c.titulo}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.resumo}</p>
                <dl className="mt-6 space-y-2 text-xs text-muted-foreground">
                  <div className="flex gap-2">
                    <dt>Duração:</dt>
                    <dd className="text-foreground">{c.duracao}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt>Formato:</dt>
                    <dd className="text-foreground">{c.formato}</dd>
                  </div>
                </dl>
                <div className="mt-8 flex flex-wrap items-center gap-5 pt-2">
                  <WhatsAppButton href={site.whatsapp} label="Quero me inscrever" />
                  <Link
                    to="/cursos/$slug"
                    params={{ slug: c.slug }}
                    className="eyebrow inline-flex items-center gap-2 transition-colors hover:text-primary"
                  >
                    Detalhes
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
