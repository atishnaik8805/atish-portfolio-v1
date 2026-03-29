import { test, expect } from '@playwright/test';

test.describe('Hero Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display Atish Naik in the hero', async ({ page }) => {
    // Scope to the main h1 to avoid matching the footer copyright
    await expect(page.locator('h1').getByText('Atish Naik')).toBeVisible();
  });

  test('should have working social links', async ({ page }) => {
    // Specifically target the SocialLinks component within the Hero section
    const socialLinks = page.locator('section').filter({ hasText: 'Atish Naik' }).locator('a[aria-label="GitHub"]');
    await expect(socialLinks).toBeVisible();
    await expect(socialLinks).toHaveAttribute('href', /github\.com/);
    
    const linkedinLink = page.locator('section').filter({ hasText: 'Atish Naik' }).locator('a[aria-label="LinkedIn"]');
    await expect(linkedinLink).toBeVisible();

    const gmailLink = page.locator('section').filter({ hasText: 'Atish Naik' }).locator('a[aria-label="Gmail"]');
    await expect(gmailLink).toBeVisible();
    await expect(gmailLink).toHaveAttribute('href', /mail\.google\.com/);
  });

  test('should have a resume download link in hero', async ({ page }) => {
    // Specifically target the "Download Resume" button in hero
    const resumeLink = page.getByRole('link', { name: /download resume/i });
    await expect(resumeLink).toBeVisible();
    await expect(resumeLink).toHaveAttribute('href', '/Atish-Naik-Resume.pdf');
  });
});
