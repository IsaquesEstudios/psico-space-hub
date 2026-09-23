# Build para Coolify (servidor Node)
FROM oven/bun:1 AS build
WORKDIR /app

# Variáveis públicas usadas no build (defina como "Build Variable" no Coolify)
ARG VITE_SUPABASE_URL
ARG VITE_SUPABASE_PUBLISHABLE_KEY
ARG VITE_SUPABASE_PROJECT_ID
ENV VITE_SUPABASE_URL=$VITE_SUPABASE_URL \
    VITE_SUPABASE_PUBLISHABLE_KEY=$VITE_SUPABASE_PUBLISHABLE_KEY \
    VITE_SUPABASE_PROJECT_ID=$VITE_SUPABASE_PROJECT_ID \
    NITRO_PRESET=node-server

COPY package.json bun.lock* bunfig.toml ./
RUN bun install --frozen-lockfile || bun install
COPY . .
RUN bun run build

FROM node:22-slim
WORKDIR /app
ENV NODE_ENV=production PORT=3000 HOST=0.0.0.0
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD ["node", "dist/server/index.mjs"]
