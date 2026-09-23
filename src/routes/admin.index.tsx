import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { Section } from "@/components/site/bits";
import { apagarPost, entrarAdmin, listarPostsAdmin, sairAdmin, statusAdmin } from "@/lib/admin.functions";
import type { PostDb } from "@/lib/blog-posts";

export const Route = createFileRoute("/admin/")({
  staticData: { sitemap: false },
  ssr: false,
  head: () => ({
    meta: [{ title: "Área reservada" }, { name: "robots", content: "noindex, nofollow" }],
  }),
  component: Admin,
});

function Admin() {
  const router = useRouter();
  const verificar = useServerFn(statusAdmin);
  const entrar = useServerFn(entrarAdmin);
  const sair = useServerFn(sairAdmin);
  const listar = useServerFn(listarPostsAdmin);
  const apagar = useServerFn(apagarPost);

  const [carregando, setCarregando] = useState(true);
  const [autenticado, setAutenticado] = useState(false);
  const [senhaConfigurada, setSenhaConfigurada] = useState(true);
  const [senha, setSenha] = useState("");
  const [posts, setPosts] = useState<PostDb[]>([]);

  async function carregarLista() {
    try {
      setPosts(await listar());
    } catch {
      setPosts([]);
      setAutenticado(false);
      toast.error("Sessão expirada. Entre novamente.");
    }
  }

  useEffect(() => {
    void (async () => {
      const status = await verificar();
      setAutenticado(status.autenticado);
      setSenhaConfigurada(status.senhaConfigurada);
      if (status.autenticado) await carregarLista();
      setCarregando(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fazerLogin(evento: React.FormEvent) {
    evento.preventDefault();
    const resultado = await entrar({ data: { senha } });
    if (!resultado.ok) {
      toast.error(
        resultado.motivo === "sem-senha"
          ? "Senha ainda não configurada"
          : resultado.motivo === "bloqueado"
            ? `Muitas tentativas. Aguarde ${resultado.minutos} minutos e tente de novo.`
            : resultado.restantes > 0
              ? `Senha incorreta. Restam ${resultado.restantes} tentativas.`
              : `Senha incorreta. Acesso bloqueado por 15 minutos.`,
      );
      return;
    }
    setSenha("");
    setAutenticado(true);
    await carregarLista();
  }

  async function fazerLogout() {
    await sair();
    setAutenticado(false);
    setPosts([]);
    await router.invalidate();
  }

  async function remover(post: PostDb) {
    if (!window.confirm(`Apagar "${post.titulo}"?`)) return;
    await apagar({ data: { id: post.id } });
    toast.success("Postagem apagada");
    await carregarLista();
  }

  if (carregando) {
    return (
      <Section>
        <p className="text-sm text-muted-foreground">Carregando…</p>
      </Section>
    );
  }

  if (!autenticado) {
    return (
      <Section>
        <div className="mx-auto max-w-sm">
          <h1 className="font-display text-3xl">Área reservada</h1>
          {senhaConfigurada ? null : (
            <p className="mt-4 text-sm text-muted-foreground">
              A senha de acesso ainda não foi configurada.
            </p>
          )}
          <form onSubmit={fazerLogin} className="mt-8">
            <input
              type="password"
              autoComplete="current-password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
            />
            <button type="submit" className="eyebrow mt-4 w-full bg-primary px-6 py-4 text-primary-foreground">
              Entrar
            </button>
          </form>
        </div>
      </Section>
    );
  }

  return (
    <Section>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-display text-3xl">Postagens do blog</h1>
        <div className="flex gap-3">
          <Link to="/admin/novo" className="eyebrow bg-primary px-5 py-3 text-primary-foreground">
            Nova postagem
          </Link>
          <button type="button" onClick={() => void fazerLogout()} className="eyebrow border border-border px-5 py-3">
            Sair
          </button>
        </div>
      </div>

      {posts.length === 0 ? (
        <p className="mt-10 text-sm text-muted-foreground">Nenhuma postagem criada por aqui ainda.</p>
      ) : (
        <div className="mt-10">
          {posts.map((post) => (
            <div key={post.id} className="flex flex-wrap items-center gap-4 border-b border-border py-6">
              <div className="min-w-0 flex-1">
                <p className="eyebrow text-primary">
                  {post.status === "published" ? "Publicada" : "Rascunho"} · {post.categoria} · {post.data}
                </p>
                <h2 className="mt-2 font-display text-2xl leading-snug">{post.titulo}</h2>
              </div>
              <div className="flex gap-3">
                <Link
                  to="/admin/$slug"
                  params={{ slug: post.slug }}
                  className="eyebrow border border-border px-4 py-2"
                >
                  Editar
                </Link>
                <button
                  type="button"
                  onClick={() => void remover(post)}
                  className="eyebrow border border-border px-4 py-2 text-destructive"
                >
                  Apagar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}
