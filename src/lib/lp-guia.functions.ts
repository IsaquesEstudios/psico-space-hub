import { createClient } from "@supabase/supabase-js";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

// Cadastro do formulário da landing page /lp (Guia para Pais).
// A tabela guia_pais_leads permite apenas INSERT para anon (RLS): ninguém lê pela API.
const esquema = z.object({
  nome: z.string().trim().min(3, "Informe seu nome completo.").max(120),
  email: z.string().trim().email("Informe um e-mail válido.").max(160),
  whatsapp: z
    .string()
    .trim()
    .max(20)
    .transform((v) => v.replace(/\D/g, ""))
    .refine((v) => v.length >= 10 && v.length <= 13, "Informe um WhatsApp válido com DDD."),
  armadilha: z.string().optional(),
});

type Entrada = z.infer<typeof esquema>;

// Limite simples de envios por instância: no máximo 20 por minuto.
const JANELA_MS = 60_000;
const LIMITE = 20;
let janelaAtual = 0;
let enviosNaJanela = 0;

function criarClientePublico() {
  const url = process.env["SUPABASE_URL"] ?? process.env["VITE_SUPABASE_URL"];
  const chave = process.env["SUPABASE_PUBLISHABLE_KEY"] ?? process.env["VITE_SUPABASE_PUBLISHABLE_KEY"];
  if (!url || !chave) throw new Error("Configuração do banco indisponível. Tente novamente mais tarde.");

  const buscar = (input: RequestInfo | URL, init?: RequestInit) => {
    const cabecalhos = new Headers(init?.headers);
    if (cabecalhos.get("Authorization") === `Bearer ${chave}`) cabecalhos.delete("Authorization");
    cabecalhos.set("apikey", chave);
    return fetch(input, { ...init, headers: cabecalhos });
  };

  return createClient(url, chave, {
    global: { fetch: buscar },
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export const enviarCadastroGuia = createServerFn({ method: "POST" })
  .inputValidator((dados: unknown) => esquema.parse(dados))
  .handler(async ({ data }: { data: Entrada }) => {
    // Campo-armadilha: preenchido por robôs, ignorado em silêncio.
    if (data.armadilha) return { ok: true };

    const agora = Date.now();
    if (agora - janelaAtual > JANELA_MS) {
      janelaAtual = agora;
      enviosNaJanela = 0;
    }
    enviosNaJanela += 1;
    if (enviosNaJanela > LIMITE) {
      throw new Response("Muitas tentativas. Aguarde um momento e tente de novo.", { status: 429 });
    }

    const { error } = await criarClientePublico()
      .from("guia_pais_leads")
      .insert({ nome: data.nome, email: data.email, whatsapp: data.whatsapp, origem: "lp-guia-pais" });
    if (error) throw new Error("Não foi possível registrar seu cadastro. Tente novamente.");
    return { ok: true };
  });
