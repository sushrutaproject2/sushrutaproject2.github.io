---
layout: post
title: "A Searchable Bibliography and Indexes of Materia Medica"
author: Dominik Wujastyk
date: 2026-11-23 09:01:00
description: Dominik Wujastyk's working bibliography and the project's plant, animal and mineral glossaries, searchable online
tags: SuśrutaProject assets bibliography materia_medica Claude
---

This post is one of a series on the items in the [Assets](https://sushrutaproject2.github.io/resources/) menu of this website, which I have written over the last two months together with Claude.

## What it is

The site [Dominik Wujastyk's Bibliographies](https://wujastyk.github.io/bibliographies) has two parts.

The first is a searchable index of my working bibliography for Sanskrit studies, Āyurveda and South Asian textual history. It has about 6,700 entries. One can search it in plain text or with regular expressions, filter by type of publication, language and year, and sort by author, year or title.

The second, under the tab [Materia medica](https://wujastyk.github.io/bibliographies/materia-medica/), searches the glossary databases of plants, animals and minerals that the Suśruta Project uses in its translations. At the time of writing there are about 750 plants, 220 animals and a handful of minerals. Each entry gives the Sanskrit name and the identification we have adopted, with references to the literature that supports it.

## Background

I have kept my bibliography as a BibLaTeX file for many years, and it is the source of the citations in the project's publications and on this website. Colleagues sometimes ask me for a reference, or for the file itself. The file has been in a public GitHub repository for a while, but a 4.6 megabyte plain-text file is not an inviting thing to consult. A search page seemed a better way of sharing it.

The materia medica files have a more particular history. When translating the _Suśrutasaṃhitā_ we meet hundreds of names of plants, and the identification of each one is a small research problem. Early in the project we decided to record our decisions in one place, so that a plant would be identified in the same way wherever it occurred and so that the evidence for the identification would be kept with it. The files are written for the LaTeX _glossaries-extra_ package, which prints the glossary at the end of our translations. Until now, the only way to read them was in those printed glossaries or in the raw files. The new page makes them available to anyone who wants to know what we think _śleṣmātaka_ is, and why.

## How it works

A short script converts the BibLaTeX files into data files whenever the repository is updated, and the search is done by the reader's browser. There is no server or database, so the site costs nothing to run and should need little maintenance.

A word of caution. The citations are displayed in a simple author–date style that is generated automatically, and they have not been checked one by one. The bibliography is a working tool, with the gaps and inconsistencies that implies.  Bugs and suggestions to [Issues](https://github.com/wujastyk/bibliographies/issues), please.  
The underlying files are at [github.com/wujastyk/bibliographies](https://github.com/wujastyk/bibliographies) and are released into the public domain (CC0).
