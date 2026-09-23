import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Eyebrow, Section } from "@/components/site/bits";
import { brandShareImage, fotosJessica, posts } from "@/data/site";
import { listarPostsPublicados } from "@/lib/blog.functions";
import { paraPost } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog/")({
  staticData: { sitemap: true },
  loader: async () => ({ dinamicos: (await listarPostsPublicados()).map(paraPost) }),
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
  const { dinamicos } = Route.useLoaderData();
  const todos = [...dinamicos, ...posts];

  return (
    <>
      <section className="relative flex min-h-[600px] items-center overflow-hidden bg-deep px-5 py-24 text-deep-foreground lg:min-h-[720px] lg:px-10 lg:py-28">
        <img
          src={fotosJessica.blog}
          alt="Jéssica Pelissari, neuropsicóloga da Clínica Evoluta"
          width={1080}
          height={720}
          className="absolute inset-0 h-full w-full object-cover object-[50%_28%]"
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
        {todos.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Novas postagens em breve.
          </p>
        ) : (
          <>
            <Link
              to="/blog/$slug"
              params={{ slug: todos[0]!.slug }}
              className="group grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16"
            >
              <img
                src={todos[0]!.imagem}
                alt={todos[0]!.titulo}
                width={1200}
                height={800}
                className="h-72 w-full object-cover lg:h-[460px]"
              />
              <div>
                <Eyebrow>
                  {todos[0]!.categoria} · {todos[0]!.data}
                </Eyebrow>
                <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
                  {todos[0]!.titulo}
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{todos[0]!.resumo}</p>
                <span className="eyebrow mt-8 inline-flex items-center gap-2 text-primary">
                  Ler o texto
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>

            <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {todos.slice(1).map((p) => (
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
          </>
        )}
      </Section>
    </>
  );
}
