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
      name: 'safari',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'safari-dark',
      use: { ...devices['Desktop Safari'], colorScheme: 'dark' },
    },
    {
      name: 'iphone',
      use: { ...devices['iPhone 13'] },
    },
    {
      name: 'iphone-dark',
      use: { ...devices['iPhone 13'], colorScheme: 'dark' },
    },
  ],
}

export default config
