"""Selenium page object stubs. Fill these in and use them from test_selenium_flow.py.

Tip: the app exposes stable data-testid attributes, e.g. (By.CSS_SELECTOR, '[data-testid="login-button"]').
Use WebDriverWait + expected_conditions rather than time.sleep().
"""
from selenium.webdriver.remote.webdriver import WebDriver


class BasePage:
    def __init__(self, driver: WebDriver, base_url: str):
        self.driver = driver
        self.base_url = base_url

    # TODO: shared helpers, e.g. open(path), find(locator), click(locator), type(locator, text),
    #       wait_for_path(path), current_path()


class LoginPage(BasePage):
    """Route: /login"""

    # TODO: declare locators (username input, password input, sign-in button, error message)

    def open(self):
        raise NotImplementedError("TODO")

    def login(self, user: str, password: str):
        raise NotImplementedError("TODO")

    def error_text(self) -> str:
        raise NotImplementedError("TODO")


class HomePage(BasePage):
    """Route: /home"""

    # TODO: declare locators (welcome heading, Start button)

    def welcome_text(self) -> str:
        raise NotImplementedError("TODO")

    def click_start(self):
        raise NotImplementedError("TODO")


class SetupPage(BasePage):
    """Route: /setup

    HEADS UP: the form is rendered inside an <iframe> (data-testid="setup-frame"). Only the page
    title is outside it. Switch into the frame to touch the form and switch back out afterwards
    (Forward/Back navigate the top-level window).
    """

    # TODO: declare locators

    def title(self) -> str:
        """The "Run Setup" heading (outside the iframe)."""
        raise NotImplementedError("TODO")

    def fill(self, run_name: str, read_type: str, read_length: str, analysis: str):
        """Enter the run name and choose one radio in each group."""
        raise NotImplementedError("TODO")

    def click_forward(self):
        raise NotImplementedError("TODO")

    def click_back(self):
        raise NotImplementedError("TODO")

    def run_name_error(self) -> str:
        raise NotImplementedError("TODO")

    def read_type_error(self) -> str:
        raise NotImplementedError("TODO")

    def read_length_error(self) -> str:
        raise NotImplementedError("TODO")

    def analysis_error(self) -> str:
        raise NotImplementedError("TODO")

    def run_name_value(self) -> str:
        raise NotImplementedError("TODO")

    def is_checked(self, test_id: str) -> bool:
        """Is the radio with this data-testid selected?"""
        raise NotImplementedError("TODO")

    def checked_radio_count(self) -> int:
        """How many radio buttons are currently selected across all groups?"""
        raise NotImplementedError("TODO")


class ReviewPage(BasePage):
    """Route: /review"""

    # TODO: declare locators (table, Back, Confirm, "Run Started" dialog title and Close button)

    def table_as_dict(self) -> dict:
        """Read the review table into a {label: value} dict, e.g. {"Run Name": "Run_001"}."""
        raise NotImplementedError("TODO")

    def click_back(self):
        raise NotImplementedError("TODO")

    def click_confirm(self):
        raise NotImplementedError("TODO")

    def dialog_title(self) -> str:
        raise NotImplementedError("TODO")

    def close_dialog(self):
        raise NotImplementedError("TODO")
