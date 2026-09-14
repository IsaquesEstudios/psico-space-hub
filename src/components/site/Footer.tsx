import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MessageCircle, Phone } from "lucide-react";

import { atendimentos, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-muted">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-4 lg:px-10">
        <div>
          <p className="font-display text-2xl leading-tight">{site.nome}</p>
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
                Novidades
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
              <span>{site.telefone}</span>
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
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-5 py-6 text-xs text-muted-foreground lg:px-10">
          <span>
            © {new Date().getFullYear()} {site.nome}. Conteúdo de demonstração.
          </span>
          <span>{site.cidade}</span>
        </div>
      </div>
    </footer>
  );
}
