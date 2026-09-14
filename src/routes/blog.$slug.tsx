import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { Section } from "@/components/site/bits";
import { posts } from "@/data/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Texto não encontrado" }, { name: "robots", content: "noindex" }] };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.titulo} | Blog` },
        { name: "description", content: post.resumo },
        { property: "og:title", content: post.titulo },
        { property: "og:description", content: post.resumo },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  const outros = posts.filter((p) => p.slug !== post.slug);

  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl">
          <Link
            to="/blog"
            className="eyebrow inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Voltar ao blog
          </Link>
          <p className="eyebrow mt-10 text-primary">
            {post.categoria} · {post.data} · {post.leitura}
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight lg:text-5xl">{post.titulo}</h1>
          <img
            src={post.imagem}
            alt={post.titulo}
            width={1200}
            height={800}
            className="mt-10 h-72 w-full object-cover lg:h-96"
          />
          <div className="mt-10">
            {post.paragrafos.map((p) => (
              <p key={p} className="mb-6 text-base leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-muted">
        <p className="eyebrow text-muted-foreground">Continue lendo</p>
        <div className="mt-8 grid gap-10 sm:grid-cols-2">
          {outros.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group block">
              <img
                src={p.imagem}
                alt={p.titulo}
                loading="lazy"
                width={1200}
                height={800}
                className="h-48 w-full object-cover"
              />
              <h2 className="mt-5 font-display text-2xl transition-colors group-hover:text-primary">
                {p.titulo}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.resumo}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
