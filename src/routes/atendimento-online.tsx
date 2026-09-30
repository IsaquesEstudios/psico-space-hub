import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle } from "lucide-react";

import imagemOnline from "@/assets/atendimento-online.webp.asset.json";
import { Eyebrow, Section, WhatsAppButton } from "@/components/site/bits";
import { brandShareImage, site } from "@/data/site";

const titulo = "Atendimento Online | Clínica Evoluta";
const descricao =
  "Conheça os atendimentos on-line para adultos da Clínica Evoluta: avaliação neuropsicológica e psicoterapia com Terapia Cognitivo-Comportamental.";
const url = "https://psico-space-hub.lovable.app/atendimento-online";

export const Route = createFileRoute("/atendimento-online")({
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

const possibilidadesAvaliacao = [
  "Atenção e concentração",
  "Memória",
  "Funções executivas",
  "Raciocínio",
  "Aprendizagem",
  "Organização e planejamento",
  "Aspectos emocionais e comportamentais",
  "Investigação de TDAH e outras condições do neurodesenvolvimento",
];

const possibilidadesPsicoterapia = [
  "Autoconhecimento",
  "Regulação emocional",
  "Desenvolvimento de habilidades",
  "Reestruturação de pensamentos",
  "Manejo de dificuldades emocionais",
  "Desenvolvimento de estratégias de enfrentamento",
  "Construção de novos comportamentos",
];

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
          <Eyebrow>Atendimento para adultos</Eyebrow>
          <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Acompanhamento especializado e humanizado
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Na Clínica Evoluta, cada pessoa é acompanhada de forma individualizada, considerando sua
            história, suas necessidades e seus objetivos.
          </p>
        </div>
      </Section>

      <Section className="bg-muted">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <article>
            <Eyebrow>Avaliação on-line</Eyebrow>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
              Avaliação Neuropsicológica para Adultos
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              A avaliação tem como objetivo investigar o funcionamento cognitivo, emocional e
              comportamental, contribuindo para uma compreensão mais ampla das dificuldades e
              potencialidades de cada pessoa.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              O processo é individualizado e conduzido de acordo com a demanda apresentada,
              considerando a história de vida, o contexto atual e os objetivos da avaliação.
            </p>
            <Lista itens={possibilidadesAvaliacao} />
            <Link
              to="/atendimentos/$slug"
              params={{ slug: "avaliacao-neuropsicologica" }}
              className="eyebrow mt-8 inline-flex items-center gap-2 text-primary"
            >
              Conhecer este atendimento <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </article>

          <article className="border-t border-border pt-12 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
            <Eyebrow>Psicoterapia on-line</Eyebrow>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
              Psicoterapia com Terapia Cognitivo-Comportamental
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              A psicoterapia baseada na Terapia Cognitivo-Comportamental oferece um espaço de
              acolhimento, escuta e desenvolvimento, auxiliando o paciente a compreender a relação
              entre pensamentos, emoções e comportamentos.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              A TCC pode acompanhar diferentes demandas emocionais e comportamentais, contribuindo
              para o desenvolvimento de estratégias mais funcionais para situações do cotidiano.
            </p>
            <Lista itens={possibilidadesPsicoterapia} />
            <Link
              to="/atendimentos/$slug"
              params={{ slug: "terapia-cognitivo-comportamental" }}
              className="eyebrow mt-8 inline-flex items-center gap-2 text-primary"
            >
              Conhecer este atendimento <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </article>
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

function Lista({ itens }: { itens: string[] }) {
  return (
    <ul className="mt-8 grid gap-3 sm:grid-cols-2">
      {itens.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed">
          <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}