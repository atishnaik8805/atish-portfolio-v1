import { describe, it, expect } from 'vitest';
import { calculateReadingTime } from './readingTime';

describe('Reading Time Utility', () => {
  it('should calculate reading time correctly for short text', () => {
    const text = 'This is a short text with seven words.';
    expect(calculateReadingTime(text)).toBe('1 min read');
  });

  it('should calculate reading time correctly for long text', () => {
    const text = 'word '.repeat(400);
    expect(calculateReadingTime(text)).toBe('2 min read');
  });
});
