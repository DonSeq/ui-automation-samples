import { BasePage } from './BasePage';

/** Route: /review */
export class ReviewPage extends BasePage {
  // TODO: declare locators (table, Back, Confirm, "Run Started" dialog title and Close button)

  /** Read the review table into a { label: value } map, e.g. { 'Run Name': 'Run_001' }. */
  async tableAsRecord(): Promise<Record<string, string>> {
    throw new Error('TODO: implement');
  }

  async clickBack(): Promise<void> {
    throw new Error('TODO: implement');
  }

  async clickConfirm(): Promise<void> {
    throw new Error('TODO: implement');
  }

  async dialogTitle(): Promise<string> {
    throw new Error('TODO: implement');
  }

  async closeDialog(): Promise<void> {
    throw new Error('TODO: implement');
  }
}
