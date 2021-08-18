---
layout: single
classes: wide
title: "Week 3 (June 1 - June 7)"
permalink: /blog/gsoc-2021/report/week-03/
excerpt: ""
modified:
last_modified_at: 2021-06-07
---
Inorder to comply with the [section 108 of the U.S. Copyright Act](https://sites.google.com/site/distributedlittleredhen/home/what-kind-of-red-hen-are-you?authuser=0){:target="_blank"}, it is necessary that we email [access@redhenlab.org](mailto:access@redhenlab.org){:target="_blank"} requesting access to the Red Hen data and tools. Finally, I get the access upon submitting the research as well as the contribution proposal.

Due to the space storage constraints in the default HOME directory, it is not advisable to keep files over there. To store files having large sizes, gallina home, which is a directory on gallina (a Red Hen server) needs to be set up.

To check if gallina home is properly set in CWRU HPC:


    $ [nxm526@hpc4 home]$ pwd
    /mnt/rds/redhen/gallina/home
    $ [nxm526@hpc4 home]$ ls -al nxm526
    total 20
    drwxrwsr-x  2 nxm526 mbt8  2 Jun  7 18:30 .
    drwxrwsr-x 91 mbt8   mbt8 91 Jun  7 18:30 ..