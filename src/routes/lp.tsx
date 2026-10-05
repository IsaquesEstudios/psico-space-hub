import { Link, createFileRoute } from "@tanstack/react-router";
import { ChevronDown, Check, Download } from "lucide-react";

import { brandShareImage } from "@/data/site";
import { Button } from "@/components/ui/button";
import guiaPdf from "@/assets/guia-para-os-pais.pdf.asset.json";
import fundoHero from "@/assets/lp-guia-fundo.png.asset.json";
import logoCompleto from "@/assets/lp-logo-completo.png.asset.json";
import fotoGuia from "@/assets/lp-guia-hero.jpg";

export const Route = createFileRoute("/lp")({
  staticData: { sitemap: false },
  head: () => ({
    meta: [
      {
        title: "Guia para Pais: Sinais de Alerta no Desenvolvimento Infantil | Clínica Evoluta",
      },
      {
        name: "description",
        content:
          "Guia gratuito da Clínica Evoluta para pais e responsáveis: sinais de alerta no desenvolvimento infantil, comportamento, comunicação e aprendizagem. Baixe gratuitamente.",
      },
      {
        property: "og:title",
        content: "Guia para Pais: Sinais de Alerta no Desenvolvimento Infantil | Clínica Evoluta",
      },
      {
        property: "og:description",
        content:
          "Material gratuito para pais e responsáveis reconhecerem sinais que merecem atenção no desenvolvimento infantil.",
      },
      { property: "og:url", content: "https://psico-space-hub.lovable.app/lp" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: brandShareImage },
      { name: "twitter:image", content: brandShareImage },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://psico-space-hub.lovable.app/lp" }],
  }),
  component: PaginaGuia,
});

const itensGuia = [
  "Sinais de alerta relacionados ao desenvolvimento infantil",
  "Aspectos de comportamento, comunicação e aprendizagem que merecem atenção",
  "Situações em que pode ser importante procurar orientação profissional",
  "Informações para ajudar os pais a compreender melhor o desenvolvimento da criança",
  "Orientações sobre quando buscar uma avaliação especializada",
];

function PaginaGuia() {
  return (
    <div className="bg-background">
      {/* Hero com a foto da clínica e a logo centralizada */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <img
          src={fundoHero.url}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/35 to-background/80" />

        <div className="relative z-10 mx-auto max-w-4xl px-5 py-24 text-center">
          <img
            src={logoCompleto.url}
            alt="Clínica Evoluta"
            width={690}
            height={409}
            className="mx-auto w-64 drop-shadow-sm sm:w-96"
          />
          <p className="eyebrow mt-10 text-primary">Guia gratuito para pais e responsáveis</p>
          <h1 className="mt-5 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Guia para Pais: Sinais de Alerta no Desenvolvimento Infantil
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Entenda os principais sinais que merecem atenção no desenvolvimento da criança.
          </p>
          <Button asChild className="eyebrow mt-10 h-auto rounded-full px-8 py-4 shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5">
            <a href={guiaPdf.url} download="Guia_para_os_Pais.pdf" target="_blank" rel="noopener noreferrer">
              <Download aria-hidden="true" />
              Baixar PDF grátis
            </a>
          </Button>
        </div>

        <a
          href="#material"
          aria-label="Rolar para o conteúdo"
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-deep/70 transition-colors hover:text-primary"
        >
          <ChevronDown className="h-7 w-7 animate-bounce" aria-hidden="true" />
        </a>
      </section>

      {/* Por que este guia */}
      <section id="material" className="scroll-mt-10 px-5 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl bg-secondary" aria-hidden="true" />
            <img
              src={fotoGuia}
              alt="Materiais de acompanhamento do desenvolvimento infantil sobre uma mesa de trabalho"
              loading="lazy"
              width={1600}
              height={900}
              className="relative h-72 w-full rounded-3xl object-cover shadow-xl sm:h-96"
            />
          </div>
          <div>
            <p className="eyebrow text-primary">Sobre este material</p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl">
              Nem sempre é fácil saber o que é esperado
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Nem sempre é fácil saber se determinado comportamento faz parte do desenvolvimento esperado ou se pode
              indicar que é importante buscar uma avaliação profissional.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Por isso, a Clínica Evoluta preparou este guia para ajudar pais e responsáveis a reconhecer alguns sinais
              que merecem atenção no desenvolvimento infantil.
            </p>
          </div>
        </div>
      </section>

      {/* O que você vai encontrar */}
      <section className="bg-secondary px-5 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="eyebrow text-primary">Conteúdo do guia</p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl">O que você vai encontrar neste guia?</h2>
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {itensGuia.map((item, indice) => (
              <li
                key={item}
                className="rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-lg sm:p-8"
              >
                <span className="font-display text-sm font-semibold tracking-widest text-primary">
                  {String(indice + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-sm leading-relaxed sm:text-base">{item}</p>
              </li>
            ))}
          </ul>
          <p className="mt-12 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            <strong className="font-semibold text-foreground">
              Informação para ajudar você a entender melhor o desenvolvimento do seu filho.
            </strong>{" "}
            O objetivo deste material não é oferecer um diagnóstico, mas ajudar pais e responsáveis a identificar
            situações que podem merecer uma atenção maior.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Quanto antes uma dificuldade é compreendida, mais cedo a família pode buscar orientação adequada.
          </p>
        </div>
      </section>

      {/* Download do guia */}
      <section id="receber" className="scroll-mt-10 bg-deep px-5 py-20 text-deep-foreground lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow text-primary">Download gratuito</p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl">Baixe gratuitamente o Guia para Pais</h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-deep-foreground/70 sm:text-base">
              Acesse o guia completo em PDF, gratuitamente e sem cadastro.
            </p>
            <ul className="mt-8 space-y-3">
              {itensGuia.slice(0, 3).map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-deep-foreground/80">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center gap-5 py-8 text-center">
            <Button asChild className="eyebrow h-auto max-w-full whitespace-normal rounded-full px-8 py-5 shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5">
              <a href={guiaPdf.url} download="Guia_para_os_Pais.pdf" target="_blank" rel="noopener noreferrer">
                <Download aria-hidden="true" />
                Baixar PDF grátis
              </a>
            </Button>
            <p className="text-sm text-deep-foreground/70">Guia para Pais · PDF gratuito</p>
          </div>
        </div>
      </section>

      {/* Sobre a clínica */}
      <section className="bg-secondary px-5 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-primary">Sobre a Clínica Evoluta</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl">Cuidar. Compreender. Transformar.</h2>
          <p className="mt-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
            A Clínica Evoluta atua no acompanhamento do desenvolvimento infantil, oferecendo uma abordagem
            multidisciplinar com profissionais de diferentes áreas.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            A clínica trabalha com avaliação e acompanhamento em áreas como psicologia, neuropsicologia,
            neuropsicopedagogia, fonoaudiologia e intervenção comportamental.
          </p>
          <Link
            to="/"
            className="eyebrow mt-10 inline-flex rounded-full border border-deep/25 px-8 py-4 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            Conheça a Clínica Evoluta
          </Link>
        </div>
      </section>

      {/* Aviso */}
      <section className="bg-background px-5 py-10 lg:px-10">
        <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
          Este material possui caráter informativo e não substitui uma avaliação ou orientação profissional
          individualizada.
        </p>
      </section>
    </div>
  );
}
