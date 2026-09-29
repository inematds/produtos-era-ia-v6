# Brief para os agentes que escrevem aulas — Produtos na era da IA v6

Repo: `~/projetos/produtos-era-ia-v6`. Skill: `~/.claude/skills/formato-curso-v6/`.
Você recebe 1 ou 2 aulas (números no pedido). Escreva `aulas/aula-N.html` de cada uma, no molde da aula 1.

## Leia antes de escrever (nesta ordem)

1. `~/.claude/skills/formato-curso-v6/references/CONTEUDO-INICIANTE.md` (voz, leis, jargão, estrutura)
2. `~/.claude/skills/formato-curso-v6/references/V6-DESIGN.md` (markup dos visuais: `.tela`, `.lado`, `.janela`, `.diag`)
3. `~/.claude/skills/formato-curso-v6/references/CHECKLIST-V6.md` (rubrica que o auditor mede)
4. `aulas/aula-1.html` — **aula-modelo aprovada 10/10**. Copie a estrutura, não as frases, os exemplos nem os nomes de app.
5. `context/curriculo.md` — a linha da tabela da sua aula (título, tipo, promessa, prática, gancho), personagens e
   regras editoriais do curso (NÃO citar a fonte; números permitidos; lista-sentinela; trocas de palavra).
6. `context/complementar/aula-N.html` — **o conteúdo de origem da sua aula** (texto completo dos 3 tópicos do v2).
   A aula v6 ensina esses 3 tópicos no jeito v6: 3 a 4 steps, uma ideia por step. Não precisa cobrir tudo: o
   complementar já vai no fim da aula para quem quer se aprofundar.
7. `context/glossario.json` — definições fixas. Todo termo do assunto que você usar recebe
   `<span class="gterm" data-def="…">termo</span>` com **exatamente** esse `data-def`, na 1ª vez em que aparece
   **na sua aula** (aspas duplas dentro de atributo viram `&quot;`). Termo novo que não está no glossário: defina
   e diga no relatório final qual definição usou.
8. Olhe a cena da sua aula: `assets/img/aula-N.webp` (abra a imagem com a ferramenta Read). O `alt` descreve o que
   está NA imagem (quem, onde, o que faz) numa frase que ensina.

Opcional, para detalhe fiel: transcrição original em inglês `~/projetos/output/produtos-era-ia/fonte/transcricao/transcript.txt`.

## Regras fixas deste curso

- Personagens: **Marta** (contadora, 51, Joinville) e **Heitor** (fisioterapeuta, 38, Recife); figurantes Dona Célia
  (doceira, cliente MEI da Marta) e seu Arlindo (paciente do Heitor, 67). `data-ex="contadora"` / `data-ex="fisioterapeuta"`.
  Alterne as duas profissões nos steps e no molde preenchido da prática.
- `<section class="view" id="v-aula-N" data-aula="N" data-tempo="XXmin">`; `data-tempo` = palavras de prosa/200 +
  minutos da prática + 1, arredondado para cima (alvo 12–15, teto 18).
- Kicker `Aula N de 18`. Rodapé `<p class="aula-pe">Aula N · Produtos na era da IA v6 · INEMA.CLUB PRO</p>`.
- Navegação: `<nav class="lnav"><a href="#aula-(N-1)">← aula anterior</a><a class="next" href="#aula-(N+1)">próxima aula →</a></nav>`.
  Na aula 18: `<a class="next" href="#trilha">voltar à trilha →</a>`.
- **Não escreva `details.complementar`** — o agente principal injeta depois. Deixe `</div>` do `.fecho` seguido direto do `nav.lnav`.
- Cena: `<figure class="cena"><img src="assets/img/aula-N.webp" width="1280" height="720" alt="…"></figure>`.
- Prosa (`.step > p`, `.why`, `.promise`) ≤ 900 palavras; frases curtas (média <15, nenhuma >30, ≤5% >22).
- Todo step com um visual; ≥2 visuais reais (`.tela`/`.lado`/`.janela`) por aula. Use pelo menos uma `.tela` com dois
  `.tela-caso` quando houver um "pedido ruim × pedido bom". Varie a sequência de visuais em relação à aula 1.
- Aula de tipo **fundamento**: 1 `.quiz` obrigatório, alternativas de tamanho parecido (a certa não pode ser a mais longa).
- ≥1 `.calma`; `.psafe` na prática; no máximo 1 `.qerr`; no máximo 2 `details.mais`.
- Prática: exatamente 1 `.practice[data-mode]` no modo do currículo; `.pgoal` termina com "Cerca de N minutos."
  (o auditor lê esse número). Prática nunca envolve programar nem ferramenta técnica: é chat de IA, papel ou documento.
- **Ficha da ideia** (criada na aula 1): toda prática termina acrescentando algo a ela. Diga onde fica ("a ficha da
  ideia que você criou na aula 1") e dê a saída para quem pulou ("Não tem a ficha? Abra um documento em branco").
  Quem não tem ideia própria usa a da Marta ou a do Heitor.
- Fecho: `.cola` (3 itens) + `.next-action` (vitória, microação ≤15 min, gancho = o gancho do currículo).
- Cartões `cards-N`: 3 ou 4, frente sempre termina em "?", nenhuma frase repetida da `.cola`, formas de decisão/diagnóstico/aplicação.
- Lista-sentinela proibida no texto e nos cartões: JSON, terminal, Git, GitHub, repositório, commit, branch, pipeline,
  arquivo de configuração, instalar/instalação, script, servidor, API, deploy, CLI, diretório, plugin, encoding,
  workflow, output, input, setup, framework, upload, download, login, backup. Nunca "à direita/à esquerda".
  Troque: plugin → recurso embutido; pipeline → cadeia de etapas; onboarding → entrada no produto; baixar/enviar.
- Telas simuladas: a resposta "boa" da IA só usa fatos que estão no pedido. Nenhum nome de marca real inventado como
  concorrente; nomes de app fictícios só se forem claramente genéricos. Nada de hype, emoji, "!!".

## Verificação (numa cópia isolada — NUNCA monte no repo real)

```bash
SP=<seu scratchpad>/cópia-aulas-N; rm -rf $SP; mkdir -p $SP
cd ~/projetos/produtos-era-ia-v6 && cp -r assets curso.json $SP/ && mkdir $SP/aulas && cp aulas/aula-1.html aulas/aula-N.html $SP/aulas/
# curso.json da cópia: um módulo só, com [1, suas aulas]
python3 -c "import json;c=json.load(open('$SP/curso.json'));c['modulos']=[{'titulo':'t','resumo':'x','aulas':[1,N]}];json.dump(c,open('$SP/curso.json','w'),ensure_ascii=False)"
# injete o complementar da sua aula na cópia (antes do nav.lnav), para auditar igual ao final:
python3 -c "import sys;n='N';c=open('context/complementar/aula-'+n+'.html').read();f='$SP/aulas/aula-'+n+'.html';a=open(f).read();open(f,'w').write(a.replace('<nav class=\"lnav\">',c+'\n<nav class=\"lnav\">',1))"
cd $SP && python3 ~/.claude/skills/formato-curso-v6/scripts/montar-curso.py . && node ~/.claude/skills/formato-curso-v6/scripts/auditar-curso.cjs curso.html
```

- Meta: **toda aula ≥9/10 e sem falha nos critérios 7, 8 e 10** (mire 10/10). Corrija em `aulas/aula-N.html` do repo real
  e repita a verificação na cópia.
- Depois do auditor, faça uma leitura como leitora simulada (TESTE-HUMANO.md §1): você é Dona Célia, 58, doceira,
  usa WhatsApp e às vezes o chat de IA, está no celular. Em cada step: a figura sozinha passa a ideia? onde travaria?
  Corrija todo ponto em que ela travaria.
- Grave só os seus `aulas/aula-N.html` no repo real. Não mexa em nenhum outro arquivo do repo.

## Relatório final (curto)

Por aula: nota do auditor, palavras, tempo; termos que você definiu fora do glossário; dúvidas de conteúdo.
