---
author_profile: false
toc: true
toc_sticky: true 
title: "Do You Know That Florence Is Packed with Visitors? 
Evaluating State-of-the-art Models of Speaker Commitment"
excerpt: "Inferring speaker commitment (aka event factuality) is crucial for information extraction and question answering."
header:
  teaser: "assets/images/nlp_papers_summary/pic_11.png"
date: 2020-04-16 
last_modified_at: 2020-04-17
permalink: "/blog/nlp-papers-summary/do-you-know-that-florence-is-packed-with-visitors%3F-evaluating-state-of-the-art-models-of-speaker-commitment/"
category: 
  - NLP Papers Summary
tags:
  - Speaker Commitment
  - ACL    
---

{% include figure image_path="/assets/images/nlp_papers_summary/pic_11.png"
 alt="this is a placeholder image" %}

PDF - [Paper](https://www.aclweb.org/anthology/P19-1412.pdf){:target="_blank"} by {% cite jiang-de-marneffe-2019-know %}
{: .notice--info}

# Introduction
Prediction of speaker commitment is the task of determining to what extent the speaker is 
committed to an event in a sentence as actual, non-actual, or uncertain. This matters for downstream
NLP applications, such as information extraction or question answering.

For eg: <span style="color:teal">Florence is the most beautiful city I've ever seen."</span> (Speaker **is committed** to the fact)<br>Compared to:
<span style="color:teal">"Florence might be the most beautiful city I've ever seen."</span> (Speaker **is not as committed** to the fact)

{% include figure image_path="/assets/images/nlp_papers_summary/pic_12.png"
 alt="this is a placeholder image" %}

Speaker is committed - <span style="color:teal">"Do you **know** that Florence is packed with visitors?"</span>.<br> 
Mainly, due to "know" being a Factive verb has a tendency to suggest that the embedding clause is true.<br>

Speaker is not so committed - <span style="color:teal">"Do you **think** that Florence is packed with visitors?"</span>.<br>
Mainly, due to "think" being a Non-Factive verb has a tendency to suggest that the embedding clause is neither true nor false.

Speaker is not committed -  <span style="color:teal">"I **don't know** that Florence is packed with visitors."</span><br>
Mainly, due to "don't know" being a Neg-raising (negation) has a tendency to suggest that the embedding clause is false.

# Problem
Evaluating SOTA models of Speaker Commitment.

# How it Solves
They explore the hypothesis that linguistic deficits drive the error patterns of speaker commitment 
models by analyzing the linguistic correlations of model errors on a challenging naturalistic dataset.

## Dataset
The CommitmentBank corpus is used which consists of 1,200 naturally occurring items involving clause-embedding
verbs under four entailment-canceling environments (negations, modals, questions, conditionals).

For each item, speaker commitment judgments were gathered on Mechanical Turk from at least eight 
native English speakers. Participants judged whether or not the speaker is certain that the 
content of the complement in the target sentence is true, using a Likert scale labeled at 3 points 
(**+3**/speaker is certain that the complement is true, **0**/speaker is not certain whether 
it is true or false, **-3**/speaker is certain that it is false). 
They took the mean annotations of each item as gold score of speaker commitment.

## Models
1) **Rule-based TruthTeller** ([Stanovsky et al., 2017](https://www.aclweb.org/anthology/P17-2056.pdf))

It uses a top-down approach on a dependency tree and predicts speaker commitment score in [−3, 3] 
according to the implicative signatures of the predicates, and whether the predicates are under the 
scope of negation and uncertainty modifiers. For example, **refuse $\mathcal{p}$** entails **$\neg{\mathcal{p}}$**, 
so the factuality of its complement $\mathcal{p}$ gets flipped if encountered.

2) **BiLSTM-based models** ([Rudinger et al., 2018](https://www.aclweb.org/anthology/N18-1067.pdf))

* Linear: encodes the sentence left-to-right and right-to-left.
* Tree: encodes the dependency tree of the sentence top-down and bottom-up.
* Hybrid: combination of the two.

## Metrics
Task is to predict a gradience of commitment  $\in [-3, 3]$
* Pearson R Correlation: Capture the variability of the model. (Higher Better)
* Mean Absolute Error: Measures the absolute fit of the model. (Lower Better)

# Results
{% include figure image_path="/assets/images/nlp_papers_summary/pic_13.png"
 alt="this is a placeholder image" %}

Hybrid model predictions are mostly positive, whereas the rule-based model predictions are clustered at −3
and +3. This suggests that the rule-based model cannot capture the gradience present in commitment judgments, 
while the hybrid model struggles to recognize negative commitments. The rule-based model predicts $+$ by default 
unless it has clear evidence (e.g., negation) for negative commitment. This behavior is reflected in the 
high precision for $-$. Both models perform well on $+$ and $-$, but neither is able to identify no commitment ($o$).

## Embedding environment
The rule-based model can only capture inferences involving negation ($r$ = 0.45), while the hybrid model
performs more consistently across negation, modal, and question ($r$ ∼ 0.25). Both models
cannot handle inferences with conditionals.

## Genre
Both models achieve the best correlation on dialog (Switchboard), and the worst on
newswire (WSJ). The good performance of the rule-based model on dialog could be due to the
fact that 70% of the items in dialog are in a negation environment with a nonfactive verb.

## Factive embedding verb
Both models get better MAE on factives, but better correlation on nonfactives. The improved MAE of
the rule-based model might be due to its use of factive/implicative signatures. However, the poor
correlations suggest that neither model can robustly capture the variability in inference which
exists in sentences involving factive/nonfactive verbs.

## Neg-raising
There is almost no correlation between both models' predictions and gold judgments
suggesting that the models are not able to capture neg-raising inferences. 

# Limitations and Future Work
Models are not able to generalize to other linguistic environments such as conditional, modal,
and neg-raising, which display inference patterns that are important for information extraction. Both
models are able to identify the polarity of commitment, but cannot capture its gradience. To perform robust 
language understanding, models will need to incorporate more linguistic foreknowledge and be able to generalize
to a wider range of linguistic constructions.
 
# Takeaways
* Conditionals, factive verbs, neg-raisings are hard for models.
* Models can identify polarity, but not gradience.
* Linguistically motivated models scale more successfully.

# References
{% bibliography --cited %}

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
