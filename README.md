# Portfolio — esqueleto

Base crua do projeto: Laravel 9 + Inertia.js + React + TypeScript + Tailwind.
(Fixado em Laravel 9 / PHP ^8.0.2 de propósito, pra rodar com o PHP 8.0.30
que já vem no XAMPP, sem precisar instalar outra versão do PHP.)
Nenhuma tela final ainda — é só a fundação com as dependências declaradas e a
"cola" entre backend e frontend funcionando (`/` renderiza uma página React
via Inertia).

## O que já está aqui

- **Backend**: `composer.json` com Laravel, Inertia, Sanctum, Ziggy — e já
  preparado para a seção de "jardim digital" (`league/commonmark`,
  `spatie/laravel-sluggable`, `spatie/laravel-tags`), inspirada em
  docs.forestry.md e garden.bradwoods.io.
- **Frontend**: `package.json` com React + TypeScript + Inertia + Tailwind,
  mais `react-markdown`, `remark-gfm` e `gray-matter` já prontos pro dia em
  que formos renderizar as notas em markdown.
- **`tailwind.config.js`**: paleta inicial (`moss`, `bark`, `roof`) só como
  ponto de partida puxando das referências visuais pixel art — não é a
  direção de arte final, é pra não começar com o cinza padrão do Tailwind.
- Uma migração `notes` já modelada (título, slug, corpo em markdown, estágio
  `seedling/growing/evergreen`), mas **sem Model nem Controller ainda** — só
  o esqueleto do banco.

## Setup local

Este ambiente aqui não tem PHP/Composer, então o `composer.json` foi escrito
à mão (não rodado). No seu ambiente local, com PHP 8.0.2+ (ex: o do XAMPP):

```bash
composer install
cp .env.example .env
php artisan key:generate

touch database/database.sqlite   # se for usar SQLite (default do .env.example)
php artisan migrate

npm install
npm run dev      # dev server do Vite
# em outro terminal:
php artisan serve
```

O `package-lock.json` já foi gerado e validado (rodei `npm install` aqui),
então `npm install` deve reproduzir exatamente essas versões.

## Próximos passos (fora do escopo desta leva)

- Implementar `Note` model + `GardenController` usando a migração `notes`.
- Layout/Design real (hero, tipografia, paleta definitiva) — ainda não
  entramos na fase de direção de arte, isso é só o alicerce técnico.
- Seção de projetos/portfólio propriamente dita.
