# Site da psicopedagoga — layout completo

Site institucional com visual sofisticado inspirado no modelo enviado (foto grande no topo, blocos claros, tipografia serifada elegante), na paleta **Areia & Terracota** (#faf8f5, #f0ebe3, #c4654a, #4a4038). Todo o conteúdo será de exemplo (nomes, textos, depoimentos e contatos fictícios) para você substituir depois.

## Menu

Início · Atendimentos (abre uma lista com as 5 especialidades) · Cursos · Blog · Novidades · Contato

## Página Início

Mesmas seções do modelo enviado, adaptadas:

1. Topo com foto da profissional, título em três frases e botão de contato
2. "Sobre mim" com texto + quatro destaques com ícones
3. "Atendimentos" em quatro/cinco cartões com foto e etiqueta
4. Depoimentos de famílias em três cartões com citação
5. Faixa de chamada final "Vamos conversar" com foto
6. Rodapé com links, contatos e redes

## Atendimentos

Uma página de visão geral que lista as cinco especialidades e leva a cinco páginas próprias, cada uma com um **modelo de layout diferente** (foto, explicação e informações do atendimento):

1. **Dificuldades de aprendizagem** — foto lateral grande + texto em coluna única
2. **TDAH e atenção** — foto em faixa larga no topo + duas colunas de informação
3. **Dislexia e leitura** — blocos alternados foto/texto (zigue-zague)
4. **Avaliação psicopedagógica** — grade de etapas do processo + foto em destaque
5. **Orientação a pais e escolas** — layout editorial com citação grande e barra lateral de informações

Cada página traz: foto, para quem é indicado, como funciona, duração/formato e botão de contato.

## Cursos

Cartões de curso com imagem de capa, descrição, tópicos do conteúdo e botão de WhatsApp; página de detalhe do curso no mesmo formato.

## Blog

Lista de postagens informativas com imagem, categoria e resumo, mais páginas de leitura completa de cada postagem (conteúdo de exemplo sobre aprendizagem infantil).

## Novidades

Mural de avisos e agenda (turmas abertas, palestras, participações), em formato de linha do tempo.

## Contato

Formulário visual (apenas layout, sem envio), horários de atendimento, links de WhatsApp/Instagram e observação sobre atendimento online e presencial.

## Detalhes técnicos

- Rotas TanStack: `/`, `/atendimentos` + 5 rotas filhas, `/cursos` e `/cursos/$slug`, `/blog` e `/blog/$slug`, `/novidades`, `/contato`
- Paleta e tipografia definidas como tokens em `src/styles.css` (fonte serifada para títulos, sem serifa para textos)
- Cabeçalho e rodapé compartilhados no layout raiz, com menu de especialidades responsivo
- Imagens geradas por IA no estilo da referência (tons areia/terracota, ambiente de consultório e materiais pedagógicos)
- Textos de conteúdo em arquivos de dados simples, fáceis de trocar depois
- Metadados de título/descrição próprios em cada página
