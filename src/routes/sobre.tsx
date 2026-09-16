import { createFileRoute } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";

import { Eyebrow, Section, WhatsAppButton } from "@/components/site/bits";
import { brandShareImage, fotosJessica, fundadora, site } from "@/data/site";

export const Route = createFileRoute("/sobre")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Jéssica Pelissari | Clínica Evoluta" },
      {
        name: "description",
        content:
          "Psicóloga e neuropsicóloga, fundadora e diretora da Clínica Evoluta. Formação, atuação e obras em coautoria.",
      },
      { property: "og:title", content: "Jéssica Pelissari | Clínica Evoluta" },
      {
        property: "og:description",
        content: "Mais do que avaliar, compreender: ciência, experiência e acolhimento em cada etapa.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:image", content: brandShareImage },
      { name: "twitter:image", content: brandShareImage },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <>
      {/* Abertura */}
      <section className="relative flex min-h-[640px] items-center overflow-hidden bg-deep text-deep-foreground lg:min-h-[760px]">
        <img
          src={fotosJessica.sobre}
          alt={fundadora.nome}
          width={720}
          height={1080}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top lg:object-[74%_18%]"
        />
        <div className="absolute inset-0 bg-deep/65 lg:hidden" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-deep from-[0%] via-deep/90 via-[34%] to-transparent to-[82%] lg:block" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-24 lg:grid lg:grid-cols-2 lg:px-10 lg:py-28">
          <div>
            <p className="eyebrow text-deep-foreground/60">Quem conduz</p>
            <h1 className="mt-5 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              {fundadora.nome}
            </h1>
            <p className="mt-4 text-sm text-primary">{fundadora.papel}</p>
            <p className="mt-8 max-w-lg text-sm leading-relaxed text-deep-foreground/80">
              {fundadora.proposito}
            </p>
          </div>
        </div>
      </section>

      {/* Trajetória */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <Eyebrow>Trajetória</Eyebrow>
            <h2 className="mt-5 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Ciência, prática clínica
              <br />
              e olhar humanizado
            </h2>
            {fundadora.intro.map((p) => (
              <p key={p} className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
          <div className="space-y-10">
            <div>
              <p className="eyebrow text-muted-foreground">Formação e especializações</p>
              <ul className="mt-5 space-y-3">
                {fundadora.formacao.map((f) => (
                  <li key={f} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-border pt-8">
              <p className="eyebrow text-muted-foreground">Atuação</p>
              <ul className="mt-5 space-y-3">
                {fundadora.atuacao.map((a) => (
                  <li key={a} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Obras */}
      <Section className="bg-muted">
        <div className="max-w-2xl">
          <Eyebrow>Autora e coautora</Eyebrow>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl">
            Compartilhar conhecimento também transforma vidas
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Escrever é uma forma de fortalecer a Psicologia e levar ciência a mais pessoas.
          </p>
        </div>
        <div className="mt-12 grid gap-px bg-border sm:grid-cols-3">
          {fundadora.obras.map((o) => (
            <div key={o.titulo} className="bg-background p-8">
              <BookOpen className="h-6 w-6 text-primary" strokeWidth={1.4} />
              <p className="mt-6 font-display text-2xl leading-snug">{o.titulo}</p>
              <p className="eyebrow mt-4 text-muted-foreground">{o.nota}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Manifesto */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Mais do que avaliar, compreender</Eyebrow>
          {fundadora.manifesto.map((p) => (
            <p key={p} className="mt-6 text-base leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
          <blockquote className="mt-10 font-display text-2xl leading-snug text-primary sm:text-3xl lg:text-4xl">
            “{fundadora.citacao}”
          </blockquote>
          <p className="mt-8 text-sm text-muted-foreground">{fundadora.assinatura}</p>
          <p className="mt-10 font-display text-2xl">{fundadora.nome}</p>
          <p className="mt-2 text-xs text-muted-foreground">{fundadora.papel}</p>
        </div>
      </Section>

      {/* Fechamento */}
      <Section className="bg-deep text-deep-foreground">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_auto] lg:items-end">
          <div>
            <p className="eyebrow text-deep-foreground/60">Próximo passo</p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl">
              Não sabe qual atendimento procurar?
            </h2>
            <p className="mt-4 max-w-lg text-sm text-deep-foreground/70">
              Você não precisa saber exatamente qual profissional procurar. Nossa equipe pode ajudar a
              compreender qual avaliação ou especialidade é mais adequada para a sua necessidade.
            </p>
          </div>
          <WhatsAppButton href={site.whatsapp} label="Falar com equipe Evoluta" />
        </div>
      </Section>
    </>
  );
}
