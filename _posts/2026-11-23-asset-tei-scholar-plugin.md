---
layout: post
title: "TEI Scholar: A Plugin for Editing the Project’s XML Files"
author: Dominik Wujastyk
date: 2026-11-23 09:04:00
description: A VS Code and VSCodium extension that handles Saktumiva footnotes, TEI help, and fonts for Indian scripts
tags: SuśrutaProject assets TEI Saktumiva software Claude
---

This post is one of a series on the items in the [Assets](https://sushrutaproject2.github.io/resources/) menu of this website, which I have written over the last two months together with Claude.

## The problem

The Suśruta Project's transcriptions and editions are TEI XML files. They are collated and published with Charles Li's [Saktumiva](https://chchch.github.io/saktumiva/docs/). In a Saktumiva edition, an editor's note on a passage is not typed at the place where it applies. A small `<anchor>` element is put in the text, and the note itself goes into a `<standOff>` element at the end of the file, connected to the anchor by matching identifiers:

```xml
<anchor xml:id="SS.3.1.4-n1"/>
  ...
<standOff corresp="#SS.3.1.4" type="Note">
    <note xml:lang="en" target="#SS.3.1.4-n1">Text of the note.</note>
</standOff>
```

This is a sound design, but it is laborious to do by hand. The editor has to invent an identifier, type it twice without a slip, and scroll to the end of a long file and back, perhaps hundreds of times in a chapter. Mistakes are inevitable. When we recently checked the provisional edition files of the _Suśrutasaṃhitā_ we found about 110 problems of this kind: anchors without notes, notes without anchors, and duplicated identifiers.

## What the plugin does

[TEI Scholar](https://sushrutaproject.github.io/TEI-scholar-Codium-plugin/) is an extension for the free editors VS Code and VSCodium. Its main purpose is to make a Saktumiva note behave like a footnote in a word processor. One presses a key at the point in the text where the note belongs, types the note in a pane at the bottom of the window, and saves it. The plugin creates the anchor and the note together, numbers them, and puts the note in the right place at the end of the file. Hovering over an anchor shows its note, and one can jump from an anchor to its note and back. Deleting the anchor deletes the note. Notes can be of different types, such as Note, Emendation and Testimonia, which Saktumiva displays separately.

It does several other things that we found we wanted:

- Hovering over any TEI element shows what it means, which attributes it takes and where it may be used, with a link to the TEI Guidelines.
- Files are validated as one types, against the TEI schema or the project's own. The validation is done by Red Hat's XML extension, using the same validator as oXygen.
- It warns about duplicate identifiers and about pointers to identifiers that do not exist.
- A menu switches between font settings suited to markup, to IAST, to Devanāgarī, and to Tibetan and South Indian scripts.
- Selected text can be converted between IAST, Devanāgarī, Harvard-Kyoto and Velthuis.

## Background

For many years most of us have used the oXygen XML Editor, which is excellent, but it is a commercial program and its licence is a real cost for students and for colleagues without institutional support. VS Code and VSCodium are free and run on every system. What they lacked was a knowledge of the conventions of our files. The first version of the plugin was written in October 2026.

The plugin is not specific to the _Suśrutasaṃhitā_. It should be useful to anybody editing TEI transcriptions of Sanskrit manuscripts, and especially to other users of Saktumiva. It can be downloaded from [github.com/sushrutaproject/TEI-scholar-Codium-plugin](https://github.com/sushrutaproject/TEI-scholar-Codium-plugin), where there are instructions for installing it.  Please post bugs or corrections to [Issues](https://github.com/sushrutaproject/TEI-scholar-Codium-plugin/issues).

For those who would prefer not to see the XML at all, the next post in this series describes a different approach.
