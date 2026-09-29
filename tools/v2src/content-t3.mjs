// Trilha 3 — Lançar e crescer (purple)
import { c, svg } from './lib.mjs';

export const T3 = {
  modules: [
    // ================= 3-1 =================
    {
      id: '3-1', emoji: '📣', title: 'Distribuição', punch: 'Sem audiência não há pulso', minutes: 45, level: 'Intermediário', kind: 'Estratégia',
      lead: 'Construir ficou fácil. Fazer alguém saber que o seu produto existe continua difícil. Este módulo trata do problema que derruba a maioria dos projetos: como gerar os primeiros sinais de vida sem orçamento de mídia.',
      topics: [
        {
          emoji: '💓', title: 'A distribuição morde todo mundo', sub: 'O produto pronto que ninguém viu',
          what: 'Distribuição é o conjunto de caminhos pelos quais pessoas certas descobrem, testam e voltam ao seu produto.',
          why: 'Quando qualquer um constrói em dias, a vantagem deixa de ser o código e passa a ser quem chega primeiro aos olhos certos.',
          keys: 'Batimento cardíaco, audiência, canal, superfície para a sorte, primeiros sinais.',
          body: (t) => [
            c.p('Existe um padrão que se repete em quase todo projeto novo: a pessoa passa semanas no produto, publica, e o silêncio é total. Nenhum cadastro, nenhum comentário, nenhuma reclamação. Não porque o produto seja ruim, mas porque <strong class="text-purple-400">ninguém sabe que ele existe</strong>. O primeiro trabalho depois de construir é gerar um batimento cardíaco: qualquer sinal de que alguém, fora do seu círculo, se importa.'),
            c.concept(t, { title: 'Por que isso piorou, e não melhorou', emoji: '📈', paras: [
              'Quando construir exigia uma equipe e meses de trabalho, havia poucos concorrentes chegando ao mesmo tempo. Hoje, com agentes de código, dezenas de produtos parecidos aparecem na mesma semana. O resultado é uma inflação de lançamentos: o público vê "novidade" o dia inteiro e passa a ignorar quase tudo.',
              'Nesse cenário, distribuição não é a etapa final do plano. Ela precisa ser pensada junto com a ideia. A pergunta "como as primeiras cem pessoas vão descobrir isso?" deve ter resposta antes da primeira linha de código.',
            ] }),
            c.figure(t, svg.split(t, { label: 'Comparação entre o que era escasso antes e o que é escasso agora na criação de produtos', bridge: 'o gargalo mudou', left: { title: 'ANTES', items: ['Construir era caro', 'Poucos concorrentes', 'Lançamento chamava atenção', 'Distribuição vinha depois'] }, right: { title: 'AGORA', items: ['Construir é barato', 'Dezenas de clones por semana', '"Novidade" virou ruído', 'Distribuição vem junto da ideia'] } }), 'O custo de construir caiu; o custo de ser notado subiu. Quem planeja só o produto está investindo na parte que ficou barata.'),
            c.grid2(t, { okTitle: 'Sinais de que existe pulso', ok: ['Estranhos se cadastram sem você pedir.', 'Alguém volta no dia seguinte.', 'Chegam dúvidas e reclamações (é bom sinal).', 'Uma pessoa indica para outra.'], badTitle: 'Sinais de que ainda não existe', bad: ['Só amigos e família testaram.', 'Os acessos vêm todos do seu próprio post.', 'Ninguém reclama de nada.', 'Os números sobem só no dia do lançamento.'] }),
            c.tip({ title: 'Pergunta de bolso', text: 'Antes de começar qualquer produto, escreva numa frase: "As primeiras 100 pessoas vão me encontrar por meio de ____". Se o espaço ficar em branco, você ainda não tem um plano, tem só uma ideia.' }),
          ],
        },
        {
          emoji: '🧵', title: 'Reddit e comunidades', sub: 'Ajudar primeiro, mencionar de passagem',
          what: 'Participar de fóruns e grupos onde o seu público já conversa, construindo reputação antes de falar do produto.',
          why: 'É um canal gratuito, sem necessidade de seguidores, e muitos negócios de serviço já fecharam contratos a partir de uma boa resposta num fórum.',
          keys: 'Karma, autopromoção, prova social, longo prazo, menção natural.',
          body: (t) => [
            c.p('Comunidades como o Reddit têm uma métrica chamada <strong class="text-purple-400">karma</strong>: pontos que você acumula quando outras pessoas aprovam suas respostas. Contas com karma alto aparecem com mais destaque e são menos filtradas como spam. Ou seja, a reputação é literalmente o que abre o canal.'),
            c.glossary(t, [
              ['Karma', 'Pontuação acumulada pelos votos positivos nas suas contribuições. Funciona como crédito de confiança.'],
              ['Autopromoção', 'Postar só para divulgar o próprio produto. Quase toda comunidade pune ou remove.'],
              ['Menção natural', 'Citar a ferramenta que você usa, de passagem, dentro de uma resposta que já resolve o problema da pessoa.'],
              ['Subcomunidade', 'Fórum temático (no Reddit, um "subreddit") onde se concentra um público específico.'],
            ]),
            c.steps(t, { title: 'O caminho em quatro passos', items: [
              { h: 'Mapeie onde o seu público pergunta', text: 'Liste 5 a 10 fóruns, grupos ou subcomunidades onde aparecem as dores que o seu produto resolve. Leia antes de escrever.' },
              { h: 'Responda sem vender', text: 'Durante semanas, resolva problemas de verdade. Respostas completas, com passo a passo. É isso que gera karma e memória.' },
              { h: 'Mencione de passagem', text: 'Quando a pergunta for exatamente o que o produto resolve, termine a resposta com algo como "eu uso X para isso". Uma frase, não um anúncio.' },
              { h: 'Meça e repita', text: 'Use um link com parâmetro de origem para saber quais respostas trouxeram gente. Dobre a aposta nos fóruns que funcionam.' },
            ] }),
            c.figure(t, svg.flow(t, { label: 'Ciclo de reputação em comunidades: ajudar gera karma, karma gera visibilidade, visibilidade gera tráfego', steps: [
              { title: 'Ajudar', sub: 'respostas|completas' }, { title: 'Karma', sub: 'votos e|reputação' }, { title: 'Visibilidade', sub: 'mais gente|lê você' }, { title: 'Menção', sub: 'de passagem|no contexto' }, { title: 'Tráfego', sub: 'visitas|qualificadas' },
            ] }), 'A menção ao produto é o quarto passo, não o primeiro. Quem pula direto para ela é tratado como spam e perde o canal.'),
            c.grid2(t, { okTitle: 'Funciona', ok: ['Responder a dúvida inteira, mesmo sem citar o produto.', 'Mostrar um resultado concreto ("fiz assim, deu isso").', 'Voltar para responder perguntas nos comentários.'], badTitle: 'Queima o canal', bad: ['Colar o mesmo link em dez tópicos.', 'Criar conta nova só para divulgar.', 'Responder com "dá uma olhada no meu app".'] }),
            c.alert({ title: 'Horizonte de tempo', text: 'Esse canal é de médio a longo prazo. Semanas para ganhar reputação, meses para virar fonte constante. Não espere resultado na primeira semana, e não desista na segunda.' }),
          ],
        },
        {
          emoji: '🎯', title: 'Guerrilha e apostas pequenas', sub: 'Sair da caixa gastando pouco',
          what: 'Ações criativas e baratas que aproveitam atenção que já existe no mercado para trazer gente até o seu produto.',
          why: 'Com orçamento pequeno, você não compete em anúncio. Compete em criatividade e velocidade.',
          keys: 'Marketing de guerrilha, aposta assimétrica, cavalo de Troia, janela de atenção, repetição.',
          body: (t) => [
            c.p('Marketing de guerrilha é o nome para ações fora do roteiro tradicional: em vez de pagar por atenção, você se posiciona onde a atenção já está. O princípio é a <strong class="text-purple-400">aposta assimétrica</strong>: custa pouco se der errado e pode render muito se der certo.'),
            c.concept(t, { title: 'Exemplo: o domínio de 22 dólares', emoji: '🐴', paras: [
              'Um empreendedor previu o nome de um produto que seria lançado no dia seguinte por uma empresa grande. Comprou um domínio com esse nome por cerca de US$ 22, construiu em três horas, com um agente de código, um pequeno catálogo de assistentes para aquela plataforma, e passou mais doze horas polindo.',
              'Se a previsão estivesse certa, o site receberia parte do tráfego de curiosos procurando pelo produto novo. E dentro dele, discretamente, havia um destaque para o SaaS principal do empreendedor. É um "cavalo de Troia" de tráfego: aproveitar a onda de outro para levar gente até você.',
            ] }),
            c.figure(t, svg.scale(t, { label: 'Aposta assimétrica: pouco custo de um lado, grande potencial do outro', tilt: 0.6, left: { title: 'CUSTO', lines: ['US$ 22 de domínio', '3 h de construção', '12 h de polimento'] }, right: { title: 'POTENCIAL', lines: ['Tráfego de um lançamento', 'Visibilidade grátis', 'Usuários para o SaaS'] } }), 'Uma boa aposta de guerrilha tem o prato do custo leve e o do potencial pesado. Se o custo fica pesado, deixou de ser guerrilha.'),
            c.table(t, { headers: ['Tática', 'Custo', 'Quando usar'], rows: [
              ['Surfar um lançamento previsto', 'Baixo', 'Você conhece bem o mercado e antecipa o que vai acontecer.'],
              ['Responder a uma thread em alta', 'Zero', 'Uma discussão viral toca exatamente no problema que você resolve.'],
              ['Ferramenta grátis de isca', 'Baixo', 'Uma utilidade pequena, ligada ao produto, que as pessoas compartilham.'],
              ['Ligação e e-mail frio', 'Tempo', 'Venda de ticket alto; funciona, mas pede muita repetição.'],
            ], caption: 'Táticas de guerrilha mais comuns, do mais barato ao mais trabalhoso' }),
            c.grid2(t, { okTitle: 'Boas apostas', ok: ['Custo que você aceita perder sem dor.', 'Ligadas ao seu público real.', 'Rápidas de montar e de medir.'], badTitle: 'Apostas ruins', bad: ['Enganar o usuário sobre o que ele está acessando.', 'Usar marca alheia de forma que gere confusão jurídica.', 'Gastar semanas numa ação que depende só de sorte.'] }),
            c.tip({ title: 'Pense fora da caixa, mas meça', text: 'Ligação fria e e-mail frio funcionam; existem agências inteiras que vivem disso. Mas num mundo em que tudo é sobre ser o primeiro diante dos olhos, as janelas curtas de atenção costumam render mais por real investido. Faça várias apostas pequenas e registre qual trouxe gente.' }),
          ],
        },
        {
          emoji: '🤝', title: 'Afiliado de dois lados', sub: 'Comissão para quem indica, crédito para quem usa',
          what: 'Programa de indicação em que quem compartilha ganha dinheiro recorrente e também créditos de uso no próprio produto.',
          why: 'Transforma seus usuários em canal de distribuição, com incentivo para continuarem indicando.',
          keys: 'Afiliado, comissão recorrente, créditos, receita recorrente mensal, incentivo duplo.',
          body: (t) => [
            c.p('Um programa de afiliados comum paga uma comissão a quem traz um cliente. O modelo de <strong class="text-purple-400">dois lados</strong> vai além: quem indica ganha comissão e também créditos, desconto ou meses grátis no próprio produto. O incentivo deixa de ser só dinheiro e passa a ser "usar de graça".'),
            c.glossary(t, [
              ['Afiliado', 'Pessoa que divulga o produto com um link próprio e recebe por cada cliente que trouxer.'],
              ['Comissão recorrente', 'Porcentagem paga todo mês enquanto o cliente indicado continuar pagando, não só na primeira venda.'],
              ['MRR', 'Sigla em inglês para receita recorrente mensal: quanto o produto fatura por mês em assinaturas.'],
              ['Crédito de uso', 'Saldo dentro do produto (minutos, gerações, consultas) que o usuário gasta em vez de pagar.'],
            ]),
            c.figure(t, svg.fanout(t, { label: 'Um usuário que indica gera dois tipos de retorno para si e um novo cliente para o produto', center: 'Quem|indica', groups: [
              { n: 30, title: 'Comissão recorrente (%)', sub: '20% a 50% da mensalidade enquanto o indicado pagar' },
              { n: 1, title: 'Créditos de uso', sub: 'minutos, gerações ou meses grátis no próprio produto' },
              { n: 1, title: 'Novo cliente para o produto', sub: 'que também recebe um bônus ao entrar' },
            ] }), 'Os três ramos saem da mesma ação: compartilhar um link. Quanto mais ramos um incentivo alimenta, mais gente continua compartilhando.'),
            c.concept(t, { title: 'Exemplo de como isso se sustenta', emoji: '🎧', paras: [
              'Um usuário de uma ferramenta de ditado por voz indicou o produto para o seu público. Com as indicações acumuladas, ganhou créditos suficientes para não pagar a assinatura até 2027. Ele já nem usa tanto a ferramenta, mas continua indicando, porque cada nova indicação mantém a conta grátis.',
              'Do lado da empresa, o custo desses créditos é pequeno perto do valor dos clientes que chegam. Do lado de quem indica, existe um motivo concreto para seguir falando do produto.',
            ] }),
            c.data({ title: 'Faça a conta antes de definir a porcentagem', items: [
              'Se a mensalidade é R$ 50 e você paga 40% recorrente, cada indicado custa R$ 20 por mês enquanto ficar.',
              'Se o custo de servir esse cliente é R$ 10, sobram R$ 20 de margem. Ainda é lucrativo.',
              'Créditos de uso custam o que custa entregar o serviço, não o preço de tabela. Por isso são um incentivo barato.',
            ] }),
            c.grid2(t, { okTitle: 'Programa que funciona', ok: ['Link fácil de achar dentro do produto.', 'Painel mostrando quanto a pessoa já ganhou.', 'Bônus também para quem chega pelo link.'], badTitle: 'Programa que ninguém usa', bad: ['Cadastro separado e burocrático.', 'Pagamento só acima de um valor alto.', 'Comissão só na primeira venda.'] }),
            c.tip({ text: 'Coloque o convite no momento em que o usuário acabou de ter um resultado bom ("seu relatório está pronto"). É quando ele está mais disposto a mostrar para alguém.' }),
          ],
        },
        {
          emoji: '🩸', title: 'Momentos de "sangue nas ruas"', sub: 'Aparecer quando a consciência geral está pronta',
          what: 'Aproveitar picos de atenção pública sobre o problema que você resolve para oferecer a solução com generosidade.',
          why: 'Muitos produtos pequenos crescem devagar e, de repente, dão um salto num momento em que todo mundo passa a se importar com o problema.',
          keys: 'Timing, pico de atenção, plano gratuito ampliado, boa vontade, curva em taco de hóquei.',
          body: (t) => [
            c.p('Existe uma frase clássica do mercado financeiro: <em>"compre quando houver sangue nas ruas"</em>. Quer dizer que as melhores oportunidades aparecem no pânico. Em produto, a versão é: <strong class="text-purple-400">apareça com força quando o problema que você resolve vira notícia</strong>.'),
            c.concept(t, { title: 'Exemplo: onda de ataques a apps', emoji: '🛡️', paras: [
              'Imagine um produto de segurança para aplicativos criados com IA. Um dia, vários apps são invadidos, um serviço de IA famoso sai do ar e o caso vira manchete. Por algumas semanas, todo mundo está preocupado com segurança.',
              'Nesse momento, o produto anuncia: "ampliamos o plano gratuito em 10 vezes; qualquer pessoa pode verificar o seu app agora, sem pagar nada". Resultado: boa vontade, novos usuários, mais dados (se dados forem valiosos para o produto) e uma lembrança positiva da marca.',
            ] }),
            c.figure(t, svg.curve(t, { label: 'Crescimento típico de um SaaS pequeno: meses devagar e um salto num pico de atenção', yLabel: 'receita mensal (relativa)', xLabels: ['nov', 'dez', 'jan', 'fev', 'mar', 'abr'], series: [
              { name: 'MRR', values: [4, 6, 7, 9, 55, 95], texts: ['600', '900', '1 mil', '1,3 mil', '8 mil', '15 mil'] },
            ] }), 'A curva fica quase plana por meses e dispara num momento curto. Esse momento quase sempre coincide com o público, por um instante, se importando com o problema.'),
            c.data({ title: 'O que acontece nesses picos', items: [
              'Pequenos SaaS que faturavam cerca de 600 por mês chegaram a 7, 15 ou 20 mil de receita mensal em poucos meses.',
              'O salto raramente vem de uma campanha paga. Vem de estar pronto quando a atenção chegou.',
              'Uma porta de entrada gratuita é o que transforma a curiosidade em uso.',
            ] }),
            c.steps(t, { title: 'Como se preparar antes do pico', items: [
              { h: 'Liste os eventos que tornam o seu problema urgente', text: 'Vazamentos, mudança de lei, queda de um serviço grande, lançamento de um concorrente. Escreva isso antes de acontecer.' },
              { h: 'Deixe a oferta pronta', text: 'Tenha um texto, uma página e uma configuração de plano ampliado que você liga em minutos.' },
              { h: 'Seja barulhento no dia', text: 'Publique, responda threads, mande para a sua lista. O pico dura dias, não meses.' },
            ] }),
            c.alert({ title: 'Oportunismo tem limite', text: 'Ajudar num momento de medo é diferente de explorar o medo. Ofereça algo que realmente resolve, com generosidade. Anúncio alarmista em cima de uma tragédia destrói a confiança que você queria ganhar.' }),
          ],
        },
        {
          emoji: '🎬', title: 'Aceleradoras e criadores de conteúdo', sub: 'Produtos que outras pessoas querem mostrar',
          what: 'Dois atalhos de distribuição: entrar numa aceleradora pelo mérito da ideia e ser um produto que criadores de conteúdo querem divulgar.',
          why: 'Quando o orgânico não engrena, uma aceleradora dá rede e dinheiro; e criadores estão sempre buscando novidades simples para mostrar.',
          keys: 'Aceleradora, tração inicial, vídeo curto, demonstração em 15 segundos, palavra-chave nos comentários.',
          body: (t) => [
            c.p('Se a tração orgânica não vem, existe uma pergunta de controle: <strong class="text-purple-400">o produto é bom o bastante para entrar numa aceleradora?</strong> Programas como o Y Combinator, ou aceleradoras da sua região, aceitam ideias com mérito e alguma tração inicial, mesmo que seja um punhado de usuários.'),
            c.concept(t, { title: 'Criadores de conteúdo são um canal', emoji: '📱', paras: [
              'Em redes de vídeo curto, os posts que mais funcionam mostram uma ferramenta, um repositório ou um recurso que pouca gente conhece. Os criadores vivem procurando essas novidades para levar ao público deles.',
              'O produto que eles escolhem tem uma característica: dá para demonstrar em segundos. "Cola o seu link aqui, clica aqui, olha o que acontece. Fiz isso de graça em 15 segundos. Comenta BANANA que eu te mando o acesso."',
            ] }),
            c.figure(t, svg.flow(t, { label: 'Roteiro de um vídeo curto que demonstra um produto', steps: [
              { title: 'Gancho', sub: '"olha isso"|0–3 s' }, { title: 'Entrada', sub: 'cola o link|3–7 s' }, { title: 'Clique', sub: 'um botão|7–10 s' }, { title: 'Resultado', sub: 'o "uau"|10–15 s' }, { title: 'Chamada', sub: 'comenta X|15–20 s' },
            ] }), 'Se o seu produto cabe nesses cinco quadros, um criador consegue mostrá-lo sem você pagar nada. Se não cabe, ele é complexo demais para esse canal.'),
            c.grid2(t, { okTitle: 'Produto fácil de mostrar', ok: ['Um único campo de entrada.', 'Resultado visual em segundos.', 'Qualquer pessoa entende sem explicação.'], badTitle: 'Produto difícil de mostrar', bad: ['Exige cadastro, configuração e integração antes do primeiro resultado.', 'O valor só aparece depois de semanas.', 'Precisa de um parágrafo para explicar o que faz.'] }),
            c.cards(t, [
              { emoji: '🚀', h: 'Aceleradora', text: 'Leve a ideia, a tração que tiver e a clareza do problema. Mérito da ideia conta mesmo com poucos usuários.' },
              { emoji: '🎥', h: 'Criador de conteúdo', text: 'Mande acesso grátis e um roteiro de 15 segundos pronto. Facilite o trabalho dele.' },
              { emoji: '🔁', h: 'Seus próprios vídeos', text: 'Redes de vídeo curto não exigem seguidores. Mesmo uma conta nova pode ter um vídeo com dezenas de milhares de visualizações.' },
            ]),
            c.tip({ title: 'Teste rápido', text: 'Grave você mesmo, com o celular, um vídeo de 20 segundos usando o produto. Mostre para alguém que não conhece o projeto. Se a pessoa entendeu o que ele faz, o produto está pronto para esse canal.' }),
          ],
        },
      ],
      quiz: [
        { q: 'Qual é o primeiro objetivo de distribuição logo depois de construir?', options: ['Rodar anúncios pagos em grande escala', 'Gerar um batimento cardíaco: sinais de que estranhos se importam', 'Esperar o produto ficar perfeito'], answer: 1, why: 'Antes de escalar, você precisa de evidência de que alguém fora do seu círculo se importa. Sem esse pulso, anúncio só acelera o desperdício.' },
        { q: 'Num fórum como o Reddit, quando mencionar o produto?', options: ['No primeiro post, com o link em destaque', 'Depois de construir reputação, de passagem, numa resposta que já resolve o problema', 'Nunca'], answer: 1, why: 'Karma e confiança vêm primeiro. A menção natural, dentro de uma resposta útil, é o que não soa como spam.' },
        { q: 'O que caracteriza um afiliado de dois lados?', options: ['Dois afiliados dividem a mesma comissão', 'Quem indica ganha comissão recorrente e créditos de uso', 'O cliente paga duas vezes'], answer: 1, why: 'O incentivo duplo (dinheiro + uso grátis) mantém a pessoa indicando, e os créditos custam pouco para a empresa.' },
      ],
      summary: [
        ['Distribuição vem junto da ideia', 'Construir ficou barato; ser notado ficou caro.'],
        ['Comunidades', 'Ajudar primeiro, ganhar reputação, mencionar de passagem.'],
        ['Guerrilha', 'Apostas pequenas e assimétricas que aproveitam atenção existente.'],
        ['Afiliado de dois lados', 'Comissão recorrente + créditos transformam usuários em canal.'],
        ['Sangue nas ruas', 'Ofertas generosas prontas para os picos de atenção.'],
        ['Mostrável em 15 segundos', 'O que cabe num vídeo curto vira canal de criadores e aceleradoras.'],
      ],
    },

    // ================= 3-2 =================
    {
      id: '3-2', emoji: '🗣️', title: 'Posicionamento e jornada', punch: 'Uma frase, dois minutos', minutes: 45, level: 'Intermediário', kind: 'Prático',
      lead: 'Se você não explica o produto em uma frase, ninguém vai explicar por você. E se o usuário não sente o valor em dois minutos, ele não volta. Este módulo junta as duas pontas: o que se diz e o que se vive.',
      topics: [
        {
          emoji: '🧷', title: 'Posicionamento em uma linha', sub: '"Antivírus para apps feitos com IA" × "o Uber de X"',
          what: 'A frase curta que diz o que o produto é, para quem é e por que importa, usando algo que o público já entende.',
          why: 'Uma frase clara gasta pouca energia de quem ouve. Quanto menos esforço para entender, mais gente entende.',
          keys: 'Posicionamento, analogia, categoria conhecida, frase de uma linha, clichê.',
          body: (t) => [
            c.p('Compare duas frases. A primeira: <em>"somos uma plataforma de segurança baseada em IA para desenvolvedores modernos"</em>. A segunda: <strong class="text-purple-400">"antivírus para apps feitos com IA"</strong>. A segunda é entendida em um segundo, porque usa uma categoria que todos conhecem (antivírus) aplicada a um problema novo (apps gerados por IA).'),
            c.figure(t, svg.split(t, { label: 'Comparação entre uma frase de posicionamento clara e uma frase genérica', bridge: 'um segundo × um parágrafo', left: { title: 'CLARA', items: ['"Antivírus para apps feitos com IA"', 'Categoria conhecida + problema novo', 'Entende sem explicação', 'Dá para repetir de memória'] }, right: { title: 'GENÉRICA', items: ['"O Uber de X"', 'Analogia gasta', '"Plataforma baseada em IA"', 'Ninguém consegue repetir'] } }), 'A frase boa empresta o significado de algo familiar. A ruim empresta um clichê que já perdeu o sentido de tanto ser usado.'),
            c.concept(t, { title: 'Por que "o Uber de X" parou de funcionar', emoji: '🚕', paras: [
              'Quando o Uber era novo, a analogia funcionava: as pessoas conheciam o conceito, mas ele ainda não tinha sido usado para tudo. Depois de milhares de "Uber de" alguma coisa, a expressão ficou vazia. Ela não diz mais nada sobre o seu produto.',
            ] }),
            c.table(t, { headers: ['Fórmula', 'Exemplo'], rows: [
              ['[Categoria conhecida] para [público/situação nova]', 'Antivírus para apps feitos com IA'],
              ['[Resultado] em [tempo] sem [dor]', 'Contrato revisado em 5 minutos sem advogado'],
              ['[Verbo] + [objeto] + [para quem]', 'Transforma reuniões em tarefas para times pequenos'],
            ], caption: 'Três fórmulas simples de posicionamento' }),
            c.grid2(t, { okTitle: 'Frase que funciona', ok: ['Cabe numa respiração.', 'Usa palavras que o cliente usa.', 'Mostra o problema resolvido.'], badTitle: 'Frase que não funciona', bad: ['"Revolucionário", "disruptivo", "baseado em IA".', 'Jargão técnico que só você entende.', 'Tenta dizer tudo o que o produto faz.'] }),
            c.tip({ title: 'Teste do bar', text: 'Diga a frase para alguém de fora da área. Se a pessoa responder "ah, entendi" e conseguir repetir para um terceiro, a frase está pronta. Se ela perguntar "mas o que faz exatamente?", volte ao rascunho.' }),
          ],
        },
        {
          emoji: '📱', title: 'Vídeo curto é pitch de elevador', sub: 'Se cabe em 30 segundos, você sabe vender',
          what: 'A ideia de que um produto que se explica bem num vídeo curto já tem, pronta, a estrutura de um pitch para clientes e investidores.',
          why: 'Formatos curtos obrigam a cortar o excesso. O que sobra é o núcleo do valor, que serve em qualquer conversa de venda.',
          keys: 'Pitch de elevador, vídeo curto, núcleo do valor, investidor, demonstração.',
          body: (t) => [
            c.p('O pitch de elevador é a explicação que você daria a alguém no tempo de uma viagem de elevador: 30 segundos ou menos. Se o seu produto funciona bem num vídeo curto, você já tem esse pitch. <strong class="text-purple-400">O vídeo curto é uma arquitetura de pitch</strong>: gancho, problema, demonstração, resultado.'),
            c.figure(t, svg.stack(t, { label: 'As camadas de um pitch curto, do que chama atenção até o que convence', layers: [
              { title: 'Gancho', sub: 'uma frase que para o dedo' },
              { title: 'Problema', sub: 'a dor que o público reconhece' },
              { title: 'Demonstração', sub: 'o produto funcionando na tela' },
              { title: 'Resultado', sub: 'o valor que ficou' },
            ] }), 'Cada camada serve à de dentro. O resultado no centro é o que convence; as outras só existem para a pessoa chegar até ele.'),
            c.grid2(t, { okTitle: 'O mesmo roteiro serve para', ok: ['Vídeo de 20 segundos nas redes.', 'Abertura de uma reunião de venda.', 'Primeira fala para um investidor.', 'Topo da sua página inicial.'], badTitle: 'Sinais de que o pitch não existe', bad: ['Você começa pela tecnologia usada.', 'Precisa de um slide de contexto antes.', 'A demonstração leva mais de um minuto para mostrar algo.'] }),
            c.code(t, { objective: 'Gerar 5 frases de posicionamento de uma linha e escolher a melhor com critérios explícitos. Cole no Claude Code ou no chat de IA que você usa.', code: `Você é um especialista em posicionamento de produtos digitais.

Meu produto: <descreva em 2-3 frases o que ele faz>
Público principal: <quem usa, com que profissão/situação>
A dor que resolve: <o problema, nas palavras do cliente>
O resultado que entrega: <o que a pessoa tem depois de usar>

Tarefa:
1. Escreva 5 frases de posicionamento de UMA linha (máximo 8 palavras cada).
   - Use pelo menos uma com a fórmula "[categoria conhecida] para [situação nova]".
   - Proibido: "revolucionário", "baseado em IA", "plataforma", "o Uber de".
2. Para cada frase, dê nota de 1 a 5 em: clareza para leigo, memorabilidade, diferenciação.
3. Escolha a melhor e explique em 2 frases por quê.
4. Diga qual pergunta um leigo ainda faria depois de ouvir a frase escolhida.`, verify: 'Você recebe 5 frases curtas com notas e uma escolhida. Leia a escolhida em voz alta para alguém de fora da área; se a pessoa repetir sem esforço, está pronta.' }),
            c.tip({ text: 'Guarde a frase vencedora num lugar visível. Ela vai reaparecer no título da página, na bio das redes, no começo de cada vídeo e no assunto dos e-mails.' }),
          ],
        },
        {
          emoji: '👆', title: 'Menos cliques até o valor', sub: 'Cada clique a mais perde gente',
          what: 'Desenhar a jornada do usuário para que o primeiro resultado útil chegue com o menor número possível de passos.',
          why: 'Num mundo de atenção curta, cada formulário, confirmação ou tela intermediária é um ponto onde a pessoa desiste.',
          keys: 'Jornada do usuário, tempo até o valor, atrito, funil, primeiro resultado.',
          body: (t) => [
            c.p('A <strong class="text-purple-400">jornada do usuário</strong> é o caminho que a pessoa percorre desde que chega ao produto até sentir o valor dele. A métrica mais importante nesse caminho é o tempo até o valor: quantos cliques e quantos segundos até ela pensar "isso resolve o meu problema".'),
            c.glossary(t, [
              ['Jornada do usuário', 'Sequência de telas e ações entre a chegada e o resultado que a pessoa procurava.'],
              ['Atrito', 'Qualquer coisa que exige esforço sem entregar valor: cadastro longo, confirmação de e-mail, tela de boas-vindas.'],
              ['Funil', 'Visão da jornada como etapas, mostrando quanta gente passa de uma para a outra.'],
              ['Tempo até o valor', 'Quanto tempo leva, desde a chegada, para o usuário ver o primeiro resultado útil.'],
            ]),
            c.figure(t, svg.bars(t, { label: 'Quantas pessoas sobram em cada etapa de uma jornada longa e de uma curta', aLabel: 'jornada longa', bLabel: 'jornada curta', max: 100, items: [
              { label: 'Chegou na página', a: 100, b: 100, aText: '100%', bText: '100%' },
              { label: 'Criou conta', a: 40, b: 85, aText: '40%', bText: '85% (depois)' },
              { label: 'Configurou', a: 22, b: 85, aText: '22%', bText: 'sem etapa' },
              { label: 'Viu o resultado', a: 12, b: 70, aText: '12%', bText: '70%' },
            ] }), 'Números ilustrativos. O ponto é o formato: cada etapa removida antes do resultado mantém mais gente viva no funil. Pedir cadastro depois do primeiro resultado costuma perder muito menos.'),
            c.steps(t, { title: 'Como cortar cliques', items: [
              { h: 'Desenhe a jornada atual', text: 'Liste cada tela e cada clique, da chegada ao primeiro resultado. Conte.' },
              { h: 'Marque o que não entrega valor', text: 'Cadastro, confirmação, tour de boas-vindas, escolha de plano. Pergunte se cada um pode ir para depois do resultado.' },
              { h: 'Mova o cadastro para depois', text: 'Deixe a pessoa testar primeiro; peça conta quando ela quiser salvar ou baixar o que gerou.' },
              { h: 'Meça de novo', text: 'Compare quantos chegam ao resultado antes e depois da mudança.' },
            ] }),
            c.grid2(t, { okTitle: 'Jornada curta', ok: ['Campo de entrada na primeira tela.', 'Resultado antes do cadastro.', 'Um botão principal por tela.'], badTitle: 'Jornada longa', bad: ['Tour de cinco telas antes de começar.', 'Cartão de crédito para testar.', 'Três opções equivalentes na primeira tela.'] }),
            c.tip({ text: 'Peça para alguém usar o produto enquanto você observa em silêncio. Cada vez que a pessoa hesitar, anote a tela. Essas hesitações são o seu mapa de atrito.' }),
          ],
        },
        {
          emoji: '🧪', title: 'Validar a interface com um protótipo grátis', sub: 'Uma UI que funciona para qualquer nicho',
          what: 'Lançar uma ferramenta simples e gratuita para testar se um formato de interface é entendido por públicos diferentes, antes de usá-lo no produto principal.',
          why: 'É uma forma barata de saber se a sua interface funciona, sem arriscar o produto pago.',
          keys: 'Protótipo, validação de interface, público diverso, prova de uso, reaproveitamento.',
          body: (t) => [
            c.p('Uma forma inteligente de validar a interface do produto principal é lançar antes uma <strong class="text-purple-400">ferramenta pequena e gratuita</strong> com o mesmo formato de uso. Se gente de países, línguas e áreas diferentes consegue usar sem ajuda, o formato está validado.'),
            c.concept(t, { title: 'Exemplo: a ferramenta de diagnóstico de páginas', emoji: '🔎', paras: [
              'Um criador publicou uma ferramenta grátis: a pessoa colava o endereço da sua página online e recebia uma avaliação completa de como ela estava montada. Era um campo, um botão e um relatório.',
              'Semanas depois, pessoas ainda encontravam o post antigo e agradeciam. Usuários de várias línguas, nichos e níveis técnicos usaram sem perguntar nada. Conclusão: o formato "cola o link, recebe o diagnóstico" funciona para qualquer público. Esse formato foi reaproveitado no produto pago.',
            ] }),
            c.figure(t, svg.flow(t, { label: 'Do protótipo gratuito à interface validada no produto principal', steps: [
              { title: 'Ferramenta grátis', sub: 'mesmo formato|de uso' }, { title: 'Público diverso', sub: 'línguas e|nichos variados' }, { title: 'Observar uso', sub: 'sem ajuda?|voltam?' }, { title: 'UI validada', sub: 'formato|aprovado' }, { title: 'Produto pago', sub: 'reaproveita|a interface' },
            ] }), 'O protótipo não precisa ser o produto; precisa ter o mesmo formato de interação. É o formato que você está testando.'),
            c.grid2(t, { okTitle: 'Bom protótipo de validação', ok: ['Mesmo fluxo de entrada e saída do produto principal.', 'Gratuito e sem cadastro.', 'Útil sozinho, para as pessoas compartilharem.'], badTitle: 'Protótipo que não ensina nada', bad: ['Formato diferente do produto que você quer vender.', 'Só amigos testando.', 'Nenhuma forma de ver como as pessoas usaram.'] }),
            c.tip({ title: 'Bônus de distribuição', text: 'Uma ferramenta grátis e útil também é isca: quem usa descobre você. Coloque, discretamente, um link para o produto principal no final do resultado.' }),
          ],
        },
        {
          emoji: '⏱️', title: 'Provar valor em menos de dois minutos', sub: 'Para quem não é técnico',
          what: 'O critério de que uma pessoa sem conhecimento técnico deve entender por que o produto vale a pena, usar e ver o resultado em menos de dois minutos.',
          why: 'Se só pessoas técnicas conseguem ver o valor, o seu mercado é pequeno. Se leva mais de dois minutos, a maioria desiste antes.',
          keys: 'Leigo, dois minutos, colar-conectar-pronto, conexão com um clique, padrão de interrupção.',
          body: (t) => [
            c.p('A régua é simples: <strong class="text-purple-400">alguém que não é da área consegue entender por que isso é valioso, usar e comprovar o valor em menos de dois minutos?</strong> O gesto ideal cabe em poucas ações: clicar, soltar um arquivo, colar um link, conectar uma conta. E pronto.'),
            c.figure(t, svg.chips(t, { title: 'Ações que cabem nos dois minutos', label: 'Ações simples que levam ao primeiro resultado em menos de dois minutos', cols: 4, items: ['colar um link', 'soltar um arquivo', 'conectar conta', '1 clique', 'escolher modelo', 'digitar 1 frase', 'ver resultado', 'baixar/compartilhar'] }), 'Se o primeiro resultado exige uma ação fora desta lista (configurar chave, instalar algo, ler um manual), você perdeu o leigo.'),
            c.grid2(t, { okTitle: 'Passa no teste dos dois minutos', ok: ['Explicação em uma frase na tela inicial.', 'Exemplo pronto para testar sem os próprios dados.', 'Conexão com um clique com as ferramentas que a pessoa já usa.'], badTitle: 'Reprova', bad: ['Pede chave de API antes do primeiro uso.', 'Tela vazia esperando a pessoa descobrir o que fazer.', 'Resultado que só um especialista sabe interpretar.'] }),
            c.concept(t, { title: 'Como fugir das demonstrações iguais', emoji: '⚡', paras: [
              'A maioria das páginas de produto de IA tem a mesma cara: título grande, gradiente, três cartões de recursos. Um padrão de interrupção é fazer diferente logo de cara: por exemplo, colocar o campo de teste na primeira dobra da página, em vez de um botão "comece agora" que leva a um cadastro.',
            ] }),
            c.steps(t, { title: 'Teste com um leigo real', items: [
              { h: 'Escolha alguém de fora da área', text: 'Um parente, um vizinho, um amigo de outra profissão.' },
              { h: 'Dê só o endereço, nenhuma instrução', text: 'Ligue um cronômetro e fique em silêncio.' },
              { h: 'Pare aos dois minutos', text: 'Pergunte: "o que isso faz?" e "você usaria?". Anote onde a pessoa travou.' },
            ] }),
            c.tip({ text: 'Um exemplo pré-carregado ("teste com este link de demonstração") resolve metade dos casos. A pessoa vê o valor antes de precisar decidir se confia em você com os próprios dados.' }),
          ],
        },
        {
          emoji: '🌀', title: 'O volante de conteúdo', sub: 'Dados anonimizados que viram tráfego',
          what: 'Um ciclo em que o uso do produto gera dados, os dados viram conteúdo público útil, e o conteúdo traz novos usuários.',
          why: 'Aumenta a superfície para a sorte: gente que nunca ouviu falar de você chega pela busca, pelos assistentes de IA e pelas redes.',
          keys: 'Volante, anonimização, SEO, AEO, GEO, superfície para a sorte.',
          body: (t) => [
            c.p('Um <strong class="text-purple-400">volante</strong> (em inglês, <em>flywheel</em>) é um ciclo que se alimenta sozinho: quanto mais gira, mais fácil fica girar. No volante de conteúdo, os dados do uso viram artigos, os artigos trazem usuários, e os usuários geram mais dados.'),
            c.glossary(t, [
              ['Anonimizar', 'Remover tudo que identifica pessoas ou empresas, deixando só o padrão agregado.'],
              ['SEO', 'Otimização para aparecer nos resultados de buscadores como o Google.'],
              ['AEO', 'Otimização para ser a resposta citada por mecanismos de resposta e assistentes.'],
              ['GEO', 'Otimização para ser mencionado por IAs generativas (ChatGPT, Claude, Gemini) quando alguém pergunta sobre o tema.'],
            ]),
            c.figure(t, svg.flow(t, { label: 'O volante de conteúdo: uso gera dados, dados viram artigos, artigos trazem novos usuários', steps: [
              { title: 'Uso', sub: 'pessoas usam|o produto' }, { title: 'Dados', sub: 'padrões|anonimizados' }, { title: 'Conteúdo', sub: '"top 5|vulnerabilidades"' }, { title: 'Busca e IA', sub: 'SEO, AEO|e GEO' }, { title: 'Novos usuários', sub: 'que nunca|ouviram de você' },
            ] }), 'O último quadro volta ao primeiro. Cada novo usuário gera mais dados, que viram mais conteúdo: por isso o ciclo acelera sozinho.'),
            c.concept(t, { title: 'Exemplo com o produto de segurança', emoji: '🔐', bullets: [
              'O produto encontra falhas em milhares de apps criados com IA.',
              'Toda semana, de forma automática, agrupa as falhas mais comuns, sem identificar ninguém.',
              'Publica artigos como "as 5 vulnerabilidades que você precisa corrigir hoje no seu app feito com IA".',
              'Quem está preocupado e busca sobre o assunto encontra o artigo e chega ao produto, sem saber quem você é.',
            ] }),
            c.cards(t, [
              { emoji: '🎥', h: 'Vídeo curto', text: 'Redes de vídeo curto não exigem seguidores, só constância. Uma conta nova pode ter um vídeo com 30 mil visualizações e trazer clientes sem nenhuma chamada.' },
              { emoji: '📝', h: 'Artigos automáticos', text: 'Relatórios periódicos gerados dos dados agregados, revisados antes de publicar.' },
              { emoji: '🤖', h: 'Respostas de IA', text: 'Conteúdo claro, com números e listas, tende a ser citado quando alguém pergunta a um assistente.' },
            ]),
            c.alert({ title: 'Privacidade não é opcional', text: 'Anonimizar é obrigatório e deve estar nos termos de uso. Publique padrões agregados ("37% dos apps analisados tinham X"), nunca casos identificáveis. Um vazamento no seu próprio conteúdo destrói o produto, principalmente se o produto é de segurança.' }),
          ],
        },
      ],
      quiz: [
        { q: 'Qual frase de posicionamento segue a fórmula mais eficaz?', options: ['"Plataforma revolucionária baseada em IA"', '"O Uber da segurança digital"', '"Antivírus para apps feitos com IA"'], answer: 2, why: 'Ela usa uma categoria conhecida (antivírus) aplicada a uma situação nova. "Uber de" é um clichê gasto e "plataforma baseada em IA" não diz nada.' },
        { q: 'Onde costuma ser melhor pedir o cadastro?', options: ['Na primeira tela, antes de tudo', 'Depois que a pessoa viu o primeiro resultado', 'Nunca pedir'], answer: 1, why: 'Pedir conta depois do primeiro valor reduz a desistência: a pessoa já sabe por que vale a pena se cadastrar.' },
        { q: 'O que faz o volante de conteúdo girar?', options: ['Anúncios pagos semanais', 'Dados anonimizados do uso viram conteúdo que traz novos usuários', 'Postar o mesmo texto em todas as redes'], answer: 1, why: 'Cada volta alimenta a próxima: mais usuários, mais dados, mais conteúdo, mais usuários.' },
      ],
      summary: [
        ['Uma linha', 'Categoria conhecida + situação nova; sem clichês.'],
        ['Vídeo curto', 'Gancho, problema, demonstração, resultado: o mesmo roteiro do pitch.'],
        ['Menos cliques', 'Resultado antes do cadastro; cada tela a mais perde gente.'],
        ['Protótipo grátis', 'Valida o formato de interface com públicos diversos.'],
        ['Dois minutos', 'Um leigo precisa entender, usar e ver o valor nesse tempo.'],
        ['Volante de conteúdo', 'Dados anonimizados viram artigos que trazem usuários.'],
      ],
    },

    // ================= 3-3 =================
    {
      id: '3-3', emoji: '🎨', title: 'Feedback, design e usuários simulados', punch: 'Fuja da média antes de lançar', minutes: 50, level: 'Intermediário', kind: 'Prático',
      lead: 'Os usuários quase nunca dizem o que está errado; eles simplesmente vão embora. Este módulo mostra como ouvir o que não foi dito, como desenhar sem cair no visual médio da IA e como testar o produto com usuários simulados antes do lançamento.',
      topics: [
        {
          emoji: '🎞️', title: 'O feedback que ninguém deu', sub: 'Gravações de sessão mostram onde a pessoa trava',
          what: 'Ferramentas que gravam, de forma anônima, como os usuários navegam no seu site ou app, clique por clique.',
          why: 'Quase ninguém escreve para reclamar. Assistir ao uso real revela onde as pessoas desistem e por quê.',
          keys: 'Gravação de sessão, PostHog, Hotjar, abandono, erro de produção.',
          body: (t) => [
            c.p('Ferramentas como <strong class="text-purple-400">PostHog</strong> e <strong class="text-purple-400">Hotjar</strong> oferecem gravações de sessão (<em>session replays</em>): você assiste, como um vídeo, a um usuário navegando no seu produto. Onde ele clicou, onde parou, onde voltou, onde desistiu.'),
            c.glossary(t, [
              ['Gravação de sessão', 'Reconstrução em vídeo da navegação de um usuário, a partir dos eventos da página. Não usa a câmera da pessoa.'],
              ['Abandono', 'Momento em que o usuário sai sem completar o que veio fazer.'],
              ['Erro em produção', 'Falha que só aparece com usuários reais, no sistema publicado, e não nos seus testes.'],
              ['Mascaramento', 'Recurso que esconde automaticamente campos sensíveis (senhas, cartões) nas gravações.'],
            ]),
            c.concept(t, { title: 'Um hábito de empresa grande', emoji: '💳', paras: [
              'Nos primeiros meses, a equipe da Stripe assistia ao uso dos seus clientes, um por um, para encontrar cada ponto de dor. Não é um hábito de empresa pequena; é o que empresas que deram certo fizeram no começo.',
              'Muitos erros só aparecem assim: um botão que falha com clique duplo, um formulário que some num celular específico, um usuário que tenta algo que você nunca imaginou.',
            ] }),
            c.figure(t, svg.split(t, { label: 'O que o usuário conta versus o que a gravação de sessão mostra', bridge: 'dito × feito', left: { title: 'O QUE ELE DIZ', items: ['Nada (na maioria dos casos)', '"Achei legal"', '"Depois eu vejo"', 'Some sem explicar'] }, right: { title: 'O QUE A GRAVAÇÃO MOSTRA', items: ['Clicou 4 vezes no mesmo botão', 'Não achou onde colar o link', 'Rolou a página procurando preço', 'Saiu no passo 3 do cadastro'] } }), 'A coluna da direita é o feedback de verdade. Ninguém escreveu, mas está tudo ali.'),
            c.grid2(t, { okTitle: 'O que procurar nas gravações', ok: ['Cliques repetidos no mesmo ponto (algo não respondeu).', 'Rolagem para cima e para baixo (a pessoa está perdida).', 'Saída logo depois de um passo específico.'], badTitle: 'Cuidados', bad: ['Gravar campos sensíveis sem mascaramento.', 'Não avisar sobre a coleta na política de privacidade.', 'Assistir a uma gravação e generalizar para todos.'] }),
            c.tip({ text: 'Construir a sua própria ferramenta de gravação com IA é possível, mas as ferramentas consagradas continuam mais confiáveis e têm plano gratuito. Guarde a energia para o seu produto.' }),
          ],
        },
        {
          emoji: '⚙️', title: 'O comando /product-feedback', sub: 'Gravações → modelo de vídeo → plano de correção',
          what: 'Um fluxo automatizado em que um modelo de IA assiste às gravações de sessão, resume os problemas, e outro modelo transforma isso num plano de correção.',
          why: 'Assistir gravações à mão não escala. Com IA, você recebe o resumo de dezenas de sessões e um plano pronto com uma única ação.',
          keys: 'Skill, modelo de vídeo, Gemini Flash, Claude Code, plano de correção, automação.',
          body: (t) => [
            c.p('Hoje, em vez de você assistir a cada gravação, um <strong class="text-purple-400">modelo multimodal rápido</strong> (como as versões Flash do Gemini) pode assistir a todas e dizer onde a jornada está confusa e onde as pessoas não chegam ao clique desejado em menos de dez segundos. Em seguida, um agente de código como o Claude Code transforma esse diagnóstico num plano de correção.'),
            c.figure(t, svg.flow(t, { label: 'O fluxo do comando /product-feedback, da coleta ao plano de correção', steps: [
              { title: 'Coletar', sub: 'gravações do|PostHog' }, { title: 'Assistir', sub: 'modelo de|vídeo rápido' }, { title: 'Resumir', sub: 'onde travam|e por quê' }, { title: 'Planejar', sub: 'Claude Code|monta o plano' }, { title: 'Corrigir', sub: 'você aprova|e aplica' },
            ] }), 'Uma única ação dispara os cinco passos. O último continua com você: a IA propõe, você decide o que muda.'),
            c.glossary(t, [
              ['Skill', 'Um conjunto de instruções salvo que o Claude Code executa quando você chama pelo nome, como /product-feedback.'],
              ['Modelo multimodal', 'Modelo de IA que entende, além de texto, imagem e vídeo.'],
            ]),
            c.code(t, { objective: 'Criar a skill /product-feedback no Claude Code. Salve como .claude/skills/product-feedback/SKILL.md na pasta do projeto.', code: `---
name: product-feedback
description: Analisa gravações de sessão recentes e gera um plano de correção da jornada do usuário.
---

# /product-feedback

Objetivo: descobrir onde os usuários travam, sem ninguém ter reclamado.

1. Baixe as <N, ex.: 30> gravações de sessão mais recentes do <PostHog | Hotjar>
   usando <a API/CLI da ferramenta, com a chave em .env>. Pule sessões com menos de 10 s.
2. Para cada gravação, peça ao modelo de vídeo <ex.: Gemini Flash> um resumo com:
   - objetivo aparente do usuário;
   - onde hesitou (cliques repetidos, rolagem de busca, pausas longas);
   - se chegou ao resultado principal em menos de 10 segundos;
   - onde saiu.
3. Agrupe os problemas por tela e ordene pela quantidade de sessões afetadas.
4. Leia o código das telas mais problemáticas em <pasta do front-end> e escreva
   PLANO-FEEDBACK.md com: problema, evidência (quantas sessões), causa provável,
   mudança proposta, arquivo a alterar, como medir se melhorou.
5. NÃO altere código. Pare e me mostre o plano para aprovação.`, verify: 'Rode /product-feedback no Claude Code. Deve surgir um PLANO-FEEDBACK.md com problemas ordenados por número de sessões e nenhum arquivo de código alterado.' }),
            c.grid2(t, { okTitle: 'Deixe com a IA', ok: ['Assistir e resumir dezenas de gravações.', 'Agrupar problemas por tela.', 'Propor mudanças e apontar arquivos.'], badTitle: 'Mantenha com você', bad: ['Aprovar o que muda no produto.', 'Decidir o que é prioridade para o negócio.', 'Checar se as gravações respeitam a privacidade.'] }),
            c.alert({ title: 'Custo e privacidade', text: 'Enviar vídeos a um modelo externo tem custo por uso e significa mandar dados de navegação para fora. Use gravações com campos mascarados, limite o número de sessões por rodada e confirme que os seus termos de uso permitem esse processamento.' }),
          ],
        },
        {
          emoji: '🧭', title: 'Copie o onboarding de quem já fatura', sub: 'Herdar centenas de testes A/B',
          what: 'Estudar, passo a passo, a entrada de produtos que comprovadamente ganham dinheiro, e adaptar o que funciona ao seu.',
          why: 'Quem já fatura testou a jornada dezenas ou centenas de vezes. Estudar o resultado final é herdar esse aprendizado sem pagar por ele.',
          keys: 'Onboarding, engenharia reversa, teste A/B, receita verificada, uso de computador.',
          body: (t) => [
            c.p('<strong class="text-purple-400">Onboarding</strong> é a entrada do usuário no produto: do primeiro acesso até o momento em que ele entende e começa a usar. Produtos que ganham dinheiro já refinaram essa entrada com muitos testes. Em vez de começar do zero, estude o que eles fazem.'),
            c.glossary(t, [
              ['Onboarding', 'O processo de receber e orientar o usuário novo até o primeiro uso bem-sucedido.'],
              ['Teste A/B', 'Mostrar duas versões para grupos diferentes e ver qual converte mais.'],
              ['Engenharia reversa', 'Estudar um produto pronto para entender como ele foi pensado.'],
              ['Uso de computador', 'Capacidade de um agente de IA abrir um navegador, clicar, rolar e ler a tela como uma pessoa.'],
            ]),
            c.steps(t, { title: 'Como estudar um onboarding', items: [
              { h: 'Ache quem fatura de verdade', text: 'Existem sites que listam produtos com receita verificada por integração com o meio de pagamento. Receita é um sinal de que a entrada funciona.' },
              { h: 'Passe pela entrada inteira', text: 'Crie uma conta, faça o primeiro uso. Ou peça a um agente com uso de computador (o Codex tem navegador interno) para fazer isso e registrar cada tela.' },
              { h: 'Anote o que é diferente', text: 'Ordem das perguntas, o que é pedido e quando, textos dos botões, o que aparece logo depois do cadastro.' },
              { h: 'Adapte, não clone', text: 'Leve o princípio, não o design. O que funciona para o público deles pode precisar de ajuste para o seu.' },
            ] }),
            c.figure(t, svg.scale(t, { label: 'Começar do zero versus herdar o aprendizado de quem já testou', tilt: -0.6, left: { title: 'DO ZERO', lines: ['Você testa sozinho', 'Meses de tentativa', 'Médio da IA como base'] }, right: { title: 'HERDADO', lines: ['Centenas de testes A/B', 'Já provado com dinheiro', 'Você adapta ao seu nicho'] } }), 'A balança pende para o lado de quem já testou. Faturamento é a prova de que o fluxo convence alguém a pagar.'),
            c.alert({ title: 'Por que não pedir só "faça um onboarding bom"', text: 'Se você pede ao modelo um onboarding sem referência, ele entrega a média do que viu no treino. A média não é o que converte melhor; é só o mais comum. Referências reais levam o resultado para cima da média.' }),
            c.tip({ text: 'Cuidado com plataformas públicas de métricas: expor a sua receita num site aberto também avisa os copiadores. Estude os outros, mas pense bem antes de expor os seus números.' }),
          ],
        },
        {
          emoji: '🖌️', title: 'Design sem inchar o setup', sub: 'Mande o agente ler as referências, não instalar pacotes',
          what: 'Em vez de instalar várias skills e plugins de design, pedir ao agente que navegue por galerias de referência e escolha a dedo o que combina com o seu nicho.',
          why: 'Skills de design diferentes carregam estilos que brigam entre si, incham o contexto e levam ao mesmo visual genérico de todo mundo.',
          keys: 'Skills de design, conflito de paradigmas, galeria de referência, 21st.dev, whatships, Awwwards, escolha a dedo.',
          body: (t) => [
            c.p('Uma recomendação comum é "instale estas sete skills de design para seu app não parecer feito por IA". O resultado costuma parecer... feito por IA. Pior: cada skill carrega um estilo, e quando o agente usa três ao mesmo tempo, <strong class="text-purple-400">os paradigmas de design brigam</strong>. O setup fica inchado e o visual, confuso.'),
            c.figure(t, svg.split(t, { label: 'Setup inchado de skills de design versus agente que lê referências e escolhe a dedo', bridge: 'instalar × observar', left: { title: 'SETUP INCHADO', items: ['7 skills de design instaladas', 'Estilos que se contradizem', 'Contexto cheio de regras', 'Resultado: média genérica'] }, right: { title: 'LEITURA DIRIGIDA', items: ['Agente navega em galerias', 'Anota o que serve ao nicho', 'Escolhe a dedo', 'Resultado: identidade própria'] } }), 'Instalar é trazer a opinião de outra pessoa para dentro. Observar é trazer só o que serve ao seu produto.'),
            c.cards(t, [
              { emoji: '🧩', h: '21st.dev', text: 'Galeria de componentes de interface: fundos, bordas, cartões, botões. Útil para ver padrões visuais.' },
              { emoji: '🎬', h: 'whatships', text: 'Vídeos de lançamento de produtos. Referência para o vídeo de marketing do seu site.' },
              { emoji: '🏆', h: 'Awwwards', text: 'Sites premiados do mês e do ano. Tipografia, layout e interação acima da média.' },
            ]),
            c.code(t, { objective: 'Pedir a um agente com navegador (Codex com uso de computador, ou Claude com navegador) que estude referências e proponha um guia visual para o seu produto.', code: `Use o navegador para estudar referências de design. NÃO instale skills, plugins nem pacotes.

Meu produto: <frase de posicionamento de uma linha>
Público: <quem usa>
Sensação desejada: <ex.: confiável e calmo | rápido e ousado>

1. Abra https://21st.dev e role pelos componentes (fundos, bordas, cartões, botões).
   Anote 5 que combinam com o produto, com o motivo.
2. Abra https://whatships.com, assista a 3 vídeos de lançamento de produtos parecidos
   e descreva quadro a quadro o que torna cada um claro em menos de 2 minutos.
3. Abra https://www.awwwards.com (sites do mês/ano), percorra 3 sites até o fim e anote:
   tipografia, posição dos botões, ritmo da rolagem e o que é incomum.
4. Escreva GUIA-VISUAL.md com: paleta, 2 fontes, 5 componentes escolhidos,
   estrutura da página inicial e um roteiro de vídeo de 60 s.
5. Justifique cada escolha pelo público e pela sensação desejada.`, verify: 'O agente deve abrir os três sites (você vê a navegação) e entregar um GUIA-VISUAL.md com escolhas justificadas, sem ter instalado nada no projeto.' }),
            c.tip({ title: 'Valor por rolagem', text: 'Ao revisar a sua página, pergunte a cada tela de rolagem: "o que a pessoa aprendeu aqui?". Minimalista não é vazio; é cada rolagem entregar valor.' }),
          ],
        },
        {
          emoji: '👥', title: 'Usuários simulados com subagentes', sub: 'Personas que testam antes do público',
          what: 'Criar agentes de IA que assumem perfis de usuários diferentes, usam ou analisam o produto e dão feedback do ponto de vista de cada um.',
          why: 'É uma forma rápida e barata de ver o produto com outros olhos antes de expor gente de verdade a ele.',
          keys: 'Subagente, persona, perfil, feedback simulado, olhar de fora.',
          body: (t) => [
            c.p('Um <strong class="text-purple-400">subagente</strong> é um agente de IA que o agente principal cria para cuidar de uma tarefa separada, com instruções próprias. Você pode criar vários, cada um com uma <strong class="text-purple-400">persona</strong>: um perfil de usuário com idade, rotina, paciência e experiência diferentes.'),
            c.glossary(t, [
              ['Subagente', 'Agente auxiliar criado para uma tarefa específica, com contexto e instruções próprios.'],
              ['Persona', 'Descrição de um usuário típico: quem é, o que quer, o que o irrita.'],
            ]),
            c.figure(t, svg.fanout(t, { label: 'Um agente principal distribui a análise do produto para subagentes com personas diferentes', center: 'Seu|produto', groups: [
              { n: 55, title: 'Anos, pouca familiaridade digital', sub: 'precisa de clareza, letra legível, confiança' },
              { n: 20, title: 'Anos, TDAH, testou 100 produtos na semana', sub: 'decide em segundos, odeia espera' },
              { n: 1, title: 'Gestor que vai pagar', sub: 'quer ver custo, segurança e retorno' },
              { n: 1, title: 'Especialista técnico cético', sub: 'procura falhas e promessas exageradas' },
            ] }), 'Cada ramo olha o mesmo produto e vê problemas diferentes. O valor está nas divergências: o que uma persona ama, outra pode abandonar.'),
            c.code(t, { objective: 'Rodar um painel de 4 usuários simulados no Claude Code sobre a sua página ou app.', code: `Crie 4 subagentes, um para cada persona abaixo. Cada um deve analisar
<URL da página | pasta do projeto> do próprio ponto de vista, de forma independente.

Personas:
1. <Nome>, 55 anos, <profissão>, usa o celular para quase tudo, desconfia de pagar online.
2. <Nome>, 20 anos, TDAH, testou 100 produtos na última semana, decide em 10 segundos.
3. <Nome>, gestor(a) que aprova a compra: quer custo, segurança e retorno claros.
4. <Nome>, especialista técnico cético: procura falhas e promessas exageradas.

Cada subagente responde:
- Em 10 segundos, entendi o que é? (sim/não + o que achei que era)
- O que me faria sair da página.
- O que me faria pagar.
- A frase exata que eu mudaria.

Depois, consolide em PAINEL-PERSONAS.md: pontos em que 3 ou mais concordam,
divergências importantes e as 5 mudanças de maior impacto, em ordem.`, verify: 'Deve surgir PAINEL-PERSONAS.md com quatro opiniões distintas e uma lista priorizada. Se as quatro soarem iguais, deixe as personas mais específicas e rode de novo.' }),
            c.alert({ title: 'Simulação não é validação', text: 'Personas simuladas ajudam a achar problemas óbvios antes do lançamento. Elas não substituem gente real pagando. Use para melhorar o produto, não para concluir que ele vai dar certo.' }),
          ],
        },
        {
          emoji: '🌐', title: 'Multidões sintéticas e o julgamento', sub: 'Milhares de compradores simulados, e o que continua com você',
          what: 'Ferramentas que simulam centenas ou milhares de compradores, cada um com um pequeno perfil, para prever a reação do mercado; e o fechamento do curso.',
          why: 'Permitem testar mensagens e páginas em escala antes de gastar; e lembram que, quando tudo pode ser construído, o julgamento é o que diferencia.',
          keys: 'Multidão sintética, Mirofish, backtest, prompt de sistema, julgamento.',
          body: (t) => [
            c.p('Existem ferramentas, como o <strong class="text-purple-400">Mirofish</strong>, que criam centenas ou milhares de agentes, cada um com um pequeno prompt de sistema descrevendo quem é. Juntos, eles simulam compradores de um mercado e dizem o que achariam do seu produto, da sua página ou do seu anúncio.'),
            c.glossary(t, [
              ['Multidão sintética', 'Um grande número de agentes com perfis variados que simulam a reação de um público.'],
              ['Backtest', 'Testar um método com dados do passado para ver se ele teria acertado o que de fato aconteceu.'],
              ['Prompt de sistema', 'Instrução inicial que define quem o agente é e como deve se comportar.'],
            ]),
            c.concept(t, { title: 'O teste que dá confiança: o backtest', emoji: '📊', paras: [
              'Pessoas têm usado essas ferramentas para um teste simples: pegar os últimos 10 posts de um perfil e pedir à multidão sintética, com o público daquele perfil, para dizer qual faria mais sucesso. Em muitos casos, ela aponta o post que de fato viralizou.',
              'Se a simulação acerta o passado, você ganha alguma confiança para usá-la em decisões futuras: qual título testar, qual página publicar, qual oferta fazer.',
            ] }),
            c.figure(t, svg.stack(t, { label: 'Do mais barato e rápido ao mais confiável: as camadas de teste antes e depois do lançamento', layers: [
              { title: 'Multidão sintética', sub: 'milhares de opiniões simuladas' },
              { title: 'Painel de personas', sub: '4 a 6 subagentes detalhados' },
              { title: 'Gravações de sessão', sub: 'uso real, sem palavras' },
              { title: 'Clientes pagando', sub: 'a única validação definitiva' },
            ] }), 'Quanto mais para dentro, mais confiável e mais caro. As camadas de fora servem para chegar ao centro com menos erros, não para substituí-lo.'),
            c.grid2(t, { okTitle: 'Use simulação para', ok: ['Escolher entre versões de título ou página.', 'Achar objeções antes de gastar com anúncios.', 'Ver como públicos diferentes reagem.'], badTitle: 'Não use simulação para', bad: ['Concluir que o produto vai vender.', 'Dispensar conversa com clientes reais.', 'Justificar uma decisão que você já tinha tomado.'] }),
            c.concept(t, { title: 'Fechamento: o julgamento é o jogo', emoji: '🧭', paras: [
              'Tudo o que este curso mostrou está ao alcance de qualquer pessoa hoje: construir, desenhar, simular, analisar. Justamente por isso, nada disso diferencia sozinho.',
              'O que diferencia é o julgamento: saber se algo vale a pena ser construído, para quem, por quanto tempo e como chegar até essas pessoas. Num mundo em que se pode construir qualquer coisa, esse julgamento é o jogo inteiro.',
            ] }),
            c.tip({ title: 'Próximo passo prático', text: 'Pegue o produto ou a ideia em que você está trabalhando e rode, nesta ordem: a frase de uma linha (3-2), o painel de personas (3-3) e o plano de distribuição das primeiras 100 pessoas (3-1). Em uma tarde você sai com as três respostas escritas.' }),
          ],
        },
      ],
      quiz: [
        { q: 'Por que gravações de sessão são valiosas?', options: ['Porque mostram o rosto do usuário', 'Porque revelam onde as pessoas travam, mesmo sem ninguém reclamar', 'Porque substituem os testes de código'], answer: 1, why: 'A maioria dos usuários vai embora em silêncio. A gravação mostra cliques repetidos, hesitações e o ponto exato da desistência.' },
        { q: 'Qual o problema de instalar várias skills de design ao mesmo tempo?', options: ['Nenhum, quanto mais melhor', 'Os estilos brigam entre si, incham o contexto e levam ao visual genérico', 'Elas deixam o site mais lento para o usuário'], answer: 1, why: 'Cada skill traz um paradigma visual. Juntas, se contradizem. Pedir ao agente que leia referências e escolha a dedo gera identidade própria.' },
        { q: 'Qual é a única validação definitiva de um produto?', options: ['Uma multidão sintética aprovar', 'Um painel de personas gostar', 'Clientes reais pagando'], answer: 2, why: 'Simulações e gravações ajudam a errar menos, mas só pagamento real prova que o produto vale a pena para o mercado.' },
      ],
      summary: [
        ['Gravações de sessão', 'O feedback de verdade está no que o usuário fez, não no que disse.'],
        ['/product-feedback', 'Modelo de vídeo resume as sessões; agente de código monta o plano; você aprova.'],
        ['Onboarding herdado', 'Estude quem já fatura; adapte o princípio, não copie o design.'],
        ['Design por referência', 'Leia galerias e escolha a dedo, em vez de empilhar skills.'],
        ['Personas e multidões', 'Simulação acha problemas cedo, mas não substitui cliente pagando.'],
        ['Julgamento', 'Quando tudo pode ser construído, saber o que vale construir é o jogo.'],
      ],
    },
  ],
};
