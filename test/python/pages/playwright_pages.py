"""Playwright page object stubs. Fill these in and use them from test_playwright_flow.py.

Tip: the app exposes stable data-testid attributes, and page.get_by_test_id("...") targets them directly.
Playwright locators are lazy and auto-wait, so you can declare them in __init__.
"""
from playwright.sync_api import Page


class LoginPage:
    """Route: /login"""

    def __init__(self, page: Page):
        self.page = page
        # TODO: declare locators (username input, password input, sign-in button, error message)

    def open(self):
        raise NotImplementedError("TODO")

    def login(self, user: str, password: str):
        raise NotImplementedError("TODO")


class HomePage:
    """Route: /home"""

    def __init__(self, page: Page):
        self.page = page
        # TODO: declare locators (welcome heading, Start button)


class SetupPage:
    """Route: /setup

    HEADS UP: the form is rendered inside an <iframe> (data-testid="setup-frame"). Only the page
    title is outside it. Look at page.frame_locator(...).
    """

    def __init__(self, page: Page):
        self.page = page
        # TODO: declare locators (title outside the frame; run name, radios, errors, Back, Forward inside it)

    def fill(self, run_name: str, read_type: str, read_length: str, analysis: str):
        """Enter the run name and choose one radio in each group."""
        raise NotImplementedError("TODO")


class ReviewPage:
    """Route: /review"""

    def __init__(self, page: Page):
        self.page = page
        # TODO: declare locators (table, Back, Confirm, "Run Started" dialog and its Close button)

    def as_dict(self) -> dict:
        """Read the review table into a {label: value} dict, e.g. {"Run Name": "Run_001"}."""
        raise NotImplementedError("TODO")
