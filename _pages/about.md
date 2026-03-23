---
layout: single
classes: wide
header:
  overlay_image: /assets/images/Edinburgh-First-Old-College-Quad.jpg
  overlay_filter: "0.5"
permalink: /
description: "Nickil Maveli - PhD student in NLP at the University of Edinburgh. Research on benchmarking and evaluation of LLMs for code understanding and generation."
excerpt: "Welcome to my personal website!"
title: "Nickil Maveli"
author_profile: true
show_tweet: false
---
# About Me
I am a final-year PhD student at the [Institute for Language, Cognition and Computation](http://web.inf.ed.ac.uk/ilcc/) (School of Informatics)
academic unit of the [University of Edinburgh](https://www.ed.ac.uk/). My PhD studies is fully-funded by the UKRI CDT in Natural Language Processing Scholarship. I am grateful to be supervised by Prof. [Shay Cohen](http://homepages.inf.ed.ac.uk/scohen/) and Prof. [Antonio Vergari](http://nolovedeeplearning.com/). I am also a member of the [Cohort](https://bollin.inf.ed.ac.uk/) and [APRIL](https://april-tools.github.io/) research labs.

My broad interests are in the intersection of Machine Learning, Natural Language Processing, and Information Retrieval.
Specifically, I am currently interested in evaluating the robustness of language models in comprehending semantics for generating code.

During the summer of 2021, I worked with [Red Hen Lab](https://www.redhenlab.org/) and [FrameNet Brazil](https://www2.ufjf.br/framenetbr-en/) as a [Google Summer of Code](https://summerofcode.withgoogle.com/) student. Previously, I worked at [Cookpad](https://cookpad.com/uk) and [Niki](https://en.wikipedia.org/wiki/Niki.ai) on building NLP capabilities for a recipe-sharing platform and a conversational AI system, respectively. In addition, I actively participated in crowd-sourced machine learning contests for several years, placing in the money on multiple occasions.


# News
<table>
{% for article in site.data.news limit:7 %}
<tr>
{% include recent-news.html %}
</tr>
{% endfor %}
</table>

<div class="center fade-in">
<a href="/news" class="btn btn--info">See more <i class="fas fa-external-link-alt"></i></a>
</div>
