import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";

import { Eyebrow, Section } from "@/components/site/bits";
import { brandShareImage, livros, site } from "@/data/site";

export const Route = createFileRoute("/livros/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const livro = livros.find((item) => item.slug === params.slug);
    if (!livro) throw notFound();
    return { livro };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Livro não encontrado" }, { name: "robots", content: "noindex" }] };
    }
    const { livro } = loaderData;
    const titulo = `${livro.titulo} | Livros`;
    const url = `https://psico-space-hub.lovable.app/livros/${livro.slug}`;
    return {
      meta: [
        { title: titulo },
        { name: "description", content: livro.resumo },
        { property: "og:title", content: titulo },
        { property: "og:description", content: livro.resumo },
        { property: "og:type", content: "book" },
        { property: "og:url", content: url },
        { property: "og:image", content: brandShareImage },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: brandShareImage },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Book",
            name: livro.titulo,
            description: livro.resumo,
            image: livro.imagem,
            url,
            author: {
              "@type": "Person",
              name: "Jéssica Pelissari",
            },
            publisher: {
              "@type": "Organization",
              name: `${site.nome} — ${site.subtitulo}`,
            },
            ...(livro.investimento.includes("R$")
              ? {
                  offers: {
                    "@type": "Offer",
                    price: livro.investimento.replace("R$", "").trim().replace(",", "."),
                    priceCurrency: "BRL",
                    url: livro.compraUrl,
                    availability: "https://schema.org/InStock",
                  },
                }
              : {}),
          }),
        },
      ],
    };
  },
  component: LivroPage,
});

function LivroPage() {
  const { livro } = Route.useLoaderData();

  return (
    <>
      <Section>
        <Link
          to="/livros"
          className="eyebrow inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Todos os livros
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-16">
          <img
            src={livro.imagem}
            alt={livro.titulo}
            width={1280}
            height={2080}
            className="w-full object-contain lg:sticky lg:top-32"
          />
          <div>
            <Eyebrow>{livro.etiqueta}</Eyebrow>
            <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">{livro.titulo}</h1>
            {livro.texto.map((p) => (
              <p key={p} className="mt-6 text-base leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}

            <div className="mt-10 bg-muted p-6 sm:p-8">
              <p className="eyebrow text-muted-foreground">Informações</p>
              <dl className="mt-5 grid gap-5 sm:grid-cols-3">
                <div>
                  <dt className="text-xs text-muted-foreground">Formato</dt>
                  <dd className="font-display text-xl">{livro.formato}</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted-foreground">Público</dt>
                  <dd className="font-display text-xl">{livro.publico}</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted-foreground">Investimento</dt>
                  <dd className="font-display text-xl">{livro.investimento}</dd>
                </div>
              </dl>
              <a
                href={livro.compraUrl}
                target="_blank"
                rel="noreferrer"
                className="eyebrow mt-8 inline-flex max-w-full items-center justify-center gap-2 bg-primary px-6 py-4 text-center text-primary-foreground transition-opacity hover:opacity-90 sm:px-7"
              >
                {livro.compraTexto ?? "Comprar e-book"}
              </a>
              <p className="mt-4 text-xs text-muted-foreground">
                {livro.compraNota ?? "A compra é realizada em uma plataforma externa segura."}
              </p>
            </div>

            <h2 className="mt-12 font-display text-3xl">O que você encontra no material</h2>
            <ul className="mt-6 space-y-3">
              {livro.destaques.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}