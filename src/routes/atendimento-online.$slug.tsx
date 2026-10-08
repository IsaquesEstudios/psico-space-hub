import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";

import { Eyebrow, Section, WhatsAppButton } from "@/components/site/bits";
import { atendimentosOnline } from "@/data/atendimento-online";
import { brandShareImage, site } from "@/data/site";

export const Route = createFileRoute("/atendimento-online/$slug")({
  staticData: { sitemap: false },
  loader: ({ params }) => {
    const item = atendimentosOnline.find((a) => a.slug === params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Não encontrado" }, { name: "robots", content: "noindex" }] };
    const { item } = loaderData;
    const titulo = `${item.titulo} on-line | Clínica Evoluta`;
    const url = `https://psico-space-hub.lovable.app/atendimento-online/${item.slug}`;
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
    };
  },
  notFoundComponent: () => (
    <Section className="pt-40">
      <p>Atendimento não encontrado.</p>
    </Section>
  ),
  component: AtendimentoOnlineDetalhe,
});

function AtendimentoOnlineDetalhe() {
  const { item } = Route.useLoaderData();
  return (
    <>
      <section className="relative flex min-h-[560px] items-end overflow-hidden bg-deep px-5 pb-16 pt-36 text-deep-foreground lg:min-h-[640px] lg:px-10 lg:pb-20">
        <img
          src={item.imagem}
          alt={item.alt}
          width={1536}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/70 to-deep/20" />
        <div className="relative mx-auto w-full max-w-7xl">
          <p className="eyebrow text-deep-foreground/70">{item.etiqueta}</p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            {item.titulo}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-deep-foreground/85 sm:text-lg">
            {item.nota}
          </p>
          <div className="mt-8">
            <WhatsAppButton href={site.whatsapp} label="Falar com equipe Evoluta" />
          </div>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <Eyebrow>Sobre o atendimento</Eyebrow>
          {item.paragrafos.map((p: string) => (
            <p key={p} className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
          <h2 className="mt-12 font-display text-2xl leading-tight sm:text-3xl">{item.tituloLista}</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {item.itens.map((i: string) => (
              <li key={i} className="flex gap-3 leading-relaxed">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                {i}
              </li>
            ))}
          </ul>
          {item.fechamento && (
            <p className="mt-10 leading-relaxed text-muted-foreground">{item.fechamento}</p>
          )}
          <div className="mt-12 overflow-hidden">
            <img
              src={item.imagem}
              alt={item.alt}
              width={1536}
              height={1024}
              loading="lazy"
              className="aspect-[16/9] w-full object-cover object-center"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-muted">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Atendimento especializado e humanizado</Eyebrow>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Na Clínica Evoluta, cada pessoa é acompanhada de forma individualizada, considerando sua
            história, suas necessidades e seus objetivos.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Nosso propósito é unir conhecimento científico, experiência clínica e acolhimento,
            oferecendo um atendimento ético, personalizado e voltado para o desenvolvimento e a
            qualidade de vida.
          </p>
        </div>
      </Section>

      <Section className="bg-primary text-primary-foreground">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_auto] lg:items-end">
          <div>
            <p className="eyebrow text-primary-foreground/70">Agende seu atendimento</p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl leading-tight sm:text-4xl">
              Entre em contato com a Clínica Evoluta e conheça a modalidade de atendimento mais
              adequada para você.
            </h2>
            <Link
              to="/atendimento-online"
              className="eyebrow mt-6 inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Ver atendimentos on-line
            </Link>
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
