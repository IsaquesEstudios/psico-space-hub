import { useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";

import { enviarCapa, salvarPost } from "@/lib/admin.functions";
import type { Bloco, PostDb, TipoBloco } from "@/lib/blog-posts";
import { codificarBloco, dataHoje, decodificarBlocos } from "@/lib/blog-posts";

const campo =
  "mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary";
const rotulo = "eyebrow text-muted-foreground";

const opcoes: { tipo: TipoBloco; nome: string }[] = [
  { tipo: "h2", nome: "Título H2" },
  { tipo: "h3", nome: "Título H3" },
  { tipo: "paragrafo", nome: "Parágrafo" },
  { tipo: "imagem", nome: "Imagem" },
];

function nomeDoBloco(tipo: TipoBloco) {
  return opcoes.find((opcao) => opcao.tipo === tipo)?.nome ?? "Parágrafo";
}

function blocosIniciais(post?: PostDb | null): Bloco[] {
  if (post?.paragrafos && post.paragrafos.length > 0) return decodificarBlocos(post.paragrafos);
  return [{ tipo: "paragrafo", valor: "" }];
}

async function paraBase64(arquivo: File) {
  const bytes = new Uint8Array(await arquivo.arrayBuffer());
  let binario = "";
  for (let i = 0; i < bytes.length; i += 1) {
    const byte = bytes[i];
    if (byte !== undefined) binario += String.fromCharCode(byte);
  }
  return btoa(binario);
}

export function PostForm({ post }: { post?: PostDb | null }) {
  const navigate = useNavigate();
  const salvar = useServerFn(salvarPost);
  const upload = useServerFn(enviarCapa);

  const [titulo, setTitulo] = useState(post?.titulo ?? "");
  const [imagem, setImagem] = useState<string | null>(post?.imagem ?? null);
  const [blocos, setBlocos] = useState<Bloco[]>(() => blocosIniciais(post));
  const [menuAberto, setMenuAberto] = useState<number | null>(null);
  const [enviando, setEnviando] = useState(false);
  const [salvando, setSalvando] = useState(false);

  function atualizarBloco(indice: number, valor: string) {
    setBlocos((atuais) => atuais.map((bloco, i) => (i === indice ? { ...bloco, valor } : bloco)));
  }

  function adicionarBloco(indice: number, tipo: TipoBloco) {
    setBlocos((atuais) => [
      ...atuais.slice(0, indice + 1),
      { tipo, valor: "" },
      ...atuais.slice(indice + 1),
    ]);
    setMenuAberto(null);
  }

  function removerBloco(indice: number) {
    setBlocos((atuais) => (atuais.length === 1 ? atuais : atuais.filter((_, i) => i !== indice)));
  }

  async function subirImagem(arquivo: File) {
    const base64 = await paraBase64(arquivo);
    const resultado = await upload({
      data: { nome: arquivo.name, tipo: arquivo.type, base64 },
    });
    return resultado.url;
  }

  async function escolherCapa(arquivo: File) {
    setEnviando(true);
    try {
      setImagem(await subirImagem(arquivo));
      toast.success("Imagem carregada");
    } catch {
      toast.error("Não foi possível carregar a imagem");
    } finally {
      setEnviando(false);
    }
  }

  async function escolherImagemBloco(indice: number, arquivo: File) {
    setEnviando(true);
    try {
      atualizarBloco(indice, await subirImagem(arquivo));
      toast.success("Imagem carregada");
    } catch {
      toast.error("Não foi possível carregar a imagem");
    } finally {
      setEnviando(false);
    }
  }

  async function enviar(status: "draft" | "published") {
    if (!titulo.trim()) {
      toast.error("Escreva um título");
      return;
    }
    if (!imagem) {
      toast.error("Escolha a imagem da postagem");
      return;
    }
    const preenchidos = blocos.filter((bloco) => bloco.valor.trim().length > 0);
    if (preenchidos.length === 0) {
      toast.error("Escreva pelo menos um parágrafo");
      return;
    }
    const paragrafos = preenchidos.map(codificarBloco);
    const primeiroTexto = preenchidos.find((bloco) => bloco.tipo === "paragrafo")?.valor ?? "";
    const resumo = primeiroTexto.replace(/\s+/g, " ").trim().slice(0, 220);
    setSalvando(true);
    try {
      await salvar({
        data: {
          ...(post?.id ? { id: post.id, slug: post.slug } : {}),
          titulo,
          categoria: post?.categoria ?? "Blog",
          data: post?.data ?? dataHoje(),
          leitura: post?.leitura ?? "",
          resumo,
          imagem,
          paragrafos,
          status,
        },
      });
      toast.success(status === "published" ? "Postagem publicada" : "Rascunho salvo");
      await navigate({ to: "/admin" });
    } catch {
      toast.error("Não foi possível salvar");
    } finally {
      setSalvando(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="border-b border-border pb-8">
        <span className={rotulo}>Imagem da postagem</span>
        {imagem ? (
          <img src={imagem} alt="Capa da postagem" className="mt-3 w-full object-contain" />
        ) : (
          <div className="mt-3 flex min-h-72 items-center justify-center bg-muted px-6 text-center text-sm text-muted-foreground">
            Escolha a imagem que abre a postagem.
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          className="mt-4 w-full text-xs"
          onChange={(e) => {
            const arquivo = e.target.files?.[0];
            if (arquivo) void escolherCapa(arquivo);
          }}
        />
        {enviando ? <p className="mt-2 text-xs text-muted-foreground">Carregando imagem…</p> : null}
      </div>

      <div className="mt-8">
        <label className="block">
          <span className={rotulo}>Título H1</span>
          <input className={campo} value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </label>

        <div className="mt-8">
          {blocos.map((bloco, indice) => (
            <div key={indice} className="mt-8 first:mt-0">
              <div className="flex items-center justify-between gap-4">
                <span className={rotulo}>{nomeDoBloco(bloco.tipo)}</span>
                {blocos.length > 1 ? (
                  <button
                    type="button"
                    onClick={() => removerBloco(indice)}
                    className="eyebrow text-destructive"
                  >
                    Remover
                  </button>
                ) : null}
              </div>

              {bloco.tipo === "imagem" ? (
                <div>
                  {bloco.valor ? (
                    <img src={bloco.valor} alt="" className="mt-3 w-full object-contain" />
                  ) : (
                    <div className="mt-3 flex min-h-40 items-center justify-center bg-muted px-6 text-center text-sm text-muted-foreground">
                      Escolha a imagem deste bloco.
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    className="mt-3 w-full text-xs"
                    onChange={(e) => {
                      const arquivo = e.target.files?.[0];
                      if (arquivo) void escolherImagemBloco(indice, arquivo);
                    }}
                  />
                </div>
              ) : bloco.tipo === "paragrafo" ? (
                <textarea
                  className={`${campo} whitespace-pre-wrap`}
                  rows={8}
                  value={bloco.valor}
                  onChange={(e) => atualizarBloco(indice, e.target.value)}
                />
              ) : (
                <input
                  className={campo}
                  value={bloco.valor}
                  onChange={(e) => atualizarBloco(indice, e.target.value)}
                />
              )}

              <div className="mt-4">
                {menuAberto === indice ? (
                  <div className="flex flex-wrap gap-2">
                    {opcoes.map((opcao) => (
                      <button
                        key={opcao.tipo}
                        type="button"
                        onClick={() => adicionarBloco(indice, opcao.tipo)}
                        className="eyebrow border border-border px-4 py-2 hover:border-primary hover:text-primary"
                      >
                        {opcao.nome}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => setMenuAberto(null)}
                      className="eyebrow px-3 py-2 text-muted-foreground"
                    >
                      Cancelar
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setMenuAberto(indice)}
                    aria-label="Adicionar bloco"
                    className="flex h-9 w-9 items-center justify-center border border-border text-lg leading-none text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    +
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          disabled={salvando}
          onClick={() => void enviar("published")}
          className="eyebrow mt-8 w-full bg-primary px-6 py-4 text-primary-foreground disabled:opacity-60"
        >
          {salvando ? "Salvando…" : "Publicar"}
        </button>
        <button
          type="button"
          disabled={salvando}
          onClick={() => void enviar("draft")}
          className="eyebrow mt-3 w-full border border-border px-6 py-4 disabled:opacity-60"
        >
          Salvar como rascunho
        </button>
      </div>
    </div>
  );
}
