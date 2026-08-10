import Link from 'next/link';
import { getAllFilesFrontMatter } from '../../lib/mdx';
import styles from '../posts/Posts.module.css'; // Reusing posts CSS for consistent layout

export const metadata = {
  title: 'Projects - Ruslan Klassen',
  description: 'Research projects and portfolio.',
};

export default function ProjectsPage() {
  const projects = getAllFilesFrontMatter('projects');

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Projects & Portfolio</h1>
      {projects.length === 0 && <p>No projects available yet.</p>}
      
      <div className={styles.grid}>
        {projects.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project.slug} className={styles.card}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              {project.logo && (
                <img 
                  src={project.logo} 
                  alt={`${project.title} logo`} 
                  style={{ height: '60px', objectFit: 'contain' }} 
                />
              )}
              <h2 className={styles.cardTitle} style={{ marginBottom: 0 }}>{project.title}</h2>
            </div>
            <p className={styles.cardExcerpt}>{project.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
