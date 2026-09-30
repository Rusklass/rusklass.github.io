---
title: "Primer Design Tool"
date: "2026-01-15"
excerpt: "Web application for designing and evaluating stem-loop and two-tailed RT-qPCR primers targeting microRNAs."
tags: ["Python", "FastAPI", "ViennaRNA", "Docker", "Bioinformatics"]
link: "https://pdt.klassen.ing/"
logo: "/logoPrimerDesignTool-removebg.png"
---

The [**Primer Design Tool (PDT)**](https://pdt.klassen.ing/) automates the design of stem-loop reverse transcription and two-tailed qPCR primers for mature microRNAs (~22 nt). 

Because microRNAs are roughly the same length as a single standard PCR primer, conventional assay designs fail. Two-tailed assays solve this by binding both halves of the target miRNA with complementary arms connected by an internal loop. However, calculating the binding thermodynamics, secondary hairpin stabilities, and cross-dimerization manually across dozens of targets is impractical.

### What the Application Does

- **Thermodynamic Scoring:** Evaluates nearest-neighbor melting temperatures ($T_m$), enthalpy, and entropy across both binding arms and the stem region.
- **Secondary Structure Modeling:** Uses the ViennaRNA package (`RNAfold`) to predict competing hairpin formations and ensure the designed probe remains open for target hybridization.
- **Batch Processing:** Accepts miRBase accession IDs or raw sequence inputs, searches local sequence indices with SQLite FTS5, and outputs ranked candidate pairs.
- **Visual Verification:** Renders interactive 2D RNA secondary structure layouts in the browser using Forna and D3.js.

### Engineering & Architecture

- **Backend:** Python 3 with FastAPI (`uvicorn`), using SQLAlchemy 2.0 and `aiosqlite` for asynchronous database queries.
- **Structure Engine:** ViennaRNA C-library wrapper with fallback routines for lightweight deployment targets.
- **Background Tasks:** Celery worker with Redis for batch calculations, falling back to synchronous execution when run locally without broker dependencies.
- **Frontend:** Server-rendered Jinja2 templates styled with vanilla CSS, vanilla JavaScript, and dynamic HTML5 canvas/SVG visualizations.
- **Deployment:** Multi-stage Docker containerization deployed on a production VPS with automated TLS certificates.

The tool is routinely used by researchers at BIOCEV and the GeneCore facility to design assays for acute neurotrauma and fluid biomarker studies.