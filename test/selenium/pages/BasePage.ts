import { WebDriver } from 'selenium-webdriver';

/**
 * Shared helpers for every page object.
 * TODO: implement what you need, e.g.
 *   - goto(path)            navigate relative to baseUrl (exported from ../support/hooks)
 *   - find / click / type / text   with explicit waits (until.elementLocated, until.elementIsVisible)
 *   - waitForPath / currentPath    assert on the URL pathname
 * Tip: the app exposes stable data-testid attributes, e.g. By.css('[data-testid="login-button"]').
 */
export abstract class BasePage {
  constructor(protected readonly driver: WebDriver) {}

  async goto(_path: string): Promise<void> {
    throw new Error('TODO: implement');
  }

  async waitForPath(_path: string): Promise<void> {
    throw new Error('TODO: implement');
  }

  async currentPath(): Promise<string> {
    throw new Error('TODO: implement');
  }
}
