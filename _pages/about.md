---
layout: single
classes: wide
header: 
  overlay_image: /assets/images/Edinburgh-First-Old-College-Quad.jpg
  overlay_filter: "0.5" 
  actions:
    - label: "CV"
      url: "/files/nickil21_cv.pdf"
    - label: "CONTACT"
      url: "/contact/"
permalink: /
excerpt: "Welcome to my personal website!"
title: "Nickil Maveli"
author_profile: true
show_tweet: false
---
# About Me
I am a MSc (Research) student at the [Institute for Language, Cognition and Computation](http://web.inf.ed.ac.uk/ilcc) (School of Informatics)
academic unit of the [University of Edinburgh](https://www.ed.ac.uk/). I am grateful to be supervised by [Prof. Shay Cohen](http://homepages.inf.ed.ac.uk/scohen/).
My broad interests are in the intersection of Machine Learning, Natural Language Processing, and Information Retrieval. 

Previously, I worked at [niki.ai](http://niki.ai/) on building NLP capabilities for a conversational AI system. 
For several years, I actively participated in crowd-sourced machine learning contests, placing in the money on multiple occasions.

{% capture notice %}
<span style="font-size:1.2em"><b>NOTE: </b>I am currently open for research internship roles in the area of NLP. 
Please [contact me](/contact/) if there are relevant openings.</span>
{% endcapture %}
<div class="notice--warning">{{ notice | markdownify }}</div>

# News
<table>
{% for article in site.data.news %}
<tr>
{% include news.html %}
</tr>
{% endfor %}
</table>

[![EdinburghNLP](https://edinburghnlp.inf.ed.ac.uk/wp-content/uploads/2017/06/edinburghnlp_logo_smallish-1.png)](https://edinburghnlp.inf.ed.ac.uk/index.php/people/){:target="_blank"}
<a href="https://stackexchange.com/users/8254210/nickil-maveli"><img src="https://stackexchange.com/users/flair/8254210.png" width="208" height="58" alt="profile for Nickil Maveli on Stack Exchange, a network of free, community-driven Q&amp;A sites" title="profile for Nickil Maveli on Stack Exchange, a network of free, community-driven Q&amp;A sites" /></a>
