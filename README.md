# myketheguru.github.io

Personal site & portfolio for **Micheal Ezeoda** — engineer, technology consultant, and
independent researcher. Custom-built (no gem theme), served by GitHub Pages at
<https://myketheguru.github.io>.

## Structure
- `index.html` — the single-page portfolio (hero · about · expertise · experience · work · research · chess · contact).
- `_layouts/default.html` — the shell (nav, fonts, footer). `_layouts/post.html` — the essay page.
- `assets/css/style.css` — the whole design (dark editorial · Fraunces + Inter + Space Mono).
- `assets/js/main.js` — scroll-reveal + mobile nav (vanilla, no dependencies).
- `_posts/` — the long-form research essays (Markdown, rendered through `post.html`).

## Add a new essay
Create `_posts/YYYY-MM-DD-slug.md`:
```
---
layout: post
title: "Part N: Title"
date: YYYY-MM-DD 12:00:00 +0000
permalink: /slug/
---
```
Write the body in Markdown; it inherits the site styling. Push to the default branch — GitHub Pages
rebuilds automatically.

## Local preview (optional)
`bundle install` → `bundle exec jekyll serve`. Not required — Pages builds on push.
