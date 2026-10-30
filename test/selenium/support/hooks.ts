import { Builder, WebDriver } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import edge from 'selenium-webdriver/edge';
import type { Server } from 'http';
import { createApp } from '../../../src/app';

/**
 * Root hooks: start the app (unless BASE_URL points at one that is already running)
 * and share a single WebDriver across all specs. Cookies are cleared between tests
 * so each test starts logged out.
 *
 *   BASE_URL=http://localhost:3000   use an already-running app
 *   BROWSER=chrome|edge              default chrome
 *   HEADLESS=false                   watch the browser (default is headless)
 */
const TEST_PORT = Number(process.env.TEST_PORT ?? 3100);
export const baseUrl = process.env.BASE_URL ?? `http://localhost:${TEST_PORT}`;

let server: Server | undefined;
let driver: WebDriver;

export function getDriver(): WebDriver {
  return driver;
}

async function buildDriver(): Promise<WebDriver> {
  const headless = process.env.HEADLESS !== 'false';
  const browser = (process.env.BROWSER ?? 'chrome').toLowerCase();
  const builder = new Builder();

  if (browser === 'edge') {
    const options = new edge.Options();
    if (headless) options.addArguments('--headless=new');
    options.addArguments('--window-size=1280,900');
    return builder.forBrowser('MicrosoftEdge').setEdgeOptions(options).build();
  }
  const options = new chrome.Options();
  if (headless) options.addArguments('--headless=new');
  options.addArguments('--window-size=1280,900');
  return builder.forBrowser('chrome').setChromeOptions(options).build();
}

export const mochaHooks = {
  async beforeAll(this: Mocha.Context) {
    this.timeout(120000); // first run may download the browser driver via Selenium Manager
    if (!process.env.BASE_URL) {
      server = await new Promise<Server>((resolve) => {
        const s = createApp().listen(TEST_PORT, () => resolve(s));
      });
    }
    driver = await buildDriver();
  },
  async beforeEach() {
    // Cookies are per-origin, so land on the app before clearing.
    await driver.get(`${baseUrl}/login`);
    await driver.manage().deleteAllCookies();
  },
  async afterAll() {
    await driver?.quit();
    await new Promise<void>((resolve) => (server ? server.close(() => resolve()) : resolve()));
  },
};
