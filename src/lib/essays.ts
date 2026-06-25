// Single source of truth for the writing list — globs the Markdown pieces
// in src/pages/writing and returns them newest-first.

interface EssayFrontmatter {
  title: string;
  dek: string;
  date: string;
  kind?: string;
  readingTime?: string;
  lang?: string;
  draft?: boolean;
}

interface EssayModule {
  frontmatter: EssayFrontmatter;
  url?: string;
  file: string;
}

const modules = import.meta.glob<EssayModule>('../pages/writing/*.md', {
  eager: true,
});

export interface Essay {
  title: string;
  dek: string;
  date: string;
  kind?: string;
  readingTime?: string;
  lang?: string;
  url: string;
}

export const essays: Essay[] = Object.values(modules)
  .filter((m) => m.url && !m.frontmatter.draft)
  .map((m) => ({
    title: m.frontmatter.title,
    dek: m.frontmatter.dek,
    date: m.frontmatter.date,
    kind: m.frontmatter.kind,
    readingTime: m.frontmatter.readingTime,
    lang: m.frontmatter.lang,
    url: m.url as string,
  }))
  .sort((a, b) => +new Date(b.date) - +new Date(a.date));

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    timeZone: 'UTC',
  });
}
