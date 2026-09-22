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
      "Processo individualizado para compreender como a pessoa pensa, aprende, memoriza, presta atenção e se comporta.",
    imagem: atendimentoNeuropsicologia,
    imagemSecundaria: atendimentoNeuropsicologiaAmbiente,
    paraQuem: [
      "Crianças, adolescentes, adultos e idosos, conforme a demanda apresentada",
      "Pessoas com dúvidas sobre desenvolvimento, aprendizagem, atenção, memória ou comportamento",
      "Famílias que precisam compreender melhor dificuldades cognitivas, emocionais ou escolares",
      "Casos que exigem orientações e encaminhamentos para próximos passos",
    ],
    comoFunciona: [
      {
        titulo: "Entrevista detalhada",
        texto:
          "O processo começa com uma conversa sobre história de desenvolvimento, rotina, escolaridade, contexto familiar, principais dificuldades e motivo da avaliação.",
      },
      {
        titulo: "Escolha dos instrumentos",
        texto:
          "A partir da investigação inicial, são definidos os testes, escalas e procedimentos mais adequados para cada caso.",
      },
      {
        titulo: "Avaliação das funções",
        texto:
          "Podem ser observadas atenção, memória, linguagem, raciocínio, aprendizagem, funções executivas, velocidade de processamento e aspectos emocionais.",
      },
      {
        titulo: "Integração dos resultados",
        texto:
          "Os dados são analisados de forma integrada, considerando a história da pessoa e os diferentes contextos em que ela vive.",
      },
      {
        titulo: "Devolutiva e orientações",
        texto:
          "Ao final, a família ou o paciente recebe uma devolutiva individualizada, com orientações e possíveis encaminhamentos.",
      },
    ],
    info: [
      { rotulo: "Público", valor: "Crianças, adolescentes, adultos e idosos" },
      { rotulo: "Método", valor: "Avaliação Neuropsicológica Evoluta" },
      { rotulo: "Entrega", valor: "Devolutiva individualizada" },
      { rotulo: "Formato", valor: "Presencial" },
    ],
    texto: [
      "Na Clínica Evoluta, a Avaliação Neuropsicológica é realizada por meio do Método de Avaliação Neuropsicológica Evoluta, metodologia própria desenvolvida por Jéssica Pelissari a partir de sua experiência clínica.",
      "Mais do que aplicar testes, o atendimento busca compreender como a pessoa pensa, aprende, memoriza, presta atenção, resolve problemas, se comporta e lida com diferentes situações.",
    ],
  },
  {
    slug: "psicologia-infantil-tcc",
    titulo: "Psicologia Infantil – Terapia Cognitivo-Comportamental",
    etiqueta: "Psicoterapia infantil",
    resumo:
      "Espaço seguro e acolhedor para a criança compreender emoções, pensamentos e comportamentos.",
    imagem: atendimentoPsicoterapia,
    imagemSecundaria: atendimentoPsicoterapiaAmbiente,
    paraQuem: [
      "Crianças e adolescentes com dificuldades emocionais, comportamentais ou sociais",
      "Famílias que observam ansiedade, medos, insegurança, irritabilidade ou baixa autoestima",
      "Crianças com dificuldades de adaptação, socialização ou mudanças de comportamento",
      "Responsáveis que precisam de orientação para aplicar estratégias no cotidiano",
    ],
    comoFunciona: [
      {
        titulo: "Compreensão inicial",
        texto:
          "Nos primeiros encontros, são compreendidas as principais dificuldades da criança e os contextos em que elas aparecem.",
      },
      {
        titulo: "Atendimento adaptado à idade",
        texto:
          "As sessões utilizam recursos lúdicos e estratégias terapêuticas adequadas ao nível de desenvolvimento da criança.",
      },
      {
        titulo: "Trabalho de habilidades",
        texto:
          "Podem ser trabalhadas regulação emocional, comunicação, habilidades sociais, autoestima, tolerância à frustração e resolução de problemas.",
      },
      {
        titulo: "Orientação aos responsáveis",
        texto:
          "A participação dos responsáveis ajuda a levar as estratégias para a rotina familiar, escolar e social.",
      },
    ],
    info: [
      { rotulo: "Público", valor: "Crianças e adolescentes" },
      { rotulo: "Abordagem", valor: "Terapia Cognitivo-Comportamental" },
      { rotulo: "Recursos", valor: "Estratégias terapêuticas e lúdicas" },
      { rotulo: "Formato", valor: "Presencial" },
    ],
    texto: [
      "A Psicoterapia Infantil, com abordagem baseada na Terapia Cognitivo-Comportamental, oferece à criança um espaço seguro e acolhedor para compreender suas emoções, pensamentos e comportamentos.",
      "O atendimento é adaptado à idade e ao nível de desenvolvimento, utilizando recursos lúdicos e estratégias que facilitam a expressão e a aprendizagem de novas habilidades.",
    ],
  },
  {
    slug: "intervencao-aba",
    titulo: "Psicologia com Intervenção Baseada em ABA",
    etiqueta: "Análise do Comportamento Aplicada",
    resumo:
      "Intervenção individualizada para favorecer aquisição de habilidades, autonomia, comunicação e participação nas atividades.",
    imagem: atendimentoAba,
    imagemSecundaria: atendimentoAbaAmbiente,
    paraQuem: [
      "Pessoas com Transtorno do Espectro Autista e outras demandas do desenvolvimento",
      "Crianças e adolescentes que precisam ampliar comunicação, autonomia e interação social",
      "Famílias que buscam um plano individualizado de intervenção comportamental",
      "Casos que exigem orientação aos responsáveis e alinhamento com outros ambientes",
    ],
    comoFunciona: [
      {
        titulo: "Identificação do repertório",
        texto:
          "Primeiramente, são observadas as habilidades já desenvolvidas e aquelas que precisam ser ampliadas.",
      },
      {
        titulo: "Plano individualizado",
        texto:
          "Os objetivos são definidos de acordo com o repertório atual, as necessidades e as prioridades de cada pessoa.",
      },
      {
        titulo: "Intervenção estruturada",
        texto:
          "O atendimento pode trabalhar comunicação, interação social, autonomia, brincadeiras, seguimento de instruções e habilidades acadêmicas.",
      },
      {
        titulo: "Orientação e alinhamento",
        texto:
          "Quando necessário, são feitas orientações aos responsáveis e alinhamentos com outros profissionais e ambientes frequentados pelo paciente.",
      },
    ],
    info: [
      { rotulo: "Público", valor: "Crianças, adolescentes e adultos" },
      { rotulo: "Base", valor: "Análise do Comportamento Aplicada" },
      { rotulo: "Foco", valor: "Habilidades, autonomia e comunicação" },
      { rotulo: "Formato", valor: "Presencial" },
    ],
    texto: [
      "A intervenção baseada em Análise do Comportamento Aplicada utiliza princípios da ciência do comportamento para favorecer a aquisição de habilidades e aumentar a autonomia do paciente.",
      "O planejamento é individualizado, considerando o repertório atual, os objetivos de cada pessoa e as demandas que aparecem em sua rotina.",
    ],
  },
  {
    slug: "avaliacao-neuropsicopedagogica",
    titulo: "Avaliação Neuropsicopedagógica",
    etiqueta: "Aprendizagem escolar",
    resumo:
      "Avaliação para compreender dificuldades relacionadas ao processo de aprendizagem e orientar estratégias de intervenção.",
    imagem: atendimentoNeuropsicopedagogia,
    imagemSecundaria: atendimentoAprendizagemAmbiente,
    paraQuem: [
      "Crianças e adolescentes com dificuldades escolares ou baixo rendimento",
      "Estudantes com atraso na aquisição de habilidades acadêmicas",
      "Famílias que precisam compreender melhor o perfil de aprendizagem",
      "Casos relacionados a leitura, escrita, matemática, atenção ou estratégias de estudo",
    ],
    comoFunciona: [
      {
        titulo: "Investigação da história",
        texto:
          "O processo considera a história de desenvolvimento, a escolaridade e as dificuldades percebidas pela família e pela escola.",
      },
      {
        titulo: "Avaliação das habilidades",
        texto:
          "São observadas habilidades relacionadas a atenção, memória, leitura, escrita, compreensão, raciocínio lógico-matemático e estratégias de aprendizagem.",
      },
      {
        titulo: "Análise dos fatores",
        texto:
          "Os resultados ajudam a identificar quais habilidades estão desenvolvidas, quais apresentam dificuldade e o que pode estar interferindo no desempenho escolar.",
      },
      {
        titulo: "Orientações para intervenção",
        texto:
          "Após a avaliação, as informações são usadas para orientar estratégias, adaptações e possíveis acompanhamentos.",
      },
    ],
    info: [
      { rotulo: "Público", valor: "Crianças e adolescentes" },
      { rotulo: "Áreas", valor: "Leitura, escrita e matemática" },
      { rotulo: "Objetivo", valor: "Compreender o perfil de aprendizagem" },
      { rotulo: "Formato", valor: "Presencial" },
    ],
    texto: [
      "A Avaliação Neuropsicopedagógica busca compreender as dificuldades relacionadas ao processo de aprendizagem, considerando aspectos cognitivos e pedagógicos.",
      "O objetivo é identificar quais habilidades estão desenvolvidas, quais apresentam dificuldades e quais fatores podem estar interferindo no desempenho escolar.",
    ],
  },
  {
    slug: "fonoaudiologia-infantil",
    titulo: "Fonoaudiologia Infantil",
    etiqueta: "Fala e linguagem",
    resumo:
      "Atendimento voltado ao desenvolvimento da comunicação, fala, linguagem, voz, motricidade orofacial e alimentação.",
    imagem: atendimentoFonoaudiologia,
    imagemHero: heroAtendimentoFonoaudiologia,
    imagemSecundaria: atendimentoFonoaudiologiaAmbiente,
    paraQuem: [
      "Bebês, crianças e adolescentes com atrasos ou dificuldades de comunicação",
      "Crianças com atraso de fala e linguagem ou dificuldades de articulação dos sons",
      "Demandas de motricidade orofacial, alimentação, fala, voz ou linguagem",
      "Casos associados a transtornos do neurodesenvolvimento, quando houver necessidade fonoaudiológica",
    ],
    comoFunciona: [
      {
        titulo: "Avaliação inicial",
        texto:
          "O atendimento começa com uma avaliação para compreender habilidades já adquiridas e identificar áreas que precisam de intervenção.",
      },
      {
        titulo: "Plano terapêutico",
        texto:
          "A terapia é planejada de forma individualizada, considerando a idade e as necessidades específicas da criança.",
      },
      {
        titulo: "Atividades adequadas à idade",
        texto:
          "São utilizados recursos lúdicos e propostas terapêuticas para estimular comunicação, fala, linguagem e desenvolvimento.",
      },
      {
        titulo: "Orientações para a rotina",
        texto:
          "Quando indicado, a família recebe orientações para ampliar as oportunidades de comunicação no cotidiano.",
      },
    ],
    info: [
      { rotulo: "Público", valor: "Bebês, crianças e adolescentes" },
      { rotulo: "Áreas", valor: "Fala, linguagem, voz e alimentação" },
      { rotulo: "Recursos", valor: "Atividades adequadas à idade" },
      { rotulo: "Formato", valor: "Presencial" },
    ],
    texto: [
      "A Fonoaudiologia Infantil atua no desenvolvimento da comunicação e das habilidades relacionadas à fala, linguagem, voz, motricidade orofacial e alimentação, conforme as necessidades de cada criança.",
      "O atendimento é planejado a partir de uma avaliação individualizada e utiliza atividades adequadas à idade, incluindo recursos lúdicos para estimular a comunicação e o desenvolvimento.",
    ],
  },
  {
    slug: "fonoaudiologia-adolescentes-adultos-idosos",
    titulo: "Fonoaudiologia para Adolescentes, Adultos e Idosos",
    etiqueta: "Comunicação em diferentes fases da vida",
    resumo:
      "Acompanhamento fonoaudiológico para demandas de fala, linguagem, comunicação, voz, motricidade orofacial e deglutição.",
    imagem: atendimentoFonoaudiologiaAmbiente,
    imagemHero: heroAtendimentoFonoaudiologia,
    imagemSecundaria: atendimentoFonoaudiologia,
    paraQuem: [
      "Adolescentes, adultos e idosos com alterações de fala, linguagem ou comunicação",
      "Pessoas com demandas de voz, motricidade orofacial ou deglutição",
      "Adultos e idosos com mudanças relacionadas ao envelhecimento ou a condições neurológicas",
      "Pacientes que precisam de um plano terapêutico direcionado à sua rotina",
    ],
    comoFunciona: [
      {
        titulo: "Avaliação individualizada",
        texto:
          "O atendimento começa com uma avaliação que considera história, rotina, queixas e dificuldades apresentadas pelo paciente.",
      },
      {
        titulo: "Plano terapêutico direcionado",
        texto:
          "A partir da avaliação, é elaborado um plano terapêutico voltado às necessidades específicas de cada pessoa.",
      },
      {
        titulo: "Acompanhamento das funções",
        texto:
          "O trabalho pode envolver fala, linguagem, comunicação, voz, motricidade orofacial e deglutição.",
      },
      {
        titulo: "Adaptação à rotina",
        texto:
          "As orientações consideram as atividades, objetivos e possibilidades de cada fase da vida.",
      },
    ],
    info: [
      { rotulo: "Público", valor: "Adolescentes, adultos e idosos" },
      { rotulo: "Áreas", valor: "Fala, voz, linguagem e deglutição" },
      { rotulo: "Plano", valor: "Direcionado à necessidade do paciente" },
      { rotulo: "Formato", valor: "Presencial" },
    ],
    texto: [
      "A Fonoaudiologia também atua em diferentes fases da vida, acompanhando adolescentes, adultos e idosos em demandas relacionadas à fala, linguagem, comunicação, voz, motricidade orofacial e deglutição.",
      "O atendimento começa com uma avaliação individualizada, considerando a história, a rotina e as dificuldades apresentadas pelo paciente.",
    ],
  },
  {
    slug: "estimulacao-cognitiva-idosos",
    titulo: "Estimulação Cognitiva para Idosos",
    etiqueta: "Cognição e autonomia",
    resumo:
      "Acompanhamento com atividades planejadas para estimular funções cognitivas e favorecer autonomia e funcionalidade.",
    imagem: atendimentoNeuropsicologiaAmbiente,
    imagemSecundaria: atendimentoNeuropsicopedagogiaAmbiente,
    paraQuem: [
      "Idosos que desejam manter a mente ativa e estimular habilidades cognitivas",
      "Pessoas com queixas de memória, atenção, organização ou mudanças cognitivas",
      "Famílias que buscam acompanhamento para preservar autonomia e funcionalidade",
      "Casos em que a estimulação precisa estar associada à investigação e acompanhamento adequado",
    ],
    comoFunciona: [
      {
        titulo: "Compreensão da história",
        texto:
          "As atividades são escolhidas de acordo com idade, história, interesses, rotina e necessidades de cada paciente.",
      },
      {
        titulo: "Estimulação das funções",
        texto:
          "Podem ser estimuladas memória, atenção, linguagem, raciocínio, orientação temporal e espacial, planejamento e resolução de problemas.",
      },
      {
        titulo: "Atividades significativas",
        texto:
          "O acompanhamento busca oferecer estímulos cognitivos de maneira adequada e conectada à rotina do idoso.",
      },
      {
        titulo: "Acompanhamento contínuo",
        texto:
          "Quando existem sinais de alterações importantes, a estimulação deve caminhar junto à investigação e aos cuidados profissionais necessários.",
      },
    ],
    info: [
      { rotulo: "Público", valor: "Idosos" },
      { rotulo: "Habilidades", valor: "Memória, atenção e linguagem" },
      { rotulo: "Objetivo", valor: "Autonomia e funcionalidade" },
      { rotulo: "Formato", valor: "Presencial" },
    ],
    texto: [
      "A Estimulação Cognitiva é um acompanhamento voltado ao público idoso, com atividades planejadas para estimular diferentes funções cognitivas e favorecer a manutenção da autonomia e da funcionalidade.",
      "O atendimento considera idade, história, interesses e necessidades de cada paciente, buscando proporcionar estímulos de maneira significativa e adequada à rotina.",
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
      "Uma avaliação pelo Método Evoluta para compreender, com profundidade, como a pessoa pensa, aprende, memoriza, se organiza e responde aos desafios da rotina.",
    tituloApresentacao: "Avaliar é compreender a pessoa por inteiro",
    introducao:
      "O Método de Avaliação Neuropsicológica Evoluta organiza a investigação a partir da história do paciente, do motivo da busca e dos contextos em que as dificuldades aparecem. A avaliação não se limita à aplicação de testes: ela integra entrevista clínica, instrumentos específicos, observação, análise do desenvolvimento, rotina, escolaridade, funcionamento emocional e comportamento.",
    tituloSituacoes: "Quando a avaliação neuropsicológica faz sentido",
    textoSituacoes:
      "A avaliação pode ser buscada quando existe uma dúvida persistente sobre desenvolvimento, aprendizagem, atenção, memória, comportamento ou desempenho. Ela ajuda a diferenciar dificuldades pontuais de demandas que precisam de investigação mais completa.",
    sinais: [
      "Dúvidas sobre desenvolvimento infantil, comunicação, comportamento ou autonomia",
      "Queixas de atenção, concentração, memória, linguagem, raciocínio ou organização",
      "Dificuldades escolares, acadêmicas ou profissionais que se repetem apesar de apoio",
      "Mudanças cognitivas, comportamentais ou emocionais que precisam ser compreendidas",
      "Investigação de condições do neurodesenvolvimento, deficiência intelectual ou alterações cognitivas",
    ],
    tituloObjetivos: "O que o processo busca esclarecer",
    textoObjetivos:
      "O objetivo é construir uma compreensão integrada do funcionamento cognitivo, emocional e comportamental, identificando habilidades preservadas, dificuldades, hipóteses clínicas e caminhos possíveis para intervenção e orientação.",
    objetivos: [
      "Compreender como a pessoa aprende, memoriza, presta atenção e resolve problemas",
      "Avaliar funções como linguagem, raciocínio, funções executivas e velocidade de processamento",
      "Relacionar os resultados à história de vida, rotina, escola, família ou trabalho",
      "Oferecer devolutiva individualizada, com orientações e encaminhamentos úteis",
      "Transformar resultados técnicos em direcionamentos compreensíveis para a família e para os profissionais envolvidos",
    ],
    tituloEtapas: "Um percurso investigativo, cuidadoso e individualizado",
    textoEtapas:
      "Cada etapa é definida conforme idade, motivo da avaliação e necessidades apresentadas. A quantidade de encontros e os instrumentos utilizados podem variar de acordo com o caso.",
    tituloImagem: "Método Evoluta",
    textoImagem:
      "A avaliação reúne dados clínicos, instrumentos e informações da rotina para que a devolutiva vá além de números ou diagnósticos e ajude a orientar os próximos passos do paciente.",
    participacao: {
      titulo: "Informações integradas para orientar melhor",
      texto:
        "Com autorização, relatos da família, escola e outros profissionais podem complementar a avaliação. Essa integração permite observar a pessoa em diferentes contextos e torna as orientações mais precisas, viáveis e conectadas à vida real.",
    },
    perguntas: [
      { pergunta: "A avaliação neuropsicológica é igual para todos?", resposta: "Não. O processo é individualizado. Instrumentos, entrevistas e procedimentos são escolhidos conforme idade, história, rotina e motivo da avaliação." },
      { pergunta: "A avaliação serve apenas para fechar diagnóstico?", resposta: "Não. Ela pode contribuir para hipóteses diagnósticas, mas seu principal valor é compreender o funcionamento da pessoa e orientar intervenções, adaptações e encaminhamentos." },
      { pergunta: "A família ou a escola participa?", resposta: "Quando necessário e autorizado, informações da família, escola e outros profissionais ajudam a compreender melhor os contextos em que as dificuldades aparecem." },
    ],
  },
  "psicologia-infantil-tcc": {
    chamada:
      "Um espaço terapêutico seguro para a criança compreender emoções, pensamentos e comportamentos, com recursos adequados à infância.",
    tituloApresentacao: "Cuidado emocional com linguagem de criança",
    introducao:
      "A Psicoterapia Infantil com base na Terapia Cognitivo-Comportamental acolhe a criança em suas dificuldades emocionais, comportamentais e sociais. O atendimento respeita a idade e o nível de desenvolvimento, utilizando brincadeiras, jogos, histórias, conversas e estratégias terapêuticas para favorecer expressão, compreensão e construção de novas habilidades.",
    tituloSituacoes: "Quando a psicoterapia infantil pode ajudar",
    textoSituacoes:
      "A busca costuma acontecer quando emoções, comportamentos ou dificuldades de socialização começam a interferir na rotina familiar, escolar ou social da criança. O atendimento ajuda a compreender o que está por trás dessas manifestações.",
    sinais: [
      "Ansiedade, medos, insegurança ou baixa autoestima",
      "Irritabilidade, choro frequente, dificuldades de adaptação ou mudanças de comportamento",
      "Dificuldades de socialização, comunicação, habilidades sociais ou resolução de conflitos",
      "Baixa tolerância à frustração, explosões emocionais ou comportamentos desafiadores",
      "Questões emocionais da infância e adolescência que afetam escola, família ou amizades",
    ],
    tituloObjetivos: "Habilidades emocionais para a vida cotidiana",
    textoObjetivos:
      "Os objetivos são construídos a partir das necessidades da criança e da família, buscando ampliar repertórios emocionais, sociais e comportamentais que possam ser praticados também fora da sessão.",
    objetivos: [
      "Ajudar a criança a reconhecer emoções, pensamentos e comportamentos",
      "Desenvolver estratégias de regulação emocional e enfrentamento",
      "Fortalecer autoestima, comunicação, habilidades sociais e resolução de problemas",
      "Trabalhar tolerância à frustração e adaptação a mudanças",
      "Orientar responsáveis para aplicar estratégias de forma possível no cotidiano",
    ],
    tituloEtapas: "Terapia adaptada ao desenvolvimento da criança",
    textoEtapas:
      "O processo começa pela compreensão da demanda e segue com intervenções compatíveis com a idade, sempre com alinhamentos com os responsáveis quando necessário.",
    tituloImagem: "Recursos lúdicos com objetivo terapêutico",
    textoImagem:
      "Brincadeiras, jogos e atividades não entram como distração: eles ajudam a criança a expressar sentimentos, experimentar estratégias e construir novas formas de lidar com desafios.",
    participacao: {
      titulo: "Responsáveis como parte do processo",
      texto:
        "A participação da família é combinada de acordo com a demanda e a idade da criança. Os responsáveis recebem orientações para sustentar em casa, na escola e na rotina social as habilidades trabalhadas nas sessões.",
    },
    perguntas: [
      { pergunta: "A criança precisa saber explicar o que sente?", resposta: "Não. O atendimento utiliza recursos compatíveis com a idade para favorecer vínculo, expressão e compreensão das emoções mesmo quando a criança ainda não consegue verbalizar tudo." },
      { pergunta: "Os responsáveis participam de todas as sessões?", resposta: "A participação é definida conforme a necessidade. Em geral, há momentos de orientação e alinhamento com a família para que as estratégias façam sentido na rotina." },
      { pergunta: "A psicoterapia infantil é só conversa?", resposta: "Não. A conversa pode fazer parte, mas o atendimento também usa recursos lúdicos, atividades estruturadas e estratégias da Terapia Cognitivo-Comportamental." },
    ],
  },
  "intervencao-aba": {
    chamada:
      "Intervenção planejada a partir da ciência do comportamento para desenvolver habilidades, autonomia e participação na rotina.",
    tituloApresentacao: "Intervenção com objetivos claros e funcionais",
    introducao:
      "A Psicologia com Intervenção Baseada em ABA utiliza princípios da Análise do Comportamento Aplicada para favorecer a aquisição de habilidades e ampliar autonomia. O planejamento é individualizado e parte do repertório atual da pessoa, das prioridades da família e das demandas observadas nos ambientes que ela frequenta.",
    tituloSituacoes: "Quando buscar intervenção baseada em ABA",
    textoSituacoes:
      "A intervenção pode ser indicada quando há necessidade de ensinar habilidades de forma estruturada, reduzir barreiras para aprendizagem e participação ou apoiar a família na construção de estratégias mais consistentes.",
    sinais: [
      "Dificuldades de comunicação funcional, interação social ou participação em atividades",
      "Necessidade de desenvolver autonomia e habilidades de vida diária",
      "Dificuldades em brincadeiras, seguimento de instruções ou habilidades acadêmicas iniciais",
      "Comportamentos que interferem na aprendizagem, convivência, segurança ou rotina",
      "Demandas relacionadas ao desenvolvimento e ao comportamento que precisam de acompanhamento individualizado",
    ],
    tituloObjetivos: "Ensinar habilidades que fazem diferença na rotina",
    textoObjetivos:
      "As metas são definidas de forma individual, observável e conectada à vida cotidiana. O foco é ampliar repertórios importantes para comunicação, autonomia, aprendizagem e participação social.",
    objetivos: [
      "Ampliar comunicação, interação social e comportamentos adaptativos",
      "Favorecer autonomia em atividades de vida diária e rotina familiar",
      "Ensinar habilidades em etapas possíveis, respeitando o repertório atual",
      "Trabalhar brincadeiras, seguimento de instruções e habilidades acadêmicas quando indicado",
      "Orientar responsáveis e alinhar estratégias com outros ambientes frequentados pelo paciente",
    ],
    tituloEtapas: "Da identificação do repertório ao plano de intervenção",
    textoEtapas:
      "O atendimento começa pela observação das habilidades já desenvolvidas e daquelas que precisam ser ampliadas. A partir disso, o plano organiza prioridades, objetivos e formas de acompanhamento.",
    tituloImagem: "Intervenção aplicada à vida real",
    textoImagem:
      "As estratégias são pensadas para que as habilidades trabalhadas em atendimento possam aparecer também em casa, na escola e nos demais ambientes da pessoa.",
    participacao: {
      titulo: "Estratégias conectadas aos ambientes da pessoa",
      texto:
        "Quando indicado, responsáveis, escola e outros profissionais recebem orientações para que as habilidades trabalhadas possam ser praticadas em diferentes contextos da vida cotidiana.",
    },
    perguntas: [
      { pergunta: "ABA é apenas para autismo?", resposta: "A ABA é amplamente utilizada no acompanhamento de pessoas com TEA, mas pode ser indicada para outras demandas do desenvolvimento e do comportamento após avaliação individual." },
      { pergunta: "Como as metas são definidas?", resposta: "As metas partem da identificação do repertório atual, das prioridades funcionais e dos objetivos compartilhados com a família." },
      { pergunta: "A família recebe orientação?", resposta: "Sim, quando necessário. A orientação aos responsáveis ajuda a tornar as estratégias mais consistentes nos ambientes em que a pessoa vive." },
    ],
  },
  "avaliacao-neuropsicopedagogica": {
    chamada:
      "Uma avaliação para compreender como a criança ou adolescente aprende e quais fatores podem estar interferindo no desempenho escolar.",
    tituloApresentacao: "Compreender o aprender antes de intervir",
    introducao:
      "A Avaliação Neuropsicopedagógica investiga dificuldades relacionadas ao processo de aprendizagem, considerando aspectos cognitivos e pedagógicos. O objetivo é identificar quais habilidades estão desenvolvidas, quais apresentam dificuldades e quais fatores podem estar interferindo na leitura, escrita, matemática, compreensão, atenção e estratégias de estudo.",
    tituloSituacoes: "Quando investigar a aprendizagem",
    textoSituacoes:
      "A avaliação é indicada quando dificuldades escolares persistem, quando há atraso na aquisição de habilidades acadêmicas ou quando família e escola precisam compreender melhor o perfil de aprendizagem do estudante.",
    sinais: [
      "Dificuldades escolares persistentes ou baixo rendimento",
      "Atraso na leitura, escrita, compreensão ou raciocínio lógico-matemático",
      "Dificuldades de atenção, memória, organização ou estratégias de aprendizagem",
      "Necessidade de compreender se há demandas como dislexia, discalculia ou alterações de aprendizagem",
      "Dúvidas sobre quais estratégias podem ajudar a criança ou adolescente a aprender melhor",
    ],
    tituloObjetivos: "Direcionamentos para família, escola e intervenção",
    textoObjetivos:
      "O processo busca transformar a investigação em orientações práticas, ajudando a diferenciar defasagens, dificuldades específicas e necessidades de acompanhamento.",
    objetivos: [
      "Mapear habilidades acadêmicas e cognitivas envolvidas no aprender",
      "Observar leitura, escrita, compreensão, matemática, atenção e memória",
      "Compreender fatores que podem estar interferindo no desempenho escolar",
      "Orientar estratégias e possíveis intervenções conforme o perfil do estudante",
      "Apoiar família e escola com direcionamentos claros e possíveis",
    ],
    tituloEtapas: "Avaliação da história escolar e das habilidades de aprendizagem",
    textoEtapas:
      "O percurso envolve investigação da história de desenvolvimento e escolaridade, análise das queixas atuais e avaliação de habilidades diretamente relacionadas ao processo de aprendizagem.",
    tituloImagem: "Olhar para além da nota escolar",
    textoImagem:
      "A avaliação busca entender como o estudante aprende, quais recursos já possui e quais barreiras precisam ser trabalhadas para que o acompanhamento seja mais assertivo.",
    participacao: {
      titulo: "Família e escola ajudam a compreender o aprender",
      texto:
        "Relatos, cadernos, atividades e informações escolares podem compor a avaliação. Esse diálogo ajuda a transformar os resultados em estratégias aplicáveis à rotina familiar e escolar.",
    },
    perguntas: [
      { pergunta: "A avaliação neuropsicopedagógica é reforço escolar?", resposta: "Não. O objetivo é compreender habilidades e dificuldades relacionadas ao processo de aprendizagem, e não apenas repetir conteúdos escolares." },
      { pergunta: "Ela pode ajudar em suspeitas de dislexia ou discalculia?", resposta: "Pode contribuir para a investigação de dificuldades de leitura, escrita, matemática e outras condições que impactam o desempenho escolar." },
      { pergunta: "A escola pode participar do processo?", resposta: "Quando necessário e autorizado, informações da escola ajudam a compreender melhor o desempenho e a rotina de aprendizagem do estudante." },
    ],
  },
  "fonoaudiologia-infantil": {
    chamada:
      "Atendimento individualizado para o desenvolvimento da comunicação, fala, linguagem, voz, motricidade orofacial e alimentação na infância.",
    tituloApresentacao: "Comunicação e desenvolvimento desde as primeiras fases",
    introducao:
      "A Fonoaudiologia Infantil atua no desenvolvimento da comunicação e das habilidades relacionadas à fala, linguagem, voz, motricidade orofacial e alimentação. O atendimento começa com uma avaliação para compreender as habilidades já adquiridas, identificar áreas que precisam de intervenção e planejar propostas adequadas à idade da criança.",
    tituloSituacoes: "Quando procurar fonoaudiologia infantil",
    textoSituacoes:
      "A busca pode acontecer quando há atrasos ou dificuldades no desenvolvimento da comunicação, alterações de fala e linguagem ou demandas ligadas à alimentação e motricidade orofacial.",
    sinais: [
      "Atraso de fala ou linguagem em bebês, crianças e adolescentes",
      "Trocas, omissões ou dificuldades de articulação dos sons",
      "Dificuldades de comunicação, compreensão, expressão ou interação comunicativa",
      "Demandas de voz, motricidade orofacial ou alterações relacionadas à alimentação",
      "Necessidades fonoaudiológicas associadas a transtornos do neurodesenvolvimento",
    ],
    tituloObjetivos: "Estimular comunicação com propostas adequadas à idade",
    textoObjetivos:
      "A terapia busca favorecer habilidades comunicativas e funções relacionadas, usando atividades planejadas e recursos lúdicos que fazem sentido para a criança.",
    objetivos: [
      "Estimular fala, linguagem e comunicação funcional",
      "Trabalhar articulação dos sons, compreensão e expressão conforme a necessidade",
      "Apoiar habilidades relacionadas à voz, alimentação e motricidade orofacial quando indicado",
      "Utilizar recursos lúdicos para favorecer participação e desenvolvimento",
      "Orientar a família para ampliar oportunidades de comunicação no cotidiano",
    ],
    tituloEtapas: "Avaliação, plano terapêutico e atividades direcionadas",
    textoEtapas:
      "O atendimento começa com avaliação individualizada e segue com terapia planejada conforme idade, necessidades e objetivos da criança.",
    tituloImagem: "Brincar também comunica",
    textoImagem:
      "Os recursos usados em sessão são escolhidos para estimular fala, linguagem e comunicação de forma acolhedora, respeitando o ritmo e a fase de desenvolvimento da criança.",
    participacao: {
      titulo: "A comunicação também acontece fora da sessão",
      texto:
        "A família pode receber orientações simples e possíveis para favorecer fala, linguagem e comunicação na rotina. Quando necessário, a escola também pode ser orientada para apoiar o desenvolvimento comunicativo.",
    },
    perguntas: [
      { pergunta: "Quando procurar fonoaudiologia infantil?", resposta: "Quando atrasos ou dificuldades de fala, linguagem, comunicação, alimentação ou articulação persistem ou interferem na participação da criança." },
      { pergunta: "O atendimento usa brincadeiras?", resposta: "Sim. As atividades são planejadas conforme a idade e podem usar recursos lúdicos para estimular as habilidades necessárias." },
      { pergunta: "A fonoaudiologia infantil trabalha alimentação?", resposta: "Pode trabalhar demandas relacionadas à alimentação e motricidade orofacial quando essas necessidades aparecem na avaliação." },
    ],
  },
  "fonoaudiologia-adolescentes-adultos-idosos": {
    chamada:
      "Acompanhamento fonoaudiológico para fala, linguagem, comunicação, voz, motricidade orofacial e deglutição em diferentes fases da vida.",
    tituloApresentacao: "Comunicação e funcionalidade em cada fase da vida",
    introducao:
      "A Fonoaudiologia também acompanha adolescentes, adultos e idosos em demandas relacionadas à fala, linguagem, comunicação, voz, motricidade orofacial e deglutição. O atendimento considera história, rotina, dificuldades apresentadas e necessidades específicas de cada pessoa.",
    tituloSituacoes: "Quando buscar acompanhamento fonoaudiológico",
    textoSituacoes:
      "O atendimento pode ser indicado quando alterações de comunicação, voz, fala ou deglutição impactam a rotina, a autonomia, a segurança ou a participação social do paciente.",
    sinais: [
      "Alterações de voz, fala, linguagem, comunicação ou articulação",
      "Dificuldades de motricidade orofacial ou deglutição",
      "Mudanças na comunicação associadas ao envelhecimento",
      "Demandas após condições neurológicas que tenham afetado comunicação ou funções relacionadas",
      "Necessidade de um plano terapêutico direcionado à rotina e aos objetivos do paciente",
    ],
    tituloObjetivos: "Plano terapêutico direcionado às necessidades do paciente",
    textoObjetivos:
      "A partir da avaliação, o acompanhamento define objetivos compatíveis com a fase da vida, as demandas apresentadas e as atividades que fazem parte da rotina do paciente.",
    objetivos: [
      "Compreender dificuldades de fala, linguagem, comunicação, voz ou deglutição",
      "Construir um plano terapêutico adequado à rotina e à fase da vida",
      "Trabalhar motricidade orofacial e funções relacionadas quando indicado",
      "Favorecer funcionalidade, segurança e participação nas atividades cotidianas",
      "Orientar paciente e família conforme as necessidades observadas",
    ],
    tituloEtapas: "Avaliação individualizada e cuidado direcionado",
    textoEtapas:
      "O processo começa pela avaliação da história, rotina e queixas atuais. A partir disso, é elaborado um plano terapêutico com objetivos específicos.",
    tituloImagem: "A comunicação acompanha a vida inteira",
    textoImagem:
      "Em adolescentes, adultos e idosos, o atendimento respeita objetivos pessoais, rotina, contexto de saúde e necessidades funcionais de cada fase.",
    participacao: {
      titulo: "Plano terapêutico conectado à rotina",
      texto:
        "As orientações são construídas a partir das atividades e necessidades do paciente. Em adultos e idosos, o acompanhamento pode dialogar com outros cuidados de saúde quando necessário.",
    },
    perguntas: [
      { pergunta: "Adultos também podem fazer fonoaudiologia?", resposta: "Sim. A Fonoaudiologia acompanha adolescentes, adultos e idosos em demandas de fala, linguagem, comunicação, voz, motricidade orofacial e deglutição." },
      { pergunta: "O atendimento é igual ao infantil?", resposta: "Não. A avaliação e o plano terapêutico consideram idade, história, rotina e objetivos de cada pessoa." },
      { pergunta: "Pode ser indicado para idosos?", resposta: "Sim. Em idosos, o acompanhamento pode apoiar demandas relacionadas ao envelhecimento, comunicação, deglutição ou condições neurológicas." },
    ],
  },
  "estimulacao-cognitiva-idosos": {
    chamada:
      "Atividades planejadas para estimular funções cognitivas e favorecer autonomia, funcionalidade e participação no envelhecimento.",
    tituloApresentacao: "Estimular a mente com significado e cuidado",
    introducao:
      "A Estimulação Cognitiva é um acompanhamento voltado ao público idoso, com atividades planejadas para estimular diferentes funções cognitivas e favorecer a manutenção da autonomia e da funcionalidade. As atividades são escolhidas conforme idade, história, interesses, rotina e necessidades de cada paciente.",
    tituloSituacoes: "Quando a estimulação cognitiva pode ser indicada",
    textoSituacoes:
      "O acompanhamento pode ser procurado por idosos que desejam manter a mente ativa ou por pessoas que apresentam queixas cognitivas e precisam de estímulos adequados, associados à investigação profissional quando necessário.",
    sinais: [
      "Desejo de manter a mente ativa e estimular habilidades cognitivas",
      "Queixas relacionadas à memória, atenção, linguagem ou organização",
      "Mudanças cognitivas percebidas pela pessoa ou pela família",
      "Necessidade de favorecer autonomia, funcionalidade e participação na rotina",
      "Sinais de alterações cognitivas que precisam caminhar junto à investigação e acompanhamento adequados",
    ],
    tituloObjetivos: "Funções cognitivas trabalhadas de forma individualizada",
    textoObjetivos:
      "O trabalho busca estimular habilidades importantes para a rotina, sempre respeitando a história, os interesses, o ritmo e as possibilidades do idoso.",
    objetivos: [
      "Estimular memória, atenção, linguagem, raciocínio e orientação",
      "Trabalhar planejamento, organização e resolução de problemas",
      "Favorecer manutenção da autonomia e da funcionalidade",
      "Proporcionar estímulos cognitivos significativos e adequados à rotina",
      "Acompanhar mudanças e indicar investigação profissional quando necessário",
    ],
    tituloEtapas: "Atividades escolhidas a partir da história do idoso",
    textoEtapas:
      "O processo considera idade, interesses, rotina e necessidades. As atividades são planejadas para estimular funções cognitivas de maneira cuidadosa e conectada à vida cotidiana.",
    tituloImagem: "Cuidado que respeita história e ritmo",
    textoImagem:
      "A estimulação cognitiva valoriza atividades possíveis e significativas, sem reduzir o idoso a uma queixa de memória ou a uma dificuldade isolada.",
    participacao: {
      titulo: "Cuidado adequado à história de cada idoso",
      texto:
        "As atividades consideram interesses, rotina e possibilidades do paciente. Quando a família participa, as orientações ajudam a ampliar estímulos no cotidiano sem gerar sobrecarga.",
    },
    perguntas: [
      { pergunta: "Estimulação cognitiva é indicada apenas quando há perda de memória?", resposta: "Não. Ela também pode ser procurada por idosos que desejam manter habilidades cognitivas ativas e preservar autonomia." },
      { pergunta: "Ela substitui investigação médica ou neuropsicológica?", resposta: "Não. Quando existem sinais de alterações importantes, a estimulação deve estar associada à investigação e ao acompanhamento adequado." },
      { pergunta: "As atividades são iguais para todos os idosos?", resposta: "Não. As propostas são escolhidas de acordo com história, interesses, rotina, necessidades e possibilidades de cada paciente." },
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

