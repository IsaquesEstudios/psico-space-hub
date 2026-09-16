import { createFileRoute } from "@tanstack/react-router";
import { getRouterInstance } from "@tanstack/react-start";

import { atendimentos, cursos, novidades, posts } from "@/data/site";
import {
  isSitemapRouteIncluded,
  sitemapPathForLocation,
  sitemapStaticPaths,
  sitemapXML,
  type SitemapEntry,
} from "@/lib/sitemap";

const BASE_URL = "https://psico-space-hub.lovable.app";

export const Route = createFileRoute("/sitemap.xml")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async () => {
        const router = await getRouterInstance();
        const entries: SitemapEntry[] = sitemapStaticPaths(router).map((path) => ({ path }));

        const colecoes: { routeId: string; to: string; slugs: string[] }[] = [
          {
            routeId: "/atendimentos/$slug",
            to: "/atendimentos/$slug",
            slugs: atendimentos.map((item) => item.slug),
          },
          { routeId: "/cursos/$slug", to: "/cursos/$slug", slugs: cursos.map((item) => item.slug) },
          { routeId: "/blog/$slug", to: "/blog/$slug", slugs: posts.map((item) => item.slug) },
          {
            routeId: "/novidades/$slug",
            to: "/novidades/$slug",
            slugs: novidades.map((item) => item.slug),
          },
        ];

        for (const colecao of colecoes) {
          const rota = (router.routesById as unknown as Record<string, unknown>)[colecao.routeId];
          if (!isSitemapRouteIncluded(rota as never)) continue;


          for (const slug of colecao.slugs) {
            const location = router.buildLocation({
              to: colecao.to,
              params: { slug },
              search: () => ({}),
              hash: "",
            });
            const path = sitemapPathForLocation(router, location, colecao.routeId);
            if (path) entries.push({ path });
          }
        }

        if (entries.length === 0) {
          return new Response(
            'No pages are included in this sitemap. Check route decisions and ancestor exclusions. Setting "exclude-subtree" on the root excludes the entire site.',
            { status: 404, headers: { "Cache-Control": "no-store" } },
          );
        }
        return new Response(sitemapXML(BASE_URL, entries), {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
