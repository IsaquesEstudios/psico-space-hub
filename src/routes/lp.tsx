import { Link, createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { Check } from "lucide-react";
import { useState, type FormEvent } from "react";

import { brandShareImage } from "@/data/site";
import { enviarCadastroGuia } from "@/lib/lp-guia.functions";
import capaGuia from "@/assets/lp-guia-capa.jpg";
import fotoGuia from "@/assets/lp-guia-hero.jpg";

export const Route = createFileRoute("/lp")({
  staticData: { sitemap: false },
  head: () => ({
    meta: [
      {
        title: "Guia para Pais: Sinais de Alerta no Desenvolvimento Infantil | Clínica Evoluta",
      },
      {
        name: "description",
        content:
          "Guia gratuito da Clínica Evoluta para pais e responsáveis: sinais de alerta no desenvolvimento infantil, comportamento, comunicação e aprendizagem. Baixe gratuitamente.",
      },
      {
        property: "og:title",
        content: "Guia para Pais: Sinais de Alerta no Desenvolvimento Infantil | Clínica Evoluta",
      },
      {
        property: "og:description",
        content:
          "Material gratuito para pais e responsáveis reconhecerem sinais que merecem atenção no desenvolvimento infantil.",
      },
      { property: "og:url", content: "https://psico-space-hub.lovable.app/lp" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: brandShareImage },
      { name: "twitter:image", content: brandShareImage },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://psico-space-hub.lovable.app/lp" }],
  }),
  component: PaginaGuia,
});

const itensGuia = [
  "Sinais de alerta relacionados ao desenvolvimento infantil",
  "Aspectos de comportamento, comunicação e aprendizagem que merecem atenção",
  "Situações em que pode ser importante procurar orientação profissional",
  "Informações para ajudar os pais a compreender melhor o desenvolvimento da criança",
  "Orientações sobre quando buscar uma avaliação especializada",
];

function PaginaGuia() {
  const enviar = useServerFn(enviarCadastroGuia);
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState("");

  async function aoEnviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    const dados = new FormData(evento.currentTarget);
    const nome = String(dados.get("nome") ?? "").trim();
    const email = String(dados.get("email") ?? "").trim();
    const whatsapp = String(dados.get("whatsapp") ?? "").trim();

    if (nome.length < 3) {
      setErro("Informe seu nome completo.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErro("Informe um e-mail válido.");
      return;
    }
    if (whatsapp.replace(/\D/g, "").length < 10) {
      setErro("Informe um WhatsApp válido, com DDD.");
      return;
    }

    setErro("");
    setEnviando(true);
    try {
      await enviar({ data: { nome, email, whatsapp, armadilha: String(dados.get("empresa") ?? "") } });
      setEnviado(true);
    } catch (excecao) {
      setErro(
        excecao instanceof Error ? excecao.message : "Não foi possível enviar agora. Tente novamente.",
      );
    } finally {
      setEnviando(false);
    }
  }

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-deep px-5 py-16 text-deep-foreground lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="eyebrow text-primary">Guia gratuito para pais e responsáveis</p>
            <h1 className="mt-6 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Guia para Pais: Sinais de Alerta no Desenvolvimento Infantil
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-deep-foreground/75 sm:text-lg">
              Entenda os principais sinais que merecem atenção no desenvolvimento da criança.
            </p>
            <a
              href="#receber"
              className="eyebrow mt-9 inline-flex bg-primary px-7 py-4 text-primary-foreground transition-opacity hover:opacity-90"
            >
              Quero receber o guia
            </a>
          </div>
          <div className="mx-auto w-full max-w-md">
            <img
              src={capaGuia}
              alt="Capa do Guia para Pais: Sinais de Alerta no Desenvolvimento Infantil, da Clínica Evoluta"
              width={800}
              height={1072}
              className="w-full object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Por que este guia */}
      <section className="px-5 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <p className="eyebrow text-primary">Sobre este material</p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl">
              Nem sempre é fácil saber o que é esperado
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Nem sempre é fácil saber se determinado comportamento faz parte do desenvolvimento esperado ou se pode
              indicar que é importante buscar uma avaliação profissional.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Por isso, a Clínica Evoluta preparou este guia para ajudar pais e responsáveis a reconhecer alguns sinais
              que merecem atenção no desenvolvimento infantil.
            </p>
          </div>
          <img
            src={fotoGuia}
            alt="Materiais de acompanhamento do desenvolvimento infantil sobre uma mesa de trabalho"
            loading="lazy"
            width={1600}
            height={900}
            className="h-72 w-full object-cover sm:h-96"
          />
        </div>
      </section>

      {/* O que você vai encontrar */}
      <section className="bg-muted px-5 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow text-primary">Conteúdo do guia</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl">O que você vai encontrar neste guia?</h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {itensGuia.map((item) => (
              <li key={item} className="flex items-start gap-4 border border-border bg-background p-5 sm:p-6">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="text-sm leading-relaxed sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            <strong className="font-semibold text-foreground">
              Informação para ajudar você a entender melhor o desenvolvimento do seu filho.
            </strong>{" "}
            O objetivo deste material não é oferecer um diagnóstico, mas ajudar pais e responsáveis a identificar
            situações que podem merecer uma atenção maior.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Quanto antes uma dificuldade é compreendida, mais cedo a família pode buscar orientação adequada.
          </p>
        </div>
      </section>

      {/* Formulário */}
      <section id="receber" className="scroll-mt-24 px-5 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="eyebrow text-primary">Download gratuito</p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl">Baixe gratuitamente o Guia para Pais</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Preencha seus dados abaixo para receber o material.
            </p>
            <img
              src={capaGuia}
              alt="Capa do Guia para Pais: Sinais de Alerta no Desenvolvimento Infantil"
              loading="lazy"
              width={800}
              height={1072}
              className="mt-8 w-full max-w-[220px] object-cover shadow-lg"
            />
          </div>

          <div className="border border-border bg-background p-6 sm:p-10">
            {enviado ? (
              <div className="py-6 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-7 w-7 text-primary" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-2xl">Cadastro recebido!</h3>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Obrigado! Nossa equipe vai enviar o guia para o e-mail e o WhatsApp informados.
                </p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={aoEnviar} noValidate>
                <label className="block">
                  <span className="eyebrow text-muted-foreground">Seu nome</span>
                  <input
                    name="nome"
                    type="text"
                    autoComplete="name"
                    className="mt-3 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                    placeholder="Nome completo"
                  />
                </label>
                <label className="block">
                  <span className="eyebrow text-muted-foreground">E-mail</span>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="mt-3 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                    placeholder="seu@email.com"
                  />
                </label>
                <label className="block">
                  <span className="eyebrow text-muted-foreground">WhatsApp</span>
                  <input
                    name="whatsapp"
                    type="tel"
                    autoComplete="tel"
                    className="mt-3 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                    placeholder="(27) 99999-9999"
                  />
                </label>

                {/* Campo-armadilha: permanece invisível para pessoas */}
                <input
                  name="empresa"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-[9999px] h-0 w-0 opacity-0"
                />

                {erro ? (
                  <p role="alert" className="text-sm text-destructive">
                    {erro}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={enviando}
                  className="eyebrow w-full bg-primary px-7 py-4 text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {enviando ? "Enviando…" : "Quero receber o guia"}
                </button>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Ao enviar o formulário, você concorda em receber o guia e o contato da equipe Evoluta.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Sobre a clínica */}
      <section className="bg-deep px-5 py-16 text-deep-foreground lg:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-deep-foreground/60">Sobre a Clínica Evoluta</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl">Cuidar. Compreender. Transformar.</h2>
          <p className="mt-8 text-sm leading-relaxed text-deep-foreground/75 sm:text-base">
            A Clínica Evoluta atua no acompanhamento do desenvolvimento infantil, oferecendo uma abordagem
            multidisciplinar com profissionais de diferentes áreas.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-deep-foreground/75 sm:text-base">
            A clínica trabalha com avaliação e acompanhamento em áreas como psicologia, neuropsicologia,
            neuropsicopedagogia, fonoaudiologia e intervenção comportamental.
          </p>
          <Link
            to="/"
            className="eyebrow mt-10 inline-flex border border-deep-foreground/25 px-7 py-4 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            Conheça a Clínica Evoluta
          </Link>
        </div>
      </section>

      {/* Aviso */}
      <section className="bg-background px-5 py-10 lg:px-10">
        <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
          Este material possui caráter informativo e não substitui uma avaliação ou orientação profissional
          individualizada.
        </p>
      </section>
    </div>
  );
}
