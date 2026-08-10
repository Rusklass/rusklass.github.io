import Link from 'next/link';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaGraduationCap 
} from 'react-icons/fa';
import { SiOrcid, SiResearchgate, SiScopus } from 'react-icons/si';
import styles from './Sidebar.module.css';
import ThemeSwitcher from './ThemeSwitcher';

const SOCIAL_LINKS = [
  { icon: <FaGraduationCap />, label: 'Google Scholar', href: 'https://scholar.google.com/citations?hl=en&user=GmV4MFkAAAAJ' },
  { icon: <SiScopus />, label: 'Scopus', href: 'https://www.scopus.com/authid/detail.uri?authorId=57226472985' },
  { icon: <SiOrcid />, label: 'ORCiD', href: 'https://orcid.org/0000-0003-1136-7302' },
  { icon: <SiResearchgate />, label: 'ResearchGate', href: 'https://www.researchgate.net/profile/Ruslan-Klassen' },
  { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/rusklass/' },
  { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/Rusklass' },
  { icon: <FaEnvelope />, label: 'Email', href: 'mailto:klassenrusl@gmail.com' },
];

export default function Sidebar() {
  const radius = 110; 
  const startAngle = 0; 

  return (
    <aside className={styles.sidebar}>
      <div className={styles.profileSection}>
        <div className={styles.avatarContainer}>
          <img 
            src="/avatar.jpg" 
            alt="Ruslan Klassen Avatar" 
            className={styles.avatar}
          />
        </div>

        <div className={styles.linksContainer}>
          {SOCIAL_LINKS.map((link, index) => {
            const angleDeg = startAngle + (360 / SOCIAL_LINKS.length) * index;
            return (
              <div 
                key={index}
                className={styles.iconWrapper}
                style={{
                  transform: `rotate(${angleDeg}deg) translate(${radius}px) rotate(-${angleDeg}deg)`
                }}
              >
                <div className={styles.counterRotate}>
                  <a 
                    href={link.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.iconLink} 
                    aria-label={link.label} 
                    title={link.label}
                  >
                    {link.icon}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <h1 className={styles.name}>Ruslan Klassen</h1>
      <p className={styles.bio}>
        Researcher specializing in multi-omics, neural stem cells, and single-cell transcriptomics.
      </p>

      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>About Me</Link>
        <Link href="/research" className={styles.navLink}>Research</Link>
        <Link href="/projects" className={styles.navLink}>Projects</Link>
        <Link href="/posts" className={styles.navLink}>Posts</Link>
      </nav>

      <ThemeSwitcher />
    </aside>
  );
}
