# Painel para criar postagens do blog

Uma área reservada, com uma senha só sua, onde você escreve, edita e apaga as postagens do blog. O que você publicar aparece no site na hora, sem precisar me chamar.

## Como vai funcionar

1. Você acessa um endereço reservado (`/admin`) e entra com a senha combinada.
2. A senha fica guardada nas configurações do site, não no conteúdo — só você a conhece e ela não aparece em nenhuma página.
3. Depois de entrar, você vê a lista de todas as postagens do blog e pode:
   - criar uma nova postagem (título, categoria, resumo, data, tempo de leitura, parágrafos do texto e imagem de capa);
   - editar qualquer postagem;
   - apagar uma postagem;
   - salvar como rascunho (só você vê) ou publicar (aparece no blog).
4. Um botão "Sair" encerra o acesso.
5. As páginas do blog passam a mostrar as postagens criadas por você, junto com as que já existem hoje.

## Sobre o armazenamento

O site publicado não permite escrever em arquivos depois de estar no ar, então as postagens serão guardadas no armazenamento da Lovable (ativado por mim, sem você criar conta nem configurar nada). É isso que garante que a postagem apareça na hora e não se perca.

As postagens atuais do blog continuam existindo no site; as novas se juntam a elas, ordenadas por data.

## Imagem de capa

Você poderá enviar a foto da capa direto no painel. Ela fica guardada junto com a postagem.

## Detalhes técnicos

- Ativar Lovable Cloud (Supabase) e criar a tabela `blog_posts` (slug único, título, categoria, resumo, data, leitura, parágrafos, imagem, status publicado/rascunho, timestamps), com GRANTs explícitos, RLS ligada, política `SELECT` para `anon` apenas em `status = 'published'`, e escrita somente por `service_role`.
- Bucket público de storage `blog` para as capas.
- Gate por senha compartilhada no padrão do template: `ADMIN_PASSWORD` + `SESSION_SECRET` (gerado), comparação timing-safe dentro de `createServerFn`, sessão criptografada via `useSession` em `src/lib/admin.functions.ts`.
- Server functions de escrita (criar/editar/apagar/upload) verificam a sessão antes de qualquer operação e usam `supabaseAdmin` carregado dentro do handler.
- Leitura pública via cliente publishable em server fn, usada pelos loaders de `blog.index.tsx` e `blog.$slug.tsx`, mesclando os posts estáticos de `src/data/site.ts` com os do banco.
- Novas rotas: `src/routes/admin.index.tsx` (login + lista), `src/routes/admin.novo.tsx`, `src/routes/admin.$slug.tsx`. `/admin` fica fora do sitemap e com `robots: noindex`.
- Arquivos alterados: `src/routes/blog.index.tsx`, `src/routes/blog.$slug.tsx`, `src/lib/sitemap.ts` (posts dinâmicos) e os novos arquivos acima.
