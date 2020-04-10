---
classes: wide
author_profile: false
toc: true
title: "The Risk of Racial Bias in Hate Speech Detection"
excerpt: "Investigate how annotators’ insensitivity to differences in dialect can lead to racial bias in automatic hate speech detection models, potentially amplifying harm against minority populations."
date: 2020-04-05
last_modified_at: 2020-04-08
permalink: "/blog/nlp-papers-summary/the-risk-of-racial-bias-in-hate-speech-detection/"
header:
  teaser: "assets/images/nlp_papers_summary/pic_1.png"
category: 
  - NLP Papers Summary
tags:
  - Hate Speech Detection
  - ACL  
---

{% include figure image_path="/assets/images/nlp_papers_summary/pic_1.png"
 alt="this is a placeholder image" 
 caption="Phrases in African American English (AAE),
          their non-AAE equivalents, and
          toxicity scores from [PerspectiveAPI](http://perspectiveapi.com){:target='_blank'}." %}

## PDF - [Paper](https://www.aclweb.org/anthology/P19-1163.pdf){:target="_blank"} by {% cite sap-etal-2019-risk %}

## Introduction

* Goal of Hate Detection: _Try and make the internet less toxic_.
* Toxicity ML models are generally trained on text-only annotations and don't have information about the speaker.
* Current datasets ignore social context of speech, like - identity of speaker, dialect of English.
* Ignoring these nuances risks harming minority populations by suppressing inoffensive speech.

Problem
---

* Severe Racial bias in hate speech detection.
* Do ML models acquire this racial bias from datasets?
* Can annotation task design affect these racial biases?

## How it Solves

It uses Dialect as a proxy for racial identity. African American English (AAE) dialect is used in the paper. 
Lexical detector by {% cite blodgett-etal-2016-demographic %} was used to infer the presence of AAE.

To find out whether ML models are affected by racial bias in datasets, train/test classifiers on 2
corpora ( *TWT-HATEBASE*, *TWT-BOOTSTRAP* ) used in hate detection systems were performed. A held-out set broken
down by dialect group was used to assess the performance of these classifiers by counting the number of 
mistakes made.

Predictions by both the classifiers were biased against AAE tweets as shown by the following results:

{: .notice}
**46%** of non-offensive AAE tweets were mistaken for offensive compared to **9%** of White.<br><br>
**26%** of non-abusive AAE tweets were mistaken for abusive compared to **5%** of White.

AAE tweets and tweets by Black folks were more often flagged as toxic. This racial bias generalizes to 
other Twitter corpora.

### How to reduce the bias?

Answer is by changing the task of annotation. 

To test this hypothesis, 350 AAE tweets stratified by dataset labels were 
given to Amazon Mechanical Turkers. 

The annotation was done in a three-fold manner:

1. only text. (**55%** were labelled as offensive)
2. text + dialect information. (**44%** were labelled as offensive)
3. text + dialect + race information. (**44%** were labelled as offensive)

{% include figure image_path="/assets/images/nlp_papers_summary/pic_2.png"
 alt="this is a placeholder image" 
 caption="Proportion (in %) of offensiveness annotations of AAE tweets in control, dialect, and race priming conditions." %}

## Takeaways

* Evidence of racial bias in existing hate detection corpora.
* Bias will propagate downstream through ML models.
* Priming annotators influences label of offensiveness.
* In general, hate speech language is highly subjective and contextual. Factors like slang,
dialects, slurs, etc must be taken into consideration.

## References

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
