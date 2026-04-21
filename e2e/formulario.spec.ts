import { test, expect } from '@playwright/test'

test('el usuario accede a Yup básico, valida el formulario y lo envía', async ({ page }) => {
    test.setTimeout(5000) // 10 segundos
    // Abrir la aplicación
    await page.goto('http://localhost:5173')

    // Verificar que estamos en Home
    await expect(
        page.getByRole('heading', { name: 'Home Page' })
    ).toBeVisible()

    // Abrir el menú
    await page.locator('#menu').click({ timeout: 5000 })
    // Abrir el Dropdown
    // accedemos por el id oculto del elemento
    await page.getByTestId('forms').click()

    // Ir a la página del formulario Yup básico
    await page.getByRole('menuitem', { name: 'Yup básico' }).click()

    // Verificar que estamos en la página correcta
    await expect(page).toHaveURL(/\/forms\/yup/)

    // Enviar vacío para forzar validación
    await page.getByRole('button', { name: 'Enviar' }).click()

    // Verificar mensaje de error requerido
    await expect(
        page.getByText('El campo es obligatorio')
    ).toBeVisible({ timeout: 3000 })

    // Escribir un nombre demasiado corto
    await page.locator('input[type="text"]').fill('Al')

    // Verificar validación reactiva tras el primer submit
    await expect(
        page.getByText('El nombre debe tener al menos 3 caracteres')
    ).toBeVisible()

    // Escribir un nombre válido
    await page.locator('input[type="text"]').fill('Alex')

    // Verificar que desaparece el error
    await expect(
        page.getByText('El nombre debe tener al menos 3 caracteres')
    ).not.toBeVisible()

    // Enviar formulario válido
    await page.getByRole('button', { name: 'Enviar' }).click()

    // Verificar resultado
    await expect(page.locator('#resultado')).toHaveText('{"name":"Alex"}')

})