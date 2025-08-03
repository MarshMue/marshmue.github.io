---
layout: default
title: Writing
---

<h1>Writing</h1>


{% assign sorted_events = site.writing | sort: 'date' %}
{% assign sorted_events = sorted_events | reverse %}
<div class="blog">
<ul class="spaced-list">
  {% for post in sorted_events%}
    <li>
      <h2><a href="{{ post.url }}"><span class="text-accent">({{ post.date | date: "%Y" }})</span> {{ post.title }}</a></h2>

    </li>
  {% endfor %}
</ul>
</div>
