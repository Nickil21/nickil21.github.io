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

