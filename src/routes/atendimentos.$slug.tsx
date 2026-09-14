import { createFileRoute, notFound, Link } from "@tanstack/react-router";

import { Eyebrow, Section, WhatsAppButton } from "@/components/site/bits";
import { atendimentos, brandShareImage, site, type Atendimento } from "@/data/site";

export const Route = createFileRoute("/atendimentos/$slug")({
  loader: ({ params }) => {
    const item = atendimentos.find((a) => a.slug === params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Atendimento não encontrado" }, { name: "robots", content: "noindex" }],
      };
    }
    const { item } = loaderData;
    const titulo = `${item.titulo} | Clínica Evoluta`;
    return {
      meta: [
        { title: titulo },
        { name: "description", content: item.resumo },
        { property: "og:title", content: titulo },
        { property: "og:description", content: item.resumo },
        { property: "og:image", content: brandShareImage },
        { name: "twitter:image", content: brandShareImage },
      ],
    };
  },
  component: AtendimentoPage,
});

function AtendimentoPage() {
  const { item } = Route.useLoaderData();

  switch (item.slug) {
    case "tdah-e-atencao":
      return <LayoutFaixa item={item} />;
    case "dislexia-e-leitura":
      return <LayoutZigueZague item={item} />;
    case "avaliacao-de-aprendizagem":
      return <LayoutEtapas item={item} />;
    case "orientacao-a-pais-e-escolas":
      return <LayoutEditorial item={item} />;
    default:
      return <LayoutLateral item={item} />;
  }
}

function InfoLista({ item }: { item: Atendimento }) {
  return (
    <dl className="grid gap-px bg-border sm:grid-cols-2">
      {item.info.map((i) => (
        <div key={i.rotulo} className="bg-muted p-6">
          <dt className="eyebrow text-muted-foreground">{i.rotulo}</dt>
          <dd className="mt-2 font-display text-2xl">{i.valor}</dd>
        </div>
      ))}
    </dl>
  );
}

function ParaQuem({ item }: { item: Atendimento }) {
  return (
    <ul className="space-y-3">
      {item.paraQuem.map((p) => (
        <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" />
          {p}
        </li>
      ))}
    </ul>
  );
}

function Fechamento({ item }: { item: Atendimento }) {
  return (
    <Section className="bg-deep text-deep-foreground">
      <div className="grid gap-8 lg:grid-cols-[1.3fr_auto] lg:items-end">
        <div>
          <p className="eyebrow text-deep-foreground/60">Próximo passo</p>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl">
            Vamos conversar sobre {item.titulo.toLowerCase()}?
          </h2>
          <p className="mt-4 max-w-lg text-sm text-deep-foreground/70">
            Envie uma mensagem com a idade da criança e a principal queixa. Respondo com os horários
            disponíveis e as orientações iniciais.
          </p>
        </div>
        <WhatsAppButton href={site.whatsapp} />
      </div>
      <div className="mt-14 border-t border-deep-foreground/15 pt-8">
        <p className="eyebrow text-deep-foreground/50">Outros atendimentos</p>
        <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
          {atendimentos
            .filter((a) => a.slug !== item.slug)
            .map((a) => (
              <Link
                key={a.slug}
                to="/atendimentos/$slug"
                params={{ slug: a.slug }}
                className="text-sm text-deep-foreground/75 transition-colors hover:text-primary"
              >
                {a.titulo}
              </Link>
            ))}
        </div>
      </div>
    </Section>
  );
}

/* Modelo 1 — foto lateral grande, texto em coluna única */
function LayoutLateral({ item }: { item: Atendimento }) {
  return (
    <>
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <img
            src={item.imagem}
            alt={item.titulo}
            width={1200}
            height={900}
            className="h-72 w-full object-cover lg:h-[540px]"
          />
          <div>
            <Eyebrow>{item.etiqueta}</Eyebrow>
            <h1 className="mt-4 font-display text-5xl leading-tight lg:text-6xl">{item.titulo}</h1>
            {item.texto.map((p) => (
              <p key={p} className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
            <h2 className="mt-12 font-display text-3xl">Para quem é indicado</h2>
            <div className="mt-5">
              <ParaQuem item={item} />
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-muted">
        <h2 className="font-display text-4xl">Como funciona</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {item.comoFunciona.map((c, i) => (
            <div key={c.titulo} className="border-t border-foreground/15 pt-6">
              <span className="font-display text-4xl text-primary">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-4 font-display text-2xl">{c.titulo}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.texto}</p>
            </div>
          ))}
        </div>
        <div className="mt-14">
          <InfoLista item={item} />
        </div>
      </Section>

      <Fechamento item={item} />
    </>
  );
}

/* Modelo 2 — faixa larga no topo, duas colunas */
function LayoutFaixa({ item }: { item: Atendimento }) {
  return (
    <>
      <div className="relative">
        <img
          src={item.imagem}
          alt={item.titulo}
          width={1400}
          height={800}
          className="h-72 w-full object-cover lg:h-[460px]"
        />
        <div className="absolute inset-0 bg-deep/50" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-5 pb-12 text-deep-foreground lg:px-10 lg:pb-16">
            <p className="eyebrow text-deep-foreground/70">{item.etiqueta}</p>
            <h1 className="mt-4 max-w-2xl font-display text-5xl leading-tight lg:text-6xl">
              {item.titulo}
            </h1>
          </div>
        </div>
      </div>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            {item.texto.map((p) => (
              <p key={p} className="mb-5 text-sm leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
            <h2 className="mt-10 font-display text-3xl">Para quem é indicado</h2>
            <div className="mt-5">
              <ParaQuem item={item} />
            </div>
          </div>
          <div className="bg-muted p-8 lg:p-10">
            <h2 className="font-display text-3xl">Como funciona</h2>
            <div className="mt-8 space-y-8">
              {item.comoFunciona.map((c) => (
                <div key={c.titulo} className="border-l-2 border-primary pl-5">
                  <p className="eyebrow">{c.titulo}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-14">
          <InfoLista item={item} />
        </div>
      </Section>

      <Fechamento item={item} />
    </>
  );
}

/* Modelo 3 — blocos alternados foto/texto */
function LayoutZigueZague({ item }: { item: Atendimento }) {
  return (
    <>
      <Section className="bg-muted">
        <div className="max-w-3xl">
          <Eyebrow>{item.etiqueta}</Eyebrow>
          <h1 className="mt-4 font-display text-5xl leading-tight lg:text-6xl">{item.titulo}</h1>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{item.texto[0]}</p>
        </div>
      </Section>

      <Section>
        <div className="space-y-16 lg:space-y-24">
          {item.comoFunciona.map((c, i) => (
            <div
              key={c.titulo}
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>img]:order-2" : ""
              }`}
            >
              <img
                src={item.imagem}
                alt={c.titulo}
                loading="lazy"
                width={1200}
                height={900}
                className="h-64 w-full object-cover lg:h-96"
              />
              <div>
                <span className="font-display text-5xl text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 font-display text-3xl">{c.titulo}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-muted">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl">Para quem é indicado</h2>
            <div className="mt-5">
              <ParaQuem item={item} />
            </div>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">{item.texto[1]}</p>
          </div>
          <dl className="grid gap-px self-start bg-border sm:grid-cols-2">
            {item.info.map((i) => (
              <div key={i.rotulo} className="bg-background p-6">
                <dt className="eyebrow text-muted-foreground">{i.rotulo}</dt>
                <dd className="mt-2 font-display text-2xl">{i.valor}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Fechamento item={item} />
    </>
  );
}

/* Modelo 4 — grade de etapas + foto em destaque */
function LayoutEtapas({ item }: { item: Atendimento }) {
  return (
    <>
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <Eyebrow>{item.etiqueta}</Eyebrow>
            <h1 className="mt-4 font-display text-5xl leading-tight lg:text-6xl">{item.titulo}</h1>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {item.texto[0]}
            </p>
          </div>
          <img
            src={item.imagem}
            alt={item.titulo}
            width={1200}
            height={900}
            className="h-64 w-full object-cover lg:h-80"
          />
        </div>

        <div className="mt-16">
          <h2 className="font-display text-3xl">As etapas do processo</h2>
          <div className="mt-8 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {item.comoFunciona.map((c) => (
              <div key={c.titulo} className="bg-muted p-8">
                <p className="font-display text-2xl text-primary">{c.titulo}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-muted">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-3xl">Quando indicar</h2>
            <div className="mt-5">
              <ParaQuem item={item} />
            </div>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">{item.texto[1]}</p>
          </div>
          <dl className="grid gap-px self-start bg-border sm:grid-cols-2">
            {item.info.map((i) => (
              <div key={i.rotulo} className="bg-background p-6">
                <dt className="eyebrow text-muted-foreground">{i.rotulo}</dt>
                <dd className="mt-2 font-display text-2xl">{i.valor}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Fechamento item={item} />
    </>
  );
}

/* Modelo 5 — editorial com citação grande e barra lateral */
function LayoutEditorial({ item }: { item: Atendimento }) {
  return (
    <>
      <Section className="bg-muted">
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow>{item.etiqueta}</Eyebrow>
          <h1 className="mt-4 font-display text-5xl leading-tight lg:text-6xl">{item.titulo}</h1>
          <blockquote className="mt-10 font-display text-3xl leading-snug text-primary lg:text-4xl">
            “Nenhuma criança aprende sozinha — o entorno também aprende.”
          </blockquote>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <article>
            <img
              src={item.imagem}
              alt={item.titulo}
              width={1200}
              height={900}
              className="h-72 w-full object-cover lg:h-96"
            />
            {item.texto.map((p) => (
              <p key={p} className="mt-6 text-base leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
            <h2 className="mt-12 font-display text-3xl">Como funciona</h2>
            <div className="mt-6 space-y-6">
              {item.comoFunciona.map((c) => (
                <div key={c.titulo}>
                  <p className="eyebrow">{c.titulo}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.texto}</p>
                </div>
              ))}
            </div>
          </article>

          <aside className="space-y-8 self-start bg-muted p-8">
            <div>
              <p className="eyebrow text-muted-foreground">Informações</p>
              <dl className="mt-4 space-y-4">
                {item.info.map((i) => (
                  <div key={i.rotulo}>
                    <dt className="text-xs text-muted-foreground">{i.rotulo}</dt>
                    <dd className="font-display text-xl">{i.valor}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="border-t border-border pt-6">
              <p className="eyebrow text-muted-foreground">Para quem é indicado</p>
              <div className="mt-4">
                <ParaQuem item={item} />
              </div>
            </div>
            <WhatsAppButton href={site.whatsapp} label="Solicitar proposta" />
          </aside>
        </div>
      </Section>

      <Fechamento item={item} />
    </>
  );
}
