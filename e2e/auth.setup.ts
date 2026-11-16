import { test as setup, expect } from '@playwright/test';
import { mockLoginOk } from './mocks';

const authFile = 'playwright/.auth/user.json';

setup('iniciar sesión una sola vez', async ({ page }) => {
    await mockLoginOk(page);

    await page.goto('/login');
    await page.getByLabel('Correo electrónico').fill('ana@icesi.edu.co');
    await page.getByLabel('Contraseña').fill('12345678');
    await page.getByRole('button', { name: 'Iniciar Sesión' }).click();

    await expect(page).toHaveURL('/dashboard');

    // Guarda lo que el navegador recuerda: aquí, el token que Zustand dejó en localStorage
    await page.context().storageState({ path: authFile });
});
