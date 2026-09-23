import { createHmac, timingSafeEqual } from "node:crypto";

import { estimarLeitura, gerarSlug } from "@/lib/blog-posts";

export const LOVABLE_ORIGEM = "https://psico-space-hub.lovable.app";
const colunas = "id,slug,titulo,categoria,data,leitura,resumo,imagem,paragrafos,status,created_at";

export type Acao = "listar" | "obter" | "salvar" | "apagar" | "capa";

export function temChaveServico() {
  return !!process.env["SUPABASE_SERVICE_ROLE_KEY"];
}

export function assinar(corpo: string) {
  return createHmac("sha256", process.env["ADMIN_PASSWORD"] ?? "").update(corpo).digest("hex");
}

export function assinaturaValida(corpo: string, assinatura: string) {
  if (!process.env["ADMIN_PASSWORD"]) return false;
  const a = Buffer.from(assinar(corpo));
  const b = Buffer.from(assinatura);
  return a.length === b.length && timingSafeEqual(a, b);
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export async function executarLocal(acao: Acao, dados: any): Promise<any> {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  switch (acao) {
    case "listar": {
      const { data, error } = await supabaseAdmin
        .from("blog_posts")
        .select(colunas)
        .order("created_at", { ascending: false });
      if (error) throw new Error(error.message);
      return data ?? [];
    }
    case "obter": {
      const { data, error } = await supabaseAdmin
        .from("blog_posts")
        .select(colunas)
        .eq("slug", String(dados.slug))
        .maybeSingle();
      if (error) throw new Error(error.message);
      return data ?? null;
    }
    case "salvar": {
      const paragrafos = (dados.paragrafos as string[]).filter((p) => p.trim().length > 0);
      const slug = (dados.slug?.trim() || gerarSlug(dados.titulo)) || `post-${Date.now()}`;
      const registro = {
        slug,
        titulo: dados.titulo.trim(),
        categoria: dados.categoria.trim() || "Blog",
        data: dados.data.trim(),
        leitura: dados.leitura?.trim() || estimarLeitura(paragrafos),
        resumo: dados.resumo.trim(),
        imagem: dados.imagem || null,
        paragrafos,
        status: dados.status,
        published_at: dados.status === "published" ? new Date().toISOString() : null,
      };
      const { error } = dados.id
        ? await supabaseAdmin.from("blog_posts").update(registro).eq("id", dados.id)
        : await supabaseAdmin.from("blog_posts").insert(registro);
      if (error) throw new Error(error.message);
      return { ok: true, slug };
    }
    case "apagar": {
      const { error } = await supabaseAdmin.from("blog_posts").delete().eq("id", String(dados.id));
      if (error) throw new Error(error.message);
      return { ok: true };
    }
    case "capa": {
      const extensao = (String(dados.nome).split(".").pop() ?? "jpg").toLowerCase().replace(/[^a-z0-9]/g, "");
      const caminho = `capas/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${extensao}`;
      const { error } = await supabaseAdmin.storage
        .from("blog")
        .upload(caminho, Buffer.from(String(dados.base64), "base64"), {
          contentType: dados.tipo || "image/jpeg",
          upsert: false,
        });
      if (error) throw new Error(error.message);
      return { url: `/api/public/blog-imagem/${caminho}` };
    }
  }
}

export async function executar(acao: Acao, dados: any): Promise<any> {
  if (temChaveServico()) return executarLocal(acao, dados);
  const corpo = JSON.stringify({ acao, dados, ts: Date.now() });
  const resp = await fetch(`${LOVABLE_ORIGEM}/api/public/admin-proxy`, {
    method: "POST",
    headers: { "content-type": "application/json", "x-assinatura": assinar(corpo) },
    body: corpo,
  });
  const json = (await resp.json().catch(() => null)) as { resultado?: any; erro?: string } | null;
  if (!resp.ok || !json) throw new Error(json?.erro ?? `Falha no servidor (${resp.status})`);
  return json.resultado;
}
