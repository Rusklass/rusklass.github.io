import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      {/* 1. HERO & MISSION */}
      <section className={styles.heroSection}>
        <div className={styles.heroTag}>
          <span>Multi-Omics • Glial Neuroscience • Scientific Software</span>
        </div>

        <h1 className={styles.heroTitle}>
          Liquid Biopsy &amp; Neurotrauma:<br />
          <span className={styles.heroHighlight}>RNA fragmentomics and regulatory dynamics in CNS injury</span>
        </h1>

        <p className={styles.heroLead}>
          I am a researcher and bioinformatician at <strong>GliaOmicsLab</strong> (Institute of Biotechnology CAS / BIOCEV) and a Ph.D. candidate at <strong>UCT Prague</strong>. My work focuses on cell-free RNA fragmentomics in late ischemic stroke, multi-layer regulatory networks (miRNA, mRNA, proteomics) in acute neurotrauma, and custom computational tooling for molecular biology.
        </p>
      </section>

      {/* 2. ABOUT ME: THE TRAJECTORY */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionPre}>Background</span>
          <h2 className={styles.sectionTitle}>From Backcountry Expeditions to Computational Biology</h2>
          <p className={styles.sectionDesc}>
            How laboratory bottlenecks and long-haul problem-solving shaped my research path.
          </p>
        </div>

        <div className={styles.trajectoryGrid}>
          <div className={styles.storyCard}>
            <div className={styles.storyCardHeader}>
              <span className={styles.storyNumber}>01</span>
              <h3 className={styles.storyCardTitle}>Siberian Routes &amp; Problem Solving</h3>
            </div>
            <p className={styles.storyCardText}>
              I grew up in Siberia, spending years in competitive athletics and backcountry expeditions across the Altai Mountains. After a spinal injury ended my athletic career, I redirected that focus into academic research. Extended wilderness expeditions taught me patience and consistency when tackling unstructured, long-term problems.
            </p>
          </div>

          <div className={styles.storyCard}>
            <div className={styles.storyCardHeader}>
              <span className={styles.storyNumber}>02</span>
              <h3 className={styles.storyCardTitle}>Bench Automation @ UCT Prague</h3>
            </div>
            <p className={styles.storyCardText}>
              During my Master&apos;s research at UCT Prague investigating silver nanoparticles on plant cytoskeletons (<em>Plants 2022</em>), measuring microtubule regrowth via FRAP kymography across thousands of confocal frames manually was too slow. I automated the measurement workflows using ImageJ/Fiji macros and R scripts, cutting weeks of repetitive manual work and shifting my focus toward computational biology.
            </p>
          </div>

          <div className={styles.storyCard}>
            <div className={styles.storyCardHeader}>
              <span className={styles.storyNumber}>03</span>
              <h3 className={styles.storyCardTitle}>Acute Neurotrauma @ BIOCEV</h3>
            </div>
            <p className={styles.storyCardText}>
              Joining the Institute of Biotechnology CAS (BIOCEV) connected computational analysis directly to acute neurotrauma pathology. Having recovered from severe spinal injury myself, I treat expression matrices and time-series data with clear awareness of the physical recovery process. My doctoral research models time-resolved regulatory networks across acute central nervous system trauma.
            </p>
          </div>

          <div className={styles.storyCard}>
            <div className={styles.storyCardHeader}>
              <span className={styles.storyNumber}>04</span>
              <h3 className={styles.storyCardTitle}>Glial Heterogeneity &amp; Tissue Response</h3>
            </div>
            <p className={styles.storyCardText}>
              Glial populations—astrocytes, NG2 glia, and oligodendrocytes—define the microenvironment of the damaged CNS. In collaborative work published in <em>Glia (2021)</em> and <em>Frontiers (2022)</em>, we mapped how transient glial subpopulations emerge after ischemic brain injury, characterizing cell state transitions between reactive scar formation and tissue support.
            </p>
          </div>
        </div>
      </section>

      {/* 4. KEY RESEARCH HIGHLIGHTS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionPre}>Featured Publications</span>
          <h2 className={styles.sectionTitle}>Key Research &amp; Regulatory Networks</h2>
          <p className={styles.sectionDesc}>
            Selected peer-reviewed studies on non-coding RNA networks and cellular injury responses.
          </p>
        </div>

        <div className={styles.researchGrid}>
          {/* Klassen 2026 Human SCI */}
          <Link
            href="/posts/circulating-mirna-sci-stratification"
            className={styles.pubCard}
          >
            <div className={styles.pubMeta}>
              <span className={styles.pubJournal}>In Review • GEO GSE326859</span>
              <span className={styles.pubYear}>2026 • First Author</span>
              <span style={{ color: 'var(--accent-primary)' }}>Read Research Note &rarr;</span>
            </div>
            <h3 className={styles.pubTitle}>
              Circulating microRNA dynamics and severity stratification in acute human spinal cord injury
            </h3>
            <p className={styles.pubAuthors}>
              <strong>Ruslan A. Klassen</strong>, Sarka Chytilova, Eva Rohlova, Pavel Abaffy, Ales Hejcl, Karel Pistek, David Bludovsky, Jakub Jablonsky, Eva Svecova, Jaroslav Adamkov, Kristyna Sintakova, Nataliya Romanyuk, Lukas Valihrach
            </p>
            <div className={styles.pubHighlight}>
              <strong>Key Finding:</strong> Identified and validated an objective hyper-acute 4-miRNA plasma panel (miR-92a-3p, miR-206, miR-497-5p, miR-150-5p) across 113 human subjects, achieving 71.2% sensitivity for severe injury stratification under cross-validated threshold calibration.
            </div>
          </Link>

          {/* MT-NA 2025 */}
          <a
            href="https://doi.org/10.1016/j.omtn.2025.102746"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.pubCard}
          >
            <div className={styles.pubMeta}>
              <span className={styles.pubJournal}>Molecular Therapy Nucleic Acids</span>
              <span className={styles.pubYear}>2025 • First Author</span>
              <span style={{ color: 'var(--accent-primary)' }}>DOI: 10.1016/j.omtn.2025.102746 &rarr;</span>
            </div>
            <h3 className={styles.pubTitle}>
              Integrated multi-omics profiling uncovers miRNA-guided regulatory networks after spinal cord injury in rats
            </h3>
            <p className={styles.pubAuthors}>
              <strong>Ruslan Klassen</strong>, Sarka Chytilova, Ivan Arzhanov, Daniel Zucha, Eva Rohlova, Peter Androvic, Pavel Abaffy, Lucia Urdzikova-Machova, Mikael Kubista, Nataliya Romanyuk, Lukas Valihrach
            </p>
            <div className={styles.pubHighlight}>
              <strong>Key Finding:</strong> Constructed a matched tri-layer interactome (miRNA, mRNA, protein) of acute spinal cord injury, identifying miR-20a as an in vitro regulator of neural stem cell survival under oxidative stress.
            </div>
          </a>

          {/* Frontiers 2026 EV */}
          <a
            href="https://doi.org/10.3389/fncel.2026.1835240"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.pubCard}
          >
            <div className={styles.pubMeta}>
              <span className={styles.pubJournal}>Frontiers in Cellular Neuroscience</span>
              <span className={styles.pubYear}>2026</span>
              <span style={{ color: 'var(--accent-primary)' }}>DOI: 10.3389/fncel.2026.1835240 &rarr;</span>
            </div>
            <h3 className={styles.pubTitle}>
              Neural stem cell-derived extracellular vesicles drive early neuroprotective and anti-apoptotic responses in spinal cord injury organotypic slices
            </h3>
            <p className={styles.pubAuthors}>
              Kristyna Sintakova, Vojtech Sprincl, Ivan Arzhanov, <strong>Ruslan Klassen</strong>, Lukas Valihrach, Nataliya Romanyuk
            </p>
            <div className={styles.pubHighlight}>
              <strong>Key Finding:</strong> Characterized small non-coding RNAs carried by neural stem cell-derived extracellular vesicles, evaluating their anti-apoptotic effects in organotypic spinal cord slice cultures.
            </div>
          </a>
        </div>

        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <Link href="/research" style={{ fontWeight: 600, fontSize: '1rem', textDecoration: 'underline' }}>
            View All Publications &rarr;
          </Link>
        </div>
      </section>

      {/* 5. SOFTWARE & PIPELINES: PRIMER DESIGN TOOL & PARALLEL/PRISM PIPELINES */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionPre}>Software &amp; Pipelines</span>
          <h2 className={styles.sectionTitle}>Computational Infrastructure &amp; Tooling</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Parallel & PRISM cfRNA Fragmentomics */}
          <div className={styles.softwareShowcase}>
            <div className={styles.softwareHeader}>
              <div className={styles.softwareTitleGroup}>
                <div>
                  <h3 className={styles.softwareTitle}>Parallel v2.0 &amp; PRISM v1.0: cfRNA Fragmentomics Pipelines</h3>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Dual architectures for reference-anchored positional fragmentomics and reference-free sequence discovery
                  </div>
                </div>
              </div>
              <Link
                href="/projects/parallel-and-prism-pipelines"
                className={styles.heroTag}
                style={{ margin: 0, textDecoration: 'none' }}
              >
                Read Pipeline Architecture &rarr;
              </Link>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
              Circulating cell-free RNA carries information in single-nucleotide cleavage coordinates and fragment shapes that are lost in standard count matrices. To address this, I built two complementary pipelines from scratch: <strong>Parallel v2.0</strong> (reference-anchored positional fragmentomics using ShardMap, single-base cleavage ledgers, and PERMANOVA distribution metrics) and <strong>PRISM v1.0</strong> (an alignment-free discovery pipeline using <em>k</em>-mers and compacted de Bruijn graphs to capture modified or unannotated circulating dark-matter transcripts).
            </p>

            <div className={styles.techStackRow}>
              <span className={styles.techPill}>Parallel v2.0</span>
              <span className={styles.techPill}>PRISM v1.0</span>
              <span className={styles.techPill}>Positional Fragmentomics</span>
              <span className={styles.techPill}>k-mers &amp; cDBG</span>
              <span className={styles.techPill}>ShardMap</span>
              <span className={styles.techPill}>Nextflow / Python</span>
            </div>
          </div>

          {/* Primer Design Tool */}
          <div className={styles.softwareShowcase}>
            <div className={styles.softwareHeader}>
              <div className={styles.softwareTitleGroup}>
                <div>
                  <h3 className={styles.softwareTitle}>Two-Tailed RT-qPCR Primer Design Tool (PDT)</h3>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Web application for thermodynamic modeling and two-tailed primer optimization
                  </div>
                </div>
              </div>
              <a
                href="https://pdt.klassen.ing"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroTag}
                style={{ margin: 0, textDecoration: 'none' }}
              >
                Launch Live App &rarr;
              </a>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
              Designing two-tailed RT-qPCR primers for short non-coding RNAs (~22 nt) requires balancing target hybridization with secondary hairpin folding. PDT computes nearest-neighbor melting temperatures, evaluates competitive hairpin stabilities via the ViennaRNA package, and renders interactive secondary structures. Actively used by researchers at BIOCEV and the <strong>GeneCore Facility</strong>.
            </p>

            <div className={styles.techStackRow}>
              <span className={styles.techPill}>Python 3</span>
              <span className={styles.techPill}>FastAPI</span>
              <span className={styles.techPill}>ViennaRNA</span>
              <span className={styles.techPill}>SQLite FTS5</span>
              <span className={styles.techPill}>Docker</span>
              <span className={styles.techPill}>JavaScript / D3.js</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. AFFILIATIONS (WITH GLIAOMICS 25-30% LARGER) */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionPre}>Institutional Affiliations</span>
          <h2 className={styles.sectionTitle}>Laboratories &amp; Research Centers</h2>
        </div>

        <div className={styles.affiliationsBar}>
          <a href="https://www.ibt.cas.cz/en/Core-Facility-Research-Laboratories/Glia-Omics-Lab/" target="_blank" rel="noopener noreferrer" className={styles.affilLink}>
            {/* Increased by ~28% from 44px to 56px */}
            <img src="/logoGliaOmicsLab.png" alt="GliaOmicsLab Logo" className={styles.affilLogo} style={{ height: '56px' }} />
          </a>
          <a href="https://www.labgenexp.eu/" target="_blank" rel="noopener noreferrer" className={styles.affilLink}>
            <img src="/logoLabGenExp.png" alt="LabGenExp Logo" className={styles.affilLogo} />
          </a>
          <a href="https://www.vscht.cz/?jazyk=en" target="_blank" rel="noopener noreferrer" className={styles.affilLink}>
            <img src="/logoUCT.png" alt="UCT Prague Logo" className={styles.affilLogo} />
          </a>
          <a href="https://www.ibt.cas.cz/en/core-facilities/gene-core/" target="_blank" rel="noopener noreferrer" className={styles.affilLink}>
            <img src="/logoGeneCore.png" alt="GeneCore Logo" className={styles.affilLogo} />
          </a>
        </div>
      </section>
    </div>
  );
}
