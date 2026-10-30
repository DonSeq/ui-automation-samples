"""Shared fixtures.

The app must already be running (npm run dev, or npm start after npm run build).

    BASE_URL=http://localhost:3000   target app (default)
    BROWSER=chrome|edge              Selenium browser (default chrome)
    HEADLESS=false                   watch the Selenium browser (default headless)

For Playwright, use pytest-playwright's own flags, e.g. `--headed` or `--browser firefox`.
"""
import os

import pytest
from selenium import webdriver

USERNAME = "Ada"
PASSWORD = "illumina"


@pytest.fixture(scope="session")
def base_url() -> str:
    # Overrides the `base_url` fixture from pytest-base-url so Playwright's page.goto("/x") works too.
    return os.environ.get("BASE_URL", "http://localhost:3000").rstrip("/")


@pytest.fixture
def driver():
    headless = os.environ.get("HEADLESS", "true").lower() != "false"
    browser = os.environ.get("BROWSER", "chrome").lower()
    if browser == "edge":
        options = webdriver.EdgeOptions()
        factory = webdriver.Edge
    else:
        options = webdriver.ChromeOptions()
        factory = webdriver.Chrome
    if headless:
        options.add_argument("--headless=new")
    options.add_argument("--window-size=1280,900")

    drv = factory(options=options)  # Selenium Manager fetches the matching driver automatically
    yield drv
    drv.quit()
