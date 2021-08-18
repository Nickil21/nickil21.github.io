---
layout: single
classes: wide
title: "GSoC Final Report"
permalink: /blog/gsoc-2021/report/final/
excerpt: ""
---

I am thrilled to be a part of the awesome Red Hen Lab community! Thank you for selecting me and giving me a chance to contribute to the Red Hen codebase.

This post describes my journey after being selected as a Google Summer of Code (GSoC) student associated with Red Hen Lab and FrameNet Brasil. I plan to summarize my progress at the end of every week until the end of the summer.

Here's the abstract of my project:

>The project aims to develop a prototype that is capable of meaning construction using multi-modal channels of communication. Specifically, for a co-speech gestures dataset, using the annotations obtained manually coupled with the metadata obtained through algorithms, we devise a mechanism to disambiguate meaning considering the influence of all the different modalities involved in a particular frame. Since only a handful of annotated datasets have been made available by Red Hen, we leverage semi-supervised learning techniques to annotate additional unlabeled data. Furthermore, since each frame could have multiple meaning interpretations possible, we use human annotators to annotate a subset of our validation set and report our performance on that set.

My mentors are: [Suzie Xi](https://github.com/suziexi){:target="_blank"}, [Mark Turner](https:markturner.org){:target="_blank"}, [Javier Valenzuela](https://www.um.es/lincoing/jv/index_en.htm){:target="_blank"}, [Anna Wilson](https://www.rees.ox.ac.uk/people/dr-anna-wilson){:target="_blank"}, [Maria Hedblom](https://www.mariamhedblom.com){:target="_blank"}, [Francis Steen](https://comm.ucla.edu/person/francis-steen){:target="_blank"}, [Tiago Torrent](https://www.tiagotorrent.com){:target="_blank"} (primary), [Frederico Belcavello](https://www.researchgate.net/profile/Frederico-Belcavello){:target="_blank"}, [Inés Olza](https://sites.google.com/site/inesolza/){:target="_blank"}.

Stay tuned!

## Week 1

In this week, Mark creates CWRU (Case Western Reserve University) username accounts for all the students and mentors. Mine is nxm526. To receive all official HPC messages, Mark provides us with a [case.edu](https://www.case.edu){:target="_blank"} account.

To see if we can log in to the CWRU HPC server after connecting through the CWRU VPN:

    $ ssh nxm526@rider.case.edu
    Warning: Permanently added the ECDSA host key for IP address '129.22.100.157' to the list of known hosts.
    $ nxm526@rider.case.edu's password:

To access the HOME directory:

    $ [nxm526@hpc3 home]$ cd /home/nxm526/
    $ [nxm526@hpc3 ~]$ ll
    total 0


## Week 2

After exchanging a couple of slack messages, Tiago, my primary mentor, schedules a brief discussion on the project with me and the other mentors on May 27th. The meeting takes place via a Zoom call. During the session, we introduce ourselves. The mentors specifically highlight areas in which their strength lies and how I could seek their advice depending on the domain of the problem to leverage their expertise. There is also a separate slack channel [project_construal_2021](https://app.slack.com/client/TGH1N2VHP/C022UT8UZTR){:target="_blank"} to update all the mentors at once at every stage of the project.

Following are some of the key takeaways from the meeting:

* Aim at making small advancements that resembles a minuscule improvement when comparing to the existing systems. Since the topic of detecting meaning from a multimodal input has not been explored extensively due to the difficulty in understanding several interpretations possible, making even a small contribution in the right direction is challenging.

* Even creating an alogrithm for captioning of hand gestures in a 2D co-ordinate space is tricky due to multiple interpretations of the scene understanding by annotators/end-users. As a result, the Inter-Annotator Agreement tends to be quite low in this scenario.

The next day, we have our first introductory meeting with all the 12 GSoC selected students under Red Hen and the mentors. The meeting agenda is to introduce all the mentor(s)-mentee(s) and get to know the cohort better. Each student spoke about their project, their assigned mentors and came up with questions that could benefit others in navigating the project more smoothly.

## Week 3

Inorder to comply with the [section 108 of the U.S. Copyright Act](https://sites.google.com/site/distributedlittleredhen/home/what-kind-of-red-hen-are-you?authuser=0){:target="_blank"}, it is necessary that we email [access@redhenlab.org](mailto:access@redhenlab.org){:target="_blank"} requesting access to the Red Hen data and tools. Finally, I get the access upon submitting the research as well as the contribution proposal.

Due to the space storage constraints in the default HOME directory, it is not advisable to keep files over there. To store files having large sizes, gallina home, which is a directory on gallina (a Red Hen server) needs to be set up.

To check if gallina home is properly set in CWRU HPC:


    $ [nxm526@hpc4 home]$ pwd
    /mnt/rds/redhen/gallina/home
    $ [nxm526@hpc4 home]$ ls -al nxm526
    total 20
    drwxrwsr-x  2 nxm526 mbt8  2 Jun  7 18:30 .
    drwxrwsr-x 91 mbt8   mbt8 91 Jun  7 18:30 ..


## Week 4

Since this being the start of the coding period, I did get in touch with my primary mentor, Tiago. We mutually agree that querying the Red Hen dataset that have a particular gesture type can be a good way to investigate construal meaning relationships between the different linguistic elements. To narrow down the numerous possibilities of gesture types, we only consider hand gestures for our ablation.

We choose the following parameters:

| Gesture Type   | Values |
| -----------    | ------ |
| Body part      | left hand, right hand, both hands    |
| Axis           | vertical, horizontal/lateral |
| Direction      | upward, downward, leftward, rightward, diagonal right up, diagonal left up, diagonal right down, diagonal left down  |
| Shape          | straight, arced  |

To begin with, we want the algorithm to be capable of understanding only the **Prominence** dimension which is relevant in the case of gestures and more widespread.


## Week 5

In this week, I schedule a Zoom meeting on June 16<sup>th</sup> with Tiago to discuss about the next steps. Here's a gist of the discussion that took place:

### Objective

We want to map the Frames into a particular construal dimension. Even though the Terminal nodes may be somewhat random in meaning, using the FrameNet’s rich network-based parsing mechanisms, we can perhaps leverage the upper levels in the graph to map it to a specific construal dimension.

### Method

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

### Resources

* [FrameLatticeList](https://framenet.icsi.berkeley.edu/fndrupal/FrameLatticeList)
* Semantic Role Labeling - [SEMAFOR](http://www.cs.cmu.edu/~ark/SEMAFOR/), [Sling](https://github.com/google/sling), [Open Sesame](https://github.com/swabhs/open-sesame)
* [Webtool Repository](https://github.com/FrameNetBrasil/webtool)
* [Multilingual FrameNet](https://framenet.icsi.berkeley.edu/fndrupal/node/5561)
* [NLTK FrameNet](https://www.aclweb.org/anthology/D17-2001/)


### Timeline

For the first evaluation period, we hope to have the following components ready:

* Retrieving Frames corresponding to the chosen gesture types from Red Hen datasets.
* Establishing relationships among different Frames and creating Frame representations.
* Clustering Frames into groups based on these representations.
* Running ablation using only the speech transcription and see if any meaningful linguistic phenomena can be observed. Getting some form of a metric to show as an evaluation.

For the final evaluation period, we hope to complete:

* The Lexical units can be mapped to a representation.
* Once we have the speech transcription as well as the Lexical representation for each Frame pertaining to the gestures, we can jointly train a model to see if the added gesture component performs better than only using the linguistic component.
* Optimize and change the type of Neural Network model depending on the reported performance. Decide whether a GAN-based or a Transformer based architecture would be more suitable during the modeling process.
* Extend to other dimensions one at a time beyond Prominence and Configuration.
* Create a Singluarity container and integrate with the Red Hen codebase.

## Week 6

As a follow-up to the discussion which took place last week, I start with extracting the text (audio transcriptions) that was spoken within a timestamp, containing a specific value of the chosen gesture type from the ELAN files (.eaf format) corresponding to the Ellen Interviews dataset.
These are provided to me by Elizabeth Mahoney containing 30 videos with ELAN annotations and the transcription files. The next objective is, we can choose to run the FrameNet API on top of these text instances to do the semantic parsing.

The following script basically summarizes how to interact with the ELAN files to obtain the annotations according to the Tier Type/Name/ID. Finally, we save the gesture types between the start and end times containing a clause which is a transcribed text.

```python
import pympi
import pandas  as pd

# Tier names we want to query for containing the gesture types
tier_names = ['clauses', 'Handshape', 'Movement direction', 'Handedness', 'Axis']

list_of_dfs = []
# Initialize the elan file
eafob = pympi.Elan.Eaf("input/sample.eaf")
# Loop over all the defined tiers that contain orthography
for tier in tier_names:
    # If the tier is not present in the elan file spew an error and
    # continue. This is done to avoid possible KeyErrors
    if tier not in eafob.get_tier_names():
        print('WARNING!!!')
        print('One of the ortography tiers is not present in the elan file')
        print('namely: {}. skipping this one...'.format(tier))
    # If the tier is present we can loop through the annotation data
    else:
        lst = []
        for annotation in eafob.get_annotation_data_for_tier(tier):
            d = {}
            d['start_time'] = annotation[0]
            d['end_time'] = annotation[1]
            d[tier] = annotation[2]
            d['gesture_phases'] = annotation[3]
            lst.append(d)
        df = pd.DataFrame(lst)
        list_of_dfs.append(df)

data = pd.concat([d.set_index(['start_time', 'end_time', 'gesture_phases']) for d in list_of_dfs],
                  axis=1)
data.reset_index(inplace=True)
data['axis'] = None
data.sort_values(['start_time', 'end_time'], inplace=True)
data.drop_duplicates(inplace=True)
data.to_csv("output.tsv", index=False, sep="\t")
```

One thing to note is that there could be a possibility of a mismatch between a Frame and its transcription due to the tagging being performed at a granular level of timestamp and a single annotator(presumably) doing all the tagging. Anyway, here's how the top 10 rows of `output.tsv` looks like:

| # |start_time|end_time|gesture_phases|clauses                                                 |Handshape                |Movement direction              |Handedness|axis|
|---|----------|--------|--------------|--------------------------------------------------------|-------------------------|--------------------------------|----------|----|
|1  |10872.0   |11259.0 |str           |I had--                                                 |flat                     |LAB                             |Left      |    |
|2  |13387.0   |13733.0 |str           |She had been to Disneyland here.                        |1-2 stretched            |down                            |Left      |    |
|3  |14259.0   |14716.0 |str           |And I had an appearance                                 |1-2 stretched, 3-5 bent  |PT                              |Left      |    |
|4  |15254.0   |15515.0 |str           |same as before (appearance)                             |1-2 stretched, 3-5 bent  |left                            |Left      |    |
|5  |18061.0   |18167.0 |str           |which was weird                                         |1-4 touching, 5 stretched|down                            |Left      |    |
|6  |18309.0   |18494.0 |str           |going down to                                           |1-4 touching, 5 stretched|down                            |Left      |    |
|7  |25329.0   |25797.0 |str           |this was very pricess, Tinkle Bell, Snow White          |flat                     |up                              |Both      |    |
|8  |26211.0   |26979.0 |str           |SA(Snow White)                                          |flat                     |up                              |Both      |    |
|9  |27854.0   |        |str           |We did the whole thing                                  |1-2 connected            |down                            |Left      |    |
|10 |28854.0   |29892.0 |str           |the r--, the lunch in the princess castle (illustration)|flat                     |LAB                             |Left      |    |


The only issue we face here is that there is only a handful amount of ELAN annotations available inside the Red Hen repository. The ones with the relevant hand gesture tagging is even less, so we have no option but to look for alternative sources that could meet our purposes.
## Week 7

As a result of not having relevant hand gestures dataset to start the experimentation phase, I reach out to the mailing list of [International Society of Gesture Studies](http://gesturestudies.com/) and do manage to get a few responses.

So far, I collect the following datasets:

* ELAN tagged co-speech hand gestures dataset without the supporting videos shared at [Open Science Framework](https://osf.io/6y4k8/) by Fey Parrill.
* Co-speech gestures that co-occur with number-related linguistic expressions ("add", "subtract") shared by Daniel Alcaraz Carrion.
* Hand gestures dataset although related to sign-language motion capture corpora.

Tiago and I have a chat on Zoom. In the meeting, we discuss about utilizing the already existing annotation tool, Rapid Hen Annotator, to quickly manually tag the pre-defined gesture parameters from segmented videos of Ellen interview dataset. We choose about 30 video segments to begin with. The idea is to later ask the annotators a template of boolean questions (yes/no) corresponding to a particular construal dimension, for eg., *"does the highlighted text invoke ordering of items in a sequence?"*, *"does the highlighed text depict a time lapse?"*, *"does the highlighed text signify levels of importance?"* and so on.
## Week 8

I explore the [Red Hen Rapid Annotator tool](https://beta.rapidannotator.org/) which currently supports manual and spreadsheet inputted data. Each video from the 30 total videos is segmented for every 5 seconds from the Ellen interview dataset and its speech transcription is stored locally for every chunk. I create labels for gesture categories and gesture types for the chosen 4 hand gesture types.
## Week 9

Tiago and I have zoom calls on July 12<sup>th</sup> and July 14<sup>th</sup>. We decide to use the search engine which Red Hen has in-built. Since [Edge 2](https://tvnews.sscnet.ucla.edu/edge2/) allows us to query using metadata, we decide to search by word/phrase containing chosen lexical prompts that denote ordering of elements such as "first", "second", and so on. The general idea is to use lexical prompts to obtain the gestures followed by using gestures to obtain the lexical prompts to understand the co-occurrence relations. However, we find that the video and it's transcription (lexical context) are not aligned to a vast amount. Hence, we look for alternative means to prepare the dataset.

## Week 10

We decide to rely on external datasets due to the paucity of annotated data in-house. We finally settle on the [PATS](https://chahuja.com/pats/) dataset which consists of aligned pose, audio, and transcripts and can be useful for our purpose. There a total of 25 speakers: 15 talk show hosts, 5 lecturers, 3 YouTubers, and 2 televangelists. For our experimentation purposes, we use a subset consisiting of 7 speakers.

Here's a small demo of the PATS dataset:

{% include video id="BQf1e-K_oek?" provider="youtube" %}
## Week 11

We decide to choose "**from-to**" with a proxmity window of 4 word tokens between "**from**" and "**to**" as the initial template of lexical trigger to map it to the construal dimension, Prominence. In addition, we also identify "**first-second**", "**firstly-secondly**" and "**here-then**", but could not find much relevant hand gestures in the PATS dataset.

Consider a sample video of a talk show host, Jimmy Fallon, taken from the PATS  dataset with a pre-defined start and end time:

{% include video id="JY-Nhs__4xk?start=145&end=160" provider="youtube" %}

Transcript: "with Mexico that players can either travel **from** the u.s. **to** Mexico by plane or just walked past the wall that still won't be built it's up to you you can choose"


The video frames corresponding to the "**from**-**to**" lexical trigger for the anticipated hand gesture are shown below:

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


Now, consider a sample video of a talk show host, Seth Meyers, taken from the PATS  dataset with a pre-defined start and end time:

{% include video id="ikjZTJIubb4?start=482&end=509" provider="youtube" %}

Transcript: "$25,000 do you know how short a flight is from DC to Philadelphia if you tried to watch Thelma and Louise on that flight you wouldn't meet Louie Susan Sarandon on the bar Tyler so tan prices Medicaid patients should lose their health care but has no problem spending tens of thousands of dollars on private jets and he's not the only one treasury secretary Steve mnuchin also came"

The video frames corresponding to the "**from**-**to**" lexical trigger for the unanticipated hand gesture are shown below:

<!-- Left Column -->
<div style="width: 50%; min-width: 300px; float: left;">
  <!-- Video 1 -->
  <div style="background-color: whitesmoke; padding: 15px; margin: 0 2% 4% 0;">
    <h3 style="border-bottom: 1px solid; margin: 0 0 8px 0;">Frame 1</h3>
    <div style="position: relative; width: 100%; padding-top: 56.25%;">
    <iframe src="https://streamable.com/e/xzjmyi?loop=0" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe>
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
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>No</td>
      </tr>
  </tbody>
  <caption><b>Lexical prompt: </b>"flight is from"</caption>
</table>
  </div>

  <!-- Video 2 -->
  <div style="background-color: whitesmoke; padding: 15px; margin: 0 2% 4% 0;">
    <h3 style="border-bottom: 1px solid; margin: 0 0 8px 0;">Frame 2</h3>
    <div style="position: relative; width: 100%; padding-top: 56.25%;">
    <iframe src="https://streamable.com/e/1be57j?loop=0" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe>
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
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>No</td>
      </tr>
  </tbody>
  <caption><b>Lexical prompt: </b>"from DC"</caption>
</table>
  </div>
</div>

<!-- Right Column -->
<div style="width: 50%; min-width: 300px; float: left;">
  <!-- Video 3 -->
  <div style="background-color: whitesmoke; padding: 15px; margin: 0 0 4% 2%;">
    <h3 style="border-bottom: 1px solid; margin: 0 0 8px 0;">Frame 3</h3>
    <div style="position: relative; width: 100%; padding-top: 56.25%;">
    <iframe src="https://streamable.com/e/0v505p?loop=0" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe>
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
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>No</td>
      </tr>
  </tbody>
  <caption><b>Lexical prompt: </b>"to Philadel"</caption>
</table>
  </div>

  <!-- Video 4 -->
  <div style="background-color: whitesmoke; padding: 15px; margin: 0 0 4% 2%;">
    <h3 style="border-bottom: 1px solid; margin: 0 0 8px 0;">Frame 4</h3>
    <div style="position: relative; width: 100%; padding-top: 56.25%;">
    <iframe src="https://streamable.com/e/apmit4?loop=0" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe>
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
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>No</td>
      </tr>
  </tbody>
  <caption><b>Lexical prompt: </b>"elphia"</caption>
</table>
  </div>
</div>

As is evident from these frames, merely relying on the textual component of the "**from-to**" lexical trigger to identify the hand gestures would not work as different speakers use hand gestures differently for the same lexical context. Hence, the need arises to build a frame-level hand gesture classification system assisted by the lexical trigger.
## Week 12

The problem statement can be framed as:

> Given a video input, identify whether a hand gesture is present corresponding to the hand gestures portrayed by the speaker during the enunciation of the "from-to" lexical trigger in the training video frames. If it is, then classify the video frame with the different gesture types (handedness, axis, shape, direction). If it is not, then classify the video frame as "No Gesture".

We look to segment a video into video frames of equal time-duration of 500 ms. Furthermore, to create a set of True Positive (TP) instances, we extract the video frames corresponding to the start and ending portions of the lexical trigger. To create a set of True Negative (TN) instances, we extract the video frames and annotate the ones having hand gestures unrelated to the ones found in the TP set. We perform the annotations using the Red Hen Rapid Annotator tool.

The classification model comprises of mainly three units: positional embedding to enable the model access to the pixel order information, Transformer encoder to process the source sequence, and a max-pooling layer to keep the most important feature.

The Model architecture is shown below:

![Model Architecture](https://i.imgur.com/jazJ48X.png)

Since a video frame can be accompanied by multiple hand gesture types, it makes sense to treat it as a multi-label classification problem as the labels are not mutually exclusive.

## Week 13

I spend the last week of the GSoC period on packaging the final product into a singularity container (which is a requirement set by Red Hen). To build a container, we first need a definition file:

    Bootstrap: docker
    From: tensorflow/tensorflow:latest-gpu

    %labels
    AUTHOR nickilmaveli@gmail.com

    %post
        apt-get update && apt-get -y install git ffmpeg libsm6 libxext6 -y
        cd / && git clone https://github.com/Nickil21/joint-meaning-construal.git
        pip3 install pandas opencv-python numpy tables joblib imageio openpyxl flask jinja2 git+https://github.com/tensorflow/docs

    %runscript
        cd /joint-meaning-construal/ && python3 detect_gesture.py

We can then build the image using the [Sylabs Cloud Builder](https://cloud.sylabs.io/builder) by uploading the definition file. The build takes about 15-20 mins to complete. Once the image is built, the steps to run inside the singularity container are as follows:

1. Log on to the [CWRU HPC OnDemand Web Portal](https://ondemand.case.edu/).
2. Click on Clusters and choose "rider Shell Access" from the drop-down menu. This should redirect you to a Terminal console window of the HPC server.
3. Enter the gallina home directory:

       [nxm526@hpc4 ~]$ cd /mnt/rds/redhen/gallina/home/nxm526/

4. Load the Singularity module:

       [nxm526@hpc4 nxm526]$ module load singularity

5. Pull with Singularity:

       [nxm526@hpc4 nxm526]$ singularity pull library://nickil21/default/image:latest

6. Move the Singularity image inside the project folder:

       [nxm526@hpc4 nxm526]$ mv image_latest.sif joint-meaning-construal/singularity/

7. Enter the project root folder:

       [nxm526@hpc4 nxm526]$ cd joint-meaning-construal/

8. Execute the command within a container:

       [nxm526@hpc4 nxm526]$ singularity exec ./singularity/image_latest.sif python detect_gesture.py <path_to_video_file>

9. The output files would be present inside the `static/uploads/` folder. Retrieve the output files using the [CWRU HPC OnDemand Web Portal](https://ondemand.case.edu/pun/sys/dashboard/files/fs//mnt/rds/redhen/gallina/home/nxm526/joint-meaning-construal/static/uploads).