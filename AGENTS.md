<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Imagens públicas otimizadas usam WebP hospedado no CDN por arquivos `.asset.json`, para reduzir o peso sem depender de binários no repositório.
- A página `/atendimento-online` reúne os atendimentos remotos para adultos descritos no material institucional, evitando duplicá-los na listagem principal.
- A landing page /lp (Guia para Pais) grava cadastros na tabela guia_pais_leads via função de servidor com RLS de apenas-INSERT para anon; ninguém lê a tabela pela API.
- The Dockerfile rewrites CDN asset URLs in `src/` before building, never in `.output`: Nitro serves public files with sizes recorded at build time, so post-build edits truncate JS and break hydration.
