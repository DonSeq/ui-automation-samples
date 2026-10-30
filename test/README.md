# UI automation exercise

Automate the **Run Planner** web app. Pick one stack, fill in the page objects, then implement the tests
(remove the `skip` / `.skip` / `[Ignore]` marker from each one as you go).

| Stack                                  | Folder            | Page objects                          | Tests                                            |
| -------------------------------------- | ----------------- | ------------------------------------- | ------------------------------------------------ |
| Selenium + mocha/chai (TypeScript)     | `selenium/`       | `pages/*.ts`                          | `specs/*.spec.ts`                                |
| Playwright Test (TypeScript)           | `playwright/`     | `pages/pages.ts`                      | `specs/*.spec.ts`                                |
| Python (Selenium, pytest)              | `python/`         | `pages/selenium_pages.py`             | `test_selenium_flow.py`                          |
| Python (Playwright, pytest)            | `python/`         | `pages/playwright_pages.py`           | `test_playwright_flow.py`                        |
| C# (Selenium, NUnit)                   | `csharp/`         | `Pages/SeleniumPages.cs`              | `SeleniumTests/RunPlannerSeleniumTests.cs`       |
| C# (Playwright, NUnit)                 | `csharp/`         | `Pages/PlaywrightPages.cs`            | `PlaywrightTests/RunPlannerPlaywrightTests.cs`   |

Browser/server plumbing (driver creation, app startup, base URL, headless) is already provided. See the root `README.md` for how to run each stack.

## The app

Flow: **Login → Home → Run Setup → Review → (Confirm popup) → Home**

| Route         | Notes                                                                                           |
| ------------- | ----------------------------------------------------------------------------------------------- |
| `/login`      | Any username + password `illumina`. Wrong/empty input shows an error.                           |
| `/home`       | "Welcome, `<username>`" and a Start button.                                                     |
| `/setup`      | Page shell with the heading. **The form is inside an `<iframe>`** (served from `/setup/form`).  |
| `/review`     | Table of the submitted settings, Back, and Confirm (opens a "Run Started" dialog).              |

Rules worth testing: signed-out visits to `/home`, `/setup`, `/review` go to `/login`; `/review` with nothing submitted goes to `/setup`;
no radio is selected by default and each group is required; Run Name must be 3–40 chars of letters/numbers/`-`/`_`
(empty is caught client-side, other bad values by the server); Back from Review keeps the entered values;
closing the Run Started dialog (button or Esc) goes to Home.
