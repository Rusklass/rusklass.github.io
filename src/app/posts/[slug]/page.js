import { MDXRemote } from 'next-mdx-remote/rsc';
import { getFileBySlug, getFiles } from '../../../lib/mdx';
import styles from './PostLayout.module.css';

export async function generateStaticParams() {
  const posts = getFiles('posts');
  return posts.map((post) => ({
    slug: post.replace(/\.mdx?$/, ''),
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { frontMatter } = getFileBySlug('posts', resolvedParams.slug);
  return {
    title: `${frontMatter.title} - Ruslan Klassen`,
    description: frontMatter.excerpt,
  };
}

export default async function PostPage({ params }) {
  const resolvedParams = await params;
  const { source, frontMatter } = getFileBySlug('posts', resolvedParams.slug);

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <h1 className={styles.title}>{frontMatter.title}</h1>
        <p className={styles.date}>{new Date(frontMatter.date).toLocaleDateString()}</p>
      </header>
      
      <div className={styles.content}>
        <MDXRemote source={source} />
      </div>
    </article>
  );
}
