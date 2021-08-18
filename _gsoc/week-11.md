---
title: "Week 11 (July 27 - Aug 2)"
layout: single
classes: wide
permalink: /blog/gsoc-2021/report/week-11/
excerpt: ""
modified:
last_modified_at: 2021-08-10
entries_layout: grid
---

We decide to choose "**from-to**" with a proxmity window of 4 word tokens between "**from**" and "**to**" as the initial template of lexical trigger to map it to the construal dimension, Prominence. In addition, we also identify "**first-second**", "**firstly-secondly**" and "**here-then**", but could not find much relevant hand gestures in the PATS dataset.

Consider a sample video of a talk show host, Jimmy Fallon, taken from the PATS  dataset with a pre-defined start and end time:

{% include video id="JY-Nhs__4xk?start=145&end=160" provider="youtube" %}

Transcript: "with Mexico that players can either travel **from** the u.s. **to** Mexico by plane or just walked past the wall that still won't be built it's up to you you can choose"


The video frames corresponding to the "**from**-**to**" lexical trigger are shown below:

<!-- Left Column -->
<div style="width: 50%; min-width: 300px; float: left;">
  <!-- Video 1 -->
  <div style="background-color: whitesmoke; padding: 15px; margin: 0 2% 4% 0;">
    <h3 style="border-bottom: 1px solid; margin: 0 0 8px 0;">Frame 1</h3>
    <div style="position: relative; width: 100%; padding-top: 56.25%;">
    <iframe src="https://streamable.com/e/3qs7r5?loop=0" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe>
    </div>
    <p style="margin: 10px 0 0 0;"></p>
    <table>
	<thead>
      <tr>
        <th>Handedness</th>
        <th>Axis</th>
        <th>Shape</th>
        <th>Direction</th>
        <th>Gesture</th>
      </tr>
  </thead>
  <tbody>
      <tr>
        <td>Both Hands</td>
        <td>Horizontal</td>
        <td>Straight</td>
        <td>Diagonal right up</td>
        <td>Yes</td>
      </tr>
  </tbody>
  <caption><b>Lexical prompt: </b>"travel from the"</caption>
</table>
  </div>

  <!-- Video 2 -->
  <div style="background-color: whitesmoke; padding: 15px; margin: 0 2% 4% 0;">
    <h3 style="border-bottom: 1px solid; margin: 0 0 8px 0;">Frame 2</h3>
    <div style="position: relative; width: 100%; padding-top: 56.25%;">
    <iframe src="https://streamable.com/e/1hy1sl?loop=0" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe>
    </div>
    <p style="margin: 10px 0 0 0;"></p>
    <table>
	<thead>
      <tr>
        <th>Handedness</th>
        <th>Axis</th>
        <th>Shape</th>
        <th>Direction</th>
        <th>Gesture</th>
      </tr>
  </thead>
  <tbody>
      <tr>
        <td>Both Hands</td>
        <td>Horizontal</td>
        <td>Straight</td>
        <td>Leftward</td>
        <td>Yes</td>
      </tr>
  </tbody>
  <caption><b>Lexical prompt: </b>"u.s. to"</caption>
</table>
  </div>
</div>

<!-- Right Column -->
<div style="width: 50%; min-width: 300px; float: left;">
  <!-- Video 3 -->
  <div style="background-color: whitesmoke; padding: 15px; margin: 0 0 4% 2%;">
    <h3 style="border-bottom: 1px solid; margin: 0 0 8px 0;">Frame 3</h3>
    <div style="position: relative; width: 100%; padding-top: 56.25%;">
    <iframe src="https://streamable.com/e/ako3bg?loop=0" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe>
    </div>
    <p style="margin: 10px 0 0 0;"></p>
    <table>
	<thead>
      <tr>
        <th>Handedness</th>
        <th>Axis</th>
        <th>Shape</th>
        <th>Direction</th>
        <th>Gesture</th>
      </tr>
  </thead>
  <tbody>
      <tr>
        <td>Both Hands</td>
        <td>Horizontal</td>
        <td>Straight</td>
        <td>Diagonal left down</td>
        <td>Yes</td>
      </tr>
  </tbody>
  <caption><b>Lexical prompt: </b>"Mexico by"</caption>
</table>
  </div>

  <!-- Video 4 -->
  <div style="background-color: whitesmoke; padding: 15px; margin: 0 0 4% 2%;">
    <h3 style="border-bottom: 1px solid; margin: 0 0 8px 0;">Frame 4</h3>
    <div style="position: relative; width: 100%; padding-top: 56.25%;">
      <iframe src="https://streamable.com/e/u1c6wn?loop=0" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe>
    </div>
    <p style="margin: 10px 0 0 0;"></p>
   <table>
	<thead>
      <tr>
        <th>Handedness</th>
        <th>Axis</th>
        <th>Shape</th>
        <th>Direction</th>
        <th>Gesture</th>
      </tr>
  </thead>
  <tbody>
      <tr>
        <td>Both Hands</td>
        <td>Horizontal</td>
        <td>Straight</td>
        <td>Rightward</td>
        <td>Yes</td>
      </tr>
  </tbody>
  <caption><b>Lexical prompt: </b>"plane"</caption>
</table>
  </div>
</div>
