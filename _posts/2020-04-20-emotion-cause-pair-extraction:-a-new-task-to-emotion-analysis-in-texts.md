---
toc: true
title: "Emotion-Cause Pair Extraction: A New Task to Emotion Analysis in Texts"
excerpt: "Aims to extract the potential pairs of emotions and 
corresponding causes in a document."
date: 2020-04-20
last_modified_at: 2020-04-20
permalink: "/blog/nlp-papers-summary/emotion-cause-pair-extraction:-a-new-task-to-emotion-analysis-in-texts/"
header:
  overlay_filter: 0.5
  overlay_image: /assets/images/joao-silas-I_LgQ8JZFGE-unsplash.jpg
  teaser: "/assets/images/nlp_papers_summary/pic_21.png"
  actions:
    - label: "<i class='fas fa-file-pdf'></i> Read Paper"
      url: "/blog/nlp-papers-summary/emotion-cause-pair-extraction:-a-new-task-to-emotion-analysis-in-texts/#references"  
    - label: "<i class='fas fa-code'></i> View Code"
      url: "https://github.com/NUSTM/ECPE"  
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
category: 
  - NLP Papers Summary
tags:
  - Emotion Cause Extraction
  - ACL  
---
{% include figure image_path="/assets/images/nlp_papers_summary/pic_21.png"
 alt="this is a placeholder image" 
 caption="An example showing the difference between the ECE task and the ECPE task." %}
         
# Introduction
Emotion cause extraction (ECE) aims at extracting potential causes that lead to emotion expressions in text.

In the above figure, taken from the corpus by ([Gui et al., 2016](https://www.aclweb.org/anthology/D16-1170.pdf)),
there are five clauses in a document. The emotion <span style="color:red">happy</span> is contained in the fourth clause.
The authors denote this clause as emotion clause, which refers to
a clause that contains emotions. It has two corresponding causes: 
<span style="color:blue">a policeman visited the old man with the lost money</span> 
in the second clause,
<span style="color:limegreen">and told him that the thief was caught</span> in the third clause.
The authors denote them as cause clause, which refers to a clause that contains causes.

# Problem
* Emotion must be annotated before cause extraction in ECE, which greatly limits its applications in 
real-world scenarios.
* The way to first annotate emotion and then extract the cause ignores the fact that they are 
mutually indicative.

# How it Solves
The authors propose a new task: <u>E</u>motion <u>C</u>ause <u>P</u>air <u>E</u>xtraction (ECPE), 
which aims to extract all potential pairs of emotions and corresponding causes in a document.

For example, given the annotation of emotion: <span style="color:red">happy</span>, the goal of ECE
is to track the two corresponding cause clauses: <span style="color:blue">a policeman visited the old man with the lost money</span>
and <span style="color:limegreen">and told him that the thief was caught</span>.
While in the ECPE task, the goal is to directly extract all pairs of emotion clause and cause clause,
including (**The old man was very** <span style="color:red">happy</span>, <span style="color:blue">a policeman visited the old man with the lost money</span>)
and (**The old man was very** <span style="color:red">happy</span>, <span style="color:limegreen">and told him that the thief was caught</span>), 
without providing the emotion annotation <span style="color:red">happy</span>.

## Approach
The authors propose a two-step approach to address this new ECPE task.
## 1. Individual Emotion and Cause Extraction
Convert the emotion-cause pair extraction task into emotion extraction and cause extraction respectively.
Two kinds of multi-task learning networks are proposed to model the two sub-tasks in a unified framework, with
the goal to extract a set of emotion clauses $$E = \{c_1^e, ... , c_m^e\}$$
and a set of cause clauses $$C = \{c_1^c, ... , c_n^c\}$$ for each document.

### 1.a) Independent Multi-task Learning
A document contains multiple clauses: $$d = [c_1, c_2, ..., c_{|d|}]$$, 
and each $c_i$ also contains multiple words $c_i = [w_{i,1}, w_{i,2}, ..., w_{i,|ci|}]$. 

To capture such a "word-clause-document" structure, the authors employ a Hierarchical Bi-LSTM network which
contains two layers. The lower layer consists of a set of word-level Bi-LSTM modules, each of which 
corresponds to one clause, and accumulate the context information for each word of the clause.
The upper layer consists of two components: one for emotion extraction and another for cause
extraction. Each component is a clause-level BiLSTM which receives the 
independent clause representations $[s_1, s_2, ..., s_{|d|}]$ obtained at the lower
layer as inputs. 

{% include figure image_path="/assets/images/nlp_papers_summary/pic_22.png"
 alt="this is a placeholder image" 
 caption="The Model for Independent Multi-task Learning (Indep)." %}
 
### 1.b) Interactive Multi-task Learning 
To capture the correlation between emotion and cause, Interactive Multi-Task Learning network was proposed.
Compared with Independent Multi-task Learning, the lower layer of Inter-EC is unchanged, and
the upper layer consists of two components, which
are used to make predictions for emotion extraction task and cause extraction task in an interactive manner. 
Each component is a clause-level BiLSTM followed by a softmax layer.
{% include figure image_path="/assets/images/nlp_papers_summary/pic_23.png"
 alt="this is a placeholder image" 
 caption="Two Models for Interactive Multi-task Learning: (a) Inter-EC, which uses emotion extraction to improve
cause extraction (b) Inter-CE, which uses cause extraction to enhance emotion extraction." %} 
 
## 2. Emotion-Cause Pairing and Filtering
Pair the emotion set $E$ and the cause set $C$ by applying a [Cartesian product](https://en.wikipedia.org/wiki/Cartesian_product)
to them. This yields a set of candidate
emotion-cause pairs. The authors finally trained a filter to eliminate the pairs that do not contain
a [causal relationship](https://en.wikipedia.org/wiki/Causality) between emotion and cause.

## Metrics
The authors stochastically selected $90\%$ of the data for training and the remaining $10\%$ for testing. 
In order to obtain statistically credible results, they repeated the experiments $20$ times and 
reported the average result. Precision, recall, and F1
score were used as the metrics for evaluation.

# Results
F1 scores of all models on the ECPE task are significantly improved by adopting the pair filter. These results demonstrate the effectiveness of the pair filter.
Specifically, by introducing the pair filter, some of
the candidate emotion-cause pairs in $P_{all}$ are filtered out, which may result in a decrease in the
recall rate and an increase in precision. 

The precision scores of almost all models are greatly improved
(more than $$7\%$$), in contrast, the recall rates drop very little (less than
$$1\%$$), which lead to the significant improvement in F1 score.

<i>keep_rate</i> indicates the proportion of emotion-cause pairs in $P_{all}$ that are
finally retained after pair filtering.

{% include figure image_path="/assets/images/nlp_papers_summary/pic_24.png"
 alt="this is a placeholder image" 
 caption="Experimental results of all proposed models and variants using precision, recall, and F1-measure as
metrics on the ECPE task with or without the pair filter." %} 

# Limitations and Future Work
* Goal of ECPE is not direct.
* Mistakes made in the first step will affect the results of the second step. 

In the future work, a one-step model that directly extracts the emotion-cause pairs would be more beneficial.

# Takeaways
* ECPE solves the shortcomings of the traditional ECE task that depends on
the annotation of emotion before extracting cause, and allows emotion cause analysis to be applied to real-world scenarios.
* Approach achieves comparable cause extraction performance to traditional ECE methods and
removes the emotion annotation dependence.

# References
{% bibliography --query @*[title= {{ page.title }}] %}

---
<!-- Begin Mailchimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}
	/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
<form action="https://github.us19.list-manage.com/subscribe/post?u=011e5e92fe856b3d318b414ad&amp;id=f8ae890e5c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	<label for="mce-EMAIL">Liked this article and want to hear more?</label>
	<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_92fe86c389878585bc87837e8_50543deff9" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>
<!--End mc_embed_signup-->
<br>
<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><i style="font-size:12px">This work is licensed under a </i><a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><i style="font-size:12px">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</i></a>.
