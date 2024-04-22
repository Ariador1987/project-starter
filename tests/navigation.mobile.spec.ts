import { test, expect } from '@playwright/test';

test('navigation smoke test', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByTestId('hydrated')).toBeVisible();
});
