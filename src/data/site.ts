import sobreImg from "@/assets/sobre.jpg";
import ctaImg from "@/assets/cta-conversa.jpg";
import atendAprendizagem from "@/assets/atend-aprendizagem.jpg";
import atendTdah from "@/assets/atend-tdah.jpg";
import atendDislexia from "@/assets/atend-dislexia.jpg";
import atendAvaliacao from "@/assets/atend-avaliacao.jpg";
import atendOrientacao from "@/assets/atend-orientacao.jpg";
import jessicaAsset from "@/assets/jessica-clinica-evoluta.png.asset.json";
import jessicaHeroMesa from "@/assets/jessica-hero-mesa.jpg.asset.json";
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

export const site = {
  nome: "Clínica Evoluta",
  subtitulo: "Desenvolvimento Infantil",
  slogan:
    "Cuidar, compreender e transformar através da ciência, acolhimento e atuação multidisciplinar",
  whatsapp: "https://wa.me/5500000000000",
  telefone: "+55 (00) 00000-0000",
  email: "contato@clinicaevoluta.com.br",
  instagram: "@clinicaevoluta",
  cidade: "São Gabriel da Palha/ES — presencial e online",
} as const;

export type Atendimento = {
  slug: string;
  titulo: string;
  etiqueta: string;
  resumo: string;
  imagem: string;
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
    imagem: atendAvaliacao,
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
    imagem: atendOrientacao,
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
    imagem: atendTdah,
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
    imagem: atendAprendizagem,
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
    imagem: sobreImg,
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
    imagem: atendOrientacao,
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
    imagem: atendDislexia,
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
    imagem: atendAvaliacao,
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
    imagem: atendDislexia,
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
    imagem: atendOrientacao,
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
