// Substituto do build/lib.mjs do v2: renderiza os componentes do conteúdo v2 como HTML simples
// para o details.complementar do v6 (sem Tailwind, sem SVG, sem emoji decorativo).
const limpa = s => String(s)
  .replace(/\s+class="[^"]*"/g, '')
  .replace(/\s+data-inema-[a-z-]+="[^"]*"/g, '');
const li = arr => `<ul>${arr.map(i => `<li>${limpa(i)}</li>`).join('')}</ul>`;
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const c = {
  p: text => `<p>${limpa(text)}</p>`,
  concept: (t, { title, paras = [], bullets = [] }) =>
    `<h4>${limpa(title)}</h4>${paras.map(p => `<p>${limpa(p)}</p>`).join('')}${bullets.length ? li(bullets) : ''}`,
  grid2: (t, { okTitle, ok, badTitle, bad }) =>
    `<h4>${limpa(okTitle)}</h4>${li(ok)}<h4>${limpa(badTitle)}</h4>${li(bad)}`,
  steps: (t, { title, items }) =>
    `${title ? `<h4>${limpa(title)}</h4>` : ''}<ol>${items.map(s => `<li><b>${limpa(s.h)}.</b> ${s.sub ? limpa(s.sub) + '. ' : ''}${limpa(s.text)}</li>`).join('')}</ol>`,
  tip: ({ title = 'Dica prática', text }) => `<h4>${limpa(title)}</h4><p>${limpa(text)}</p>`,
  alert: ({ title = 'Armadilha comum', text }) => `<h4>${limpa(title)}</h4><p>${limpa(text)}</p>`,
  data: ({ title = 'O que os números dizem', items }) => `<h4>${limpa(title)}</h4>${li(items)}`,
  cards: (t, items) => `<ul>${items.map(i => `<li><b>${limpa(i.h)}.</b> ${limpa(i.text)}</li>`).join('')}</ul>`,
  table: (t, { headers, rows, caption = '' }) =>
    `${caption ? `<p>${limpa(caption)}</p>` : ''}<ul>${rows.map(r => `<li>${r.map((cell, i) => i === 0 ? `<b>${limpa(cell)}</b>` : `${limpa(headers[i])}: ${limpa(cell)}`).join(' · ')}</li>`).join('')}</ul>`,
  glossary: (t, items) => `<h4>Termos deste tópico</h4><ul>${items.map(([k, v]) => `<li><b>${limpa(k)}:</b> ${limpa(v)}</li>`).join('')}</ul>`,
  code: (t, { objective, code, verify }) =>
    `<h4>Experimente agora</h4><p>${limpa(objective)}</p><pre class="cmd"><code>${esc(code)}</code></pre><p><b>Como verificar:</b> ${limpa(verify)}</p>`,
  quiz: () => '',
  readToggle: () => '',
  figure: () => '',
};

// SVGs do v2 não entram no complementar (o visual do v6 é outro); só precisam existir.
export const svg = new Proxy({}, { get: () => () => '' });
export function setBlockPrefix() {}
