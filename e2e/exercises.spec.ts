import { test, expect } from '@playwright/test';

test('filtra los ejercicios por categoría', async ({ page }) => {
    await page.goto('/exercises');

    await page.getByRole('button', { name: 'Cardio' }).click();

    await expect(page).toHaveURL(/category=cardio/);
    await expect(page.getByRole('heading', { name: 'Saltos de tijera' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Sentadilla' })).toHaveCount(0);
});
