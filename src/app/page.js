export default function Home() {
  return (
    <article>
      <h1>About Me</h1>
      <p>
        Welcome! I am a researcher dedicated to exploring the complexities of neuroscience through advanced molecular techniques. 
        My research integrates multi-omics profiling and single-cell transcriptomics to understand disease mechanisms and discover novel therapeutic targets, particularly in the context of central nervous system injuries.
      </p>
      
      <h2>Current Work & Affiliations</h2>
      <p>
        I currently work in the <strong><a href="https://www.ibt.cas.cz/en/Core-Facility-Research-Laboratories/Glia-Omics-Lab/" target="_blank" rel="noopener noreferrer">GliaOmicsLab</a></strong>, focusing on deciphering the regulatory networks guided by miRNAs following spinal cord injuries.
        Previously, I have been a part of <strong><a href="https://www.labgenexp.eu/" target="_blank" rel="noopener noreferrer">LabGenExp</a></strong>.
      </p>

      <h2>Background</h2>
      <p>
        I am undertaking my Ph.D. studies at the <strong><a href="https://www.vscht.cz/?jazyk=en" target="_blank" rel="noopener noreferrer">University of Chemistry and Technology (UCT) in Prague</a></strong>. My academic journey has been driven by a passion for understanding the dynamic molecular changes that occur post-injury and how we can leverage this knowledge for neuroregeneration.
      </p>

      <h2>Software & Tools</h2>
      <p>
        Alongside my wet-lab and analytical work, I develop tools to aid researchers. I am the creator of the <strong><a href="https://pdt.olik.fans/" target="_blank" rel="noopener noreferrer">PrimerDesignTool</a></strong>, a web-based utility for molecular biology workflows.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', alignItems: 'center', marginTop: '4rem', padding: '2rem 0', borderTop: '1px solid var(--border)' }}>
        <a href="https://www.ibt.cas.cz/en/Core-Facility-Research-Laboratories/Glia-Omics-Lab/" target="_blank" rel="noopener noreferrer">
          <img src="/logoGliaOmicsLab.png" alt="GliaOmicsLab Logo" style={{ height: '40px', objectFit: 'contain' }} />
        </a>
        <a href="https://www.labgenexp.eu/" target="_blank" rel="noopener noreferrer">
          <img src="/logoLabGenExp.png" alt="LabGenExp Logo" style={{ height: '45px', objectFit: 'contain' }} />
        </a>
        <a href="https://www.vscht.cz/?jazyk=en" target="_blank" rel="noopener noreferrer">
          <img src="/logoUCT.png" alt="UCT Prague Logo" style={{ height: '55px', objectFit: 'contain' }} />
        </a>
        <a href="https://www.ibt.cas.cz/en/core-facilities/gene-core/" target="_blank" rel="noopener noreferrer">
          <img src="/logoGeneCore.png" alt="GeneCore Logo" style={{ height: '40px', objectFit: 'contain' }} />
        </a>
      </div>

    </article>
  );
}
