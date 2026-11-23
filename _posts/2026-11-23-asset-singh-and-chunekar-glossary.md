---
layout: post
title: "An Index to Singh and Chunekar’s Glossary of Vegetable Drugs in Bṛhattrayī"
author: Dominik Wujastyk
date: 2026-11-23 09:03:00
description: A searchable concordance of headwords, botanical names and citations, linked to page images at the Internet Archive
tags: SuśrutaProject assets materia_medica plants IIIF Claude
---

This post is one of a series on the items in the [Assets](https://sushrutaproject2.github.io/resources/) menu of this website, which I have written over the last two months together with Claude.

## The book

Thakur Balwant Singh and K. C. Chunekar's _Glossary of Vegetable Drugs in Bṛhattrayī_ (Varanasi: Chowkhamba Sanskrit Series Office, 1972) is one of the books that is always open on the desk of anyone translating Sanskrit medical literature. It lists every plant name in the _Carakasaṃhitā_, the _Suśrutasaṃhitā_ and the _Aṣṭāṅgahṛdaya_ in Nāgarī alphabetical order. For each name the authors give a discussion of the plant's identity, often drawing on the commentators and on their own knowledge of the plants and of the drug markets, and then a list of every place in the three works where the name occurs.

Those lists of occurrences are extremely valuable, but in a printed book they can only be used in one direction, from the plant name to the passages. One cannot ask the book which plants are mentioned in a particular chapter, or which Sanskrit names the authors connect with a particular botanical species, without a great deal of page turning.

## The index

The [online index](https://sushrutaproject.github.io/glossaries/singh-chunekar-1972/) makes these questions easy. It contains:

- 1,848 entries, with 2,187 headwords in Devanāgarī and IAST;
- 30,342 citations of the three works, each one parsed into text, _sthāna_, chapter and verse;
- 669 distinct botanical names.

One can search by headword, by botanical name or by passage. Typing a reference such as Suśruta, Sūtrasthāna 38, shows every plant that Singh and Chunekar cite from that chapter.

The book is still in copyright, so we have not reproduced its text. The repository holds index data only: headwords, page numbers, botanical names and citations. When an entry is opened, the search page shows that entry's own part of the printed page, fetched directly from the [scan at the Internet Archive](https://archive.org/details/Singh-Chunekar-1972) by means of IIIF. The authors' discussion is therefore read in the original, as it should be.

## How it was made, and how far to trust it

All 568 pages of the scan were read by OCR. The headwords in the book are printed twice, once in Devanāgarī and once in spaced roman capitals, and this was a great help: the two readings were compared letter by letter, and each headword is marked according to whether they agree. About three quarters agree exactly, and about a tenth disagree and should be checked against the page image, which is always one click away.

The citation numbers come from OCR of small type. Errors are rare but they exist, so please look at the scan before quoting a reference. The botanical names are those of the book, in the nomenclature of 1972.  Many formal botanical names have since changed under the supervision of the [International Association for Plant Taxonomy](https://www.iaptglobal.org/).  Wikipedia is a surprisingly excellent source of up-to-date plant names (e.g., [Centella asiatica (L.) Urban](https://en.wikipedia.org/wiki/Centella_asiatica)).

The data and the programs are at [github.com/sushrutaproject/glossaries](https://github.com/sushrutaproject/glossaries), together with a fuller account of the method. The repository is laid out so that other reference works on Indian materia medica can be added in the same way. Corrections are very welcome.

For the scholarship, please cite the book itself.  Corrections to [Issues](https://github.com/sushrutaproject/glossaries/issues), please.
