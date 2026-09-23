import type { Post } from "@/data/site";

export type PostDb = {
  id: string;
  slug: string;
  titulo: string;
  categoria: string;
  data: string;
  leitura: string;
  resumo: string;
  imagem: string | null;
  paragrafos: string[];
  status: string;
  created_at: string;
};

export type PostAdmin = PostDb;

const meses = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

export function dataHoje(): string {
  const hoje = new Date();
  return `${hoje.getDate()} de ${meses[hoje.getMonth()]} de ${hoje.getFullYear()}`;
}

export function gerarSlug(titulo: string): string {
  return titulo
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 80);
}

export type TipoBloco = "paragrafo" | "h2" | "h3" | "imagem";
export type Bloco = { tipo: TipoBloco; valor: string };

export function codificarBloco(bloco: Bloco): string {
  if (bloco.tipo === "h2") return `## ${bloco.valor}`;
  if (bloco.tipo === "h3") return `### ${bloco.valor}`;
  if (bloco.tipo === "imagem") return `!img ${bloco.valor}`;
  return bloco.valor;
}

export function decodificarBloco(texto: string): Bloco {
  if (texto.startsWith("### ")) return { tipo: "h3", valor: texto.slice(4) };
  if (texto.startsWith("## ")) return { tipo: "h2", valor: texto.slice(3) };
  if (texto.startsWith("!img ")) return { tipo: "imagem", valor: texto.slice(5) };
  return { tipo: "paragrafo", valor: texto };
}

export function decodificarBlocos(paragrafos: string[]): Bloco[] {
  return paragrafos.map(decodificarBloco);
}

export function estimarLeitura(paragrafos: string[]): string {
  const texto = decodificarBlocos(paragrafos)
    .filter((bloco) => bloco.tipo !== "imagem")
    .map((bloco) => bloco.valor)
    .join(" ");
  const palavras = texto.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(palavras / 200))} min de leitura`;
}

const capaPadrao = "/favicon.png";

export function paraPost(registro: PostDb): Post {
  return {
    slug: registro.slug,
    titulo: registro.titulo,
    categoria: registro.categoria,
    data: registro.data,
    leitura: registro.leitura,
    resumo: registro.resumo,
    imagem: registro.imagem ?? capaPadrao,
    paragrafos: registro.paragrafos,
  };
}
