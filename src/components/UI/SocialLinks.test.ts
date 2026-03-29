import { describe, it, expect } from 'vitest';

// Simple helper to match the logic in SocialLinks.astro
const getIconName = (slug: string) => {
  return `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}`;
};

describe('Social Link Icon Logic', () => {
  it('should format icon names correctly for Simple Icons', () => {
    expect(getIconName('github')).toBe('siGithub');
    expect(getIconName('linkedin')).toBe('siLinkedin');
    expect(getIconName('twitter')).toBe('siTwitter');
  });
});
