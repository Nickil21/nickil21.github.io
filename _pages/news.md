---
layout: single
classes: wide
permalink: /news/
title: News Archive
description: "Latest news and updates from Nickil Maveli including paper acceptances and research milestones."
author_profile: true
---

<table>
{% for article in site.data.news %}
<tr>
{% include news.html %}
</tr>
{% endfor %}
</table>
