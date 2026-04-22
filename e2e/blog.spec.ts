import { test, expect } from '@playwright/test'

test('navega al blog y obtiene la primera entrada', async ({ page }) => {
    // 1. ir a la página
    await page.goto('https://blog.cursosdedesarrollo.com/')

    // 2. comprobar que la página carga
    await expect(page).toHaveTitle(/Cursos de Desarrollo/)

    // localizar el enlace "Blog" de forma robusta
    const blogLink = page.locator('#header').getByRole('link', { name: 'Blog' })
    await blogLink.click()

    // comprobar que estamos en /blog
    await expect(page).toHaveURL(/\/blog/)

    // localizar los posts
    const firstPost = page.locator('li a[aria-label][href^="/posts/"]').first()
    await expect(firstPost).toBeVisible()

    const postTitle = await firstPost.locator('span').first().innerText()
    expect(postTitle.trim().length).toBeGreaterThan(0)

    const postUrl = await firstPost.getAttribute('href')
    expect(postUrl).toMatch(/^\/posts\//)

    await firstPost.click()

    // await expect(page).toHaveURL(new RegExp(`${postUrl}$`))
    await expect(page.getByRole('heading', { name: postTitle })).toBeVisible()
})