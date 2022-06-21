import { test, expect } from '@playwright/test'

test('index', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveScreenshot()
})

test('resume', async ({ page }) => {
  await page.goto('/resume')
  await expect(page).toHaveScreenshot()
})
