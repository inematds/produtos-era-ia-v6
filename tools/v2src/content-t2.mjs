// Trilha 2 — Vale a pena construir? (blue)
import { c, svg } from './lib.mjs';

export const T2 = {
  modules: [
    // ================= 2.1 =================
    {
      id: '2-1', emoji: '🩹', title: 'Necessidade e prazo de validade', punch: 'Resolva a partir do sofrimento', minutes: 40, level: 'Básico', kind: 'Estratégia',
      lead: 'Antes de perguntar "como construir", pergunte "isso precisa existir?" e "vai continuar precisando existir daqui a um ano?". São as duas perguntas que mais eliminam ideias, e é bom que eliminem.',
      topics: [
        {
          emoji: '❓', title: 'Isso é necessário?', sub: 'Você construiu porque podia ou porque o mercado está pedindo?',
          what: 'A primeira pergunta de oportunidade: o produto nasce de uma demanda real ou só da empolgação de conseguir construir?',
          why: 'Hoje dá para construir quase qualquer coisa em uma tarde. Por isso, "consigo fazer" deixou de ser argumento. A maioria das ideias que circulam não resolve dor nenhuma.',
          keys: 'Demanda real, empolgação técnica, dor, mercado que "grita", ideia de construtor.',
          body: (t) => [
            c.p('Existe um tipo de ideia que nasce do lado de quem constrói: "descobri que dá para fazer X com IA, então vou fazer um app de X". A pergunta que falta é do lado de quem vai usar: <strong class="text-blue-400">alguém está sofrendo por não ter X?</strong>'),
            c.p('Quem conversa com muitos empreendedores percebe um padrão desconfortável: a imensa maioria das ideias apresentadas, algo como nove em cada dez, não é um ponto de dor. São coisas legais, bem executadas, às vezes bonitas. Mas ninguém acorda de manhã precisando delas.'),
            c.figure(t, svg.split(t, { label: 'Duas origens de uma ideia de produto: do lado de quem constrói (porque é possível) e do lado de quem sofre (porque é necessário)', bridge: 'qual lado?', left: { title: 'PORQUE EU POSSO', items: ['"Descobri uma API nova"', '"Fiz em uma tarde"', '"Ficou bonito"', 'Ninguém pediu', 'Uso cai em 2 semanas'] }, right: { title: 'PORQUE ALGUÉM PRECISA', items: ['"Perco 5 h por semana nisso"', '"Pago caro e ainda erro"', '"Tenho medo de dar errado"', 'Pessoas já pedem', 'Uso volta sozinho'] } }), 'Compare as frases da esquerda e da direita. As da esquerda falam de você; as da direita falam do cliente. Uma ideia forte é descrita com frases da direita.'),
            c.grid2(t, { okTitle: 'Sinais de que o mercado está pedindo', ok: ['Pessoas já pagam por gambiarras (planilhas, freelancers, consultorias) para resolver isso.', 'Você ouve a mesma reclamação de gente que não se conhece.', 'O problema custa dinheiro, tempo ou sono de forma mensurável.', 'Alguém pergunta "quando fica pronto?" antes de você oferecer.'], badTitle: 'Sinais de que é só empolgação sua', bad: ['A explicação começa pela tecnologia, não pelo problema.', 'Você precisa convencer as pessoas de que elas têm o problema.', 'Os elogios são "que legal" e não "quanto custa?".', 'Nenhum usuário voltou depois do primeiro teste.'] }),
            c.tip({ title: 'O teste do "quanto custa?"', text: 'Mostre a ideia para cinco pessoas do público certo. Se ninguém perguntar preço, prazo ou "posso testar agora?", você ouviu educação, não demanda.' }),
          ],
        },
        {
          emoji: '🔥', title: 'Resolver a partir do sofrimento', sub: 'Sem dor, ninguém tem motivo para mudar de hábito',
          what: 'Construir a partir de um sofrimento concreto de alguém, em vez de construir para resolver por resolver.',
          why: 'Adotar um produto novo dá trabalho: cadastro, cartão, aprender a usar. Só quem está com dor suficiente paga esse custo de mudança.',
          keys: 'Dor, custo de mudança, urgência, intensidade, frequência.',
          body: (t) => [
            c.p('Se você não resolve a partir do sofrimento, está resolvendo só para resolver. E aí ninguém está numa posição de dor que justifique usar seu produto. Essa frase parece óbvia, mas é a que mais se esquece quando construir fica fácil.'),
            c.concept(t, { title: 'Por que a dor é o combustível da adoção', emoji: '⛽', paras: ['Toda troca de ferramenta tem um custo: aprender a interface, migrar dados, convencer o sócio, cadastrar cartão. O usuário só paga esse custo quando a dor de ficar como está é maior do que a dor de mudar.', 'Por isso produtos "legais" têm muito cadastro e pouco uso. O cadastro custa um clique; o uso diário exige uma dor que se repete.'] }),
            c.figure(t, svg.scale(t, { label: 'A balança da adoção: o usuário só troca de hábito quando a dor atual pesa mais que o custo de mudar', tilt: 1, left: { title: 'DOR ATUAL', lines: ['perde tempo toda semana', 'perde dinheiro', 'tem medo do erro'] }, right: { title: 'CUSTO DE MUDAR', lines: ['aprender a ferramenta', 'cadastrar cartão', 'migrar dados'] } }), 'O prato da dor precisa pesar mais. Você pode aumentar esse peso escolhendo uma dor maior, ou diminuir o outro prato tornando a adoção quase sem atrito.'),
            c.table(t, { headers: ['Dimensão da dor', 'Pergunta para medir', 'Resposta forte'], rows: [['Frequência', 'Com que frequência isso acontece?', 'Toda semana ou todo dia'], ['Intensidade', 'Quanto custa quando acontece?', 'Dinheiro, cliente perdido, noite sem dormir'], ['Urgência', 'Precisa resolver agora?', 'Sim, há prazo, multa ou risco'], ['Consciência', 'A pessoa sabe que tem o problema?', 'Sabe e já procurou solução']], caption: 'Quatro dimensões para avaliar se uma dor sustenta um produto.' }),
            c.alert({ title: 'Armadilha: a dor que só você sente', text: 'Um problema pode ser real para o seu jeito de trabalhar e raro para o resto do mundo. Antes de construir, confirme que a dor existe em pessoas que não são você nem seus amigos próximos.' }),
          ],
        },
        {
          emoji: '⏳', title: 'Vai merecer existir em 3, 6 e 12 meses?', sub: 'Viver três meses no futuro',
          what: 'Projetar a ideia para o futuro próximo e perguntar se ela ainda terá valor quando os modelos e as ferramentas avançarem.',
          why: 'O que hoje exige um produto pode virar um recurso gratuito, ou um único pedido a um modelo, em poucos meses. Construir isso é construir com prazo de validade curto.',
          keys: 'Prazo de validade, "vibe-codável", um prompt, recurso vs produto, horizonte de 3/6/12 meses.',
          body: (t) => [
            c.p('Uma boa disciplina é tentar viver três meses no futuro. Quando aparece um produto novo que chama atenção, a pergunta não é "isso é legal?", e sim: <strong class="text-blue-400">quão fácil vai ser acrescentar essa mesma coisa em qualquer outro lugar daqui a três meses?</strong>'),
            c.glossary(t, [['Vibe coding', 'Construir software descrevendo o que você quer para uma IA, que escreve o código. "Vibe-codável" é algo que dá para fazer assim com pouco esforço.'], ['Um prompt', 'Quando uma funcionalidade inteira sai de um único pedido ao modelo. Se o seu produto cabe em um prompt, ele não é um produto, é uma instrução.'], ['Clone com diferença mínima', 'Produto que repete um existente com um detalhe a mais. O detalhe costuma ser absorvido pelo original em semanas.'], ['Prazo de validade', 'O tempo durante o qual o produto ainda resolve algo que a alternativa gratuita não resolve.']]),
            c.figure(t, svg.curve(t, { label: 'Quanto esforço cada tipo de ideia ainda exige ao longo do tempo: o recurso simples despenca, o problema profundo continua exigindo trabalho', yLabel: 'esforço para replicar', xLabels: ['hoje', '3 meses', '6 meses', '12 meses'], series: [{ name: 'problema profundo', values: [90, 82, 76, 70], texts: ['alto', 'alto', 'alto', 'ainda alto'] }, { name: 'recurso simples', values: [60, 30, 12, 4], texts: ['médio', 'baixo', '1 prompt', 'grátis'] }] }), 'A linha de baixo é a de quem constrói um recurso simples: em meses, replicar custa um prompt. A de cima é a de quem escolheu um problema com nuance: o esforço para copiar continua alto, e isso é o que mantém o produto vivo.'),
            c.steps(t, { title: 'O exercício dos três horizontes', items: [{ h: 'Daqui a 3 meses', text: 'Isso já dá para fazer com um agente de código em uma tarde? Se sim, você tem pouca janela.' }, { h: 'Daqui a 6 meses', text: 'Algum dos grandes assistentes vai oferecer isso como recurso embutido? Se sim, seu público vai ganhar de graça o que você cobra.' }, { h: 'Daqui a 12 meses', text: 'O problema ainda existe, mesmo com modelos muito melhores? Se ele muda junto com a tecnologia (como segurança), é bom sinal.' }] }),
            c.tip({ title: 'Por que ignorar a maioria dos lançamentos', text: 'Esse filtro explica por que vale ignorar a maior parte dos produtos novos que aparecem toda semana. Se a diferença deles é uma funcionalidade que qualquer um acrescenta em um mês, não vale a sua atenção, nem como usuário nem como concorrente.' }),
          ],
        },
        {
          emoji: '🛡️', title: 'Estudo de caso: segurança para apps feitos com IA', sub: 'Chato, ninguém gosta, e é um jogo de gato e rato eterno',
          what: 'Um exemplo de nicho escolhido de propósito por ser pouco atraente e por se renovar sozinho: proteger aplicativos construídos com IA.',
          why: 'Mostra na prática os critérios anteriores: dor real, problema que não se resolve de uma vez e que cresce junto com a tecnologia.',
          keys: 'Cibersegurança, gato e rato, ataques crescentes, modelos abertos sem trava, defesa com modelos de fronteira.',
          body: (t) => [
            c.p('Imagine alguém escolhendo o nicho do próximo SaaS. Em vez de algo vistoso, escolhe <strong class="text-blue-400">segurança para aplicativos feitos com IA</strong>. Os motivos são três, e nenhum é "porque é bonito".'),
            c.cards(t, [{ emoji: '😴', h: 'Ninguém gosta', text: 'Segurança é um assunto que a maioria evita. Isso significa pouca concorrência de gente que só quer fazer o que dá likes.' }, { emoji: '🙈', h: 'Não é sexy', text: 'Não rende vídeo viral de "olha o que eu fiz em 10 minutos". Quem entra, entra por necessidade, e fica.' }, { emoji: '🐱', h: 'Gato e rato eterno', text: 'Cada avanço da defesa gera um avanço do ataque. O problema nunca fica "resolvido de vez".' }], 3),
            c.figure(t, svg.bars(t, { label: 'Ataques mensais a aplicativos de consumidores: a média histórica de cerca de 100 por mês saltou para cerca de 600 em quatro meses', aLabel: 'antes', bLabel: 'quatro meses depois', max: 700, items: [{ label: 'Ataques por mês', a: 100, b: 600, aText: '~100', bText: '~600' }] }), 'A barra de baixo é seis vezes a de cima, em apenas quatro meses. Um problema que cresce assim, sem sinal de parar, garante demanda por muito tempo.'),
            c.concept(t, { title: 'Por que é um jogo de gato e rato', emoji: '🔁', paras: ['Os modelos de fronteira ficam melhores em defender. Ao mesmo tempo, modelos abertos, rodando localmente e sem as travas de segurança, muitas vezes treinados copiando o comportamento dos modelos fechados, ficam melhores em invadir.', 'E há um detalhe: os modelos de fronteira têm barreiras para ajudar pessoas comuns em tarefas de segurança ofensiva. Isso deixa um espaço para produtos especializados que endurecem a infraestrutura de quem não é grande empresa.'] }),
            c.grid2(t, { okTitle: 'O que esse nicho tem de bom', ok: ['Demanda cresce com o próprio avanço da IA.', 'O cliente sente medo, e medo é uma dor forte.', 'Resolver exige atualização contínua, o que sustenta assinatura.', 'Dados de vulnerabilidades encontradas viram ativo e conteúdo.'], badTitle: 'O que ele exige de você', bad: ['Credibilidade: ninguém confia segurança a quem parece amador.', 'Atualização constante, sem "terminar" o produto.', 'Explicar um tema chato de forma simples.', 'Responsabilidade real quando algo falha.'] }),
          ],
        },
        {
          emoji: '🕳️', title: 'A lacuna de informação é uma dor', sub: 'O medo do que você não sabe que não sabe',
          what: 'Muitas dores não são falta de ferramenta, e sim falta de conhecimento: a pessoa sabe que existe um risco, mas não sabe avaliá-lo.',
          why: 'Esse tipo de dor é forte porque vem acompanhado de insegurança. E é um problema em que as pessoas não querem gastar tempo nem tokens, mesmo sabendo que conseguiriam.',
          keys: 'Lacuna de informação, insegurança, subcontratar especialista, tempo e tokens, terceirizar a preocupação.',
          body: (t) => [
            c.p('Pense em quem está no meio de um contrato com um cliente e, de repente, percebe que o sistema entregue pode ter falhas de segurança. A primeira reação é achar que precisa subcontratar um especialista caro. O incômodo não é técnico, é emocional: <strong class="text-blue-400">a pessoa não sabe o que não sabe</strong>.'),
            c.figure(t, svg.stack(t, { label: 'Camadas do conhecimento: o que você sabe, o que sabe que não sabe, e o que nem sabe que não sabe, onde mora a maior insegurança', layers: [{ title: 'O que você sabe', sub: 'resolve sozinho' }, { title: 'O que você sabe que não sabe', sub: 'procura ajuda' }, { title: 'O que você nem sabe que não sabe', sub: 'gera medo difuso: aqui mora a dor' }] }), 'Quanto mais para dentro, maior a insegurança. Um produto que ilumina a camada de dentro ("você tem estes 5 riscos") transforma medo difuso em lista de tarefas, e isso tem muito valor.'),
            c.p('Mesmo quem saberia resolver com ajuda de um agente de IA muitas vezes prefere não gastar tempo nem tokens nisso. É o tipo de problema que a pessoa quer entregar para alguém de confiança e esquecer. Esse "quero terceirizar a preocupação" é um ótimo sinal de produto.'),
            c.tip({ title: 'Como encontrar lacunas de informação', text: 'Procure frases como "não sei se estou fazendo certo", "tenho medo de estar exposto", "será que preciso de um especialista?". Elas aparecem em fóruns, grupos e comentários, e indicam dor que ninguém organizou ainda.' }),
          ],
        },
        {
          emoji: '💄', title: 'Problemas pouco atraentes vencem os atraentes', sub: 'O vistoso atrai concorrência; o chato atrai clientes',
          what: 'Preferir problemas sem glamour, que poucos querem resolver, a problemas vistosos que todo mundo está atacando ao mesmo tempo.',
          why: 'Problemas "sexy" rendem boas demonstrações e por isso ficam lotados. E alguns nichos populares já são bem resolvidos pelo próprio chat de IA, sem precisar de um SaaS.',
          keys: 'Problema sexy, problema chato, saturação, criação de conteúdo, processo íntimo.',
          body: (t) => [
            c.p('As pessoas adoram perseguir problemas bonitos porque eles funcionam bem visualmente: dá para gravar um vídeo impressionante em dez segundos. O resultado é previsível: dezenas de produtos quase iguais disputando a mesma atenção.'),
            c.p('Um exemplo clássico de nicho ruim hoje é <strong class="text-blue-400">automação de criação de conteúdo</strong>. Há mil formas de fazer isso, e a maioria das pessoas já usa o ChatGPT, o Claude ou os dois para isso. Além disso, criar conteúdo é um processo íntimo: uma ferramenta genérica nunca fica do jeito que a pessoa gosta.'),
            c.figure(t, svg.split(t, { label: 'Problemas vistosos versus problemas chatos: onde está a concorrência e onde está a dor', bridge: 'escolha', left: { title: 'VISTOSO', items: ['Demo impressiona', 'Muitos concorrentes', 'Já resolvido pelo chat', 'Usuário testa e some', 'Briga por preço'] }, right: { title: 'CHATO', items: ['Demo sem graça', 'Poucos concorrentes', 'Exige especialização', 'Usuário fica por medo/dor', 'Aceita preço justo'] } }), 'Leia coluna por coluna: o lado vistoso ganha na primeira impressão e perde em todo o resto. O lado chato é difícil de vender no primeiro dia e fácil de manter nos anos seguintes.'),
            c.code(t, { objective: 'Pedir a um agente (Claude Code, Codex ou chat) uma avaliação honesta da sua ideia pelas perguntas deste módulo.', code: `Aja como um investidor cético avaliando uma ideia de produto.

Ideia: <descreva seu produto em 2 frases>
Público: <quem usa e em que situação>
Como a pessoa resolve isso hoje: <ferramentas, planilhas, freelancer...>

Responda, com nota de 0 a 10 e uma frase de justificativa cada:
1. Isso é necessário ou foi construído porque era possível?
2. Qual é a dor, em frequência, intensidade, urgência e consciência?
3. Isso ainda vai merecer existir em 3, 6 e 12 meses? Poderia virar um único prompt?
4. É um problema "vistoso" (lotado) ou "chato" (com pouca concorrência)?
5. Há uma lacuna de informação (medo do que o cliente não sabe)?

Termine com: "Vale continuar?" (sim / não / sim, se...) e as 3 perguntas que eu deveria fazer a clientes reais esta semana.`, verify: 'A resposta deve trazer 5 notas com justificativa e uma decisão clara. Se todas as notas vierem altas, peça: "agora seja duro e encontre os 3 maiores furos".' }),
            c.tip({ title: 'Desconfie da nota alta', text: 'Modelos de linguagem tendem a agradar. Rode o mesmo prompt pedindo explicitamente o papel de crítico, e compare as duas respostas.' }),
          ],
        },
      ],
      quiz: [
        { q: 'Qual é o sinal mais forte de que uma ideia responde a uma demanda real?', options: ['Amigos dizem "que legal"', 'Pessoas perguntam preço e prazo antes de você oferecer', 'A demo ficou muito bonita', 'Foi construída em uma tarde'], answer: 1, why: 'Perguntar preço e prazo mostra intenção de pagar. Elogio sem pedido é educação, não demanda.' },
        { q: 'O que significa perguntar se a ideia "merece existir em 3, 6 e 12 meses"?', options: ['Planejar o cronograma de desenvolvimento', 'Verificar se ela não vai virar um recurso gratuito ou um único prompt', 'Calcular o retorno financeiro', 'Escolher a data de lançamento'], answer: 1, why: 'É um teste de prazo de validade: se o avanço dos modelos torna a ideia trivial, ela não sustenta um produto.' },
        { q: 'Por que segurança para apps feitos com IA é um bom exemplo de nicho?', options: ['Porque é muito popular nas redes', 'Porque é fácil de construir', 'Porque é um jogo de gato e rato que cresce com a própria IA', 'Porque não exige credibilidade'], answer: 2, why: 'Ataque e defesa evoluem juntos, a demanda cresce e o problema nunca fica resolvido de vez.' },
      ],
      summary: [
        ['Necessidade', 'Construir porque é possível não é argumento; construa porque alguém precisa.'],
        ['Sofrimento', 'Só a dor paga o custo de mudar de hábito.'],
        ['Prazo de validade', 'Projete 3, 6 e 12 meses: se vira um prompt, esqueça.'],
        ['Gato e rato', 'Problemas que se renovam com a tecnologia sustentam produtos.'],
        ['Lacuna de informação', 'O medo do que não se sabe é uma dor forte e pouco atendida.'],
        ['Chato vence vistoso', 'Menos concorrência e clientes que ficam.'],
      ],
    },

    // ================= 2.2 =================
    {
      id: '2-2', emoji: '🐘', title: 'Gigantes, dados e dificuldade', punch: 'O que te protege quando tudo é copiável', minutes: 40, level: 'Intermediário', kind: 'Estratégia',
      lead: 'Num mundo em que qualquer software pode ser copiado, a pergunta não é "tenho um fosso?", e sim "o que, exatamente, dificulta que me copiem, e o que sobra se copiarem?".',
      topics: [
        {
          emoji: '🦖', title: 'Um gigante te clona da noite para o dia?', sub: 'Credibilidade no nicho e o charme do produto independente',
          what: 'Avaliar se uma empresa grande, com recursos de sobra, poderia acordar amanhã e lançar o seu produto, e se ela teria credibilidade naquele mercado para roubar seus clientes.',
          why: 'Ser copiado por um gigante é o maior risco de um produto pequeno. Mas nem todo gigante tem a reputação certa em todo nicho.',
          keys: 'Clonagem, credibilidade no nicho, produto independente, experiência sem atrito, landing pensada para a pessoa.',
          body: (t) => [
            c.p('Existem empresas que, se quisessem, clonariam seu produto numa semana. A pergunta completa tem duas partes: <strong class="text-blue-400">elas poderiam?</strong> e <strong class="text-blue-400">elas teriam credibilidade naquele mercado para levar seus clientes?</strong>'),
            c.p('Às vezes a resposta à segunda é não. O seu diferencial pode ser justamente ser o produto independente, moderno, em que as pessoas querem apostar. Fácil de usar, sem burocracia, com uma página que parece feita para a pessoa, e não para o departamento de compras de uma corporação.'),
            c.figure(t, svg.scale(t, { label: 'A balança do gigante contra o independente: recursos de um lado, proximidade e agilidade do outro', tilt: 0, left: { title: 'GIGANTE', lines: ['dinheiro e equipe', 'distribuição pronta', 'processos lentos'] }, right: { title: 'INDEPENDENTE', lines: ['perto do nicho', 'decide em horas', 'experiência sem atrito'] } }), 'A balança fica equilibrada quando você escolhe lutar onde os pratos do independente pesam: proximidade com um nicho específico e velocidade. Em escala e preço, o gigante sempre ganha.'),
            c.grid2(t, { okTitle: 'Você resiste melhor a um clone quando', ok: ['O nicho é pequeno demais para interessar ao gigante.', 'O gigante não tem reputação naquele público.', 'Seu produto carrega uma identidade que as pessoas querem apoiar.', 'Você resolve o caso específico, não o genérico.'], badTitle: 'Você está exposto quando', bad: ['Seu produto é um recurso natural do produto do gigante.', 'O público já usa o gigante todos os dias.', 'A única vantagem é ter chegado antes.', 'Sua página parece a de qualquer corporação.'] }),
            c.tip({ title: 'Pergunta de bolso', text: '"Se a maior empresa do meu setor lançasse isso amanhã, por que um cliente continuaria comigo?" Se você não tem resposta em uma frase, ainda não tem proteção.' }),
          ],
        },
        {
          emoji: '🧩', title: 'O teste do plugin', sub: 'E se isso virasse um app dentro do assistente que o cliente já paga?',
          what: 'Imaginar seu produto como um plugin, um app ou um recurso dentro do ChatGPT, do Claude ou do Gemini, acessível com um clique e sem assinatura nova.',
          why: 'Se uma versão 80% boa aparecer dentro de algo que o cliente já paga, ele não precisa descobrir você, confiar em você nem cadastrar o cartão. Esse é o risco concreto.',
          keys: 'Loja de plugins, 80% do caminho, custo de adoção zero, "vale um prompt para eles?", jogar um osso.',
          body: (t) => [
            c.p('Faça o exercício: amanhã, um dos grandes laboratórios de IA acrescenta o seu produto como app na loja de plugins do assistente deles. O usuário clica uma vez e usa. Não precisa assinar mais nada, não precisa conhecer sua marca, não precisa arriscar o cartão. Mesmo que resolva só <strong class="text-blue-400">80% do problema</strong>, muita gente vai achar suficiente.'),
            c.figure(t, svg.flow(t, { label: 'Os passos que o seu produto exige do cliente contra o único clique de um plugin embutido', steps: [{ title: 'Descobrir', sub: 'achar sua marca' }, { title: 'Confiar', sub: 'ler, comparar' }, { title: 'Cadastrar', sub: 'conta e cartão' }, { title: 'Aprender', sub: 'nova interface' }, { title: 'Usar', sub: 'finalmente' }] }), 'Cada caixa é um ponto em que o cliente pode desistir. O plugin embutido pula direto para a última. Para competir, sua solução precisa ser muito melhor, ou atender um caso que o plugin não cobre.'),
            c.concept(t, { title: 'A pergunta que equilibra o medo', emoji: '⚖️', paras: ['Há o outro lado: vale a pena para um laboratório gigante gastar tempo e recursos, mesmo que seja só mandar um pedido ao modelo mais forte deles, para resolver o seu micro problema?', 'Muitas vezes não. Eles preferem deixar esse campo livre, lançar algo genérico, "jogar um osso" para os usuários, sem resolver o problema por inteiro. Esse espaço entre o osso e a solução completa é onde produtos pequenos vivem.'] }),
            c.table(t, { headers: ['Situação', 'Risco do plugin', 'Leitura'], rows: [['Recurso genérico que todo usuário quer', 'Alto', 'Vai virar recurso nativo; evite'], ['Caso de nicho com regras específicas', 'Baixo', 'O gigante joga um osso e segue em frente'], ['Exige dados ou integrações do cliente', 'Médio', 'Depende de quão profundo é o encaixe'], ['Exige responsabilidade (segurança, jurídico)', 'Baixo', 'Grandes evitam assumir esse risco']], caption: 'Como ler o risco de ser engolido por um recurso embutido.' }),
            c.alert({ title: 'Não confunda "eles não fizeram ainda" com "eles não vão fazer"', text: 'A ausência do recurso hoje não é proteção. Proteção é o motivo estrutural pelo qual não compensa para eles fazer bem feito.' }),
          ],
        },
        {
          emoji: '💾', title: 'O valor intrínseco dos dados', sub: 'Às vezes o software é só a máquina que produz o ativo',
          what: 'Perguntar se, mesmo que o produto seja superado, os dados que ele gerou têm valor próprio, a ponto de alguém comprá-los.',
          why: 'Empresas já foram vendidas por fortunas não pelo software nem pelos usuários, mas pelo conjunto de dados que só elas tinham.',
          keys: 'Ativo intrínseco, dataset, acqui-hire, dado difícil de gerar, compradores de dados.',
          body: (t) => [
            c.p('Um exemplo real ajuda. Um fundador jovem, discreto, de camiseta e sandália, tinha acabado de vender a empresa por <strong class="text-blue-400">nove dígitos</strong>. A empresa era do setor de música. Ela não foi comprada pela beleza do software nem, principalmente, pelo número de usuários. Foi comprada pelos <strong class="text-blue-400">dados</strong>: um conjunto difícil de gerar, que não se comprava de nenhum corretor de dados.'),
            c.glossary(t, [['Dataset', 'Um conjunto organizado de dados, como registros, textos, áudios ou interações, usado para análise ou para treinar modelos.'], ['Acqui-hire', 'Quando uma empresa compra outra principalmente para contratar sua equipe. No exemplo, parte da equipe foi incorporada para integrar o produto.'], ['Ativo intrínseco', 'Algo que tem valor em si, independentemente de o produto dar certo.'], ['Corretor de dados', 'Empresa que compra e revende dados. Se o seu dado não pode ser comprado dela, ele é raro.']]),
            c.figure(t, svg.donut(t, { label: 'De onde veio o valor na venda do exemplo: a maior parte dos dados, uma parte da equipe e uma parte menor do software', center: 'Dados|o ativo principal', parts: [{ title: 'Dados', sub: 'difíceis de gerar ou comprar', value: 65 }, { title: 'Equipe', sub: 'contratada para integrar', value: 20 }, { title: 'Software e usuários', sub: 'ajudaram a gerar os dados', value: 15 }] }), 'A proporção é ilustrativa, mas a lição não: o software e os usuários valeram sobretudo porque produziam dados. Olhe o seu produto e pergunte qual fatia seria a maior.'),
            c.data({ title: 'O mercado de dados está ativo', items: ['Há empresas anunciando que pagam até <strong>US$ 2 milhões</strong> por conjuntos de dados corporativos suficientemente grandes.', 'Elas selecionam e organizam esses dados para revendê-los a laboratórios de IA.', 'Consequência: mesmo que seu SaaS não decole, o subproduto dele pode ser vendável.'] }),
            c.tip({ title: 'Cuidado com privacidade', text: 'Dado valioso só é ativo se foi coletado com consentimento e dentro da lei (no Brasil, a LGPD). Dado coletado de forma errada é passivo, não ativo.' }),
          ],
        },
        {
          emoji: '🏗️', title: 'Desenhar o produto cujo subproduto é um ativo', sub: 'Pensar nos dados desde o primeiro dia',
          what: 'Planejar desde o início quais dados o uso do produto vai gerar, como armazená-los e como eles podem se tornar valiosos.',
          why: 'Dados bons não aparecem por acaso. Se você não os desenhar no início, vai perder o histórico que daria valor ao negócio mesmo no pior cenário.',
          keys: 'Dados como subproduto, anonimização, estrutura, consentimento, plano B.',
          body: (t) => [
            c.p('Se os dados podem ser o ativo, eles precisam ser desenhados como tal. Isso não significa coletar tudo, e sim coletar <strong class="text-blue-400">o que é raro, estruturado e autorizado</strong>.'),
            c.steps(t, { title: 'Quatro passos para transformar uso em ativo', items: [{ h: 'Identifique o dado raro', text: 'O que o seu produto vê que ninguém mais vê? Ex.: um produto de segurança vê quais vulnerabilidades aparecem em milhares de apps diferentes.' }, { h: 'Estruture desde o início', text: 'Guarde em formato consistente (categorias, datas, contexto). Dado bagunçado vale pouco.' }, { h: 'Garanta o consentimento', text: 'Termos de uso claros, anonimização e respeito à LGPD. Sem isso, o dado não pode ser vendido nem usado.' }, { h: 'Use o dado já agora', text: 'O mesmo dado alimenta relatórios, conteúdo e melhoria do produto, antes de valer como ativo de venda.' }] }),
            c.figure(t, svg.flow(t, { label: 'Ciclo em que o uso do produto gera dados que melhoram o produto, viram conteúdo e se acumulam como ativo', steps: [{ title: 'Uso', sub: 'clientes usam' }, { title: 'Dados', sub: 'registrados|e anonimizados' }, { title: 'Melhoria', sub: 'produto melhor' }, { title: 'Conteúdo', sub: 'relatórios|públicos' }, { title: 'Ativo', sub: 'valor mesmo|no pior caso' }] }), 'Siga as setas: cada etapa alimenta a próxima. O último quadro é o seu plano B: mesmo que o produto perca espaço, o acúmulo de dados continua valendo.'),
            c.grid2(t, { okTitle: 'Dado com cara de ativo', ok: ['Raro: só o seu produto gera.', 'Estruturado e rotulado.', 'Coletado com consentimento.', 'Cresce com o uso, sem custo extra.'], badTitle: 'Dado com cara de lixo', bad: ['Genérico: qualquer um coleta.', 'Solto em logs sem padrão.', 'Coletado sem autorização.', 'Exige trabalho manual para existir.'] }),
          ],
        },
        {
          emoji: '🧗', title: 'Fácil demais de construir é um problema', sub: 'Se levou meia hora, alguém faz igual em meia hora',
          what: 'Tratar a facilidade de construção como sinal de alerta: se o produto é trivial de fazer, ele é trivial de copiar.',
          why: 'Num mundo em que qualquer pessoa constrói qualquer coisa, a dificuldade virou uma forma de proteção.',
          keys: 'Dificuldade como fosso, one-shot, iteração, epifania rara, esforço acumulado.',
          body: (t) => [
            c.p('Se é muito fácil de construir, normalmente temos um problema. A menos que você tenha tido uma ideia genial que ninguém teve na história da humanidade, o que é bem improvável, algo muito estreito que levou meia hora para ficar pronto dificilmente vai dar certo.'),
            c.p('Precisa haver algum ponto de dor ou algum ciclo de iteração que, mesmo usando o modelo mais forte disponível, no nível máximo de esforço, <strong class="text-blue-400">não sai em um único pedido</strong>.'),
            c.figure(t, svg.bars(t, { label: 'Tempo para construir comparado ao tempo para um concorrente copiar: produtos fáceis são copiados na mesma velocidade', aLabel: 'você levou', bLabel: 'concorrente copia em', max: 220, items: [{ label: 'App de meia hora', a: 1, b: 1, aText: '30 min', bText: '30 min' }, { label: 'Ferramenta de um fim de semana', a: 16, b: 8, aText: '2 dias', bText: '1 dia' }, { label: 'Produto com nuance', a: 200, b: 120, aText: 'meses', bText: 'ainda meses' }] }), 'Observe a primeira linha: o tempo de copiar é igual ao de construir. Só na última linha a cópia continua custando caro, porque o que dá trabalho é o acúmulo de decisões, não o código.'),
            c.tip({ title: 'Teste do "um pedido só"', text: 'Descreva seu produto em um parágrafo e peça a um agente de código para construí-lo. Se o resultado ficar 80% parecido em uma hora, seu diferencial não está no software. Ele precisa estar em outro lugar: dados, nicho, distribuição ou nuance.' }),
          ],
        },
        {
          emoji: '⚡', title: 'A nuance que faz parecer instantâneo é o fosso', sub: 'O que está por trás do simples',
          what: 'O verdadeiro valor está no trabalho invisível que faz um resultado parecer fácil e imediato para o usuário.',
          why: 'O usuário vê uma caixa de texto e um botão. O concorrente copia a caixa e o botão. O que ele não copia é o pipeline de decisões entre a entrada e a saída.',
          keys: 'Pipeline proprietário, nuance, design de ponta a ponta, experiência instantânea, cuidado.',
          body: (t) => [
            c.p('Há produtos que parecem simples demais: você cola algo, clica, e o resultado sai. Parece trivial. Mas tudo o que acontece nos bastidores para que pareça instantâneo é o valor real: <strong class="text-blue-400">a nuance, o cuidado e o desenho proprietário do caminho da entrada até a saída</strong>.'),
            c.figure(t, svg.stack(t, { label: 'O que o usuário vê é a camada de fora; o fosso está nas camadas de dentro', layers: [{ title: 'Interface simples', sub: 'o que o usuário e o concorrente veem' }, { title: 'Regras e casos especiais', sub: 'o que só aparece com uso real' }, { title: 'Pipeline proprietário', sub: 'ordem das etapas, prompts, validações' }, { title: 'Dados acumulados', sub: 'o que só você tem' }] }), 'Um concorrente copia a camada de fora em uma tarde. As de dentro só se constroem com tempo, uso real e erros corrigidos. É por isso que elas protegem.'),
            c.grid2(t, { okTitle: 'Onde a nuance costuma morar', ok: ['Tratamento de casos estranhos que só o uso revela.', 'Ordem e combinação das etapas do processamento.', 'Validações que evitam respostas erradas.', 'Velocidade conseguida com engenharia, não com sorte.'], badTitle: 'O que não é nuance', bad: ['Trocar a cor da interface.', 'Mudar o texto do prompt principal.', 'Acrescentar um recurso que qualquer um acrescenta.', 'Usar o modelo mais caro sem pensar.'] }),
            c.code(t, { objective: 'Pedir ao Claude Code que analise o seu projeto e aponte onde está (ou falta) nuance defensável.', code: `Analise este repositório como se você fosse um concorrente tentando copiar o produto.

Contexto: <o que o produto faz, em 2 frases>

1. Liste o que você conseguiria replicar em menos de um dia.
2. Liste o que exigiria semanas ou meses (regras, casos especiais, pipeline, dados).
3. Aponte 3 pontos onde o produto parece simples para o usuário mas depende de lógica não óbvia.
4. Sugira 3 melhorias que aumentariam essa nuance difícil de copiar, sem aumentar a complexidade para o usuário.

Responda em tabelas curtas. Não altere nenhum arquivo.`, verify: 'Se a lista 1 cobrir quase tudo e a lista 2 vier vazia, seu produto ainda não tem fosso técnico. Use a resposta 4 como pauta da próxima semana.' }),
            c.alert({ title: 'Nuance não é complexidade para o usuário', text: 'O objetivo é esconder o trabalho, não expô-lo. Se a nuance obriga o usuário a configurar vinte opções, ela virou atrito, e o atrito empurra o cliente para a alternativa mais simples.' }),
          ],
        },
      ],
      quiz: [
        { q: 'O que o "teste do plugin" avalia?', options: ['Se o produto roda em qualquer navegador', 'Se uma versão embutida num assistente que o cliente já paga poderia substituir você', 'Quantos plugins o produto suporta', 'Se o produto tem API pública'], answer: 1, why: 'Um recurso embutido elimina descoberta, confiança e cadastro. Se ele resolver 80% do problema, muita gente fica com ele.' },
        { q: 'No exemplo da empresa de música vendida por nove dígitos, o que foi comprado principalmente?', options: ['O software', 'A marca', 'Os dados difíceis de gerar', 'O número de usuários'], answer: 2, why: 'O comprador queria um conjunto de dados que não se conseguia comprar em nenhum outro lugar.' },
        { q: 'Por que "fácil demais de construir" é um alerta?', options: ['Porque produtos fáceis são caros', 'Porque o que você faz em meia hora outro também faz em meia hora', 'Porque investidores não gostam', 'Porque o modelo erra mais'], answer: 1, why: 'A facilidade de construir é igual à facilidade de copiar. A proteção está na nuance que exige tempo e uso real.' },
      ],
      summary: [
        ['Gigantes', 'Pergunte se eles poderiam e se teriam credibilidade para te substituir.'],
        ['Teste do plugin', 'Um recurso embutido 80% bom é o risco mais concreto.'],
        ['Jogar um osso', 'Grandes costumam deixar o micro problema sem solução completa.'],
        ['Dados', 'O subproduto pode valer mais que o produto; desenhe-o desde o início.'],
        ['Dificuldade', 'Fácil de fazer é fácil de copiar.'],
        ['Nuance', 'O trabalho invisível que faz parecer instantâneo é o fosso.'],
      ],
    },

    // ================= 2.3 =================
    {
      id: '2-3', emoji: '🏒', title: 'Uso, recorrência e hábito', punch: 'Patine para onde o disco vai', minutes: 45, level: 'Intermediário', kind: 'Estratégia',
      lead: 'Um produto só vale se as pessoas continuam usando. Este módulo trata de antecipar o mercado, escolher onde a janela fica aberta por mais tempo e entrar na rotina do cliente.',
      topics: [
        {
          emoji: '🎯', title: 'Patinar para onde o disco vai', sub: 'Antecipar em vez de perseguir',
          what: 'A analogia do hóquei: não patine para onde o disco está, e sim para onde ele vai estar. No produto, isso significa construir para o mercado de daqui a alguns meses.',
          why: 'Quem constrói para o estado atual chega quando a oportunidade já passou. A velocidade de mudança da IA encurta muito essa janela.',
          keys: 'Antecipação, canibalização, janela de oportunidade, extrapolar tendências.',
          body: (t) => [
            c.p('No hóquei, um jogador bom não corre atrás do disco. Ele observa quem está com o disco e antecipa <strong class="text-blue-400">onde ele vai estar</strong>, para chegar lá primeiro e, com sorte, marcar o gol. Produto funciona igual.'),
            c.figure(t, svg.flow(t, { label: 'Perseguir o mercado atual versus antecipar o próximo: quem antecipa chega quando a demanda aparece', steps: [{ title: 'Hoje', sub: 'o disco está aqui' }, { title: 'Sinais', sub: 'tendências|e dores novas' }, { title: 'Projeção', sub: 'onde estará|em 3-6 meses' }, { title: 'Construir', sub: 'para lá' }, { title: 'Chegar junto', sub: 'com a demanda' }] }), 'O erro comum é construir na primeira caixa. O movimento certo é ler os sinais, projetar e construir para a penúltima, chegando junto com a demanda.'),
            c.p('A pergunta prática: se o setor caminha para um ponto em que a sua ideia pode ser engolida, <strong class="text-blue-400">o seu cliente vai perceber isso</strong>? E quando?'),
            c.grid2(t, { okTitle: 'Quem patina para onde o disco vai', ok: ['Lê sinais: dores novas, custos que caem, hábitos que mudam.', 'Pergunta o que ficará fácil em 3-6 meses e o que continuará difícil.', 'Constrói a parte que não vira commodity.', 'Chega quando o cliente começa a procurar.'], badTitle: 'Quem persegue o disco', bad: ['Copia o que já está fazendo sucesso hoje.', 'Constrói em cima de uma limitação que o próximo modelo resolve.', 'Chega quando o mercado já está lotado.', 'Compete só por preço.'] }),
            c.tip({ title: 'Um hábito simples', text: 'Toda semana, anote três coisas que ficaram mais fáceis com IA. Em um mês você terá uma lista do que está prestes a virar commodity, e do que ainda não virou.' }),
          ],
        },
        {
          emoji: '🙈', title: 'Arbitragem da ingenuidade', sub: 'O cliente ainda não sabe que poderia fazer sozinho',
          what: 'A janela de tempo em que seu público ainda não descobriu que poderia construir sozinho, com IA, aquilo que você vende.',
          why: 'Mesmo que a solução seja replicável, muitos clientes só vão perceber isso em 6 a 12 meses. Esse tempo é oportunidade, desde que você tenha um plano para depois.',
          keys: 'Arbitragem, ingenuidade do mercado, 6-12 meses, escalar, vender ou pivotar.',
          body: (t) => [
            c.glossary(t, [['Arbitragem', 'Ganhar com uma diferença temporária entre dois lugares ou momentos. Aqui, a diferença é entre o que já é possível e o que o cliente sabe que é possível.'], ['Ingenuidade do mercado', 'O desconhecimento do público sobre o que a IA já faz. Não é defeito do cliente: ninguém consegue acompanhar tudo.'], ['Pivotar', 'Mudar a direção do produto aproveitando o que já foi construído (clientes, dados, marca).']]),
            c.p('Muitos públicos só vão descobrir que dá para "vibe-codar" determinada solução daqui a seis ou doze meses. Enquanto isso não acontece, existe uma <strong class="text-blue-400">arbitragem da ingenuidade</strong>: você vende algo que, tecnicamente, eles conseguiriam fazer, mas não sabem disso.'),
            c.figure(t, svg.curve(t, { label: 'A janela da arbitragem: o que já é possível sobe rápido; o que o cliente sabe que é possível sobe devagar; o espaço entre as duas curvas é a oportunidade', yLabel: 'percepção de possibilidade', xLabels: ['mês 0', 'mês 3', 'mês 6', 'mês 12'], series: [{ name: 'possível', values: [40, 70, 85, 95], texts: ['40', '70', '85', '95'] }, { name: 'cliente sabe', values: [10, 18, 35, 80], texts: ['10', '18', '35', '80'] }] }), 'A distância vertical entre as linhas é a sua janela. Ela é grande nos primeiros meses e se fecha perto do mês 12. Até lá, você precisa ter escalado, vendido ou mudado de direção.'),
            c.steps(t, { title: 'O plano para quando a janela fechar', items: [{ h: 'Escalar', text: 'Crescer o bastante para que marca, dados e distribuição protejam você quando a ingenuidade acabar.' }, { h: 'Vender', text: 'Negociar o negócio (ou os dados) enquanto ele ainda vale muito.' }, { h: 'Pivotar', text: 'Usar clientes e aprendizados para atacar o próximo problema que ainda não virou commodity.' }] }),
            c.alert({ title: 'Arbitragem não é enganar', text: 'O cliente paga pela conveniência, pela confiança e pelo tempo economizado, e isso é legítimo. Esconder informação ou exagerar a dificuldade para prendê-lo não é.' }),
          ],
        },
        {
          emoji: '🛢️', title: 'Indústrias atrasadas são janelas longas', sub: 'Quem mexe com o mundo físico não tem tempo para o digital',
          what: 'Vender para setores tradicionais, que geram muito dinheiro fazendo uma coisa bem e não acompanham as novidades de IA.',
          why: 'Nesses setores, a arbitragem da ingenuidade dura muito mais. Mesmo com modelos muito mais fortes, eles ainda estarão descobrindo o básico.',
          keys: 'Indústria atrasada, óleo e gás, metais, mundo físico, ciclo lento de adoção.',
          body: (t) => [
            c.p('Imagine setores como <strong class="text-blue-400">óleo e gás, metais preciosos, mineração, agronegócio tradicional</strong>. Mesmo que amanhã saísse um modelo dez vezes melhor, muitos deles estariam só descobrindo que dá para conectar o assistente de IA ao e-mail.'),
            c.p('Essas empresas faturam muito fazendo uma coisa bem feita no mundo físico. Estão preocupadas com processos metalúrgicos, logística e segurança do trabalho, não com qual modelo foi lançado esta semana. Se nem quem vive de tecnologia consegue acompanhar tudo, imagine quem vive de outra coisa.'),
            c.figure(t, svg.split(t, { label: 'Setores de tecnologia versus setores tradicionais: velocidade de adoção de IA e duração da janela de oportunidade', bridge: 'janela', left: { title: 'SETOR DIGITAL', items: ['Testa tudo na semana', 'Constrói sozinho', 'Janela de meses', 'Muita concorrência', 'Preço cai rápido'] }, right: { title: 'SETOR TRADICIONAL', items: ['Adota devagar', 'Prefere comprar pronto', 'Janela de anos', 'Pouca concorrência', 'Paga por confiança'] } }), 'Leia a linha "Janela": meses de um lado, anos do outro. O mesmo produto pode ter vida curta vendendo para desenvolvedores e vida longa vendendo para uma siderúrgica.'),
            c.grid2(t, { okTitle: 'Por que vale mirar setores lentos', ok: ['Têm dinheiro e processos caros de sobra.', 'Não vão construir sozinhos.', 'Valorizam relacionamento e suporte.', 'Concorrência de startups é menor.'], badTitle: 'O que eles vão exigir', bad: ['Ciclos de venda mais longos.', 'Linguagem do setor, não de tecnologia.', 'Segurança, conformidade e contratos.', 'Paciência para implantação.'] }),
            c.tip({ title: 'Traduza, não impressione', text: 'Nesses setores ninguém quer ouvir "agente com modelo de fronteira". Quer ouvir "o relatório que levava dois dias agora sai em vinte minutos, com o mesmo formato de sempre".' }),
          ],
        },
        {
          emoji: '🐭', title: 'Gato e rato versus saturação', sub: 'Problemas que se renovam contra problemas que se esgotam',
          what: 'Distinguir problemas que nunca ficam totalmente resolvidos (e sustentam assinatura) de problemas que podem ser resolvidos bem o bastante e ficam saturados.',
          why: 'A recorrência e o tempo de vida do cliente dependem disso. Problema saturado vira grátis; problema que se renova sustenta cobrança.',
          keys: 'Recorrência, valor do cliente ao longo do tempo, saturação, código aberto, "por que eu pagaria?".',
          body: (t) => [
            c.p('Pense nas bibliotecas de componentes de interface para desenvolvedores. A maior parte do conteúdo é grátis: você copia um prompt ou um trecho de código e pronto. Existem centenas de alternativas, muitas de código aberto. <strong class="text-blue-400">Por que alguém pagaria?</strong> É difícil ganhar dinheiro num problema que foi resolvido bem o bastante e se multiplicou.'),
            c.figure(t, svg.curve(t, { label: 'Disposição do cliente a pagar ao longo do tempo: em problemas de gato e rato ela se mantém; em problemas saturados ela cai para zero', yLabel: 'disposição a pagar', xLabels: ['lançamento', '6 meses', '1 ano', '2 anos'], series: [{ name: 'gato e rato', values: [70, 72, 75, 78], texts: ['alta', 'alta', 'alta', 'alta'] }, { name: 'saturado', values: [70, 40, 15, 3], texts: ['alta', 'média', 'baixa', 'grátis'] }] }), 'As duas linhas começam iguais. A diferença aparece depois: o problema que se renova mantém o cliente pagando; o que se esgota vira commodity e cai a zero.'),
            c.table(t, { headers: ['Pergunta', 'Resposta que sustenta recorrência'], rows: [['O problema volta a aparecer?', 'Sim, toda semana ou a cada mudança do ambiente'], ['A solução precisa de atualização contínua?', 'Sim, o mundo muda e a solução acompanha'], ['Existem alternativas gratuitas equivalentes?', 'Não, ou são muito inferiores'], ['O cliente perde algo se cancelar?', 'Sim: histórico, proteção, dados, rotina']], caption: 'Quatro perguntas para testar se o problema sustenta uma assinatura.' }),
            c.p('Por isso a pergunta mais útil é: <strong class="text-blue-400">qual incômodo vale a pena resolver que a maioria das pessoas não vai resolver sozinha?</strong> Não o sexy, e sim o chato que continua voltando.'),
          ],
        },
        {
          emoji: '🔄', title: 'Viver no fluxo diário e gerar progresso passivo', sub: 'Estar lá sem que o usuário precise lembrar de você',
          what: 'Fazer o produto entrar na rotina do cliente, trabalhando em segundo plano e entregando avanços que ele não conseguiria sozinho.',
          why: 'O fator que mais segura um cliente é estar no fluxo de trabalho dele. Produtos que dependem de o usuário lembrar de abri-los são esquecidos.',
          keys: 'Fluxo diário, segundo plano, proativo, simbiose com automação, progresso passivo, dados que o usuário já tem.',
          body: (t) => [
            c.p('É muito difícil fazer um produto que fica em segundo plano e que o usuário <strong class="text-blue-400">quer</strong> que esteja lá. Dois exemplos do mundo de desenvolvimento mostram o caminho.'),
            c.cards(t, [{ emoji: '🚨', h: 'Monitor de erros (ex.: Sentry)', text: 'Fica vigiando a aplicação e avisa quando um erro aparece para os usuários. O desenvolvedor não precisa lembrar de abrir nada: o alerta chega até ele.' }, { emoji: '🐇', h: 'Revisor de código (ex.: CodeRabbit)', text: 'Analisou uma quantidade enorme de alterações de código e aprendeu padrões de erro. Depois que o agente escreve o código, ele avisa: "isso vai quebrar em produção, mande corrigir".' }], 2),
            c.p('Repare no segundo exemplo: ele vive em <strong class="text-blue-400">simbiose</strong> com as ferramentas que estão automatizando o próprio desenvolvimento. Muita gente já nem olha o código que o agente escreve, "fecha os olhos e reza". O produto torna essa reza mais segura. Ele não compete com a automação, ele se apoia nela.'),
            c.figure(t, svg.flow(t, { label: 'Progresso passivo: o produto usa dados que o usuário já tem, trabalha sozinho e entrega uma recomendação justificada', steps: [{ title: 'Conectar', sub: 'um clique,|provedor seguro' }, { title: 'Observar', sub: 'dados que|já existem' }, { title: 'Analisar', sub: 'todo dia,|sozinho' }, { title: 'Recomendar', sub: 'com|justificativa' }, { title: 'Decidir', sub: 'o usuário|escolhe' }] }), 'Nenhuma etapa exige esforço do usuário além do primeiro clique e da decisão final. É isso que torna o progresso "passivo": ele acontece mesmo quando a pessoa não está pensando no produto.'),
            c.concept(t, { title: 'Exemplo: extrato vira tese de investimento', emoji: '💳', paras: ['Imagine um app em que você conecta a conta bancária por um provedor com certificações de segurança. Todo dia ele olha os gastos e sugere investimentos coerentes com o que você consome, com a justificativa.', 'Se você paga quase tudo no cartão de crédito, e percebe que todo mundo faz o mesmo, faz sentido considerar empresas de pagamento. O app não investe por você: entrega uma lista e o porquê, usando dados que você já tinha e não aproveitava. O que compramos reflete o que valorizamos, e isso costuma se parecer com o que pessoas parecidas valorizam.'] }),
            c.alert({ title: 'Recomendação financeira exige cuidado', text: 'O exemplo é ilustrativo. Um produto real nessa área precisa respeitar a regulação local (no Brasil, CVM e Banco Central) e deixar claro que não é aconselhamento individual.' }),
          ],
        },
        {
          emoji: '🧸', title: 'Sensação boa e virar verbo', sub: 'Tranquilidade como produto e a palavra que entra no vocabulário',
          what: 'Dois sinais extras de recorrência: o produto gera uma sensação agradável (alívio, segurança) e tem potencial de virar um verbo do dia a dia.',
          why: 'Sensação boa faz o usuário voltar por vontade própria. Virar verbo é raro, mas quando acontece, o marketing passa a ser feito pelo idioma.',
          keys: 'Sensação de segurança, alívio, antivírus, demanda fabricada (alerta ético), marca-verbo.',
          body: (t) => [
            c.p('Lembra da época em que rodar o antivírus era um ritual? A barrinha andava, aparecia "nenhuma ameaça encontrada" e você sentia alívio. Esse <strong class="text-blue-400">calorzinho de segurança</strong> é parte do produto. Um tema chato como segurança pode entregar uma sensação muito boa.'),
            c.alert({ title: 'O lado sombrio: demanda fabricada', text: 'Há relatos antigos de fornecedores que ajudavam a criar o problema para vender a solução. Isso não é estratégia, é fraude. A lição legítima é outra: identificar um medo real e entregar tranquilidade real.' }),
            c.p('O último sinal é o mais raro: <strong class="text-blue-400">o produto pode virar um verbo?</strong> "Dá um Google", "pede um Uber", "manda no Slack". Nove em cada dez produtos nunca chegam lá, e tudo bem. Mas vale perguntar se o nome e a ação principal são simples o bastante para entrar na fala.'),
            c.figure(t, svg.chips(t, { title: 'Sinais de recorrência: quantos o seu produto tem?', label: 'Checklist visual dos sinais de uso recorrente estudados neste módulo', cols: 4, items: ['Gato e rato', 'Janela longa', 'Setor lento', 'Fluxo diário', 'Segundo plano', 'Progresso passivo', 'Sensação boa', 'Vira verbo'] }), 'Conte quantas caixas se aplicam à sua ideia. Menos de três é sinal de uso esporádico; cinco ou mais indica um produto com chance real de entrar na rotina.'),
            c.code(t, { objective: 'Avaliar a recorrência da sua ideia com os sinais deste módulo e receber sugestões concretas para aumentá-la.', code: `Avalie a recorrência do meu produto.

Produto: <o que faz, em 2 frases>
Público: <quem usa, setor, nível técnico>
Frequência atual de uso esperada: <diária / semanal / mensal / esporádica>

Para cada sinal abaixo, diga "sim", "parcial" ou "não" e justifique em 1 frase:
1. Problema de gato e rato (se renova sozinho)
2. Arbitragem da ingenuidade (quantos meses até o cliente saber fazer sozinho?)
3. Setor atrasado (janela longa)
4. Vive no fluxo diário / em segundo plano
5. Gera progresso passivo com dados que o usuário já tem
6. Entrega uma sensação boa (alívio, segurança)
7. Potencial de virar verbo

Depois proponha 3 mudanças concretas que aumentariam a frequência de uso sem aumentar o atrito.`, verify: 'Você deve receber 7 avaliações e 3 mudanças. Se as mudanças forem genéricas ("melhore o marketing"), peça: "dê mudanças de produto, com a tela ou o gatilho exato".' }),
            c.tip({ title: 'Combine os sinais', text: 'Os produtos mais fortes somam vários sinais: um monitor de segurança para apps feitos com IA é gato e rato, vive em segundo plano, gera alívio e ainda acumula dados. Cada sinal reforça o outro.' }),
          ],
        },
      ],
      quiz: [
        { q: 'O que é a "arbitragem da ingenuidade"?', options: ['Cobrar mais de clientes leigos', 'A janela em que o cliente ainda não sabe que poderia construir a solução sozinho', 'Copiar produtos de outros mercados', 'Vender para quem não entende de preço'], answer: 1, why: 'É a diferença temporária entre o que já é possível e o que o cliente sabe que é possível. Exige plano para quando a janela fechar.' },
        { q: 'Por que setores como óleo e gás oferecem janelas longas?', options: ['Porque têm pouco dinheiro', 'Porque adotam tecnologia devagar e preferem comprar pronto', 'Porque não usam computadores', 'Porque não têm concorrência'], answer: 1, why: 'Focados no mundo físico, eles não acompanham a IA e não vão construir sozinhos tão cedo.' },
        { q: 'O que torna um revisor de código automático um bom exemplo de produto recorrente?', options: ['É barato', 'Vive em simbiose com os agentes que automatizam o desenvolvimento e atua em segundo plano', 'Tem interface bonita', 'Substitui os agentes de código'], answer: 1, why: 'Ele se apoia na automação em vez de competir com ela e entra no fluxo diário sem esforço do usuário.' },
      ],
      summary: [
        ['Antecipar', 'Construa para onde o mercado vai estar, não para onde está.'],
        ['Arbitragem da ingenuidade', 'Aproveite a janela, com plano de escalar, vender ou pivotar.'],
        ['Setores lentos', 'Janelas de anos para quem fala a língua deles.'],
        ['Gato e rato', 'Problemas que se renovam sustentam assinatura; os saturados viram grátis.'],
        ['Fluxo diário', 'Segundo plano, simbiose com a automação e progresso passivo.'],
        ['Sensação e verbo', 'Alívio real faz voltar; virar verbo é raro, mas vale perseguir.'],
      ],
    },
  ],
};
