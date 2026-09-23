import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const esquema = z.object({
  acao: z.enum(["listar", "obter", "salvar", "apagar", "capa"]),
  dados: z.record(z.string(), z.unknown()).default({}),
  ts: z.number(),
});

export const Route = createFileRoute("/api/public/admin-proxy")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { assinaturaValida, executarLocal, temChaveServico } = await import("@/lib/admin-ops.server");
        const corpo = await request.text();
        if (corpo.length > 15_000_000) return Response.json({ erro: "Muito grande" }, { status: 413 });
        if (!assinaturaValida(corpo, request.headers.get("x-assinatura") ?? "")) {
          return Response.json({ erro: "Não autorizado" }, { status: 401 });
        }
        const parsed = esquema.safeParse(JSON.parse(corpo));
        if (!parsed.success) return Response.json({ erro: "Pedido inválido" }, { status: 400 });
        if (Math.abs(Date.now() - parsed.data.ts) > 5 * 60_000) {
          return Response.json({ erro: "Pedido expirado" }, { status: 401 });
        }
        if (!temChaveServico()) return Response.json({ erro: "Indisponível" }, { status: 503 });
        try {
          const resultado = await executarLocal(parsed.data.acao, parsed.data.dados);
          return Response.json({ resultado });
        } catch (e) {
          return Response.json({ erro: e instanceof Error ? e.message : "Erro" }, { status: 500 });
        }
      },
    },
  },
});
