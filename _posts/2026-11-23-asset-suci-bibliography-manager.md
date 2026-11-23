---
layout: post
title: "Sūcī: A Bibliography Manager with Indic Characteristics"
author: Dominik Wujastyk
date: 2026-11-23 09:06:00
description: A fast BibTeX and BibLaTeX manager designed for humanities work on South Asia
tags: SuśrutaProject assets bibliography BibLaTeX software Claude
---

This post is the last of a series on the items in the [Assets](https://sushrutaproject2.github.io/resources/) menu of this website, which I have written over the last two months together with Claude.

## What it is

[Sūcī](https://wujastyk.github.io/suci/) is a program for managing a bibliography. The name is the Sanskrit word सूची, which means "list" or "index," and also "needle."

It works with bibliography files in the BibTeX and BibLaTeX formats. These were created for use with LaTeX, but the format is simple plain text and has become a general standard that many online services and other bibliography programs can read and write, so Sūcī may be useful even to people who do not use LaTeX. It runs on Linux, macOS and Windows.

## Background

The Suśruta Project's publications, and the citations on this website, are generated from a BibLaTeX file of about 6,700 entries (it can be [searched online](https://wujastyk.github.io/bibliographies), as described in an [earlier post](https://sushrutaproject2.github.io/blog/2026/asset-bibliographies-and-materia-medica/)). For many years I have maintained it with [JabRef](https://www.jabref.org/), a capable program to which I owe a great deal.  I unhesitatingly recommend JabRef to anyone working on a bibliography, and it many situations it will be a better choice than Sūcī. But general-purpose bibliography managers are not designed with Indology in mind. They do not know that _śāstra_ should be found when one types "sastra," or that ā follows a and not z, or that a title such as _Nyāya-vaiśeṣika_ should not be "corrected" when titles are capitalised. They look up books in catalogues that are weak on Indian publications. And much of our older literature is now read as scans at the Internet Archive, which need to be cited by a stable identifier.

Sūcī was started in October 2026 to deal with these things.

## What it does

- **Speed.** The 6,700-entry library opens in about a quarter of a second.
- **Care with the file.** Entries that have not been edited are saved exactly as they were, byte for byte. Sūcī reads and writes the same files as JabRef, so one can move between the two freely. A backup is kept at every save.
- **Searching without diacritics.** "sastra" finds _śāstra_. One can also search for phrases, particular fields and ranges of years.
- **Sanskrit alphabetical order** is available as a sort order: a ā i ī u ū ṛ … k kh g gh ṅ … ś ṣ s h.
- **Adding an entry from a DOI or ISBN.** ISBNs are looked up in the K10plus/GVK union catalogue, Open Library and Google Books together, and one chooses the best record.
- **Finding a DOI or ISBN from a title.** Open-access copies are offered first, and book reviews are not mistaken for the book.
- **Internet Archive scans.** The ARK identifier of a scan is stored in the entry and opens in the browser with one click. Multi-volume works can have a separate identifier for each volume.
- **Formatted citations** in Chicago, New Hart's Rules and other styles, with italics, ready to paste into an email or a word-processor document.
- **Capitalisation of English titles** that leaves Sanskrit terms, and titles in other languages and scripts, alone.
- **Conversion of LaTeX accents to Unicode** and back.
- **An integrity check** that finds missing fields, duplicate keys, bad ISBNs and similar problems, and can repair many of them.

Sūcī does not have JabRef's groups or full-text search of PDFs, and it does not connect directly to Word or LibreOffice.

## Getting it

There are installers for Linux and Windows on the [releases page](https://github.com/wujastyk/suci/releases), and instructions for building the program on macOS. The source code, under the MIT licence, is at [github.com/wujastyk/suci](https://github.com/wujastyk/suci). Sūcī is written in Rust with the GTK 4 toolkit, and citations are formatted by the [hayagriva](https://github.com/typst/hayagriva) engine using styles from the Citation Style Language project. Please post bugs and suggestions to [Issues](https://github.com/wujastyk/suci/issues).
