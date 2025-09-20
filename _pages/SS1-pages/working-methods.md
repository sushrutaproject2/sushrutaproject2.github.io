---
title: 'Working Methods'
date: '2021-02-19T18:26:21-07:00'
author: 'Dominik Wujastyk'
layout: page
---

This is just a rough sketch for the record. I hope it may be interesting to other electronic-text projects.

We have project meetings with 3-5 members about twice a week for about two hours each time. We are all over the globe (Canada, India, Europe, Australia), so even if it were not 2021-2022, we would use Zoom.

## Manuscript transcription

Before we meet, a lot of work has already taken place. Project members have transcribed an agreed section of the text from the three Nepalese manuscripts that we are studying. These MS transcriptions are done according to Saktumiva’s [subset of the TEI Guidelines](https://saktumiva.org/wiki/tei).

The process of transcription this. In one window we view the digital image of a MS folio. In another window we have an editor open with a copy of the etext of the Nirṇayasāgara vulgate edition by Yādavaśarma Trivikrama Ācārya.[^1] In another oXygen editor window we start transcribing from the MS folio. Sometimes we use the vulgate etext as a template and alter it to match the MS. In other cases, when the MS text diverges, we just transcribe without a template.

We usually transcribe from MS NAK 5-333 first, because the script is least challenging and the text is most complete. That is followed by NAK 1-1079 and finally KL 699.

Some of us use Charles Li’s [Quick Palaeographer](https://github.com/chchch/quick-palaeographer/) as an aid while learning the palaeography of a new manuscript. This enables one rapidly to build up an indexed and clickable repertoire of letter-forms from a manscrupt image.

## Conduct of Meetings

- We each have a web page open at the [online new edition at Saktumiva](https://saktumiva.org/wiki/wujastyk/susrutasamhita/start).[^2]  Beside the evolving text of the edition itself, that shows collations with the Nepalese MSS and with the e-text of the 1938 vulgate edition by Yādavaśarma Trivikrama Ācārya. That is the display that we all look at, discuss and translate.
- We also consult the manuscript images routinely to check particular readings from time to time. For each MS transcription, at the start of a new folio (&lt;pb&gt;) we create a link in the XML that points to the MS image for that page. This means that we can quickly check the MS evidence to verify the transcription at instances when a reading is uncertain.
- I also have the [oXygen](https://www.oxygenxml.com/) XML editor open, locally, displaying the source XML files of these e-texts (3 MSS and the edition).
- I also have the [Filezilla](https://filezilla-project.org/) ftp program open, connecting my local computer to Saktumiva. That makes it fast and easy to transfer the source XML files from my computer to Saktumiva from time to time during the conversation.
- Finally, we all have various reference books and editions beside us, some printed, some PDF. One of us may report Ḍalhaṇa’s comments, another may look up a word in the [Āyurvedīya Mahākośa](https://archive.org/details/AyurvediyaSabdakosa1968/Ayurvediya%20Sabdakosa-v1_1968) or [MW](https://www.sanskrit-lexicon.uni-koeln.de/scans/MWScan/2020/web/webtc2/index.php).

I often share my screen with the rest of the team, so they can look at things we’re jointly discussing within their Zoom window. Sometimes others share their screens with the group. We swap about.

## Process

One of us reads out a section of the text from Saktumiva. We jointly discuss its meaning and interpretation. We look at the variant readings and often we edit these, or choose different readings to put in the main edited text. Each time this happens, I edit the source files in oXygen, save them, send them to Saktumiva using Filezilla (a single keypress, instantaneous), and then refresh the browser screen displaying Saktumiva. This takes about five seconds and then we all have the updated version of the edition before us, reflecting our discussion. We continue in this way

Meanwhile, I also have an editor window open with the evolving English translation.[^3]  As we read and discuss the text, I write out the translation we agree upon. Like many Indologists, we are using [LaTeX](https://www.latex-project.org/) as our document prepration system.

## After the meeting

At the end of a session, I use [Git](https://git-scm.com/) on my computer to send all the updated files to our [project repository at Github](https://github.com/wujastyk/sushrutaproject). I am comfortable with the Linux command-line, so I often issue my git commands directly. But oXygen has a convenient [git plugin](https://github.com/oxygenxml/Oxygen-Git-Plugin) that provides a menu-driven interface that is also very simple and good to use. The files at Github are the reference versions of our files. Git also helps us to manage version control if several of us happen to edit the same file at the same time in our different locations. The Git repo houses not only the MS transcriptions, but also the TeX file of our translation and a PDF of the output so that viewers can see the evolving translation.

## Transparency

These working methods are unusually transparent. We are sharing our progress on a daily basis as it evolves. This is not a common procedure. The norm in academic projects is to work privately and publish results periodically in a fully-polished form. We will also be submitting our results in the traditional manner to peer-reviewed journals at various milestones. But at any time, anyone can see what we are doing on that day.

### Footnotes

[^1]: The [etext of the vulgate](https://sarit.indology.info/susrutasamhita.xml?view=div) was transcribed and released in 2009 by Professor Tsutomu Yamashita and Dr Yasutaka Muroya, to whom we are extremely grateful. Due to text availability issues, the sūtrasthāna (Su.1) and śārīrasthāna (Su.3) were transcribed mostly from the 1931 edition and the rest of the text from the 1938 edition. 

[^2]: For technical documentation of Saktumiva, see Charles Li, “[Reconstructing a Sanskrit Text](https://chchch.github.io/sanskrit-alignment/docs/index.html)” consulted 15 Jan 2021. 

[^3]: The editor I use is [TeXstudio](https://www.texstudio.org/), but others use their favourite editors like TeXshop.
