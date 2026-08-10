import styles from '../posts/Posts.module.css';

export const metadata = {
  title: 'Research - Ruslan Klassen',
  description: 'Publications and scientific research by Ruslan Klassen.',
};

const PUBLICATIONS = [
  {
    title: "Neural stem cell-derived extracellular vesicles drive early neuroprotective and anti-apoptotic responses in spinal cord injury organotypic slices",
    journal: "Frontiers in Cellular Neuroscience",
    year: "2026",
    doi: "https://doi.org/10.3389/fncel.2026.1835240",
  },
  {
    title: "Inhibition of miR-20a promotes neural stem cell survival under oxidative stress conditions",
    journal: "Frontiers in Neuroscience",
    year: "2025",
    doi: "https://doi.org/10.3389/fnins.2025.1601101",
  },
  {
    title: "Integrated multi-omics profiling uncovers miRNA-guided regulatory networks after spinal cord injury in rats",
    journal: "Molecular Therapy Nucleic Acids",
    year: "2025",
    doi: "https://doi.org/10.1016/j.omtn.2025.102746",
  },
  {
    title: "Recent advances in deciphering oligodendrocyte heterogeneity with single-cell transcriptomics",
    journal: "Frontiers in Cellular Neuroscience",
    year: "2022",
    doi: "https://doi.org/10.3389/fncel.2022.1025012",
  },
  {
    title: "Silver Nanoparticles Alter Microtubule Arrangement, Dynamics and Stress Phytohormone Levels",
    journal: "Plants",
    year: "2022",
    doi: "https://doi.org/10.3390/plants11030313",
  },
  {
    title: "Transient astrocyte‐like NG2 glia subpopulation emerges solely following permanent brain ischemia",
    journal: "Glia",
    year: "2021",
    doi: "https://doi.org/10.1002/glia.24064",
  }
];

export default function ResearchPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Research & Publications</h1>
      
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
        My research focuses on understanding the molecular mechanisms underlying nervous system injuries. I apply advanced multi-omics profiling, machine learning, and single-cell transcriptomics to discover novel therapeutic targets for neuroregeneration. 
        Below is a selected list of my peer-reviewed publications.
      </p>

      <div className={styles.grid}>
        {PUBLICATIONS.map((pub, index) => (
          <a href={pub.doi} target="_blank" rel="noopener noreferrer" key={index} className={styles.card}>
            <h2 className={styles.cardTitle}>{pub.title}</h2>
            <p className={styles.cardDate}>{pub.journal} • {pub.year}</p>
            <p className={styles.cardExcerpt} style={{ color: 'var(--accent-primary)', fontSize: '0.9rem' }}>Read Article &rarr;</p>
          </a>
        ))}
      </div>
    </div>
  );
}
