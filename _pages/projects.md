---
layout: page
title: project components
permalink: /projects/
nav: true
nav_order: 1
---

{%- comment -%} One card per file in _projects/, in the order set by "importance". {%- endcomment -%}
{% assign sorted_projects = site.projects | sort: "importance" %}
<div class="card-grid">
{%- for project in sorted_projects %}
  <a class="project-card" href="{{ project.url | relative_url }}">
    {%- if project.img %}
    <img src="{{ project.img | relative_url }}" alt="" loading="lazy">
    {%- endif %}
    <span class="card-title">{{ project.title }}</span>
    {%- if project.description %}<span class="card-text">{{ project.description }}</span>{% endif %}
  </a>
{%- endfor %}
</div>
