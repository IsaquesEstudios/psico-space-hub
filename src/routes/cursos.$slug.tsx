import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";

import { Eyebrow, MapaLocalizacao, Section, WhatsAppButton } from "@/components/site/bits";
import { brandShareImage, cursos, fotosJessica, site } from "@/data/site";

export const Route = createFileRoute("/cursos/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const curso = cursos.find((c) => c.slug === params.slug);
    if (!curso) throw notFound();
    return { curso };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Curso não encontrado" }, { name: "robots", content: "noindex" }] };
    }
    const { curso } = loaderData;
    const titulo = `${curso.titulo} | Cursos`;
    const url = `https://psico-space-hub.lovable.app/cursos/${curso.slug}`;
    return {
      meta: [
        { title: titulo },
        { name: "description", content: curso.resumo },
        { property: "og:title", content: titulo },
        { property: "og:description", content: curso.resumo },
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
            "@type": "Course",
            name: curso.titulo,
            description: curso.resumo,
            url,
            timeRequired: curso.duracao,
            audience: { "@type": "Audience", audienceType: curso.publico },
            provider: {
              "@type": "Organization",
              name: `${site.nome} — ${site.subtitulo}`,
              url: "https://psico-space-hub.lovable.app",
            },
            hasCourseInstance: [
              {
                "@type": "CourseInstance",
                courseMode: "online",
                courseWorkload: curso.duracao,
                description: curso.formato,
              },
            ],
          }),
        },
      ],
    };
  },

  component: CursoPage,
});

function CursoPage() {
  const { curso } = Route.useLoaderData();
  const indice = cursos.findIndex((item) => item.slug === curso.slug);
  const fotoJessica = fotosJessica.cursosDetalhes[indice] ?? fotosJessica.cursos;

  return (
    <>
      <img
        src={fotoJessica}
        alt={`Jéssica, da Clínica Evoluta — ${curso.titulo}`}
        width={1080}
        height={720}
        className="h-72 w-full object-cover object-center lg:h-[500px]"
      />

      <Section>
        <Link
          to="/cursos"
          className="eyebrow inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Todos os cursos
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <Eyebrow>{curso.etiqueta}</Eyebrow>
            <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">{curso.titulo}</h1>
            {curso.texto.map((p) => (
              <p key={p} className="mt-6 text-base leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}

            <h2 className="mt-12 font-display text-3xl">Conteúdo do curso</h2>
            <ul className="mt-6 space-y-3">
              {curso.conteudo.map((c) => (
                <li key={c} className="flex gap-3 text-sm leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <aside className="self-start bg-muted p-6 sm:p-8">
            <p className="eyebrow text-muted-foreground">Informações</p>
            <dl className="mt-5 space-y-5">
              <div>
                <dt className="text-xs text-muted-foreground">Duração</dt>
                <dd className="font-display text-xl">{curso.duracao}</dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Formato</dt>
                <dd className="font-display text-xl">{curso.formato}</dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Público</dt>
                <dd className="font-display text-xl">{curso.publico}</dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Investimento</dt>
                <dd className="font-display text-xl">{curso.investimento}</dd>
              </div>
            </dl>
            <div className="mt-8">
              <WhatsAppButton href={site.whatsapp} label="Quero me inscrever" />
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Respondo com datas, valores e forma de pagamento.
            </p>
          </aside>
        </div>
      </Section>
      <MapaLocalizacao />
    </>

  );
}
