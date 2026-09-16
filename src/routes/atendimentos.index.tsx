import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Eyebrow, Section, WhatsAppButton } from "@/components/site/bits";
import { atendimentos, brandShareImage, fotosJessica, site } from "@/data/site";

export const Route = createFileRoute("/atendimentos/")({
  staticData: { sitemap: true },
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
      <section className="relative flex min-h-[600px] items-center overflow-hidden bg-deep px-5 py-24 text-deep-foreground lg:min-h-[720px] lg:px-10 lg:py-28">
        <img
          src={fotosJessica.atendimentos}
          alt="Jéssica Pelissari, neuropsicóloga e diretora da Clínica Evoluta"
          width={1080}
          height={720}
          className="absolute inset-0 h-full w-full object-cover object-top lg:object-[72%_20%]"
        />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-deep from-[0%] via-deep/90 via-[34%] to-transparent to-[82%] lg:block" />
        <div className="absolute inset-0 bg-deep/45 lg:hidden" />
        <div className="relative mx-auto w-full max-w-7xl">
          <p className="eyebrow text-deep-foreground/60">Atendimentos</p>
          <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Cuidado especializado para compreender cada pessoa em sua singularidade
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-deep-foreground/70">
            Na Clínica Evoluta, acreditamos que cada pessoa possui uma história, um ritmo e necessidades
            únicas. Nossa equipe multidisciplinar atua na avaliação, intervenção e acompanhamento,
            considerando aspectos cognitivos, emocionais, comportamentais, sociais e de aprendizagem.
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

      <Section className="bg-deep text-deep-foreground">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_auto] lg:items-end">
          <div>
            <p className="eyebrow text-deep-foreground/60">Estamos por perto</p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl">
              Não sabe qual atendimento procurar?
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-deep-foreground/70">
              Você não precisa saber exatamente qual profissional procurar. Nossa equipe pode ajudar você
              a compreender qual avaliação ou especialidade é mais adequada para a sua necessidade.
            </p>
          </div>
          <WhatsAppButton href={site.whatsapp} label="Falar com equipe Evoluta" />
        </div>
      </Section>
    </>
  );
}
