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
          Liquid Biopsy for Acute Trauma:<br />
          <span className={styles.heroHighlight}>Decoding RNA and protein dynamics in CNS injury</span>
        </h1>

        <p className={styles.heroLead}>
          I am a researcher and bioinformatician bridging wet-lab bench exploration with scalable computational frameworks. Based at <strong>GliaOmicsLab</strong> (Institute of Biotechnology CAS / BIOCEV) and pursuing my Ph.D. at <strong>UCT Prague</strong>, my work integrates miRNA transcriptomics, mRNA expression, and proteomics to discover why the mammalian CNS fails to heal after injury and how to program it toward regeneration.
        </p>
      </section>

      {/* 2. ABOUT ME: THE TRAJECTORY */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionPre}>The Trajectory</span>
          <h2 className={styles.sectionTitle}>From Siberian Expeditions to Computational Biology</h2>
          <p className={styles.sectionDesc}>
            How an endurance mindset and laboratory bottlenecks shaped a career dedicated to high-precision science.
          </p>
        </div>

        <div className={styles.trajectoryGrid}>
          <div className={styles.storyCard}>
            <div className={styles.storyCardHeader}>
              <span className={styles.storyNumber}>01</span>
              <h3 className={styles.storyCardTitle}>Siberian Roots &amp; The Endurance Mindset</h3>
            </div>
            <p className={styles.storyCardText}>
              My approach to science is rooted in my upbringing in Siberia and years of competitive athletics and backcountry expeditions across the Altai Mountains. When a career-ending spinal injury abruptly halted my athletic path, I redirected that competitive endurance toward academic research. Wilderness expeditions taught me a permanent lesson: meaningful breakthroughs demand disciplined, consistent effort long before the finish line is in sight.
            </p>
          </div>

          <div className={styles.storyCard}>
            <div className={styles.storyCardHeader}>
              <span className={styles.storyNumber}>02</span>
              <h3 className={styles.storyCardTitle}>The Automation Pivot @ UCT Prague</h3>
            </div>
            <p className={styles.storyCardText}>
              During my Master&apos;s research at UCT Prague investigating metallic nanoparticles on plant cytoskeletons (<em>Plants 2022</em>), measuring microtubule regrowth via FRAP kymography across thousands of confocal frames manually was unsustainable. Unable to find pre-built tools, I automated the workflows using ImageJ/Fiji macros and R scripts. Saving hundreds of hours proved the transformative power of code and permanently directed my career toward computational biology.
            </p>
          </div>

          <div className={styles.storyCard}>
            <div className={styles.storyCardHeader}>
              <span className={styles.storyNumber}>03</span>
              <h3 className={styles.storyCardTitle}>Decoding Acute CNS Trauma @ BIOCEV</h3>
            </div>
            <p className={styles.storyCardText}>
              Transitioning to acute neurotrauma research at the Institute of Biotechnology CAS (BIOCEV) gave this computational focus direct translational weight. My personal history with severe physical injury meant that clinical metadata and expression tables were never abstract numbers—they represented human physiological trajectories. Today, my doctoral research focuses on modeling temporal multi-omic networks of acute injury.
            </p>
          </div>

          <div className={styles.storyCard}>
            <div className={styles.storyCardHeader}>
              <span className={styles.storyNumber}>04</span>
              <h3 className={styles.storyCardTitle}>Glial Heterogeneity &amp; The Microenvironment</h3>
            </div>
            <p className={styles.storyCardText}>
              Neuroscience historically prioritized neurons, but glial populations (NG2 glia, oligodendrocytes, reactive astrocytes) define the biochemical microenvironment of the damaged CNS. Our work in <em>Glia (2021)</em> and <em>Frontiers (2022)</em> mapped how transient glial subpopulations emerge post-injury, identifying critical tipping points between scar formation and axonal regeneration.
            </p>
          </div>
        </div>
      </section>
      {/* 3. THE WET-TO-DRY ADVANTAGE (Temporarily hidden)
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionPre}>Methodological Rigor</span>
          <h2 className={styles.sectionTitle}>The Wet-to-Dry Advantage</h2>
          <p className={styles.sectionDesc}>
            Algorithms fail when biological data is treated as idealized matrices. Years at the bench inform our computational models with physical intuition for laboratory noise.
          </p>
        </div>

        <div className={styles.bentoGrid}>
          <div className={styles.bentoCard}>
            <div className={styles.bentoNumber}>01 - PRE-ANALYTICAL</div>
            <h3 className={styles.bentoTitle}>Variable Control</h3>
            <p className={styles.bentoText}>
              Systematically accounting for transport conditions, sample shelf life (10 vs 100 days), storage temperatures (−20°C vs −80°C), and freeze-thaw cycles before downstream modeling.
            </p>
          </div>

          <div className={styles.bentoCard}>
            <div className={styles.bentoNumber}>02 - PROTOCOL BIAS</div>
            <h3 className={styles.bentoTitle}>Artifact Detection</h3>
            <p className={styles.bentoText}>
              Identifying batch effects introduced by tube-wall adsorption, distinct plasma separation centrifugation profiles, enzymatic biases, and RNA isolation chemistries.
            </p>
          </div>

          <div className={styles.bentoCard}>
            <div className={styles.bentoNumber}>03 - NORMALIZATION</div>
            <h3 className={styles.bentoTitle}>Biological Grounding</h3>
            <p className={styles.bentoText}>
              Ensuring normalization protocols preserve true biological heterogeneity while removing technical cohort noise across multi-center datasets.
            </p>
          </div>
        </div>
      </section>
      */}

      {/* 4. KEY RESEARCH HIGHLIGHTS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionPre}>Featured Publications</span>
          <h2 className={styles.sectionTitle}>Key Research &amp; Interactome Discoveries</h2>
          <p className={styles.sectionDesc}>
            Selected peer-reviewed studies uncovering non-coding RNA networks and cellular responses.
          </p>
        </div>

        <div className={styles.researchGrid}>
          {/* MT-NA 2025 */}
          <a
            href="https://doi.org/10.1016/j.omtn.2025.102746"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.pubCard}
          >
            <div className={styles.pubMeta}>
              <span className={styles.pubJournal}>Molecular Therapy Nucleic Acids</span>
              <span className={styles.pubYear}>2025 • Lead Author</span>
              <span style={{ color: 'var(--accent-primary)' }}>DOI: 10.1016/j.omtn.2025.102746 &rarr;</span>
            </div>
            <h3 className={styles.pubTitle}>
              Integrated multi-omics profiling uncovers miRNA-guided regulatory networks after spinal cord injury in rats
            </h3>
            <p className={styles.pubAuthors}>
              <strong>Ruslan Klassen</strong>, Sarka Chytilova, Ivan Arzhanov, Daniel Zucha, Eva Rohlova, Peter Androvic, Pavel Abaffy, Lucia Urdzikova-Machova, Mikael Kubista, Nataliya Romanyuk, Lukas Valihrach
            </p>
            <div className={styles.pubHighlight}>
              <strong>The Breakthrough:</strong> Built the first verified tri-layer interactome (miRNA–mRNA–Protein) mapping acute SCI, revealing how non-coding miRNAs orchestrate post-injury molecular reprogramming.
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
              <strong>The Finding:</strong> Demonstrating how stem cell-derived EVs act as paracrine messengers, delivering regulatory small non-coding RNAs to dampen secondary neuroinflammation.
            </div>
          </a>
        </div>

        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <Link href="/research" style={{ fontWeight: 600, fontSize: '1rem', textDecoration: 'underline' }}>
            View All Publications &amp; Research Highlights &rarr;
          </Link>
        </div>
      </section>

      {/* 5. SOFTWARE & PIPELINES: PRIMER DESIGN TOOL */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionPre}>Software Engineering</span>
          <h2 className={styles.sectionTitle}>Custom Tools &amp; Computational Infrastructure</h2>
        </div>

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
              href="https://pdt.olik.fans"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroTag}
              style={{ margin: 0, textDecoration: 'none' }}
            >
              Launch Live App &rarr;
            </a>
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
            Designing two-tailed RT-qPCR primers for short non-coding RNAs (~22 nt) requires balancing target specificity, thermodynamic melting temperatures, and secondary folding structures. PDT automates thermodynamic calculations, optimizes target-specific sequences, and renders dynamic secondary structure models in real time. Actively deployed and utilized by research teams and institutional facilities, including the <strong>GeneCore Facility</strong>.
          </p>

          <div className={styles.techStackRow}>
            <span className={styles.techPill}>Python 3</span>
            <span className={styles.techPill}>FastAPI</span>
            <span className={styles.techPill}>ViennaRNA Package</span>
            <span className={styles.techPill}>SQLite</span>
            <span className={styles.techPill}>Docker</span>
            <span className={styles.techPill}>JavaScript / Canvas</span>
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
