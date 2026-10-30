import { test, expect } from '@playwright/test';
import { HomePage, LoginPage, ReviewPage, RunSettings, SetupPage } from '../pages/pages';

const SETTINGS: RunSettings = {
  runName: 'Run_001',
  readType: 'Single Read',
  readLength: '300',
  analysis: 'Cloud',
};

// TODO (optional): write a fixture (test.extend) that signs in and clicks Start to land on /setup.

// Remove `.skip` from each test as you implement it.
test.describe('Run Setup flow', () => {
  test.skip('Start button navigates to the Run Setup page', async ({ page }) => {
    // TODO: sign in, click Start, assert the URL is /setup and the heading is "Run Setup"
  });

  test.skip('has no radio buttons selected by default', async ({ page }) => {
    // TODO: on Run Setup, assert none of the radios is checked (remember the iframe)
  });

  test.skip('requires a selection in every radio group', async ({ page }) => {
    // TODO: click Forward with nothing selected
    // TODO: assert the three radio-group errors and that you are still on /setup
  });

  test.skip('Back on Run Setup returns to Home', async ({ page }) => {
    // TODO: click Back and assert the URL is /home
  });

  test.skip('requires a Run Name', async ({ page }) => {
    // TODO: click Forward with an empty Run Name, assert "Run Name is required."
  });

  test.skip('rejects an invalid Run Name (server-side rule)', async ({ page }) => {
    // TODO: fill the form with SETTINGS but runName 'bad name!', click Forward
    // TODO: assert the error mentions "letters, numbers"
  });

  test.skip('Forward shows the entered settings on the Review page', async ({ page }) => {
    // TODO: fill the form with SETTINGS, click Forward, assert the URL is /review
    // TODO: assert the table contents match SETTINGS
  });

  test.skip('Back from Review keeps the previously entered values', async ({ page }) => {
    // TODO: submit the form, click Back on Review, assert the URL is /setup
    // TODO: assert the run name and the three radios still hold SETTINGS
  });

  test.skip('Confirm shows a Run Started popup and closing it returns Home', async ({ page }) => {
    // TODO: submit the form, click Confirm on Review
    // TODO: assert the dialog "Run Started" is visible, close it, assert the URL is /home
  });

  test.skip('redirects /review to /setup when nothing has been submitted', async ({ page }) => {
    // TODO: sign in, go straight to /review, assert the URL is /setup
  });
});
