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

export function estimarLeitura(paragrafos: string[]): string {
  const palavras = paragrafos.join(" ").trim().split(/\s+/).filter(Boolean).length;
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
