import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Check } from "lucide-react";

import { Eyebrow, Section, WhatsAppButton } from "@/components/site/bits";
import { brandShareImage, fotoClinica, fotosJessica, fundadora, site, sobreClinica } from "@/data/site";

export const Route = createFileRoute("/sobre")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Sobre nós | Clínica Evoluta" },
      {
        name: "description",
        content:
          "Conheça a Clínica Evoluta, sua equipe multidisciplinar e a trajetória da psicóloga e neuropsicóloga Jéssica Pelissari.",
      },
      { property: "og:title", content: "Sobre nós | Clínica Evoluta" },
      {
        property: "og:description",
         content: "Cuidado multidisciplinar, avaliação individualizada e a trajetória de Jéssica Pelissari.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:image", content: brandShareImage },
      { name: "twitter:image", content: brandShareImage },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <>
      {/* Abertura */}
      <section className="relative flex min-h-[640px] items-center overflow-hidden bg-deep text-deep-foreground lg:min-h-[760px]">
        <img
          src={fotosJessica.sobre}
          alt={fundadora.nome}
          width={720}
          height={1080}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top lg:object-[74%_18%]"
        />
        <div className="absolute inset-0 bg-deep/65 lg:hidden" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-deep from-[0%] via-deep/90 via-[34%] to-transparent to-[82%] lg:block" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-24 lg:grid lg:grid-cols-2 lg:px-10 lg:py-28">
          <div>
            <p className="eyebrow text-deep-foreground/60">Clínica Evoluta</p>
            <h1 className="mt-5 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Sobre nós
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-deep-foreground/80">
              Uma equipe multidisciplinar que une ciência, escuta e diferentes especialidades para compreender cada pessoa em sua singularidade.
            </p>
          </div>
        </div>
      </section>

      {/* Clínica */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <div>
            <Eyebrow>A Clínica Evoluta</Eyebrow>
            <h2 className="mt-5 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Diferentes especialidades, um cuidado conectado
            </h2>
          </div>
          <img
            src={fotoClinica}
            alt="Entrada da Clínica Evoluta, em São Gabriel da Palha"
            width={1920}
            height={1272}
            loading="lazy"
            className="aspect-[3/2] w-full object-cover"
          />
        </div>
        <div className="mt-12 grid gap-px bg-border md:grid-cols-2">
          {sobreClinica.map((item, index) => (
            <article key={item.titulo} className="bg-background p-7 sm:p-9">
              <span className="font-display text-3xl text-primary">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 font-display text-2xl">{item.titulo}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.texto}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Trajetória */}
      <Section className="bg-muted">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          <img
            src={fotosJessica.sobre}
            alt={fundadora.nome}
            width={720}
            height={900}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover object-top"
          />
          <div>
            <Eyebrow>Fundadora</Eyebrow>
            <h2 className="mt-5 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">{fundadora.nome}</h2>
            <p className="mt-4 text-sm font-semibold leading-relaxed text-primary">{fundadora.papel}</p>
            <p className="mt-7 text-base leading-relaxed text-muted-foreground">{fundadora.proposito}</p>
            {fundadora.intro.map((p) => (
              <p key={p} className="mt-5 text-base leading-relaxed text-muted-foreground">{p}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <div>
            <Eyebrow>Formação e especializações</Eyebrow>
            <h2 className="mt-5 font-display text-3xl leading-tight sm:text-4xl">Uma trajetória dedicada à Neuropsicologia</h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {fundadora.formacao.map((item) => (
              <li key={item} className="flex gap-3 border-l-2 border-primary bg-muted p-5 text-sm leading-relaxed">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Obras */}
      <Section className="bg-deep text-deep-foreground">
        <div className="max-w-2xl">
          <p className="eyebrow text-primary">Autora</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl">
            Compartilhar conhecimento também transforma vidas
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-deep-foreground/70">{fundadora.autoriaIntroducao}</p>
        </div>
        <div className="mt-12 grid gap-px bg-deep-foreground/15 sm:grid-cols-3">
          {fundadora.obras.map((o) => (
            <div key={o.titulo} className="bg-deep p-8">
              <BookOpen className="h-6 w-6 text-primary" strokeWidth={1.4} />
              <p className="mt-6 font-display text-2xl leading-snug">{o.titulo}</p>
              <p className="mt-4 text-sm leading-relaxed text-deep-foreground/65">{o.nota}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Fechamento da trajetória */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Ciência e prática clínica</Eyebrow>
          <p className="mt-7 font-display text-2xl leading-relaxed text-foreground sm:text-3xl lg:text-4xl">
            {fundadora.fechamento}
          </p>
        </div>
      </Section>

      {/* Fechamento */}
      <Section className="bg-deep text-deep-foreground">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_auto] lg:items-end">
          <div>
            <p className="eyebrow text-deep-foreground/60">Próximo passo</p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl">
              Não sabe qual atendimento procurar?
            </h2>
            <p className="mt-4 max-w-lg text-sm text-deep-foreground/70">
              Você não precisa saber exatamente qual profissional procurar. Nossa equipe pode ajudar a
              compreender qual avaliação ou especialidade é mais adequada para a sua necessidade.
            </p>
          </div>
          <WhatsAppButton href={site.whatsapp} label="Falar com equipe Evoluta" />
        </div>
      </Section>
    </>
  );
}
