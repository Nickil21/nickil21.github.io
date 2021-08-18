---
title: "Week 13 (Aug 10 - Aug 16)"
layout: single
classes: wide
permalink: /blog/gsoc-2021/report/week-13/
excerpt: ""
modified:
last_modified_at: 2021-08-16
---

I spend the last week of the GSoC period on packaging the final product into a singularity container (which is a requirement set by Red Hen). To build a container, we first need a definition file:

<script src="https://emgithub.com/embed.js?target=https%3A%2F%2Fgithub.com%2FNickil21%2Fjoint-meaning-construal%2Fblob%2Fmain%2Fsingularity%2Fjoint_meaning_construal.def&style=vs&showFileMeta=on&showCopy=on"></script>

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