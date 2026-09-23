import { createServerFn } from "@tanstack/react-start";
import { useSession } from "@tanstack/react-start/server";
import { createHash, timingSafeEqual } from "node:crypto";

import type { PostDb } from "@/lib/blog-posts";
import { estimarLeitura, gerarSlug } from "@/lib/blog-posts";

type AdminSession = { unlocked?: boolean };

function sessionConfig() {
  return {
    password: process.env["ADMIN_SESSION_SECRET"]!,
    name: "evoluta-admin",
    maxAge: 60 * 60 * 24 * 7,
    cookie: {
      httpOnly: true,
      // em http://localhost o navegador descarta cookies "secure"
      secure: process.env["NODE_ENV"] === "production",
      sameSite: "lax" as const,
      path: "/",
    },
  };
}

function senhaConfere(entrada: string, esperada: string): boolean {
  const a = createHash("sha256").update(entrada, "utf8").digest();
  const b = createHash("sha256").update(esperada, "utf8").digest();
  return timingSafeEqual(a, b);
}

async function exigirSessao() {
  const session = await useSession<AdminSession>(sessionConfig());
  if (!session.data.unlocked) throw new Error("NAO_AUTORIZADO");
  return session;
}

export const entrarAdmin = createServerFn({ method: "POST" })
  .inputValidator((data: { senha: string }) => data)
  .handler(async ({ data }) => {
    const esperada = process.env["ADMIN_PASSWORD"];
    if (!esperada) return { ok: false as const, motivo: "sem-senha" as const };
    if (!data.senha || !senhaConfere(data.senha, esperada)) {
      return { ok: false as const, motivo: "invalida" as const };
    }
    const session = await useSession<AdminSession>(sessionConfig());
    await session.update({ unlocked: true });
    return { ok: true as const };
  });

export const sairAdmin = createServerFn({ method: "POST" }).handler(async () => {
  const session = await useSession<AdminSession>(sessionConfig());
  await session.clear();
  return { ok: true as const };
});

export const statusAdmin = createServerFn({ method: "GET" }).handler(async () => {
  const session = await useSession<AdminSession>(sessionConfig());
  return { autenticado: session.data.unlocked === true, senhaConfigurada: !!process.env["ADMIN_PASSWORD"] };
});

const colunas = "id,slug,titulo,categoria,data,leitura,resumo,imagem,paragrafos,status,created_at";

export const listarPostsAdmin = createServerFn({ method: "GET" }).handler(async () => {
  await exigirSessao();
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { data, error } = await supabaseAdmin
    .from("blog_posts")
    .select(colunas)
    .order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return (data ?? []) as unknown as PostDb[];
});

export const obterPostAdmin = createServerFn({ method: "GET" })
  .inputValidator((data: { slug: string }) => data)
  .handler(async ({ data }) => {
    await exigirSessao();
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: registro, error } = await supabaseAdmin
      .from("blog_posts")
      .select(colunas)
      .eq("slug", data.slug)
      .maybeSingle();
    if (error) throw new Error(error.message);
    return (registro ?? null) as unknown as PostDb | null;
  });

export type EntradaPost = {
  id?: string;
  slug?: string;
  titulo: string;
  categoria: string;
  data: string;
  leitura?: string;
  resumo: string;
  imagem?: string | null;
  paragrafos: string[];
  status: "draft" | "published";
};

export const salvarPost = createServerFn({ method: "POST" })
  .inputValidator((data: EntradaPost) => data)
  .handler(async ({ data }) => {
    await exigirSessao();
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const paragrafos = data.paragrafos.filter((p) => p.trim().length > 0);
    const slug = (data.slug?.trim() || gerarSlug(data.titulo)) || `post-${Date.now()}`;

    const registro = {
      slug,
      titulo: data.titulo.trim(),
      categoria: data.categoria.trim() || "Blog",
      data: data.data.trim(),
      leitura: data.leitura?.trim() || estimarLeitura(paragrafos),
      resumo: data.resumo.trim(),
      imagem: data.imagem || null,
      paragrafos,
      status: data.status,
      published_at: data.status === "published" ? new Date().toISOString() : null,
    };

    if (data.id) {
      const { error } = await supabaseAdmin.from("blog_posts").update(registro).eq("id", data.id);
      if (error) throw new Error(error.message);
    } else {
      const { error } = await supabaseAdmin.from("blog_posts").insert(registro);
      if (error) throw new Error(error.message);
    }
    return { ok: true as const, slug };
  });

export const apagarPost = createServerFn({ method: "POST" })
  .inputValidator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    await exigirSessao();
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("blog_posts").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true as const };
  });

export const enviarCapa = createServerFn({ method: "POST" })
  .inputValidator((data: { nome: string; tipo: string; base64: string }) => data)
  .handler(async ({ data }) => {
    await exigirSessao();
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const extensao = (data.nome.split(".").pop() ?? "jpg").toLowerCase().replace(/[^a-z0-9]/g, "");
    const caminho = `capas/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${extensao}`;
    const binario = Buffer.from(data.base64, "base64");

    const { error } = await supabaseAdmin.storage
      .from("blog")
      .upload(caminho, binario, { contentType: data.tipo || "image/jpeg", upsert: false });
    if (error) throw new Error(error.message);

    return { url: `/api/public/blog-imagem/${caminho}` };
  });
