import Link from 'next/link';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaGraduationCap 
} from 'react-icons/fa';
import { SiOrcid, SiResearchgate } from 'react-icons/si';
import styles from './Sidebar.module.css';
import ThemeSwitcher from './ThemeSwitcher';

const SOCIAL_LINKS = [
  { icon: <FaGraduationCap />, label: 'Google Scholar', href: 'https://scholar.google.com/citations?hl=en&user=GmV4MFkAAAAJ' },
  { icon: <SiOrcid />, label: 'ORCID', href: 'https://orcid.org/0000-0003-1136-7302' },
  { icon: <SiResearchgate />, label: 'ResearchGate', href: 'https://www.researchgate.net/profile/Ruslan-Klassen' },
  { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/rusklass/' },
  { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/Rusklass' },
  { icon: <FaEnvelope />, label: 'Email', href: 'mailto:klassenrusl@gmail.com' },
];

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.profileSection}>
        <div className={styles.avatarWrapper}>
          <img 
            src="/avatar.jpg" 
            alt="Ruslan Klassen" 
            className={styles.avatar}
          />
        </div>

        <h1 className={styles.name}>Ruslan Klassen</h1>
        <div className={styles.role}>Bioinformatician</div>
        <div className={styles.affiliation}>
          Institute of Biotechnology CAS (BIOCEV)<br />
          University of Chemistry and Technology, Prague
        </div>

        {/* 6 Balanced Social Links */}
        <div className={styles.socialRow}>
          {SOCIAL_LINKS.map((link, idx) => (
            <a 
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIconLink}
              title={link.label}
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>
          <span>Overview &amp; Research</span>
          <span className={styles.navBadge}>01</span>
        </Link>
        <Link href="/research" className={styles.navLink}>
          <span>Publications &amp; Omics</span>
          <span className={styles.navBadge}>02</span>
        </Link>
        <Link href="/projects" className={styles.navLink}>
          <span>Software &amp; Tools</span>
          <span className={styles.navBadge}>03</span>
        </Link>
        <Link href="/beyond" className={styles.navLink}>
          <span>Beyond Science</span>
          <span className={styles.navBadge}>04</span>
        </Link>
        <Link href="/posts" className={styles.navLink}>
          <span>Notebook &amp; Posts</span>
          <span className={styles.navBadge}>05</span>
        </Link>
      </nav>

      <ThemeSwitcher />

      <div className={styles.footerInfo}>
        Prague, Czech Republic • {new Date().getFullYear()}
      </div>
    </aside>
  );
}
