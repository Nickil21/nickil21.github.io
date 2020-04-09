---
layout: archive
classes: wide
permalink: /
title: ""
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
## About Me

My broad interests are in the intersection of Machine Learning, Natural Language Processing, and Information Retrieval.

## News

<table>
{% for article in site.data.news %}
<tr>
{% include news.html %}
</tr>
{% endfor %}
</table>