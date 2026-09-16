import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MessageCircle, Phone } from "lucide-react";

import logoAsset from "@/assets/logo-l.png.asset.json";
import { atendimentos, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-muted">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <Link to="/" className="inline-flex items-center gap-3" aria-label={`${site.nome} — Início`}>
            <img src={logoAsset.url} alt="" width="72" height="65" className="h-16 w-auto object-contain" loading="lazy" />
            <p className="font-display text-2xl leading-tight">{site.nome}</p>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">{site.slogan}</p>
        </div>

        <div>
          <p className="eyebrow text-muted-foreground">Atendimentos</p>
          <ul className="mt-4 space-y-2 text-sm">
            {atendimentos.map((a) => (
              <li key={a.slug}>
                <Link
                  to="/atendimentos/$slug"
                  params={{ slug: a.slug }}
                  className="transition-colors hover:text-primary"
                >
                  {a.titulo}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-muted-foreground">Páginas</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/" className="transition-colors hover:text-primary">
                Início
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="transition-colors hover:text-primary">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/cursos" className="transition-colors hover:text-primary">
                Cursos
              </Link>
            </li>
            <li>
              <Link to="/blog" className="transition-colors hover:text-primary">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/novidades" className="transition-colors hover:text-primary">
                Notícias
              </Link>
            </li>
            <li>
              <Link to="/contato" className="transition-colors hover:text-primary">
                Contato
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-muted-foreground">Contato</p>
          <ul className="mt-4 space-y-3 text-sm">
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
              <span>{site.instagram}</span>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle className="h-4 w-4 shrink-0 text-primary" />
              <a href={site.whatsapp} className="transition-colors hover:text-primary">
                WhatsApp
              </a>
            </li>
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">Segunda a sexta · 07h às 19h</p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <span>
            © {new Date().getFullYear()} {site.nome}. Conteúdo de demonstração.
          </span>
          <span>{site.cidade}</span>
        </div>
      </div>
    </footer>
  );
}
