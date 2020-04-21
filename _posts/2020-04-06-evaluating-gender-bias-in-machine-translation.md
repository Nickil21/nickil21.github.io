---
toc: true
title: "Evaluating Gender Bias in Machine Translation"
excerpt: "Devise an automatic gender bias evaluation method for eight target languages with grammatical gender, based on morphological analysis."
date: 2020-04-06
last_modified_at: 2020-04-08
permalink: "/blog/nlp-papers-summary/evaluating-gender-bias-in-machine-translation/"
header: 
  teaser: "/assets/images/nlp_papers_summary/pic_3.png"
category: 
  - NLP Papers Summary
tags:
  - Machine Translation
  - ACL   
---
{% include figure image_path="/assets/images/nlp_papers_summary/pic_3.png"
 alt="this is a placeholder image" %}

PDF - [Paper](https://www.aclweb.org/anthology/P19-1164.pdf){:target="_blank"} by {% cite stanovsky-etal-2019-evaluating %} and [Code](https://github.com/gabrielStanovsky/mt_gender){:target="_blank"}
{: .notice--info}

# Introduction
* Some languages encode grammatical gender - Spanish, Italian, Russian, etc. One word for male, other word for female.
* Other languages are gender neutral - English, Turkish, Finnish. One word for both male and female.
* When translating between genderless to gender-ed languages, translator needs to take gender into account, and make decisions.
{% include figure image_path="/assets/images/nlp_papers_summary/pic_4.png"
 alt="this is a placeholder image" 
 caption="An example of gender bias in machine translation from English (top) to Spanish (bottom)." %}
* Examples include gender biases in visual Semantic Role Labeling (SRL) - Cooking is stereotypically done by women, construction workers are stereotypically men. 

# Problem
* Can we quantitatively evaluate gender translation in MT?
* How much does MT rely on gender stereotypes vs. meaningful context?
* Can we reduce gender bias by rephrasing source texts?

# How it Solves
Winogender ([Rudinger et al., 2018](https://www.aclweb.org/anthology/N18-2002.pdf])) and 
WinoBias ([Zhao et al., 2018](https://www.aclweb.org/anthology/N18-2003.pdf])) datasets were used 
following the [Winograd schema](https://www.aaai.org/ocs/index.php/SSS/SSS11/paper/viewFile/2502/2964){:target="_blank"}. 
Collectively, they compose of 3888 English sentences designed to test gender bias in coreference resolution.

{% include figure image_path="/assets/images/nlp_papers_summary/pic_5.png"
 alt="this is a placeholder image" 
 caption="For every female doctor in the example, there will be a male doctor as a counter example." %}
 
These are very useful for evaluating gender bias in MT!
 * Equally split between stereotypical and non-stereotypical role assignments. (For every female doctor, we'll have a 
 female nurse)
 * Gold annotations for gender.
 
Six widely used MT models, representing the state of the art in both commercial and academic research
were used:
1. Google Translate
2. Microsoft Translator
3. Amazon Translate
4. SYSTRAN 
5. the model of ([Ott et al., 2018](https://www.aclweb.org/anthology/W18-6301.pdf)), which recently achieved the best performance on English-to-French
translation on the WMT'14 test set.
6. the model of ([Edunov et al., 2018](https://www.aclweb.org/anthology/D18-1045.pdf)), the WMT’18 winner on English-to-German translation. 
  
## Implementation
**Input :** MT model + target language<br>
**Output :** Accuracy score for gender translation

1. Translate the coreference bias datasets.
  * To target languages with grammatical gender.
 
2. Align between source and target.
  * Using fast align. ([Dyer et al., 2013](https://www.aclweb.org/anthology/N13-1073.pdf))
 
 3. Identify gender in target language.
  * Using off-the-shelf morphological analyzers or simple heuristics in the target languages.

To estimate noise, a sample of gender predictions were shown to native speakers of target languages.

Quality estimated >85% vs. 90% IAA (Inter Annotator Agreement)
{: .notice--success} 

> ### To test if gendered adjectives affect translation?
For the sentence:<br>
"The doctor asked the nurse to help her in the operation."<br><br>
Black-box injection of gendered adjectives were done:<br>
"The **pretty** doctor asked the nurse to help **<u>her</u>** in the operation."
<span style='color:teal'>[Since doctor is female]</span><br>
"The **handsome** nurse asked the doctor to help **<u>him</u>** in the operation."
<span style='color:teal'>[Since nurse is male]</span><br><br>
Here, "**pretty**" and "**handsome**" are stereotypical adjectives for feminine and masculine genders respectively.

This approach improved performance for most tested languages and models. [mean +8.6%]
{: .notice--success} 

# Results
This metric shows that all tested systems have a significant and consistently better performance when presented with pro-stereotypical
assignments (e.g., a female nurse), while their
performance deteriorates when translating anti-stereotypical roles (e.g., a male receptionist).

{% include figure image_path="/assets/images/nlp_papers_summary/pic_18.png"
 alt="this is a placeholder image" 
 caption="Google Translate’s performance on gender translation on our tested languages. The performance on the
stereotypical portion of WinoMT is consistently better than that on the non-stereotypical portion. The other MT
systems we tested display similar trends." %}

 
# Limitations and Future Work
* Artificially created dataset.
  * Allows for controlled experiment.
  * Yet, might introduce it's own annotation biases.
 
* Medium Size 
  * Easy to overfit.
 
# Takeaways
* First quantitative automatic evaluation of gender bias in MT.
  * 6 SOTA MT models on 8 diverse target languages.
  * Doesn't require reference translations.
  
* Significant gender bias found in all models in all tested languages.
* Easily extensible with more languages and MT models.

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
