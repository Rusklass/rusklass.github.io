import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src', 'content');

export function getFiles(type) {
  const dirPath = path.join(contentDirectory, type);
  if (!fs.existsSync(dirPath)) return [];
  return fs.readdirSync(dirPath);
}

export function getFileBySlug(type, slug) {
  const mdxPath = path.join(contentDirectory, type, `${slug}.mdx`);
  const mdPath = path.join(contentDirectory, type, `${slug}.md`);
  
  const source = fs.existsSync(mdxPath) 
    ? fs.readFileSync(mdxPath, 'utf8') 
    : fs.readFileSync(mdPath, 'utf8');

  const { data, content } = matter(source);

  return {
    source: content,
    frontMatter: {
      slug,
      ...data,
    },
  };
}

export function getAllFilesFrontMatter(type) {
  const files = getFiles(type);

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(contentDirectory, type, postSlug),
      'utf8'
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace(/\.mdx?$/, ''),
      },
      ...allPosts,
    ];
  }, []).sort((a, b) => (new Date(b.date) - new Date(a.date)));
}
