# Corrigir "Internal Server Error" no EasyPanel

## Diagnóstico
O erro mudou: antes o site nem iniciava ("no available server"), agora ele inicia, mas a página inicial quebra ao abrir. A página inicial busca as postagens do blog, e essa busca usa as variáveis `SUPABASE_URL` e `SUPABASE_PUBLISHABLE_KEY` **em tempo de execução**. No EasyPanel, as variáveis marcadas só como "build" não chegam ao site em execução. Se elas faltam, a busca falha e a página inteira devolve erro 500. Isso bate com o comportamento do EasyPanel, que separa variáveis de build e de execução. A causa ainda não está 100% confirmada; o registro do contêiner (aba **Logs** do serviço) confirmaria.

## O que vou mudar
1. **Busca do blog tolerante a falhas** (`src/lib/blog.functions.ts`): usar `SUPABASE_URL`, ou `VITE_SUPABASE_URL` se a primeira faltar (mesma regra para a chave). Se a busca falhar, devolver lista vazia em vez de derrubar a página. O site abre mesmo com variável faltando; o blog só fica vazio.
2. **Dockerfile**: repassar as variáveis `VITE_...` também para o site em execução, como reserva.

## O que você faz no EasyPanel (aba Environment)
Como variáveis normais (não só build):
- `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`, `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET`

Depois: sincronizar com o GitHub e clicar em **Implantar**. Se o erro continuar, mande uma captura da aba **Logs** do serviço (não a da implantação).
