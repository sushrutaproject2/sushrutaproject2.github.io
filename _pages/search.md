---
layout: page
permalink: /search/
title: search
description: Search the pages and blog posts of this website
sitemap: false
---

{%- comment -%}
  The search index (/pagefind/) is built after Jekyll by Pagefind, in the
  GitHub workflow. In a local "jekyll serve" preview the box stays empty.
{%- endcomment -%}
<link href="{{ '/pagefind/pagefind-ui.css' | relative_url }}" rel="stylesheet">
<div id="search"></div>
<noscript>Search needs JavaScript.</noscript>
<script src="{{ '/pagefind/pagefind-ui.js' | relative_url }}"></script>
<script>
  window.addEventListener("DOMContentLoaded", function () {
    if (window.PagefindUI) {
      var ui = new PagefindUI({ element: "#search", showSubResults: true, showImages: false });
      var q = new URLSearchParams(location.search).get("q");
      if (q) ui.triggerSearch(q);
    } else {
      document.getElementById("search").textContent = "The search index is built when the site is published.";
    }
  });
</script>
