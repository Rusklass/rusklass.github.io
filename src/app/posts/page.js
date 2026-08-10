import Link from 'next/link';
import { getAllFilesFrontMatter } from '../../lib/mdx';
import styles from './Posts.module.css';

export const metadata = {
  title: 'Posts - Ruslan Klassen',
  description: 'Blog posts and research updates.',
};

export default function PostsPage() {
  const posts = getAllFilesFrontMatter('posts');

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog & Updates</h1>
      {posts.length === 0 && <p>No posts available yet.</p>}
      
      <div className={styles.grid}>
        {posts.map((post) => (
          <Link href={`/posts/${post.slug}`} key={post.slug} className={styles.card}>
            <h2 className={styles.cardTitle}>{post.title}</h2>
            <p className={styles.cardDate}>{new Date(post.date).toLocaleDateString()}</p>
            <p className={styles.cardExcerpt}>{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
