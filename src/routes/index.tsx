import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ClipboardList, HeartHandshake, Puzzle, Users } from "lucide-react";

import { Eyebrow, Section } from "@/components/site/bits";
import { atendimentos, depoimentos, destaques, images, site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marina Alvez | Psicopedagoga clínica para crianças e adolescentes" },
      {
        name: "description",
        content:
          "Psicopedagogia clínica com escuta e método: dificuldades de aprendizagem, TDAH, dislexia, avaliação e orientação a famílias e escolas.",
      },
      { property: "og:title", content: "Marina Alvez | Psicopedagoga clínica" },
      {
        property: "og:description",
        content: "Aprender com acolhimento, no tempo de cada criança.",
      },
    ],
  }),
  component: Inicio,
});

const icones = [Puzzle, HeartHandshake, Users, ClipboardList];

function Inicio() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-deep text-deep-foreground">
        <img
          src={images.hero}
          alt="Psicopedagoga em seu consultório"
          width={1408}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Marrom sólido à esquerda dissolvendo suavemente na foto */}
        <div className="absolute inset-0 bg-gradient-to-r from-deep from-[12%] via-deep/80 via-[50%] to-transparent to-[96%]" />
        <div className="absolute inset-0 bg-deep/70 lg:hidden" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:py-28 lg:px-10 lg:py-40">
          <div className="max-w-xl">
            <p className="eyebrow text-deep-foreground/60">Psicopedagogia</p>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Escuta. Método.
              <br />
              Aprendizagem.
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-deep-foreground/80">
              Acompanhamento psicopedagógico para crianças e adolescentes que precisam reencontrar a
              confiança de aprender — com a família e a escola junto no processo.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                to="/contato"
                className="eyebrow bg-primary px-8 py-4 text-primary-foreground transition-opacity hover:opacity-90"
              >
                Agendar conversa
              </Link>
              <Link
                to="/atendimentos"
                className="eyebrow inline-flex items-center gap-2 text-deep-foreground/75 transition-colors hover:text-primary"
              >
                ou conhecer os atendimentos
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <Eyebrow>Sobre mim</Eyebrow>
            <h2 className="mt-5 font-display text-4xl leading-tight lg:text-5xl">
              Psicopedagoga
              <br />
              com olhar clínico
              <br />
              e prática de escola
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Ajudo crianças e adolescentes a construírem estratégias próprias de aprendizagem,
              respeitando o ritmo de cada um e sem transformar o estudo em punição.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              São mais de 10 anos entre consultório e sala de aula, acompanhando famílias em processos
              de avaliação, intervenção e orientação escolar.
            </p>
            <Link
              to="/contato"
              className="eyebrow mt-8 inline-block border border-border px-7 py-4 transition-colors hover:border-primary hover:text-primary"
            >
              Falar comigo
            </Link>
          </div>

          <div className="grid gap-px bg-border sm:grid-cols-2">
            {destaques.map((d, i) => {
              const Icone = icones[i % icones.length] ?? Puzzle;
              return (
                <div key={d.titulo} className="bg-muted p-8">
                  <Icone className="h-6 w-6 text-primary" strokeWidth={1.4} />
                  <p className="eyebrow mt-6">{d.titulo}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.texto}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Atendimentos */}
      <Section className="bg-muted">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
          <div className="min-w-0">
            <Eyebrow>Atendimentos</Eyebrow>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl">Especialidades</h2>
          </div>
          <Link
            to="/atendimentos"
            className="eyebrow inline-flex items-center gap-2 pb-2 transition-colors hover:text-primary"
          >
            Ver todos
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {atendimentos.map((a) => (
            <Link
              key={a.slug}
              to="/atendimentos/$slug"
              params={{ slug: a.slug }}
              className="group relative block overflow-hidden"
            >
              <img
                src={a.imagem}
                alt={a.titulo}
                loading="lazy"
                width={1200}
                height={900}
                className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-deep/55" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-deep-foreground">
                <span className="eyebrow bg-primary px-3 py-1.5">{a.etiqueta}</span>
                <p className="mt-4 font-display text-2xl leading-snug">{a.titulo}</p>
                <p className="mt-2 text-xs text-deep-foreground/75">{a.resumo}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Depoimentos */}
      <Section>
        <Eyebrow>Depoimentos</Eyebrow>
        <h2 className="mt-4 font-display text-4xl lg:text-5xl">O que as famílias dizem</h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {depoimentos.map((d) => (
            <blockquote key={d.autor} className="bg-muted p-8">
              <span className="font-display text-5xl leading-none text-primary">“</span>
              <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">{d.texto}</p>
              <footer className="mt-8">
                <p className="text-sm">{d.autor}</p>
                <p className="mt-1 text-xs text-muted-foreground">{d.papel}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-deep text-deep-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2">
          <div className="px-5 py-16 lg:px-10 lg:py-20">
            <p className="eyebrow text-deep-foreground/60">Vamos conversar?</p>
            <h2 className="mt-5 font-display text-4xl lg:text-5xl">
              Conte o que está acontecendo
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-deep-foreground/70">
              A primeira conversa é para entender a queixa, esclarecer dúvidas e indicar o caminho mais
              adequado — mesmo que ele não seja aqui.
            </p>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="eyebrow mt-10 inline-block bg-primary px-8 py-4 text-primary-foreground transition-opacity hover:opacity-90"
            >
              Falar no WhatsApp
            </a>
          </div>
          <img
            src={images.cta}
            alt="Mesa de trabalho com caderno e laptop"
            loading="lazy"
            width={1400}
            height={900}
            className="h-64 w-full object-cover lg:h-full"
          />
        </div>
      </section>
    </>
  );
}
