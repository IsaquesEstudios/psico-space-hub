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
import heroAtendimentoAprendizagem from "@/assets/hero-atendimento-aprendizagem-corrigido.png";
import heroAtendimentoOrientacaoEscolar from "@/assets/hero-atendimento-orientacao-escolar.jpg";
import heroAtendimentoTdah from "@/assets/hero-atendimento-tdah.jpg";
import heroAtendimentoTea from "@/assets/hero-atendimento-tea-final.png";
import heroAtendimentoFonoaudiologia from "@/assets/hero-atendimento-fonoaudiologia.jpg";
import jessicaAsset from "@/assets/jessica-clinica-evoluta.png.asset.json";
import jessicaHeroMesa from "@/assets/jessica-hero-mesa.jpg.asset.json";
import jessicaRetratoFrontal from "@/assets/GHR07001.jpg.asset.json";
import jessicaRetratoLateral from "@/assets/GHR06700.jpg.asset.json";
import jessicaMesaHorizontal from "@/assets/GHR06849_1.jpg.asset.json";
import jessicaBlogHero from "@/assets/jessica-blog.jpg.asset.json";
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
  contato: jessicaEntrevista.url,
  cursos: jessicaSofa.url,
  cursosDetalhes: [jessicaEscrevendo.url, jessicaMesaAmpla.url, jessicaConversa.url],
  blog: jessicaBlogHero.url,
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
  whatsapp: "https://wa.me/5527999385386",
  telefone: "(27) 99938-5386",
  telefoneLink: "tel:+5527999385386",
  email: "contato@clinicaevoluta.com.br",
  instagram: "@clinicaevoluta",
  cidade: "Rua Antônio Borgo, 230, Centro, São Gabriel da Palha 29780-000",
  enderecoMapa: "R. Antônio Borgo, 230 - Centro, São Gabriel da Palha - ES, 29780-000",
} as const;

export const mapaEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  site.enderecoMapa,
)}&hl=pt-BR&z=17&output=embed`;

export const mapaLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.enderecoMapa,
)}`;

/** Termos de busca usados como H1 das páginas de atendimento (SEO local). */
export const h1Atendimentos: Record<string, string> = {
  "avaliacao-neuropsicologica": "Avaliação neuropsicológica em São Gabriel da Palha",
  "psicologia-infantil-tcc": "Psicologia infantil com TCC em São Gabriel da Palha",
  "intervencao-aba": "Intervenção ABA em São Gabriel da Palha",
  "avaliacao-neuropsicopedagogica": "Avaliação neuropsicopedagógica em São Gabriel da Palha",
  "fonoaudiologia-infantil": "Fonoaudiologia infantil em São Gabriel da Palha",
  "fonoaudiologia-adolescentes-adultos-idosos":
    "Fonoaudiologia para adolescentes, adultos e idosos em São Gabriel da Palha",
  "estimulacao-cognitiva-idosos": "Estimulação cognitiva para idosos em São Gabriel da Palha",
};



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
    slug: "avaliacao-neuropsicologica",
    titulo: "Avaliação Neuropsicológica",
    etiqueta: "Método Evoluta",
    resumo:
      "Avaliação individualizada para compreender atenção, memória, aprendizagem, comportamento e orientar próximos passos com clareza.",
    imagem: atendimentoNeuropsicologia,
    imagemSecundaria: atendimentoNeuropsicologiaAmbiente,
    paraQuem: [
      "Crianças, adolescentes, adultos e idosos que precisam investigar dificuldades cognitivas, emocionais, comportamentais ou de aprendizagem",
      "Famílias com dúvidas sobre desenvolvimento infantil, atenção, concentração, memória, linguagem ou autonomia",
      "Estudantes ou adultos com dificuldades persistentes de desempenho escolar, acadêmico ou profissional",
      "Pessoas em investigação de TDAH, TEA, transtornos de aprendizagem, deficiência intelectual ou alterações cognitivas",
      "Pacientes que precisam de uma devolutiva clara para orientar intervenções, adaptações e encaminhamentos",
    ],
    comoFunciona: [
      {
        titulo: "Entrevista detalhada",
        texto:
          "O processo começa com uma conversa cuidadosa sobre desenvolvimento, rotina, escolaridade, contexto familiar, principais dificuldades e motivo da avaliação.",
      },
      {
        titulo: "Definição dos instrumentos",
        texto:
          "A partir da investigação inicial, são escolhidos testes, escalas, observações e procedimentos adequados à idade, à demanda e à história do paciente.",
      },
      {
        titulo: "Avaliação das funções",
        texto:
          "Podem ser avaliadas atenção, memória, linguagem, raciocínio, aprendizagem, funções executivas, velocidade de processamento, habilidades visuoespaciais e aspectos emocionais.",
      },
      {
        titulo: "Integração clínica dos dados",
        texto:
          "Os resultados são analisados em conjunto com a história da pessoa e com os contextos em que as dificuldades aparecem, evitando conclusões isoladas.",
      },
      {
        titulo: "Devolutiva e direcionamentos",
        texto:
          "Ao final, a família ou o paciente recebe uma explicação individualizada, com orientações e encaminhamentos que ajudam a organizar os próximos passos.",
      },
    ],
    info: [
      { rotulo: "Público", valor: "Crianças, adolescentes, adultos e idosos" },
      { rotulo: "Método", valor: "Avaliação Neuropsicológica Evoluta" },
      { rotulo: "Foco", valor: "Cognição, comportamento e aprendizagem" },
      { rotulo: "Entrega", valor: "Devolutiva individualizada" },
    ],
    texto: [
      "Na Clínica Evoluta, a Avaliação Neuropsicológica é conduzida pelo Método de Avaliação Neuropsicológica Evoluta, metodologia própria desenvolvida por Jéssica Pelissari a partir de sua experiência clínica e da necessidade de compreender cada paciente de maneira individualizada.",
      "Mais do que aplicar testes, o atendimento investiga como a pessoa pensa, aprende, memoriza, presta atenção, resolve problemas, se comporta e lida com diferentes situações da vida diária.",
      "O resultado esperado é uma compreensão organizada do funcionamento do paciente, capaz de orientar família, escola, profissionais de saúde e o próprio paciente com informações claras e aplicáveis.",
    ],
  },
  {
    slug: "psicologia-infantil-tcc",
    titulo: "Psicologia Infantil – Terapia Cognitivo-Comportamental",
    etiqueta: "Psicoterapia infantil",
    resumo:
      "Atendimento acolhedor para ajudar crianças e adolescentes a compreender emoções, pensamentos, comportamentos e relações.",
    imagem: atendimentoPsicoterapia,
    imagemSecundaria: atendimentoPsicoterapiaAmbiente,
    paraQuem: [
      "Crianças e adolescentes com dificuldades emocionais, comportamentais ou sociais que interferem na rotina",
      "Famílias que observam ansiedade, medos, insegurança, irritabilidade, baixa autoestima ou mudanças de comportamento",
      "Crianças com dificuldades de socialização, comunicação, resolução de conflitos ou adaptação a mudanças",
      "Responsáveis que precisam de orientação para lidar com comportamentos e emoções no cotidiano",
      "Adolescentes que precisam desenvolver estratégias de enfrentamento, organização emocional e habilidades sociais",
    ],
    comoFunciona: [
      {
        titulo: "Compreensão da demanda",
        texto:
          "Nos primeiros encontros, são compreendidas as dificuldades da criança, sua rotina, os contextos em que os comportamentos aparecem e as expectativas da família.",
      },
      {
        titulo: "Vínculo e expressão",
        texto:
          "O atendimento cria um espaço seguro para a criança se expressar por meio de conversas, jogos, histórias, brincadeiras e atividades compatíveis com sua idade.",
      },
      {
        titulo: "Estratégias da TCC",
        texto:
          "São trabalhadas relações entre pensamentos, emoções e comportamentos, ajudando a criança a reconhecer sentimentos e experimentar novas respostas.",
      },
      {
        titulo: "Construção de habilidades",
        texto:
          "O processo pode envolver regulação emocional, autoestima, comunicação, habilidades sociais, tolerância à frustração, resolução de problemas e estratégias de enfrentamento.",
      },
      {
        titulo: "Orientação aos responsáveis",
        texto:
          "A família participa em momentos combinados para que as estratégias trabalhadas na terapia possam ganhar continuidade em casa, na escola e na rotina social.",
      },
    ],
    info: [
      { rotulo: "Público", valor: "Crianças e adolescentes" },
      { rotulo: "Abordagem", valor: "Terapia Cognitivo-Comportamental" },
      { rotulo: "Recursos", valor: "Estratégias terapêuticas e lúdicas" },
      { rotulo: "Foco", valor: "Emoções, comportamento e habilidades sociais" },
    ],
    texto: [
      "A Psicoterapia Infantil com base na Terapia Cognitivo-Comportamental oferece à criança um espaço seguro e acolhedor para compreender emoções, pensamentos e comportamentos.",
      "O atendimento é adaptado à idade e ao nível de desenvolvimento, utilizando recursos lúdicos e estratégias terapêuticas que facilitam a expressão, a aprendizagem de novas habilidades e a participação da família.",
      "A proposta não é julgar a criança ou a família, mas entender o que está acontecendo e construir caminhos possíveis para lidar com as dificuldades no dia a dia.",
    ],
  },
  {
    slug: "intervencao-aba",
    titulo: "Psicologia com Intervenção Baseada em ABA",
    etiqueta: "Análise do Comportamento Aplicada",
    resumo:
      "Intervenção individualizada para desenvolver comunicação, autonomia, habilidades sociais, aprendizagem e participação na rotina.",
    imagem: atendimentoAba,
    imagemSecundaria: atendimentoAbaAmbiente,
    paraQuem: [
      "Pessoas com Transtorno do Espectro Autista e outras demandas relacionadas ao desenvolvimento e ao comportamento",
      "Crianças, adolescentes ou adultos que precisam ampliar comunicação funcional, autonomia e participação em atividades",
      "Famílias que buscam um plano de intervenção individualizado, com objetivos claros e acompanhamento estruturado",
      "Pacientes com dificuldades em brincadeiras, interação social, seguimento de instruções ou habilidades acadêmicas iniciais",
      "Casos que precisam de alinhamento entre clínica, responsáveis, escola e outros profissionais envolvidos",
    ],
    comoFunciona: [
      {
        titulo: "Levantamento do repertório",
        texto:
          "Primeiro, são identificadas as habilidades já desenvolvidas, as dificuldades atuais, os comportamentos que interferem na rotina e as prioridades da família.",
      },
      {
        titulo: "Definição de metas funcionais",
        texto:
          "Os objetivos são construídos de forma individual, observável e conectada à vida real, respeitando o repertório atual e as necessidades do paciente.",
      },
      {
        titulo: "Intervenção estruturada",
        texto:
          "O atendimento pode trabalhar comunicação, interação social, autonomia, habilidades de vida diária, brincadeiras, seguimento de instruções, aprendizagem e comportamentos adaptativos.",
      },
      {
        titulo: "Acompanhamento do progresso",
        texto:
          "As respostas do paciente são observadas ao longo do processo para ajustar estratégias, reorganizar metas e tornar a intervenção mais efetiva e possível.",
      },
      {
        titulo: "Orientação e generalização",
        texto:
          "Quando necessário, responsáveis, escola e outros ambientes recebem orientações para que as habilidades sejam praticadas também fora da sessão.",
      },
    ],
    info: [
      { rotulo: "Público", valor: "Crianças, adolescentes e adultos" },
      { rotulo: "Base", valor: "Análise do Comportamento Aplicada" },
      { rotulo: "Foco", valor: "Habilidades, autonomia e comunicação" },
      { rotulo: "Plano", valor: "Individualizado por repertório e objetivos" },
    ],
    texto: [
      "A Psicologia com Intervenção Baseada em ABA utiliza princípios da ciência do comportamento para favorecer a aquisição de habilidades, ampliar autonomia e reduzir barreiras que dificultam aprendizagem ou participação.",
      "O planejamento é individualizado, considerando o repertório atual, os objetivos de cada pessoa e as demandas que aparecem na rotina familiar, escolar e social.",
      "A intervenção é especialmente conhecida no acompanhamento de pessoas com TEA, mas também pode ser indicada para outras demandas do desenvolvimento e do comportamento, sempre após avaliação individual.",
    ],
  },
  {
    slug: "avaliacao-neuropsicopedagogica",
    titulo: "Avaliação Neuropsicopedagógica",
    etiqueta: "Aprendizagem escolar",
    resumo:
      "Avaliação para compreender leitura, escrita, matemática, atenção, memória e fatores que interferem na aprendizagem.",
    imagem: atendimentoNeuropsicopedagogia,
    imagemSecundaria: atendimentoAprendizagemAmbiente,
    paraQuem: [
      "Crianças e adolescentes com dificuldades escolares persistentes, baixo rendimento ou atraso na aquisição de habilidades acadêmicas",
      "Estudantes com dificuldades em leitura, escrita, compreensão, raciocínio lógico-matemático ou estratégias de estudo",
      "Famílias que precisam compreender melhor o perfil de aprendizagem e os fatores que interferem no desempenho escolar",
      "Casos em que a escola observa dificuldades atencionais, acadêmicas ou de organização que exigem investigação",
      "Demandas relacionadas a dislexia, discalculia, dificuldades de leitura e escrita ou alterações de aprendizagem",
    ],
    comoFunciona: [
      {
        titulo: "História de desenvolvimento e escolaridade",
        texto:
          "A avaliação começa pela escuta da família e pela compreensão da trajetória escolar, das queixas atuais e das estratégias já tentadas.",
      },
      {
        titulo: "Observação das habilidades acadêmicas",
        texto:
          "São investigadas habilidades relacionadas a leitura, escrita, compreensão, raciocínio lógico-matemático, atenção, memória e estratégias de aprendizagem.",
      },
      {
        titulo: "Análise cognitiva e pedagógica",
        texto:
          "Os dados são organizados para identificar habilidades preservadas, áreas de dificuldade e fatores que podem estar interferindo no desempenho escolar.",
      },
      {
        titulo: "Diálogo com a escola",
        texto:
          "Quando necessário e autorizado, informações escolares, cadernos, atividades e relatos de professores ajudam a compreender como a dificuldade aparece na prática.",
      },
      {
        titulo: "Orientações para intervenção",
        texto:
          "Ao final, a família recebe direcionamentos para estratégias, adaptações, encaminhamentos e possíveis acompanhamentos conforme o perfil do estudante.",
      },
    ],
    info: [
      { rotulo: "Público", valor: "Crianças e adolescentes" },
      { rotulo: "Áreas", valor: "Leitura, escrita e matemática" },
      { rotulo: "Objetivo", valor: "Compreender o perfil de aprendizagem" },
      { rotulo: "Diálogo", valor: "Família e escola quando necessário" },
    ],
    texto: [
      "A Avaliação Neuropsicopedagógica busca compreender as dificuldades relacionadas ao processo de aprendizagem, considerando aspectos cognitivos e pedagógicos.",
      "O objetivo é identificar quais habilidades estão desenvolvidas, quais apresentam dificuldades e quais fatores podem estar interferindo no desempenho escolar.",
      "A partir dessa compreensão, a família e a escola conseguem olhar para além da nota ou da queixa e pensar em estratégias mais direcionadas para o estudante.",
    ],
  },
  {
    slug: "fonoaudiologia-infantil",
    titulo: "Fonoaudiologia Infantil",
    etiqueta: "Fala e linguagem",
    resumo:
      "Atendimento para desenvolvimento da fala, linguagem, comunicação, voz, motricidade orofacial e alimentação na infância.",
    imagem: atendimentoFonoaudiologia,
    imagemHero: heroAtendimentoFonoaudiologia,
    imagemSecundaria: atendimentoFonoaudiologiaAmbiente,
    paraQuem: [
      "Bebês, crianças e adolescentes com atrasos ou dificuldades no desenvolvimento da comunicação",
      "Crianças com atraso de fala e linguagem, trocas de sons, omissões ou dificuldade de articulação",
      "Famílias que percebem dificuldades de compreensão, expressão, interação comunicativa ou participação social",
      "Demandas de voz, motricidade orofacial, alimentação ou outras funções relacionadas à atuação fonoaudiológica",
      "Casos associados a transtornos do neurodesenvolvimento que precisam de acompanhamento fonoaudiológico",
    ],
    comoFunciona: [
      {
        titulo: "Avaliação inicial",
        texto:
          "O atendimento começa com uma avaliação para compreender habilidades já adquiridas, necessidades atuais, histórico de desenvolvimento e áreas que precisam de intervenção.",
      },
      {
        titulo: "Plano terapêutico individualizado",
        texto:
          "A terapia é planejada de acordo com a idade, as demandas da criança e os objetivos definidos a partir da avaliação.",
      },
      {
        titulo: "Atividades adequadas à infância",
        texto:
          "São utilizados recursos lúdicos, brincadeiras, jogos, objetos e propostas terapêuticas para estimular comunicação, fala, linguagem e desenvolvimento.",
      },
      {
        titulo: "Trabalho das funções necessárias",
        texto:
          "Conforme a demanda, o atendimento pode envolver fala, linguagem, voz, motricidade orofacial, alimentação, compreensão, expressão e interação comunicativa.",
      },
      {
        titulo: "Orientações para casa e escola",
        texto:
          "A família pode receber orientações para ampliar oportunidades de comunicação na rotina e, quando necessário, a escola também pode ser orientada.",
      },
    ],
    info: [
      { rotulo: "Público", valor: "Bebês, crianças e adolescentes" },
      { rotulo: "Áreas", valor: "Fala, linguagem, voz e alimentação" },
      { rotulo: "Recursos", valor: "Atividades adequadas à idade" },
      { rotulo: "Foco", valor: "Comunicação e desenvolvimento" },
    ],
    texto: [
      "A Fonoaudiologia Infantil atua no desenvolvimento da comunicação e das habilidades relacionadas à fala, linguagem, voz, motricidade orofacial e alimentação, conforme as necessidades de cada criança.",
      "O atendimento começa com uma avaliação para compreender as habilidades já adquiridas, identificar áreas que precisam de intervenção e planejar propostas adequadas à idade.",
      "Na infância, o trabalho precisa fazer sentido para a criança: por isso, recursos lúdicos são usados com intenção terapêutica e objetivos bem definidos.",
    ],
  },
  {
    slug: "fonoaudiologia-adolescentes-adultos-idosos",
    titulo: "Fonoaudiologia para Adolescentes, Adultos e Idosos",
    etiqueta: "Comunicação em diferentes fases da vida",
    resumo:
      "Acompanhamento para fala, linguagem, comunicação, voz, motricidade orofacial e deglutição em diferentes fases da vida.",
    imagem: atendimentoFonoaudiologiaAmbiente,
    imagemHero: heroAtendimentoFonoaudiologia,
    imagemSecundaria: atendimentoFonoaudiologia,
    paraQuem: [
      "Adolescentes, adultos e idosos com alterações de fala, linguagem, comunicação, voz ou articulação",
      "Pessoas com dificuldades de motricidade orofacial, deglutição ou funções relacionadas à comunicação e alimentação",
      "Adultos e idosos com mudanças comunicativas associadas ao envelhecimento ou a condições neurológicas",
      "Pacientes que precisam de um plano terapêutico direcionado à rotina, segurança, autonomia e participação social",
      "Famílias que precisam compreender como apoiar comunicação e funcionalidade no cotidiano",
    ],
    comoFunciona: [
      {
        titulo: "Avaliação individualizada",
        texto:
          "O atendimento começa com uma avaliação que considera história, rotina, queixas atuais, contexto de saúde, dificuldades apresentadas e objetivos do paciente.",
      },
      {
        titulo: "Definição do plano terapêutico",
        texto:
          "A partir da avaliação, é elaborado um plano direcionado às necessidades específicas de cada fase da vida.",
      },
      {
        titulo: "Trabalho das funções afetadas",
        texto:
          "O acompanhamento pode envolver fala, linguagem, comunicação, voz, motricidade orofacial, articulação, deglutição e funcionalidade comunicativa.",
      },
      {
        titulo: "Orientações práticas",
        texto:
          "As orientações são construídas considerando atividades diárias, rotina familiar, objetivos pessoais e possibilidades reais do paciente.",
      },
      {
        titulo: "Acompanhamento integrado",
        texto:
          "Em adultos e idosos, o cuidado pode dialogar com outros profissionais quando alterações neurológicas, envelhecimento ou questões de saúde interferem na comunicação e na deglutição.",
      },
    ],
    info: [
      { rotulo: "Público", valor: "Adolescentes, adultos e idosos" },
      { rotulo: "Áreas", valor: "Fala, voz, linguagem e deglutição" },
      { rotulo: "Plano", valor: "Direcionado à rotina do paciente" },
      { rotulo: "Foco", valor: "Comunicação, segurança e funcionalidade" },
    ],
    texto: [
      "A Fonoaudiologia também atua em diferentes fases da vida, acompanhando adolescentes, adultos e idosos em demandas relacionadas à fala, linguagem, comunicação, voz, motricidade orofacial e deglutição.",
      "O atendimento começa com uma avaliação individualizada, considerando a história, a rotina e as dificuldades apresentadas pelo paciente.",
      "A proposta é construir um plano terapêutico que respeite a fase da vida, os objetivos pessoais e as necessidades funcionais de cada pessoa.",
    ],
  },
  {
    slug: "estimulacao-cognitiva-idosos",
    titulo: "Estimulação Cognitiva para Idosos",
    etiqueta: "Cognição e autonomia",
    resumo:
      "Atividades planejadas para estimular memória, atenção, linguagem, raciocínio e autonomia no envelhecimento.",
    imagem: atendimentoNeuropsicologiaAmbiente,
    imagemSecundaria: atendimentoNeuropsicopedagogiaAmbiente,
    paraQuem: [
      "Idosos que desejam manter a mente ativa e estimular habilidades cognitivas de forma significativa",
      "Pessoas com queixas de memória, atenção, linguagem, organização, orientação ou mudanças cognitivas",
      "Famílias que buscam acompanhamento para favorecer autonomia, funcionalidade e participação na rotina",
      "Idosos que precisam de atividades planejadas conforme história, interesses, ritmo e possibilidades",
      "Casos em que sinais de alterações cognitivas precisam caminhar junto à investigação e acompanhamento profissional adequado",
    ],
    comoFunciona: [
      {
        titulo: "Compreensão da história",
        texto:
          "As atividades são escolhidas a partir da idade, história de vida, interesses, rotina, necessidades e objetivos de cada paciente.",
      },
      {
        titulo: "Planejamento das atividades",
        texto:
          "O acompanhamento organiza propostas que estimulem funções cognitivas de modo adequado, sem infantilizar o idoso ou reduzir o cuidado a exercícios repetitivos.",
      },
      {
        titulo: "Estimulação das funções cognitivas",
        texto:
          "Podem ser estimuladas memória, atenção, linguagem, raciocínio, orientação temporal e espacial, planejamento, organização e resolução de problemas.",
      },
      {
        titulo: "Conexão com a rotina",
        texto:
          "As propostas buscam relação com atividades reais e significativas, favorecendo autonomia, funcionalidade e participação no cotidiano.",
      },
      {
        titulo: "Acompanhamento e orientação",
        texto:
          "Quando existem sinais de alterações importantes, a estimulação deve estar associada à investigação e ao cuidado adequado por profissionais de saúde.",
      },
    ],
    info: [
      { rotulo: "Público", valor: "Idosos" },
      { rotulo: "Habilidades", valor: "Memória, atenção e linguagem" },
      { rotulo: "Objetivo", valor: "Autonomia e funcionalidade" },
      { rotulo: "Abordagem", valor: "Atividades significativas e individualizadas" },
    ],
    texto: [
      "A Estimulação Cognitiva é um acompanhamento voltado ao público idoso, com atividades planejadas para estimular diferentes funções cognitivas e favorecer a manutenção da autonomia e da funcionalidade.",
      "O atendimento considera idade, história, interesses e necessidades de cada paciente, buscando proporcionar estímulos de maneira significativa e adequada à rotina.",
      "Mais do que treinar memória, o cuidado olha para a pessoa, sua história e o que precisa ser preservado ou fortalecido para viver melhor o envelhecimento.",
    ],
  },
];

export type ConteudoAtendimento = {
  chamada: string;
  tituloApresentacao: string;
  introducao: string;
  tituloSituacoes: string;
  textoSituacoes: string;
  sinais: string[];
  tituloObjetivos: string;
  textoObjetivos: string;
  objetivos: string[];
  tituloEtapas: string;
  textoEtapas: string;
  tituloImagem: string;
  textoImagem: string;
  participacao: { titulo: string; texto: string };
  perguntas: { pergunta: string; resposta: string }[];
};

export const conteudosAtendimentos: Record<string, ConteudoAtendimento> = {
  "avaliacao-neuropsicologica": {
    chamada:
      "Entenda, com profundidade e acolhimento, como a pessoa aprende, memoriza, presta atenção, se organiza, se comporta e responde aos desafios da rotina.",
    tituloApresentacao: "Uma avaliação para transformar dúvida em direção",
    introducao:
      "O Método de Avaliação Neuropsicológica Evoluta organiza informações clínicas, instrumentos, observação e contexto de vida para construir uma leitura ampla do funcionamento cognitivo, emocional e comportamental. O foco é compreender a pessoa por inteiro: suas dificuldades, potencialidades, história, ambiente familiar, percurso escolar ou profissional e demandas atuais.",
    tituloSituacoes: "Quando procurar avaliação neuropsicológica",
    textoSituacoes:
      "A avaliação faz sentido quando há dúvidas persistentes sobre desenvolvimento, aprendizagem, atenção, memória, comportamento ou mudanças cognitivas. Ela ajuda a organizar o que está acontecendo e a indicar caminhos mais claros para intervenção, acompanhamento ou adaptações.",
    sinais: [
      "Dúvidas sobre desenvolvimento infantil, autonomia, comportamento, linguagem ou interação",
      "Queixas de atenção, concentração, memória, organização, raciocínio ou funções executivas",
      "Dificuldades escolares, acadêmicas ou profissionais que se repetem mesmo com apoio",
      "Mudanças cognitivas, emocionais ou comportamentais que precisam ser compreendidas com cuidado",
      "Investigação de TDAH, TEA, transtornos específicos da aprendizagem, deficiência intelectual ou outras condições do neurodesenvolvimento",
    ],
    tituloObjetivos: "O que a avaliação ajuda a esclarecer",
    textoObjetivos:
      "O processo busca reunir dados suficientes para explicar como a pessoa funciona, quais habilidades estão preservadas, quais áreas exigem atenção e quais próximos passos podem favorecer desenvolvimento, aprendizagem e qualidade de vida.",
    objetivos: [
      "Compreender atenção, memória, linguagem, raciocínio, aprendizagem e velocidade de processamento",
      "Avaliar funções executivas, habilidades visuoespaciais e aspectos comportamentais e emocionais",
      "Relacionar resultados técnicos à rotina, à história do paciente e aos ambientes em que ele vive",
      "Oferecer devolutiva clara para família, paciente, escola ou profissionais envolvidos",
      "Orientar encaminhamentos, intervenções e adaptações possíveis, sem reduzir a pessoa a um diagnóstico",
    ],
    tituloEtapas: "Um processo estruturado, mas nunca padronizado",
    textoEtapas:
      "A avaliação segue uma sequência cuidadosa, porém cada percurso é definido conforme idade, motivo da busca, história do paciente e complexidade da demanda.",
    tituloImagem: "Método Evoluta em prática",
    textoImagem:
      "Cada informação coletada é analisada em conjunto para que a devolutiva seja útil, compreensível e conectada à vida real do paciente.",
    participacao: {
      titulo: "Família, escola e profissionais podem compor a compreensão",
      texto:
        "Quando necessário e autorizado, a avaliação pode incluir relatos da família, informações escolares e diálogo com profissionais que acompanham o paciente. Essa integração ajuda a observar a pessoa em diferentes contextos e torna os direcionamentos mais precisos.",
    },
    perguntas: [
      { pergunta: "A avaliação neuropsicológica é igual para todos?", resposta: "Não. Instrumentos, entrevistas e procedimentos são escolhidos conforme idade, história, rotina e motivo da avaliação. O processo é individualizado do início à devolutiva." },
      { pergunta: "A avaliação serve apenas para fechar diagnóstico?", resposta: "Não. Ela pode contribuir para hipóteses diagnósticas, mas seu valor principal é compreender o funcionamento da pessoa e orientar intervenções, adaptações e encaminhamentos." },
      { pergunta: "Quais funções podem ser avaliadas?", resposta: "Podem ser investigadas atenção, memória, linguagem, raciocínio, aprendizagem, funções executivas, velocidade de processamento, habilidades visuoespaciais e aspectos emocionais e comportamentais." },
      { pergunta: "A escola ou outros profissionais podem participar?", resposta: "Quando necessário e autorizado, informações da escola e de profissionais envolvidos ajudam a entender melhor os contextos em que as dificuldades aparecem." },
    ],
  },
  "psicologia-infantil-tcc": {
    chamada:
      "Indicado para crianças e adolescentes, este acompanhamento psicológico acolhe emoções, ajuda a compreender comportamentos e desenvolve habilidades que fazem diferença na rotina.",
    tituloApresentacao: "Terapia infantil com acolhimento, vínculo e estratégia",
    introducao:
      "Na Terapia Cognitivo-Comportamental, a criança é ajudada a perceber relações entre pensamentos, emoções e comportamentos de uma forma compatível com sua idade. O atendimento utiliza recursos lúdicos, conversas, histórias, jogos e atividades estruturadas para favorecer expressão, compreensão emocional e aprendizagem de novas formas de lidar com desafios.",
    tituloSituacoes: "Quando a psicologia infantil pode ser indicada",
    textoSituacoes:
      "A busca costuma acontecer quando emoções, comportamentos ou dificuldades de socialização começam a afetar a convivência familiar, o desempenho escolar, os vínculos ou a autonomia da criança.",
    sinais: [
      "Ansiedade, medos, insegurança, baixa autoestima ou preocupação excessiva",
      "Irritabilidade, choro frequente, explosões emocionais ou baixa tolerância à frustração",
      "Dificuldades de socialização, comunicação, resolução de conflitos ou adaptação a mudanças",
      "Comportamentos desafiadores, alterações de rotina ou mudanças percebidas pela família e pela escola",
      "Questões emocionais da infância e adolescência que precisam de escuta, organização e acompanhamento",
    ],
    tituloObjetivos: "Habilidades emocionais que podem ser levadas para a vida",
    textoObjetivos:
      "O acompanhamento busca ajudar a criança a nomear o que sente, compreender suas reações, ampliar recursos emocionais e construir estratégias que possam ser usadas também fora da sessão.",
    objetivos: [
      "Favorecer reconhecimento de emoções, pensamentos e comportamentos",
      "Desenvolver estratégias de regulação emocional e enfrentamento",
      "Fortalecer autoestima, comunicação, habilidades sociais e resolução de problemas",
      "Trabalhar tolerância à frustração, adaptação a mudanças e construção de autonomia emocional",
      "Orientar responsáveis para aplicar estratégias de forma possível e respeitosa no cotidiano",
    ],
    tituloEtapas: "Um processo terapêutico adaptado à infância",
    textoEtapas:
      "A terapia começa pela compreensão da demanda e segue com intervenções ajustadas à idade, ao vínculo terapêutico e aos objetivos construídos com a família.",
    tituloImagem: "O brincar como caminho terapêutico",
    textoImagem:
      "Os recursos lúdicos não são apenas entretenimento: eles ajudam a criança a expressar sentimentos, experimentar estratégias e construir repertórios emocionais e sociais.",
    participacao: {
      titulo: "A família sustenta parte importante da mudança",
      texto:
        "Os responsáveis participam em momentos combinados para compreender o processo e levar estratégias para a rotina. Esse alinhamento ajuda a criança a encontrar coerência entre o que aprende na terapia e o que vive em casa, na escola e nas relações.",
    },
    perguntas: [
      { pergunta: "A criança precisa saber explicar o que sente?", resposta: "Não. O atendimento usa recursos compatíveis com a idade para favorecer vínculo, expressão e compreensão emocional mesmo quando a criança ainda não consegue verbalizar tudo." },
      { pergunta: "Os responsáveis participam do processo?", resposta: "Sim, em momentos definidos conforme a necessidade. A orientação familiar ajuda a transformar estratégias terapêuticas em atitudes possíveis no cotidiano." },
      { pergunta: "A psicoterapia infantil é só conversa?", resposta: "Não. A conversa pode fazer parte, mas o atendimento também usa jogos, brincadeiras, histórias, atividades estruturadas e estratégias da Terapia Cognitivo-Comportamental." },
      { pergunta: "Quando procurar ajuda psicológica para uma criança?", resposta: "Quando emoções ou comportamentos passam a gerar sofrimento, prejuízo na rotina, conflitos frequentes ou dificuldade de adaptação em casa, na escola ou nas relações." },
    ],
  },
  "intervencao-aba": {
    chamada:
      "Uma intervenção comportamental planejada para desenvolver habilidades, ampliar autonomia e favorecer participação em casa, na escola e nos demais ambientes.",
    tituloApresentacao: "Intervenção baseada em ciência e conectada à rotina",
    introducao:
      "A intervenção baseada em Análise do Comportamento Aplicada parte da observação do repertório atual da pessoa e define objetivos funcionais para desenvolver novas habilidades. O trabalho pode envolver comunicação, interação social, autonomia, brincadeiras, seguimento de instruções, habilidades acadêmicas e manejo de comportamentos que dificultam aprendizagem ou participação.",
    tituloSituacoes: "Quando buscar intervenção baseada em ABA",
    textoSituacoes:
      "O atendimento pode ser indicado quando a pessoa precisa aprender habilidades de forma mais estruturada, ampliar autonomia ou reduzir barreiras que dificultam comunicação, convivência, segurança e participação nas atividades.",
    sinais: [
      "Dificuldades de comunicação funcional, interação social ou participação em brincadeiras e atividades",
      "Necessidade de desenvolver autonomia, habilidades de vida diária e comportamentos adaptativos",
      "Dificuldade para seguir instruções, iniciar tarefas, participar da rotina ou ampliar habilidades acadêmicas iniciais",
      "Comportamentos que interferem na aprendizagem, na convivência, na segurança ou no acesso a novos ambientes",
      "Acompanhamento de pessoas com TEA ou outras demandas do desenvolvimento e comportamento, conforme avaliação individual",
    ],
    tituloObjetivos: "Habilidades que precisam aparecer na vida real",
    textoObjetivos:
      "As metas são definidas com clareza para que o acompanhamento não fique restrito à sessão. A intenção é ensinar repertórios úteis, observáveis e possíveis de serem praticados nos ambientes em que a pessoa vive.",
    objetivos: [
      "Ampliar comunicação, interação social, autonomia e comportamentos adaptativos",
      "Ensinar habilidades em passos graduais, respeitando o repertório atual do paciente",
      "Trabalhar brincadeiras, seguimento de instruções, habilidades acadêmicas e vida diária quando indicado",
      "Reduzir barreiras que dificultam participação, aprendizagem, convivência ou segurança",
      "Orientar responsáveis e alinhar estratégias com escola e outros profissionais quando necessário",
    ],
    tituloEtapas: "Do repertório atual ao plano de intervenção",
    textoEtapas:
      "O processo começa pela identificação das habilidades já desenvolvidas e daquelas que precisam ser ampliadas. Depois, as metas são organizadas em um plano individualizado e acompanhadas ao longo do tempo.",
    tituloImagem: "Intervenção com função, não apenas exercício",
    textoImagem:
      "Cada estratégia é pensada para favorecer habilidades que tenham sentido na rotina, como comunicar necessidades, participar de atividades, ganhar autonomia e interagir com mais segurança.",
    participacao: {
      titulo: "Consistência entre clínica, família e escola",
      texto:
        "Quando indicado, responsáveis, escola e outros profissionais recebem orientações para que as habilidades trabalhadas possam ser praticadas em diferentes contextos. Esse alinhamento ajuda a tornar o processo mais coerente e funcional.",
    },
    perguntas: [
      { pergunta: "ABA é apenas para autismo?", resposta: "A ABA é amplamente utilizada no acompanhamento de pessoas com TEA, mas também pode ser indicada para outras demandas do desenvolvimento e do comportamento após avaliação individual." },
      { pergunta: "Como as metas são definidas?", resposta: "As metas partem da identificação do repertório atual, das prioridades funcionais e dos objetivos compartilhados com a família, sempre considerando a rotina do paciente." },
      { pergunta: "A família recebe orientação?", resposta: "Sim, quando necessário. A orientação aos responsáveis ajuda a tornar as estratégias mais consistentes nos ambientes em que a pessoa vive." },
      { pergunta: "O atendimento trabalha apenas comportamento?", resposta: "Não. O comportamento é compreendido dentro da rotina e pode envolver comunicação, autonomia, interação social, aprendizagem, habilidades adaptativas e participação." },
    ],
  },
  "avaliacao-neuropsicopedagogica": {
    chamada:
      "Indicada principalmente para crianças e adolescentes, esta avaliação ajuda a entender como o estudante aprende, quais habilidades precisam de apoio e quais estratégias podem orientar família e escola.",
    tituloApresentacao: "Antes de intervir, é preciso compreender o aprender",
    introducao:
      "A Avaliação Neuropsicopedagógica investiga dificuldades relacionadas ao processo de aprendizagem a partir de aspectos cognitivos e pedagógicos. O processo observa leitura, escrita, compreensão, raciocínio lógico-matemático, atenção, memória, estratégias de aprendizagem e habilidades acadêmicas, conectando essas informações à história escolar do estudante.",
    tituloSituacoes: "Quando investigar dificuldades de aprendizagem",
    textoSituacoes:
      "A avaliação é indicada quando dificuldades escolares persistem, quando há atraso na aquisição de habilidades acadêmicas ou quando família e escola precisam compreender por que o estudante não está avançando como esperado.",
    sinais: [
      "Dificuldades escolares persistentes ou baixo rendimento mesmo com apoio",
      "Atrasos ou barreiras em leitura, escrita, compreensão ou raciocínio lógico-matemático",
      "Dificuldades de atenção, memória, organização, planejamento ou estratégias de estudo",
      "Suspeitas de dislexia, discalculia, dificuldades de leitura e escrita ou alterações de aprendizagem",
      "Necessidade de orientar intervenções, adaptações escolares e próximos passos com mais clareza",
    ],
    tituloObjetivos: "Direcionamentos claros para família, escola e intervenção",
    textoObjetivos:
      "O objetivo é identificar habilidades desenvolvidas, áreas de dificuldade e fatores que podem estar interferindo no desempenho escolar, para que os encaminhamentos sejam mais assertivos.",
    objetivos: [
      "Mapear habilidades cognitivas e acadêmicas envolvidas no processo de aprendizagem",
      "Observar leitura, escrita, compreensão, matemática, atenção, memória e estratégias de aprendizagem",
      "Diferenciar defasagens escolares, dificuldades específicas e necessidades de acompanhamento",
      "Transformar os resultados em orientações práticas para família e escola",
      "Indicar estratégias, adaptações e possíveis intervenções conforme o perfil do estudante",
    ],
    tituloEtapas: "Uma investigação da história escolar e das habilidades acadêmicas",
    textoEtapas:
      "O percurso envolve escuta da família, análise da trajetória escolar, avaliação de habilidades relacionadas ao aprender e organização dos resultados em orientações possíveis.",
    tituloImagem: "Olhar para além da nota e da queixa",
    textoImagem:
      "A avaliação busca compreender o que está por trás da dificuldade: quais recursos o estudante já tem, quais habilidades precisam de apoio e quais caminhos podem favorecer sua aprendizagem.",
    participacao: {
      titulo: "Família e escola ajudam a tornar a avaliação mais precisa",
      texto:
        "Relatos, cadernos, atividades e informações escolares podem compor o processo quando necessário. Esse diálogo facilita orientações aplicáveis à rotina do estudante e evita que a dificuldade seja vista apenas como falta de esforço.",
    },
    perguntas: [
      { pergunta: "A avaliação neuropsicopedagógica é reforço escolar?", resposta: "Não. Ela não tem como objetivo repetir conteúdos escolares, mas compreender habilidades e dificuldades relacionadas ao processo de aprendizagem." },
      { pergunta: "Ela pode ajudar em suspeitas de dislexia ou discalculia?", resposta: "Pode contribuir para a investigação de dificuldades de leitura, escrita, matemática e outras condições que impactam o desempenho escolar." },
      { pergunta: "A escola pode participar do processo?", resposta: "Quando necessário e autorizado, informações da escola ajudam a compreender melhor o desempenho, a rotina e as estratégias já usadas com o estudante." },
      { pergunta: "O resultado orienta intervenção?", resposta: "Sim. A avaliação organiza informações para orientar estratégias, adaptações, encaminhamentos e possíveis acompanhamentos conforme o perfil de aprendizagem." },
    ],
  },
  "fonoaudiologia-infantil": {
    chamada:
      "Indicado para bebês, crianças e adolescentes, o atendimento fonoaudiológico estimula fala, linguagem, comunicação, voz, motricidade orofacial e alimentação com propostas adequadas à idade.",
    tituloApresentacao: "Comunicação, fala e linguagem desde as primeiras fases",
    introducao:
      "A Fonoaudiologia Infantil acompanha bebês, crianças e adolescentes em demandas relacionadas à comunicação e às habilidades de fala, linguagem, voz, motricidade orofacial e alimentação. A avaliação inicial identifica habilidades já adquiridas e áreas que precisam de intervenção, permitindo um plano terapêutico adequado à idade e à necessidade de cada criança.",
    tituloSituacoes: "Quando procurar fonoaudiologia infantil",
    textoSituacoes:
      "A busca pode acontecer quando há atraso ou dificuldade no desenvolvimento da comunicação, quando a fala não está clara, quando a criança tem dificuldade para compreender ou se expressar, ou quando aparecem demandas ligadas à alimentação e motricidade orofacial.",
    sinais: [
      "Atraso de fala ou linguagem em bebês, crianças e adolescentes",
      "Trocas, omissões, distorções ou dificuldades de articulação dos sons",
      "Dificuldades de comunicação, compreensão, expressão ou interação comunicativa",
      "Demandas de voz, motricidade orofacial, mastigação, alimentação ou funções relacionadas",
      "Necessidades fonoaudiológicas associadas a transtornos do neurodesenvolvimento ou outras condições",
    ],
    tituloObjetivos: "Estimular comunicação de forma intencional e acolhedora",
    textoObjetivos:
      "A terapia busca favorecer habilidades comunicativas e funções relacionadas por meio de atividades planejadas, recursos lúdicos e orientações que ampliem as oportunidades de comunicação na rotina.",
    objetivos: [
      "Estimular fala, linguagem, comunicação funcional, compreensão e expressão",
      "Trabalhar articulação dos sons, clareza da fala e habilidades comunicativas conforme a necessidade",
      "Apoiar funções relacionadas à voz, alimentação e motricidade orofacial quando indicado",
      "Utilizar recursos lúdicos com objetivos terapêuticos bem definidos",
      "Orientar a família e, quando necessário, a escola para favorecer comunicação no cotidiano",
    ],
    tituloEtapas: "Avaliação, plano terapêutico e estímulos adequados à infância",
    textoEtapas:
      "O atendimento começa com uma avaliação individualizada e segue com atividades planejadas de acordo com idade, habilidades já adquiridas, necessidades e objetivos terapêuticos.",
    tituloImagem: "Brincar também é caminho para comunicar",
    textoImagem:
      "Na fonoaudiologia infantil, materiais e brincadeiras são escolhidos para estimular fala, linguagem e interação de forma acolhedora, respeitando o ritmo da criança.",
    participacao: {
      titulo: "A comunicação se fortalece na rotina",
      texto:
        "A família pode receber orientações simples e possíveis para estimular fala, linguagem e comunicação no dia a dia. Quando necessário, a escola também pode participar com estratégias que apoiem a criança em seu ambiente de aprendizagem.",
    },
    perguntas: [
      { pergunta: "Quando procurar fonoaudiologia infantil?", resposta: "Quando atrasos ou dificuldades de fala, linguagem, comunicação, alimentação ou articulação persistem ou interferem na participação da criança." },
      { pergunta: "O atendimento usa brincadeiras?", resposta: "Sim. As atividades são planejadas conforme a idade e podem usar recursos lúdicos, sempre com objetivos terapêuticos definidos." },
      { pergunta: "A fonoaudiologia infantil trabalha alimentação?", resposta: "Pode trabalhar demandas relacionadas à alimentação e motricidade orofacial quando essas necessidades aparecem na avaliação." },
      { pergunta: "A família precisa participar?", resposta: "A participação da família é importante para ampliar oportunidades de comunicação fora da sessão e tornar as orientações mais presentes na rotina." },
    ],
  },
  "fonoaudiologia-adolescentes-adultos-idosos": {
    chamada:
      "Indicado para adolescentes, adultos e idosos, o acompanhamento fonoaudiológico trabalha comunicação, fala, voz, linguagem, motricidade orofacial e deglutição conforme as necessidades de cada fase da vida.",
    tituloApresentacao: "Comunicação e funcionalidade ao longo da vida",
    introducao:
      "A Fonoaudiologia para adolescentes, adultos e idosos considera as demandas de cada fase da vida e acompanha alterações de fala, linguagem, comunicação, voz, motricidade orofacial e deglutição. O atendimento começa com uma avaliação individualizada, observando história, rotina, queixas atuais e objetivos do paciente.",
    tituloSituacoes: "Quando buscar acompanhamento fonoaudiológico",
    textoSituacoes:
      "O atendimento pode ser indicado quando alterações de comunicação, voz, fala, motricidade orofacial ou deglutição interferem na rotina, na autonomia, na segurança, no convívio social ou na qualidade de vida.",
    sinais: [
      "Alterações de voz, fala, linguagem, comunicação, articulação ou clareza da fala",
      "Dificuldades de motricidade orofacial, mastigação, deglutição ou funções relacionadas",
      "Mudanças na comunicação associadas ao envelhecimento ou a condições neurológicas",
      "Impactos na participação social, autonomia, segurança alimentar ou atividades diárias",
      "Necessidade de um plano terapêutico direcionado à rotina e aos objetivos do paciente",
    ],
    tituloObjetivos: "Um plano terapêutico direcionado à rotina do paciente",
    textoObjetivos:
      "A partir da avaliação, o acompanhamento define objetivos compatíveis com as necessidades apresentadas e com as atividades que fazem parte da vida do paciente.",
    objetivos: [
      "Compreender dificuldades de fala, linguagem, comunicação, voz ou deglutição",
      "Trabalhar motricidade orofacial e funções relacionadas quando indicado",
      "Favorecer comunicação funcional, participação social, segurança e autonomia",
      "Construir orientações alinhadas à rotina, à fase da vida e aos objetivos pessoais",
      "Dialogar com outros cuidados de saúde quando alterações neurológicas ou do envelhecimento estiverem presentes",
    ],
    tituloEtapas: "Avaliação individualizada e cuidado direcionado",
    textoEtapas:
      "O processo começa pela compreensão da história e das queixas atuais. Depois, o plano terapêutico é organizado conforme necessidades, rotina e objetivos funcionais.",
    tituloImagem: "A comunicação acompanha todas as fases",
    textoImagem:
      "Em adolescentes, adultos e idosos, o atendimento respeita objetivos pessoais, contexto de saúde, rotina e necessidades funcionais de cada fase.",
    participacao: {
      titulo: "Orientações conectadas à vida cotidiana",
      texto:
        "As orientações são construídas a partir das atividades e necessidades do paciente. Em adultos e idosos, familiares e outros profissionais podem participar quando isso contribui para segurança, funcionalidade e continuidade do cuidado.",
    },
    perguntas: [
      { pergunta: "Adultos também podem fazer fonoaudiologia?", resposta: "Sim. A Fonoaudiologia acompanha adolescentes, adultos e idosos em demandas de fala, linguagem, comunicação, voz, motricidade orofacial e deglutição." },
      { pergunta: "O atendimento é igual ao infantil?", resposta: "Não. A avaliação e o plano terapêutico consideram idade, história, rotina, contexto de saúde e objetivos de cada pessoa." },
      { pergunta: "Pode ser indicado para idosos?", resposta: "Sim. Em idosos, o acompanhamento pode apoiar demandas relacionadas ao envelhecimento, comunicação, deglutição ou condições neurológicas." },
      { pergunta: "A família pode receber orientação?", resposta: "Pode, especialmente quando a rotina, a segurança, a deglutição, a comunicação ou a continuidade das estratégias dependem de apoio no cotidiano." },
    ],
  },
  "estimulacao-cognitiva-idosos": {
    chamada:
      "Voltado ao público idoso, este acompanhamento reúne atividades planejadas para estimular memória, atenção, linguagem, raciocínio e autonomia, respeitando história, ritmo e interesses de cada pessoa.",
    tituloApresentacao: "Estimulação cognitiva com significado, vínculo e respeito",
    introducao:
      "A Estimulação Cognitiva é um acompanhamento voltado ao público idoso, com atividades planejadas para estimular diferentes funções cognitivas e favorecer a manutenção da autonomia e da funcionalidade. As propostas são escolhidas de acordo com idade, história, interesses, rotina e necessidades de cada paciente.",
    tituloSituacoes: "Quando a estimulação cognitiva pode ser indicada",
    textoSituacoes:
      "O acompanhamento pode ser procurado por idosos que desejam manter a mente ativa, por famílias que percebem mudanças cognitivas ou por pessoas que precisam de estímulos adequados para favorecer autonomia e participação na rotina.",
    sinais: [
      "Desejo de manter a mente ativa e estimular habilidades cognitivas no envelhecimento",
      "Queixas de memória, atenção, linguagem, organização, orientação ou planejamento",
      "Mudanças cognitivas percebidas pelo idoso ou pela família",
      "Necessidade de favorecer autonomia, funcionalidade e participação em atividades do cotidiano",
      "Sinais de alterações cognitivas importantes que precisam caminhar junto à investigação e acompanhamento adequado",
    ],
    tituloObjetivos: "Funções cognitivas estimuladas de forma individualizada",
    textoObjetivos:
      "O trabalho busca estimular habilidades importantes para a rotina, sempre respeitando história, interesses, ritmo e possibilidades do idoso.",
    objetivos: [
      "Estimular memória, atenção, linguagem, raciocínio e orientação temporal e espacial",
      "Trabalhar planejamento, organização e resolução de problemas com atividades possíveis",
      "Favorecer manutenção da autonomia, funcionalidade e participação no cotidiano",
      "Proporcionar estímulos significativos, respeitosos e conectados à história de vida",
      "Acompanhar mudanças e orientar investigação profissional quando necessário",
    ],
    tituloEtapas: "Atividades escolhidas a partir da história do idoso",
    textoEtapas:
      "O processo considera idade, interesses, rotina e necessidades. As atividades são planejadas para estimular funções cognitivas de maneira cuidadosa, significativa e conectada à vida cotidiana.",
    tituloImagem: "Cuidado que respeita memória, história e ritmo",
    textoImagem:
      "A estimulação cognitiva valoriza atividades possíveis e significativas, sem infantilizar o idoso e sem reduzir a pessoa a uma queixa de memória.",
    participacao: {
      titulo: "Família e rotina podem apoiar o processo",
      texto:
        "Quando a família participa, as orientações ajudam a ampliar estímulos no cotidiano sem gerar sobrecarga. Quando existem sinais de alterações importantes, o acompanhamento deve caminhar junto à investigação e aos cuidados profissionais adequados.",
    },
    perguntas: [
      { pergunta: "Estimulação cognitiva é indicada apenas quando há perda de memória?", resposta: "Não. Ela também pode ser procurada por idosos que desejam manter habilidades cognitivas ativas e preservar autonomia." },
      { pergunta: "Ela substitui investigação médica ou neuropsicológica?", resposta: "Não. Quando existem sinais de alterações importantes, a estimulação deve estar associada à investigação e ao acompanhamento adequado." },
      { pergunta: "As atividades são iguais para todos os idosos?", resposta: "Não. As propostas são escolhidas de acordo com história, interesses, rotina, necessidades e possibilidades de cada paciente." },
      { pergunta: "A família pode participar?", resposta: "Pode. A família pode receber orientações para apoiar estímulos no cotidiano de forma respeitosa, possível e sem sobrecarregar o idoso." },
    ],
  },
};

export const destaques = [
  {
    titulo: "Equipe multidisciplinar",
    texto:
      "Psicologia, neuropsicologia, neuropsicopedagogia, fonoaudiologia e ABA atuando de forma integrada.",
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
    slug: "novas-vagas-avaliacao-neuropsicologica",
    data: "Setembro de 2026",
    titulo: "Novas vagas para avaliação neuropsicológica",
    texto:
      "Abertura de vagas para processos de avaliação com início em setembro, nos períodos da manhã e da tarde.",
    etiqueta: "Agenda",
    paragrafos: [
      "A agenda de avaliação neuropsicológica foi ampliada e novas vagas estão disponíveis para início em setembro, com horários nos períodos da manhã e da tarde.",
      "O processo acontece em encontros sequenciais, com entrevista inicial, aplicação de instrumentos, conversa com a escola quando necessário e devolutiva às famílias.",
      "Para verificar a disponibilidade de horários e entender como funciona cada etapa, fale com a equipe Evoluta.",
    ],
  },
  {
    slug: "turma-avaliacao-neuropsicologica-na-pratica",
    data: "Agosto de 2026",
    titulo: "Turma de “Avaliação neuropsicológica na prática”",
    texto:
      "Inscrições abertas para a nova turma online, com encontros ao vivo e gravações liberadas por seis meses.",
    etiqueta: "Cursos",
    paragrafos: [
      "Estão abertas as inscrições para a nova turma online do curso “Avaliação neuropsicológica na prática”, voltada a profissionais que desejam estruturar seus processos de avaliação.",
      "Os encontros são ao vivo, com espaço para discussão de casos, e as gravações ficam liberadas por seis meses após o término da turma.",
      "As vagas são limitadas para garantir a troca entre os participantes. Entre em contato para receber o conteúdo completo e as datas.",
    ],
  },
  {
    slug: "lancamentos-de-2026",
    data: "Julho de 2026",
    titulo: "Lançamentos de 2026",
    texto:
      "Duas novas obras em coautoria: “Psicologia Clínica: o que não te ensinaram na universidade” e “TDAH na Escola”.",
    etiqueta: "Publicações",
    paragrafos: [
      "Duas novas obras em coautoria chegam em 2026: “Psicologia Clínica: o que não te ensinaram na universidade” e “TDAH na Escola”.",
      "Os textos reúnem prática clínica e pesquisa, com foco em situações reais de atendimento e no cotidiano escolar de crianças e adolescentes.",
      "Assim que as informações de venda estiverem confirmadas, elas serão divulgadas por aqui e nas redes da clínica.",
    ],
  },
  {
    slug: "orientacao-para-equipes-escolares",
    data: "Junho de 2026",
    titulo: "Orientação para equipes escolares",
    texto:
      "Encontro de orientação sobre adaptações em sala de aula realizado com a equipe de uma escola parceira.",
    etiqueta: "Escolas",
    paragrafos: [
      "Um encontro de orientação foi realizado com a equipe pedagógica de uma escola parceira, com foco em adaptações possíveis dentro da sala de aula.",
      "Foram discutidas estratégias de organização das atividades, formas de apoiar a atenção e o uso de combinados simples que ajudam alunos com diferentes perfis de aprendizagem.",
      "Escolas interessadas em receber um encontro semelhante podem entrar em contato para conhecer os formatos disponíveis.",
    ],
  },
];

