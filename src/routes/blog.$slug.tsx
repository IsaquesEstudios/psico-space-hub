import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { Section } from "@/components/site/bits";
import { brandShareImage, fotosJessica, posts } from "@/data/site";
import { listarPostsPublicados } from "@/lib/blog.functions";
import { paraPost } from "@/lib/blog-posts";

const meses = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

// "12 de agosto de 2026" -> "2026-08-12"
function paraIso(data: string): string | null {
  const partes = data.toLowerCase().match(/^(\d{1,2}) de ([a-zç]+) de (\d{4})$/);
  if (!partes) return null;
  const [, dia = "", nomeMes = "", ano = ""] = partes;
  const mes = meses.indexOf(nomeMes);
  if (mes < 0) return null;
  return `${ano}-${String(mes + 1).padStart(2, "0")}-${dia.padStart(2, "0")}`;

}


export const Route = createFileRoute("/blog/$slug")({
  staticData: { sitemap: true },
  loader: async ({ params }) => {
    const dinamicos = (await listarPostsPublicados()).map(paraPost);
    const post = [...dinamicos, ...posts].find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post, outros: [...dinamicos, ...posts].filter((p) => p.slug !== params.slug).slice(0, 2) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Texto não encontrado" }, { name: "robots", content: "noindex" }] };
    }
    const { post } = loaderData;
    const url = `https://psico-space-hub.lovable.app/blog/${post.slug}`;
    const dataIso = paraIso(post.data);
    return {
      meta: [
        { title: `${post.titulo} | Blog` },
        { name: "description", content: post.resumo },
        { property: "og:title", content: post.titulo },
        { property: "og:description", content: post.resumo },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: brandShareImage },
        { name: "twitter:image", content: brandShareImage },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.titulo,
            description: post.resumo,
            url,
            articleSection: post.categoria,
            ...(dataIso ? { datePublished: dataIso, dateModified: dataIso } : {}),
            author: { "@type": "Person", name: "Jéssica Pelissari" },
            publisher: { "@type": "Organization", name: "Clínica Evoluta" },
          }),
        },
      ],
    };
  },

  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  const outros = posts.filter((p) => p.slug !== post.slug);
  const indice = posts.findIndex((item) => item.slug === post.slug);
  const fotoJessica = fotosJessica.blogArtigos[indice] ?? fotosJessica.blog;

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
          <h1 className="mt-4 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">{post.titulo}</h1>
          <img
            src={fotoJessica}
            alt={`Jéssica Pelissari — ${post.titulo}`}
            width={1080}
            height={720}
            className="mt-10 h-80 w-full object-cover object-top lg:h-[480px]"
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
