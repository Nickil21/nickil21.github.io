---
layout: single
classes: wide
header:
  overlay_image: /assets/images/Edinburgh-First-Old-College-Quad.jpg
  overlay_filter: "0.5"
  #actions:
  #  - label: "CV"
  #    url: "/files/nickil21_cv.pdf"
  #  - label: "CONTACT"
  #    url: "/contact/"
permalink: /
excerpt: "Welcome to my personal website!"
title: "Nickil Maveli"
author_profile: true
show_tweet: false
---
# About Me
I am a PhD student at the [Institute for Language, Cognition and Computation](http://web.inf.ed.ac.uk/ilcc/) (School of Informatics)
academic unit of the [University of Edinburgh](https://www.ed.ac.uk/). My PhD studies is fully-funded by the UKRI CDT in Natural Language Processing Scholarship. I am grateful to be supervised by Prof. [Shay Cohen](http://homepages.inf.ed.ac.uk/scohen/) and Prof. [Antonio Vergari](http://nolovedeeplearning.com/).

My broad interests are in the intersection of Machine Learning, Natural Language Processing, and Information Retrieval.
Specifically, I am currently interested in unsupervised syntactic parsing, semi-supervised learning,
interpretability and robustness of machine learning algorithms, and understanding social inequality and bias in language.

During the summer of 2021, I worked with [Red Hen Lab](https://www.redhenlab.org/) and [FrameNet Brazil](https://www2.ufjf.br/framenetbr-en/) as a [Google Summer of Code](https://summerofcode.withgoogle.com/) student. Previously, I worked at [Cookpad](https://cookpad.com/uk) and [Niki](https://en.wikipedia.org/wiki/Niki.ai) on building NLP capabilities for a recipe-sharing platform and a conversational AI system, respectively. In addition, I actively participated in crowd-sourced machine learning contests for several years, placing in the money on multiple occasions.

<!-- [Academic CV <i class="fas fa-file-pdf"></i>](/files/nickil_cv.pdf){: .btn .btn--info}{:target="_blank"} -->
<!-- [Industry resume <i class="fas fa-file-pdf"></i>](/files/nickil_resume.pdf){: .btn .btn--info}{:target="_blank"} -->


<!-- {% capture notice %}
<span style="font-size:1.25em"><b>NOTE: </b>I am currently open for research internship roles in the area of NLP.
Please [contact me](/contact/) if there are relevant openings.</span>
{% endcapture %} -->

<!-- <div class="notice--success">{{ notice | markdownify }}</div> -->

# News
<table>
{% for article in site.data.recent-news %}
<tr>
{% include recent-news.html %}
</tr>
{% endfor %}
</table>

<style>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<div class="center">
<a href="/news" class="btn btn--info">See more <i class="fas fa-external-link-alt"></i></a>
</div>


<!-- {% include carousel.html height="25" unit="%" duration="10" %} -->


<!---
[![EdinburghNLP](https://edinburghnlp.inf.ed.ac.uk/wp-content/uploads/2017/06/edinburghnlp_logo_smallish-1.png)](https://edinburghnlp.inf.ed.ac.uk/index.php/people/){:target="_blank"}
-->