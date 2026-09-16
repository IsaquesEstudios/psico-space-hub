import sobreImg from "@/assets/sobre.jpg";
import ctaImg from "@/assets/cta-conversa.jpg";
import atendimentoAba from "@/assets/atendimento-aba-corrigido.png";
import atendimentoAprendizagem from "@/assets/atendimento-aprendizagem.jpg";
import atendimentoFonoaudiologia from "@/assets/atendimento-fonoaudiologia.jpg";
import atendimentoNeuropsicologia from "@/assets/atendimento-neuropsicologia.jpg";
import atendimentoNeuropsicopedagogia from "@/assets/atendimento-neuropsicopedagogia.jpg";
import atendimentoOrientacaoFamiliar from "@/assets/atendimento-orientacao-familiar.jpg";
import atendimentoPsicopedagogia from "@/assets/atendimento-psicopedagogia.jpg";
import atendimentoPsicoterapia from "@/assets/atendimento-psicoterapia.jpg";
import atendimentoTdah from "@/assets/atendimento-tdah.jpg";
import atendimentoTea from "@/assets/atendimento-tea.jpg";
import atendimentoAbaAmbiente from "@/assets/atendimento-aba-ambiente.jpg";
import atendimentoAprendizagemAmbiente from "@/assets/atendimento-aprendizagem-ambiente.jpg";
import atendimentoFonoaudiologiaAmbiente from "@/assets/atendimento-fonoaudiologia-ambiente.jpg";
import atendimentoNeuropsicologiaAmbiente from "@/assets/atendimento-neuropsicologia-ambiente.jpg";
import atendimentoNeuropsicopedagogiaAmbiente from "@/assets/atendimento-neuropsicopedagogia-ambiente.jpg";
import atendimentoOrientacaoFamiliarAmbiente from "@/assets/atendimento-orientacao-familiar-ambiente.jpg";
import atendimentoPsicopedagogiaAmbiente from "@/assets/atendimento-psicopedagogia-ambiente.jpg";
import atendimentoPsicoterapiaAmbiente from "@/assets/atendimento-psicoterapia-ambiente.jpg";
import atendimentoTdahAmbiente from "@/assets/atendimento-tdah-ambiente.jpg";
import atendimentoTeaAmbiente from "@/assets/atendimento-tea-ambiente.jpg";
import heroAtendimentoAprendizagem from "@/assets/hero-atendimento-aprendizagem.jpg";
import heroAtendimentoOrientacaoEscolar from "@/assets/hero-atendimento-orientacao-escolar.jpg";
import heroAtendimentoTdah from "@/assets/hero-atendimento-tdah.jpg";
import heroAtendimentoTea from "@/assets/hero-atendimento-tea-final.png";
import jessicaAsset from "@/assets/jessica-clinica-evoluta.png.asset.json";
import jessicaHeroMesa from "@/assets/jessica-hero-mesa.jpg.asset.json";
import jessicaRetratoFrontal from "@/assets/GHR07001.jpg.asset.json";
import jessicaRetratoLateral from "@/assets/GHR06700.jpg.asset.json";
import jessicaMesaHorizontal from "@/assets/GHR06849_1.jpg.asset.json";
import jessicaEntrevista from "@/assets/GHR07165.jpg.asset.json";
import jessicaEscrevendo from "@/assets/GHR06764.jpg.asset.json";
import jessicaSorrindo from "@/assets/GHR07265.jpg.asset.json";
import jessicaJanela from "@/assets/GHR06712.jpg.asset.json";
import jessicaMesaAmpla from "@/assets/GHR06849-2.jpg.asset.json";
import jessicaSofa from "@/assets/GHR07063.jpg.asset.json";
import jessicaConversa from "@/assets/GHR07210.jpg.asset.json";
import jessicaRetratoBio from "@/assets/jessica-retrato-bio.jpg.asset.json";
import blogLeitura from "@/assets/blog-leitura.jpg";
import blogRotina from "@/assets/blog-rotina.jpg";
import blogMatematica from "@/assets/blog-matematica.jpg";
import blogHero from "@/assets/blog-hero.jpg";
import novidadesHero from "@/assets/novidades-hero.jpg";

export const brandShareImage =
  "https://id-preview--deb759cf-cdb0-4e38-afae-699e1737adb9.lovable.app/__l5e/assets-v1/50c90749-1ebe-4ab2-a6d1-8badb534742a/logo-social.jpg";

export const images = {
  hero: jessicaHeroMesa.url,
  sobre: sobreImg,
  jessica: jessicaAsset.url,
  cta: ctaImg,
  blogHero,
  novidadesHero,
};

export const fotosJessica = {
  atendimentos: jessicaJanela.url,
  sobre: jessicaRetratoFrontal.url,
  contato: jessicaSorrindo.url,
  cursos: jessicaSofa.url,
  cursosDetalhes: [jessicaEscrevendo.url, jessicaMesaAmpla.url, jessicaConversa.url],
  blog: jessicaEntrevista.url,
  blogArtigos: [jessicaRetratoLateral.url, jessicaEscrevendo.url, jessicaConversa.url],
  novidades: jessicaMesaHorizontal.url,
  atendimentosDetalhes: [
    jessicaMesaHorizontal.url,
    jessicaRetratoLateral.url,
    jessicaEscrevendo.url,
    jessicaSorrindo.url,
    jessicaJanela.url,
    jessicaMesaAmpla.url,
    jessicaSofa.url,
    jessicaConversa.url,
    jessicaRetratoFrontal.url,
    jessicaEntrevista.url,
  ],
};

export const jessicaBio = {
  nome: "Jéssica Pelissari",
  credenciais: "Psicóloga • Neuropsicóloga • Fundadora e Diretora da Clínica Evoluta",
  foto: jessicaRetratoBio.url,
  paragrafos: [
    "Minha trajetória profissional é construída a partir de um propósito: compreender cada pessoa em sua singularidade e transformar conhecimento científico em possibilidades reais de desenvolvimento.",
    "Sou psicóloga e neuropsicóloga, com formação e experiência voltadas especialmente para neurodesenvolvimento, aprendizagem, avaliação neuropsicológica e saúde mental.",
    "Ao longo da minha trajetória, busquei unir conhecimento científico, experiência clínica e um olhar humanizado para compreender as dificuldades, identificar potencialidades e contribuir para intervenções mais assertivas.",
  ],
  formacaoTitulo: "Formação e especializações",
  formacao: [
    "Graduação em Psicologia",
    "Pós-graduação em Neuropsicologia",
    "Pós-graduação em Terapia Cognitivo-Comportamental na Infância e Adolescência",
    "Pós-graduação em Intervenção ABA aplicada ao Transtorno do Espectro Autista e à Deficiência Intelectual",
    "Especialista em Neuropsicologia pelo Conselho Federal de Psicologia",
    "Idealizadora, fundadora e diretora da Clínica Evoluta — Desenvolvimento Infantil, em São Gabriel da Palha/ES",
    "Atuação em avaliação neuropsicológica, com experiência em diferentes fases do desenvolvimento",
    "Atuação com transtornos do neurodesenvolvimento, dificuldades de aprendizagem e demandas cognitivas, emocionais e comportamentais",
    "Supervisora e mentora de profissionais da área de Neuropsicologia",
  ],
};

export const site = {
  nome: "Clínica Evoluta",
  subtitulo: "Desenvolvimento Infantil",
  slogan:
    "Cuidar, compreender e transformar através da ciência, acolhimento e atuação multidisciplinar",
  whatsapp: "https://wa.me/5500000000000",
  telefone: "+55 (00) 00000-0000",
  email: "contato@clinicaevoluta.com.br",
  instagram: "@clinicaevoluta",
  cidade: "Rua Antônio Borgo, 230, Centro, São Gabriel da Palha 29780-000",
} as const;

export type Atendimento = {
  slug: string;
  titulo: string;
  etiqueta: string;
  resumo: string;
  imagem: string;
  imagemSecundaria: string;
  imagemHero?: string;
  paraQuem: string[];
  comoFunciona: { titulo: string; texto: string }[];
  info: { rotulo: string; valor: string }[];
  texto: string[];
};

export const atendimentos: Atendimento[] = [
  {
    slug: "neuropsicologia",
    titulo: "Neuropsicologia",
    etiqueta: "Avaliação neuropsicológica",
    resumo:
      "Avaliar para compreender. Compreender para intervir: investigação do funcionamento cognitivo, emocional e comportamental.",
    imagem: atendimentoNeuropsicologia,
    imagemSecundaria: atendimentoNeuropsicologiaAmbiente,
    paraQuem: [
      "TDAH, TEA e Deficiência Intelectual",
      "Transtornos de aprendizagem e dificuldades escolares",
      "Atenção, memória e funções executivas",
      "Alterações cognitivas e questões relacionadas ao envelhecimento",
    ],
    comoFunciona: [
      {
        titulo: "1. Anamnese",
        texto:
          "Entrevista detalhada sobre história de desenvolvimento, saúde, rotina e percurso escolar ou profissional.",
      },
      {
        titulo: "2. Sessões de testagem",
        texto:
          "Instrumentos padronizados e observação clínica para investigar cognição, emoção e comportamento.",
      },
      {
        titulo: "3. Escuta dos contextos",
        texto:
          "Quando necessário, contato com escola, família e outros profissionais que acompanham o caso.",
      },
      {
        titulo: "4. Integração dos dados",
        texto: "Análise dos resultados à luz da história de vida, e não apenas dos números.",
      },
      {
        titulo: "5. Laudo e devolutiva",
        texto:
          "Documento em linguagem clara e encontro de devolutiva com orientações e direcionamentos.",
      },
    ],
    info: [
      { rotulo: "Público", valor: "Crianças, adolescentes e adultos" },
      { rotulo: "Encontros", valor: "Definidos conforme a demanda" },
      { rotulo: "Entrega", valor: "Laudo + devolutiva" },
      { rotulo: "Formato", valor: "Presencial" },
    ],
    texto: [
      "A avaliação neuropsicológica investiga o funcionamento cognitivo, emocional e comportamental, identificando potencialidades e dificuldades.",
      "Mais do que confirmar ou descartar um diagnóstico, o processo organiza informações para direcionar intervenções mais assertivas em casa, na escola e na clínica.",
    ],
  },
  {
    slug: "transtorno-do-espectro-autista",
    titulo: "Transtorno do Espectro Autista — TEA",
    etiqueta: "Neurodesenvolvimento",
    resumo:
      "Investigação especializada e acompanhamento individualizado, respeitando o perfil e as necessidades de cada pessoa.",
    imagem: atendimentoTea,
    imagemSecundaria: atendimentoTeaAmbiente,
    imagemHero: heroAtendimentoTea,
    paraQuem: [
      "Famílias com suspeita de TEA em qualquer idade",
      "Pessoas já diagnosticadas que buscam acompanhamento",
      "Casos que exigem orientação à família e à escola",
    ],
    comoFunciona: [
      {
        titulo: "Investigação especializada",
        texto:
          "Avaliação que considera comunicação, interação social, comportamento e processamento das informações.",
      },
      {
        titulo: "Plano individualizado",
        texto:
          "Definição de objetivos a partir do perfil de cada pessoa, e não de um protocolo único.",
      },
      {
        titulo: "Acompanhamento contínuo",
        texto: "Intervenção e reavaliação de metas, em parceria com família, escola e equipe.",
      },
    ],
    info: [
      { rotulo: "Público", valor: "Crianças, adolescentes e adultos" },
      { rotulo: "Abordagem", valor: "Multidisciplinar" },
      { rotulo: "Parcerias", valor: "Família, escola e profissionais" },
      { rotulo: "Formato", valor: "Presencial" },
    ],
    texto: [
      "O TEA é uma condição do neurodesenvolvimento que pode envolver diferenças na comunicação, interação social, comportamento e processamento das informações.",
      "Na Evoluta, realizamos investigação especializada e acompanhamento individualizado, respeitando o perfil e as necessidades de cada pessoa.",
    ],
  },
  {
    slug: "tdah",
    titulo: "TDAH",
    etiqueta: "Atenção e funções executivas",
    resumo:
      "Compreender a origem das dificuldades de atenção, impulsividade e organização para direcionar as melhores estratégias.",
    imagem: atendimentoTdah,
    imagemSecundaria: atendimentoTdahAmbiente,
    imagemHero: heroAtendimentoTdah,
    paraQuem: [
      "Crianças e adolescentes com queixas de atenção e agitação",
      "Adultos com impacto na rotina, no trabalho e nos relacionamentos",
      "Casos que precisam diferenciar TDAH de outras condições",
    ],
    comoFunciona: [
      {
        titulo: "Compreender a queixa",
        texto:
          "Levantamento de como as dificuldades aparecem na escola, em casa, no trabalho e nas relações.",
      },
      {
        titulo: "Avaliação adequada",
        texto:
          "Investigação de atenção, impulsividade, hiperatividade e funções executivas com instrumentos apropriados.",
      },
      {
        titulo: "Estratégias de intervenção",
        texto:
          "Direcionamento terapêutico, orientações práticas de rotina e organização, e parceria com a escola.",
      },
    ],
    info: [
      { rotulo: "Público", valor: "Crianças, adolescentes e adultos" },
      { rotulo: "Foco", valor: "Atenção e funções executivas" },
      { rotulo: "Entrega", valor: "Compreensão + plano de intervenção" },
      { rotulo: "Formato", valor: "Presencial" },
    ],
    texto: [
      "O TDAH pode afetar atenção, impulsividade, hiperatividade e funções executivas, trazendo impactos para a aprendizagem, rotina, relacionamentos e vida profissional.",
      "Uma avaliação adequada ajuda a compreender a origem das dificuldades e direcionar as melhores estratégias de intervenção.",
    ],
  },
  {
    slug: "dificuldades-de-aprendizagem",
    titulo: "Dificuldades e Transtornos de Aprendizagem",
    etiqueta: "Aprendizagem",
    resumo:
      "Nem toda dificuldade escolar significa TDAH, autismo ou transtorno de aprendizagem — investigamos o que está dificultando o aprender.",
    imagem: atendimentoAprendizagem,
    imagemSecundaria: atendimentoAprendizagemAmbiente,
    imagemHero: heroAtendimentoAprendizagem,
    paraQuem: [
      "Crianças com queixas persistentes de leitura, escrita ou matemática",
      "Estudantes com dificuldades de compreensão, atenção e memória",
      "Famílias e escolas que buscam entender a origem da dificuldade",
    ],
    comoFunciona: [
      {
        titulo: "Mapear a dificuldade",
        texto:
          "Investigação de leitura, escrita, matemática, compreensão, atenção, memória, organização e funções executivas.",
      },
      {
        titulo: "Compreender a origem",
        texto:
          "Diferenciar defasagem escolar, questões emocionais e transtornos específicos de aprendizagem.",
      },
      {
        titulo: "Definir estratégias",
        texto:
          "Indicação das intervenções e adaptações que podem favorecer o desenvolvimento em cada caso.",
      },
    ],
    info: [
      { rotulo: "Público", valor: "Crianças, adolescentes e adultos" },
      { rotulo: "Áreas", valor: "Leitura, escrita e matemática" },
      { rotulo: "Parceria", valor: "Família e escola" },
      { rotulo: "Formato", valor: "Presencial" },
    ],
    texto: [
      "Nem toda dificuldade escolar significa TDAH, autismo ou transtorno de aprendizagem. Investigamos dificuldades relacionadas a leitura, escrita, matemática, compreensão, atenção, memória, organização e funções executivas.",
      "O objetivo é compreender o que está dificultando a aprendizagem e quais estratégias podem favorecer o desenvolvimento.",
    ],
  },
  {
    slug: "psicoterapia",
    titulo: "Psicoterapia",
    etiqueta: "Terapia Cognitivo-Comportamental",
    resumo:
      "Um espaço de acolhimento, escuta e desenvolvimento para crianças, adolescentes e adultos.",
    imagem: atendimentoPsicoterapia,
    imagemSecundaria: atendimentoPsicoterapiaAmbiente,
    paraQuem: [
      "Crianças e adolescentes com questões emocionais e comportamentais",
      "Adultos em momentos de mudança, sofrimento ou adoecimento emocional",
      "Famílias que buscam apoio nos desafios de cada fase da vida",
    ],
    comoFunciona: [
      {
        titulo: "Acolhimento inicial",
        texto: "Primeiros encontros para entender a demanda e combinar objetivos do processo.",
      },
      {
        titulo: "Atendimento em TCC",
        texto:
          "Sessões com abordagem baseada na Terapia Cognitivo-Comportamental, adaptadas à faixa etária.",
      },
      {
        titulo: "Revisão de objetivos",
        texto: "Acompanhamento do que já mudou e ajuste das metas ao longo do processo.",
      },
    ],
    info: [
      { rotulo: "Público", valor: "Crianças, adolescentes e adultos" },
      { rotulo: "Abordagem", valor: "Terapia Cognitivo-Comportamental" },
      { rotulo: "Frequência", valor: "Combinada em cada caso" },
      { rotulo: "Formato", valor: "Presencial ou online" },
    ],
    texto: [
      "Um espaço de acolhimento, escuta e desenvolvimento. Atendimento psicológico para crianças, adolescentes e adultos, com abordagem baseada na Terapia Cognitivo-Comportamental (TCC).",
      "Trabalhamos questões emocionais, comportamentais, relacionais e desafios presentes em diferentes fases da vida.",
    ],
  },
  {
    slug: "aba",
    titulo: "ABA — Análise do Comportamento Aplicada",
    etiqueta: "Intervenção comportamental",
    resumo:
      "Intervenções focadas no desenvolvimento de habilidades, autonomia, comunicação e qualidade de vida.",
    imagem: atendimentoAba,
    imagemSecundaria: atendimentoAbaAmbiente,
    paraQuem: [
      "Pessoas com TEA e Deficiência Intelectual",
      "Famílias que buscam desenvolvimento de autonomia e comunicação",
      "Casos que precisam de plano de intervenção individualizado",
    ],
    comoFunciona: [
      {
        titulo: "Avaliação de repertório",
        texto: "Levantamento das habilidades já presentes e das prioridades de desenvolvimento.",
      },
      {
        titulo: "Plano individualizado",
        texto:
          "Programas construídos de acordo com as necessidades de cada pessoa e de sua família.",
      },
      {
        titulo: "Registro e ajuste",
        texto: "Acompanhamento dos dados de cada objetivo para ajustar o que funciona na prática.",
      },
    ],
    info: [
      { rotulo: "Público", valor: "Crianças, adolescentes e adultos" },
      { rotulo: "Base", valor: "Análise do Comportamento Aplicada" },
      { rotulo: "Foco", valor: "Habilidades, autonomia e comunicação" },
      { rotulo: "Formato", valor: "Presencial" },
    ],
    texto: [
      "Intervenções baseadas em princípios da Análise do Comportamento Aplicada, com foco no desenvolvimento de habilidades, autonomia, comunicação e qualidade de vida.",
      "O trabalho é individualizado e construído de acordo com as necessidades de cada pessoa.",
    ],
  },
  {
    slug: "psicopedagogia",
    titulo: "Psicopedagogia",
    etiqueta: "Processos de aprendizagem",
    resumo:
      "Compreender como cada pessoa aprende e quais fatores podem estar interferindo nesse processo.",
    imagem: atendimentoPsicopedagogia,
    imagemSecundaria: atendimentoPsicopedagogiaAmbiente,
    paraQuem: [
      "Crianças e adolescentes com dificuldades escolares",
      "Estudantes que precisam organizar rotina e estratégias de estudo",
      "Adultos retomando processos de aprendizagem",
    ],
    comoFunciona: [
      {
        titulo: "Investigação pedagógica",
        texto:
          "Observação de leitura, escrita, matemática, atenção e organização dos estudos na prática.",
      },
      {
        titulo: "Intervenção",
        texto:
          "Atividades que desenvolvem estratégias de aprendizagem e habilidades cognitivas envolvidas no aprender.",
      },
      {
        titulo: "Orientação",
        texto: "Combinados com a família e com a escola para sustentar os avanços fora da sessão.",
      },
    ],
    info: [
      { rotulo: "Público", valor: "Crianças, adolescentes e adultos" },
      { rotulo: "Áreas", valor: "Leitura, escrita e matemática" },
      { rotulo: "Foco", valor: "Estratégias de aprendizagem" },
      { rotulo: "Formato", valor: "Presencial" },
    ],
    texto: [
      "A Psicopedagogia busca compreender como cada pessoa aprende e quais fatores podem estar interferindo nesse processo.",
      "O atendimento pode auxiliar crianças, adolescentes e adultos com dificuldades de leitura e escrita, matemática, atenção e concentração, organização dos estudos, estratégias de aprendizagem e desenvolvimento de habilidades cognitivas.",
    ],
  },
  {
    slug: "neuropsicopedagogia",
    titulo: "Neuropsicopedagogia",
    etiqueta: "Cérebro e aprendizagem",
    resumo:
      "Intervenção nos processos de aprendizagem considerando a relação entre cérebro, cognição, comportamento e educação.",
    imagem: atendimentoNeuropsicopedagogia,
    imagemSecundaria: atendimentoNeuropsicopedagogiaAmbiente,
    paraQuem: [
      "Estudantes com dificuldades persistentes de aprendizagem",
      "Casos que envolvem atenção, memória e funções executivas",
      "Famílias que buscam intervenção com base no funcionamento cognitivo",
    ],
    comoFunciona: [
      {
        titulo: "Compreender o funcionamento",
        texto:
          "Análise de como atenção, memória e funções executivas participam da aprendizagem dessa pessoa.",
      },
      {
        titulo: "Intervenção dirigida",
        texto: "Atividades voltadas a leitura, escrita, matemática e estratégias de aprendizagem.",
      },
      {
        titulo: "Transferência para a rotina",
        texto: "Adaptação das estratégias ao estudo diário, em casa e na escola.",
      },
    ],
    info: [
      { rotulo: "Público", valor: "Crianças, adolescentes e adultos" },
      { rotulo: "Habilidades", valor: "Atenção, memória e funções executivas" },
      { rotulo: "Foco", valor: "Aprendizagem e cognição" },
      { rotulo: "Formato", valor: "Presencial" },
    ],
    texto: [
      "Uma área voltada à compreensão e intervenção nos processos de aprendizagem, considerando a relação entre cérebro, cognição, comportamento e educação.",
      "Podem ser trabalhadas habilidades como atenção, memória, funções executivas, leitura, escrita, matemática e estratégias de aprendizagem.",
    ],
  },
  {
    slug: "fonoaudiologia",
    titulo: "Fonoaudiologia",
    etiqueta: "Fala, linguagem e comunicação",
    resumo:
      "Avaliação e intervenção nas funções de fala, linguagem, comunicação, voz e aprendizagem.",
    imagem: atendimentoFonoaudiologia,
    imagemSecundaria: atendimentoFonoaudiologiaAmbiente,
    paraQuem: [
      "Crianças com trocas na fala e atraso de linguagem",
      "Estudantes com dificuldades de leitura, escrita e compreensão",
      "Adultos com demandas de voz, fluência e comunicação",
    ],
    comoFunciona: [
      {
        titulo: "Avaliação",
        texto:
          "Investigação de fala e articulação, linguagem oral, compreensão, expressão, voz e fluência.",
      },
      {
        titulo: "Plano terapêutico",
        texto: "Definição de objetivos de acordo com a necessidade de cada paciente.",
      },
      {
        titulo: "Intervenção e orientação",
        texto: "Sessões terapêuticas com orientações para a rotina de casa e da escola.",
      },
    ],
    info: [
      { rotulo: "Público", valor: "Crianças, adolescentes e adultos" },
      { rotulo: "Áreas", valor: "Fala, linguagem, voz e fluência" },
      { rotulo: "Também", valor: "Dificuldades de aprendizagem" },
      { rotulo: "Formato", valor: "Presencial" },
    ],
    texto: [
      "A Fonoaudiologia atua na avaliação e intervenção das funções relacionadas à fala, linguagem, comunicação, voz e aprendizagem, de acordo com a necessidade de cada paciente.",
      "Atendemos demandas de fala e articulação, linguagem oral, comunicação, compreensão e expressão, leitura e escrita, voz, fluência, comunicação no adulto e dificuldades relacionadas à aprendizagem.",
    ],
  },
  {
    slug: "orientacao-familiar-e-escolar",
    titulo: "Orientação Familiar e Escolar",
    etiqueta: "Parceria com os contextos",
    resumo:
      "O desenvolvimento acontece em diferentes ambientes — construímos estratégias junto à família, à escola e a outros profissionais.",
    imagem: atendimentoOrientacaoFamiliar,
    imagemSecundaria: atendimentoOrientacaoFamiliarAmbiente,
    imagemHero: heroAtendimentoOrientacaoEscolar,
    paraQuem: [
      "Famílias que precisam de estratégias para a rotina diária",
      "Escolas e educadores que buscam adaptações viáveis",
      "Casos acompanhados por mais de um profissional",
    ],
    comoFunciona: [
      {
        titulo: "Escuta do contexto",
        texto: "Entendimento da rotina, dos combinados atuais e do que já gera desgaste.",
      },
      {
        titulo: "Estratégias conjuntas",
        texto:
          "Construção de orientações práticas com família, escola e demais profissionais envolvidos.",
      },
      {
        titulo: "Acompanhamento",
        texto: "Retornos para ajustar o que funcionou e rever o que não se sustentou.",
      },
    ],
    info: [
      { rotulo: "Público", valor: "Famílias, escolas e equipes" },
      { rotulo: "Objetivo", valor: "Desenvolvimento e autonomia" },
      { rotulo: "Frequência", valor: "Conforme a necessidade" },
      { rotulo: "Formato", valor: "Presencial ou online" },
    ],
    texto: [
      "O desenvolvimento acontece em diferentes ambientes. Por isso, quando necessário, trabalhamos em parceria com família, escola e outros profissionais.",
      "A proposta é construir estratégias que favoreçam o desenvolvimento e a autonomia em cada contexto de vida.",
    ],
  },
];

export type ConteudoAtendimento = {
  chamada: string;
  introducao: string;
  sinais: string[];
  objetivos: string[];
  participacao: { titulo: string; texto: string };
  perguntas: { pergunta: string; resposta: string }[];
};

export const conteudosAtendimentos: Record<string, ConteudoAtendimento> = {
  neuropsicologia: {
    chamada: "Uma investigação cuidadosa para transformar dúvidas em compreensão e direcionamento.",
    introducao:
      "A avaliação considera a história de vida, os contextos e o modo como cada pessoa pensa, aprende, sente e se relaciona. Testes e escalas fazem parte do processo, mas os resultados são sempre interpretados de forma integrada e individualizada.",
    sinais: [
      "Dificuldades persistentes de atenção, memória ou organização",
      "Mudanças no desempenho escolar, acadêmico ou profissional",
      "Dúvidas relacionadas ao desenvolvimento ou a condições neurológicas",
      "Necessidade de compreender potencialidades e pontos de apoio",
    ],
    objetivos: [
      "Descrever o perfil cognitivo, emocional e comportamental",
      "Identificar habilidades preservadas e dificuldades que exigem suporte",
      "Contribuir para hipóteses diagnósticas quando pertinente",
      "Orientar intervenções, adaptações e encaminhamentos",
    ],
    participacao: {
      titulo: "Uma leitura que considera todos os contextos",
      texto:
        "Com autorização, informações da família, da escola e de outros profissionais podem complementar a avaliação. Essa integração ajuda a compreender como as dificuldades aparecem na vida real e torna as orientações mais úteis.",
    },
    perguntas: [
      { pergunta: "A avaliação é apenas para crianças?", resposta: "Não. O processo pode ser realizado com crianças, adolescentes e adultos, sempre com instrumentos adequados à idade e à demanda." },
      { pergunta: "O resultado é somente um diagnóstico?", resposta: "Não. A devolutiva apresenta o perfil avaliado, as potencialidades, as dificuldades observadas e os próximos passos possíveis." },
    ],
  },
  "transtorno-do-espectro-autista": {
    chamada: "Compreender particularidades para construir caminhos de desenvolvimento possíveis e respeitosos.",
    introducao:
      "Cada pessoa no espectro apresenta uma combinação própria de características, habilidades e necessidades. Por isso, a investigação e o acompanhamento partem da escuta da pessoa e de quem participa de sua rotina, evitando modelos prontos.",
    sinais: [
      "Diferenças na comunicação verbal ou não verbal",
      "Dificuldades nas interações e na reciprocidade social",
      "Interesses intensos, repetição de comportamentos ou necessidade de previsibilidade",
      "Sensibilidades a sons, texturas, luzes ou mudanças de rotina",
    ],
    objetivos: [
      "Compreender o perfil de desenvolvimento e comunicação",
      "Fortalecer autonomia e participação nas atividades cotidianas",
      "Desenvolver habilidades funcionais respeitando singularidades",
      "Orientar os diferentes ambientes de convivência",
    ],
    participacao: {
      titulo: "Família e escola como parte do cuidado",
      texto:
        "As estratégias ganham sentido quando podem ser incorporadas à rotina. A comunicação entre clínica, família e escola favorece objetivos coerentes e ajuda a generalizar habilidades para diferentes ambientes.",
    },
    perguntas: [
      { pergunta: "É preciso ter diagnóstico para iniciar?", resposta: "Não necessariamente. A primeira conversa ajuda a compreender a demanda e a definir se o caminho indicado é investigação, acompanhamento ou outro encaminhamento." },
      { pergunta: "O plano é igual para todas as pessoas?", resposta: "Não. Objetivos, recursos e ritmo são definidos a partir das necessidades e potencialidades de cada pessoa." },
    ],
  },
  tdah: {
    chamada: "Atenção, impulsividade e organização precisam ser compreendidas dentro da vida cotidiana.",
    introducao:
      "Dificuldades de atenção podem ter diferentes origens. A investigação observa quando elas começaram, em quais ambientes aparecem e como afetam aprendizagem, rotina, trabalho, relações e bem-estar emocional.",
    sinais: [
      "Esquecimentos frequentes e dificuldade para concluir tarefas",
      "Desorganização com materiais, horários e compromissos",
      "Impulsividade ou inquietação que interfere na rotina",
      "Oscilações importantes de rendimento e dificuldade para manter o foco",
    ],
    objetivos: [
      "Diferenciar TDAH de outras condições com manifestações semelhantes",
      "Reconhecer situações que facilitam ou dificultam a atenção",
      "Construir estratégias de planejamento e autorregulação",
      "Reduzir impactos na aprendizagem, no trabalho e nas relações",
    ],
    participacao: {
      titulo: "Estratégias que funcionam fora da sessão",
      texto:
        "Quando indicado, família e escola recebem orientações sobre organização do ambiente, divisão de tarefas, previsibilidade e formas de comunicação. O objetivo é tornar a rotina mais possível, não apenas exigir mais esforço.",
    },
    perguntas: [
      { pergunta: "Desatenção sempre significa TDAH?", resposta: "Não. Sono, ansiedade, dificuldades de aprendizagem, sobrecarga e outras condições também podem afetar a atenção; por isso, a avaliação precisa ser ampla." },
      { pergunta: "Adultos também podem buscar avaliação?", resposta: "Sim. O atendimento considera os impactos na organização, no trabalho, nos estudos, nos relacionamentos e na vida diária." },
    ],
  },
  "dificuldades-de-aprendizagem": {
    chamada: "Quando aprender se torna difícil, é preciso investigar o caminho — não responsabilizar o estudante.",
    introducao:
      "A queixa escolar é analisada de forma ampla, considerando oportunidades de aprendizagem, aspectos pedagógicos, emocionais, cognitivos e o histórico de desenvolvimento. O foco é entender o que sustenta a dificuldade e quais apoios podem favorecer avanços.",
    sinais: [
      "Leitura lenta, com trocas ou pouca compreensão",
      "Dificuldades persistentes na escrita ou na ortografia",
      "Problemas para compreender quantidades e operações matemáticas",
      "Desempenho abaixo do esperado apesar de apoio e ensino adequados",
    ],
    objetivos: [
      "Mapear habilidades acadêmicas e processos envolvidos no aprender",
      "Distinguir dificuldade circunstancial de transtorno específico",
      "Identificar estratégias de ensino mais adequadas",
      "Orientar família e escola sobre apoios e adaptações possíveis",
    ],
    participacao: {
      titulo: "Escola e família no mesmo percurso",
      texto:
        "Cadernos, atividades, avaliações e relatos escolares ajudam a compreender como o estudante responde às propostas pedagógicas. As orientações são construídas para serem viáveis na rotina e acompanhadas ao longo do processo.",
    },
    perguntas: [
      { pergunta: "Toda dificuldade é um transtorno?", resposta: "Não. Questões pedagógicas, emocionais, ambientais e cognitivas podem interferir na aprendizagem. A investigação ajuda a diferenciar essas possibilidades." },
      { pergunta: "A escola participa?", resposta: "Quando necessário e autorizado pela família, o diálogo com a escola contribui com informações e permite orientar estratégias mais consistentes." },
    ],
  },
  psicoterapia: {
    chamada: "Um espaço seguro para compreender emoções, relações e formas de lidar com os desafios.",
    introducao:
      "A psicoterapia oferece escuta qualificada e recursos para reconhecer pensamentos, emoções e comportamentos. O processo é construído de acordo com a fase da vida, as necessidades apresentadas e os objetivos combinados nos primeiros encontros.",
    sinais: [
      "Ansiedade, tristeza, irritabilidade ou mudanças de comportamento",
      "Dificuldades nos relacionamentos ou na expressão das emoções",
      "Medos, inseguranças e baixa autoestima",
      "Momentos de perda, transição, sobrecarga ou sofrimento emocional",
    ],
    objetivos: [
      "Ampliar a compreensão sobre emoções e padrões de comportamento",
      "Desenvolver recursos de enfrentamento e autorregulação",
      "Fortalecer autoestima, autonomia e habilidades sociais",
      "Construir mudanças coerentes com os objetivos da pessoa",
    ],
    participacao: {
      titulo: "Acompanhamento adequado a cada fase da vida",
      texto:
        "No atendimento de crianças e adolescentes, encontros de orientação com responsáveis podem fazer parte do processo. A participação é combinada com cuidado, respeitando o vínculo terapêutico e a confidencialidade.",
    },
    perguntas: [
      { pergunta: "Como são definidos os objetivos?", resposta: "Eles são construídos em conjunto nos encontros iniciais e podem ser revistos conforme o processo avança e novas necessidades aparecem." },
      { pergunta: "A família participa das sessões?", resposta: "A participação varia conforme a idade e a demanda. Quando indicada, acontece em encontros próprios e com objetivos previamente combinados." },
    ],
  },
  aba: {
    chamada: "Intervenções individualizadas para ampliar habilidades relevantes e participação na vida cotidiana.",
    introducao:
      "A Análise do Comportamento Aplicada utiliza observação, planejamento e acompanhamento de dados para ensinar habilidades e reduzir barreiras à autonomia. O trabalho parte das prioridades da pessoa e de sua família.",
    sinais: [
      "Dificuldades de comunicação funcional e interação",
      "Baixa autonomia em atividades da rotina",
      "Comportamentos que limitam participação, aprendizagem ou segurança",
      "Necessidade de ensinar habilidades de forma estruturada e gradual",
    ],
    objetivos: [
      "Desenvolver comunicação e habilidades sociais funcionais",
      "Ampliar autonomia em atividades cotidianas",
      "Ensinar novas habilidades em etapas possíveis",
      "Acompanhar resultados e ajustar as estratégias continuamente",
    ],
    participacao: {
      titulo: "Aprendizagem que se estende à rotina",
      texto:
        "Responsáveis e, quando pertinente, escola e outros profissionais recebem orientação para favorecer o uso das habilidades em ambientes diferentes. A consistência entre os contextos fortalece os avanços.",
    },
    perguntas: [
      { pergunta: "Como são escolhidas as metas?", resposta: "As metas partem da avaliação do repertório, das necessidades funcionais e das prioridades compartilhadas pela pessoa e por sua família." },
      { pergunta: "Como os avanços são acompanhados?", resposta: "Os objetivos são observados e registrados ao longo do processo, permitindo revisar estratégias e tomar decisões com base na evolução individual." },
    ],
  },
  psicopedagogia: {
    chamada: "Compreender o jeito de aprender para construir estratégias com sentido e autonomia.",
    introducao:
      "O acompanhamento psicopedagógico observa a relação da pessoa com a aprendizagem e investiga os recursos que ela já utiliza. A intervenção propõe experiências graduais para desenvolver habilidades acadêmicas, cognitivas e de organização.",
    sinais: [
      "Dificuldades recorrentes em leitura, escrita ou matemática",
      "Evitação das tarefas e insegurança diante do aprender",
      "Pouca autonomia para estudar e organizar materiais",
      "Necessidade de estratégias personalizadas de aprendizagem",
    ],
    objetivos: [
      "Fortalecer habilidades necessárias à leitura, escrita e matemática",
      "Desenvolver planejamento, atenção e organização dos estudos",
      "Resgatar confiança e participação no processo de aprendizagem",
      "Construir estratégias que possam ser usadas com autonomia",
    ],
    participacao: {
      titulo: "Intervenção conectada à experiência escolar",
      texto:
        "A troca com responsáveis e educadores ajuda a alinhar objetivos, acompanhar a aplicação das estratégias e compreender mudanças no cotidiano. O trabalho não substitui a escola: ele amplia os recursos para aprender.",
    },
    perguntas: [
      { pergunta: "É reforço escolar?", resposta: "Não. O foco não é repetir conteúdos, mas compreender como a pessoa aprende e desenvolver os processos e estratégias envolvidos na aprendizagem." },
      { pergunta: "Quanto tempo dura o acompanhamento?", resposta: "A duração varia conforme a demanda, os objetivos definidos e a evolução observada. O percurso é revisto periodicamente." },
    ],
  },
  neuropsicopedagogia: {
    chamada: "Cérebro, cognição e educação reunidos para compreender e favorecer a aprendizagem.",
    introducao:
      "A Neuropsicopedagogia integra conhecimentos sobre funções cognitivas e processos educacionais. O acompanhamento considera como atenção, memória, linguagem e funções executivas participam das tarefas de leitura, escrita e matemática.",
    sinais: [
      "Dificuldade para manter informações e seguir etapas",
      "Baixo rendimento associado à atenção ou à memória",
      "Problemas de planejamento, flexibilidade e organização",
      "Dificuldades acadêmicas persistentes que exigem intervenção direcionada",
    ],
    objetivos: [
      "Estimular funções cognitivas relacionadas à aprendizagem",
      "Desenvolver estratégias para lidar com tarefas complexas",
      "Favorecer leitura, escrita e raciocínio matemático",
      "Transferir os recursos construídos para a rotina de estudos",
    ],
    participacao: {
      titulo: "Da sessão para situações reais de aprendizagem",
      texto:
        "As atividades são conectadas às demandas vividas pelo estudante. A família e a escola podem receber orientações para apoiar o uso das estratégias sem retirar a autonomia da pessoa.",
    },
    perguntas: [
      { pergunta: "Qual a diferença para a Psicopedagogia?", resposta: "As duas áreas olham para a aprendizagem. A Neuropsicopedagogia enfatiza também a relação entre funções cognitivas, cérebro, comportamento e desempenho acadêmico." },
      { pergunta: "O atendimento substitui uma avaliação?", resposta: "Não. Quando há necessidade de investigação diagnóstica ou de outro cuidado especializado, o encaminhamento adequado é conversado com a família." },
    ],
  },
  fonoaudiologia: {
    chamada: "Comunicação, fala e linguagem cuidadas em todas as etapas da vida.",
    introducao:
      "A avaliação fonoaudiológica observa como a pessoa compreende, expressa e organiza a comunicação. A partir desse perfil, são definidos objetivos terapêuticos voltados às necessidades de fala, linguagem, voz, fluência ou aprendizagem.",
    sinais: [
      "Atraso no desenvolvimento da fala ou da linguagem",
      "Trocas, omissões ou dificuldade para articular sons",
      "Dificuldades de compreensão, expressão, leitura ou escrita",
      "Alterações de voz, fluência ou comunicação no adulto",
    ],
    objetivos: [
      "Favorecer comunicação funcional e participação social",
      "Desenvolver compreensão e expressão da linguagem",
      "Trabalhar fala, articulação, voz ou fluência conforme a demanda",
      "Apoiar habilidades de leitura e escrita quando indicado",
    ],
    participacao: {
      titulo: "Orientações incorporadas ao cotidiano",
      texto:
        "Atividades simples e possíveis podem ser orientadas para casa e escola. A participação dos contextos amplia as oportunidades de comunicação e ajuda a consolidar as habilidades trabalhadas.",
    },
    perguntas: [
      { pergunta: "Quando procurar uma avaliação?", resposta: "Quando dificuldades de fala, linguagem, compreensão, voz, fluência, leitura ou escrita persistem ou interferem na comunicação e na participação cotidiana." },
      { pergunta: "O acompanhamento envolve exercícios em casa?", resposta: "Quando indicado, são propostas orientações compatíveis com a rotina, para ampliar as oportunidades de prática sem gerar sobrecarga." },
    ],
  },
  "orientacao-familiar-e-escolar": {
    chamada: "Alinhar os adultos e os ambientes também é uma forma de cuidar do desenvolvimento.",
    introducao:
      "A orientação organiza informações, prioridades e estratégias para situações vividas em casa ou na escola. O encontro ajuda a transformar recomendações amplas em ações possíveis, coerentes com a realidade de cada contexto.",
    sinais: [
      "Dificuldade para organizar rotinas, limites e combinados",
      "Necessidade de adaptações e estratégias no ambiente escolar",
      "Desalinhamento entre orientações de diferentes profissionais",
      "Mudanças de comportamento ou aprendizagem que exigem ação conjunta",
    ],
    objetivos: [
      "Compreender a situação a partir de diferentes perspectivas",
      "Definir prioridades e estratégias práticas para cada ambiente",
      "Favorecer comunicação entre família, escola e equipe",
      "Acompanhar resultados e ajustar os combinados",
    ],
    participacao: {
      titulo: "Uma construção feita com quem vive a rotina",
      texto:
        "Os encontros podem envolver responsáveis, educadores e profissionais, conforme a necessidade. Cada orientação considera recursos, limites e possibilidades reais, para que os combinados possam ser sustentados.",
    },
    perguntas: [
      { pergunta: "A criança ou o adolescente precisa participar?", resposta: "Nem sempre. A composição do encontro depende do objetivo e é definida para preservar a pessoa e tornar a conversa produtiva." },
      { pergunta: "É necessário já realizar outro acompanhamento na clínica?", resposta: "Não. A orientação pode apoiar demandas específicas ou complementar um acompanhamento já existente, após a compreensão inicial do caso." },
    ],
  },
};

export const destaques = [
  {
    titulo: "Equipe multidisciplinar",
    texto:
      "Psicologia, neuropsicologia, psicopedagogia, fonoaudiologia e ABA atuando de forma integrada.",
  },
  {
    titulo: "Avaliar para compreender",
    texto:
      "A avaliação organiza informações sobre cognição, emoção, comportamento e aprendizagem.",
  },
  {
    titulo: "Cada pessoa é única",
    texto: "Planos individualizados, construídos a partir da história e do ritmo de cada pessoa.",
  },
  {
    titulo: "Parceria com os contextos",
    texto: "Família, escola e outros profissionais participam da construção das estratégias.",
  },
];

export const fundadora = {
  nome: "Jéssica Pelissari",
  papel: "Psicóloga • Neuropsicóloga • Fundadora e Diretora da Clínica Evoluta",
  imagem: jessicaAsset.url,
  proposito:
    "Minha trajetória profissional é construída a partir de um propósito: compreender cada pessoa em sua singularidade e transformar conhecimento científico em possibilidades reais de desenvolvimento.",
  intro: [
    "Sou psicóloga e neuropsicóloga, com formação e experiência voltadas especialmente para neurodesenvolvimento, aprendizagem, avaliação neuropsicológica e saúde mental.",
    "Ao longo da minha trajetória, busquei unir conhecimento científico, experiência clínica e um olhar humanizado para compreender as dificuldades, identificar potencialidades e contribuir para intervenções mais assertivas.",
  ],
  formacao: [
    "Graduação em Psicologia",
    "Pós-graduação em Neuropsicologia",
    "Pós-graduação em Terapia Cognitivo-Comportamental na Infância e Adolescência",
    "Pós-graduação em Intervenção ABA aplicada ao Transtorno do Espectro Autista e à Deficiência Intelectual",
    "Especialista em Neuropsicologia pelo Conselho Federal de Psicologia",
  ],
  atuacao: [
    "Idealizadora, fundadora e diretora da Clínica Evoluta — Desenvolvimento Infantil, em São Gabriel da Palha/ES",
    "Atuação em avaliação neuropsicológica, com experiência em diferentes fases do desenvolvimento",
    "Atuação com transtornos do neurodesenvolvimento, dificuldades de aprendizagem e demandas cognitivas, emocionais e comportamentais",
    "Supervisora e mentora de profissionais da área de Neuropsicologia",
  ],
  obras: [
    { titulo: "Vozes da Neurodiversidade", nota: "Coautoria" },
    { titulo: "Psicologia Clínica: O que não te ensinaram na universidade", nota: "Lançamento 2026" },
    { titulo: "TDAH na Escola", nota: "Lançamento 2026" },
  ],
  manifesto: [
    "Acredito que uma avaliação neuropsicológica não deve se resumir a números, testes ou diagnósticos.",
    "Por trás de cada resultado existe uma pessoa, uma história, uma família e um contexto que precisam ser compreendidos.",
  ],
  citacao:
    "Meu trabalho é transformar avaliação em compreensão, compreensão em direcionamento e conhecimento em possibilidades de desenvolvimento.",
  assinatura: "Ciência, experiência e acolhimento em cada etapa.",
};

export const depoimentos = [
  {
    texto:
      "Minha filha voltou a querer ir para a escola. O trabalho foi cuidadoso e sempre explicado para nós, passo a passo.",
    autor: "Cláudia Ramos",
    papel: "mãe da Helena, 8 anos",
  },
  {
    texto:
      "A avaliação nos deu clareza depois de anos de dúvida. O relatório foi aceito pela escola e mudou o olhar dos professores.",
    autor: "Rodrigo Peixoto",
    papel: "pai do Théo, 11 anos",
  },
  {
    texto:
      "A formação com a nossa equipe foi prática e sem julgamento. Saímos com combinados que conseguimos aplicar na semana seguinte.",
    autor: "Sônia Barreto",
    papel: "coordenadora pedagógica",
  },
];

export type Curso = {
  slug: string;
  titulo: string;
  etiqueta: string;
  resumo: string;
  imagem: string;
  duracao: string;
  formato: string;
  investimento: string;
  publico: string;
  conteudo: string[];
  texto: string[];
};

export const cursos: Curso[] = [
  {
    slug: "avaliacao-neuropsicologica-na-pratica",
    titulo: "Avaliação neuropsicológica na prática",
    etiqueta: "Turma aberta",
    resumo:
      "Do encaminhamento ao laudo: como conduzir um processo de avaliação com raciocínio clínico e devolutivas claras.",
    imagem: jessicaAsset.url,
    duracao: "8 encontros de 1h30",
    formato: "Online, ao vivo, com gravações",
    investimento: "Sob consulta",
    publico: "Psicólogos e estudantes de Psicologia",
    conteudo: [
      "Entrevista inicial e levantamento de hipóteses",
      "Escolha e aplicação dos instrumentos",
      "Integração dos dados e raciocínio clínico",
      "Escrita de laudo em linguagem acessível",
      "Devolutiva para família e escola",
    ],
    texto: [
      "Um curso voltado a quem já atua ou quer atuar em avaliação neuropsicológica e sente falta de um caminho claro entre a coleta dos dados e a conclusão do caso.",
      "Cada encontro traz discussão de casos e material de apoio para usar no próprio consultório.",
    ],
  },
  {
    slug: "funcoes-executivas-na-pratica",
    titulo: "Funções executivas na prática",
    etiqueta: "Novo",
    resumo:
      "Atenção, planejamento e autorregulação com atividades aplicáveis em consultório e em sala de aula.",
    imagem: jessicaAsset.url,
    duracao: "6 encontros de 2h",
    formato: "Online, ao vivo",
    investimento: "Sob consulta",
    publico: "Educadores, terapeutas e profissionais da saúde",
    conteudo: [
      "O que são funções executivas, sem jargão",
      "Como observar e registrar dificuldades",
      "Atividades de foco e memória de trabalho",
      "Rotinas visuais construídas com a pessoa atendida",
      "Casos comentados em grupo",
    ],
    texto: [
      "Focado em prática: cada aula termina com um protocolo pronto para usar no atendimento ou na aula.",
      "Inclui material de apoio imprimível e encontro extra de supervisão em grupo.",
    ],
  },
  {
    slug: "tdah-na-escola",
    titulo: "TDAH na escola",
    etiqueta: "Para escolas",
    resumo:
      "Como compreender o TDAH em sala de aula e aplicar adaptações viáveis, sem sobrecarregar o professor.",
    imagem: jessicaAsset.url,
    duracao: "4 encontros de 1h30",
    formato: "Online, ao vivo",
    investimento: "Sob consulta",
    publico: "Professores, coordenadores e famílias",
    conteudo: [
      "O que o TDAH afeta na aprendizagem",
      "Atenção, impulsividade e funções executivas na prática",
      "Adaptações simples de rotina e avaliação",
      "Combinados entre escola e família",
      "Quando encaminhar para avaliação",
    ],
    texto: [
      "Um percurso curto para equipes escolares que convivem diariamente com estudantes desatentos, agitados ou desorganizados.",
      "As orientações são concretas: o que dizer, como dividir a tarefa e como registrar o progresso.",
    ],
  },
];

export type Post = {
  slug: string;
  titulo: string;
  categoria: string;
  data: string;
  leitura: string;
  resumo: string;
  imagem: string;
  paragrafos: string[];
};

export const posts: Post[] = [
  {
    slug: "quando-buscar-avaliacao-neuropsicologica",
    titulo: "Quando buscar uma avaliação neuropsicológica",
    categoria: "Neuropsicologia",
    data: "12 de agosto de 2026",
    leitura: "5 min de leitura",
    resumo:
      "Nem toda dificuldade precisa de avaliação — e nem toda avaliação precisa esperar anos. Veja o que costuma indicar o momento.",
    imagem: blogLeitura,
    paragrafos: [
      "A avaliação neuropsicológica investiga o funcionamento cognitivo, emocional e comportamental. Ela é indicada quando há dúvidas persistentes sobre a origem de uma dificuldade, e não apenas diante de um episódio isolado.",
      "Entre os motivos mais frequentes de encaminhamento estão queixas de atenção e memória, dificuldades escolares que não cedem com apoio, suspeita de TDAH ou TEA e mudanças cognitivas relacionadas ao envelhecimento.",
      "O processo reúne entrevista, instrumentos padronizados, observação clínica e, quando necessário, escuta da escola e de outros profissionais que acompanham o caso.",
      "O resultado não é um número: é uma compreensão organizada, que orienta intervenções mais assertivas em casa, na escola e na clínica.",
    ],
  },
  {
    slug: "nem-toda-dificuldade-escolar-e-transtorno",
    titulo: "Nem toda dificuldade escolar é transtorno",
    categoria: "Aprendizagem",
    data: "28 de julho de 2026",
    leitura: "4 min de leitura",
    resumo:
      "Antes de nomear, é preciso investigar: o que diferencia uma defasagem escolar de um transtorno de aprendizagem.",
    imagem: blogRotina,
    paragrafos: [
      "Uma dificuldade escolar pode ter muitas origens: método de ensino, faltas, questões emocionais, sono, contexto familiar ou, sim, um transtorno específico de aprendizagem.",
      "Investigar significa observar leitura, escrita, matemática, compreensão, atenção, memória, organização e funções executivas — e comparar esse desempenho com o que se espera para a idade e a escolaridade.",
      "Quando a dificuldade persiste mesmo depois de ensino adequado e apoio consistente, vale aprofundar a investigação.",
      "O objetivo nunca é rotular. É compreender o que está dificultando a aprendizagem e quais estratégias podem favorecer o desenvolvimento.",
    ],
  },
  {
    slug: "rotina-e-funcoes-executivas-em-casa",
    titulo: "Rotina e funções executivas: por onde começar em casa",
    categoria: "Rotina",
    data: "9 de julho de 2026",
    leitura: "6 min de leitura",
    resumo:
      "Pequenos ajustes de ambiente, tempo e combinados que ajudam quem tem dificuldade de se organizar.",
    imagem: blogMatematica,
    paragrafos: [
      "Funções executivas são as habilidades que nos permitem planejar, iniciar, sustentar e concluir uma tarefa. Quando elas estão em construção — ou comprometidas —, cobrar esforço não resolve.",
      "O primeiro ajuste é o ambiente: um lugar fixo, sem tela ligada, e blocos curtos de trabalho com pausas previsíveis.",
      "O segundo é o tamanho da tarefa. Uma lista longa assusta; a mesma lista dividida em partes visíveis parece possível.",
      "O terceiro é o papel do adulto: acompanhar de perto no começo e ir se afastando aos poucos, sustentando a autonomia em vez de substituí-la.",
    ],
  },
];

export const novidades = [
  {
    data: "Setembro de 2026",
    titulo: "Novas vagas para avaliação neuropsicológica",
    texto:
      "Abertura de vagas para processos de avaliação com início em setembro, nos períodos da manhã e da tarde.",
    etiqueta: "Agenda",
  },
  {
    data: "Agosto de 2026",
    titulo: "Turma de “Avaliação neuropsicológica na prática”",
    texto:
      "Inscrições abertas para a nova turma online, com encontros ao vivo e gravações liberadas por seis meses.",
    etiqueta: "Cursos",
  },
  {
    data: "Julho de 2026",
    titulo: "Lançamentos de 2026",
    texto:
      "Duas novas obras em coautoria: “Psicologia Clínica: o que não te ensinaram na universidade” e “TDAH na Escola”.",
    etiqueta: "Publicações",
  },
  {
    data: "Junho de 2026",
    titulo: "Orientação para equipes escolares",
    texto:
      "Encontro de orientação sobre adaptações em sala de aula realizado com a equipe de uma escola parceira.",
    etiqueta: "Escolas",
  },
];
