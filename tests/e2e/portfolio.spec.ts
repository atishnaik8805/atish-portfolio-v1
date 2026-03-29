import { test, expect } from '@playwright/test';

test.describe('Portfolio Sections', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display experience timeline', async ({ page }) => {
    const experienceSection = page.locator('#experience');
    await expect(experienceSection).toBeVisible();
    await expect(experienceSection.getByText('Tech Lead')).toBeVisible();
    await expect(experienceSection.getByText('Tech Solutions Inc.')).toBeVisible();
  });

  test('should display project grid', async ({ page }) => {
    const projectSection = page.locator('#projects');
    await expect(projectSection).toBeVisible();
    await expect(projectSection.getByText('AI-Powered Analytics')).toBeVisible();
  });

  test('should have working project demo links', async ({ page }) => {
    // Target the specific card by filtering the cards themselves
    const aiProject = page.locator('#projects .group').filter({ has: page.getByRole('heading', { name: 'AI-Powered Analytics' }) });
    const demoLink = aiProject.getByRole('link', { name: /live demo/i });
    await expect(demoLink).toBeVisible();
    await expect(demoLink).toHaveAttribute('href', 'https://ai-analytics-demo.com');
  });
});
