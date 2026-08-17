import styles from './Beyond.module.css';

export const metadata = {
  title: 'Beyond Science - Ruslan Klassen',
  description: 'Craft, systems, wilderness expeditions, applied microbiology, precision thermodynamics, and digital 3D sculpting.',
};

const BEYOND_SECTIONS = [
  {
    id: 'expeditions',
    tag: '01 // Mental Resilience',
    title: 'Backcountry Expeditions & Siberian Roots',
    text: `My approach to problem-solving was forged in Siberia through competitive
    athletics and wilderness expeditions across the Altai Mountains. Traversing remote
    rivers with 1980s paper maps, enduring sub-zero conditions, and restoring collapsed
    taiga cabins built a deep composure under uncertainty and an absolute reliance on teamwork.
    `,
    takeaway: 'Discipline in the lab reflects endurance in the wilderness.',
    imagePath: '/images/beyond/expeditions.JPG',
    caption: 'Altai Mountains & Siberian Backcountry',
    hasImage: true,
  },
  {
    id: 'fermentation',
    tag: '02 // Applied Microbiology',
    title: 'Home Fermentation & Microbial Dynamics',
    text: `Fermentation is applied microbiology at home. I explore yeast metabolic kinetics,
    nutrient schedules, and temperature regulation through traditional mead brewing,
    sparkling honey beverages, and craft beer. Managing batch consistency, attenuation, and flavor.`,
    takeaway: 'Kinetic control of living systems outside the laboratory.',
    imagePath: '/images/beyond/fermentation.JPG',
    caption: 'Applied Microbiology & Fermentation Kinetics',
    hasImage: true,
  },
];

export default function BeyondSciencePage() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.tag}>
          <span>Beyond the Terminal • Craft &amp; Systems</span>
        </div>
        <h1 className={styles.title}>Beyond Science: Craft, Systems &amp; The Human Element</h1>
        <p className={styles.subtitle}>
          How wilderness expeditions, microbial fermentation kinetics, precision thermodynamics, and 3D digital sculpture inform a holistic approach to scientific problem-solving.
        </p>
      </header>

      {/* Scientific Philosophy Card */}
      <div className={styles.philosophyCard}>
        <h2 className={styles.philosophyTitle}>Scientific Philosophy &amp; Shared Responsibility</h2>
        <p className={styles.philosophyText}>
          In competitive athletics, you are responsible only for your personal performance. In science and engineering, accountability is collective: you are responsible for the progress of your team, the stewardship of public funding, and the absolute reproducibility of findings that future medical therapies may build upon. I approach research with a dedication to open science, clean documentation, and resilient teamwork.
        </p>
      </div>

      {/* Gallery Cards */}
      <div className={styles.galleryGrid}>
        {BEYOND_SECTIONS.map((section) => (
          <div key={section.id} className={styles.card} id={section.id}>
            <div className={styles.cardContent}>
              <div className={styles.cardMeta}>{section.tag}</div>
              <h2 className={styles.cardTitle}>
                {section.title}
              </h2>
              <p className={styles.cardText}>{section.text}</p>
              <div className={styles.keyTakeaway}>
                <strong>Key Takeaway:</strong> {section.takeaway}
              </div>
            </div>

            <div className={styles.figureContainer}>
              {section.hasImage ? (
                <div className={styles.figureImageWrapper}>
                  <img
                    src={section.imagePath}
                    alt={section.title}
                    className={styles.figureImage}
                  />
                  <div className={styles.imageCaption}>
                    <span>{section.caption}</span>
                  </div>
                </div>
              ) : (
                <div className={styles.placeholderBox}>
                  <p className={styles.placeholderText}>
                    {section.placeholder}
                  </p>
                  <span className={styles.dropHint}>Image Slot Ready: {section.imagePath}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
