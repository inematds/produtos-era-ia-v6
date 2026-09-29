# Produtos na era da IA v6 — saber o que vale a pena construir

![capa](capa/capa.png)

Curso INEMA.CLUB no formato v6 (iniciante 30+): 18 aulas de uns 15 minutos em 3 módulos — A mentalidade,
Vale a pena construir? e Lançar e crescer. Cada aula tem cena ilustrada, telas simuladas, uma prática no chat de IA
e, no fim, o material complementar com o texto completo do curso v2.

**Curso:** https://inematds.github.io/produtos-era-ia-v6/landing.html

Versão v2 (3 trilhas, 54 tópicos): https://inematds.github.io/produtos-era-ia/

## Estrutura

- `aulas/aula-N.html`: fonte de cada aula (editar aqui)
- `curso.html`: montado por `python3 ~/.claude/skills/formato-curso-v6/scripts/montar-curso.py .` (não editar à mão)
- `landing.html`: página de apresentação
- `tools/complementar.mjs`: gera e injeta o material complementar a partir do conteúdo v2 (`tools/v2src/`)
- `tools/gerar-cenas.sh` + `tools/cenas.tsv`: cenas das aulas
- `context/`: currículo, glossário, brief dos agentes e relatórios de verificação
- `capa/capa.png`: capa 1280×720

## Mais no INEMA.CLUB

- [Guia: como aprender inteligência artificial](https://www.inema.club/aprender-inteligencia-artificial/)
- [Todos os cursos](https://www.inema.club/cursos/)
