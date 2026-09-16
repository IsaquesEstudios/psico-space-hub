import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { Section, WhatsAppButton } from "@/components/site/bits";
import { brandShareImage, fotosJessica, novidades, site } from "@/data/site";

export const Route = createFileRoute("/novidades/$slug")({
  loader: ({ params }) => {
    const novidade = novidades.find((n) => n.slug === params.slug);
    if (!novidade) throw notFound();
    return { novidade };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Notícia não encontrada" }, { name: "robots", content: "noindex" }] };
    }
    const { novidade } = loaderData;
    return {
      meta: [
        { title: `${novidade.titulo} | Notícias` },
        { name: "description", content: novidade.texto },
        { property: "og:title", content: novidade.titulo },
        { property: "og:description", content: novidade.texto },
        { property: "og:type", content: "article" },
        { property: "og:image", content: brandShareImage },
        { name: "twitter:image", content: brandShareImage },
      ],
    };
  },
  component: NovidadePage,
});

function NovidadePage() {
  const { novidade } = Route.useLoaderData();
  const outras = novidades.filter((n) => n.slug !== novidade.slug).slice(0, 3);

  return (
    <>
      <section className="relative flex min-h-[440px] items-end overflow-hidden bg-deep text-deep-foreground lg:min-h-[520px]">
        <img
          src={fotosJessica.novidades}
          alt="Jéssica Pelissari, da Clínica Evoluta"
          width={1080}
          height={720}
          className="absolute inset-0 h-full w-full object-cover object-top lg:object-[72%_20%]"
        />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-deep from-[0%] via-deep/90 via-[34%] to-transparent to-[82%] lg:block" />
        <div className="absolute inset-0 bg-deep/70 lg:hidden" />
        <div className="relative w-full px-5 pb-14 pt-32 lg:px-10 lg:pb-20 lg:pt-40">
          <div className="mx-auto w-full max-w-7xl">
            <Link
              to="/novidades"
              className="eyebrow inline-flex items-center gap-2 text-deep-foreground/70 transition-colors hover:text-deep-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Voltar às notícias
            </Link>
            <p className="eyebrow mt-8 text-deep-foreground/60">
              {novidade.etiqueta} · {novidade.data}
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
              {novidade.titulo}
            </h1>
          </div>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed">{novidade.texto}</p>
          <div className="mt-8">
            {novidade.paragrafos.map((p) => (
              <p key={p} className="mb-6 text-base leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-10">
            <WhatsAppButton href={site.whatsapp} />
          </div>
        </div>
      </Section>

      <Section className="bg-muted">
        <p className="eyebrow text-muted-foreground">Outras notícias</p>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {outras.map((n) => (
            <Link
              key={n.slug}
              to="/novidades/$slug"
              params={{ slug: n.slug }}
              className="group block bg-card p-6 sm:p-8"
            >
              <p className="eyebrow text-primary">{n.etiqueta}</p>
              <h2 className="mt-3 font-display text-2xl leading-snug transition-colors group-hover:text-primary">
                {n.titulo}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{n.texto}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
