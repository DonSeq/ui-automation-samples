import { BasePage } from './BasePage';

/** Route: /login */
export class LoginPage extends BasePage {
  // TODO: declare locators (username input, password input, sign-in button, error message)

  async open(): Promise<this> {
    throw new Error('TODO: implement');
  }

  async login(_user: string, _password: string): Promise<void> {
    throw new Error('TODO: implement');
  }

  async errorText(): Promise<string> {
    throw new Error('TODO: implement');
  }
}
