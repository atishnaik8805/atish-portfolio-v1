import { describe, it, expect } from 'vitest';
import { formatDate, formatDuration } from './date';

describe('Date Utilities', () => {
  it('should format date correctly', () => {
    const date = new Date('2024-01-01');
    expect(formatDate(date)).toBe('Jan 2024');
  });

  it('should format duration correctly', () => {
    const start = new Date('2023-01-01');
    const end = new Date('2024-03-01');
    expect(formatDuration(start, end)).toBe('1 yr 2 mos');
  });

  it('should handle "Present" as current date', () => {
    const start = new Date();
    start.setMonth(start.getMonth() - 2);
    expect(formatDuration(start, 'Present')).toBe('2 mos');
  });
});
