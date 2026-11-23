---
layout: post
title: "Searching the SARIT and GRETIL Corpora"
author: Dominik Wujastyk
date: 2026-11-23 09:02:00
description: A search page for the TEI texts of SARIT and GRETIL that runs in the browser and gives a citable reference for every hit
tags: SuśrutaProject assets SARIT GRETIL TEI Claude
---

This post is one of a series on the items in the [Assets](https://sushrutaproject2.github.io/resources/) menu of this website, which I have written over the last two months together with Claude.

## What it is

[SARIT and GRETIL Corpus Search](https://wujastyk.github.io/SARIT-corpus/) is a search page for two large collections of electronic texts in Sanskrit and other Indian languages.

One can search for a phrase, for all or any of a set of words, or with a regular expression. The search can be told to ignore diacritics, word division, and the difference between anusvāra and the class nasals, which matters a great deal when the same word may have been typed _saṃkhyā_ in one text and _saṅkhyā_ in another. The search term can be typed in IAST, Devanāgarī, Harvard-Kyoto, Velthuis, SLP1 or ITRANS, and the results shown in IAST or Devanāgarī.

Every hit comes with a scholarly reference to the text and the place in it, ready to be copied into a footnote. The results can be downloaded as a table.

## Background

SARIT ("Search and Retrieval of Indic Texts") is a library of Indian texts, mainly in Sanskrit, encoded according to the guidelines of the Text Encoding Initiative. I started it a long time ago, with technical help from Richard Mahoney. In 2013 Birgit Kellner and Sheldon Pollock joined, and the project grew considerably with support from the NEH/DFG Bilateral Digital Humanities Programme and the work of Patrick McAllister, Andrew Ollett, Jens Østergaard Petersen, Liudmila Olalde, Claudius Teodorescu, Dheepa Sundaram and others. The SARIT library includes several of the texts closest to our project, including the _Carakasaṃhitā_ with Cakrapāṇidatta's _Āyurvedadīpikā_, the _Aṣṭāṅgahṛdaya_ and the _Aṣṭāṅgasaṅgraha_.

GRETIL, the Göttingen Register of Electronic Texts in Indian Languages, was started by Reinhold Grünendahl in 2001 and is much the larger of the two collections. Since 2016, Maximilian Mehner and colleagues produced [TEI/XML versions of its texts](https://github.com/mmehner/gretil-corpus-tei), “Corpus TEI.”  Support for GRETIL was withdrawn by Göttingen University after 2020 and it is now a [static collection](https://gretil.sub.uni-goettingen.de/gretil.html). 

The texts of both collections have always been freely available. The difficulty has been the search. SARIT's own search interface depended on a database server that somebody had to keep running, and such services are fragile once project funding has ended. For the Suśruta Project we need to be able to ask whether an unusual word or phrase in our manuscripts occurs anywhere else in Sanskrit literature, and we need the answer in a form that can be cited.

## How it works

The new page has no server behind it. The texts are prepared for searching when the site is built, and the search itself is done in the reader's browser. Because it is a static website it can be hosted free of charge and copied anywhere.

The page is built from my fork of the SARIT repository, [github.com/wujastyk/SARIT-corpus](https://github.com/wujastyk/SARIT-corpus), and from a copy of the [GRETIL TEI files](https://github.com/wujastyk/GRETIL-corpus). The licence of each text is given in its own header and should be consulted before reuse. The About page of the site gives fuller credits for both collections.  Bugs and corrections to [Issues](https://github.com/wujastyk/SARIT-corpus/issues) please.
