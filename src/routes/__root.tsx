import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { MapaLocalizacao } from "../components/site/bits";


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  staticData: { sitemap: false },
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Clínica Evoluta | Cuidado com a aprendizagem" },
      {
        name: "description",
        content:
          "Atendimento para crianças e adolescentes, avaliação, cursos e orientação a famílias e escolas.",
      },
      { name: "author", content: "Clínica Evoluta" },
      { property: "og:site_name", content: "Clínica Evoluta" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap",
        },
        { rel: "icon", href: "/favicon.png", type: "image/png" },
        { rel: "apple-touch-icon", href: "/favicon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body className="overflow-x-hidden">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function IndicadorCarregamento() {
  const isPending = useRouterState({
    select: (s) =>
      s.location.pathname !== s.resolvedLocation?.pathname || s.status === "pending",
  });
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [aguardandoImagens, setAguardandoImagens] = useState(true);

  // A cada troca de página (e no primeiro carregamento) espera as imagens
  // principais (sem lazy) terminarem antes de esconder o indicador.
  useEffect(() => {
    setAguardandoImagens(true);
  }, [pathname]);

  useEffect(() => {
    if (!aguardandoImagens) return;
    const inicio = Date.now();
    const id = window.setInterval(() => {
      const pendentes = Array.from(document.images).some(
        (img) => img.loading !== "lazy" && (!img.complete || img.naturalWidth === 0),
      );
      if (!pendentes || Date.now() - inicio > 4000) setAguardandoImagens(false);
    }, 120);
    return () => window.clearInterval(id);
  }, [aguardandoImagens]);

  const ativo = isPending || aguardandoImagens;
  return (
    <div
      aria-hidden={!ativo}
      className={`pointer-events-none fixed inset-x-0 top-0 z-[70] h-[3px] transition-opacity duration-200 ${
        ativo ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="nav-progress h-full w-full bg-primary" />
    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });




  // Na home o hero corre por baixo do menu fixo; nas outras páginas o conteúdo
  // precisa de um respiro no topo para não ficar escondido sob o menu.
  const isHome = pathname === "/";

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <IndicadorCarregamento />
        <Header />
        {!isHome && <div className="h-[88px] bg-deep" aria-hidden />}
        <main className="flex-1">

          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <MapaLocalizacao />
        <Footer />

      </div>
    </QueryClientProvider>
  );
}
