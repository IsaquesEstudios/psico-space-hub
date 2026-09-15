import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ClipboardList, HeartHandshake, Puzzle, Users } from "lucide-react";

import { Eyebrow, Section } from "@/components/site/bits";
import { atendimentos, brandShareImage, cursos, destaques, images, posts, site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clínica Evoluta | Apoio à aprendizagem para crianças e adolescentes" },
      {
        name: "description",
        content:
          "Atendimento com escuta e método: dificuldades de aprendizagem, TDAH, dislexia, avaliação e orientação a famílias e escolas.",
      },
      { property: "og:title", content: "Clínica Evoluta | Acompanhamento à aprendizagem" },
      {
        property: "og:description",
        content: "Aprender com acolhimento, no tempo de cada criança.",
      },
      { property: "og:image", content: brandShareImage },
      { name: "twitter:image", content: brandShareImage },
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
          alt="Jéssica, da Clínica Evoluta, em seu consultório"
          width={1080}
          height={720}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* Marrom por cima da foto, dissolvendo da esquerda para a direita */}
        <div className="absolute inset-0 bg-gradient-to-r from-deep from-[0%] via-deep/70 via-[45%] to-deep/10 to-[100%]" />
        <div className="absolute inset-0 bg-deep/60 lg:hidden" />
        <div className="relative w-full mx-auto max-w-7xl px-5 pt-24 pb-16 sm:pb-20 lg:px-10 lg:pt-32 lg:pb-24">
          <div className="max-w-xl">
            <h1 className="font-display text-4xl leading-[1.08] sm:text-6xl lg:text-7xl">
              Cuidar.
              <br />
              Compreender.
              <br />
              Transformar.
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-deep-foreground/80">
              Equipe multidisciplinar em avaliação, intervenção e acompanhamento — considerando aspectos
              cognitivos, emocionais, comportamentais, sociais e de aprendizagem.
            </p>
            <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:flex-wrap sm:items-center">
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
            <Eyebrow>Sobre a clínica</Eyebrow>
            <h2 className="mt-5 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Cada pessoa tem
              <br />
              uma história, um ritmo
              <br />
              e necessidades únicas
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              A Clínica Evoluta — Desenvolvimento Infantil reúne uma equipe multidisciplinar que atua na
              avaliação, intervenção e acompanhamento de crianças, adolescentes e adultos.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Cuidar, compreender e transformar através da ciência, do acolhimento e da atuação
              multidisciplinar — considerando aspectos cognitivos, emocionais, comportamentais, sociais e
              de aprendizagem.
            </p>
            <Link
              to="/sobre"
              className="eyebrow mt-8 inline-block border border-border px-7 py-4 transition-colors hover:border-primary hover:text-primary"
            >
              Conhecer a Jéssica
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
        <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
          <div className="min-w-0">
            <Eyebrow>Atendimentos</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl">Especialidades</h2>
          </div>
          <Link
            to="/atendimentos"
            className="eyebrow inline-flex items-center gap-2 transition-colors hover:text-primary sm:pb-2"
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

      {/* Cursos */}
      <Section>
        <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
          <div className="min-w-0">
            <Eyebrow>Cursos</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl">Aprendizado que transforma a prática</h2>
          </div>
          <Link
            to="/cursos"
            className="eyebrow inline-flex items-center gap-2 transition-colors hover:text-primary sm:pb-2"
          >
            Ver todos
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {cursos.slice(0, 3).map((curso, index) => (
            <Link
              key={curso.slug}
              to="/cursos/$slug"
              params={{ slug: curso.slug }}
              className="group block"
            >
              <div className="overflow-hidden">
                <img
                  src={curso.imagem}
                 alt={`Jéssica, da Clínica Evoluta — Curso ${index + 1}`}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="h-[333px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="eyebrow mt-5 text-primary">{curso.etiqueta}</p>
              <h3 className="mt-3 font-display text-3xl">Curso {index + 1}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{curso.resumo}</p>
              <span className="eyebrow mt-6 inline-flex items-center gap-2 transition-colors group-hover:text-primary">
                Conhecer o curso
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Chamada para WhatsApp */}
      <section className="relative overflow-hidden bg-deep text-deep-foreground">
        <img
          src={images.cta}
          alt="Mesa de trabalho com caderno e laptop"
          loading="lazy"
          width={1400}
          height={900}
          className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-auto max-w-none object-cover [mask-image:linear-gradient(to_right,transparent_0%,black_45%)] lg:block"
        />
        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-2">
          <div className="px-5 py-16 lg:px-10 lg:py-20">
            <p className="eyebrow text-deep-foreground/60">Estamos por perto</p>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl">
              Entre em contato conosco
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-deep-foreground/70">
              Fale pelo WhatsApp para tirar dúvidas, conhecer os atendimentos e encontrar o melhor caminho
              para você e sua família.
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
            alt=""
            aria-hidden
            loading="lazy"
            width={1400}
            height={900}
            className="h-64 w-full object-cover lg:hidden"
          />
        </div>
      </section>

      {/* Blog */}
      <Section className="bg-muted">
        <div className="max-w-2xl">
          <Eyebrow>Blog</Eyebrow>
          <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Compartilhamos dicas para ajudar quem precisa
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Conteúdos simples e cuidadosos para apoiar famílias, educadores e crianças no caminho da
            aprendizagem.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group block"
            >
              <div className="overflow-hidden">
                <img
                  src={post.imagem}
                  alt={post.titulo}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="eyebrow mt-5 text-primary">{post.categoria}</p>
              <h3 className="mt-3 font-display text-2xl leading-snug">{post.titulo}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.resumo}</p>
              <span className="eyebrow mt-6 inline-flex items-center gap-2 transition-colors group-hover:text-primary">
                Ler postagem
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

    </>
  );
}
