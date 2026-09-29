#!/usr/bin/env bash
# Gera as cenas de tools/cenas.tsv (id<TAB>descrição), 4 em paralelo, pulando as que já existem.
cd "$(dirname "$0")/.."
G=~/.claude/skills/formato-curso-v6/scripts/gerar-cena.py
while IFS=$'\t' read -r id desc; do
  [ -n "$id" ] && [ ! -f "assets/img/$id.webp" ] && printf '%s\t%s\n' "$id" "$desc"
done < tools/cenas.tsv | xargs -P4 -d '\n' -I{} bash -c 'id=$(cut -f1 <<<"$1"); desc=$(cut -f2- <<<"$1"); python3 '"$G"' "assets/img/$id.webp" "$desc" > "context/cenas-log/$id.log" 2>&1; echo "$id: $?"' _ {}
