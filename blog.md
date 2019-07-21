---
layout: default
title: Blog
---
## Blog

<ul>
    {% for post in site.posts %}
    <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a> – <span>{{ post.date | date_to_long_string }}</span></li>
    {% endfor %}
</ul>