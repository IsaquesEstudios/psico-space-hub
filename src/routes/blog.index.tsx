import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Eyebrow, Section } from "@/components/site/bits";
import { brandShareImage, images, posts } from "@/data/site";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog | Marina Alvez Psicopedagogia" },
      {
        name: "description",
        content:
          "Textos informativos sobre leitura, rotina de estudos, atenção e desenvolvimento da aprendizagem.",
      },
      { property: "og:title", content: "Blog | Marina Alvez Psicopedagogia" },
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
      <section className="relative flex min-h-[420px] items-center overflow-hidden bg-deep px-5 py-20 text-deep-foreground lg:min-h-[520px] lg:px-10 lg:py-24">
        <img
          src={images.blogHero}
          alt="Mulher digitando em um notebook"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep from-[12%] via-deep/85 via-[52%] to-transparent to-[96%]" />
        <div className="absolute inset-0 bg-deep/55 lg:hidden" />
        <div className="relative mx-auto w-full max-w-7xl">
          <p className="eyebrow text-deep-foreground/60">Blog</p>
          <h1 className="mt-6 max-w-2xl font-display text-5xl leading-tight lg:text-6xl">
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
            <h2 className="mt-4 font-display text-4xl leading-tight lg:text-5xl">
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
