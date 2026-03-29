export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const numberOfWords = content.trim().split(/\s+/).length;
  const minutes = numberOfWords / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  return `${readTime} min read`;
}
