import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Eyebrow, Section } from "@/components/site/bits";
import { atendimentos, brandShareImage } from "@/data/site";

export const Route = createFileRoute("/atendimentos/")({
  head: () => ({
    meta: [
      { title: "Atendimentos | Clínica Evoluta" },
      {
        name: "description",
        content:
          "Cinco frentes de atendimento: dificuldades de aprendizagem, TDAH, dislexia, avaliação e orientação a pais e escolas.",
      },
      { property: "og:title", content: "Atendimentos | Clínica Evoluta" },
      {
        property: "og:description",
        content: "Conheça as especialidades de atendimento e como cada processo funciona.",
      },
      { property: "og:image", content: brandShareImage },
      { name: "twitter:image", content: brandShareImage },
    ],
  }),
  component: AtendimentosIndex,
});

function AtendimentosIndex() {
  return (
    <>
      <section className="bg-deep px-5 py-20 text-deep-foreground lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow text-deep-foreground/60">Atendimentos</p>
          <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Cinco frentes de trabalho, um mesmo cuidado
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-deep-foreground/70">
            Escolha a especialidade para ver como o processo acontece, para quem é indicado e quais são
            as informações práticas de duração e formato.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-px bg-border">
          {atendimentos.map((a, i) => (
            <Link
              key={a.slug}
              to="/atendimentos/$slug"
              params={{ slug: a.slug }}
              className="group grid gap-6 bg-background p-6 transition-colors hover:bg-muted sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-8"
            >
              <img
                src={a.imagem}
                alt={a.titulo}
                loading="lazy"
                width={1200}
                height={900}
                className="h-40 w-full object-cover sm:h-24 sm:w-36"
              />
              <div className="min-w-0">
                <Eyebrow>{String(i + 1).padStart(2, "0")} · {a.etiqueta}</Eyebrow>
                <h2 className="mt-2 font-display text-3xl">{a.titulo}</h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {a.resumo}
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
