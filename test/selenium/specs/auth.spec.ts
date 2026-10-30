import { expect } from 'chai';
import { getDriver } from '../support/hooks';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

// Remove `.skip` from each test as you implement it.
// Each test starts logged out (cookies are cleared in the root hook). Valid login: any username + password "illumina".
describe('Authentication', () => {
  it.skip('signs in and greets the user by name', async () => {
    // TODO: open the login page and sign in as Ada / illumina
    // TODO: wait for /home and assert the heading reads "Welcome, Ada"
  });

  it.skip('shows an error for a wrong password and stays on login', async () => {
    // TODO: sign in with a wrong password
    // TODO: assert the error text and that the path is still /login
  });

  it.skip('shows an error when fields are empty', async () => {
    // TODO: submit the form with empty username and password, assert the error text
  });

  for (const path of ['/home', '/setup', '/review']) {
    it.skip(`redirects unauthenticated ${path} to /login`, async () => {
      // TODO: go straight to `path` without signing in and wait for /login
    });
  }
});
