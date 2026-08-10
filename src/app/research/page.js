import styles from '../posts/Posts.module.css';

export const metadata = {
  title: 'Research - Ruslan Klassen',
  description: 'Publications and scientific research by Ruslan Klassen.',
};

const PUBLICATIONS = [
  {
    title: "Neural stem cell-derived extracellular vesicles drive early neuroprotective and anti-apoptotic responses in spinal cord injury organotypic slices",
    authors: "Kristyna Sintakova, Vojtech Sprincl, Ivan Arzhanov, Ruslan Klassen, Lukas Valihrach, Nataliya Romanyuk",
    journal: "Frontiers in Cellular Neuroscience",
    year: "2026",
    doi: "https://doi.org/10.3389/fncel.2026.1835240",
  },
  {
    title: "Inhibition of miR-20a promotes neural stem cell survival under oxidative stress conditions",
    authors: "Ivan Arzhanov, Ruslan Klassen, Lukas Valihrach, Nataliya Romanyuk",
    journal: "Frontiers in Neuroscience",
    year: "2025",
    doi: "https://doi.org/10.3389/fnins.2025.1601101",
  },
  {
    title: "Integrated multi-omics profiling uncovers miRNA-guided regulatory networks after spinal cord injury in rats",
    authors: "Ruslan Klassen, Sarka Chytilova, Ivan Arzhanov, Daniel Zucha, Eva Rohlova, Peter Androvic, Pavel Abaffy, Lucia Urdzikova-Machova, Mikael Kubista, Nataliya Romanyuk, Lukas Valihrach",
    journal: "Molecular Therapy Nucleic Acids",
    year: "2025",
    doi: "https://doi.org/10.1016/j.omtn.2025.102746",
  },
  {
    title: "Recent advances in deciphering oligodendrocyte heterogeneity with single-cell transcriptomics",
    authors: "Lukas Valihrach, Zuzana Matusova, Daniel Zucha, Ruslan Klassen, Sarka Benesova, Pavel Abaffy, Mikael Kubista, Miroslava Anderova",
    journal: "Frontiers in Cellular Neuroscience",
    year: "2022",
    doi: "https://doi.org/10.3389/fncel.2022.1025012",
  },
  {
    title: "Silver Nanoparticles Alter Microtubule Arrangement, Dynamics and Stress Phytohormone Levels",
    authors: "Jindřiška Angelini, Ruslan Klassen, Jitka Široká, Ondřej Novák, Kamil Záruba, Jakub Siegel, Zuzana Novotná, Olga Valentová",
    journal: "Plants",
    year: "2022",
    doi: "https://doi.org/10.3390/plants11030313",
  },
  {
    title: "Transient astrocyte‐like NG2 glia subpopulation emerges solely following permanent brain ischemia",
    authors: "Denisa Kirdajova, Lukas Valihrach, Martin Valny, Jan Kriska, Daniela Krocianova, Sarka Benesova, Pavel Abaffy, Daniel Zucha, Ruslan Klassen, Denisa Kolenicova, Pavel Honsa, Mikael Kubista, Miroslava Anderova",
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
            <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
              {pub.authors.split('Ruslan Klassen').map((part, i, arr) =>
                i === arr.length - 1 ? part : <span key={i}>{part}<strong>Ruslan Klassen</strong></span>
              )}
            </p>
            <p className={styles.cardDate}>{pub.journal} • {pub.year}</p>
            <p className={styles.cardExcerpt} style={{ color: 'var(--accent-primary)', fontSize: '0.9rem' }}>Read Article &rarr;</p>
          </a>
        ))}
      </div>
    </div>
  );
}
