import { createServerFn } from "@tanstack/react-start";
import type { PostDb } from "@/lib/blog-posts";

type AdminSession = { unlocked?: boolean };

function sessionConfig() {
  const secret = process.env["ADMIN_SESSION_SECRET"] || "temporario-para-build-ou-falta-de-config";
  return {
    password: secret,
    name: "evoluta-admin",
    maxAge: 60 * 60 * 24 * 7,
    cookie: {
      httpOnly: true,
      secure: true,
      sameSite: "none" as const,
      path: "/",
    },
  };
}

async function exigirSessao() {
  const { useSession } = await import("@tanstack/react-start/server");
  const session = await useSession<AdminSession>(sessionConfig());
  if (!session.data.unlocked) throw new Error("NAO_AUTORIZADO");
  return session;
}

const LIMITE_IP = 5;
const LIMITE_GLOBAL = 30;
const JANELA_MIN = 15;
const tentativasMemoria = new Map<string, number[]>();

export const entrarAdmin = createServerFn({ method: "POST" })
  .inputValidator((data: { senha: string }) => ({ senha: String(data?.senha ?? "").slice(0, 200) }))
  .handler(async ({ data }) => {
    const { useSession, getRequestHeader } = await import("@tanstack/react-start/server");
    const { createHash } = await import("node:crypto");
    const { temChaveServico } = await import("@/lib/admin-ops.server");

    const esperada = process.env["ADMIN_PASSWORD"];
    if (!esperada) return { ok: false as const, motivo: "sem-senha" as const };

    const ip =
      getRequestHeader("cf-connecting-ip") ||
      getRequestHeader("x-forwarded-for")?.split(",")[0]?.trim() ||
      "desconhecido";
    
    const ipHash = createHash("sha256")
      .update(ip + (process.env["ADMIN_SESSION_SECRET"] ?? ""))
      .digest("hex");

    const senhaConfere = async (entrada: string, esperada: string) => {
      const { createHash, timingSafeEqual } = await import("node:crypto");
      const a = createHash("sha256").update(entrada, "utf8").digest();
      const b = createHash("sha256").update(esperada, "utf8").digest();
      return timingSafeEqual(a, b);
    };

    if (!temChaveServico()) {
      const agora = Date.now();
      const janela = JANELA_MIN * 60_000;
      const lista = (tentativasMemoria.get(ipHash) ?? []).filter((t) => agora - t < janela);
      if (lista.length >= LIMITE_IP) {
        return { ok: false as const, motivo: "bloqueado" as const, minutos: JANELA_MIN };
      }
      if (!data.senha || !(await senhaConfere(data.senha, esperada))) {
        lista.push(agora);
        tentativasMemoria.set(ipHash, lista);
        await new Promise((r) => setTimeout(r, 800));
        return { ok: false as const, motivo: "invalida" as const, restantes: Math.max(0, LIMITE_IP - lista.length) };
      }
      tentativasMemoria.delete(ipHash);
    } else {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      const desde = new Date(Date.now() - JANELA_MIN * 60_000).toISOString();

      const [porIp, total] = await Promise.all([
        supabaseAdmin
          .from("admin_login_attempts" as never)
          .select("id", { count: "exact", head: true })
          .eq("ip_hash", ipHash)
          .gte("created_at", desde),
        supabaseAdmin
          .from("admin_login_attempts" as never)
          .select("id", { count: "exact", head: true })
          .gte("created_at", desde),
      ]);
      
      if ((porIp.count ?? 0) >= LIMITE_IP || (total.count ?? 0) >= LIMITE_GLOBAL) {
        return { ok: false as const, motivo: "bloqueado" as const, minutos: JANELA_MIN };
      }

      if (!data.senha || !(await senhaConfere(data.senha, esperada))) {
        await supabaseAdmin.from("admin_login_attempts" as never).insert({ ip_hash: ipHash } as never);
        await new Promise((r) => setTimeout(r, 800));
        const restantes = Math.max(0, LIMITE_IP - (porIp.count ?? 0) - 1);
        return { ok: false as const, motivo: "invalida" as const, restantes };
      }

      await supabaseAdmin.from("admin_login_attempts" as never).delete().eq("ip_hash", ipHash);
    }

    const session = await useSession<AdminSession>(sessionConfig());
    await session.update({ unlocked: true });
    return { ok: true as const };
  });

export const sairAdmin = createServerFn({ method: "POST" }).handler(async () => {
  const { useSession } = await import("@tanstack/react-start/server");
  const session = await useSession<AdminSession>(sessionConfig());
  await session.clear();
  return { ok: true as const };
});

export const statusAdmin = createServerFn({ method: "GET" }).handler(async () => {
  const secret = process.env["ADMIN_SESSION_SECRET"] ?? "";
  if (secret.length < 32) {
    console.error("ERRO: ADMIN_SESSION_SECRET ausente ou muito curto no servidor.");
    return { autenticado: false, senhaConfigurada: false, erro: "configuracao" };
  }
  const { useSession } = await import("@tanstack/react-start/server");
  const session = await useSession<AdminSession>(sessionConfig());
  return { 
    autenticado: session.data.unlocked === true, 
    senhaConfigurada: !!process.env["ADMIN_PASSWORD"] 
  };
});

export const listarPostsAdmin = createServerFn({ method: "GET" }).handler(async () => {
  await exigirSessao();
  const { executar } = await import("@/lib/admin-ops.server");
  return (await executar("listar", {})) as PostDb[];
});

export const obterPostAdmin = createServerFn({ method: "GET" })
  .inputValidator((data: { slug: string }) => data)
  .handler(async ({ data }) => {
    await exigirSessao();
    const { executar } = await import("@/lib/admin-ops.server");
    return (await executar("obter", data)) as PostDb | null;
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
    const { executar } = await import("@/lib/admin-ops.server");
    return (await executar("salvar", data)) as { ok: true; slug: string };
  });

export const apagarPost = createServerFn({ method: "POST" })
  .inputValidator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    await exigirSessao();
    const { executar } = await import("@/lib/admin-ops.server");
    return (await executar("apagar", data)) as { ok: true };
  });

export const enviarCapa = createServerFn({ method: "POST" })
  .inputValidator((data: { nome: string; tipo: string; base64: string }) => data)
  .handler(async ({ data }) => {
    await exigirSessao();
    const { executar } = await import("@/lib/admin-ops.server");
    return (await executar("capa", data)) as { url: string };
  });
