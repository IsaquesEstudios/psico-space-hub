import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { TikTokIcon } from "@/components/site/TikTokIcon";

import { MapaLocalizacao, Section, WhatsAppButton } from "@/components/site/bits";
import { atendimentos, brandShareImage, fotosJessica, site } from "@/data/site";

export const Route = createFileRoute("/contato")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Contato | Clínica Evoluta" },
      {
        name: "description",
        content:
          "Agende uma primeira conversa: atendimento presencial e online, de segunda a sexta, das 07h às 19h. Ligue (27) 99938-6386 ou fale pelo WhatsApp.",
      },
      { property: "og:title", content: "Contato | Clínica Evoluta" },
      {
        property: "og:description",
        content: "Fale sobre a queixa principal e receba as orientações iniciais.",
      },
      { property: "og:image", content: brandShareImage },
      { name: "twitter:image", content: brandShareImage },
    ],
  }),
  component: Contato,
});

const horarios = [
  { dia: "Segunda a sexta", hora: "07h às 19h" },
  { dia: "Sábado", hora: "Fechado" },
  { dia: "Domingo", hora: "Fechado" },
];

function Contato() {
  return (
    <>
      <section className="relative flex min-h-[600px] items-center overflow-hidden bg-deep px-5 py-24 text-deep-foreground lg:min-h-[720px] lg:px-10 lg:py-28">
        <img
          src={fotosJessica.contato}
          alt="Jéssica Pelissari, da Clínica Evoluta"
          width={720}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover object-top lg:object-[62%_20%]"
        />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-deep from-[0%] via-deep/90 via-[34%] to-transparent to-[82%] lg:block" />
        <div className="absolute inset-0 bg-deep/50 lg:hidden" />
        <div className="relative mx-auto w-full max-w-7xl">
          <p className="eyebrow text-deep-foreground/60">Contato</p>
          <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Vamos começar por uma conversa
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-deep-foreground/70">
            Conte a idade da criança e a principal queixa. Respondo com horários disponíveis e o
            caminho mais indicado.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="eyebrow text-muted-foreground">Seu nome</span>
                <input
                  type="text"
                  className="mt-3 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                  placeholder="Nome completo"
                />
              </label>
              <label className="block">
                <span className="eyebrow text-muted-foreground">Telefone</span>
                <input
                  type="tel"
                  className="mt-3 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                  placeholder="(00) 00000-0000"
                />
              </label>
            </div>
            <label className="block">
              <span className="eyebrow text-muted-foreground">E-mail</span>
              <input
                type="email"
                className="mt-3 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                placeholder="seu@email.com"
              />
            </label>
            <label className="block">
              <span className="eyebrow text-muted-foreground">Tipo de atendimento</span>
              <select className="mt-3 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary">
                {atendimentos.map((a) => (
                  <option key={a.slug}>{a.titulo}</option>
                ))}
                <option>Ainda não sei</option>
              </select>
            </label>
            <label className="block">
              <span className="eyebrow text-muted-foreground">Conte um pouco da situação</span>
              <textarea
                rows={5}
                className="mt-3 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                placeholder="Idade da criança, queixa principal, o que já foi tentado…"
              />
            </label>
            <button
              type="submit"
              className="eyebrow bg-primary px-8 py-4 text-primary-foreground transition-opacity hover:opacity-90"
            >
              Enviar mensagem
            </button>
            <p className="text-xs text-muted-foreground">
              Formulário de demonstração: o envio ainda não está ativo.
            </p>
          </form>

          <aside className="space-y-10">
            <div className="bg-muted p-6 sm:p-8">
              <p className="eyebrow text-muted-foreground">Fale direto</p>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  <a href={site.telefoneLink} className="transition-colors hover:text-primary">
                    {site.telefone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  <span className="min-w-0 truncate">{site.email}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Instagram className="h-4 w-4 shrink-0 text-primary" />
                  <a
                    href={site.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-primary"
                  >
                    {site.instagram}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Youtube className="h-4 w-4 shrink-0 text-primary" />
                  <a
                    href={site.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-primary"
                  >
                    {site.youtube}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <TikTokIcon className="h-4 w-4 shrink-0 text-primary" />
                  <a
                    href={site.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-primary"
                  >
                    {site.tiktok}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 shrink-0 text-primary" />
                  {site.cidade}
                </li>
              </ul>
              <div className="mt-8">
                <WhatsAppButton href={site.whatsapp} />
              </div>
            </div>

            <div className="border border-border p-6 sm:p-8">
              <p className="eyebrow text-muted-foreground">Horários</p>
              <dl className="mt-5 space-y-4 text-sm">
                {horarios.map((h) => (
                  <div key={h.dia} className="grid grid-cols-[minmax(0,1fr)_auto] gap-4">
                    <dt className="text-muted-foreground">{h.dia}</dt>
                    <dd>{h.hora}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </Section>
      <MapaLocalizacao />
    </>

  );
}
