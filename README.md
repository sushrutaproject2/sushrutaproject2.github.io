# The Compendium of Suśruta in Time and Space — website

Source of <https://sushrutaproject2.github.io>, the website of Suśruta Project 2 (2025–2029).

It is a small, hand-made [Jekyll](https://jekyllrb.com) site in the same design as
[Project 1](https://sushrutaproject1.github.io). It replaced an al-folio setup in October 2026.
Every push to `main` is built and published by `.github/workflows/deploy.yml`
(about a minute).

## Where things are

| What | Where |
|---|---|
| Blog posts | `_posts/` (file name `YYYY-MM-DD-title.md`) |
| Pages | `_pages/`, project pages in `_projects/`, people in `_participants/` |
| Bibliography | `_bibliography/papers.bib` |
| Images and PDFs | `assets/img/`, `assets/pdf/` |
| Site settings | `_config.yml` |
| Menu | front matter of pages: `nav: true`, `nav_order:`, and `dropdown: true` with `children:` |
| Top strip linking the Suśruta sites | `_data/navigation.yml` (keep identical across the sites) |
| Design | `assets/css/style.scss` (colours and fonts in the first block) |
| Page templates | `_layouts/`, `_includes/` |

## Writing a blog post

```markdown
---
title: A visit to the Kaiser Library
date: 2026-10-10
author: Dominik Wujastyk
tags: manuscripts KL-699 Nepal
description: One-line summary shown in the blog list
---

Text, with citations such as {% cite meul-hist -l IIA: 122–125 %}.

{% include figure.liquid path="assets/img/photo.jpg" class="img-fluid rounded z-depth-1"
   caption="Caption text." zoomable=true %}

## Bibliography

{% bibliography --cited --group_by none %}
```

## Citations

[jekyll-scholar](https://github.com/inukshuk/jekyll-scholar) formats citations from
`papers.bib`. The citation style is set under `scholar: style:` in `_config.yml`
(currently `apa`; `chicago-author-date` is another option).
Entries with `selected = {true}` appear on the home page.
Fields such as `pdf`, `abstract`, `selected` are used by the site and hidden from the
BibTeX box (list in `_config.yml`, `filtered_bibtex_keywords`).

## Search

The search page uses [Pagefind](https://pagefind.app). Its index is made in the workflow
after Jekyll has built the site, so search does not work in a local preview.

## Previewing locally (optional)

With Ruby installed: `bundle install`, then `bundle exec jekyll serve`, and open
<http://localhost:4000>.
