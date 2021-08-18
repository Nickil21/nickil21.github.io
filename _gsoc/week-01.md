---
layout: single
classes: wide
title: "Week 1 (May 18 - May 24)"
permalink: /blog/gsoc-2021/report/week-01/
excerpt: ""
last_modified_at: 2021-05-30
---

In this week, Mark creates CWRU (Case Western Reserve University) username accounts for all the students and mentors. Mine is nxm526. To receive all official HPC messages, Mark provides us with a [case.edu](https://www.case.edu){:target="_blank"} account.

To see if we can log in to the CWRU HPC server after connecting through the CWRU VPN:

    $ ssh nxm526@rider.case.edu
    Warning: Permanently added the ECDSA host key for IP address '129.22.100.157' to the list of known hosts.
    $ nxm526@rider.case.edu's password:

To access the HOME directory:

    $ [nxm526@hpc3 home]$ cd /home/nxm526/
    $ [nxm526@hpc3 ~]$ ll
    total 0
