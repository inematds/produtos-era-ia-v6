// Gera o material complementar de cada aula a partir do conteúdo do curso v2 (produtos-era-ia).
// Mapa: 9 módulos v2 × 6 tópicos → 18 aulas. Aula ímpar = tópicos 1–3, aula par = tópicos 4–6 + resumo do módulo.
// Uso: node tools/complementar.mjs            → grava context/complementar/aula-N.html e context/v2-outline.md
//      node tools/complementar.mjs --injeta   → substitui o <details class="complementar"> de cada aulas/aula-N.html
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { T1 } from './v2src/content-t1.mjs';
import { T2 } from './v2src/content-t2.mjs';
import { T3 } from './v2src/content-t3.mjs';

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const trilhas = [[T1, 'emerald'], [T2, 'blue'], [T3, 'purple']];
const modulos = trilhas.flatMap(([T, color]) => T.modules.map(m => ({ m, t: { color } })));

// Palavras da lista-sentinela do v6 que aparecem no texto do v2, trocadas pela palavra comum.
const TROCAS = [
  [/\bpipelines? propriet[áa]ri[oa]s?\b/gi, 'cadeia de etapas própria'],
  [/\bpipelines?\b/gi, 'cadeia de etapas'],
  [/\bworkflows?\b/gi, 'rotina de trabalho'],
  [/\bplugins?\b/gi, 'recurso embutido'],
  [/\bscripts?\b/gi, 'rotina automática'],
  [/\bAPIs?\b/g, 'conexão entre sistemas'],
  [/\bdeploys?\b/gi, 'publicação'],
  [/\bsetups?\b/gi, 'ambiente'],
  [/\bframeworks?\b/gi, 'estrutura'],
  [/\buploads?\b/gi, 'envio'],
  [/\bdownloads?\b/gi, 'baixa'],
  [/\blogins?\b/gi, 'entrada na conta'],
  [/\bbackups?\b/gi, 'cópia de segurança'],
  [/\boutputs?\b/gi, 'resultado'],
  [/\binputs?\b/gi, 'entrada'],
  [/\bservidor(es)?\b/gi, 'computador na nuvem'],
  [/\binstal(\w*)/g, 'ativ$1'],
  [/\bInstal(\w*)/g, 'Ativ$1'],
  [/\bum onboarding\b/g, 'uma entrada no produto'],
  [/\bo onboarding\b/gi, 'a entrada no produto'],
  [/\bOnboarding\b/g, 'Entrada no produto'],
  [/\bonboarding\b/g, 'entrada no produto'],
  [/\bum reposit[óo]rio\b/gi, 'uma pasta do projeto'],
  [/\breposit[óo]rios?\b/gi, 'pasta do projeto'],
  [/\bthreads\b/gi, 'conversas'],
  [/\bthread\b/gi, 'conversa'],
  [/\bterminal\b/gi, 'tela de comandos'],
  [/\bGitHub\b/g, 'site de código'],
  [/\bGit\b/g, 'histórico de versões'],
  [/\bJSON\b/g, 'arquivo de dados'],
  [/\bCLI\b/g, 'programa de linha de comando'],
  [/\bcommits?\b/gi, 'versão salva'],
  [/\bbranch(es)?\b/gi, 'versão paralela'],
  [/\bdiret[óo]rios?\b/gi, 'pasta'],
];
const semJargao = s => TROCAS.reduce((a, [re, to]) => a.replace(re, to), s);

function aula(n) {
  const g = Math.floor((n - 1) / 2);
  const { m, t } = modulos[g];
  const metade = (n - 1) % 2;
  const tops = m.topics.slice(metade * 3, metade * 3 + 3);
  const secs = tops.map(tp => {
    const corpo = tp.body(t).join('');
    return `<section class="comp-sec"><h3>${tp.title}</h3><p><i>${tp.sub}</i></p>` +
      `<h4>O que é</h4><p>${tp.what}</p><h4>Por que aprender</h4><p>${tp.why}</p>` +
      `<h4>Conceitos-chave</h4><p>${tp.keys}</p>${corpo}</section>`;
  });
  if (metade === 1 && m.summary?.length) {
    secs.push(`<section class="comp-sec"><h3>Resumo do módulo ${m.id.replace('-', '.')} · ${m.title}</h3><ul>` +
      m.summary.map(([h, s]) => `<li><b>${h}:</b> ${s}</li>`).join('') + '</ul></section>');
  }
  const titulos = tops.map(tp => tp.title).join(' · ');
  const html = `<details class="complementar">
  <summary>Material complementar · ${titulos}<small>Texto completo destes tópicos no curso v2. Não conta no tempo da aula.</small></summary>
  ${secs.join('\n  ')}
</details>`;
  return { html: semJargao(html), m, tops };
}

const dir = path.join(raiz, 'context', 'complementar');
fs.mkdirSync(dir, { recursive: true });
let outline = '# Conteúdo v2 por aula do v6\n\nGerado por tools/complementar.mjs. Fonte: ~/projetos/produtos-era-ia/build/content-t*.mjs\n';
for (let n = 1; n <= 18; n++) {
  const { html, m, tops } = aula(n);
  fs.writeFileSync(path.join(dir, `aula-${n}.html`), html + '\n');
  outline += `\n## Aula ${n} — módulo v2 ${m.id} ${m.title} (${m.punch})\n` +
    tops.map(tp => `- **${tp.title}** — ${tp.sub}. ${tp.what}`).join('\n') + '\n';
  if (process.argv.includes('--injeta')) {
    const f = path.join(raiz, 'aulas', `aula-${n}.html`);
    if (!fs.existsSync(f)) continue;
    let a = fs.readFileSync(f, 'utf8');
    if (/<details class="complementar">[\s\S]*?<\/details>/.test(a)) {
      a = a.replace(/<details class="complementar">[\s\S]*?<\/details>/, () => html);
    } else {
      a = a.replace(/<nav class="lnav">/, () => html + '\n<nav class="lnav">');
    }
    fs.writeFileSync(f, a);
    console.log('injetado aula', n);
  }
}
fs.writeFileSync(path.join(raiz, 'context', 'v2-outline.md'), outline);
console.log('ok: 18 complementares + outline');
