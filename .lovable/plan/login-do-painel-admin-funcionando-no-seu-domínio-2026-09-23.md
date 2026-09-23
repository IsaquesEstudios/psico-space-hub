# Login do painel /admin funcionando no seu domínio

## O que muda para você
- O login em `evolutaclinica.com.br/admin` passa a funcionar com a mesma senha.
- Criar, editar, apagar postagens e enviar fotos de capa também funcionam pelo seu domínio.
- Nada novo para configurar no Coolify: usa a `ADMIN_PASSWORD` que já está lá (precisa ser igual à da Lovable, o que já é o caso).
- Continua dependendo do site da Lovable ficar publicado (como as fotos já dependem).

## Como funciona
```text
Seu domínio (/admin) --pedido assinado com a senha--> site da Lovable --> banco
```
O seu servidor não tem a chave de gravação do banco. Então, quando ela falta, ele repassa cada ação do painel para o site da Lovable, que tem a chave. O pedido vai assinado; o site da Lovable só aceita se a assinatura bater com a senha do painel.

## Detalhes técnicos
- `src/lib/admin.functions.ts`:
  - Login: se não houver chave de serviço, usa limite de tentativas em memória (5 por IP / 15 min) em vez da tabela; sessão continua em cookie local.
  - `listarPostsAdmin`, `obterPostAdmin`, `salvarPost`, `apagarPost`, `enviarCapa`: se `SUPABASE_SERVICE_ROLE_KEY` faltar, chamam `https://psico-space-hub.lovable.app/api/public/admin-proxy` com `{acao, dados, ts}` + cabeçalho HMAC-SHA256 (chave = `ADMIN_PASSWORD`).
  - Lógica de banco extraída para um helper `admin-ops.server.ts` reutilizado pelos dois caminhos.
- Nova rota `src/routes/api/public/admin-proxy.ts`: valida HMAC com `timingSafeEqual`, recusa `ts` com mais de 5 min, valida entrada com Zod e executa a ação.
- Após aprovar: publicar de novo na Lovable, sincronizar GitHub e reimplantar no Coolify.
