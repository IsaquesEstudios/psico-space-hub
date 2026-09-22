import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Eyebrow, Section } from "@/components/site/bits";
import { brandShareImage, fotosJessica, livros } from "@/data/site";

export const Route = createFileRoute("/livros/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Livros e e-books | Clínica Evoluta" },
      {
        name: "description",
        content:
          "E-books da Clínica Evoluta com conteúdo acessível sobre TDAH, desenvolvimento, infância e aprendizagem.",
      },
      { property: "og:title", content: "Livros e e-books | Clínica Evoluta" },
      {
        property: "og:description",
        content: "Materiais digitais de Jéssica Pelissari para famílias, educadores e profissionais.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: brandShareImage },
      { name: "twitter:image", content: brandShareImage },
    ],
  }),
  component: LivrosIndex,
});

function LivrosIndex() {
  return (
    <>
      <section className="relative flex min-h-[600px] items-center overflow-hidden bg-deep px-5 py-24 text-deep-foreground lg:min-h-[720px] lg:px-10 lg:py-28">
        <img
          src={fotosJessica.sobre}
          alt="Jéssica Pelissari, fundadora da Clínica Evoluta"
          width={1080}
          height={720}
          className="absolute inset-0 h-full w-full object-cover object-top lg:object-[74%_18%]"
        />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-deep from-[0%] via-deep/90 via-[34%] to-transparent to-[82%] lg:block" />
        <div className="absolute inset-0 bg-deep/65 lg:hidden" />
        <div className="relative mx-auto w-full max-w-7xl">
          <p className="eyebrow text-deep-foreground/60">Livros e e-books</p>
          <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Materiais para compreender melhor o desenvolvimento
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-deep-foreground/70">
            Conteúdos de Jéssica Pelissari com linguagem acessível, base científica e olhar sensível para famílias, educadores e profissionais.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          {livros.map((livro) => (
            <article key={livro.slug} className="flex flex-col bg-muted/60">
              <img
                src={livro.imagem}
                alt={livro.titulo}
                loading="lazy"
                width={1171}
                height={1682}
                className="h-[420px] w-full object-contain p-4"
              />
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <Eyebrow>{livro.etiqueta}</Eyebrow>
                <h2 className="mt-3 font-display text-3xl leading-snug">{livro.titulo}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{livro.resumo}</p>
                <dl className="mt-6 space-y-2 text-xs text-muted-foreground">
                  <div className="flex gap-2">
                    <dt>Formato:</dt>
                    <dd className="text-foreground">{livro.formato}</dd>
                  </div>
                  {livro.investimento !== "Sob consulta" && (
                    <div className="flex gap-2">
                      <dt>Valor:</dt>
                      <dd className="text-foreground">{livro.investimento}</dd>
                    </div>
                  )}
                </dl>
                <div className="mt-8 flex flex-wrap items-center gap-5 pt-2">
                  <a
                    href={livro.compraUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="eyebrow inline-flex max-w-full items-center justify-center gap-2 bg-primary px-6 py-4 text-center text-primary-foreground transition-opacity hover:opacity-90 sm:px-7"
                  >
                    {livro.compraTexto ?? "Comprar e-book"}
                  </a>
                  <Link
                    to="/livros/$slug"
                    params={{ slug: livro.slug }}
                    className="eyebrow inline-flex items-center gap-2 transition-colors hover:text-primary"
                  >
                    Detalhes
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}