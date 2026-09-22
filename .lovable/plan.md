# Plano

Vou aprofundar individualmente cada página de atendimento usando o DOCX `Nossos Serviços`, mantendo o foco nos atendimentos prestados pela Clínica Evoluta, não em diagnósticos.

## O que será ajustado

- Reescrever o conteúdo dos 7 atendimentos atuais com base direta nas explicações do DOCX:
  - Avaliação Neuropsicológica
  - Psicologia Infantil – Terapia Cognitivo-Comportamental
  - Psicologia com Intervenção Baseada em ABA
  - Avaliação Neuropsicopedagógica
  - Fonoaudiologia Infantil
  - Fonoaudiologia para Adolescentes, Adultos e Idosos
  - Estimulação Cognitiva para Idosos
- Deixar cada página menos genérica, com textos próprios para:
  - apresentação do atendimento;
  - como funciona;
  - para quem é indicado;
  - situações que justificam buscar o atendimento;
  - objetivos do acompanhamento;
  - perguntas frequentes.
- Ajustar os títulos internos que hoje são genéricos, para que cada página pareça escrita especificamente para aquele atendimento.
- Preservar a estrutura visual já aprovada: foto no topo, imagens ao longo da página, bio da Jéssica antes de “Outros atendimentos”, mapa no fim e botão “Falar com equipe Evoluta”.

## Detalhes técnicos

- Atualizar principalmente `src/data/site.ts`, ampliando os dados de cada atendimento.
- Ajustar `src/routes/atendimentos.$slug.tsx` apenas onde for necessário para exibir títulos e blocos personalizados por atendimento.
- Manter os slugs atuais e os redirecionamentos antigos funcionando.
- Não alterar a página inicial além do que for consequência direta dos dados de atendimento já usados nos cards.
