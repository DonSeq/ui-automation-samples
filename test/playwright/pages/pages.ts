import { Page } from '@playwright/test';

/**
 * Page object stubs. Fill these in and use them from the specs.
 * Tip: the app exposes stable data-testid attributes, and page.getByTestId('...') targets them directly.
 * Playwright locators are lazy and auto-wait, so you can declare them in the constructor.
 */

/** Route: /login */
export class LoginPage {
  // TODO: declare locators (username input, password input, sign-in button, error message)
  constructor(private readonly page: Page) {}

  async open() {
    throw new Error('TODO: implement');
  }

  async login(_user: string, _password: string) {
    throw new Error('TODO: implement');
  }
}

/** Route: /home */
export class HomePage {
  // TODO: declare locators (welcome heading, Start button)
  constructor(private readonly page: Page) {}
}

export interface RunSettings {
  runName: string;
  readType: 'Single Read' | 'Paired End';
  readLength: '75' | '150' | '300';
  analysis: 'Onboard' | 'Cloud';
}

/**
 * Route: /setup
 *
 * HEADS UP: the form is rendered inside an <iframe> (data-testid="setup-frame").
 * Only the page title is outside it. Look at page.frameLocator(...).
 */
export class SetupPage {
  // TODO: declare locators (title outside the frame; run name, radios, errors, Back, Forward inside it)
  constructor(private readonly page: Page) {}

  async fill(_settings: RunSettings) {
    throw new Error('TODO: implement');
  }
}

/** Route: /review */
export class ReviewPage {
  // TODO: declare locators (table, Back, Confirm, "Run Started" dialog and its Close button)
  constructor(private readonly page: Page) {}

  /** Read the review table into a { label: value } map, e.g. { 'Run Name': 'Run_001' }. */
  async asRecord(): Promise<Record<string, string>> {
    throw new Error('TODO: implement');
  }
}
