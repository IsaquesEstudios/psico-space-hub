import { createServerFn } from "@tanstack/react-start";

import type { PostDb } from "@/lib/blog-posts";

function clientePublico() {
  const url = process.env["SUPABASE_URL"] ?? process.env["VITE_SUPABASE_URL"];
  const key =
    process.env["SUPABASE_PUBLISHABLE_KEY"] ??
    process.env["SUPABASE_ANON_KEY"] ??
    process.env["VITE_SUPABASE_PUBLISHABLE_KEY"];
  return { url, key };
}

const colunas =
  "id,slug,titulo,categoria,data,leitura,resumo,imagem,paragrafos,status,created_at";

async function buscar(query: string): Promise<PostDb[]> {
  try {
    const { url, key } = clientePublico();
    if (!url || !key) return [];
    const resposta = await fetch(`${url}/rest/v1/blog_posts?${query}`, {
      headers: { apikey: key, accept: "application/json" },
    });
    if (!resposta.ok) return [];
    return (await resposta.json()) as PostDb[];
  } catch (erro) {
    console.error("Falha ao buscar postagens", erro);
    return [];
  }
}

export const listarPostsPublicados = createServerFn({ method: "GET" }).handler(async () => {
  return buscar(
    `select=${colunas}&status=eq.published&order=created_at.desc&limit=100`,
  );
});
