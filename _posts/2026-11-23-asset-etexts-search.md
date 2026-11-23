---
layout: post
title: "eTexts: Searching the Printed Editions of the Medical Classics"
author: Dominik Wujastyk
date: 2026-11-23 09:00:00
description: Reading editions of six Sanskrit medical works with their commentaries, in IAST, with one search across them all
tags: SuśrutaProject assets eTexts TEI Ayurveda Claude
---

This is the first of a short series of posts describing the items in the [Assets](https://sushrutaproject2.github.io/resources/) menu of this website. Over the last two months I have written a number of utilities and online services together with Claude, Anthropic's AI system. Each was made to solve a problem that came up in the Suśruta Project's daily work, and each seemed useful enough to share.

## What it is

[eTexts](https://sushrutaproject.github.io/eTexts/) is a collection of digital reading editions of the classical Sanskrit medical treatises, each with its commentaries, in IAST transliteration:

- _Carakasaṃhitā_, with Cakrapāṇidatta's commentary
- _Suśrutasaṃhitā_, with Ḍalhaṇa's commentary (and Gayadāsa on the Nidānasthāna)
- _Aṣṭāṅgahṛdaya_, with the commentaries of Aruṇadatta and Hemādri
- _Mādhavanidāna_, with the _Madhukośa_ and _Ātaṅkadarpaṇa_
- _Śārṅgadharasaṃhitā_, with the commentaries of Āḍhamalla and Kāśīrāma
- _Aṣṭāṅgasaṅgraha_, mūla only 

These are the texts of the published editions, the printed books, what we call the vulgates (not Vulgate!), and not the result of our own critical editing. The About page of each text names the printed edition and the online source from which it was taken.

## Why we wanted it

This tool arose directly out of the work of [the Suśruta Project](https://sushrutaproject.github.io).  When editing, translating and discussing the Nepalese version of the _Suśrutasaṃhitā_, we constantly need to look things up in the vulgate and in the other medical classics. Where else does this word occur? Does Caraka have a parallel to this passage? What did Ḍalhaṇa say about it, and did Cakrapāṇi say the same? The texts have been available online for years, most notably through the e-Saṃhitā pages of the National Institute of Indian Medical Heritage, but they are spread over several websites, each with its own interface, and some can only be searched in Devanāgarī or not searched across chapters at all.  While the content of the NIIMH sites is excellent, the websites themselves have been quite unstable in the past.

What we wanted was a single, fast, stable search box for all of them.

## How it works

The search page looks in the whole collection, in a single text, or in a single _sthāna_ of a text. One can search the root text, the commentaries and the notes separately or together. Diacritics can be ignored, so that typing _dosa_ finds _doṣa_, and regular expressions are available for those who like them. Clicking on a result opens the chapter with the matches highlighted. For the root text of the _Suśrutasaṃhitā_, each result also gives the page of the 1938 printed edition.

The search runs entirely in the reader's browser. There is no server and no database. The first search downloads the index of the collection, and after that searching is immediate.

Each text can also be downloaded as a TEI XML file, either the root text alone or with its commentaries.

## Background

The collection began in September 2026 as five separate websites, each built from pages gathered from an existing online edition. The TEI files were generated afterwards from those pages. In November we reversed the direction. The TEI file of each text is now the master copy, and the reading pages, the search index and the downloads are all generated from it automatically whenever the file changes. To correct a reading or improve the word division, one edits the TEI file and nothing else.

A useful consequence is that a new text can be added by putting a TEI file into a new folder of the repository. The converter was tested on all the texts of the SARIT library as well as on our own files.

The source is at [github.com/sushrutaproject/eTexts](https://github.com/sushrutaproject/eTexts). Corrections are welcome: please send them as [Issues](https://github.com/sushrutaproject/eTexts/issues).
