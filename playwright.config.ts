import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import getPort from 'get-port';

dotenv.config();

// Determine the port before exporting the config
const port = process.env.PORT
  ? parseInt(process.env.PORT, 10)
  : 8080; // fallback for local usage or CI

const baseURL = process.env.BASE_URL || `http://127.0.0.1:${port}`;

// If you want automatic dynamic port in CI, you can write a small script to set PORT env variable
// before running Playwright tests.

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    baseURL,
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
  webServer: {
    command: `npx http-server . -p ${port}`,
    port,
    reuseExistingServer: true,
    timeout: 120 * 1000,
  },
});
