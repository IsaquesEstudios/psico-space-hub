import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/public/blog-imagem/$")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async ({ params }) => {
        const caminho = params._splat ?? "";
        if (!caminho || caminho.includes("..")) {
          return new Response("Not found", { status: 404 });
        }

        // fora da Lovable não há chave administrativa: busca a imagem no site da Lovable
        if (!process.env["SUPABASE_SERVICE_ROLE_KEY"]) {
          const remoto = await fetch(
            `https://psico-space-hub.lovable.app/api/public/blog-imagem/${caminho}`,
          );
          if (!remoto.ok) return new Response("Not found", { status: 404 });
          return new Response(await remoto.arrayBuffer(), {
            headers: {
              "content-type": remoto.headers.get("content-type") || "image/jpeg",
              "cache-control": "public, max-age=31536000, immutable",
            },
          });
        }

        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { data, error } = await supabaseAdmin.storage.from("blog").download(caminho);
        if (error || !data) return new Response("Not found", { status: 404 });

        return new Response(await data.arrayBuffer(), {
          headers: {
            "content-type": data.type || "image/jpeg",
            "cache-control": "public, max-age=31536000, immutable",
          },
        });
      },
    },
  },
});
