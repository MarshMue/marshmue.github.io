---
layout: default
title: Journal
---

<h1>Public Journal Archive</h1>

This was an experiment I ran in the first half of 2022. I found that I preferred to journal privately to feel more free with what I wrote. It was a fun experience and I am leaving it up for posterity. I am hoping to return to more public writing with my writing section. 

<ul>
  {% for post in site.posts %}
    <li>
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      {{ post.content }}
    </li>
  {% endfor %}
</ul>
