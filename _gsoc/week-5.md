---
title: "Week 5 (June 15 - June 21)"
layout: single
classes: wide
permalink: /blog/gsoc-2021/report/week-5/
excerpt: ""
modified:
last_modified_at: 2021-06-22
---
In this week, I schedule a Zoom meeting on June 16<sup>th</sup> with Tiago to discuss about the next steps. Here's a gist of the discussion that took place:

## Objective

We want to map the Frames into a particular construal dimension. Even though the Terminal nodes may be somewhat random in meaning, using the FrameNet’s rich network-based parsing mechanisms, we can perhaps leverage the upper levels in the graph to map it to a specific construal dimension.

## Method

1. For the Red Hen dataset, we need to retrieve Frames that have the gesture types we want to query for. To obtain these Frames, we can use a timestamp interval of +/- 3 seconds from the annotated gesture types. The Frame is made up of two components - an audio transcription in the form of a textual output and a Frame Metadata.
2. The FrameNet API can be used to model the Frame Metadata and carry out the Frame-based Semantic parsing. For instance, we can leverage the rich APIs available to derive relationships between all the FrameNet frames in the network. FrameNet has top-level concepts as Event, Relation, State, Entity, Locale, and Process. Most of the individual Frames in the network inherit these top-level concepts and are related to one another using a relationship such as Using, Precedes, Subframe, etc.
3. Once we have some form of a relationship among Frames, we need to create a representation of these Frames. 
4. After getting the representations, we can cluster using a simple K-Means Clustering algorithm.
5. We can use these clusters to segment the Frames into Lexical units.
6. The Lexical units can be mapped to a representation using a contextual word embeddings method.
7. These representations can be fed as input to the Generator, which outputs a sequence. Finally, we feed this to the Discriminator.
8. Next, we can feed the textual output (audio transcription) to the Discriminator.
9. In the last step, Adversarial training happens using GANs to determine if the final outcome is a real or a fake transcription. The Discriminator is trained to classify whether samples are from the Generator or from the real data distribution. The objective of the Generator is to produce samples that are indistinguishable by the Discriminator.
10. Through the Human-In-Loop intervention, we can create synthetic datasets to evaluate whether the correct construal dimension is associated with a Frame or not.
11. The idea is to start with maybe two types of construal dimension -- Prominence and Configuration and analyze if we are doing better than a random guess. Later, we can move on to cover the other dimensions.

## Resources

1. [FrameLatticeList](https://framenet.icsi.berkeley.edu/fndrupal/FrameLatticeList)
2. Semantic Role Labeling - [SEMAFOR](http://www.cs.cmu.edu/~ark/SEMAFOR/), [Sling](https://github.com/google/sling), [Open Sesame](https://github.com/swabhs/open-sesame)
3. [Webtool Repository](https://github.com/FrameNetBrasil/webtool)
4. [Multilingual FrameNet](https://framenet.icsi.berkeley.edu/fndrupal/node/5561)
5. [NLTK FrameNet](https://www.aclweb.org/anthology/D17-2001/)