---
title: "Week 6 (June 22 - June 28)"
layout: single
classes: wide
permalink: /blog/gsoc-2021/report/week-06/
excerpt: ""
modified:
last_modified_at: 2021-06-29
---
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