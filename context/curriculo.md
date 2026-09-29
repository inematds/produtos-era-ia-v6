# Produtos na era da IA v6 — currículo

Formato: `formato-curso-v6` (perfil **não técnico**, com módulos, glossário e material complementar).
`<meta name="curso" content="produtosia6">`. Fonte: curso v2 `~/projetos/produtos-era-ia` (`build/content-t*.mjs`),
que por sua vez vem do vídeo + post em `~/projetos/output/produtos-era-ia/fonte/`.

**Regra editorial herdada do v2: NÃO citar a fonte.** Nada de nome do autor, Skool, comunidade, "meu app/canal",
biografia. Anedotas em 1ª pessoa viram exemplos neutros ("um fundador vendeu a empresa pelos dados"). Ferramentas
podem aparecer como exemplo (Sentry, PostHog, Hotjar, Reddit, TikTok, 21st.dev, Awwwards). Modelo com nome de versão
futura: "o modelo mais forte do momento".

## Passo 0 — descoberta (aprovado pelo Nei em 28/09/2026)

1. **Aluno:** profissional de 30+ com uma ideia de produto ou serviço digital. Usa chat de IA, talvez já montou um app
   simples pedindo ao chat, nunca programou. Não é técnico.
2. **Profissões-alvo:** **contadora** e **fisioterapeuta** (inéditas nos cursos v6).
3. **Tecnologia:** chat de IA, planilha, WhatsApp, redes sociais.
4. **Sai fazendo:** a **ficha da ideia** (um nome só no curso inteiro): um documento que a pessoa preenche aula a aula —
   perguntas de oportunidade com nota, pré-mortem, aposta mínima, frase de posicionamento, plano de 30 dias,
   teste com usuários simulados. Quem não tem ideia própria usa a da Marta ou a do Heitor.
5. **Tempo:** aulas de ~15 min. O texto integral do v2 fica no material complementar (fora do tempo).

## Personagens (os mesmos no curso inteiro)

- **Marta**, 51, contadora com escritório próprio em Joinville (SC). Atende 60 clientes, quase todos MEI e pequenas
  empresas. Ideia: um app que avisa cada cliente do que falta no mês e junta notas e comprovantes antes do fechamento.
- **Heitor**, 38, fisioterapeuta numa clínica de reabilitação em Recife (PE). Ideia: um app de exercícios em casa para
  pacientes que operaram o joelho, com vídeo curto de cada exercício e registro diário da dor.
- Figurantes com nome só quando precisar: Dona Célia (cliente MEI da Marta, doceira), seu Arlindo (paciente do Heitor, 67).

`data-ex="contadora"` e `data-ex="fisioterapeuta"`. Alternar as duas em cada aula.

## Estrutura: 3 módulos × 6 aulas (cada módulo v2 → 2 aulas de 3 tópicos)

Conteúdo v2 de cada aula: `context/v2-outline.md`. Complementar gerado: `node tools/complementar.mjs --injeta`.

### Módulo 1 — A mentalidade (aulas 1–6)

| Aula | Título | Tipo | Promessa | Prática | Gancho | Cena |
|---|---|---|---|---|---|---|
| 1 | Construir ficou barato; ser escolhido, não | fundamento | escrever em 3 linhas por que alguém escolheria a sua ideia se amanhã surgissem dez iguais | prompt, 8 min | e se a vantagem já estiver no que você faz há anos? | Marta à noite no escritório, rolando no celular uma loja de apps cheia de ícones parecidos (borrados) |
| 2 | Sua experiência já é meio caminho | fundamento | listar 3 problemas que você já resolveu mais de dez vezes e escolher 1 pela conta do cliente | tarefa, 10 min | pedi à IA e veio igual a todo mundo | Heitor na clínica explicando a mesma série de exercícios pela décima vez a um paciente de muletas |
| 3 | A IA entrega a média | fundamento | marcar o que é "médio" numa resposta da IA sobre a sua ideia e pedir 3 saídas fora da média | prompt, 10 min | se está lotado, ainda cabe você? | Marta comparando no notebook duas telas de app quase idênticas |
| 4 | Lotado não quer dizer fechado | fundamento | dizer se a sua ideia ataca uma lacuna mal resolvida ou mal distribuída e em qual dos três discernimentos você está | análise, 10 min | agora a parte desconfortável: imaginar o fracasso | Heitor no celular de um paciente, vendo três apps de exercício instalados e abandonados |
| 5 | Liste por que vai dar errado | ferramenta | escrever as 5 razões mais fortes para a sua ideia fracassar, sem suavizar | tarefa, 10 min | o mesmo rigor para o lado bom, e um teste barato | Marta cedo de manhã, café e caderno, escrevendo com calma |
| 6 | Pré-mortem: a IA imagina o fracasso por você | ferramenta | rodar um pré-mortem com a IA e sair com uma aposta mínima de até 7 dias | prompt, 12 min | módulo 2: isso é mesmo necessário? | Heitor no notebook da clínica com um bloco de duas colunas ao lado |

### Módulo 2 — Vale a pena construir? (aulas 7–12)

| Aula | Título | Tipo | Promessa | Prática | Gancho | Cena |
|---|---|---|---|---|---|---|
| 7 | Resolva a partir do sofrimento | ferramenta | passar a ideia pelo teste da dor e pelo teste dos 12 meses e dar nota de 0 a 10 | tarefa, 10 min | o problema mais chato pode ser o melhor | Dona Célia chega ao escritório da Marta com uma sacola de papéis no último dia do mês |
| 8 | O problema chato é o que paga | fundamento | achar na sua área um problema chato, que se renova e que assusta por falta de informação | análise, 8 min | e se uma empresa gigante copiar? | Heitor preenchendo formulários de alta, com tédio, numa pilha de papéis |
| 9 | Uma gigante copiaria você amanhã? | ferramenta | fazer o teste da gigante e o teste do recurso embutido, e anotar o dado que o seu produto acumula | prompt, 10 min | se é fácil de fazer, é fácil de copiar | Marta lendo no celular uma notícia sobre uma grande empresa (tela borrada), pensativa |
| 10 | Fácil de fazer, fácil de copiar | fundamento | descrever as etapas invisíveis que fazem o seu produto parecer instantâneo e marcar as difíceis de copiar | tarefa, 10 min | o cliente ainda não sabe que poderia fazer sozinho — até quando? | Heitor ajustando com cuidado o joelho de um paciente na maca |
| 11 | Onde o cliente ainda não percebeu | ferramenta | estimar em meses a janela da sua ideia e escrever o que fazer antes que ela feche | análise, 10 min | entrar na rotina do cliente | Marta visitando um cliente numa pequena serralheria, entre máquinas e faíscas |
| 12 | Entre na rotina do cliente | ferramenta | fechar as perguntas de oportunidade na ficha da ideia com nota e decidir: seguir, ajustar ou largar | tarefa, 12 min | módulo 3: o produto pronto que ninguém viu | Seu Arlindo em casa, de manhã, fazendo exercício com o celular apoiado na estante |

### Módulo 3 — Lançar e crescer (aulas 13–18)

| Aula | Título | Tipo | Promessa | Prática | Gancho | Cena |
|---|---|---|---|---|---|---|
| 13 | Sem público, ninguém sabe que existe | ferramenta | achar 3 lugares onde o seu público já conversa e escrever uma resposta que ajuda antes de vender | prompt, 10 min | fazer os outros divulgarem por você | Marta lendo no celular um grupo de conversa de microempreendedores, sentada no sofá |
| 14 | Um plano de 30 dias para aparecer | ferramenta | montar um plano de 30 dias com uma ação de distribuição por semana | prompt, 12 min | quando perguntam "o que é?", você responde numa frase? | Heitor conversando com uma colega fisioterapeuta no corredor da clínica |
| 15 | Uma frase que explica tudo | ferramenta | escrever a frase de posicionamento e o roteiro de um vídeo de 30 segundos | prompt, 10 min | a pessoa entendeu; ela chega ao resultado em 2 minutos? | Marta explicando a ideia a uma cliente no balcão do escritório |
| 16 | Valor em menos de dois minutos | ferramenta | desenhar o caminho até o primeiro resultado em no máximo 3 passos e cronometrar com alguém | tarefa, 10 min | o que o usuário faz e não conta | Heitor cronometrando seu Arlindo usando o celular pela primeira vez |
| 17 | Veja o que o usuário não diz | ferramenta | estudar os 5 primeiros passos de um produto que já fatura e anotar 3 coisas para copiar | tarefa, 10 min | antes de lançar, teste com gente que não existe | Marta assistindo no notebook a gravação anônima de uso de um site, com caneta na mão |
| 18 | Teste com usuários simulados | ferramenta | pedir à IA 3 usuários simulados que reagem à sua página, escolher 1 mudança e fechar a ficha da ideia | prompt, 12 min | fim: o julgamento continua sendo seu | Heitor lendo no notebook três opiniões diferentes, com a ficha da ideia impressa ao lado |

## Regras de escrita específicas deste curso

- Lista-sentinela do v6 vale (perfil não técnico): nada de pipeline, plugin, workflow, API, deploy, script, setup,
  login, upload, download, instalar, servidor… "Plugin" do v2 vira **recurso embutido** ("um recurso dentro do chat que
  o cliente já paga"). "Pipeline" vira **cadeia de etapas**. "Onboarding" vira **entrada no produto** (definir com gterm).
- Termos do assunto: definir com `.gterm` usando **exatamente** a definição de `context/glossario.json`, na primeira vez
  que aparecem em cada aula.
- Números do v2 que podem aparecer (sem citar fonte): 2/3 dos apps do mundo nos últimos 3–4 anos; ataques a apps de
  ~100 para 600 por mês em quatro meses; venda de empresa por nove dígitos pelos dados; compradores pagando até
  US$ 2 milhões por dados de empresas; domínio de US$ 22 numa ação de guerrilha; SaaS de 600 para 7–20 mil por mês
  de receita recorrente num pico de atenção. Nada além disso inventado.
- Telas simuladas: resposta "boa" da IA nunca inventa fato que não está no pedido.
- Quem pulou aulas: "Não tem a ficha da ideia? Abra um documento em branco" / "Não tem ideia própria? Use a da Marta".
