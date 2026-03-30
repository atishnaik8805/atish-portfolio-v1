import { test, expect } from '@playwright/test';

test.describe('Preloader', () => {
  test.beforeEach(async ({ page }) => {
    // Ensure session storage is clear for each test
    await page.goto('/');
    await page.evaluate(() => sessionStorage.clear());
  });

  test('should appear on first visit and animate', async ({ page }) => {
    await page.goto('/');
    
    // Check if preloader is visible
    const preloader = page.locator('#preloader');
    await expect(preloader).toBeVisible();
    
    // Check for main sketching canvas
    const canvas = page.locator('#preloader .canvas-container canvas');
    await expect(canvas).toBeVisible();

    // Wait for animation and fade out (3s + 0.5s)
    await expect(preloader).toBeHidden({ timeout: 5000 });
    
    // Verify session storage is set
    const hasSeen = await page.evaluate(() => sessionStorage.getItem('portfolio_preloader_seen'));
    expect(hasSeen).toBe('true');
  });

  test('should be skipped if prefers-reduced-motion is enabled', async ({ page }) => {
    // Set reduced motion
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    
    const preloader = page.locator('#preloader');
    await expect(preloader).toBeHidden();
  });

  test('should be skipped when skip button is clicked', async ({ page }) => {
    await page.goto('/');
    
    const preloader = page.locator('#preloader');
    await expect(preloader).toBeVisible();
    
    const skipButton = page.getByRole('button', { name: 'Skip preloader animation' });
    await skipButton.click();
    
    await expect(preloader).toBeHidden();
  });

  test('should be skipped when Escape is pressed', async ({ page }) => {
    await page.goto('/');
    
    const preloader = page.locator('#preloader');
    await expect(preloader).toBeVisible();
    
    await page.keyboard.press('Escape');
    
    await expect(preloader).toBeHidden();
  });

  test('should be skipped on returning visit in same session', async ({ page }) => {
    await page.goto('/');
    
    // First visit - skip it
    await page.keyboard.press('Escape');
    await expect(page.locator('#preloader')).toBeHidden();
    
    // Refresh page
    await page.reload();
    
    // Should be skipped immediately
    const preloader = page.locator('#preloader');
    await expect(preloader).toBeHidden();
  });
});
