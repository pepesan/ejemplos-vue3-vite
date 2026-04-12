import { test, expect } from '@playwright/test'

test('el usuario navega a About y vuelve a Home', async ({ page }) => {
    // Abrir la aplicación
    await page.goto('http://localhost:5173')

    // Verificar que estamos en Home
    await expect(
        page.getByRole('heading', { name: 'Home Page' })
    ).toBeVisible()

    // Ir a la página About desde el menú
    await page.getByRole('link', { name: 'Acerca de' }).click()

    // Verificar que ha cargado About
    await expect(
        page.getByRole('heading', { name: 'Acerca de' })
    ).toBeVisible()

    // Pulsar el botón para volver al inicio
    await page.getByRole('button', { name: 'Ir al inicio' }).click()

    // Verificar que vuelve a Home
    await expect(
        page.getByRole('heading', { name: 'Home Page' })
    ).toBeVisible()
})