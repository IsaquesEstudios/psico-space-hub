import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Eyebrow, Section } from "@/components/site/bits";
import { brandShareImage, fotosJessica, posts } from "@/data/site";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog | Clínica Evoluta" },
      {
        name: "description",
        content:
          "Textos informativos sobre leitura, rotina de estudos, atenção e desenvolvimento da aprendizagem.",
      },
      { property: "og:title", content: "Blog | Clínica Evoluta" },
      {
        property: "og:description",
        content: "Conteúdo prático sobre aprendizagem para famílias e educadores.",
      },
      { property: "og:image", content: brandShareImage },
      { name: "twitter:image", content: brandShareImage },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const destaque = posts[0]!;
  const restantes = posts.slice(1);

  return (
    <>
      <section className="relative flex min-h-[600px] items-center overflow-hidden bg-deep px-5 py-24 text-deep-foreground lg:min-h-[720px] lg:px-10 lg:py-28">
        <img
          src={fotosJessica.blog}
          alt="Jéssica Pelissari, neuropsicóloga da Clínica Evoluta"
          width={720}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover object-top lg:object-[72%_20%]"
        />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-deep from-[0%] via-deep/90 via-[34%] to-transparent to-[82%] lg:block" />
        <div className="absolute inset-0 bg-deep/70 lg:hidden" />
        <div className="relative mx-auto w-full max-w-7xl">
          <p className="eyebrow text-deep-foreground/60">Blog</p>
          <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Textos para entender a aprendizagem
          </h1>
        </div>
      </section>

      <Section>
        <Link
          to="/blog/$slug"
          params={{ slug: destaque.slug }}
          className="group grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16"
        >
          <img
            src={destaque.imagem}
            alt={destaque.titulo}
            width={1200}
            height={800}
            className="h-72 w-full object-cover lg:h-[460px]"
          />
          <div>
            <Eyebrow>
              {destaque.categoria} · {destaque.data}
            </Eyebrow>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
              {destaque.titulo}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{destaque.resumo}</p>
            <span className="eyebrow mt-8 inline-flex items-center gap-2 text-primary">
              Ler o texto
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>

        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {restantes.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group block">
              <img
                src={p.imagem}
                alt={p.titulo}
                loading="lazy"
                width={1200}
                height={800}
                className="h-56 w-full object-cover"
              />
              <p className="eyebrow mt-5 text-muted-foreground">
                {p.categoria} · {p.leitura}
              </p>
              <h3 className="mt-3 font-display text-2xl leading-snug transition-colors group-hover:text-primary">
                {p.titulo}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.resumo}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
