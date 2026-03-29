import { test, expect } from '@playwright/test';

test.describe('Blog Section', () => {
  test('should display latest posts on home page', async ({ page }) => {
    await page.goto('/');
    const latestPosts = page.locator('#latest-posts');
    await expect(latestPosts).toBeVisible();
    await expect(latestPosts.getByText('Welcome to My Portfolio')).toBeVisible();
  });

  test('should navigate to blog hub', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Blog', exact: true }).click();
    await expect(page).toHaveURL('/blog');
    await expect(page.locator('h1')).toHaveText('Blog');
  });

  test('should navigate to a blog post', async ({ page }) => {
    await page.goto('/blog');
    await page.getByRole('link', { name: 'Welcome to My Portfolio' }).click();
    await expect(page).toHaveURL(/\/blog\/first-post/);
    await expect(page.locator('article h1')).toHaveText('Welcome to My Portfolio');
  });
});
