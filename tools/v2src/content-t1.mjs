// Trilha 1 — A mentalidade (emerald)
import { c, svg } from './lib.mjs';

export const T1 = {
  modules: [
    // ================= 1.1 =================
    {
      id: '1-1', emoji: '🌊', title: 'O jogo mudou', punch: 'Construir ficou barato; julgar ficou caro', minutes: 40, level: 'Básico', kind: 'Fundamento',
      lead: 'Hoje dá para construir quase qualquer coisa em poucas horas. Isso muda a pergunta central de quem cria produtos: não é mais "consigo fazer?", é "vale a pena fazer?". Este módulo mostra o que mudou no terreno antes de falarmos de estratégia.',
      topics: [
        {
          emoji: '🎈', title: 'A inflação de apps', sub: 'Dois terços dos apps do mundo nasceram nos últimos três ou quatro anos',
          what: 'O fenômeno de haver aplicativos demais, criados rápido demais, porque ferramentas de IA baratearam quase a zero o custo de construir software.',
          why: 'Quando todo mundo consegue lançar, lançar deixa de ser diferencial. Entender a inflação ajuda você a não confundir "consegui construir" com "tenho um produto".',
          keys: 'Inflação de apps, custo marginal de construção, excesso de oferta, atenção escassa.',
          body: (t) => [
            c.p('Uma estimativa que circula entre quem acompanha o mercado de software diz que <strong class="text-emerald-400">cerca de dois terços dos aplicativos que existem hoje foram criados nos últimos três ou quatro anos</strong>. O número exato importa menos que a direção: a quantidade de software cresceu muito mais rápido do que a quantidade de pessoas dispostas a usá-lo.'),
            c.glossary(t, [
              ['App / aplicativo', 'Qualquer software que alguém usa para resolver uma tarefa: site, app de celular, extensão, painel web.'],
              ['SaaS', 'Software como Serviço. Você não compra o programa; paga uma assinatura mensal para usá-lo pela internet (ex.: Notion, Canva, RD Station).'],
              ['Vibe coding', 'Construir software descrevendo em linguagem natural o que você quer para uma IA (Claude Code, Codex, Cursor) e deixando ela escrever o código.'],
              ['Custo marginal', 'Quanto custa produzir mais uma unidade. Em software feito com IA, o custo de "mais um app" caiu para algumas horas e poucos dólares.'],
            ]),
            c.concept(t, { title: 'Inflação, no sentido econômico', emoji: '💸', paras: [
              'Na economia, inflação é quando existe dinheiro demais circulando e cada nota passa a valer menos. Com apps acontece algo parecido: existe software demais disputando a mesma atenção, e cada lançamento isolado passa a valer menos para quem vê.',
              'Isso não quer dizer que software perdeu valor. Quer dizer que <strong>software genérico</strong> perdeu valor. O que continua valendo é o software que resolve uma dor real, de um jeito difícil de copiar, e que chega às pessoas certas.',
            ] }),
            c.figure(t, svg.curve(t, { label: 'Curva comparando o crescimento da quantidade de apps com o crescimento da atenção disponível: os apps sobem muito mais rápido', xLabels: ['Antes', '-4 anos', '-2 anos', 'Hoje'], yLabel: 'volume relativo', series: [
              { name: 'Apps lançados', values: [15, 30, 62, 95] },
              { name: 'Atenção disponível', values: [15, 18, 20, 22] },
            ] }), 'A linha dos apps dispara; a da atenção quase não se mexe. A distância entre as duas é o tamanho do problema de quem lança hoje: mais concorrentes brigando pelo mesmo tempo das pessoas.'),
            c.grid2(t, { okTitle: 'O que ficou mais fácil', ok: ['Sair da ideia para um protótipo funcionando em horas.', 'Testar várias versões sem contratar ninguém.', 'Construir sozinho o que antes exigia uma equipe.'], badTitle: 'O que ficou mais difícil', bad: ['Ser notado no meio de milhares de lançamentos parecidos.', 'Convencer alguém a pagar mais uma assinatura.', 'Manter vantagem quando qualquer um pode copiar em dias.'] }),
            c.tip({ title: 'Consequência prática', text: 'Antes de abrir o editor, faça a pergunta que a inflação impõe: se amanhã surgirem mais dez apps iguais ao meu, por que alguém ainda escolheria o meu? Se não houver resposta, o problema não é técnico.' }),
          ],
        },
        {
          emoji: '⚰️', title: 'O SaaS morreu?', sub: 'Onde ainda existe arbitragem num mercado saturado',
          what: 'A discussão sobre o "apocalipse do SaaS": a ideia de que assinaturas de software perdem sentido quando cada pessoa pode construir a própria ferramenta com IA.',
          why: 'A tese está parcialmente certa. Saber em que parte ela erra é onde mora a oportunidade.',
          keys: 'Apocalipse do SaaS, arbitragem, nicho, caso de uso, velocidade.',
          body: (t) => [
            c.p('Muita gente repete que o SaaS acabou. Em boa parte, tem razão: ferramentas simples que só organizavam dados ou geravam texto estão sendo substituídas por um pedido de duas linhas a um assistente de IA. Por que pagar R$ 50 por mês por algo que o chat faz de graça?'),
            c.glossary(t, [
              ['Arbitragem', 'Ganhar com uma diferença que o mercado ainda não corrigiu. Comprar barato num lugar e vender caro em outro; aqui, resolver um problema antes que o resto do mercado perceba que ele é fácil de resolver.'],
              ['Nicho', 'Um grupo específico de clientes com uma necessidade específica: contadores de pequenas cidades, clínicas veterinárias, escritórios de engenharia.'],
              ['Caso de uso', 'A tarefa concreta que a pessoa quer fazer com o produto: "emitir a nota fiscal do mês", não "gerenciar finanças".'],
            ]),
            c.concept(t, { title: 'Os três lugares onde ainda há espaço', emoji: '🧭', bullets: [
              '<strong>O nicho certo</strong>: grupos pouco disputados, com dinheiro e com pouco tempo para aprender IA.',
              '<strong>O caso de uso certo</strong>: uma tarefa estreita, dolorosa e frequente, em vez de uma plataforma genérica.',
              '<strong>Velocidade</strong>: chegar primeiro e aprender mais rápido do que os outros conseguem copiar.',
            ] }),
            c.figure(t, svg.split(t, { label: 'Comparação entre o SaaS que está morrendo e o SaaS que ainda tem espaço', bridge: 'onde está a brecha', left: { title: 'MORRENDO', items: ['Genérico, "para todos"', 'Só organiza ou gera texto', 'Resolvível num prompt', 'Sem dados próprios', 'Concorre com o chat grátis'] }, right: { title: 'COM ESPAÇO', items: ['Nicho definido', 'Dor frequente e cara', 'Pipeline difícil de copiar', 'Acumula dados valiosos', 'Vive no fluxo do cliente'] } }), 'A coluna da esquerda descreve o que o chat de IA já faz sozinho. A da direita descreve o que ele ainda não faz bem. Todo produto novo deveria se encaixar na direita em pelo menos três itens.'),
            c.alert({ title: 'Armadilha comum', text: 'Ler "o SaaS morreu" e desistir, ou ler "ainda há espaço" e construir qualquer coisa. As duas leituras são preguiçosas. O que existe é um filtro mais severo: menos ideias passam, mas as que passam têm menos concorrência séria.' }),
          ],
        },
        {
          emoji: '🔀', title: 'O ciclo de produto embaralhou', sub: 'Ideia, validar, protótipo, marketing, desenvolver, lançar, melhorar — em outra ordem',
          what: 'O ciclo de vida clássico de um produto e o modo como a IA mudou a ordem e o custo de cada etapa.',
          why: 'Quem segue a ordem antiga à risca perde a vantagem de construir rápido. Quem ignora a ordem por completo constrói sem saber se alguém quer.',
          keys: 'Ciclo de vida do produto, validação, protótipo, ordem das etapas, iteração.',
          body: (t) => [
            c.p('O roteiro tradicional de produto tem sete etapas: <strong class="text-emerald-400">ter a ideia, validar, prototipar, fazer marketing, desenvolver, lançar e melhorar</strong>. Era uma sequência lógica numa época em que desenvolver custava caro: você só gastava com engenheiros depois de ter certeza de que valia a pena.'),
            c.figure(t, svg.flow(t, { label: 'Fluxo das sete etapas clássicas do ciclo de produto', steps: [
              { title: 'Ideia', sub: 'o problema' },
              { title: 'Validar', sub: 'alguém quer?' },
              { title: 'Protótipo', sub: 'versão tosca' },
              { title: 'Marketing', sub: 'quem fica|sabendo' },
              { title: 'Desenvolver', sub: 'versão real' },
              { title: 'Lançar', sub: 'abrir ao|público' },
              { title: 'Melhorar', sub: 'ouvir e|ajustar' },
            ] }), 'Na ordem clássica, construir vem tarde porque era a etapa mais cara. Hoje o protótipo custa horas; por isso ele pode vir antes da validação e virar a própria ferramenta de validação.'),
            c.p('Com IA, construir um protótipo leva uma tarde. Isso muda a lógica: às vezes faz mais sentido <strong>prototipar para validar</strong> do que validar para depois prototipar. Um protótipo funcionando responde a perguntas que uma pesquisa de opinião nunca responde, como "a pessoa realmente clica?".'),
            c.steps(t, { title: 'Como a ordem costuma ficar hoje', items: [
              { h: 'Ideia ancorada numa dor', text: 'A ideação continua no centro. Nada substitui entender o problema.' },
              { h: 'Protótipo rápido', text: 'Uma versão feia, mas usável, construída em horas com um assistente de código.' },
              { h: 'Validação com o protótipo na mão', text: 'Você mostra algo real para pessoas reais e mede o que elas fazem, não o que dizem.' },
              { h: 'Distribuição desde o primeiro dia', text: 'Marketing deixa de ser etapa final. Sem público, não há como validar nada.' },
              { h: 'Desenvolver, lançar e melhorar em ciclos curtos', text: 'As etapas finais viram um ciclo contínuo em vez de uma linha reta.' },
            ] }),
            c.tip({ title: 'Regra simples', text: 'A ordem certa depende do produto e do nicho. Pergunte qual etapa hoje é a mais barata de fazer e qual responde à dúvida mais perigosa. Comece pela que junta as duas coisas.' }),
          ],
        },
        {
          emoji: '🎓', title: 'Quando a experiência já é a validação', sub: 'O micro SaaS de um problema que você resolveu dez vezes',
          what: 'A situação em que você já resolveu o mesmo problema muitas vezes para clientes ou colegas e quer transformar essa solução em um produto padronizado.',
          why: 'É o atalho mais seguro para quem está começando: a necessidade já foi comprovada no seu próprio trabalho.',
          keys: 'Micro SaaS, operacionalizar, padronizar, validação pela experiência, preço relativo.',
          body: (t) => [
            c.p('Se você é consultor, freelancer ou trabalha numa área há anos, provavelmente já percebeu uma lacuna que se repete: todo cliente precisa da mesma coisinha, e ninguém oferece isso de forma simples. Quando é assim, você não precisa de tanta validação. <strong class="text-emerald-400">Sua experiência já foi a pesquisa de mercado.</strong>'),
            c.glossary(t, [
              ['Micro SaaS', 'Um SaaS pequeno, focado em uma única tarefa, muitas vezes feito e mantido por uma ou duas pessoas.'],
              ['Operacionalizar', 'Transformar algo que você faz "na mão", caso a caso, num processo repetível que roda sempre igual.'],
              ['Plug and play', 'Algo que a pessoa conecta e já funciona, sem configuração complicada.'],
            ]),
            c.concept(t, { title: 'A conta que o cliente faz', emoji: '🧮', paras: [
              'O cliente compara seu preço com a alternativa. Se a alternativa é contratar um desenvolvedor por algumas semanas, ou pagar uma assinatura premium de IA que custa centenas de dólares por mês e ainda exige que ele aprenda a usar, um produto de R$ 49 que resolve exatamente aquilo parece barato.',
              'O preço não é comparado com zero. É comparado com o custo e o trabalho de resolver de outro jeito.',
            ] }),
            c.figure(t, svg.bars(t, { label: 'Comparação do custo mensal de três formas de resolver o mesmo problema', aLabel: 'custo em dinheiro', bLabel: 'custo em esforço', items: [
              { label: 'Contratar dev', a: 90, b: 60, aText: 'alto', bText: 'médio' },
              { label: 'Fazer sozinho com IA', a: 30, b: 95, aText: 'baixo', bText: 'altíssimo' },
              { label: 'Micro SaaS pronto', a: 15, b: 10, aText: 'baixo', bText: 'mínimo' },
            ] }), 'Olhe as duas barras juntas. O micro SaaS vence não por ser o mais barato em dinheiro, mas por ser o único baixo nas duas colunas. É essa soma que o cliente sente.'),
            c.grid2(t, { okTitle: 'Sinais de que sua experiência vale como validação', ok: ['Você já fez isso para cinco ou mais clientes diferentes.', 'Os clientes pediram de novo ou indicaram outros.', 'Você cobra por isso hoje, mesmo que manualmente.'], badTitle: 'Sinais de que ainda falta validar', bad: ['Resolveu só para você mesmo.', 'Todo cliente pediu uma versão diferente.', 'Ninguém pagaria se você não estivesse junto.'] }),
          ],
        },
        {
          emoji: '🧑‍🚀', title: 'Uma pessoa, três papéis', sub: 'Produto, engenharia e validação na mesma cabeça',
          what: 'A possibilidade de uma única pessoa, apoiada por agentes de IA, fazer o trabalho que antes exigia gerente de produto, engenheiro e analista de qualidade.',
          why: 'Isso é poder e armadilha ao mesmo tempo: você pode fazer tudo, mas também pode errar tudo sem ninguém para questionar.',
          keys: 'Gerente de produto, engenheiro, QA, agente de IA, autocrítica.',
          body: (t) => [
            c.p('Em empresas, produtos costumam ser feitos por papéis separados. O <strong>gerente de produto</strong> decide o que construir e para quem. O <strong>engenheiro</strong> constrói. O <strong>QA</strong> testa e encontra falhas. Cada um freia o outro, e esse atrito evita muitos erros.'),
            c.glossary(t, [
              ['Gerente de produto (PM)', 'Quem decide o que o produto faz, para quem, e em que ordem as coisas são construídas.'],
              ['QA', 'Quality Assurance, garantia de qualidade. Quem testa o produto procurando erros antes do usuário encontrar.'],
              ['Agente de IA', 'Um modelo de IA que executa tarefas em várias etapas sozinho: lê arquivos, roda comandos, testa, corrige.'],
            ]),
            c.figure(t, svg.stack(t, { label: 'Os três papéis de produto empilhados sobre uma única pessoa apoiada por agentes', layers: [
              { title: 'Produto', sub: 'o que construir e para quem' },
              { title: 'Engenharia', sub: 'construir de fato' },
              { title: 'Validação e QA', sub: 'testar, medir, criticar' },
              { title: 'Você + agentes', sub: 'uma pessoa, três chapéus' },
            ] }), 'Os três papéis continuam existindo; o que mudou é que agora cabem numa pessoa. A camada de baixo precisa sustentar as três de cima, e a que costuma ceder primeiro é a de produto.'),
            c.concept(t, { title: 'O papel que mais some', emoji: '🕳️', paras: [
              'Quem sabe programar tende a pular direto para a engenharia, porque é a parte divertida. O agente de IA piora isso: construir fica tão fácil que ninguém para para perguntar se deveria.',
              'Por isso o resto deste curso é quase todo sobre o papel de produto: as perguntas que um bom gerente faria antes de liberar uma linha de código.',
            ] }),
            c.tip({ title: 'Separe os chapéus no tempo', text: 'Reserve momentos distintos para cada papel. Numa sessão você só decide (produto). Noutra, só constrói. Noutra, só tenta quebrar o que construiu. Misturar os três na mesma hora faz o construtor vencer sempre.' }),
          ],
        },
        {
          emoji: '⚡', title: 'Velocidade ama dinheiro', sub: 'Por que chegar primeiro pesa mais que nunca',
          what: 'O princípio de que, num mercado em que tudo pode ser copiado, a janela de oportunidade é curta e quem se move rápido captura a maior parte do valor.',
          why: 'A vantagem de hoje dura meses, não anos. Planejar como se durasse anos é o jeito mais comum de perdê-la.',
          keys: 'Janela de oportunidade, primeiro a chegar, ciclos curtos, aprendizado rápido.',
          body: (t) => [
            c.p('Existe um ditado antigo nos negócios: <strong class="text-emerald-400">velocidade ama dinheiro</strong>. Ele sempre foi verdade, mas hoje é mais. Se qualquer produto pode ser clonado em semanas, a vantagem de quem chegou primeiro se mede em semanas também.'),
            c.figure(t, svg.curve(t, { label: 'Curva do valor capturado por quem chega cedo contra quem chega tarde numa janela de oportunidade', xLabels: ['Mês 1', 'Mês 3', 'Mês 6', 'Mês 12'], yLabel: 'valor capturado', series: [
              { name: 'Chegou cedo', values: [30, 70, 85, 88] },
              { name: 'Chegou tarde', values: [0, 5, 20, 28] },
            ] }), 'Quem chega cedo sobe rápido e depois estabiliza; quem chega tarde disputa as sobras. A diferença não é de competência, é de calendário.'),
            c.grid2(t, { okTitle: 'Velocidade que ajuda', ok: ['Lançar a versão mínima e aprender com uso real.', 'Decidir em dias o que antes levava meses.', 'Abandonar rápido o que não funciona.'], badTitle: 'Velocidade que atrapalha', bad: ['Pular a pergunta "isso é necessário?".', 'Lançar algo quebrado que queima a primeira impressão.', 'Trocar de ideia toda semana sem terminar nenhuma.'] }),
            c.alert({ title: 'Velocidade não é pressa', text: 'Ser rápido é encurtar o tempo entre uma decisão e o aprendizado que ela gera. Pressa é pular o pensamento. As perguntas das próximas trilhas levam uma tarde; elas são o que torna a velocidade segura.' }),
            c.tip({ title: 'Meça em dias', text: 'Para cada ideia, defina um prazo curto (sete a catorze dias) para ter uma primeira versão na mão de alguém de fora. Se não couber nesse prazo, provavelmente a ideia está grande demais.' }),
          ],
        },
      ],
      quiz: [
        { q: 'Por que a "inflação de apps" dificulta lançar um produto hoje?', options: ['Porque construir ficou mais caro', 'Porque há muito mais software disputando a mesma atenção', 'Porque as lojas de apps proibiram novos lançamentos'], answer: 1, why: 'Construir ficou barato; o que ficou escasso foi a atenção das pessoas, disputada por uma quantidade enorme de apps parecidos.' },
        { q: 'Em que situação a validação pode ser mais leve?', options: ['Quando a ideia parece genial', 'Quando você já resolveu aquele problema muitas vezes para clientes reais', 'Quando o protótipo ficou bonito'], answer: 1, why: 'Se o problema se repete no seu trabalho e as pessoas já pagam para você resolvê-lo, sua experiência funciona como pesquisa de mercado.' },
        { q: 'Qual papel tende a sumir quando uma pessoa faz tudo com ajuda de agentes?', options: ['Engenharia', 'Produto: decidir se vale construir', 'Digitação'], answer: 1, why: 'Construir ficou tão fácil que a pergunta de produto ("devo construir isso?") costuma ser pulada.' },
      ],
      summary: [
        ['Inflação de apps', 'há software demais para a atenção disponível; genérico perdeu valor'],
        ['SaaS morreu?', 'o genérico sim; nicho, caso de uso e velocidade ainda abrem brechas'],
        ['Ciclo embaralhado', 'protótipo barato pode vir antes e servir de validação'],
        ['Experiência como validação', 'problema resolvido muitas vezes é o atalho mais seguro'],
        ['Três papéis', 'produto, engenharia e QA cabem numa pessoa; produto é o que some'],
        ['Velocidade', 'a janela dura meses; velocidade não é pressa'],
      ],
    },

    // ================= 1.2 =================
    {
      id: '1-2', emoji: '🎯', title: 'O problema da média', punch: 'O modelo entrega o médio', minutes: 40, level: 'Básico', kind: 'Fundamento',
      lead: 'Modelos de linguagem aprendem com o que já existe e tendem a devolver o que é mais comum. Isso é ótimo para velocidade e péssimo para diferenciação. Este módulo explica por que o "médio" não chama atenção e o que fazer com isso.',
      topics: [
        {
          emoji: '📊', title: 'Construir com LLM é construir a média', sub: 'Por que o modelo puxa tudo para o comum',
          what: 'A tendência de modelos de linguagem produzirem a resposta mais provável, que é também a mais parecida com o que já existe.',
          why: 'Se você deixa o modelo decidir o design, o texto e a jornada, seu produto sai parecido com todos os outros feitos do mesmo jeito.',
          keys: 'LLM, resposta mais provável, média estatística, padrão, genérico.',
          body: (t) => [
            c.p('Um modelo de linguagem funciona, de forma simplificada, prevendo qual é a continuação mais provável de um texto. Ele aprendeu isso lendo uma quantidade gigantesca de conteúdo que já existe. O resultado natural é que, sem orientação forte, ele devolve <strong class="text-emerald-400">o que é mais comum</strong>: o layout mais comum, a frase de marketing mais comum, a jornada mais comum.'),
            c.glossary(t, [
              ['LLM', 'Large Language Model, modelo de linguagem grande. O tipo de IA por trás do ChatGPT, do Claude e do Gemini.'],
              ['Média (aqui)', 'O resultado mais típico, o que aparece com mais frequência nos dados de treino. Não é ruim; é apenas igual.'],
              ['Slop', 'Gíria para conteúdo gerado por IA sem cuidado: correto, genérico e sem alma. Dá para reconhecer de longe.'],
            ]),
            c.figure(t, svg.curve(t, { label: 'Distribuição das saídas de um modelo: a maior parte concentrada no meio, poucas nas pontas', xLabels: ['Óbvio', 'Comum', 'Médio', 'Incomum', 'Original'], yLabel: 'frequência', series: [
              { name: 'Saídas do modelo', values: [20, 60, 95, 40, 8] },
            ] }), 'A maior parte do que o modelo produz cai no meio da curva. A parte da direita, onde mora a diferenciação, só aparece quando você empurra o modelo com referências e critério próprios.'),
            c.concept(t, { title: 'A média não é defeito, é a natureza da ferramenta', emoji: '⚖️', paras: [
              'Para tarefas em que o comum é o certo (um formulário de login, um e-mail de confirmação), a média é exatamente o que você quer. O problema aparece quando você usa a mesma ferramenta, do mesmo jeito, para a parte do produto que deveria ser única.',
            ] }),
            c.tip({ title: 'Onde aceitar a média', text: 'Deixe o modelo decidir o que é infraestrutura (autenticação, tabelas, telas de configuração). Reserve seu julgamento para três coisas: a promessa principal, a primeira experiência do usuário e a identidade visual.' }),
          ],
        },
        {
          emoji: '🚨', title: 'Padrão de interrupção', sub: 'O médio não faz ninguém parar de rolar a tela',
          what: 'Um estímulo que quebra a expectativa de quem está vendo e força atenção: algo diferente do que a pessoa já viu cem vezes.',
          why: 'Numa rolagem infinita, o que é igual some. Seu produto precisa de pelo menos um elemento que faça a pessoa parar.',
          keys: 'Pattern interrupt, atenção, expectativa, diferenciação, primeira impressão.',
          body: (t) => [
            c.p('Pense no seu feed. Você passa por dezenas de posts por minuto sem ler. O que faz você parar é algo que <strong>quebra o padrão</strong>: uma imagem estranha, uma frase inesperada, um produto que faz algo que você não sabia que era possível. Em marketing isso se chama <strong class="text-emerald-400">padrão de interrupção</strong>.'),
            c.glossary(t, [
              ['Pattern interrupt', 'Padrão de interrupção. O momento em que algo foge do esperado e captura a atenção por reflexo.'],
              ['Rolagem infinita', 'Feeds sem fim (Instagram, TikTok, X) em que o conteúdo não acaba e a atenção dura frações de segundo.'],
            ]),
            c.p('O problema da média se conecta aqui: <strong>uma vez que todo mundo viu a versão média, ela deixa de interromper</strong>. O primeiro site com um certo gradiente roxo chamou atenção. O milésimo, não. O mesmo vale para funcionalidades: o primeiro app que resumia reuniões impressionou; hoje é esperado.'),
            c.figure(t, svg.flow(t, { label: 'Ciclo de desgaste de uma novidade até virar ruído', steps: [
              { title: 'Novidade', sub: 'interrompe' },
              { title: 'Imitada', sub: 'vira tendência' },
              { title: 'Comum', sub: 'vira padrão' },
              { title: 'Invisível', sub: 'ninguém|para mais' },
            ] }), 'Toda novidade percorre essa trilha. Com IA, o caminho do primeiro ao último quadro caiu de anos para semanas, porque copiar o que funcionou virou um prompt.'),
            c.grid2(t, { okTitle: 'Interrompe', ok: ['Uma demonstração que resolve algo em segundos, na frente da pessoa.', 'Um posicionamento inesperado para um problema conhecido.', 'Um visual que claramente não saiu de um modelo padrão.'], badTitle: 'Não interrompe mais', bad: ['"Com o poder da IA" no título.', 'Landing page com o mesmo gradiente, ícones e frases de todas.', 'Mais um assistente de chat genérico.'] }),
          ],
        },
        {
          emoji: '🧠', title: 'A erosão do julgamento', sub: 'Quando tudo é terceirizado, até a jornada do usuário',
          what: 'O risco de deixar de pensar por conta própria porque a IA sempre oferece uma resposta pronta, inclusive para decisões de produto.',
          why: 'Julgamento é o que diferencia quem constrói produtos que funcionam. Se ele atrofia, você só produz a média.',
          keys: 'Julgamento, terceirização cognitiva, critério, jornada do usuário, pensamento próprio.',
          body: (t) => [
            c.p('Estamos entrando num mundo em que pouca gente vai exercitar critério próprio. Tudo pode ser terceirizado: o texto, o design, a estratégia, até a <strong>jornada do usuário</strong>, que é a sequência de passos que alguém percorre desde que chega no seu produto até conseguir o que queria.'),
            c.glossary(t, [
              ['Julgamento', 'A capacidade de decidir bem sem ter todas as informações: saber o que importa, o que descartar e quando parar.'],
              ['Jornada do usuário', 'O caminho completo de uma pessoa no produto: descobrir, entrar, entender, usar pela primeira vez, voltar.'],
              ['Terceirização cognitiva', 'Delegar a outro (pessoa ou IA) não só a execução, mas o próprio pensar sobre o problema.'],
            ]),
            c.concept(t, { title: 'Por que isso vira vantagem para quem resiste', emoji: '🛡️', paras: [
              'Se a maioria terceiriza o julgamento, quem mantém o seu passa a ser raro. E raridade, num mercado inflacionado, é valor. Ser cuidadoso, pensar na experiência de quem usa, questionar a sugestão do modelo: tudo isso vira diferencial competitivo.',
            ] }),
            c.figure(t, svg.scale(t, { label: 'Balança entre delegar a execução e delegar o julgamento', tilt: 10, left: { title: 'Delegue', lines: ['código repetitivo', 'rascunhos', 'pesquisas', 'testes'] }, right: { title: 'Guarde', lines: ['o que construir', 'para quem', 'o que cortar', 'a primeira impressão'] } }), 'O lado esquerdo pode e deve ir para a IA. O lado direito é o seu produto de verdade; se ele também for delegado, o que sobra é a média.'),
            c.tip({ title: 'Exercício de uma semana', text: 'Antes de pedir qualquer decisão de produto à IA, escreva sua própria resposta em três linhas. Só depois compare com a do modelo. Você vai notar onde concorda por preguiça e onde tinha uma ideia melhor.' }),
          ],
        },
        {
          emoji: '📣', title: 'A palavra "lançamento" perdeu o sentido', sub: 'Fadiga de novidades e favoritos que ninguém relê',
          what: 'O excesso de anúncios de produtos novos todos os dias, que faz as pessoas pararem de dar atenção a qualquer lançamento.',
          why: 'Se seu plano de divulgação é "anunciar e esperar", você está competindo com dezenas de anúncios por dia e vai perder.',
          keys: 'Fadiga de lançamentos, "introducing", favoritos, atenção, ruído.',
          body: (t) => [
            c.p('Abra qualquer rede de tecnologia e conte quantas vezes aparece a palavra "apresentando" ou "introducing" num dia. Um novo engenheiro de QA com IA. Um novo modelo de voz mais rápido. Um novo agente que faz tudo. São tantos que <strong class="text-emerald-400">a palavra perdeu o peso</strong>.'),
            c.data({ title: 'O comportamento típico diante do excesso', items: [
              'A pessoa rola a tela por 40 minutos e salva seis coisas "para ver depois".',
              'No dia seguinte, surgem outras seis. As de ontem nunca mais são abertas.',
              'O favorito vira um cemitério de boas intenções.',
            ] }),
            c.figure(t, svg.bars(t, { label: 'Comparação entre itens salvos e itens realmente revistos por semana', aLabel: 'salvos', bLabel: 'revistos', items: [
              { label: 'Semana 1', a: 30, b: 6 },
              { label: 'Semana 2', a: 36, b: 3 },
              { label: 'Semana 3', a: 42, b: 1 },
            ] }), 'Os números são ilustrativos, mas o padrão é real: salvar cresce, rever despenca. Seu produto precisa entregar valor antes de ir para a pilha dos salvos, ou nunca vai sair dela.'),
            c.concept(t, { title: 'O que isso exige do seu produto', emoji: '⏱️', bullets: [
              'Entregar a primeira dose de valor muito rápido, de preferência na primeira visita.',
              'Resolver uma dor tão bem que a pessoa sinta alívio imediato, não curiosidade.',
              'Ser lembrado por um motivo concreto, não por ter sido "mais um lançamento".',
            ] }),
            c.alert({ title: 'O mesmo vale para "dicas" de design', text: 'Muitos vídeos prometem "as sete skills para um design que não parece feito por IA", e o resultado continua parecendo feito por IA. Seguir a receita da moda é, por definição, produzir a média da moda.' }),
          ],
        },
        {
          emoji: '🗺️', title: 'Mercado lotado não é mercado fechado', sub: 'Ainda há lacunas mal resolvidas ou mal distribuídas',
          what: 'A ideia de que, mesmo com excesso de produtos e poucos fossos, sempre sobram problemas que ninguém resolveu direito ou que ninguém levou às pessoas certas.',
          why: 'Evita o erro oposto ao da euforia: achar que não vale mais construir nada.',
          keys: 'Lacuna, fosso (moat), distribuição, precisão do problema, nicho mal servido.',
          body: (t) => [
            c.p('Se tudo pode ser copiado e ninguém tem fosso, então nenhum produto merece existir? Não. Quando você olha um problema com <strong>precisão suficiente</strong>, quase sempre encontra partes que ninguém resolveu, ou que foram resolvidas do jeito errado, ou que foram resolvidas mas nunca chegaram a quem precisa.'),
            c.glossary(t, [
              ['Fosso (moat)', 'O que protege um negócio da concorrência: marca, dados exclusivos, custo de troca, rede de usuários. A imagem é o fosso com água em volta de um castelo.'],
              ['Canal de distribuição', 'O caminho pelo qual o produto chega ao cliente: redes sociais, parceiros, busca no Google, indicação, vendas diretas.'],
            ]),
            c.figure(t, svg.chips(t, { label: 'Tipos de lacuna que continuam abertas mesmo em mercados lotados', title: 'Onde procurar lacunas', cols: 3, items: ['Não resolvido', 'Resolvido errado', 'Resolvido caro demais', 'Resolvido só em inglês', 'Sem canal até o cliente', 'Complexo demais p/ leigo'] }), 'Cada etiqueta é um tipo de brecha. Note que só a primeira exige inventar algo novo; as outras cinco são oportunidades de fazer melhor, mais barato ou mais perto do cliente.'),
            c.grid2(t, { okTitle: 'Perguntas que revelam lacunas', ok: ['Quem hoje resolve isso na planilha ou no papel?', 'Qual solução existente os clientes reclamam de usar?', 'Que grupo fica de fora porque a ferramenta é difícil ou cara?'], badTitle: 'Perguntas que escondem lacunas', bad: ['"Já existe algo parecido?" (quase sempre existe).', '"Isso é inovador?" (inovação não é requisito).', '"Dá para fazer com IA?" (quase tudo dá).'] }),
            c.tip({ title: 'Distribuição também é lacuna', text: 'Muitas vezes a solução existe, mas nunca chegou ao público certo. Levar uma solução conhecida a um nicho que ninguém atende, na língua e no jeito dele, é uma oportunidade legítima.' }),
          ],
        },
        {
          emoji: '🔭', title: 'Os três discernimentos', sub: 'Saber construir, saber o que construir, saber se vale construir',
          what: 'Os três níveis de critério de quem cria produtos hoje: competência técnica, escolha do problema e avaliação de valor.',
          why: 'O primeiro nível ficou quase gratuito com IA. A vantagem migrou para os dois de cima.',
          keys: 'Discernimento técnico, discernimento de problema, discernimento de valor, julgamento.',
          body: (t) => [
            c.p('Construir num tempo em que se pode construir quase tudo exige discernimento em três níveis. O primeiro é <strong>saber construir</strong>. O segundo é <strong>saber o que construir</strong>. O terceiro, e mais raro, é <strong class="text-emerald-400">saber se aquilo vale a pena ser construído</strong>.'),
            c.figure(t, svg.stack(t, { label: 'Os três níveis de discernimento, do mais comum ao mais raro', layers: [
              { title: 'Saber construir', sub: 'técnica: a IA já ajuda muito' },
              { title: 'Saber o que construir', sub: 'escolher o problema certo' },
              { title: 'Saber se vale construir', sub: 'julgar valor, prazo e risco' },
            ] }), 'Quanto mais para dentro, mais raro e mais valioso. A IA achatou a primeira camada; o curso inteiro existe para treinar as duas de dentro.'),
            c.table(t, { headers: ['Nível', 'Pergunta', 'Quem já faz bem'], rows: [
              ['Construir', 'Como faço isso funcionar?', 'Qualquer pessoa com um assistente de código'],
              ['O que construir', 'Qual problema devo resolver?', 'Quem conhece bem um nicho'],
              ['Se vale construir', 'Isso merece existir daqui a um ano?', 'Poucos. É o que este curso treina.'],
            ], caption: 'Os três discernimentos lado a lado' }),
            c.steps(t, { title: 'Como usar os três na prática', items: [
              { h: 'Comece pelo terceiro', text: 'Antes de qualquer protótipo, responda: vale a pena? A Trilha 2 inteira é sobre essa pergunta.' },
              { h: 'Depois o segundo', text: 'Se vale, qual recorte exato do problema você vai atacar primeiro?' },
              { h: 'Só então o primeiro', text: 'Agora sim, construa rápido, com toda a ajuda que a IA oferece.' },
            ] }),
            c.tip({ title: 'Frase para colar no monitor', text: 'Num mundo em que dá para construir qualquer coisa, o julgamento sobre o que vale construir é o jogo inteiro.' }),
          ],
        },
      ],
      quiz: [
        { q: 'Por que um produto feito só com as sugestões padrão de um LLM tende a parecer genérico?', options: ['Porque o modelo tem pouca informação', 'Porque o modelo devolve o resultado mais provável, isto é, o mais comum', 'Porque o modelo copia um único site'], answer: 1, why: 'LLMs preveem a continuação mais provável; sem direção forte, o resultado é a média do que já existe.' },
        { q: 'O que acontece com um padrão de interrupção quando todo mundo o copia?', options: ['Fica mais forte', 'Deixa de interromper e vira ruído', 'Passa a ser protegido por lei'], answer: 1, why: 'A interrupção depende de surpresa. Quando vira comum, ninguém mais para para olhar.' },
        { q: 'Qual dos três discernimentos ficou quase gratuito com IA?', options: ['Saber se vale construir', 'Saber o que construir', 'Saber construir'], answer: 2, why: 'A parte técnica ficou acessível; a vantagem migrou para escolher o problema e julgar o valor.' },
      ],
      summary: [
        ['A média', 'LLM sem direção entrega o resultado mais comum'],
        ['Padrão de interrupção', 'o que todos já viram não faz ninguém parar'],
        ['Julgamento', 'delegue a execução, guarde as decisões de produto'],
        ['Fadiga de lançamentos', 'valor precisa chegar antes de o produto virar favorito esquecido'],
        ['Lacunas', 'mercado lotado ainda tem problemas mal resolvidos ou mal distribuídos'],
        ['Três discernimentos', 'construir, o que construir, se vale construir; o último é o raro'],
      ],
    },

    // ================= 1.3 =================
    {
      id: '1-3', emoji: '🧱', title: 'Pessimismo produtivo', punch: 'Imagine o fracasso antes dele', minutes: 45, level: 'Intermediário', kind: 'Prático',
      lead: 'Pessimismo produtivo é imaginar com honestidade tudo que pode dar errado, não para desistir, mas para se preparar. Este módulo transforma essa atitude num método: razões contra, razões a favor, aposta mínima e um pré-mortem feito com IA.',
      topics: [
        {
          emoji: '🌧️', title: 'Pessimismo produtivo não é derrotismo', sub: 'Imaginar o pior para agir melhor',
          what: 'A atitude de listar deliberadamente os modos de fracasso de um plano, com o objetivo de reduzir riscos, e não de justificar a inação.',
          why: 'Otimismo sem teste gera produtos que ninguém quer. Pessimismo sem ação gera nada. O meio-termo é o que funciona.',
          keys: 'Pessimismo produtivo, derrotismo, viés otimista, gestão de risco.',
          body: (t) => [
            c.p('Quem empreende costuma ser otimista, e isso é necessário para começar. O problema é que o otimismo também esconde riscos. <strong class="text-emerald-400">Pessimismo produtivo</strong> é o antídoto: você imagina, de forma deliberada e detalhada, todas as maneiras pelas quais o plano pode falhar.'),
            c.glossary(t, [
              ['Derrotismo', 'Usar a lista de riscos como desculpa para não tentar. É o pessimismo que paralisa.'],
              ['Viés otimista', 'A tendência humana de achar que as coisas darão mais certo para nós do que para os outros.'],
              ['Pré-mortem', 'Técnica de imaginar que o projeto já fracassou e perguntar: por quê? Feita antes de começar.'],
            ]),
            c.figure(t, svg.split(t, { label: 'Comparação entre pessimismo derrotista e pessimismo produtivo', bridge: 'mesma lista, outro uso', left: { title: 'DERROTISTA', items: ['Lista os riscos', 'Conclui: não vai dar', 'Para por aí', 'Nada aprende'] }, right: { title: 'PRODUTIVO', items: ['Lista os riscos', 'Pergunta: como reduzo?', 'Faz uma aposta pequena', 'Aprende rápido'] } }), 'Os dois começam igual: listando o que pode dar errado. A diferença está só na segunda linha. O produtivo transforma cada risco numa pergunta de ação.'),
            c.grid2(t, { okTitle: 'Postura produtiva', ok: ['"Se ninguém souber que existe, como faço os primeiros 10 usuários chegarem?"', '"Se copiarem em uma semana, o que ainda seria meu?"', '"Se eu estiver errado, quanto perco?"'], badTitle: 'Postura derrotista', bad: ['"Não tenho audiência, então nem adianta."', '"Vão copiar mesmo, para que tentar?"', '"Já existe algo parecido, desisto."'] }),
            c.tip({ title: 'Teste de uma linha', text: 'Para cada risco que você listar, escreva ao lado uma ação que custa menos de um dia. Se não houver nenhuma, aquele risco é grave e merece atenção antes de tudo.' }),
          ],
        },
        {
          emoji: '📓', title: 'O diário de contingência', sub: '"Se eu perdesse tudo amanhã, como me viraria?"',
          what: 'Um hábito de registrar, ao longo dos anos, planos concretos para sobreviver ao pior cenário, como perder toda a renda de um dia para o outro.',
          why: 'Treina a mente a encontrar saídas criativas sob pressão. O mesmo músculo serve para achar caminhos para um produto.',
          keys: 'Plano de contingência, criatividade sob restrição, cenário extremo, hábito.',
          body: (t) => [
            c.p('Alguns empreendedores mantêm, por anos, um caderno com uma pergunta só: <strong>"se eu perdesse tudo amanhã, como alimentaria minha família, legalmente?"</strong>. As respostas vão ficando cada vez mais concretas e criativas: dormir perto de universidades, comprar um terno num brechó para entrar em eventos com comida de graça, fazer a barba para parecer um participante qualquer.'),
            c.concept(t, { title: 'Por que um exercício tão extremo ajuda', emoji: '🧗', paras: [
              'Pensar no pior cenário tira o medo abstrato e o transforma em lista de ações. Depois de alguns anos, a pessoa descobre que quase sempre existe uma saída, desde que olhe para os recursos disponíveis com criatividade.',
              'Essa mesma atitude, aplicada a produtos, gera perguntas muito úteis: "se eu tivesse zero de orçamento para anúncio, como conseguiria os primeiros usuários?".',
            ] }),
            c.figure(t, svg.flow(t, { label: 'Como o exercício de contingência se transforma em estratégia de produto', steps: [
              { title: 'Cenário extremo', sub: 'e se der|tudo errado?' },
              { title: 'Recursos reais', sub: 'o que ainda|tenho à mão' },
              { title: 'Saídas criativas', sub: 'caminhos|não óbvios' },
              { title: 'Plano de produto', sub: 'mesma lógica,|outro alvo' },
            ] }), 'O exercício pessoal e o de produto usam os mesmos quatro passos. Treinar o primeiro deixa o segundo mais rápido e menos assustador.'),
            c.code(t, { objective: 'Criar sua versão de produto do diário de contingência com ajuda de um assistente de IA (Claude, ChatGPT ou Codex).', code: `Quero praticar pessimismo produtivo sobre meu produto.

Produto: <descreva em uma frase>
Público: <quem usa>
Recursos que tenho hoje: <tempo por semana, dinheiro, contatos, habilidades>

Imagine os três piores cenários realistas para os próximos 90 dias
(ex.: ninguém se cadastra, um concorrente grande lança algo igual, eu fico sem tempo).
Para cada cenário, liste 3 saídas criativas que usem SÓ os recursos que eu já tenho.
Nada que exija investimento novo. Seja concreto: ação, prazo, custo.`, verify: 'Você deve receber 3 cenários × 3 saídas. Se alguma saída exigir dinheiro que você não tem, peça ao assistente para substituí-la. Guarde o resultado numa nota e revise em 30 dias.' }),
            c.tip({ title: 'Comece pequeno', text: 'Não precisa ser um diário de anos. Abra uma nota chamada "contingência" e adicione uma linha por semana. O valor vem da repetição.' }),
          ],
        },
        {
          emoji: '👎', title: 'As cinco razões para NÃO funcionar', sub: 'Um exercício puramente negativo',
          what: 'Listar as cinco razões mais fortes pelas quais sua ideia vai falhar, sem suavizar nenhuma.',
          why: 'É a forma mais barata de encontrar o ponto fraco antes que o mercado encontre por você.',
          keys: 'Distribuição, cópia, mercado endereçável, dor individual, escopo local.',
          body: (t) => [
            c.p('Pegue sua ideia e responda, sem piedade: <strong class="text-emerald-400">quais são as cinco razões mais fortes pelas quais isso não vai dar certo?</strong> A lista abaixo mostra as que aparecem com mais frequência. Use como ponto de partida, não como resposta.'),
            c.steps(t, { title: 'As razões mais comuns', items: [
              { h: 'Não tenho distribuição', sub: 'O problema da maioria', text: 'Ninguém vai saber que o produto existe. Sem audiência, sem parceiros, sem canal, até o melhor produto morre em silêncio.' },
              { h: 'Dá para copiar gravando a tela', sub: 'O teste do clone', text: 'Alguém grava um vídeo usando seu produto, entrega para um assistente de código e diz "faça igual". Se isso bastar, você não tem produto, tem uma demonstração.' },
              { h: 'A dor pode ser só minha', sub: 'Mercado desconhecido', text: 'O problema existe no seu jeito de trabalhar, mas você não sabe se centenas, milhares ou milhões de pessoas sentem o mesmo.' },
              { h: 'Não sei o tamanho do mercado', sub: 'TAM incerto', text: 'Pode haver cinco clientes possíveis no mundo, ou cinco milhões. Sem uma estimativa, você não sabe se vale o esforço.' },
              { h: 'Pode ser só local', sub: 'Escopo geográfico', text: 'A necessidade pode existir na sua cidade ou região e não fazer sentido em outros lugares.' },
            ] }),
            c.glossary(t, [
              ['TAM', 'Total Addressable Market, mercado total endereçável. Quantas pessoas ou empresas poderiam, em teoria, comprar o seu produto.'],
              ['Distribuição', 'Tudo que faz o produto chegar a quem precisa dele: audiência, parceiros, busca, indicação.'],
            ]),
            c.figure(t, svg.donut(t, { label: 'Peso relativo das razões mais comuns de fracasso em produtos pequenos', center: '5|razões', parts: [
              { title: 'Sem distribuição', sub: 'a mais frequente', value: 40 },
              { title: 'Fácil de copiar', sub: 'o teste do clone', value: 25 },
              { title: 'Dor ou mercado incertos', sub: 'só minha? quantos?', value: 35 },
            ] }), 'As proporções são ilustrativas. O ponto é que distribuição aparece sozinha como a maior fatia: quem resolve só o produto e ignora o canal resolveu a menor parte do problema.'),
            c.alert({ title: 'Não pule este exercício', text: 'É desconfortável escrever por que sua ideia vai falhar. Justamente por isso quase ninguém faz, e quase todo mundo descobre essas razões tarde demais, depois de meses de trabalho.' }),
          ],
        },
        {
          emoji: '👍', title: 'As cinco razões para funcionar', sub: 'O mesmo rigor, agora para o lado positivo',
          what: 'Listar as cinco razões concretas pelas quais a ideia pode dar certo, com base em recursos e canais que você realmente tem.',
          why: 'O lado positivo mostra por onde começar. Mas precisa ser tão honesto quanto o negativo.',
          keys: 'Canais próprios, comissão, grupos e fóruns, feedback cedo, custo mínimo.',
          body: (t) => [
            c.p('Agora faça o exercício inverso. <strong class="text-emerald-400">Quais são as cinco razões mais fortes pelas quais isso pode funcionar?</strong> A regra é a mesma: nada de desejo, só fatos e recursos que você tem hoje.'),
            c.cards(t, [
              { emoji: '🤝', h: 'Parceiros que divulgariam', text: 'Conhecidos com audiência nas redes que falariam do produto em troca de uma comissão por venda.' },
              { emoji: '📺', h: 'Um canal próprio', text: 'Mesmo pequeno: uma lista de e-mails, um perfil, um grupo de clientes antigos.' },
              { emoji: '👥', h: 'Grupos de teste', text: 'Fóruns e grupos onde o seu público já se reúne e aceita ferramentas úteis.' },
              { emoji: '🔁', h: 'Feedback cedo', text: 'Um jeito de saber em dias, não meses, se o produto está no caminho certo.' },
              { emoji: '💰', h: 'Custo baixo para testar', text: 'A possibilidade de descobrir se vale gastando quase nada.' },
            ], 3),
            c.figure(t, svg.scale(t, { label: 'Balança entre razões contra e razões a favor da ideia', tilt: -8, left: { title: 'Contra', lines: ['sem distribuição', 'copiável', 'mercado incerto'] }, right: { title: 'A favor', lines: ['parceiros', 'canal próprio', 'teste barato'] } }), 'A balança só é útil se os dois pratos forem pesados com a mesma honestidade. Se os itens "a favor" forem desejos e os "contra" forem fatos, o resultado é enganoso.'),
            c.grid2(t, { okTitle: 'Razão a favor válida', ok: ['"Tenho três amigos com 20 mil seguidores no nicho que topam divulgar."', '"Já tenho 200 ex-clientes com esse problema."', '"Consigo testar num grupo de 5 mil pessoas nesta semana."'], badTitle: 'Razão a favor fraca', bad: ['"Todo mundo vai querer isso."', '"Se viralizar, estouro."', '"O produto é muito melhor que os outros."'] }),
            c.tip({ title: 'Cruze as duas listas', text: 'Para cada razão contra, veja se alguma razão a favor a neutraliza. "Sem distribuição" é neutralizado por "parceiros que divulgam". Riscos sem par na outra lista são os que precisam de plano.' }),
          ],
        },
        {
          emoji: '🎲', title: 'A aposta mínima', sub: 'Gastar o mínimo para descobrir se vale',
          what: 'Desenhar o teste mais barato possível que responda à pergunta mais arriscada sobre o produto.',
          why: 'Com IA, testar ficou baratíssimo. Gastar meses antes de testar virou um erro caro e evitável.',
          keys: 'Aposta pequena, teste mínimo, hipótese de risco, custo de aprendizado.',
          body: (t) => [
            c.p('A última peça do pessimismo produtivo é perguntar: <strong class="text-emerald-400">como descubro se estou certo gastando o mínimo possível?</strong> Não o mínimo para construir o produto inteiro, mas o mínimo para responder à dúvida mais perigosa.'),
            c.figure(t, svg.bars(t, { label: 'Comparação do custo de diferentes formas de testar uma ideia', aLabel: 'dias', bLabel: 'reais', items: [
              { label: 'Produto completo', a: 90, b: 95, aText: '90 dias', bText: 'alto' },
              { label: 'Protótipo funcional', a: 7, b: 20, aText: '7 dias', bText: 'baixo' },
              { label: 'Página + lista de espera', a: 1, b: 5, aText: '1 dia', bText: 'mínimo' },
            ] }), 'Cada linha responde a uma pergunta diferente. A página com lista de espera responde "alguém se interessa?". O protótipo responde "alguém usa?". O produto completo só deveria vir depois das duas.'),
            c.table(t, { headers: ['Dúvida mais arriscada', 'Aposta mínima', 'Sinal de sucesso'], rows: [
              ['Alguém quer isso?', 'Página simples com lista de espera, divulgada em 2 grupos', '30+ inscrições em uma semana'],
              ['Alguém paga?', 'Botão de pré-venda com desconto', '3+ pagamentos reais'],
              ['A pessoa entende sozinha?', 'Protótipo usado por 5 pessoas sem ajuda', '4 de 5 chegam ao resultado'],
              ['Consigo alcançar o público?', 'Um post num fórum do nicho', 'Respostas e mensagens diretas'],
            ], caption: 'Exemplos de apostas mínimas por tipo de dúvida' }),
            c.alert({ title: 'Cuidado com a aposta que não responde nada', text: 'Pesquisa de opinião ("você usaria?") é barata, mas quase não prova nada. As pessoas dizem sim por educação. Prefira testes em que elas precisem agir: se inscrever, pagar, usar.' }),
          ],
        },
        {
          emoji: '⚰️', title: 'Pré-mortem com IA', sub: 'Peça ao modelo para matar sua ideia antes do mercado',
          what: 'Usar um assistente de IA para conduzir um pré-mortem completo: imaginar que o produto fracassou em um ano e reconstruir por quê.',
          why: 'O modelo não tem apego à sua ideia. Com as instruções certas, ele encontra fraquezas que você não quer ver.',
          keys: 'Pré-mortem, advogado do diabo, prompt estruturado, plano de mitigação.',
          body: (t) => [
            c.p('Você pode juntar tudo deste módulo num único exercício com IA. A técnica se chama <strong class="text-emerald-400">pré-mortem</strong>: em vez de perguntar "o que pode dar errado?", você afirma "já deu errado" e pede para reconstruir a história do fracasso. A mudança de tempo verbal libera críticas muito mais concretas.'),
            c.figure(t, svg.flow(t, { label: 'Etapas do pré-mortem com IA', steps: [
              { title: 'Descrever', sub: 'produto, público,|recursos' },
              { title: 'Declarar', sub: '"fracassou em|12 meses"' },
              { title: 'Reconstruir', sub: 'as causas|prováveis' },
              { title: 'Mitigar', sub: 'aposta mínima|por causa' },
            ] }), 'O passo que faz diferença é o segundo: declarar o fracasso como fato. Quando o modelo parte do "já aconteceu", ele para de tentar agradar e passa a explicar.'),
            c.code(t, { objective: 'Rodar um pré-mortem completo da sua ideia no Claude, ChatGPT ou Codex, cruzando razões contra, razões a favor e apostas mínimas.', code: `Aja como um investidor experiente e cético. Faça um PRÉ-MORTEM do meu produto.

Produto: <o que faz, em uma frase>
Para quem: <público específico>
Como ganha dinheiro: <modelo de cobrança e preço>
Recursos que tenho: <tempo, dinheiro, audiência, contatos>

Parta do fato: estamos daqui a 12 meses e o produto FRACASSOU.

1. Liste as 5 causas mais prováveis do fracasso, da mais para a menos provável.
   Considere obrigatoriamente: distribuição, facilidade de cópia (alguém grava a
   tela e pede a uma IA para refazer), tamanho real do mercado, se a dor é só minha,
   e se um gigante poderia lançar algo parecido.
2. Liste as 5 razões mais fortes para ter dado CERTO, usando só os recursos que informei.
3. Para cada causa de fracasso, proponha uma aposta mínima (menos de 7 dias e
   menos de R$ 200) que testaria se aquele risco é real.
4. Termine com um veredito de uma frase: seguir, ajustar ou abandonar, e por quê.

Não suavize. Se a ideia for fraca, diga.`, verify: 'A resposta precisa ter as quatro partes numeradas e um veredito claro. Se o modelo elogiar demais, responda "você está sendo gentil; refaça como se fosse seu dinheiro em jogo". Guarde o resultado: ele vira seu plano de testes da Trilha 2.' }),
            c.tip({ title: 'Rode duas vezes', text: 'Rode o mesmo prompt em dois modelos diferentes, ou duas vezes no mesmo modelo em conversas novas. Causas que aparecem nas duas respostas são as que você deve testar primeiro.' }),
            c.grid2(t, { okTitle: 'Bom uso do pré-mortem', ok: ['Rodar antes de escrever código.', 'Transformar cada causa em um teste barato.', 'Repetir quando a ideia mudar.'], badTitle: 'Mau uso do pré-mortem', bad: ['Pedir até o modelo concordar com você.', 'Ler, achar interessante e seguir igual.', 'Usar como desculpa para nunca começar.'] }),
          ],
        },
      ],
      quiz: [
        { q: 'O que diferencia o pessimismo produtivo do derrotista?', options: ['A quantidade de riscos listados', 'O produtivo transforma cada risco numa ação de teste', 'O derrotista ignora os riscos'], answer: 1, why: 'Os dois listam riscos. O produtivo pergunta "como reduzo isso?" e faz uma aposta pequena para descobrir.' },
        { q: 'Qual é o "teste do clone"?', options: ['Ver se alguém recria seu produto gravando a tela e pedindo a uma IA', 'Registrar a marca no INPI', 'Comparar preços com concorrentes'], answer: 0, why: 'Se um vídeo de uso mais um prompt bastam para copiar, o produto não tem proteção.' },
        { q: 'Por que o pré-mortem declara que o produto "já fracassou"?', options: ['Para desmotivar', 'Porque partir do fato gera explicações mais concretas do que perguntar o que pode dar errado', 'Porque é obrigatório em investimentos'], answer: 1, why: 'Mudar o tempo verbal tira o modelo (e você) do modo de agradar e força a reconstruir causas específicas.' },
      ],
      summary: [
        ['Pessimismo produtivo', 'listar riscos para agir, não para desistir'],
        ['Diário de contingência', 'treinar saídas criativas com recursos que já existem'],
        ['Cinco razões contra', 'distribuição, cópia, dor só sua, mercado incerto, escopo local'],
        ['Cinco razões a favor', 'só fatos e recursos atuais, com o mesmo rigor'],
        ['Aposta mínima', 'o teste mais barato para a dúvida mais perigosa'],
        ['Pré-mortem com IA', 'declarar o fracasso e reconstruir as causas com um modelo cético'],
      ],
    },
  ],
};
