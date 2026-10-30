import { BasePage } from './BasePage';

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
 * Only the page title is outside it. You will need to switch into the frame to touch the form,
 * and switch back out afterwards (Forward/Back navigate the top-level window).
 */
export class SetupPage extends BasePage {
  // TODO: declare locators

  /** The "Run Setup" heading (outside the iframe). */
  async title(): Promise<string> {
    throw new Error('TODO: implement');
  }

  /** Enter the run name and choose one radio in each group. */
  async fill(_settings: RunSettings): Promise<void> {
    throw new Error('TODO: implement');
  }

  async clickForward(): Promise<void> {
    throw new Error('TODO: implement');
  }

  async clickBack(): Promise<void> {
    throw new Error('TODO: implement');
  }

  async runNameErrorText(): Promise<string> {
    throw new Error('TODO: implement');
  }

  async readTypeErrorText(): Promise<string> {
    throw new Error('TODO: implement');
  }

  async readLengthErrorText(): Promise<string> {
    throw new Error('TODO: implement');
  }

  async analysisErrorText(): Promise<string> {
    throw new Error('TODO: implement');
  }

  async runNameValue(): Promise<string> {
    throw new Error('TODO: implement');
  }

  /** Is the radio with this data-testid selected? */
  async isChecked(_testId: string): Promise<boolean> {
    throw new Error('TODO: implement');
  }

  /** How many radio buttons are currently selected across all groups? */
  async checkedRadioCount(): Promise<number> {
    throw new Error('TODO: implement');
  }
}
