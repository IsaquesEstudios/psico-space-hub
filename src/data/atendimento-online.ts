import imgAvaliacao from "@/assets/online-avaliacao.webp";
import imgPsicoterapia from "@/assets/online-psicoterapia.webp";

export type AtendimentoOnline = {
  slug: string;
  titulo: string;
  etiqueta: string;
  resumo: string;
  imagem: string;
  alt: string;
  paragrafos: string[];
  tituloLista: string;
  itens: string[];
  fechamento: string;
  nota: string;
};

export const atendimentosOnline: AtendimentoOnline[] = [
  {
    slug: "avaliacao-neuropsicologica-adultos",
    titulo: "Avaliação Neuropsicológica para Adultos",
    etiqueta: "Avaliação on-line",
    resumo:
      "Investigação do funcionamento cognitivo, emocional e comportamental, com compreensão ampla das dificuldades e potencialidades.",
    imagem: imgAvaliacao,
    alt: "Notebook em videochamada com ilustração do cérebro e atividades de avaliação",
    paragrafos: [
      "A Avaliação Neuropsicológica para adultos tem como objetivo investigar o funcionamento cognitivo, emocional e comportamental, contribuindo para uma compreensão mais ampla das dificuldades e potencialidades de cada pessoa.",
    ],
    tituloLista: "O processo pode auxiliar na investigação de questões relacionadas à:",
    itens: [
      "Atenção e concentração",
      "Memória",
      "Funções executivas",
      "Raciocínio",
      "Aprendizagem",
      "Organização e planejamento",
      "Aspectos emocionais e comportamentais",
      "Investigação de TDAH e outras condições do neurodesenvolvimento",
    ],
    fechamento:
      "A avaliação é individualizada e conduzida de acordo com a demanda apresentada, considerando a história de vida, contexto atual e objetivos do processo avaliativo.",
    nota: "Atendimento on-line.",
  },
  {
    slug: "psicoterapia-tcc",
    titulo: "Psicoterapia: Terapia Cognitivo-Comportamental",
    etiqueta: "Psicoterapia on-line",
    resumo:
      "Espaço de acolhimento, escuta e desenvolvimento para compreender a relação entre pensamentos, emoções e comportamentos.",
    imagem: imgPsicoterapia,
    alt: "Poltrona aconchegante ao lado de notebook preparado para sessão on-line",
    paragrafos: [
      "A Psicoterapia baseada na Terapia Cognitivo-Comportamental (TCC) oferece um espaço de acolhimento, escuta e desenvolvimento, auxiliando o paciente a compreender a relação entre pensamentos, emoções e comportamentos.",
      "A TCC pode ser utilizada no acompanhamento de diferentes demandas emocionais e comportamentais, contribuindo para o desenvolvimento de estratégias mais funcionais para lidar com situações do cotidiano.",
    ],
    tituloLista: "O atendimento é individualizado e pode envolver:",
    itens: [
      "Autoconhecimento",
      "Regulação emocional",
      "Desenvolvimento de habilidades",
      "Reestruturação de pensamentos",
      "Manejo de dificuldades emocionais",
      "Desenvolvimento de estratégias de enfrentamento",
      "Construção de novos comportamentos",
    ],
    fechamento: "",
    nota: "Atendimento on-line para adultos.",
  },
];
