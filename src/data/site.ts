import sobreImg from "@/assets/sobre.jpg";
import ctaImg from "@/assets/cta-conversa.jpg";
import avaliacaoNeuropsicologicaImg from "@/assets/servico-avaliacao-neuropsicologica-1.jpg";
import avaliacaoNeuropsicologicaImg2 from "@/assets/servico-avaliacao-neuropsicologica-2.jpg";
import avaliacaoNeuropsicologicaHero from "@/assets/hero-servico-avaliacao-neuropsicologica.jpg";
import psicologiaInfantilImg from "@/assets/servico-psicologia-infantil-1.jpg";
import psicologiaInfantilImg2 from "@/assets/servico-psicologia-infantil-2.jpg";
import psicologiaInfantilHero from "@/assets/hero-servico-psicologia-infantil.jpg";
import intervencaoAbaImg from "@/assets/servico-intervencao-aba-1.jpg";
import intervencaoAbaImg2 from "@/assets/servico-intervencao-aba-2-corrigida.png";
import intervencaoAbaHero from "@/assets/hero-servico-intervencao-aba.jpg";
import avaliacaoNeuropsicopedagogicaImg from "@/assets/servico-avaliacao-neuropsicopedagogica-1.jpg";
import avaliacaoNeuropsicopedagogicaImg2 from "@/assets/servico-avaliacao-neuropsicopedagogica-2.jpg";
import avaliacaoNeuropsicopedagogicaHero from "@/assets/hero-servico-avaliacao-neuropsicopedagogica.jpg";
import fonoaudiologiaInfantilImg from "@/assets/servico-fonoaudiologia-infantil-1.jpg";
import fonoaudiologiaInfantilImg2 from "@/assets/servico-fonoaudiologia-infantil-2.jpg";
import fonoaudiologiaInfantilHero from "@/assets/hero-servico-fonoaudiologia-infantil.jpg";
import fonoaudiologiaAdultosImg from "@/assets/servico-fonoaudiologia-adultos-1.jpg";
import fonoaudiologiaAdultosImg2 from "@/assets/servico-fonoaudiologia-adultos-2.jpg";
import fonoaudiologiaAdultosHero from "@/assets/hero-servico-fonoaudiologia-adultos.jpg";
import estimulacaoCognitivaIdososImg from "@/assets/servico-estimulacao-cognitiva-idosos-1.jpg";
import estimulacaoCognitivaIdososImg2 from "@/assets/servico-estimulacao-cognitiva-idosos-2.jpg";
import estimulacaoCognitivaIdososHero from "@/assets/hero-servico-estimulacao-cognitiva-idosos.jpg";
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
import clinicaInauguracao from "@/assets/clinica-evoluta-inauguracao.jpg.asset.json";
import cursoDesenvolvimentoInfantil from "@/assets/curso-desenvolvimento-infantil-na-pratica.jpeg.asset.json";
import ebookEntendendoTdah from "@/assets/livro-alem-da-distracao.png";

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

export const fotoClinica = clinicaInauguracao.url;

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
  whatsapp: "https://api.whatsapp.com/message/OMXN2X3IIFAWJ1?autoload=1&app_absent=0",
  telefone: "(27) 99938-6386",
  telefoneLink: "tel:+5527999386386",
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

/** Link público da ficha da clínica no Google, com todas as avaliações. */
export const googleAvaliacoesUrl = "https://share.google/pnsxvT8kh2ZHiSSsz";

export type Avaliacao = {
  nome: string;
  quando: string;
  nota: number;
  texto: string;
};

/** Avaliações publicadas por pacientes e familiares no Google. */
export const avaliacoes: Avaliacao[] = [
  {
    nome: "Isabel Natividade",
    quando: "7 meses atrás",
    nota: 5,
    texto:
      "Meu filho é autista e eu estava desesperada com a situação, foi quando me indicaram a clínica. Pensa numa profissional competente, dedicada. Se for falar tudo ficaria horas... estou maravilhada com a evolução do comportamento do Augusto. Super indico.",
  },
  {
    nome: "Marina Caran",
    quando: "6 meses atrás",
    nota: 5,
    texto:
      "Minha filha Lunna passou por atendimento com a neuropsicóloga Natália Broziguini Dalcim e tivemos uma experiência muito positiva. Ela foi muito acolhedora, paciente e demonstrou muito carinho no atendimento com minha filha. Agradeço muito a ela pelo atendimento da minha filha.",
  },
  {
    nome: "Gisele Mauri Bettin",
    quando: "1 mês atrás",
    nota: 5,
    texto:
      "Até agora estamos adorando, está sendo ótimo. Geovana também está gostando muito e já obteve alguns resultados positivos.",
  },
  {
    nome: "Stefani Santos",
    quando: "6 meses atrás",
    nota: 5,
    texto: "Estou tendo uma boa experiência realizando minha avaliação, com uma ótima profissional.",
  },
  {
    nome: "Andressa Sabadini",
    quando: "4 semanas atrás",
    nota: 5,
    texto: "Excelente atendimento, excelentes profissionais. Nota 1000.",
  },
  {
    nome: "Silvani Oliveira Mattos",
    quando: "um mês atrás",
    nota: 5,
    texto: "São profissionais excelentes. Ótima clínica.",
  },
];

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
      "Investigação clínica do funcionamento cognitivo, emocional e comportamental, com devolutiva clara para orientar decisões.",
    imagem: avaliacaoNeuropsicologicaImg,
    imagemSecundaria: avaliacaoNeuropsicologicaImg2,
    imagemHero: avaliacaoNeuropsicologicaHero,
    paraQuem: [
      "Crianças, adolescentes, adultos e idosos com dúvidas sobre atenção, memória, aprendizagem, comportamento ou desenvolvimento",
      "Famílias que precisam entender se as dificuldades observadas indicam necessidade de acompanhamento específico",
      "Estudantes com queda de rendimento, desorganização, dificuldade de concentração ou histórico escolar irregular",
      "Adultos que percebem prejuízos em trabalho, estudos, planejamento, memória ou tomada de decisões",
      "Pessoas em investigação de condições do neurodesenvolvimento ou alterações cognitivas que exigem leitura técnica cuidadosa",
    ],
    comoFunciona: [
      {
        titulo: "Escuta da história",
        texto:
          "A avaliação parte de uma entrevista sobre desenvolvimento, rotina, escola, trabalho, relações familiares, saúde e motivo da busca.",
      },
      {
        titulo: "Escolha dos procedimentos",
        texto:
          "Os instrumentos são selecionados conforme idade, demanda e hipótese clínica, evitando um protocolo único para todos os casos.",
      },
      {
        titulo: "Investigação das funções",
        texto:
          "São analisadas áreas como atenção, memória, linguagem, raciocínio, aprendizagem, funções executivas, velocidade de processamento e aspectos emocionais.",
      },
      {
        titulo: "Leitura integrada",
        texto:
          "Os resultados dos testes são relacionados ao histórico do paciente e aos contextos onde as dificuldades aparecem.",
      },
      {
        titulo: "Devolutiva orientadora",
        texto:
          "Ao final, a família ou o paciente recebe uma explicação organizada, com encaminhamentos e recomendações coerentes com o que foi encontrado.",
      },
    ],
    info: [
      { rotulo: "Público", valor: "Crianças, adolescentes, adultos e idosos" },
      { rotulo: "Método", valor: "Avaliação Neuropsicológica Evoluta" },
      { rotulo: "Analisa", valor: "Cognição, emoções e comportamento" },
      { rotulo: "Resultado", valor: "Devolutiva com direcionamentos" },
    ],
    texto: [
      "Na Clínica Evoluta, a Avaliação Neuropsicológica é realizada pelo Método de Avaliação Neuropsicológica Evoluta, desenvolvido por Jéssica Pelissari a partir da prática clínica e da necessidade de olhar cada caso com profundidade.",
      "O atendimento não se limita à aplicação de testes. Ele cruza entrevistas, observações, instrumentos técnicos e informações da rotina para entender como a pessoa pensa, aprende, memoriza, mantém atenção, organiza ações e responde emocionalmente às situações.",
      "Essa leitura ajuda a transformar dúvidas soltas em informações mais organizadas, úteis para a família, para a escola, para outros profissionais de saúde e para o próprio paciente.",
    ],
  },
  {
    slug: "psicologia-infantil-tcc",
    titulo: "Psicologia Infantil – Terapia Cognitivo-Comportamental",
    etiqueta: "Psicoterapia infantil",
    resumo:
      "Acompanhamento psicológico para crianças e adolescentes lidarem melhor com emoções, pensamentos, comportamentos e relações.",
    imagem: psicologiaInfantilImg,
    imagemSecundaria: psicologiaInfantilImg2,
    imagemHero: psicologiaInfantilHero,
    paraQuem: [
      "Crianças e adolescentes que apresentam sofrimento emocional, mudanças de comportamento ou dificuldade de adaptação",
      "Famílias que observam ansiedade, medos, insegurança, irritabilidade, isolamento ou baixa autoestima",
      "Crianças com dificuldades para lidar com frustrações, conflitos, regras, rotina ou convivência social",
      "Adolescentes que precisam organizar sentimentos, pensamentos, escolhas e formas de se relacionar",
      "Responsáveis que desejam orientação para conduzir situações do cotidiano com mais clareza e acolhimento",
    ],
    comoFunciona: [
      {
        titulo: "Entendimento da queixa",
        texto:
          "Os primeiros encontros investigam o que preocupa a família, em quais situações as dificuldades aparecem e como a criança tem reagido.",
      },
      {
        titulo: "Vínculo terapêutico",
        texto:
          "A criança encontra um espaço seguro para se expressar por meio de brincadeiras, conversas, jogos, desenhos, histórias e atividades estruturadas.",
      },
      {
        titulo: "Estratégias da TCC",
        texto:
          "O trabalho ajuda a criança a perceber relações entre pensamentos, emoções e comportamentos de modo compatível com sua idade.",
      },
      {
        titulo: "Treino de recursos emocionais",
        texto:
          "Podem ser trabalhadas regulação emocional, resolução de problemas, comunicação, autoestima, habilidades sociais e tolerância à frustração.",
      },
      {
        titulo: "Alinhamento com responsáveis",
        texto:
          "A família participa em momentos combinados para compreender o processo e aplicar estratégias possíveis fora da sessão.",
      },
    ],
    info: [
      { rotulo: "Público", valor: "Crianças e adolescentes" },
      { rotulo: "Abordagem", valor: "Terapia Cognitivo-Comportamental" },
      { rotulo: "Recursos", valor: "Brincar, conversa e atividades dirigidas" },
      { rotulo: "Foco", valor: "Emoções, comportamento e relações" },
    ],
    texto: [
      "A Psicologia Infantil com base na Terapia Cognitivo-Comportamental oferece um espaço de escuta para crianças e adolescentes que estão enfrentando dificuldades emocionais, comportamentais ou sociais.",
      "A TCC ajuda a criança a reconhecer o que sente, perceber pensamentos que aparecem em determinadas situações e experimentar respostas mais adequadas para lidar com desafios da rotina.",
      "O processo também acolhe a família, porque muitas mudanças dependem de orientação, consistência e compreensão do que está por trás do comportamento apresentado.",
    ],
  },
  {
    slug: "intervencao-aba",
    titulo: "Psicologia com Intervenção Baseada em ABA",
    etiqueta: "Análise do Comportamento Aplicada",
    resumo:
      "Plano de intervenção comportamental para ensinar repertórios importantes de comunicação, interação, autonomia e aprendizagem.",
    imagem: intervencaoAbaImg,
    imagemSecundaria: intervencaoAbaImg2,
    imagemHero: intervencaoAbaHero,
    paraQuem: [
      "Pessoas com TEA e outras demandas do desenvolvimento ou comportamento, conforme avaliação individual",
      "Crianças, adolescentes ou adultos que precisam ampliar comunicação funcional e participação nas atividades",
      "Pacientes com dificuldade para brincar, interagir, seguir instruções, iniciar tarefas ou manter habilidades aprendidas",
      "Famílias que precisam de metas claras, acompanhamento estruturado e orientação para situações do dia a dia",
      "Casos que exigem articulação entre clínica, casa, escola e outros profissionais para favorecer generalização",
    ],
    comoFunciona: [
      {
        titulo: "Mapeamento do repertório",
        texto:
          "A equipe observa o que a pessoa já consegue fazer, quais barreiras interferem na participação e quais prioridades são mais importantes naquele momento.",
      },
      {
        titulo: "Metas observáveis",
        texto:
          "Os objetivos são definidos de forma clara, funcional e mensurável, sempre conectados à vida real e ao repertório atual do paciente.",
      },
      {
        titulo: "Ensino estruturado",
        texto:
          "As habilidades são ensinadas em passos possíveis, com estratégias planejadas para comunicação, autonomia, brincadeiras, interação social e aprendizagem.",
      },
      {
        titulo: "Registro e ajustes",
        texto:
          "As respostas ao plano são acompanhadas para ajustar estratégias, revisar prioridades e avançar de modo coerente.",
      },
      {
        titulo: "Generalização",
        texto:
          "Quando indicado, família e escola recebem orientações para que os repertórios aprendidos apareçam também fora do ambiente terapêutico.",
      },
    ],
    info: [
      { rotulo: "Público", valor: "Crianças, adolescentes e adultos" },
      { rotulo: "Base", valor: "Análise do Comportamento Aplicada" },
      { rotulo: "Trabalha", valor: "Repertórios funcionais" },
      { rotulo: "Acompanha", valor: "Metas, dados e ajustes" },
    ],
    texto: [
      "A intervenção baseada em ABA utiliza princípios da Análise do Comportamento Aplicada para ensinar habilidades que fazem diferença na participação da pessoa em casa, na escola e em outros ambientes.",
      "Em vez de trabalhar apenas a queixa, o atendimento observa o repertório existente, identifica barreiras e define metas funcionais: comunicar uma necessidade, seguir uma instrução, brincar, interagir, participar de uma tarefa ou ampliar independência.",
      "Embora seja muito utilizada no acompanhamento de pessoas com TEA, a indicação depende de avaliação individual e da compreensão das necessidades de desenvolvimento e comportamento.",
    ],
  },
  {
    slug: "avaliacao-neuropsicopedagogica",
    titulo: "Avaliação Neuropsicopedagógica",
    etiqueta: "Aprendizagem escolar",
    resumo:
      "Investigação do perfil de aprendizagem para entender barreiras em leitura, escrita, matemática, atenção e desempenho escolar.",
    imagem: avaliacaoNeuropsicopedagogicaImg,
    imagemSecundaria: avaliacaoNeuropsicopedagogicaImg2,
    imagemHero: avaliacaoNeuropsicopedagogicaHero,
    paraQuem: [
      "Crianças e adolescentes com baixo rendimento, atraso na aquisição de habilidades acadêmicas ou dificuldades escolares persistentes",
      "Estudantes que apresentam barreiras em leitura, escrita, compreensão, raciocínio lógico-matemático ou estratégias de estudo",
      "Famílias que precisam entender se a dificuldade está ligada a aspectos cognitivos, pedagógicos, atencionais ou emocionais",
      "Escolas que observam esforço sem avanço proporcional, desorganização, lentidão ou dificuldade para acompanhar a turma",
      "Demandas relacionadas a dislexia, discalculia, dificuldades de leitura e escrita ou outras alterações que impactam a aprendizagem",
    ],
    comoFunciona: [
      {
        titulo: "Levantamento escolar",
        texto:
          "A avaliação começa com a escuta da família e a análise da trajetória escolar, incluindo queixas, histórico de aprendizagem e estratégias já tentadas.",
      },
      {
        titulo: "Observação acadêmica",
        texto:
          "São investigadas leitura, escrita, compreensão, raciocínio lógico-matemático, atenção, memória e modos de estudar.",
      },
      {
        titulo: "Análise cognitivo-pedagógica",
        texto:
          "Os resultados mostram quais habilidades sustentam a aprendizagem e quais pontos podem estar dificultando o avanço escolar.",
      },
      {
        titulo: "Contexto da escola",
        texto:
          "Quando autorizado, materiais escolares, relatos de professores e atividades ajudam a entender como a dificuldade aparece em sala de aula.",
      },
      {
        titulo: "Orientações para o estudante",
        texto:
          "A devolutiva organiza estratégias, adaptações, encaminhamentos e possibilidades de intervenção de acordo com o perfil encontrado.",
      },
    ],
    info: [
      { rotulo: "Público", valor: "Crianças e adolescentes" },
      { rotulo: "Observa", valor: "Leitura, escrita e matemática" },
      { rotulo: "Diferencial", valor: "Olhar cognitivo e pedagógico" },
      { rotulo: "Inclui", valor: "Família e escola quando necessário" },
    ],
    texto: [
      "A Avaliação Neuropsicopedagógica é voltada principalmente para crianças e adolescentes que apresentam dificuldades no processo de aprendizagem.",
      "Diferente de um reforço escolar, ela não busca repetir conteúdo. O objetivo é entender como o estudante aprende, quais habilidades acadêmicas estão consolidadas e quais fatores podem estar interferindo no desempenho.",
      "Esse olhar une aspectos cognitivos e pedagógicos para orientar a família, a escola e os próximos acompanhamentos com informações mais específicas.",
    ],
  },
  {
    slug: "fonoaudiologia-infantil",
    titulo: "Fonoaudiologia Infantil",
    etiqueta: "Fala e linguagem",
    resumo:
      "Acompanhamento para bebês, crianças e adolescentes com atrasos ou dificuldades de fala, linguagem, comunicação e alimentação.",
    imagem: fonoaudiologiaInfantilImg,
    imagemHero: fonoaudiologiaInfantilHero,
    imagemSecundaria: fonoaudiologiaInfantilImg2,
    paraQuem: [
      "Bebês, crianças e adolescentes com atraso para falar, pouca intenção comunicativa ou dificuldade para se expressar",
      "Crianças com trocas de sons, omissões, fala pouco compreensível ou dificuldade de articulação",
      "Famílias que percebem dificuldade para compreender comandos, narrar acontecimentos ou participar de interações",
      "Demandas ligadas à voz, motricidade orofacial, mastigação, alimentação ou outras funções relacionadas",
      "Crianças com necessidades fonoaudiológicas associadas a transtornos do neurodesenvolvimento ou atraso global",
    ],
    comoFunciona: [
      {
        titulo: "Avaliação da comunicação",
        texto:
          "O primeiro passo é entender como a criança se comunica, compreende, fala, brinca, interage e usa funções orais no dia a dia.",
      },
      {
        titulo: "Plano adequado à idade",
        texto:
          "As metas são definidas conforme fase do desenvolvimento, necessidades observadas e prioridades da família.",
      },
      {
        titulo: "Recursos lúdicos com objetivo",
        texto:
          "Brincadeiras, jogos, livros, objetos e atividades são escolhidos para provocar comunicação, ampliar vocabulário e favorecer clareza da fala.",
      },
      {
        titulo: "Funções orais quando indicado",
        texto:
          "Quando a demanda envolve voz, mastigação, alimentação ou motricidade orofacial, essas áreas também podem compor o plano terapêutico.",
      },
      {
        titulo: "Orientação para os ambientes",
        texto:
          "A família e, quando necessário, a escola recebem sugestões para criar oportunidades de comunicação nas situações reais da criança.",
      },
    ],
    info: [
      { rotulo: "Público", valor: "Bebês, crianças e adolescentes" },
      { rotulo: "Trabalha", valor: "Fala, linguagem e interação" },
      { rotulo: "Pode incluir", valor: "Voz, alimentação e motricidade orofacial" },
      { rotulo: "Recursos", valor: "Atividades lúdicas terapêuticas" },
    ],
    texto: [
      "A Fonoaudiologia Infantil acompanha bebês, crianças e adolescentes no desenvolvimento da fala, linguagem, comunicação, voz, motricidade orofacial e alimentação, conforme a necessidade apresentada.",
      "Na infância, pequenas dificuldades podem aparecer de muitas formas: poucas palavras, fala difícil de entender, trocas de sons, dificuldade para compreender, pouca iniciativa para se comunicar ou desafios ligados à alimentação.",
      "O atendimento transforma brincadeiras e interações em oportunidades terapêuticas, sempre com objetivos definidos e respeito ao ritmo da criança.",
    ],
  },
  {
    slug: "fonoaudiologia-adolescentes-adultos-idosos",
    titulo: "Fonoaudiologia para Adolescentes, Adultos e Idosos",
    etiqueta: "Comunicação em diferentes fases da vida",
    resumo:
      "Acompanhamento fonoaudiológico para voz, fala, linguagem, comunicação, motricidade orofacial e deglutição.",
    imagem: fonoaudiologiaAdultosImg,
    imagemHero: fonoaudiologiaAdultosHero,
    imagemSecundaria: fonoaudiologiaAdultosImg2,
    paraQuem: [
      "Adolescentes, adultos e idosos com mudanças na voz, articulação, clareza da fala, linguagem ou comunicação",
      "Pessoas com dificuldade para mastigar, engolir, coordenar funções orais ou manter segurança durante a alimentação",
      "Adultos e idosos com alterações comunicativas associadas ao envelhecimento ou a condições neurológicas",
      "Pacientes que sentem impacto na convivência, no trabalho, na participação social ou nas atividades diárias",
      "Famílias que precisam entender como apoiar comunicação, alimentação e funcionalidade de modo respeitoso",
    ],
    comoFunciona: [
      {
        titulo: "Escuta da queixa e da rotina",
        texto:
          "A avaliação considera história de saúde, hábitos, atividades diárias, mudanças percebidas e objetivos pessoais do paciente.",
      },
      {
        titulo: "Análise das funções envolvidas",
        texto:
          "Podem ser observadas voz, fala, linguagem, comunicação, motricidade orofacial, mastigação e deglutição, conforme a demanda.",
      },
      {
        titulo: "Plano terapêutico direcionado",
        texto:
          "As estratégias são organizadas para responder às necessidades funcionais de cada fase da vida, sem copiar o modelo infantil.",
      },
      {
        titulo: "Orientações práticas",
        texto:
          "O cuidado pode incluir ajustes e recomendações para comunicação, alimentação, participação social e atividades importantes para o paciente.",
      },
      {
        titulo: "Diálogo com outros cuidados",
        texto:
          "Quando questões neurológicas, envelhecimento ou saúde geral interferem no quadro, o acompanhamento pode se integrar a outros profissionais.",
      },
    ],
    info: [
      { rotulo: "Público", valor: "Adolescentes, adultos e idosos" },
      { rotulo: "Áreas", valor: "Voz, fala, linguagem e deglutição" },
      { rotulo: "Plano", valor: "Adequado à fase da vida" },
      { rotulo: "Foco", valor: "Comunicação, segurança e participação" },
    ],
    texto: [
      "A Fonoaudiologia para adolescentes, adultos e idosos atende demandas que podem afetar comunicação, voz, fala, linguagem, motricidade orofacial e deglutição em diferentes momentos da vida.",
      "Nessa faixa etária, o impacto costuma aparecer na conversa, no trabalho, na alimentação, na convivência social ou na independência para realizar atividades diárias.",
      "Por isso, o plano terapêutico considera a história de saúde, os objetivos pessoais e as necessidades funcionais, incluindo situações associadas ao envelhecimento ou a condições neurológicas quando presentes.",
    ],
  },
  {
    slug: "estimulacao-cognitiva-idosos",
    titulo: "Estimulação Cognitiva para Idosos",
    etiqueta: "Cognição e autonomia",
    resumo:
      "Acompanhamento para idosos com atividades cognitivas significativas, voltadas à memória, atenção, linguagem e organização.",
    imagem: estimulacaoCognitivaIdososImg,
    imagemSecundaria: estimulacaoCognitivaIdososImg2,
    imagemHero: estimulacaoCognitivaIdososHero,
    paraQuem: [
      "Idosos que desejam manter a mente ativa com propostas respeitosas e adequadas ao seu momento de vida",
      "Pessoas com queixas de memória, atenção, linguagem, orientação, planejamento ou organização",
      "Famílias que notam mudanças cognitivas e buscam acompanhamento sem infantilizar o cuidado",
      "Idosos que se beneficiam de atividades ligadas à história pessoal, interesses e situações do cotidiano",
      "Casos com sinais de alteração cognitiva que precisam caminhar junto à investigação e acompanhamento profissional adequado",
    ],
    comoFunciona: [
      {
        titulo: "Conhecimento da pessoa",
        texto:
          "Antes das atividades, são considerados história de vida, preferências, escolaridade, rotina, queixas e objetivos do idoso e da família.",
      },
      {
        titulo: "Escolha de propostas significativas",
        texto:
          "Os exercícios são planejados para fazer sentido, usando temas e situações próximas da vida do paciente, não tarefas mecânicas sem contexto.",
      },
      {
        titulo: "Trabalho das funções cognitivas",
        texto:
          "Memória, atenção, linguagem, raciocínio, orientação temporal e espacial, planejamento e resolução de problemas podem ser trabalhados conforme a necessidade.",
      },
      {
        titulo: "Relação com o cotidiano",
        texto:
          "As propostas podem se conectar a organização de compromissos, conversas, leitura, lembranças, tomada de decisões e outras atividades reais.",
      },
      {
        titulo: "Atenção aos sinais de alerta",
        texto:
          "Quando aparecem mudanças importantes, a família é orientada a buscar investigação e acompanhamento adequado com profissionais de saúde.",
      },
    ],
    info: [
      { rotulo: "Público", valor: "Idosos" },
      { rotulo: "Trabalha", valor: "Memória, atenção e linguagem" },
      { rotulo: "Também envolve", valor: "Orientação, planejamento e organização" },
      { rotulo: "Cuidado", valor: "Respeitoso e conectado à história de vida" },
    ],
    texto: [
      "A Estimulação Cognitiva é voltada ao público idoso e propõe atividades pensadas para manter funções mentais em uso, com respeito à história, aos interesses e ao ritmo de cada pessoa.",
      "O atendimento pode envolver memória, atenção, linguagem, raciocínio, orientação temporal e espacial, planejamento, organização e resolução de problemas, sempre de forma compatível com as possibilidades do paciente.",
      "Mais do que repetir exercícios, o cuidado busca criar experiências que tenham significado: lembrar histórias, organizar informações, sustentar conversas, tomar decisões simples e manter participação nas atividades possíveis.",
    ],
  },
];

export type ConteudoAtendimento = {
  chamada: string;
  chamadaComplementar?: string;
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
      "Uma avaliação para entender o funcionamento cognitivo, emocional e comportamental com profundidade — e transformar dúvidas sobre aprendizagem, atenção, memória ou desenvolvimento em direcionamentos mais claros.",
    chamadaComplementar:
      "Crianças, adolescentes, adultos e idosos com dúvidas sobre atenção, memória, aprendizagem, comportamento ou desenvolvimento.",
    tituloApresentacao: "O Método Evoluta olha para além do teste",
    introducao:
      "O Método de Avaliação Neuropsicológica Evoluta combina entrevista clínica, escolha criteriosa de instrumentos, análise do histórico e integração dos resultados. Essa combinação permite compreender não apenas o desempenho em cada tarefa, mas o que esse desempenho revela sobre o dia a dia do paciente.",
    tituloSituacoes: "Quando a dúvida precisa de investigação técnica",
    textoSituacoes:
      "A avaliação é indicada quando a família, a escola, o próprio paciente ou outros profissionais percebem sinais que não se explicam por uma situação isolada. Ela ajuda a diferenciar dificuldades passageiras de padrões que precisam de acompanhamento.",
    sinais: [
      "Dificuldades persistentes de atenção, concentração, memória, raciocínio ou organização",
      "Questões de aprendizagem que continuam mesmo após apoio escolar ou mudanças na rotina",
      "Dúvidas sobre desenvolvimento infantil, linguagem, comportamento, autonomia ou interação social",
      "Alterações cognitivas ou emocionais percebidas em adultos e idosos",
      "Investigação de TDAH, TEA, deficiência intelectual, transtornos de aprendizagem ou outras condições do neurodesenvolvimento",
    ],
    tituloObjetivos: "Uma devolutiva que orienta decisões",
    textoObjetivos:
      "O objetivo é reunir evidências suficientes para explicar o funcionamento da pessoa e indicar próximos passos. Isso pode apoiar condutas clínicas, adaptações escolares, encaminhamentos, acompanhamento familiar e decisões sobre intervenções.",
    objetivos: [
      "Mapear pontos fortes e áreas que exigem atenção em funções cognitivas e emocionais",
      "Relacionar resultados técnicos à história de vida, escola, trabalho, família e rotina",
      "Organizar hipóteses clínicas com cuidado, sem reduzir o paciente a um diagnóstico",
      "Traduzir achados da avaliação em orientações compreensíveis para quem acompanha o caso",
      "Apontar encaminhamentos e estratégias compatíveis com a necessidade observada",
    ],
    tituloEtapas: "Da entrevista à devolutiva, cada etapa tem uma função",
    textoEtapas:
      "O percurso é estruturado, mas não engessado. A sequência muda conforme idade, demanda, complexidade do caso e informações levantadas durante a avaliação.",
    tituloImagem: "Clareza para os próximos passos",
    textoImagem:
      "A avaliação organiza informações que muitas vezes chegam fragmentadas: queixas da família, observações da escola, desempenho em testes e comportamento do paciente em diferentes situações.",
    participacao: {
      titulo: "Informações de diferentes contextos tornam a leitura mais precisa",
      texto:
        "Quando necessário e autorizado, relatos de familiares, professores e profissionais que já acompanham o paciente podem compor o processo. Esse cuidado evita conclusões isoladas e ajuda a construir orientações aplicáveis à vida real.",
    },
    perguntas: [
      { pergunta: "A avaliação neuropsicológica é igual para todos?", resposta: "Não. A escolha de instrumentos e procedimentos depende da idade, da história clínica, da escolaridade, da rotina e do motivo da avaliação." },
      { pergunta: "Ela serve somente para confirmar diagnóstico?", resposta: "Não. A avaliação pode contribuir para hipóteses diagnósticas, mas também orienta intervenções, adaptações, acompanhamento familiar e encaminhamentos." },
      { pergunta: "O que pode ser investigado?", resposta: "Podem ser avaliadas atenção, memória, linguagem, raciocínio, aprendizagem, funções executivas, velocidade de processamento, habilidades visuoespaciais e aspectos emocionais ou comportamentais." },
      { pergunta: "A devolutiva é compreensível para a família?", resposta: "Sim. A devolutiva organiza os achados de forma clara, relacionando os resultados à vida do paciente e aos próximos passos indicados." },
    ],
  },
  "psicologia-infantil-tcc": {
    chamada:
      "Para crianças e adolescentes, a psicoterapia em TCC cria um espaço de escuta e aprendizagem emocional para lidar com ansiedade, medos, insegurança, conflitos, irritabilidade e mudanças de comportamento.",
    tituloApresentacao: "Um espaço para a criança entender o que sente",
    introducao:
      "A Terapia Cognitivo-Comportamental ajuda a criança ou adolescente a reconhecer emoções, identificar pensamentos que aparecem em situações difíceis e construir respostas mais saudáveis. Para isso, o atendimento usa linguagem acessível, recursos lúdicos e estratégias compatíveis com cada fase do desenvolvimento.",
    tituloSituacoes: "Quando emoções e comportamentos começam a pesar",
    textoSituacoes:
      "A procura costuma acontecer quando a família percebe sofrimento, conflitos frequentes ou mudanças que prejudicam convivência, escola, sono, autoestima, socialização ou adaptação a novas situações.",
    sinais: [
      "Ansiedade, medos, insegurança, preocupação excessiva ou baixa autoestima",
      "Irritabilidade, choro frequente, explosões emocionais ou dificuldade para lidar com frustrações",
      "Isolamento, dificuldade para fazer amigos, se comunicar ou resolver conflitos",
      "Mudanças de comportamento percebidas em casa, na escola ou em ambientes sociais",
      "Dificuldade de adaptação a mudanças, separações, perdas, rotina escolar ou novas exigências",
    ],
    tituloObjetivos: "Estratégias para compreender e responder melhor",
    textoObjetivos:
      "O acompanhamento não busca apagar emoções, mas ajudar a criança a reconhecê-las, dar nome ao que acontece e construir maneiras mais possíveis de enfrentar situações difíceis.",
    objetivos: [
      "Ajudar a criança a identificar sentimentos, pensamentos e reações corporais",
      "Desenvolver estratégias de regulação emocional e enfrentamento de problemas",
      "Fortalecer comunicação, autoestima, habilidades sociais e resolução de conflitos",
      "Trabalhar tolerância à frustração e adaptação a mudanças de forma gradual",
      "Orientar responsáveis para responder às dificuldades com mais consistência e acolhimento",
    ],
    tituloEtapas: "Terapia com vínculo, recurso lúdico e direção clínica",
    textoEtapas:
      "O processo começa pela compreensão da demanda e ganha forma a partir do vínculo com a criança. Brincadeiras, jogos, histórias e conversas são usados com intenção terapêutica, não como atividades soltas.",
    tituloImagem: "Brincar também comunica",
    textoImagem:
      "No atendimento infantil, o brincar pode revelar medos, desejos, conflitos e formas de perceber o mundo. A partir disso, estratégias são construídas de maneira mais acessível para a criança.",
    participacao: {
      titulo: "A família ajuda a levar a terapia para o cotidiano",
      texto:
        "Os responsáveis participam em momentos combinados para compreender o que está sendo trabalhado e ajustar condutas em casa. Esse alinhamento evita que a criança receba mensagens contraditórias entre sessão, família e escola.",
    },
    perguntas: [
      { pergunta: "A criança precisa saber explicar o que está sentindo?", resposta: "Não. Muitas crianças ainda não conseguem verbalizar tudo. Por isso, o atendimento usa recursos adequados à idade para favorecer expressão e compreensão emocional." },
      { pergunta: "A psicoterapia infantil é só conversa?", resposta: "Não. A conversa pode fazer parte, mas jogos, brincadeiras, histórias e atividades estruturadas também são recursos terapêuticos importantes." },
      { pergunta: "Os pais participam?", resposta: "Sim, conforme a necessidade. A orientação aos responsáveis ajuda a dar continuidade às estratégias no cotidiano." },
      { pergunta: "Quando procurar atendimento psicológico infantil?", resposta: "Quando emoções ou comportamentos causam sofrimento, prejuízo na rotina, conflitos frequentes ou dificuldade de adaptação em casa, na escola ou nas relações." },
    ],
  },
  "intervencao-aba": {
    chamada:
      "Uma intervenção comportamental com metas funcionais, pensada para ensinar repertórios que ampliem comunicação, participação, autonomia e aprendizagem nos ambientes em que a pessoa vive.",
    tituloApresentacao: "ABA com objetivos observáveis e aplicáveis",
    introducao:
      "A intervenção baseada em Análise do Comportamento Aplicada observa o repertório atual da pessoa e identifica quais habilidades precisam ser ensinadas ou fortalecidas. O plano é construído com metas funcionais, estratégias claras e acompanhamento do progresso.",
    tituloSituacoes: "Quando habilidades precisam ser ensinadas de forma estruturada",
    textoSituacoes:
      "A ABA pode ser indicada quando dificuldades de comunicação, interação, autonomia ou comportamento reduzem a participação em casa, na escola ou em outros ambientes. A indicação depende sempre da avaliação individual.",
    sinais: [
      "Dificuldade para comunicar necessidades, pedir ajuda, responder ou iniciar interações",
      "Pouca participação em brincadeiras, atividades dirigidas, rotina escolar ou tarefas de vida diária",
      "Necessidade de desenvolver autonomia em alimentação, higiene, organização ou transições",
      "Comportamentos que dificultam aprendizagem, convivência, segurança ou permanência em atividades",
      "Acompanhamento de pessoas com TEA ou outras demandas do desenvolvimento e comportamento",
    ],
    tituloObjetivos: "Ensinar repertórios que apareçam fora da sessão",
    textoObjetivos:
      "As metas são úteis quando fazem diferença na vida real. Por isso, o plano procura transformar objetivos amplos em habilidades observáveis, ensinadas em etapas e acompanhadas com critério.",
    objetivos: [
      "Desenvolver comunicação funcional, interação social e participação em atividades",
      "Ampliar autonomia e habilidades de vida diária conforme necessidade do paciente",
      "Ensinar novos repertórios em passos graduais, respeitando o ponto de partida de cada pessoa",
      "Reduzir barreiras comportamentais que dificultam aprendizagem, segurança ou convivência",
      "Favorecer manutenção e generalização das habilidades para casa, escola e outros contextos",
    ],
    tituloEtapas: "Do repertório atual às metas de intervenção",
    textoEtapas:
      "O acompanhamento começa com levantamento de repertório e definição de prioridades. Depois, as estratégias são aplicadas, observadas e ajustadas conforme as respostas do paciente.",
    tituloImagem: "Intervenção com função no cotidiano",
    textoImagem:
      "Uma meta só faz sentido quando se conecta à vida da pessoa: comunicar uma necessidade, participar de uma brincadeira, seguir uma rotina, aprender uma tarefa ou ganhar mais independência.",
    participacao: {
      titulo: "Generalizar exige alinhamento entre ambientes",
      texto:
        "Quando indicado, família, escola e outros profissionais recebem orientações para que os repertórios trabalhados não fiquem restritos à sessão. A consistência entre ambientes favorece um cuidado mais coerente.",
    },
    perguntas: [
      { pergunta: "ABA é somente para autismo?", resposta: "Não. Embora seja amplamente utilizada no acompanhamento de pessoas com TEA, a ABA também pode ser indicada para outras demandas do desenvolvimento e do comportamento após avaliação individual." },
      { pergunta: "Como as metas são escolhidas?", resposta: "As metas partem do repertório atual, das necessidades observadas e das prioridades funcionais da pessoa e da família." },
      { pergunta: "O atendimento trabalha apenas comportamento?", resposta: "Não. O comportamento é analisado dentro do contexto e pode envolver comunicação, autonomia, interação social, aprendizagem, vida diária e participação." },
      { pergunta: "A escola pode ser orientada?", resposta: "Quando necessário e autorizado, a escola pode receber orientações para favorecer consistência e aplicação das estratégias em outro ambiente importante da vida do paciente." },
    ],
  },
  "avaliacao-neuropsicopedagogica": {
    chamada:
      "Indicada principalmente para crianças e adolescentes, esta avaliação investiga como o estudante aprende e por que leitura, escrita, matemática, atenção ou organização escolar podem não estar avançando como esperado.",
    tituloApresentacao: "Uma avaliação centrada no processo de aprendizagem",
    introducao:
      "A Avaliação Neuropsicopedagógica observa habilidades cognitivas e pedagógicas relacionadas ao desempenho escolar. Ela considera história de desenvolvimento, percurso escolar, leitura, escrita, compreensão, raciocínio lógico-matemático, atenção, memória e estratégias usadas para aprender.",
    tituloSituacoes: "Quando a dificuldade escolar precisa ser compreendida",
    textoSituacoes:
      "A avaliação é indicada quando o estudante se esforça, recebe apoio e ainda assim apresenta barreiras importantes. Nesses casos, é preciso investigar o que está sustentando a dificuldade, em vez de atribuir o problema apenas à falta de interesse.",
    sinais: [
      "Baixo rendimento ou dificuldades escolares persistentes mesmo com acompanhamento da família",
      "Atrasos em leitura, escrita, compreensão de textos ou raciocínio lógico-matemático",
      "Dificuldade de atenção, memória, organização, planejamento ou estratégias de estudo",
      "Suspeitas de dislexia, discalculia, dificuldades de leitura e escrita ou alterações de aprendizagem",
      "Necessidade de orientar adaptações, intervenções e diálogo entre família e escola",
    ],
    tituloObjetivos: "Entender o que interfere no aprender",
    textoObjetivos:
      "O foco é identificar habilidades já consolidadas, pontos de fragilidade e fatores que atrapalham o desempenho escolar. A partir disso, os encaminhamentos deixam de ser genéricos e passam a considerar o perfil do estudante.",
    objetivos: [
      "Mapear habilidades acadêmicas e cognitivas envolvidas na aprendizagem",
      "Observar leitura, escrita, compreensão, matemática, atenção, memória e estratégias de estudo",
      "Diferenciar defasagens pedagógicas, dificuldades específicas e necessidades de acompanhamento",
      "Produzir orientações práticas para família, escola e profissionais envolvidos",
      "Indicar caminhos de intervenção e adaptações conforme o perfil encontrado",
    ],
    tituloEtapas: "Uma investigação que aproxima clínica e escola",
    textoEtapas:
      "O percurso envolve escuta da família, análise da história escolar, avaliação de habilidades acadêmicas e organização dos resultados em orientações compreensíveis.",
    tituloImagem: "Não é reforço: é compreensão do aprender",
    textoImagem:
      "A avaliação neuropsicopedagógica ajuda a enxergar o que está por trás da queixa escolar: quais habilidades sustentam a aprendizagem, onde estão as barreiras e como orientar melhor o estudante.",
    participacao: {
      titulo: "A escola pode ajudar a revelar o funcionamento real do estudante",
      texto:
        "Quando necessário e autorizado, relatos de professores, cadernos e atividades escolares ajudam a compreender como a dificuldade aparece na prática. Essa troca torna as orientações mais úteis para o cotidiano escolar.",
    },
    perguntas: [
      { pergunta: "Avaliação neuropsicopedagógica é reforço escolar?", resposta: "Não. Ela não ensina conteúdo escolar como reforço. O objetivo é compreender habilidades, dificuldades e fatores que interferem na aprendizagem." },
      { pergunta: "Qual a diferença para a avaliação neuropsicológica?", resposta: "A avaliação neuropsicopedagógica tem foco mais direto no processo escolar e nas habilidades acadêmicas. A neuropsicológica investiga de forma mais ampla o funcionamento cognitivo, emocional e comportamental." },
      { pergunta: "A escola participa?", resposta: "Quando necessário e autorizado, informações escolares podem compor a avaliação para tornar os direcionamentos mais próximos da realidade do estudante." },
      { pergunta: "Ela ajuda em suspeitas de dislexia ou discalculia?", resposta: "Pode contribuir para a investigação de dificuldades de leitura, escrita, matemática e outras alterações que impactam o desempenho escolar." },
    ],
  },
  "fonoaudiologia-infantil": {
    chamada:
      "Para bebês, crianças e adolescentes, o atendimento fonoaudiológico acompanha o desenvolvimento da fala, linguagem, comunicação, voz, alimentação e motricidade orofacial com propostas adequadas à idade.",
    tituloApresentacao: "Comunicação desde as primeiras interações",
    introducao:
      "Na infância, comunicar não é apenas pronunciar palavras. Envolve intenção de se comunicar, compreensão, expressão, interação, uso de gestos, clareza dos sons, organização da linguagem e funções orais importantes para alimentação e desenvolvimento.",
    tituloSituacoes: "Quando observar fala, linguagem e alimentação",
    textoSituacoes:
      "A busca pode acontecer quando a criança demora a falar, fala pouco, não é compreendida, troca muitos sons, tem dificuldade para entender comandos, apresenta pouca interação comunicativa ou possui demandas relacionadas à alimentação e motricidade orofacial.",
    sinais: [
      "Poucas palavras, atraso de fala ou dificuldade para formar frases esperadas para a idade",
      "Trocas, omissões, distorções de sons ou fala difícil de compreender",
      "Dificuldade para compreender, responder, narrar acontecimentos ou iniciar interações",
      "Questões de voz, mastigação, alimentação, respiração oral ou motricidade orofacial",
      "Demandas fonoaudiológicas associadas a transtornos do neurodesenvolvimento",
    ],
    tituloObjetivos: "Estimular comunicação com intenção terapêutica",
    textoObjetivos:
      "O atendimento transforma brincadeiras, livros, jogos e interações em oportunidades para desenvolver comunicação. Cada recurso é escolhido com uma finalidade, respeitando a fase da criança e suas necessidades.",
    objetivos: [
      "Favorecer intenção comunicativa, compreensão, expressão e ampliação de vocabulário",
      "Trabalhar articulação, clareza da fala e organização da linguagem conforme a demanda",
      "Apoiar funções de voz, alimentação e motricidade orofacial quando necessário",
      "Usar recursos lúdicos com objetivos terapêuticos, sem perder o vínculo com a criança",
      "Orientar família e escola para ampliar oportunidades de comunicação no cotidiano",
    ],
    tituloEtapas: "Avaliar, planejar e estimular de forma compatível com a infância",
    textoEtapas:
      "O processo começa pela compreensão de como a criança se comunica hoje. A partir disso, o plano terapêutico define prioridades e escolhe atividades que façam sentido para sua idade.",
    tituloImagem: "A brincadeira vira oportunidade de fala",
    textoImagem:
      "Materiais infantis, espelhos, livros, jogos e objetos são usados para provocar trocas comunicativas, trabalhar sons, ampliar linguagem e fortalecer interação.",
    participacao: {
      titulo: "A comunicação cresce também fora da sessão",
      texto:
        "A família pode receber orientações para criar pequenas oportunidades de fala, escuta e interação durante refeições, brincadeiras, leitura e rotina. Quando necessário, a escola também participa desse alinhamento.",
    },
    perguntas: [
      { pergunta: "Quando procurar fonoaudiologia infantil?", resposta: "Quando atrasos ou dificuldades de fala, linguagem, comunicação, alimentação, voz ou articulação persistem ou interferem na participação da criança." },
      { pergunta: "A criança precisa falar para começar?", resposta: "Não. A fonoaudiologia também trabalha intenção comunicativa, compreensão, gestos, interação e outras formas de comunicação." },
      { pergunta: "O atendimento é feito só com brincadeiras?", resposta: "As brincadeiras podem ser usadas, mas sempre com objetivos terapêuticos definidos para fala, linguagem, comunicação ou funções orais." },
      { pergunta: "A família recebe orientações?", resposta: "Sim. A participação da família ajuda a ampliar oportunidades de comunicação nas situações do dia a dia." },
    ],
  },
  "fonoaudiologia-adolescentes-adultos-idosos": {
    chamada:
      "Para adolescentes, adultos e idosos, a fonoaudiologia acompanha alterações de voz, fala, linguagem, comunicação, motricidade orofacial e deglutição que interferem na rotina e na participação social.",
    tituloApresentacao: "Comunicação, voz e deglutição em outras fases da vida",
    introducao:
      "Em adolescentes, adultos e idosos, a demanda fonoaudiológica pode surgir por mudanças na voz, dificuldades de articulação, alterações de linguagem, queixas de comunicação, questões de motricidade orofacial ou dificuldades de mastigação e deglutição. O plano considera o contexto de saúde, os objetivos pessoais e as atividades que fazem parte da vida do paciente.",
    tituloSituacoes: "Quando alterações começam a limitar participação",
    textoSituacoes:
      "A procura é importante quando falar, compreender, se expressar, usar a voz, mastigar ou engolir passa a exigir esforço, gerar insegurança ou interferir em trabalho, estudos, convívio social, alimentação ou autonomia.",
    sinais: [
      "Mudanças na voz, rouquidão persistente, cansaço vocal ou dificuldade para projetar a fala",
      "Fala pouco clara, alterações de articulação, fluência, linguagem ou comunicação",
      "Dificuldade para mastigar, engolir, coordenar funções orais ou manter segurança durante a alimentação",
      "Alterações associadas ao envelhecimento ou a condições neurológicas que afetem comunicação e deglutição",
      "Impacto na vida social, acadêmica, profissional ou nas atividades diárias",
    ],
    tituloObjetivos: "Funcionalidade para conversar, comer e participar com mais segurança",
    textoObjetivos:
      "O atendimento organiza estratégias de acordo com aquilo que realmente interfere na vida do paciente, seja no uso da voz, na clareza da fala, na comunicação, na deglutição ou em funções orais.",
    objetivos: [
      "Avaliar alterações de voz, fala, linguagem, comunicação, motricidade orofacial e deglutição",
      "Construir um plano terapêutico compatível com idade, rotina, saúde e objetivos pessoais",
      "Favorecer comunicação funcional e participação em atividades sociais, acadêmicas ou profissionais",
      "Orientar cuidados relacionados à alimentação e deglutição quando essa demanda estiver presente",
      "Integrar orientações com familiares e outros profissionais quando o caso exigir acompanhamento conjunto",
    ],
    tituloEtapas: "Um plano diferente para cada fase da vida",
    textoEtapas:
      "A avaliação identifica quais funções estão impactadas e como isso aparece no cotidiano. Em seguida, o cuidado é direcionado às prioridades do paciente, com orientações práticas para sua realidade.",
    tituloImagem: "A comunicação sustenta presença e autonomia",
    textoImagem:
      "Falar com clareza, usar a voz, compreender, se expressar e se alimentar com segurança são funções que influenciam convivência, independência e qualidade da participação diária.",
    participacao: {
      titulo: "Cuidado integrado quando a rotina exige apoio",
      texto:
        "Em alguns casos, familiares, cuidadores e profissionais de saúde precisam estar alinhados para favorecer segurança, continuidade das orientações e respeito às necessidades do paciente.",
    },
    perguntas: [
      { pergunta: "Fonoaudiologia também é indicada para adultos?", resposta: "Sim. Adolescentes, adultos e idosos podem precisar de acompanhamento para voz, fala, linguagem, comunicação, motricidade orofacial ou deglutição." },
      { pergunta: "O atendimento é igual ao infantil?", resposta: "Não. A avaliação e o plano consideram fase da vida, histórico de saúde, atividades diárias, objetivos pessoais e queixas apresentadas." },
      { pergunta: "Pode ajudar em alterações relacionadas ao envelhecimento?", resposta: "Pode fazer parte do acompanhamento quando envelhecimento ou condições neurológicas afetam comunicação, voz, funções orais ou deglutição." },
      { pergunta: "A família pode participar?", resposta: "Pode, especialmente quando a rotina, a segurança alimentar, a comunicação ou a continuidade das estratégias dependem de apoio cotidiano." },
    ],
  },
  "estimulacao-cognitiva-idosos": {
    chamada:
      "Voltado ao público idoso, este acompanhamento propõe atividades cognitivas com sentido pessoal para trabalhar memória, atenção, linguagem, orientação, planejamento e organização sem infantilizar o cuidado.",
    tituloApresentacao: "Manter a mente ativa com respeito à história de vida",
    introducao:
      "A Estimulação Cognitiva para Idosos organiza atividades que colocam diferentes funções mentais em uso de forma orientada. O ponto de partida não é apenas a queixa de memória, mas a pessoa: sua história, seus interesses, sua escolaridade, sua rotina e o que ainda deseja preservar no dia a dia.",
    tituloSituacoes: "Quando buscar estímulo cognitivo na terceira idade",
    textoSituacoes:
      "O atendimento pode ser procurado tanto por idosos que desejam manter a mente ativa quanto por famílias que observam mudanças na memória, na organização, na linguagem ou na orientação. Quando há sinais importantes, a estimulação deve caminhar junto à investigação adequada.",
    sinais: [
      "Esquecimentos, dificuldade para manter atenção ou sensação de desorganização no cotidiano",
      "Mudanças na linguagem, no raciocínio, na orientação temporal ou espacial",
      "Desejo de participar de atividades cognitivas planejadas, respeitosas e compatíveis com a idade",
      "Necessidade de manter envolvimento em conversas, leituras, tarefas simples e atividades significativas",
      "Sinais de alteração cognitiva que exigem avaliação e acompanhamento profissional em conjunto",
    ],
    tituloObjetivos: "Atividades que fazem sentido, não exercícios automáticos",
    textoObjetivos:
      "A proposta é trabalhar funções cognitivas por meio de tarefas que tenham relação com a vida do idoso. Isso ajuda a preservar vínculo, motivação e respeito, evitando infantilização ou repetição sem propósito.",
    objetivos: [
      "Estimular memória, atenção, linguagem, raciocínio, orientação, planejamento e organização",
      "Usar temas ligados à história de vida, interesses e rotina do paciente",
      "Favorecer participação em atividades possíveis, conversas e pequenas decisões do cotidiano",
      "Observar mudanças cognitivas ao longo do acompanhamento e orientar a família quando necessário",
      "Manter o cuidado alinhado à investigação profissional quando houver sinais de alteração importante",
    ],
    tituloEtapas: "Da história pessoal às atividades terapêuticas",
    textoEtapas:
      "O processo começa pela compreensão de quem é o idoso e de quais demandas aparecem. Depois, as atividades são selecionadas para trabalhar funções cognitivas com significado e adequação.",
    tituloImagem: "Memória também é identidade",
    textoImagem:
      "Na estimulação cognitiva, lembrar, organizar, nomear, planejar e resolver pequenas situações pode se conectar a histórias, preferências e atividades que fazem parte da vida do idoso.",
    participacao: {
      titulo: "A família pode apoiar sem transformar cuidado em cobrança",
      texto:
        "Quando a família participa, as orientações ajudam a oferecer estímulos possíveis no dia a dia, com respeito ao ritmo do idoso. Se houver mudanças importantes, a equipe orienta a busca por investigação e acompanhamento adequados.",
    },
    perguntas: [
      { pergunta: "Estimulação cognitiva é só treino de memória?", resposta: "Não. Memória pode ser trabalhada, mas o atendimento também envolve atenção, linguagem, raciocínio, orientação, planejamento, organização e resolução de problemas." },
      { pergunta: "Ela é indicada apenas quando já existe diagnóstico?", resposta: "Não. Também pode ser procurada por idosos que desejam manter a mente ativa. Quando há sinais importantes, deve caminhar junto à investigação profissional adequada." },
      { pergunta: "As atividades são infantilizadas?", resposta: "Não. As propostas são escolhidas com respeito à idade, história, interesses, escolaridade e possibilidades do idoso." },
      { pergunta: "A família recebe orientação?", resposta: "Pode receber orientações para apoiar estímulos cotidianos de forma possível, respeitosa e sem transformar o cuidado em pressão." },
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
  papel: "Psicóloga • Neuropsicóloga • Especialista em Neuropsicologia • Fundadora da Clínica Evoluta",
  imagem: jessicaAsset.url,
  proposito:
    "Psicóloga, neuropsicóloga, especialista em Neuropsicologia e fundadora da Clínica Evoluta — Desenvolvimento Infantil.",
  intro: [
    "Sua trajetória profissional é marcada pela atuação clínica, avaliação neuropsicológica, desenvolvimento infantil, transtornos do neurodesenvolvimento, aprendizagem e formação de profissionais da área.",
  ],
  formacao: [
    "Graduação em Psicologia",
    "Pós-graduação em Neuropsicologia",
    "Pós-graduação em Terapia Cognitivo-Comportamental na Infância e Adolescência",
    "Pós-graduação em Intervenção ABA aplicada ao Transtorno do Espectro Autista e à Deficiência Intelectual",
    "Especialista em Neuropsicologia pelo Conselho Federal de Psicologia",
    "Idealizadora, fundadora e diretora da Clínica Evoluta — Desenvolvimento Infantil, em São Gabriel da Palha/ES",
    "Atuação em avaliação neuropsicológica em diferentes fases do desenvolvimento",
    "Experiência com transtornos do neurodesenvolvimento, dificuldades de aprendizagem e demandas cognitivas, emocionais e comportamentais",
    "Supervisora e mentora de profissionais da área de Neuropsicologia",
    "Criadora do Método de Avaliação Neuropsicológica Evoluta, desenvolvido a partir de sua experiência clínica",
  ],
  obras: [
    {
      titulo: "Vozes da Neurodiversidade",
      nota: "Uma obra que reúne diferentes perspectivas sobre neurodiversidade, desenvolvimento e inclusão.",
    },
    {
      titulo: "TDAH na Escola",
      nota: "Lançamento em 2026 — compreensão do TDAH no contexto escolar, da identificação ao acompanhamento.",
    },
    {
      titulo: "Psicologia Clínica: o que não te ensinaram na universidade",
      nota: "Lançamento em 2026 — desafios, aprendizados e reflexões que ultrapassam a formação acadêmica.",
    },
  ],
  autoriaIntroducao:
    "Além da atuação clínica, Jéssica Pelissari também participa da produção e disseminação de conhecimento na área da Psicologia e Neuropsicologia.",
  fechamento:
    "Sua atuação une ciência, prática clínica, experiência e formação, com o propósito de contribuir para uma Psicologia cada vez mais qualificada, individualizada e conectada às necessidades reais das pessoas.",
};

export const sobreClinica = [
  {
    titulo: "Equipe multidisciplinar",
    texto:
      "Psicologia, Neuropsicologia, Neuropsicopedagogia, Fonoaudiologia e ABA trabalham de forma integrada para oferecer um cuidado completo.",
  },
  {
    titulo: "Avaliar para compreender",
    texto:
      "As avaliações neuropsicológicas são realizadas por meio do Método de Avaliação Neuropsicológica Evoluta, integrando cognição, aprendizagem, emoções e comportamento para compreender cada caso e direcionar as melhores estratégias.",
  },
  {
    titulo: "Cada pessoa é única",
    texto:
      "O atendimento é individualizado e respeita a história, as necessidades, as potencialidades e o ritmo de cada paciente, a partir de uma avaliação cuidadosa e personalizada.",
  },
  {
    titulo: "Cuidado que se conecta",
    texto:
      "Quando necessário, integramos família, escola e outros profissionais. Nossa equipe é supervisionada para construir estratégias alinhadas e promover um cuidado integrado em diferentes contextos.",
  },
];

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
  compraUrl: string;
  secoes: { titulo: string; texto: string }[];
  conteudo: string[];
  texto: string[];
};

export const cursos: Curso[] = [
  {
    slug: "desenvolvimento-infantil-na-pratica",
    titulo: "Desenvolvimento Infantil na Prática",
    etiqueta: "Curso online",
    resumo:
      "Formação prática para compreender o desenvolvimento infantil, reconhecer sinais de alerta e fazer direcionamentos mais seguros.",
    imagem: cursoDesenvolvimentoInfantil.url,
    duracao: "Acesso online pela plataforma",
    formato: "Curso online",
    investimento: "R$ 47,00",
    publico: "Pais, professores e profissionais da saúde",
    compraUrl: "https://pay.kiwify.com.br/nPM8b7k",
    secoes: [
      {
        titulo: "O que é?",
        texto:
          "Uma formação prática que apresenta os principais aspectos do desenvolvimento infantil e ensina a reconhecer sinais de alerta e possíveis dificuldades ao longo da infância.",
      },
      {
        titulo: "Para que serve?",
        texto:
          "Para ampliar o conhecimento sobre o desenvolvimento infantil, facilitar a identificação de sinais que merecem atenção e orientar sobre quando e como buscar avaliação e acompanhamento especializado.",
      },
      {
        titulo: "Para quem é?",
        texto:
          "Voltada para pais, professores e profissionais da saúde que desejam compreender melhor o desenvolvimento das crianças e ter mais segurança para identificar sinais de alerta e realizar os direcionamentos adequados.",
      },
    ],
    conteudo: [
      "Principais marcos e aspectos do desenvolvimento infantil",
      "Sinais de alerta que merecem atenção ao longo da infância",
      "Possíveis dificuldades que podem aparecer no desenvolvimento",
      "Quando buscar avaliação e acompanhamento especializado",
      "Direcionamentos mais seguros para família, escola e saúde",
    ],
    texto: [
      "A formação Desenvolvimento Infantil na Prática foi criada para transformar conhecimento técnico em orientações acessíveis e aplicáveis no cotidiano de quem convive com crianças.",
      "O curso ajuda a observar o desenvolvimento com mais clareza, entender quando uma dificuldade precisa de atenção e saber como buscar apoio especializado sem esperar que os sinais se agravem.",
    ],
  },
];

export type Livro = {
  slug: string;
  titulo: string;
  etiqueta: string;
  resumo: string;
  imagem: string;
  formato: string;
  investimento: string;
  publico: string;
  compraUrl: string;
  texto: string[];
  destaques: string[];
};

export const livros: Livro[] = [
  {
    slug: "entendendo-o-tdah",
    titulo: "Além da Distração: Entendendo o TDAH na Infância e Adolescência",
    etiqueta: "E-book",
    resumo:
      "Um material em linguagem leve e acessível para compreender o TDAH na infância e adolescência com base em evidências e prática clínica.",
    imagem: ebookEntendendoTdah,
    formato: "E-book digital",
    investimento: "R$ 27,90",
    publico: "Famílias, educadores e profissionais que acompanham crianças com TDAH",
    compraUrl: "https://pay.kiwify.com.br/5UPH5Xt",
    texto: [
      "Escrito pela psicóloga e neuropsicóloga Jéssica Pelissari, o e-book traduz a ciência do TDAH em uma linguagem leve, clara e acessível.",
      "Com base em evidências e na prática clínica, o material reúne informações, reflexões e estratégias para compreender e apoiar o desenvolvimento emocional e cognitivo de crianças com TDAH.",
      "A proposta é unir conhecimento técnico e sensibilidade humana para ajudar famílias, educadores e profissionais a enxergarem além da distração.",
    ],
    destaques: [
      "Explicações acessíveis sobre TDAH na infância e adolescência",
      "Reflexões para compreender comportamento, atenção e desenvolvimento",
      "Estratégias de apoio para o cotidiano familiar e escolar",
      "Conteúdo escrito por Jéssica Pelissari, psicóloga e neuropsicóloga",
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

