import { test, expect } from '@playwright/test'

test('index', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveScreenshot()
})

test('work', async ({ page }) => {
  await page.goto('/work')
  await expect(page).toHaveScreenshot()
})

test('found', async ({ page }) => {
  await page.goto('/found')
  await expect(page).toHaveScreenshot()
})
