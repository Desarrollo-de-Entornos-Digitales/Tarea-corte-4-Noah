import { test, expect } from '@playwright/test';

test('el formulario avisa de los campos que faltan', async ({ page }) => {
    await page.goto('/routines/new');

    await page.getByRole('button', { name: 'Guardar rutina' }).click();

    await expect(page.getByText('El nombre debe tener al menos 3 caracteres.')).toBeVisible();
    await expect(page.getByText('Elige un nivel.')).toBeVisible();
    await expect(page.getByText('Elige al menos un ejercicio.')).toBeVisible();
});

test('crea una rutina y marca un ejercicio como hecho', async ({ page }) => {
    // Un nombre distinto en cada ejecución: la lista vive en la memoria del servidor
    const name = `Rutina de prueba ${Date.now()}`;

    await page.goto('/routines/new');
    await page.getByLabel('Nombre de la rutina').fill(name);
    await page.getByLabel('Nivel').selectOption('principiante');
    await page.getByLabel('Plancha').check();
    await page.getByLabel('Sentadilla').check();
    await page.getByRole('button', { name: 'Guardar rutina' }).click();

    // Después de guardar, la acción redirige a la lista y la rutina aparece en ella
    await expect(page).toHaveURL('/routines');
    await page.getByRole('link', { name: new RegExp(name) }).click();

    await expect(page.getByText('0 de 2 ejercicios hechos')).toBeVisible();
    await page.getByLabel('Plancha').check();
    await expect(page.getByText('1 de 2 ejercicios hechos')).toBeVisible();
});

test('cambia el tema y lo recuerda al recargar', async ({ page }) => {
    await page.goto('/dashboard');
    const html = page.locator('html');
    await expect(html).toHaveAttribute('data-theme', 'icesi');

    await page.getByRole('button', { name: 'Cambiar tema' }).click();
    await expect(html).toHaveAttribute('data-theme', 'icesi-dark');

    await page.reload();
    await expect(html).toHaveAttribute('data-theme', 'icesi-dark');

    // Lo dejamos como estaba para no afectar a otras pruebas
    await page.getByRole('button', { name: 'Cambiar tema' }).click();
    await expect(html).toHaveAttribute('data-theme', 'icesi');
});
