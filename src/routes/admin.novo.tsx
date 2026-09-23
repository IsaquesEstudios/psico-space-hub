import { createFileRoute, Link } from "@tanstack/react-router";

import { PostForm } from "@/components/admin/PostForm";
import { Section } from "@/components/site/bits";

export const Route = createFileRoute("/admin/novo")({
  staticData: { sitemap: false },
  ssr: false,
  head: () => ({
    meta: [{ title: "Nova postagem" }, { name: "robots", content: "noindex, nofollow" }],
  }),
  component: () => (
    <Section>
      <Link to="/admin" className="eyebrow text-muted-foreground">
        Voltar
      </Link>
      <h1 className="mt-6 font-display text-3xl">Nova postagem</h1>
      <div className="mt-10">
        <PostForm />
      </div>
    </Section>
  ),
});
