---
layout: default
title: Journal
---

<h1>Latest Posts</h1>

(Note: posts are lightly edited and likely to have typos)

<ul>
  {% for post in site.posts %}
    <li>
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
