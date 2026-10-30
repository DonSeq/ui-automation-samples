import { BasePage } from './BasePage';

/** Route: /home */
export class HomePage extends BasePage {
  // TODO: declare locators (welcome heading, Start button)

  async welcomeText(): Promise<string> {
    throw new Error('TODO: implement');
  }

  async clickStart(): Promise<void> {
    throw new Error('TODO: implement');
  }
}
