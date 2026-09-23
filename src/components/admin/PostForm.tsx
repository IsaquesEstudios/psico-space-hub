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

export function PostForm({ post }: { post?: PostDb | null }) {
  const navigate = useNavigate();
  const salvar = useServerFn(salvarPost);
  const upload = useServerFn(enviarCapa);

  const [titulo, setTitulo] = useState(post?.titulo ?? "");
  const [categoria, setCategoria] = useState(post?.categoria ?? "Blog");
  const [data, setData] = useState(post?.data ?? dataHoje());
  const [resumo, setResumo] = useState(post?.resumo ?? "");
  const [leitura, setLeitura] = useState(post?.leitura ?? "");
  const [texto, setTexto] = useState((post?.paragrafos ?? []).join("\n\n"));
  const [imagem, setImagem] = useState<string | null>(post?.imagem ?? null);
  const [enviando, setEnviando] = useState(false);
  const [salvando, setSalvando] = useState(false);

  async function escolherImagem(arquivo: File) {
    setEnviando(true);
    try {
      const buffer = await arquivo.arrayBuffer();
      let binario = "";
      const bytes = new Uint8Array(buffer);
      for (let i = 0; i < bytes.length; i += 1) binario += String.fromCharCode(bytes[i]!);
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
    setSalvando(true);
    try {
      await salvar({
        data: {
          ...(post?.id ? { id: post.id, slug: post.slug } : {}),
          titulo,
          categoria,
          data,
          leitura,
          resumo,
          imagem,
          paragrafos: texto.split(/\n\s*\n/),
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
    <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
      <div>
        <label className="block">
          <span className={rotulo}>Título</span>
          <input className={campo} value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </label>

        <label className="mt-6 block">
          <span className={rotulo}>Resumo</span>
          <textarea
            className={campo}
            rows={3}
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
          />
        </label>

        <label className="mt-6 block">
          <span className={rotulo}>Texto (separe os parágrafos com uma linha em branco)</span>
          <textarea
            className={campo}
            rows={18}
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          />
        </label>
      </div>

      <aside className="bg-muted p-6">
        <label className="block">
          <span className={rotulo}>Categoria</span>
          <input className={campo} value={categoria} onChange={(e) => setCategoria(e.target.value)} />
        </label>

        <label className="mt-6 block">
          <span className={rotulo}>Data</span>
          <input className={campo} value={data} onChange={(e) => setData(e.target.value)} />
        </label>

        <label className="mt-6 block">
          <span className={rotulo}>Tempo de leitura (opcional)</span>
          <input
            className={campo}
            placeholder="calculado automaticamente"
            value={leitura}
            onChange={(e) => setLeitura(e.target.value)}
          />
        </label>

        <div className="mt-6">
          <span className={rotulo}>Imagem de capa</span>
          {imagem ? (
            <img src={imagem} alt="Capa da postagem" className="mt-3 h-40 w-full object-cover" />
          ) : null}
          <input
            type="file"
            accept="image/*"
            className="mt-3 w-full text-xs"
            onChange={(e) => {
              const arquivo = e.target.files?.[0];
              if (arquivo) void escolherImagem(arquivo);
            }}
          />
          {enviando ? <p className="mt-2 text-xs text-muted-foreground">Carregando imagem…</p> : null}
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
      </aside>
    </div>
  );
}
