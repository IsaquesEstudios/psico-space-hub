import { useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";

import { enviarCapa, salvarPost } from "@/lib/admin.functions";
import type { PostDb } from "@/lib/blog-posts";
import { dataHoje } from "@/lib/blog-posts";

const campo =
  "mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary";
const rotulo = "eyebrow text-muted-foreground";

function blocosIniciais(post?: PostDb | null) {
  const blocos = post?.paragrafos && post.paragrafos.length > 0 ? [...post.paragrafos] : [""];
  const ultimo = blocos[blocos.length - 1];
  if (ultimo?.trim()) blocos.push("");
  return blocos;
}

export function PostForm({ post }: { post?: PostDb | null }) {
  const navigate = useNavigate();
  const salvar = useServerFn(salvarPost);
  const upload = useServerFn(enviarCapa);

  const [titulo, setTitulo] = useState(post?.titulo ?? "");
  const [imagem, setImagem] = useState<string | null>(post?.imagem ?? null);
  const [blocos, setBlocos] = useState(() => blocosIniciais(post));
  const [enviando, setEnviando] = useState(false);
  const [salvando, setSalvando] = useState(false);

  function atualizarBloco(indice: number, valor: string) {
    setBlocos((atuais) => {
      const proximos = [...atuais];
      proximos[indice] = valor;
      const ultimo = proximos[proximos.length - 1];
      if (ultimo?.trim()) proximos.push("");

      while (proximos.length > 1) {
        const fim = proximos[proximos.length - 1];
        const anterior = proximos[proximos.length - 2];
        if (fim?.trim() || anterior?.trim()) break;
        proximos.pop();
      }

      return proximos;
    });
  }

  async function escolherImagem(arquivo: File) {
    setEnviando(true);
    try {
      const buffer = await arquivo.arrayBuffer();
      let binario = "";
      const bytes = new Uint8Array(buffer);
      for (let i = 0; i < bytes.length; i += 1) {
        const byte = bytes[i];
        if (byte !== undefined) binario += String.fromCharCode(byte);
      }
      const resultado = await upload({
        data: { nome: arquivo.name, tipo: arquivo.type, base64: btoa(binario) },
      });
      setImagem(resultado.url);
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
    const paragrafos = blocos.filter((bloco) => bloco.trim().length > 0);
    if (paragrafos.length === 0) {
      toast.error("Escreva pelo menos um parágrafo");
      return;
    }
    const resumo = paragrafos[0]?.replace(/\s+/g, " ").trim().slice(0, 220) ?? "";
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
            if (arquivo) void escolherImagem(arquivo);
          }}
        />
        {enviando ? <p className="mt-2 text-xs text-muted-foreground">Carregando imagem…</p> : null}
      </div>

      <div className="mt-8">
        <label className="block">
          <span className={rotulo}>Título H1</span>
          <input className={campo} value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </label>

        <div className="mt-8 space-y-8">
          {blocos.map((bloco, indice) => (
            <label key={indice} className="block">
              <span className={rotulo}>Parágrafo {indice + 1}</span>
              <textarea
                className={`${campo} whitespace-pre-wrap`}
                rows={indice === blocos.length - 1 && !bloco.trim() ? 5 : 8}
                value={bloco}
                onChange={(e) => atualizarBloco(indice, e.target.value)}
              />
            </label>
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
