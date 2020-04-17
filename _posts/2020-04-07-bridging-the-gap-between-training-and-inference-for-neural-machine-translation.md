---
classes: wide
author_profile: false
toc: true  
title: "Bridging the Gap between Training and Inference for Neural Machine Translation"
excerpt: "In Neural Machine Translation, at training time, it predicts with the ground truth words as context 
while at inference it has to generate the entire sequence from scratch. This discrepancy of the fed context leads to error accumulation among the way.
This paper addresses this and many other issues."
date: 2020-04-07
last_modified_at: 2020-04-13
permalink: "/blog/nlp-papers-summary/bridging-the-gap-between-training-and-inference-for-neural-machine-translation/"
header:
  teaser: "assets/images/nlp_papers_summary/pic_7.png"
category: 
  - NLP Papers Summary
tags:
  - Machine Translation
  - ACL    
---

{% include figure image_path="/assets/images/nlp_papers_summary/pic_7.png"
 alt="this is a placeholder image" %}

# PDF - [Paper](https://www.aclweb.org/anthology/P19-1426.pdf){:target="_blank"} by {% cite zhang-etal-2019-bridging %}
---
 
# Introduction
---
* During Training, ground truth words as context. At inference, self-generated words as context.
* Over-correction, if we only use self-generated words as context.
* A sentence usually has multiple reasonable translations and it cannot be said that the model makes a
mistake even if it generates a word different from the ground truth word.
For example:

**reference**: We should comply with the rule.<br><br>
**cand1**: We should abide with the rule.<br>
**cand2**: We should abide by the law.<br>
**cand3**: We should abide by the rule.<br>
{: .notice}

# How it Solves
---

The main framework is to feed as context either the ground truth words 
or the previous predicted words, i.e. oracle words, with a certain probability. This potentially
can reduce the gap between training and inference by training the model to handle the situation which
will appear during test time.

## Oracle Translation Generation

1) Word Level Oracle (SO)

Generally, at the $j$-th step, the NMT model needs the ground truth word $y_{j−1}^*$ 
as the context word to predict $y_j$ , thus, we could select an oracle word 
$y_{j−1}^{oracle}$ to simulate the context word. The oracle word should be a word similar 
to the ground truth or a synonym. Using different strategies will produce a different oracle word 
$y_{j−1}^{oracle}$. One option is that word-level greedy search could be employed to output the 
oracle word of each step, which is called Word-level Oracle (called WO).
 
{% include figure image_path="/assets/images/nlp_papers_summary/pic_8.png"
 alt="this is a placeholder image" %}
 
Gumbel noise, treated as a form of regularization, is added to $o_{j−1}$.

$$
\begin{align*}
\eta&= -\log(-\log u)\\
\tilde{o}_{j-1}&= (o_{j-1} + \eta) / \tau\\
\tilde{P}_{j-1}&= {softmax}(\tilde{o}_{j-1})
\end{align*}
$$

where $\eta$ is the Gumbel noise calculated from a uniform random variable $\{u} ∼ \{U(0, 1)}$; $\tau$ is temperature.
As $\tau$ approaches 0, the $\{softmax}$ function is similar to the $\{argmax}$ operation, and it becomes uniform distribution 
gradually when $\tau$ $\rightarrow$ $\infty$.

2) Sentence Level Oracle (SO)
  * Generate $top(k)$ translation by beam search.
  * Re-rank $top(k)$ translation with BLEU.
  * Select $top(i)$.

## Context Sampling with Decay  

Employ a sampling mechanism to randomly select the ground truth word $y_{j-1}^*$ 
or the oracle word $y_{j−1}^{oracle}$ as $y_{j−1}$. At the beginning of training, 
as the model is not well trained, using $y_{j−1}^{oracle}$ as $y_{j−1}$ too often
would lead to very slow convergence, even being trapped into local optimum. 

On the other hand, at the end of training, if the context $y_{j−1}$ is still selected 
from the ground truth word $y_{j-1}^{*}$ at a large probability, the model is not fully exposed 
to the circumstance which it has to confront at inference and hence can not know how to 
act in the situation at inference. In this sense, the probability $p$ of selecting from the 
ground truth word can not be fixed, but has to decrease progressively as the training advances. 
At the beginning, $p=1$, which means the model is trained entirely based on the ground truth words. 
As the model converges gradually, the model selects from the oracle words more often. 
  
{% include figure image_path="/assets/images/nlp_papers_summary/pic_10.png"
 alt="this is a placeholder image" %}
 
where $$\begin{align*}{p} = \frac{\mu}{\mu + \exp(\mathcal{e}/\mu)}\end{align*}$$

Here, $\mathcal{e}$ corresponds to the epoch number and $\mu$ is a hyper-parameter. The function is
strictly monotone decreasing. As the training proceeds, the probability $p$ of feeding ground truth
words decreases gradually.
   
## Training
 
The objective is to maximize the probability of the ground truth sequence based on maximum likelihood estimation (MLE).
Thus, following loss function is minimized:

$$
\begin{align*}
    \mathcal{L}(\theta) = -\sum_{n=1}^{N}\sum_{j=1}^{|y^n|}\log P_j^n[y_j^{*n}]
\end{align*}
$$

where ${N}$ is the number of sentence pairs in the training data, $|y^n|$ indicates the length 
of the ${n}$-th ground truth sentence, $P_j^n$ refers to the predicted probability distribution at the ${j}$-th 
step for the ${n}$-th sentence, hence $P_j^n[y_j^n]$ is the probability of generating the 
ground truth word $y_j^n$ at the ${j}$-th step.

# Takeaways
---
* Sampling as context from the ground truth and the generated oracle can mitigate exposure bias. 
* Sentence-level oracle is better than word-level oracle.
* Gumbel noise can help improve translation quality.

# References
---
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