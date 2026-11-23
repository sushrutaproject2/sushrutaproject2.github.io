---
layout: post
title: "An Editing Screen for Saktumiva 2"
author: Dominik Wujastyk
date: 2026-11-23 09:05:00
description: A local program that shows the edition, its apparatus and the witnesses side by side, and writes every editorial decision back into the TEI files
tags: SuśrutaProject assets Saktumiva TEI critical_edition software Claude
---

This post is one of a series on the items in the [Assets](https://sushrutaproject2.github.io/resources/) menu of this website, which I have written over the last two months together with Claude.

## The problem

Our edition of the Nepalese version of the _Suśrutasaṃhitā_ is made with Charles Li's [Saktumiva](https://github.com/chchch/saktumiva). Saktumiva takes the TEI transcriptions of the manuscripts, aligns them with the edition, and generates the critical apparatus. It has changed what a small team can do with a large text.

But the daily work of editing was still divided between three tools. The edition and its notes were written by hand in an XML editor. Saktumiva collated the files and produced the apparatus. The result was checked in a web browser. If, on reading the apparatus, one decided that manuscript K had the better reading, one went back to the XML editor, found the passage, changed the text, ran the collation again, and looked at the result again. Every decision meant a trip round all three.

At the end of October 2026 I wrote a short proposal for something better: a single screen on which the editor reads the critical text, the apparatus and the manuscripts side by side, makes decisions by direct action, and has every decision written back into the TEI files while Saktumiva rebuilds the apparatus in the background. The [Saktumiva editor](https://sushrutaproject.github.io/saktumiva2-editor/) is the result.

## What it does

The screen has three parts. On the left is the list of passages. In the centre is the text of the current passage as it stands in the edition, with the apparatus below it. On the right is each witness's text of the same passage, with a button that opens the image of the manuscript page.

- Words that have variants are underlined. Pointing at a reading in the apparatus and pressing **use** puts it into the text. The passage is collated again, and the former reading takes its place among the variants.
- The text can be typed into directly. A reading that no witness has can be recorded as an emendation, with its note.
- To add a note, one selects a word and writes. The anchor and the note are created together with matching identifiers, so the cross-reference errors described in the [previous post](https://sushrutaproject2.github.io/blog/2026/asset-tei-scholar-plugin/) cannot arise.
- A mistake in a witness's transcription can be corrected on the spot, in the witness's own file.
- When the automatic alignment of the witnesses has gone wrong, it can be corrected by hand, and the correction is kept through later collations.
- Passages can be split and merged in the edition and in every witness file at once.
- **Publish** writes the edition with a fresh apparatus, ready to go online.

## Principles

A few decisions were made at the start and have proved their worth.

The TEI files are the only real data. The screen is a view of them, and nothing is kept only in the program. A file opened in another editor after a session shows exactly what was done.

Saving changes as little as possible. Only the elements that were edited are rewritten, and every other character of the file is left as it was.

Every save is a commit in git, so that each editorial decision is recorded and can be undone. Nothing goes online until the editor chooses to push it.

The collation is done by Saktumiva's own code, running in the background on one passage at a time. A verse with five or six witnesses is a small problem, so the apparatus follows the editor's changes almost at once.

Everything runs on the editor's own computer. The only traffic to the outside is the browser fetching manuscript images from the libraries' servers.

## Using it

The program was written for the _Suśrutasaṃhitā_, but nothing in it is specific to that work. It will open any project that is laid out as folders of TEI files; my colleagues and I are also using it for other texts. There are ready-made programs for Linux, macOS and Windows on the [releases page](https://github.com/sushrutaproject/saktumiva2-editor/releases/latest), and a [tutorial](https://github.com/sushrutaproject/saktumiva2-editor/blob/main/docs/tutorial.md) for those who are new to Saktumiva, TEI or GitHub.  Bug reports and suggestions to [Issues](https://github.com/sushrutaproject/saktumiva2-editor/issues), please.

The editor is under active development. It reached version 0.6.7 on 19 November, and members of the project are now using it for their daily editing. We are grateful to Charles Li, on whose work it entirely depends.
