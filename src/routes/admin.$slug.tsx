import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";

import { PostForm } from "@/components/admin/PostForm";
import { Section } from "@/components/site/bits";
import { obterPostAdmin } from "@/lib/admin.functions";
import type { PostDb } from "@/lib/blog-posts";

export const Route = createFileRoute("/admin/$slug")({
  staticData: { sitemap: false },
  ssr: false,
  head: () => ({
    meta: [{ title: "Editar postagem" }, { name: "robots", content: "noindex, nofollow" }],
  }),
  component: EditarPost,
});

function EditarPost() {
  const { slug } = Route.useParams();
  const obter = useServerFn(obterPostAdmin);
  const [post, setPost] = useState<PostDb | null>(null);
  const [estado, setEstado] = useState<"carregando" | "pronto" | "erro">("carregando");

  useEffect(() => {
    void (async () => {
      try {
        setPost(await obter({ data: { slug } }));
        setEstado("pronto");
      } catch {
        setEstado("erro");
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return (
    <Section>
      <Link to="/admin" className="eyebrow text-muted-foreground">
        Voltar
      </Link>
      <h1 className="mt-6 font-display text-3xl">Editar postagem</h1>
      <div className="mt-10">
        {estado === "carregando" ? <p className="text-sm text-muted-foreground">Carregando…</p> : null}
        {estado === "erro" ? (
          <p className="text-sm text-muted-foreground">
            Entre novamente na área reservada para editar esta postagem.
          </p>
        ) : null}
        {estado === "pronto" && post ? <PostForm post={post} /> : null}
        {estado === "pronto" && !post ? (
          <p className="text-sm text-muted-foreground">Postagem não encontrada.</p>
        ) : null}
      </div>
    </Section>
  );
}
