import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";

import imagemOnline from "@/assets/atendimento-online.webp.asset.json";
import { Eyebrow, Section, WhatsAppButton } from "@/components/site/bits";
import { atendimentosOnline } from "@/data/atendimento-online";
import { brandShareImage, site } from "@/data/site";

const titulo = "Atendimento Online | Clínica Evoluta";
const descricao =
  "Conheça os atendimentos on-line para adultos da Clínica Evoluta: avaliação neuropsicológica e psicoterapia com Terapia Cognitivo-Comportamental.";
const url = "https://psico-space-hub.lovable.app/atendimento-online";

export const Route = createFileRoute("/atendimento-online/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
      { property: "og:image", content: brandShareImage },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: brandShareImage },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: AtendimentoOnlinePage,
});

function AtendimentoOnlinePage() {
  return (
    <>
      <section className="relative flex min-h-[600px] items-end overflow-hidden bg-deep px-5 pb-16 pt-36 text-deep-foreground lg:min-h-[720px] lg:px-10 lg:pb-24">
        <img
          src={imagemOnline.url}
          alt="Mesa preparada para atendimento psicológico por videochamada"
          width={1344}
          height={896}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-deep/65 lg:bg-gradient-to-r lg:from-deep lg:from-[0%] lg:via-deep/85 lg:via-[42%] lg:to-deep/20" />
        <div className="relative mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <p className="eyebrow text-deep-foreground/70">Cuidado onde você estiver</p>
            <h1 className="mt-5 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Atendimento Online
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-deep-foreground/85 sm:text-lg">
              A Clínica Evoluta oferece atendimento psicológico especializado de forma on-line,
              proporcionando praticidade, acolhimento e acompanhamento profissional, com a mesma
              atenção e qualidade do atendimento clínico.
            </p>
            <div className="mt-8">
              <WhatsAppButton href={site.whatsapp} label="Falar com equipe Evoluta" />
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Atendimentos on-line</Eyebrow>
          <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Escolha o atendimento
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {atendimentosOnline.map((a) => (
            <Link
              key={a.slug}
              to="/atendimento-online/$slug"
              params={{ slug: a.slug }}
              className="group block overflow-hidden border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <img
                src={a.imagem}
                alt={a.alt}
                width={1536}
                height={1024}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="p-8">
                <p className="eyebrow text-primary">{a.etiqueta}</p>
                <h3 className="mt-3 font-display text-2xl leading-tight">{a.titulo}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{a.resumo}</p>
                <span className="eyebrow mt-6 inline-flex items-center gap-2 text-primary">
                  Conhecer este atendimento <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-primary text-primary-foreground">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_auto] lg:items-end">
          <div>
            <p className="eyebrow text-primary-foreground/70">Próximo passo</p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Quer entender qual atendimento on-line é indicado para você?
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-primary-foreground/80">
              Converse com a equipe Evoluta para receber orientação sobre o atendimento mais adequado
              à sua necessidade.
            </p>
          </div>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="eyebrow inline-flex max-w-full items-center justify-center gap-2 bg-deep px-6 py-4 text-center text-deep-foreground transition-opacity hover:opacity-90"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Falar com equipe Evoluta
          </a>
        </div>
      </Section>
    </>
  );
}

