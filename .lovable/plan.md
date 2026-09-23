# Corrigir definitivamente a implantação no EasyPanel

## Diagnóstico confirmado

- A configuração atual continua gerando `dist/server/index.mjs` com o formato `cloudflare-module` no ambiente da Lovable.
- O `Dockerfile` atual, porém, copia e inicia `.output/server/index.mjs`, formato esperado de um servidor Node.
- O iniciador alternativo em `docker/start.mjs` aponta novamente para `dist/server/index.mjs`, mantendo dois caminhos incompatíveis.
- O registro do EasyPanel mostra que a porta 3000 chega a abrir, mas o processo é encerrado e reiniciado; isso explica o “no available server”.

## Alterações

1. Criar uma configuração de montagem exclusiva para Docker/EasyPanel que gere explicitamente um servidor Node, sem depender do alvo Cloudflare usado pela pré-visualização da Lovable.
2. Ajustar o `Dockerfile` para usar somente essa montagem e iniciar o arquivo Node realmente gerado.
3. Remover o iniciador intermediário incompatível, deixando um único processo persistente responsável pela porta 3000.
4. Incluir uma verificação de saúde simples no contêiner para o EasyPanel reconhecer quando o site estiver pronto.
5. Manter as variáveis públicas disponíveis durante a montagem e as senhas administrativas apenas durante a execução.

## Validação

- Construir a imagem Docker completa localmente.
- Iniciar o contêiner na porta 3000 e confirmar que ele permanece ativo.
- Verificar resposta HTTP 200 na página inicial e em uma página interna.
- Conferir arquivos estáticos e uma função do servidor.
- Confirmar que a montagem normal da Lovable continua funcionando.

## Depois da correção

Será necessário sincronizar a nova versão com o GitHub e executar uma nova implantação no EasyPanel. Os domínios com e sem `www` continuarão cadastrados separadamente, ambos apontando para a porta 3000.
