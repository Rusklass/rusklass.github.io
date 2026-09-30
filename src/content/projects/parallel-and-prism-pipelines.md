---
title: "Parallel & PRISM: Dual cfRNA Fragmentomics Pipelines"
date: "2026-03-20"
excerpt: "Two complementary computational pipeline architectures for cell-free RNA: reference-anchored positional fragmentomics (Parallel v2.0) and reference-free k-mer graph discovery (PRISM v1.0)."
tags: ["Bioinformatics", "cfRNA", "Fragmentomics", "k-mers", "de Bruijn Graphs", "Python", "Pipelines"]
---

In cell-free RNA (cfRNA) fragmentomics, circulating molecules in plasma or extracellular vesicles carry information not only in their steady-state abundance, but in their cleavage coordinates, fragment length distributions, and protection states. 

Standard bulk RNA-seq workflows treat reads as homogenous count matrices and discard positional and topological patterns. Furthermore, circulating RNA pools contain degraded fragments, heavily modified non-coding species, and non-templated additions that fail standard alignment against linear reference genomes.

To address these challenges, I built two complementary pipeline architectures:
1. **Parallel Pipeline (Parallel v2.0):** A reference-anchored positional fragmentomics framework.
2. **PRISM Pipeline (PRISM v1.0):** An alignment-free, poly-modal sequence discovery framework using k-mers and compacted de Bruijn graphs.

---

### 1. Parallel Pipeline (Parallel v2.0): Reference-Anchored Positional Fragmentomics

Parallel v2.0 shifts the analytical focus from whole-transcript counts to single-nucleotide cleavage coordinates across biological RNA domains. It uses the **ShardMap** hardware-accelerated mapping framework integrated with dual Bowtie and STAR alignment engines.

```
                    ┌──────────────────────────────────────────────┐
                    │ Filtered FASTQ Reads (Reamp R1, 15–100 nt)   │
                    └──────────────────────┬───────────────────────┘
                                           │
                    ┌──────────────────────▼───────────────────────┐
                    │ Exclusive Domain Cascade Alignment           │
                    │ 1. Small RNA (miRNA via miRge3, tRNA, sn/sno)│
                    │ 2. Long RNA (GENCODE v50 exons & lncRNAs)    │
                    │ 3. Microbial QC (SILVA 138.2, post-human)    │
                    └──────────────────────┬───────────────────────┘
                                           │
                    ┌──────────────────────▼───────────────────────┐
                    │ Immutable Positional Event Ledgers           │
                    │ Unit biological mass (w <= 1) per read       │
                    └──────────────────────┬───────────────────────┘
                                           │
             ┌─────────────────────────────┴─────────────────────────────┐
             ▼                                                           ▼
┌───────────────────────────────┐           ┌───────────────────────────────────────────┐
│ Single-Base Cleavage Profiling│           │ Distribution Shape Metrics                │
│ Exact 5' and 3' cut endpoints │           │ Total Variation & Wasserstein 1D distances│
└──────────────┬────────────────┘           └─────────────────────┬─────────────────────┘
               │                                                  │
               └───────────────────────┬──────────────────────────┘
                                       │
                    ┌──────────────────▼──────────────────┐
                    │ Statistical Testing & Guardrails    │
                    │ PERMANOVA with PERMDISP checks      │
                    │ Group-blind peak detection          │
                    │ Within-domain Benjamini-Hochberg    │
                    └─────────────────────────────────────┘
```

#### Key Architecture Principles:
- **Exclusive Domain Cascade Alignment:** Reads (specifically short inserts of 15–100 nt) are routed sequentially through an exclusive hierarchy:
  1. *Small RNAs:* Mature miRNA (with authoritative miRge3 and miRBase v22.1 assignment), tRNA, snRNA, snoRNA, and piRNA.
  2. *Long RNAs:* GENCODE v50 protein-coding exons and lncRNAs, mapped along native transcript axes (MANE Select or longest transcript models).
  3. *Quality Control:* Microbial rRNA (SILVA 138.2) kept strictly post-human to evaluate technical contamination without read stealing.
- **Immutable Positional Event Ledgers:** Every mapped read is assigned a unit biological mass (weight &le; 1) and recorded in coordinate-resolved ledgers, guaranteeing mass conservation across multi-mapping regions.
- **Cleavage & Shape Profiling:**
  - Evaluates exact 5' and 3' cleavage cut sites at single-base resolution (BedGraph and ledger formats).
  - Normalizes positional coverage distributions per transcript.
  - Measures shape divergence between clinical cohorts using non-parametric distance metrics: Total Variation distance as primary, with Wasserstein 1D as sensitivity verification.
- **Statistical Testing & Dispersion Guardrails:**
  - Employs PERMANOVA on shape distance matrices coupled with PERMDISP checks to confirm that significant differences reflect true location shifts rather than unequal within-group variance.
  - Identifies group-blind cleavage endpoint peaks with strict within-domain Benjamini–Hochberg false discovery rate control.

#### Primary Use Cases:
- **Positional Biomarker Discovery:** Pinpointing disease-associated cleavage motifs or fragment length shifts in known transcripts that are undetectable by conventional gene expression counting.
- **RNase Degradation & Footprinting:** Mapping which transcript segments remain protected in circulation through ribonucleoprotein complexes or extracellular vesicle encapsulation.

---

### 2. PRISM Pipeline (PRISM v1.0): Reference-Free Poly-Modal Discovery

PRISM (**P**oly-modal **R**eference-free **I**dentification of **S**ignatures & **M**arkers) is an alignment-free pipeline. Rather than mapping against a reference genome, PRISM operates directly on raw sequence space using k-mers and compacted de Bruijn graphs (cDBG).

```
                    ┌──────────────────────────────────────────────┐
                    │ Input Reads (FASTQ / Residual Unmapped)      │
                    └──────────────────────┬───────────────────────┘
                                           │
                    ┌──────────────────────▼───────────────────────┐
                    │ k-mer Decomposition (KMC3: k=21, k=31)       │
                    └──────────────────────┬───────────────────────┘
                                           │
             ┌─────────────────────────────┴─────────────────────────────┐
             ▼                                                           ▼
┌───────────────────────────────────────────┐ ┌───────────────────────────────────────────┐
│ Branch A: Count Reduction & Clustering    │ │ Branch B: Topological Graph Association   │
│ • Abundance matrix filtering              │ │ • Compacted de Bruijn graph (cDBG)        │
│ • KaMRaT association ranking & contigs    │ │ • Unitig phenotype testing (edgeR QL)     │
│ • Linclust/MMseqs2 sequence clustering    │ │ • Bubble extraction (splicing/structural) │
└─────────────────────┬─────────────────────┘ └─────────────────────┬─────────────────────┘
                      │                                             │
                      │ (Consensus Centroids)                       │ (Unitigs & Splicing Bubbles)
                      └──────────────────────┬──────────────────────┘
                                             │
                    ┌────────────────────────▼─────────────────────┐
                    │ Dual-Branch Convergence & DP Path Stitching  │
                    │ Consolidated Golden Biomarker Signatures     │
                    └────────────────────────┬─────────────────────┘
                                             │
             ┌───────────────────────────────┴───────────────────────────┐
             ▼                                                           ▼
┌───────────────────────────────────────────┐ ┌───────────────────────────────────────────┐
│ Retrospective Biological Annotation       │ │ Cross-Validated Machine Learning          │
│ GENCODE, tRF, RepeatMasker, SILVA QC      │ │ Nested CV with ElasticNet & Random Forest │
└───────────────────────────────────────────┘ └───────────────────────────────────────────┘
```

#### Dual-Branch Convergence Architecture:
- **Branch A (Count Reduction & Clustering):**
  - High-throughput k-mer extraction using KMC3 at defined strata (k=21 and k=31).
  - Abundance filtering and statistical association testing using KaMRaT to merge co-occurring k-mers into contiguous sequence fragments.
  - Linear-time sequence clustering via Linclust and MMseqs2 with dynamic programming verification to generate non-redundant consensus centroids.
- **Branch B (Topological Graph Association):**
  - Constructs compacted de Bruijn graphs directly from sample read pools.
  - Tests unitigs for phenotypic association (GLM / edgeR quasi-likelihood) and extracts neighborhood subgraphs to isolate alternative splicing loops and sequence variation bubbles.
- **Dual-Branch Convergence & Retrospective Annotation:**
  - Stitches contigs and unitigs via dynamic programming path alignment into consolidated biomarker signatures.
  - Retrospectively annotates identified signatures against reference databases (GENCODE, tRF databases, RepeatMasker, and SILVA).
  - Evaluates predictive performance via nested cross-validation (ElasticNet, Random Forest).

#### Primary Use Cases:
- **Circulating "Dark Matter" Discovery:** Capturing biological signals from reads that fail linear alignment due to dense post-transcriptional modifications (such as 1-methyladenosine [m1A] or 1-methylguanosine [m1G] in tRNA loops), non-templated nucleotide additions, or structural fusions.
- **Unbiased Biomarker Identification:** Identifying unannotated non-coding transcripts or microbial cfRNA fragments without reference bias.

---

### Side-by-Side Comparison

| Feature | Parallel Pipeline (v2.0) | PRISM Pipeline (v1.0) |
| :--- | :--- | :--- |
| **Analytical Paradigm** | Reference-anchored alignment | Reference-free sequence discovery |
| **Input Material** | Filtered FASTQ (Reamp R1, 15–100 nt) | Filtered FASTQ or residual unmapped reads |
| **Core Data Structures** | Coordinate ledgers, BAMs, BedGraph | $k$-mer count matrices, compacted de Bruijn graphs |
| **Target Scope** | Known transcripts, defined RNA domains, cut sites | Canonical RNAs, unannotated RNAs, modified loops, dark matter |
| **Positional Resolution**| Single-nucleotide 5' and 3' coordinates | Assembled $k$-mer contigs, unitigs, bubble subgraphs |
| **Statistical Methods** | Total Variation, PERMANOVA, PERMDISP | edgeR QL on unitigs, graph association, ML ranking |
| **Primary Goal** | Mechanistic analysis of RNA cleavage and fragment stability | Unbiased biomarker discovery from altered sequence space |

---

### Implementation & Reproducibility

Both pipelines are implemented with reproducible workflow managers (Nextflow/Python), containerized via Docker and Apptainer, and optimized for high-performance computing clusters with hardware-accelerated mapping routines.
