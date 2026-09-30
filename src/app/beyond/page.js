import styles from './Beyond.module.css';

export const metadata = {
  title: 'Beyond Science - Ruslan Klassen',
  description: 'Craft, systems, wilderness expeditions, applied microbiology, precision thermodynamics, and digital 3D sculpting.',
};

const BEYOND_SECTIONS = [
  {
    id: 'expeditions',
    tag: '01 // Expeditions',
    title: 'Backcountry Routes & Siberian Roots',
    text: `I grew up in Siberia, spending years on long-distance backcountry trips and river routes across the Altai Mountains. Navigating off-trail with topographic maps, dealing with sudden weather shifts, and fixing up abandoned winter cabins taught me to keep a level head when plans break down.`,
    takeaway: 'Handling unexpected variables in the field carries straight into wet-lab and computational work.',
    imagePath: '/images/beyond/expeditions.JPG',
    caption: 'Altai Mountains & Siberian Backcountry',
    hasImage: true,
  },
  {
    id: 'fermentation',
    tag: '02 // Applied Microbiology',
    title: 'Fermentation & Yeast Cultures',
    text: `Outside the lab, fermentation is a practical way to experiment with living systems. I brew meads, sparkling honey beverages, and beers, focusing on yeast pitch rates, temperature control, and nutrient timing to keep batches consistent and dry.`,
    takeaway: 'Monitoring growth kinetics and contamination risk in small-batch production.',
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
          <span>Outside the Lab • Personal Background</span>
        </div>
        <h1 className={styles.title}>Beyond Science: Background &amp; Projects</h1>
        <p className={styles.subtitle}>
          Wilderness expeditions, home fermentation, and small hands-on projects that balance time spent writing code and analyzing sequencing runs.
        </p>
      </header>

      {/* Scientific Philosophy Card */}
      <div className={styles.philosophyCard}>
        <h2 className={styles.philosophyTitle}>Approach to Research</h2>
        <p className={styles.philosophyText}>
          In sports, outcomes are mostly personal. In research, work is collaborative: code, protocols, and data have to be clear enough for colleagues to audit, reproduce, and build on. I prioritize well-documented scripts, versioned analysis pipelines, and honest reporting of negative or ambiguous results.
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
