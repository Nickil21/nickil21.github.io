---
title: "Week 12 (Aug 3 - Aug 9)"
layout: single
classes: wide
permalink: /blog/gsoc-2021/report/week-12/
excerpt: ""
modified:
last_modified_at: 2021-08-10
---

The problem statement can be framed as:

> Given a video input, identify whether a hand gesture is present corresponding to the hand gestures portrayed by the speaker during the enunciation of the "from-to" lexical trigger in the training video frames. If it is, then classify the video frame with the different gesture types (handedness, axis, shape, direction). If it is not, then classify the video frame as "No Gesture".

We look to segment a video into video frames of equal time-duration of 500 ms. Furthermore, to create a set of True Positive (TP) instances, we extract the video frames corresponding to the start and ending portions of the lexical trigger. To create a set of True Negative (TN) instances, we extract the video frames and annotate the ones having hand gestures unrelated to the ones found in the TP set. We perform the annotations using the Red Hen Rapid Annotator tool.

The classification model comprises of mainly three units: positional embedding to enable the model access to the pixel order information, Transformer encoder to process the source sequence, and a max-pooling layer to keep the most important feature.

The Model architecture is shown below:

![Model Architecture](https://i.imgur.com/jazJ48X.png)

Since a video frame can be accompanied by multiple hand gesture types, it makes sense to treat it as a multi-label classification problem as the labels are not mutually exclusive.
