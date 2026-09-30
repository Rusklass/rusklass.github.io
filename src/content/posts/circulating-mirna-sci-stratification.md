---
title: "Circulating microRNA dynamics and severity stratification in acute human spinal cord injury"
date: "2026-03-25"
excerpt: "Prospective two-cohort discovery and two-tailed RT-qPCR validation of a hyper-acute 4-miRNA plasma panel for objective SCI severity stratification in 113 human participants."
tags: ["Spinal Cord Injury", "microRNA", "Biomarkers", "RT-qPCR", "Machine Learning"]
---

> [!NOTE]
> **Pre-Publication Status:**  
> Specific microRNA accession numbers in the 4-marker diagnostic panel are presented under blinded designations (*Candidate miRNAs 1–4*) while the manuscript is undergoing peer review. Full miRBase identifiers will be unblinded upon formal publication.

Early clinical evaluation of traumatic spinal cord injury (SCI) relies on bedside examination according to the International Standards for Neurological Classification of Spinal Cord Injury (ISNCSCI) to determine the American Spinal Injury Association (ASIA) Impairment Scale (AIS) grade. In the hyper-acute window (3–12 hours post-injury), reliable motor and sensory examination is frequently precluded by deep sedation, endotracheal intubation, acute intoxication, or hemodynamic instability.

In this multi-center study ([Klassen et al., 2026](https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE326859)), we evaluated whether circulating plasma microRNAs (miRNAs) provide an objective readout of injury severity within the first hours of hospital admission.

### Two-Stage Cohort Design (113 Participants)

To guard against technical artifacts and false discoveries, we established a prospective two-stage clinical study:

1. **Discovery Cohort (Cohort 1, n = 59; 80 hyper-acute samples):**
   - 31 acute traumatic SCI patients (16 Severe: AIS A/B; 15 Mild: AIS C/D; mean age 50.8 years) and 28 uninjured male controls.
   - Restricted to male participants to minimize baseline transcriptomic variance during initial unbiased discovery.
   - Longitudinally sampled across five timepoints: 3 hours, 12 hours, 24 hours, 3 days, and 7 days post-injury.
   - Profiled via small RNA sequencing on an Illumina NextSeq platform.
2. **Validation Cohort (Cohort 2, n = 54; 54 hyper-acute samples):**
   - 27 independent acute SCI patients (10 Severe, 17 Mild; mean age 47.6 years) and 27 uninjured controls.
   - Sex-balanced (enrolling both male and female participants) to assess demographic generalizability.
   - Focused strictly on the hyper-acute window (3 and 12 hours post-injury).
   - Profiled orthogonally using two-tailed RT-qPCR assays (TATAA Biocenter / GeneCore).

### Pre-Analytical Quality Control

Because circulating biofluids are sensitive to pre-analytical noise, samples followed strict handling protocols:
- **Two-Step Platelet-Poor Plasma (PPP):** Initial centrifugation at 500 &times; g for 10 min, followed by supernatant centrifugation at 2,000 &times; g for 10 min to eliminate residual platelets and cellular debris.
- **Quantitative Hemolysis Screening:** Screened via the microRNA delta-Cq ratio (`ΔCq = Cq(miR-23a-3p) - Cq(miR-451a)`). Samples with `ΔCq > 15` were excluded to prevent erythrocyte-derived distortion.
- **Spike-in Normalization:** Synthetic spike-in controls (*cel-miR-54-3p*, *miR-spike-A*, *cel-miR-76*) monitored extraction and reverse transcription efficiencies.
- **Reference Gene Selection:** Systematic evaluation via geNorm and NormFinder confirmed *hsa-miR-16-5p* as the optimal endogenous normalizer across injury severities and time intervals.

### Longitudinal Profiles & Hyper-Acute Severity Scaling

Small RNA sequencing revealed distinct temporal trajectories across the post-injury course:
- **Hyper-Acute Wave (3–12 h):** Rapid elevation of motor-associated transcripts alongside cellular stress and vascular permeability markers. Concurrently, homeostatic and vascular markers showed progressive suppression.
- **Persistence of Motor Biomarker (Candidate miRNA 1):** While most markers peaked around 24 hours and began resolving toward baseline by days 3 and 7, **Candidate miRNA 1** (*spinal motoneuron distress / Cx43 axis*) remained continuously elevated across the entire 7-day window. In acute spinal trauma, motoneuron ischemia and mechanical disruption trigger rapid release of this transcript, which also regulates connexin 43 (Cx43) astrocytic gap-junction communication.
- **Severity Gradients:** In the 3–12 hour window, expression shifts showed a stepwise progression from uninjured controls to Mild (AIS C/D) to Severe (AIS A/B) injuries.

### Machine Learning Prioritization & Empirical Benchmarking

To distill candidate biomarkers from hyper-acute sequencing data without informational leakage:
- **Nested Elastic-Net Multinomial Regression:** Trained within a repeated nested cross-validation framework (20 repeats &times; 5-fold, 100 out-of-fold cycles).
- **Discovery Performance:** The model achieved an out-of-fold macro-averaged AUC of 0.719 &plusmn; 0.086 (95% CI: [0.702, 0.736]). One-vs-Rest AUCs reached 0.802 for controls, 0.715 for Mild SCI, and 0.561 for Severe SCI, with misclassifications occurring primarily between adjacent injury grades.
- **Shadow-Variable Stability Selection:** Benchmarked against permuted noise variables across 100 iterations. This prioritized a core signature capturing distinct physiological axes:
  - **Candidate miRNA 1** (100% selection frequency; motor tract distress / Cx43 gap junctions)
  - **Candidate miRNA 2** (endothelial survival and vascular barrier integrity)
  - **Candidate miRNA 3** (cellular stress and apoptotic signaling)
  - **Candidate miRNA 4** (89.0% selection frequency; systemic immune mobilization)

### Independent RT-qPCR Validation (Cohort 2)

Candidates were evaluated in the independent validation cohort ($n = 54$) using $L_2$-regularized logistic regression over 50 repeated stratified 5-fold cross-validations (250 out-of-fold evaluations):

- **Four-miRNA Panel Discrimination:** The combined four-miRNA signature (**Candidate miRNAs 1–4**) achieved an out-of-fold pooled ROC-AUC of **0.644** (mean fold AUC = **0.660 &plusmn; 0.164**), outperforming individual constituent markers (*Candidate 2*: 0.626; *Candidate 1*: 0.621; *Candidate 4*: 0.439; *Candidate 3*: 0.380).
- **Threshold Calibration (Youden Index):** Calibrating the clinical cutoff at $T = 0.35$ optimized severe patient identification, achieving **71.2% sensitivity** (severe injury recall), **54.9% specificity**, and **63.1% balanced accuracy**.
- **Subgroup Stability Audits:**
  - *Platform Concordance:* RT-qPCR AUC = 0.644 vs. NGS AUC = 0.609.
  - *Temporal Window:* 12 hpi AUC = 0.643; 3 hpi AUC = 0.434.
  - *Sex Generalizability:* Male AUC = 0.695; Female AUC = 0.581.
  - *Age Tiers:* < 45 years AUC = 0.643; 45–65 years AUC = 0.653; &ge; 65 years AUC = 0.321.

### Summary

Measuring circulating plasma microRNAs within 3 to 12 hours of traumatic spinal cord injury provides an objective molecular signal of injury severity. Combining motoneuron (*Candidate 1*), microvascular (*Candidate 2*), apoptotic (*Candidate 3*), and immune (*Candidate 4*) markers yielded 71.2% sensitivity for identifying severe motor-complete injuries under cross-validated threshold calibration.

Sequencing data are deposited in NCBI GEO under accession number [GSE326859](https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE326859).
