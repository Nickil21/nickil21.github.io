---
layout: single
classes: wide
title: "Week 4 (June 8 - June 14)"
permalink: /blog/gsoc-2021/report/week-04/
excerpt: ""
modified:
last_modified_at: 2021-06-15
---
Since this being the start of the coding period, I did get in touch with my primary mentor, Tiago. We mutually agree that querying the Red Hen dataset that have a particular gesture type can be a good way to investigate construal meaning relationships between the different linguistic elements. To narrow down the numerous possibilities of gesture types, we only consider hand gestures for our ablation.

We choose the following parameters:

| Gesture Type   | Values |
| -----------    | ------ |
| Body part      | left hand, right hand, both hands    |
| Axis           | vertical, horizontal/lateral |
| Direction      | upward, downward, leftward, rightward, diagonal right up, diagonal left up, diagonal right down, diagonal left down  |
| Shape          | straight, arced  |

To begin with, we want the algorithm to be capable of understanding only the **Prominence** dimension which is relevant in the case of gestures and more widespread.