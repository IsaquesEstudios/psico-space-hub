# Build para EasyPanel/Coolify (servidor Node)
FROM oven/bun:1 AS build
WORKDIR /app

# Variáveis públicas usadas durante a montagem
ARG VITE_SUPABASE_URL
ARG VITE_SUPABASE_PUBLISHABLE_KEY
ARG VITE_SUPABASE_PROJECT_ID
ENV VITE_SUPABASE_URL=$VITE_SUPABASE_URL \
    VITE_SUPABASE_PUBLISHABLE_KEY=$VITE_SUPABASE_PUBLISHABLE_KEY \
    VITE_SUPABASE_PROJECT_ID=$VITE_SUPABASE_PROJECT_ID

COPY package.json bun.lock* bunfig.toml ./
RUN bun install --frozen-lockfile || bun install
COPY . .
# A montagem externa precisa ignorar os sinais do ambiente de pré-visualização
# e gerar um servidor Node persistente em .output.
RUN LOVABLE_SANDBOX=0 DEV_SERVER__PROJECT_PATH= NITRO_PRESET=node-server bun run build \
    && test -f /app/.output/server/index.mjs

FROM node:22-slim
WORKDIR /app
ARG VITE_SUPABASE_URL
ARG VITE_SUPABASE_PUBLISHABLE_KEY
ENV NODE_ENV=production PORT=3000 HOST=0.0.0.0 \
    VITE_SUPABASE_URL=$VITE_SUPABASE_URL \
    VITE_SUPABASE_PUBLISHABLE_KEY=$VITE_SUPABASE_PUBLISHABLE_KEY
COPY --from=build /app/.output ./.output
EXPOSE 3000
HEALTHCHECK --interval=15s --timeout=5s --start-period=30s --retries=5 \
  CMD node -e "fetch('http://127.0.0.1:3000/').then(r=>{if(!r.ok)process.exit(1)}).catch(()=>process.exit(1))"
CMD ["node", ".output/server/index.mjs"]
