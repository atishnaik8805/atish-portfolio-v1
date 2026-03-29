import { test, expect } from '@playwright/test';

test.describe('Theme and Persistence', () => {
  test('should toggle theme and persist in localStorage', async ({ page }) => {
    await page.goto('/');
    
    // Check initial state (assume light if no preference)
    const html = page.locator('html');
    const toggle = page.locator('#theme-toggle');
    
    // Toggle to dark
    await toggle.click();
    await expect(html).toHaveClass(/dark/);
    
    // Reload and check if it persists
    await page.reload();
    await expect(html).toHaveClass(/dark/);
    
    // Toggle back to light
    await toggle.click();
    await expect(html).not.toHaveClass(/dark/);
  });
});
