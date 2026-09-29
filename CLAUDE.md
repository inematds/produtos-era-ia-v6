# CLAUDE.md — produtos-era-ia-v6

Curso **Produtos na era da IA v6** (formato-curso-v6, perfil não técnico). Currículo e regras: `context/curriculo.md`.
Fonte: curso v2 em `~/projetos/produtos-era-ia` (não editar o v2 a partir daqui).

- Repo `inematds/produtos-era-ia-v6`, autor dos commits `inematds <inematds@gmail.com>`. GitHub Pages da raiz; `index.html` redireciona para `landing.html`.
- Editar só `aulas/aula-N.html`. Depois: `node tools/complementar.mjs --injeta` → `montar-curso.py .` → `traduzir-curso.py . en es` → auditar PT/EN/ES.
- Glossário fixo dos termos (`.gterm`): `context/glossario.json`. Glossário de tradução: `i18n/glossario.json`.
- Versão em `VERSION` + `CHANGELOG.md` (semver da regra global: minor carrega o patch).

## Self-learning

When I correct you, or you catch yourself making a mistake: before continuing, add the lesson as a one-line rule under ## Lessons, so it never happens again.

## Lessons

- Remontar tradução sempre com TODOS os idiomas (`traduzir-curso.py . en es --so-montar`): rodar só `en` apaga os links para `es` nas páginas PT e EN. (28/09/2026)
- `montar-curso.py` troca cada tag por espaço no card da trilha: não termine um `<em>` logo antes de pontuação no `<h1>` (sai "escolhido , não"). (28/09/2026)
