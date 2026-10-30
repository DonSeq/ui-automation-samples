# Run Planner – UI automation interview sample

A small TypeScript / Express / EJS web app (Illumina-inspired palette – no brand assets) plus skeleton
end-to-end suites in four flavours under `test/`.

## The app

Flow: **Login → Home (Welcome, `<user>` + Start) → Run Setup (Run Name + radios, Back/Forward) → Review (table)**

- Demo login: any username + password **`illumina`**.
- Run Name rule: 3–40 chars, letters/numbers/`-`/`_` (checked client-side when empty, server-side for the rest).
- The Run Setup form is rendered inside an `<iframe>` (`data-testid="setup-frame"`, served from `/setup/form`), so tests
  must switch into the frame. No radio button is selected by default, and each group is required.
- Back from Review returns to Setup with values preserved.
- Confirm on Review opens a "Run Started" popup (`<dialog>`); closing it returns to Home and clears the saved setup.
- `/home`, `/setup`, `/review` redirect to `/login` when signed out; `/review` redirects to `/setup` if nothing was submitted.
- Most elements have an `id` equal to their `data-testid` (e.g. `username-input`, `start-button`, `run-name-error`).

```bash
npm install
npm run dev            # http://localhost:3000   (or: npm run build && npm start)
```

## Tests (`test/`)

The suites are **skeletons for a candidate to complete**: stubbed page objects plus skipped tests with `TODO` steps.
See `test/README.md` for the exercise, the routes and rules, and which file to edit per stack.

| Stack                | Folder             | Run                                                       |
| -------------------- | ------------------ | --------------------------------------------------------- |
| Selenium + mocha/chai | `test/selenium`    | `npm run test:selenium`                                   |
| Playwright Test (TS) | `test/playwright`  | `npx playwright install chromium` then `npm run test:playwright` |
| Python (Selenium + Playwright, pytest) | `test/python` | see below                                       |
| C# (Selenium + Playwright, NUnit)      | `test/csharp` | see below                                       |

All suites list the same 14 scenarios: login success / failure / empty, route guards, Start → Setup, no radios selected by
default, required radio groups, Setup Back, required + invalid Run Name, Forward → Review table contents,
Back-from-Review keeps values, Confirm popup → Home, and the `/review` redirect.

**TypeScript suites** start the app themselves (mocha root hook on port 3100, Playwright `webServer` on 3101).
Set `BASE_URL` to test an already-running app. `HEADLESS=false` (Selenium) / `HEADED=1` (Playwright) to watch.
Selenium uses Chrome by default (`BROWSER=edge` for Edge); Selenium Manager downloads the driver on first run.

**Python and C# suites expect the app to be running** (`npm run dev`) and read `BASE_URL` (default `http://localhost:3000`).

```powershell
# Python
cd test/python
python -m venv .venv
.venv\Scripts\Activate.ps1        # bash: source .venv/bin/activate
pip install -r requirements.txt
playwright install chromium
pytest                            # or: pytest test_selenium_flow.py / test_playwright_flow.py

# C#
cd test/csharp
dotnet build
pwsh bin/Debug/net10.0/playwright.ps1 install chromium
dotnet test --filter "FullyQualifiedName~SeleniumTests"
dotnet test --filter "FullyQualifiedName~PlaywrightTests"
```

`test/csharp/RunPlanner.Tests.csproj` targets `net10.0`; change `TargetFramework` (and the path above) to match
the runtime from `dotnet --list-runtimes`.
