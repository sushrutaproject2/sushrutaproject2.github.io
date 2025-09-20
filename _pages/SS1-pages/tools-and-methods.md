---
title: 'Tools and Methods'
date: '2020-10-04T19:36:56-06:00'
author: 'Dominik Wujastyk'
layout: page
---

In selecting a software environment, this project has adopted the [Unix philosophy](https://en.wikipedia.org/wiki/Unix_philosophy). While interesting debates surround this concept, what it means for the Sushruta Project is that we have adopted simple, short, clear, modular, and extensible tools wherever possible, with a predilection for open-access software. Conversely, we have preferred not to use large “workbench” programs or “integrated development environments” (IDE) that aim to create a total work environment for all aspects of editorial work. This policy has enabled us to select best-of-class tools for each of the separate tasks we undertake, from manuscript transcription to collation, communication, document creation, version control, project management and web publication. We are also free from a dependence on a single source of program maintenance. If one of our tools no longer meets our need, we can swap out just that component of the workflow for an alternative. It also allows project members some flexibility in choosing how they wish to work. The downside of this choice is that the working environment has several components, and that someone in the project must maintain a certain level of software expertise to get all the parts to work together and to move data between the different programs. The existence of standards such as Unicode and the TEI are critical in making this work smoothly.

Other influences on the management of the Suśruta Project include the [SCRUM principles](https://scrumguides.org/scrum-guide.html) and [The Agile Manifesto principles](https://agilemanifesto.org/).

The following software tools are currently in use.

## Manuscript display

Whatever is provided with your operating system, or the photo display facilities in Dropbox or Nextcloud. Or Quick Palaeographer (see below).

## Manuscript transcription

This project uses [oXygen XML editor](https://www.oxygenxml.com/). Alternatives we have evaluated include [emacs](https://www.gnu.org/software/emacs/), [jedit](http://plugins.jedit.org/plugins/?TEI), [xmlcopyeditor](https://xml-copy-editor.sourceforge.io/), [FairCopy](https://www.faircopyeditor.com/en/) (now free), etc. But oXygen consistently offers better stability, TEI support, online help and validation. oXygen is a commercial product, but academic licenses are relatively inexpensive. The Github-integrated [Visual Studio Code](https://code.visualstudio.com/) has TEI plugins and shows promise as a free alternative to oXygen, as does [LEAF](https://leaf-writer.leaf-vre.org/).

## Manuscript collation and critical edition formatting

[SAKTUMIVA](http://saktumiva.org) by Charles Li. A platform for producing and publishing critical editions of Sanskrit texts. For documentation, see “[Reconstructing a Sanskrit text](https://chchch.github.io/sanskrit-alignment/docs/index.html)“: documentation of the alignment, collation and stemmatic methods in Saktumiva. For further discussion of the methodology behind Saktumiva, see Li [2017](https://www.sidestone.com/bookviewer/9789088904837): 305-310 and Li [2018](https://www.repository.cam.ac.uk/bitstream/handle/1810/284085/limits_of_the_real.pdf?sequence=1&isAllowed=y), ch.4.

## Palaeographical study

[Quick Palaeographer ](https://github.com/chchch/quick-palaeographer)by Charles Li. A browser-based tool for reading MS images and developing a catalogue of character shapes.

## File transfer

[Filezilla](https://filezilla-project.org/) for document transfer to Saktumiva.

## Document library and version control

[Github](https://github.com/) provides our system for document sharing, collaborative editing, security, archiving and versioning. It is open to the public. [Github Desktop](https://desktop.github.com/download/) provides a convenient desktop graphical interface for Github (also [available for Linux](https://github.com/shiftkey/desktop?tab=readme-ov-file#installation-via-package-manager)).

## Document writing and publishing

[LaTeX](https://www.latex-project.org/) for document preparation. Team members variously also use their favourite writing tools, including [LibreOffice](https://www.libreoffice.org/), [Geany](https://www.geany.org/), [Typora](https://typora.io/), &lt;whisper&gt;Sometimes even [vi](https://en.wikipedia.org/wiki/Vi).&lt;/whisper&gt;. [Pandoc](https://pandoc.org/) is used to [convert](https://pandoc.org/try/) documents if necessary. (The more I use Typora the more I like it :-).

Regarding the style and content of the project documenation, some of the concepts developed in the [Diatá](https://diataxis.fr/)[xis](https://diataxis.fr/) project will guide our writing.

## Project management

[Qdpm](https://qdpm.net/) for project management.

## Tools not currently selected

A [number tools and systems](https://sushrutaproject.org/tools-and-projects-not-currently-selected/) have been evaluated but not adopted for the present work-cycles.