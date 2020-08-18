---
layout: single
classes: wide
permalink: /
title: ""
excerpt: "About me"
author_profile: true
show_tweet: false
---

# About Me
I am a MSc (Research) student at the [Institute for Language, Cognition and Computation](http://web.inf.ed.ac.uk/ilcc) (School of Informatics)
academic unit of the [University of Edinburgh](https://www.ed.ac.uk/). I am grateful to be supervised by [Prof. Shay Cohen](http://homepages.inf.ed.ac.uk/scohen/).
My broad interests are in the intersection of Machine Learning, Natural Language Processing, and Information Retrieval. 

Previously, I worked at [niki.ai](http://niki.ai/) on building NLP capabilities for a conversational AI system. 
For several years, I actively participated in crowd-sourced machine learning contests, placing in the money on multiple occasions.

# News
<table>
{% for article in site.data.news %}
<tr>
{% include news.html %}
</tr>
{% endfor %}
</table>