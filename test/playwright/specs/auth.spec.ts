import { test, expect } from '@playwright/test';
import { HomePage, LoginPage } from '../pages/pages';

// Remove `.skip` from each test as you implement it.
// Each test gets a fresh browser context, so it starts logged out. Valid login: any username + password "illumina".
test.describe('Authentication', () => {
  test.skip('signs in and greets the user by name', async ({ page }) => {
    // TODO: open the login page and sign in as Ada / illumina
    // TODO: assert the URL ends with /home and the heading reads "Welcome, Ada"
  });

  test.skip('shows an error for a wrong password and stays on login', async ({ page }) => {
    // TODO: sign in with a wrong password
    // TODO: assert the error text and that the URL is still /login
  });

  test.skip('shows an error when fields are empty', async ({ page }) => {
    // TODO: submit the form with empty username and password, assert the error text
  });

  for (const path of ['/home', '/setup', '/review']) {
    test.skip(`redirects unauthenticated ${path} to /login`, async ({ page }) => {
      // TODO: go straight to `path` without signing in and assert you land on /login
    });
  }
});
