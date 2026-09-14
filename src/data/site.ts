import heroImg from "@/assets/hero-psicopedagoga.jpg";
import sobreImg from "@/assets/sobre.jpg";
import ctaImg from "@/assets/cta-conversa.jpg";
import atendAprendizagem from "@/assets/atend-aprendizagem.jpg";
import atendTdah from "@/assets/atend-tdah.jpg";
import atendDislexia from "@/assets/atend-dislexia.jpg";
import atendAvaliacao from "@/assets/atend-avaliacao.jpg";
import atendOrientacao from "@/assets/atend-orientacao.jpg";
import cursoAlfabetizacao from "@/assets/curso-alfabetizacao-novo.jpg";
import cursoOnline from "@/assets/curso-funcoes-limpo.jpg";
import cursoFamilias from "@/assets/curso-familias-novo.jpg";
import blogLeitura from "@/assets/blog-leitura.jpg";
import blogRotina from "@/assets/blog-rotina.jpg";
import blogMatematica from "@/assets/blog-matematica.jpg";
import blogHero from "@/assets/blog-hero.jpg";
import novidadesHero from "@/assets/novidades-hero.jpg";

export const images = {
  hero: heroImg,
  sobre: sobreImg,
  cta: ctaImg,
  blogHero,
  novidadesHero,
};

export const site = {
  nome: "Marina Alvez",
  papel: "Psicopedagoga Clínica",
  slogan: "Aprender com acolhimento, no tempo de cada criança",
  whatsapp: "https://wa.me/5500000000000",
  telefone: "+55 (00) 00000-0000",
  email: "contato@exemplo.com.br",
  instagram: "@exemplo.psicopedagogia",
  cidade: "Atendimento presencial e online",
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
    slug: "dificuldades-de-aprendizagem",
    titulo: "Dificuldades de aprendizagem",
    etiqueta: "Crianças e adolescentes",
    resumo:
      "Intervenção individual para quem apresenta defasagem escolar, desmotivação ou queixas recorrentes de professores.",
    imagem: atendAprendizagem,
    paraQuem: [
      "Crianças com notas em queda ou recusa em fazer as tarefas",
      "Adolescentes que se dizem incapazes de aprender",
      "Famílias que já ouviram da escola que “falta esforço”",
    ],
    comoFunciona: [
      {
        titulo: "Escuta inicial",
        texto: "Primeiro encontro com os responsáveis para entender a história escolar e o que já foi tentado.",
      },
      {
        titulo: "Sessões individuais",
        texto: "Atividades lúdicas e mediadas que devolvem a confiança e reorganizam a forma de estudar.",
      },
      {
        titulo: "Ponte com a escola",
        texto: "Conversas periódicas com professores para alinhar adaptações simples em sala de aula.",
      },
    ],
    info: [
      { rotulo: "Duração", valor: "50 minutos por sessão" },
      { rotulo: "Frequência", valor: "1 a 2 encontros por semana" },
      { rotulo: "Formato", valor: "Presencial ou online" },
      { rotulo: "Idades", valor: "6 a 17 anos" },
    ],
    texto: [
      "A dificuldade de aprendizagem raramente aparece sozinha: ela vem acompanhada de vergonha, cansaço e de uma história de tentativas frustradas. O trabalho começa devolvendo à criança a sensação de que é possível aprender.",
      "Cada plano é construído a partir do que essa criança já sabe fazer bem. A partir daí, ampliamos repertório de leitura, escrita, cálculo e organização em pequenos passos observáveis.",
    ],
  },
  {
    slug: "tdah-e-atencao",
    titulo: "TDAH e atenção",
    etiqueta: "Foco e organização",
    resumo:
      "Estratégias práticas de atenção, planejamento e autorregulação para o dia a dia da escola e de casa.",
    imagem: atendTdah,
    paraQuem: [
      "Crianças com diagnóstico de TDAH em acompanhamento multiprofissional",
      "Estudantes que perdem prazos, materiais e instruções",
      "Adolescentes que precisam de método de estudo próprio",
    ],
    comoFunciona: [
      {
        titulo: "Mapa da rotina",
        texto: "Observamos como o tempo é usado hoje, do despertador até a lição da noite.",
      },
      {
        titulo: "Treino de funções executivas",
        texto: "Jogos e tarefas que exercitam foco sustentado, memória de trabalho e planejamento.",
      },
      {
        titulo: "Combinados visuais",
        texto: "Quadros, listas e lembretes construídos junto com a criança — não impostos a ela.",
      },
    ],
    info: [
      { rotulo: "Duração", valor: "50 minutos por sessão" },
      { rotulo: "Frequência", valor: "Semanal" },
      { rotulo: "Formato", valor: "Presencial ou online" },
      { rotulo: "Extras", valor: "Devolutiva mensal aos responsáveis" },
    ],
    texto: [
      "Atenção não se resolve com bronca. Ela se organiza com previsibilidade, ambiente adequado e ferramentas que a criança aprende a usar sozinha.",
      "O acompanhamento caminha junto com médicos, terapeutas e escola, para que todos falem a mesma língua sobre o que funciona.",
    ],
  },
  {
    slug: "dislexia-e-leitura",
    titulo: "Dislexia e leitura",
    etiqueta: "Linguagem escrita",
    resumo:
      "Trabalho estruturado de consciência fonológica, fluência de leitura e produção de texto.",
    imagem: atendDislexia,
    paraQuem: [
      "Crianças que trocam, omitem ou inventam letras ao ler",
      "Estudantes com leitura muito lenta para a idade",
      "Adolescentes que evitam qualquer atividade de escrita",
    ],
    comoFunciona: [
      {
        titulo: "Sondagem da leitura",
        texto: "Avaliação de decodificação, fluência e compreensão para saber exatamente onde apoiar.",
      },
      {
        titulo: "Programa estruturado",
        texto: "Sequência multissensorial de sons, sílabas e palavras, com material concreto.",
      },
      {
        titulo: "Leitura com sentido",
        texto: "Textos escolhidos com a criança, para que a leitura volte a ter propósito e prazer.",
      },
    ],
    info: [
      { rotulo: "Duração", valor: "50 minutos por sessão" },
      { rotulo: "Frequência", valor: "2 encontros por semana" },
      { rotulo: "Formato", valor: "Preferencialmente presencial" },
      { rotulo: "Materiais", valor: "Inclusos no acompanhamento" },
    ],
    texto: [
      "A dislexia não impede o aprendizado da leitura: ela exige um caminho mais explícito, mais repetido e mais visível para quem aprende.",
      "Com método estruturado e constância, a leitura deixa de ser um teste diário de coragem e passa a ser uma habilidade que a criança reconhece em si.",
    ],
  },
  {
    slug: "avaliacao-psicopedagogica",
    titulo: "Avaliação psicopedagógica",
    etiqueta: "Processo diagnóstico",
    resumo:
      "Investigação completa das funções envolvidas na aprendizagem, com relatório e plano de intervenção.",
    imagem: atendAvaliacao,
    paraQuem: [
      "Famílias que precisam entender a origem da dificuldade",
      "Escolas que solicitaram um olhar especializado",
      "Casos que exigem relatório para adaptações formais",
    ],
    comoFunciona: [
      { titulo: "1. Anamnese", texto: "Entrevista detalhada com os responsáveis sobre desenvolvimento e história escolar." },
      { titulo: "2. Sessões de investigação", texto: "De 6 a 8 encontros com provas pedagógicas, jogos e observação clínica." },
      { titulo: "3. Escuta da escola", texto: "Contato com professores e análise de cadernos e produções." },
      { titulo: "4. Relatório", texto: "Documento escrito com hipóteses, conclusões e recomendações." },
      { titulo: "5. Devolutiva", texto: "Encontro com a família e, quando possível, com a equipe escolar." },
      { titulo: "6. Plano de intervenção", texto: "Definição dos próximos passos, dentro ou fora do consultório." },
    ],
    info: [
      { rotulo: "Duração total", valor: "6 a 8 semanas" },
      { rotulo: "Encontros", valor: "8 sessões em média" },
      { rotulo: "Entrega", valor: "Relatório completo + devolutiva" },
      { rotulo: "Formato", valor: "Presencial" },
    ],
    texto: [
      "Avaliar é organizar informação: o que a criança já domina, o que ainda não se estabeleceu e o que atrapalha o processo.",
      "O relatório é escrito em linguagem clara, para servir tanto à família quanto à escola.",
    ],
  },
  {
    slug: "orientacao-a-pais-e-escolas",
    titulo: "Orientação a pais e escolas",
    etiqueta: "Consultoria",
    resumo:
      "Encontros de orientação para famílias e formações para equipes pedagógicas que querem incluir de verdade.",
    imagem: atendOrientacao,
    paraQuem: [
      "Pais exaustos com o conflito diário da lição de casa",
      "Escolas que desejam formar sua equipe em inclusão",
      "Educadores que buscam adaptações viáveis na prática",
    ],
    comoFunciona: [
      {
        titulo: "Escuta do contexto",
        texto: "Entendemos a rotina, os combinados atuais e o que já gera desgaste.",
      },
      {
        titulo: "Orientação prática",
        texto: "Poucas mudanças por vez, escolhidas com a família ou com a equipe.",
      },
      {
        titulo: "Acompanhamento",
        texto: "Retornos para ajustar o que funcionou e abandonar o que não sustentou.",
      },
    ],
    info: [
      { rotulo: "Duração", valor: "60 minutos por encontro" },
      { rotulo: "Frequência", valor: "Quinzenal ou mensal" },
      { rotulo: "Formato", valor: "Online ou na escola" },
      { rotulo: "Grupos", valor: "Formações para até 30 educadores" },
    ],
    texto: [
      "Nenhuma criança aprende sozinha. Quando os adultos ao redor mudam a forma de olhar e de combinar, o comportamento muda também.",
      "As orientações são sempre concretas: o que dizer, quando parar, como dividir a tarefa, como registrar o progresso.",
    ],
  },
];

export const destaques = [
  {
    titulo: "Escuta antes do método",
    texto: "Cada plano começa pela história da criança e pelas queixas reais da família.",
  },
  {
    titulo: "Intervenção lúdica",
    texto: "Jogos, materiais concretos e desafios ajustados ao nível de cada aprendiz.",
  },
  {
    titulo: "Parceria com a escola",
    texto: "Contato com professores para que as adaptações aconteçam em sala de aula.",
  },
  {
    titulo: "Devolutiva clara",
    texto: "Relatórios e conversas em linguagem simples, com próximos passos definidos.",
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
  conteudo: string[];
  texto: string[];
};

export const cursos: Curso[] = [
  {
    slug: "alfabetizacao-sem-sofrimento",
    titulo: "Alfabetização sem sofrimento",
    etiqueta: "Turma aberta",
    resumo:
      "Como conduzir a entrada na leitura e na escrita com método estruturado e sem brigas diárias.",
    imagem: cursoAlfabetizacao,
    duracao: "8 encontros de 1h30",
    formato: "Online, ao vivo, com gravações",
    investimento: "Sob consulta",
    publico: "Professores, psicopedagogos e famílias",
    conteudo: [
      "Consciência fonológica na prática",
      "Sequência de sons e sílabas passo a passo",
      "Como corrigir sem desmotivar",
      "Materiais concretos de baixo custo",
      "Registro simples de progresso",
    ],
    texto: [
      "Um curso para quem acompanha crianças no início da leitura e sente que falta um caminho claro entre uma atividade e a próxima.",
      "Cada encontro traz uma prática para aplicar já na semana seguinte, com espaço para trazer casos reais.",
    ],
  },
  {
    slug: "funcoes-executivas-na-pratica",
    titulo: "Funções executivas na prática",
    etiqueta: "Novo",
    resumo:
      "Atenção, planejamento e autorregulação com atividades aplicáveis em consultório e sala de aula.",
    imagem: cursoOnline,
    duracao: "6 encontros de 2h",
    formato: "Online, ao vivo",
    investimento: "Sob consulta",
    publico: "Psicopedagogos, terapeutas e educadores",
    conteudo: [
      "O que são funções executivas, sem jargão",
      "Como observar e registrar dificuldades",
      "Jogos de foco e memória de trabalho",
      "Rotinas visuais que a criança ajuda a criar",
      "Casos comentados em grupo",
    ],
    texto: [
      "Focado em prática: cada aula termina com um protocolo pronto para usar no atendimento ou na aula.",
      "Inclui material de apoio imprimível e encontro extra de supervisão em grupo.",
    ],
  },
  {
    slug: "familia-que-apoia",
    titulo: "Família que apoia",
    etiqueta: "Para pais",
    resumo:
      "Um percurso curto para transformar a lição de casa em um momento possível — e às vezes até leve.",
    imagem: cursoFamilias,
    duracao: "4 encontros de 1h",
    formato: "Online, ao vivo",
    investimento: "Sob consulta",
    publico: "Pais e responsáveis",
    conteudo: [
      "Ambiente e horário que favorecem o estudo",
      "Como dividir tarefas grandes em partes",
      "O que fazer quando a criança trava",
      "Elogio que ensina, elogio que atrapalha",
      "Conversas produtivas com a escola",
    ],
    texto: [
      "Feito para famílias cansadas do conflito diário, com orientações simples e realistas.",
      "Sem receitas mágicas: combinados possíveis, testados com muitas famílias.",
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
    slug: "sinais-de-dificuldade-de-leitura",
    titulo: "Sete sinais de que a leitura merece atenção",
    categoria: "Leitura",
    data: "12 de agosto de 2026",
    leitura: "5 min de leitura",
    resumo:
      "Trocar letras é esperado até certa idade. Veja quais sinais indicam que é hora de investigar com cuidado.",
    imagem: blogLeitura,
    paragrafos: [
      "Toda criança comete erros ao aprender a ler. O que diferencia um erro esperado de um sinal de alerta é a persistência: quando a mesma dificuldade continua depois de muito ensino e muita prática, vale investigar.",
      "Entre os sinais mais frequentes estão a leitura muito lenta para a idade, a troca de letras com sons parecidos, a perda constante da linha do texto, a dificuldade de contar o que acabou de ler e a recusa em ler em voz alta.",
      "Também observamos o cansaço: crianças que leem decodificando cada sílaba gastam tanta energia no processo que sobra pouca atenção para compreender o sentido.",
      "Investigar cedo não é rotular. É evitar anos de esforço na direção errada e devolver à criança a chance de ler com autonomia.",
    ],
  },
  {
    slug: "licao-de-casa-sem-briga",
    titulo: "Lição de casa sem briga: por onde começar",
    categoria: "Rotina",
    data: "28 de julho de 2026",
    leitura: "4 min de leitura",
    resumo:
      "Três ajustes de ambiente e combinado que reduzem o conflito antes de mexer no conteúdo.",
    imagem: blogRotina,
    paragrafos: [
      "Antes de cobrar mais empenho, vale olhar para as condições: onde a criança estuda, a que hora, com quantos estímulos por perto e por quanto tempo seguido.",
      "Um lugar fixo, sem tela ligada, e blocos curtos de trabalho com pausas previsíveis costumam mudar mais o resultado do que qualquer discurso sobre responsabilidade.",
      "O segundo ajuste é o tamanho da tarefa. Uma lista de dez exercícios assusta; a mesma lista dividida em três partes visíveis parece possível.",
      "O terceiro é o papel do adulto: acompanhar por perto no começo e ir se afastando, em vez de sentar junto até o fim todos os dias.",
    ],
  },
  {
    slug: "matematica-nao-e-dom",
    titulo: "Matemática não é dom, é construção",
    categoria: "Aprendizagem",
    data: "9 de julho de 2026",
    leitura: "6 min de leitura",
    resumo:
      "Por que pular a fase concreta cria buracos que aparecem anos depois, e como retomar esse caminho.",
    imagem: blogMatematica,
    paragrafos: [
      "A frase “não levo jeito para números” quase sempre esconde uma etapa não construída: a relação entre quantidade, símbolo e operação.",
      "Quando a criança avança para a conta no papel sem ter manipulado quantidades, ela memoriza procedimentos que desmoronam no primeiro problema diferente.",
      "Retomar o concreto não é retrocesso. Material dourado, fichas, dinheiro de brinquedo e situações do dia a dia reconstroem o sentido do número em poucas semanas.",
      "Depois disso, o algoritmo volta a fazer sentido — e a criança passa a saber por que a conta funciona, não apenas como repeti-la.",
    ],
  },
];

export const novidades = [
  {
    data: "Setembro de 2026",
    titulo: "Novas vagas para avaliação psicopedagógica",
    texto:
      "Abertura de quatro vagas para processos de avaliação com início em setembro, nos períodos da manhã e tarde.",
    etiqueta: "Agenda",
  },
  {
    data: "Agosto de 2026",
    titulo: "Turma de “Alfabetização sem sofrimento”",
    texto:
      "Inscrições abertas para a nova turma online, com encontros ao vivo às terças e gravações liberadas por seis meses.",
    etiqueta: "Cursos",
  },
  {
    data: "Julho de 2026",
    titulo: "Formação para equipe pedagógica",
    texto:
      "Encontro de formação sobre adaptações em sala de aula realizado com a equipe de uma escola parceira.",
    etiqueta: "Escolas",
  },
  {
    data: "Junho de 2026",
    titulo: "Roda de conversa com famílias",
    texto:
      "Encontro gratuito e online sobre rotina de estudos, com espaço para perguntas ao final.",
    etiqueta: "Evento",
  },
];
