import { PlaywrightTestConfig, devices } from '@playwright/test'

const config: PlaywrightTestConfig = {
  outputDir: '/tmp',
  webServer: {
    command: 'npm i --force && npm run build && npm run start',
    port: 3000,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    {
      name: 'chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'crome-hidpi',
      use: { ...devices['Desktop Chrome HiDPI'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'safari',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'safari-dark',
      use: { ...devices['Desktop Safari'], colorScheme: 'dark' },
    },
    {
      name: 'ipad',
      use: { ...devices['iPad Pro 11 landscape'] },
    },
    {
      name: 'iphone-se',
      use: { ...devices['iPhone SE'] },
    },
    {
      name: 'iphone-mini',
      use: { ...devices['iPhone 13 Mini'] },
    },
    {
      name: 'iphone-pro',
      use: { ...devices['iPhone 13 Pro'] },
    },
    {
      name: 'iphone-pro-dark',
      use: { ...devices['iPhone 13 Pro'], colorScheme: 'dark' },
    },
    {
      name: 'iphone-pro-max',
      use: { ...devices['iPhone 13 Pro Max'] },
    },
  ],
}

export default config
