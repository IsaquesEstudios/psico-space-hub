import { useEffect, useState } from "react";
import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";

import { Section, WhatsAppButton } from "@/components/site/bits";
import { brandShareImage, fotosJessica, novidades, site } from "@/data/site";

export const Route = createFileRoute("/novidades/$slug")({
  staticData: { sitemap: true },
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
        { property: "og:image", content: novidade.imagemCapa?.url ?? brandShareImage },
        { name: "twitter:image", content: novidade.imagemCapa?.url ?? brandShareImage },
      ],
    };
  },
  component: NovidadePage,
});

function NovidadePage() {
  const { novidade } = Route.useLoaderData();
  const outras = novidades.filter((n) => n.slug !== novidade.slug).slice(0, 3);
  const [fotoAberta, setFotoAberta] = useState<number | null>(null);

  useEffect(() => {
    if (fotoAberta === null) return;
    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFotoAberta(null);
      if (e.key === "ArrowRight") setFotoAberta((i) => (i === null ? null : (i + 1) % novidade.galeria!.length));
      if (e.key === "ArrowLeft") setFotoAberta((i) => (i === null ? null : (i - 1 + novidade.galeria!.length) % novidade.galeria!.length));
    };
    window.addEventListener("keydown", aoTeclar);
    return () => window.removeEventListener("keydown", aoTeclar);
  }, [fotoAberta, novidade]);

  return (
    <>
      <section className="relative flex min-h-[440px] items-end overflow-hidden bg-deep text-deep-foreground lg:min-h-[520px]">
        <img
          src={novidade.imagemCapa?.url ?? fotosJessica.novidades}
          alt={novidade.imagemCapa?.alt ?? "Jéssica Pelissari, da Clínica Evoluta"}
          width={1080}
          height={720}
          style={novidade.imagemCapa ? { objectPosition: novidade.imagemCapa.posicao ?? "50% 68%" } : undefined}
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
            {novidade.paragrafos.map((p) =>
              p.startsWith("## ") ? (
                <h2 key={p} className="mb-4 mt-10 font-display text-2xl sm:text-3xl">
                  {p.slice(3)}
                </h2>
              ) : (
                <p key={p} className="mb-6 text-base leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ),
            )}
          </div>
          {novidade.galeria && novidade.galeria.length > 0 && (
            <div className="mt-14">
              <p className="eyebrow text-primary">Fotos do encontro</p>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6">
                {novidade.galeria.map((foto, i) => (
                  <button
                    key={foto.url}
                    type="button"
                    onClick={() => setFotoAberta(i)}
                    className="group relative block w-full overflow-hidden bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    aria-label={`Ampliar foto: ${foto.alt}`}
                  >
                    <img
                      src={foto.url}
                      alt={foto.alt}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      width={1080}
                      height={720}
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
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

      {fotoAberta !== null && novidade.galeria?.[fotoAberta] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Foto ampliada"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-deep/95 p-4 sm:p-8"
          onClick={() => setFotoAberta(null)}
        >
          <img
            src={novidade.galeria[fotoAberta]!.url}
            alt={novidade.galeria[fotoAberta]!.alt}
            className="max-h-[80vh] w-auto max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="mt-4 max-w-2xl text-center text-sm text-deep-foreground/80">
            {novidade.galeria[fotoAberta]!.alt}
          </p>
          <div
            className="mt-6 flex items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Foto anterior"
              onClick={() => setFotoAberta((fotoAberta - 1 + novidade.galeria!.length) % novidade.galeria!.length)}
              className="flex h-11 w-11 items-center justify-center border border-deep-foreground/30 text-deep-foreground transition-colors hover:bg-deep-foreground/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="text-sm text-deep-foreground/70">
              {fotoAberta + 1} / {novidade.galeria.length}
            </span>
            <button
              type="button"
              aria-label="Próxima foto"
              onClick={() => setFotoAberta((fotoAberta + 1) % novidade.galeria!.length)}
              className="flex h-11 w-11 items-center justify-center border border-deep-foreground/30 text-deep-foreground transition-colors hover:bg-deep-foreground/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <button
            type="button"
            aria-label="Fechar"
            onClick={() => setFotoAberta(null)}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-deep-foreground/30 text-deep-foreground transition-colors hover:bg-deep-foreground/10"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      )}
    </>
  );
}
