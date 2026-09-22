import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

import logoAsset from "@/assets/logo-l.png.asset.json";
import { atendimentos, site } from "@/data/site";

const links = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre nós" },
  { to: "/cursos", label: "Cursos" },
  { to: "/blog", label: "Blog" },
  { to: "/novidades", label: "Notícias" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Na home, o menu nasce transparente sobre o marrom do hero e ganha o vidro ao rolar.
  const solid = scrolled || open || pathname !== "/";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-deep-foreground transition-colors duration-300 ${
        solid
          ? pathname === "/"
            ? "bg-deep/70 backdrop-blur-xl"
            : "bg-deep"
          : "bg-transparent"
      }`}
    >
      <div className="px-5 lg:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 xl:flex xl:justify-between xl:gap-8">
        <Link to="/" className="flex min-w-0 items-center gap-3 leading-tight" aria-label={`${site.nome} — Início`}>
          <img src={logoAsset.url} alt="" width="56" height="51" className="h-10 w-auto shrink-0 object-contain" />
          <span className="min-w-0 truncate font-display text-lg font-semibold sm:text-xl">{site.nome}</span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex 2xl:gap-8">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className="eyebrow text-deep-foreground/75 transition-colors hover:text-primary"
            activeProps={{ className: "eyebrow text-primary" }}
          >
            Início
          </Link>

          <div className="group relative">
            <Link
              to="/atendimentos"
              className="eyebrow flex items-center gap-1.5 text-deep-foreground/75 transition-colors hover:text-primary"
              activeProps={{ className: "eyebrow flex items-center gap-1.5 text-primary" }}
            >
              Atendimentos
              <ChevronDown className="h-3 w-3" />
            </Link>
            <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              <div className="border border-border/60 bg-background/90 p-2 shadow-lg backdrop-blur-xl">
                {atendimentos.map((a) => (
                  <Link
                    key={a.slug}
                    to="/atendimentos/$slug"
                    params={{ slug: a.slug }}
                    className="block px-4 py-3 text-sm text-foreground transition-colors hover:bg-muted hover:text-primary"
                  >
                    {a.titulo}
                    <span className="mt-0.5 block text-xs text-muted-foreground">{a.etiqueta}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {links.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="eyebrow text-deep-foreground/75 transition-colors hover:text-primary"
              activeProps={{ className: "eyebrow text-primary" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 xl:block">
          <Link
            to="/contato"
            className="eyebrow border border-deep-foreground/25 px-5 py-3 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            Agendar conversa
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          className="shrink-0 xl:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        </div>
      </div>

      {open && (
        <div className="max-h-[calc(100dvh-80px)] overflow-y-auto border-t border-deep-foreground/10 px-5 pb-6 xl:hidden">
          <Link to="/" onClick={() => setOpen(false)} className="block py-3 text-sm">
            Início
          </Link>
          <button
            type="button"
            onClick={() => setSubOpen((v) => !v)}
            className="flex w-full items-center justify-between py-3 text-sm"
          >
            Atendimentos
            <ChevronDown className={`h-4 w-4 transition-transform ${subOpen ? "rotate-180" : ""}`} />
          </button>
          {subOpen && (
            <div className="border-l border-deep-foreground/15 pl-4">
              <Link
                to="/atendimentos"
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-deep-foreground/70"
              >
                Ver todos
              </Link>
              {atendimentos.map((a) => (
                <Link
                  key={a.slug}
                  to="/atendimentos/$slug"
                  params={{ slug: a.slug }}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm text-deep-foreground/70"
                >
                  {a.titulo}
                </Link>
              ))}
            </div>
          )}
          {links.slice(1).map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block py-3 text-sm">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
