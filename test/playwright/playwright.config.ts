import { defineConfig, devices } from '@playwright/test';
import path from 'path';

/**
 *   BASE_URL=http://localhost:3000   use an already-running app (skips the built-in web server)
 *   HEADED=1                         watch the browser (default is headless)
 */
const TEST_PORT = Number(process.env.TEST_PORT ?? 3101);
const baseURL = process.env.BASE_URL ?? `http://localhost:${TEST_PORT}`;

export default defineConfig({
  testDir: path.join(__dirname, 'specs'),
  outputDir: path.join(__dirname, '..', '..', 'test-results', 'playwright'),
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: [['list'], ['html', { outputFolder: path.join(__dirname, '..', '..', 'playwright-report'), open: 'never' }]],
  use: {
    baseURL,
    headless: !process.env.HEADED,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: process.env.BASE_URL
    ? undefined
    : {
        command: 'npx tsx src/server.ts',
        cwd: path.resolve(__dirname, '..', '..'),
        env: { PORT: String(TEST_PORT) },
        url: `${baseURL}/login`,
        reuseExistingServer: !process.env.CI,
      },
});
