---
layout: page
permalink: /blog/
title: blog
description: An exploration of textual change and medical history
nav: true
nav_order: 3
---

To follow these posts, add <a href="{{ '/feed.xml' | absolute_url }}">{{ '/feed.xml' | absolute_url }}</a> to an RSS feed reader (for example [Feedly](https://feedly.com) or a browser add-on).

<ul class="tag-list on-light">
{%- for tag in site.display_tags %}
  <li><a href="{{ tag | slugify | prepend: '/blog/tag/' | append: '/' | relative_url }}">{{ tag | replace: '_', ' ' }}</a></li>
{%- endfor %}
</ul>

{% include post-list.html %}
