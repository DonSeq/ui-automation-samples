import { expect } from 'chai';
import { getDriver } from '../support/hooks';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { RunSettings, SetupPage } from '../pages/SetupPage';
import { ReviewPage } from '../pages/ReviewPage';

const SETTINGS: RunSettings = {
  runName: 'Run_001',
  readType: 'Single Read',
  readLength: '300',
  analysis: 'Cloud',
};

// TODO (optional): write a helper that signs in and clicks Start to land on /setup.

// Remove `.skip` from each test as you implement it.
describe('Run Setup flow', () => {
  it.skip('Start button navigates to the Run Setup page', async () => {
    // TODO: sign in, click Start, assert the path is /setup and the heading is "Run Setup"
  });

  it.skip('has no radio buttons selected by default', async () => {
    // TODO: on Run Setup, assert zero radios are checked (remember the iframe)
  });

  it.skip('requires a selection in every radio group', async () => {
    // TODO: click Forward with nothing selected
    // TODO: assert the three radio-group errors and that you are still on /setup
  });

  it.skip('Back on Run Setup returns to Home', async () => {
    // TODO: click Back and wait for /home
  });

  it.skip('requires a Run Name', async () => {
    // TODO: click Forward with an empty Run Name, assert "Run Name is required."
  });

  it.skip('rejects an invalid Run Name (server-side rule)', async () => {
    // TODO: fill the form with SETTINGS but runName 'bad name!', click Forward
    // TODO: assert the error mentions "letters, numbers"
  });

  it.skip('Forward shows the entered settings on the Review page', async () => {
    // TODO: fill the form with SETTINGS, click Forward, wait for /review
    // TODO: assert the table contents match SETTINGS
  });

  it.skip('Back from Review keeps the previously entered values', async () => {
    // TODO: submit the form, click Back on Review, wait for /setup
    // TODO: assert the run name and the three radios still hold SETTINGS
  });

  it.skip('Confirm shows a Run Started popup and closing it returns Home', async () => {
    // TODO: submit the form, click Confirm on Review
    // TODO: assert the dialog title is "Run Started", close it, wait for /home
  });

  it.skip('redirects /review to /setup when nothing has been submitted', async () => {
    // TODO: sign in, go straight to /review, wait for /setup
  });
});
