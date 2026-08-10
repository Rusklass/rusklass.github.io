import { MDXRemote } from 'next-mdx-remote/rsc';
import { getFileBySlug, getFiles } from '../../../lib/mdx';
import styles from '../../posts/[slug]/PostLayout.module.css'; // Reuse post layout styles

export async function generateStaticParams() {
  const projects = getFiles('projects');
  return projects.map((project) => ({
    slug: project.replace(/\.mdx?$/, ''),
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { frontMatter } = getFileBySlug('projects', resolvedParams.slug);
  return {
    title: `${frontMatter.title} - Ruslan Klassen`,
    description: frontMatter.excerpt,
  };
}

export default async function ProjectPage({ params }) {
  const resolvedParams = await params;
  const { source, frontMatter } = getFileBySlug('projects', resolvedParams.slug);

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '0.5rem' }}>
          {frontMatter.logo && (
            <img 
              src={frontMatter.logo} 
              alt={`${frontMatter.title} logo`} 
              style={{ height: '90px', objectFit: 'contain' }} 
            />
          )}
          <h1 className={styles.title} style={{ marginBottom: 0 }}>{frontMatter.title}</h1>
        </div>
      </header>
      
      <div className={styles.content}>
        <MDXRemote source={source} />
      </div>
    </article>
  );
}
