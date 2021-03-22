---
layout: single
classes: wide
permalink: /news
title: "News"
author_profile: true
---

<table>
{% for article in site.data.news %}
<tr>
{% include news.html %}
</tr>
{% endfor %}
</table>
