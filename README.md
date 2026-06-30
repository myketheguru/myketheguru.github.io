# myketheguru.github.io

Personal site / research blog — **the powers and limits of representation.** Built with Jekyll +
the `minima` theme, served by GitHub Pages at <https://myketheguru.github.io> once pushed to a repo
named `myketheguru.github.io`.

## Structure
- `_config.yml` — site config (title, theme, plugins).
- `index.md` — the home page (intro + the essay series in reading order).
- `about.md` — the research program.
- `_posts/` — the long-form essays (one Markdown file per essay, with Jekyll front matter).

## Add a new essay
Create `_posts/YYYY-MM-DD-slug.md` with front matter:
```
---
layout: post
title: "Part N: Title"
date: YYYY-MM-DD 12:00:00 +0000
permalink: /slug/
---
```
then write the body in Markdown. Push to the default branch; GitHub Pages rebuilds automatically.

## Local preview (optional)
`gem install bundler jekyll` → `bundle exec jekyll serve` (needs a `Gemfile` with `github-pages`).
Not required — GitHub Pages builds on push.
