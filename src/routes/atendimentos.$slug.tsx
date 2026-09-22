import { createFileRoute, notFound, redirect, Link } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle } from "lucide-react";

import { Eyebrow, MapaLocalizacao, Section, WhatsAppButton } from "@/components/site/bits";
import {
  atendimentos,
  brandShareImage,
  conteudosAtendimentos,
  fotosJessica,
  h1Atendimentos,
  jessicaBio,
  site,
  type Atendimento,
  type ConteudoAtendimento,
} from "@/data/site";


export const Route = createFileRoute("/atendimentos/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const redirecionamentosAntigos: Record<string, string> = {
      neuropsicologia: "avaliacao-neuropsicologica",
      "transtorno-do-espectro-autista": "avaliacao-neuropsicologica",
      tdah: "avaliacao-neuropsicologica",
      "dificuldades-de-aprendizagem": "avaliacao-neuropsicopedagogica",
      psicoterapia: "psicologia-infantil-tcc",
      aba: "intervencao-aba",
      psicopedagogia: "avaliacao-neuropsicopedagogica",
      neuropsicopedagogia: "avaliacao-neuropsicopedagogica",
      fonoaudiologia: "fonoaudiologia-infantil",
      "orientacao-familiar-e-escolar": "avaliacao-neuropsicopedagogica",
    };

    const slugAtual = redirecionamentosAntigos[params.slug];
    if (slugAtual) {
      throw redirect({
        to: "/atendimentos/$slug",
        params: { slug: slugAtual },
        replace: true,
      });
    }

    const item = atendimentos.find((atendimento) => atendimento.slug === params.slug);
    const conteudo = conteudosAtendimentos[params.slug];
    if (!item || !conteudo) throw notFound();
    return { item, conteudo };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Atendimento não encontrado" },
          { name: "robots", content: "noindex" },
        ],
      };
    }

    const { item, conteudo } = loaderData;
    const termo = h1Atendimentos[item.slug] ?? item.titulo;
    const titulo = `${termo} | Clínica Evoluta`;
    const url = `https://psico-space-hub.lovable.app/atendimentos/${item.slug}`;

    return {
      meta: [
        { title: titulo },
        { name: "description", content: item.resumo },
        { property: "og:title", content: titulo },
        { property: "og:description", content: item.resumo },
        { property: "og:image", content: brandShareImage },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: brandShareImage },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: conteudo.perguntas.map((p) => ({
              "@type": "Question",
              name: p.pergunta,
              acceptedAnswer: { "@type": "Answer", text: p.resposta },
            })),
          }),
        },
      ],
    };
  },

  component: AtendimentoPage,
});

function AtendimentoPage() {
  const { item, conteudo } = Route.useLoaderData();
  const indice = atendimentos.findIndex((atendimento) => atendimento.slug === item.slug);
  const fotoJessica = fotosJessica.atendimentosDetalhes[indice] ?? fotosJessica.atendimentos;

  return (
    <>
      <AtendimentoHero item={item} conteudo={conteudo} fotoJessica={item.imagemHero ?? fotoJessica} />
      <Apresentacao item={item} conteudo={conteudo} />
      <SituacoesEObjetivos item={item} conteudo={conteudo} />
      <Etapas item={item} conteudo={conteudo} />
      <ImagemDoAcompanhamento item={item} conteudo={conteudo} />
      <ParticipacaoEInformacoes item={item} conteudo={conteudo} />
      <Perguntas conteudo={conteudo} />
      <SobreJessica />
      <OutrosAtendimentos item={item} />
      <MapaLocalizacao />
      <Fechamento item={item} />

    </>
  );
}

function AtendimentoHero({
  item,
  conteudo,
  fotoJessica,
}: {
  item: Atendimento;
  conteudo: ConteudoAtendimento;
  fotoJessica: string;
}) {
  return (
    <section className="relative flex min-h-[560px] items-end overflow-hidden bg-deep text-deep-foreground lg:aspect-[18/7] lg:min-h-0">
      <img
        src={fotoJessica}
        alt={`Jéssica Pelissari, neuropsicóloga da Clínica Evoluta — ${item.titulo}`}
        width={item.imagemHero ? 1536 : 1080}
        height={item.imagemHero ? 768 : 720}
        className={`absolute inset-0 h-full w-full object-cover object-top ${item.imagemHero ? "lg:object-center" : "lg:object-[78%_20%]"}`}
      />
      <div className="absolute inset-0 bg-deep/65 lg:hidden" />
      <div className="absolute inset-0 hidden bg-gradient-to-r from-deep from-[0%] via-deep/90 via-[34%] to-transparent to-[82%] lg:block" />

      <div className="relative w-full px-5 pb-16 pt-40 lg:px-10 lg:pb-28 lg:pt-48">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <p className="eyebrow text-deep-foreground/70">{item.etiqueta}</p>
            <h1 className="mt-5 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              {h1Atendimentos[item.slug] ?? item.titulo}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-deep-foreground/85 sm:text-lg">
              {conteudo.chamada}
            </p>
            {conteudo.chamadaComplementar && (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-deep-foreground/85 sm:text-lg">
                {conteudo.chamadaComplementar}
              </p>
            )}
            <div className="mt-8">
              <WhatsAppButton href={site.whatsapp} label="Falar com equipe Evoluta" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Apresentacao({
  item,
  conteudo,
}: {
  item: Atendimento;
  conteudo: ConteudoAtendimento;
}) {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
        <div>
          <Eyebrow>Sobre o atendimento</Eyebrow>
          <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
              {conteudo.tituloApresentacao}
          </h2>
          <img
            src={item.imagem}
            alt={`Atividade relacionada ao atendimento de ${item.titulo}`}
            loading="lazy"
            width={1200}
            height={800}
            className="mt-9 aspect-[4/3] w-full object-cover"
          />
        </div>
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          {item.texto.map((paragrafo) => (
            <p key={paragrafo}>{paragrafo}</p>
          ))}
          <p>{conteudo.introducao}</p>
        </div>
      </div>
    </Section>
  );
}

function SituacoesEObjetivos({
  item,
  conteudo,
}: {
  item: Atendimento;
  conteudo: ConteudoAtendimento;
}) {
  return (
    <Section className="bg-muted">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Eyebrow>Quando buscar</Eyebrow>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl">{conteudo.tituloSituacoes}</h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {conteudo.textoSituacoes}
          </p>
          <ListaComMarcador itens={conteudo.sinais} className="mt-8" />
        </div>

        <div className="border-t border-border pt-10 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
          <Eyebrow>O que buscamos</Eyebrow>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl">{conteudo.tituloObjetivos}</h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {conteudo.textoObjetivos}
          </p>
          <ListaComMarcador itens={conteudo.objetivos} className="mt-8" />
        </div>
      </div>

      <div className="mt-16 border-t border-border pt-12">
        <p className="eyebrow text-muted-foreground">Indicado para</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {item.paraQuem.slice(item.slug === "avaliacao-neuropsicologica" ? 1 : 0).map((perfil) => (
            <div key={perfil} className="flex gap-4 border-l-2 border-primary bg-background p-5">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <p className="text-sm leading-relaxed">{perfil}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ListaComMarcador({ itens, className = "" }: { itens: string[]; className?: string }) {
  return (
    <ul className={`space-y-4 ${className}`}>
      {itens.map((item) => (
        <li key={item} className="flex gap-4 text-sm leading-relaxed">
          <span className="mt-2 h-2 w-2 shrink-0 bg-primary" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Etapas({ item, conteudo }: { item: Atendimento; conteudo: ConteudoAtendimento }) {
  return (
    <Section>
      <div className="max-w-2xl">
        <Eyebrow>Como acontece</Eyebrow>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl">{conteudo.tituloEtapas}</h2>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
          {conteudo.textoEtapas}
        </p>
      </div>

      <ol className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
        {item.comoFunciona.map((etapa, indice) => (
          <li key={etapa.titulo} className="min-h-64 bg-background p-7 sm:p-8">
            <span className="font-display text-4xl text-primary">
              {String(indice + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-8 font-display text-2xl">{etapa.titulo.replace(/^\d+\.\s*/, "")}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{etapa.texto}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function ImagemDoAcompanhamento({ item, conteudo }: { item: Atendimento; conteudo: ConteudoAtendimento }) {
  return (
    <section className="overflow-hidden bg-background px-5 pb-16 sm:pb-20 lg:px-10 lg:pb-28">
      <div className="mx-auto grid max-w-7xl items-end gap-8 lg:grid-cols-[1.45fr_0.55fr] lg:gap-12">
        <img
          src={item.imagemSecundaria}
          alt={`Momento de acompanhamento em ${item.titulo}`}
          loading="lazy"
          width={1200}
          height={800}
          className="aspect-[3/2] min-h-72 w-full object-cover sm:min-h-96"
        />
        <div className="border-l-2 border-primary pb-2 pl-6 lg:mb-8">
          <p className="eyebrow text-primary">{conteudo.tituloImagem}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {conteudo.textoImagem}
          </p>
        </div>
      </div>
    </section>
  );
}

function ParticipacaoEInformacoes({
  item,
  conteudo,
}: {
  item: Atendimento;
  conteudo: ConteudoAtendimento;
}) {
  return (
    <Section className="bg-deep text-deep-foreground">
      <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div>
          <p className="eyebrow text-deep-foreground/60">Cuidado compartilhado</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl sm:text-4xl lg:text-5xl">
            {conteudo.participacao.titulo}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-deep-foreground/75">
            {conteudo.participacao.texto}
          </p>
        </div>

        <dl className="grid gap-px self-start bg-deep-foreground/15 sm:grid-cols-2">
          {item.info.map((informacao) => (
            <div key={informacao.rotulo} className="min-h-32 bg-deep p-6">
              <dt className="eyebrow text-deep-foreground/55">{informacao.rotulo}</dt>
              <dd className="mt-3 font-display text-xl leading-snug">{informacao.valor}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}

function Perguntas({ conteudo }: { conteudo: ConteudoAtendimento }) {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <div>
          <Eyebrow>Antes de começar</Eyebrow>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl">Perguntas frequentes</h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Se sua dúvida não estiver aqui, nossa equipe pode orientar você em uma primeira conversa.
          </p>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {conteudo.perguntas.map((item) => (
            <details key={item.pergunta} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl">
                {item.pergunta}
                <span className="text-2xl text-primary transition-transform group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="max-w-2xl pt-4 text-sm leading-relaxed text-muted-foreground">{item.resposta}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}

function OutrosAtendimentos({ item }: { item: Atendimento }) {
  const relacionados = atendimentos.filter((atendimento) => atendimento.slug !== item.slug).slice(0, 3);

  return (
    <Section className="bg-muted">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Eyebrow>Conheça também</Eyebrow>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl">Outros atendimentos</h2>
        </div>
        <Link to="/atendimentos" className="eyebrow inline-flex items-center gap-2 text-primary">
          Ver todos <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {relacionados.map((relacionado) => (
          <Link
            key={relacionado.slug}
            to="/atendimentos/$slug"
            params={{ slug: relacionado.slug }}
            className="group bg-background"
          >
            <img
              src={relacionado.imagem}
              alt={relacionado.titulo}
              loading="lazy"
              width={1200}
              height={800}
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="p-6">
              <p className="eyebrow text-primary">{relacionado.etiqueta}</p>
              <h3 className="mt-3 font-display text-2xl">{relacionado.titulo}</h3>
              <span className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors group-hover:text-primary">
                Conhecer atendimento <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function SobreJessica() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
        <div>
          <img
            src={jessicaBio.foto}
            alt="Jéssica Pelissari, psicóloga e neuropsicóloga, fundadora da Clínica Evoluta"
            loading="lazy"
            width={720}
            height={1080}
            className="aspect-[2/3] w-full object-cover"
          />
        </div>

        <div>
          <Eyebrow>Quem acompanha você</Eyebrow>
          <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">{jessicaBio.nome}</h2>
          <p className="mt-3 text-sm font-semibold text-primary">{jessicaBio.credenciais}</p>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
            {jessicaBio.paragrafos.map((paragrafo) => (
              <p key={paragrafo}>{paragrafo}</p>
            ))}
          </div>

          <div className="mt-10 border-t border-border pt-8">
            <h3 className="font-display text-2xl">{jessicaBio.formacaoTitulo}</h3>
            <ul className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">
              {jessicaBio.formacao.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed">
                  <span className="mt-2 h-2 w-2 shrink-0 bg-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Fechamento({ item }: { item: Atendimento }) {
  return (
    <Section className="bg-primary text-primary-foreground">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_auto] lg:items-end">
        <div>
          <p className="eyebrow text-primary-foreground/70">Próximo passo</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl sm:text-4xl lg:text-5xl">
            Quer entender se {item.titulo.toLowerCase()} é o atendimento indicado?
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-primary-foreground/80">
            Conte brevemente o que motivou sua busca. Nossa equipe acolhe sua dúvida e orienta sobre o caminho mais adequado.
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
  );
}