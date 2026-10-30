import pytest
from playwright.sync_api import Page, expect

from conftest import PASSWORD, USERNAME  # valid login: any username + password "illumina"
from pages.playwright_pages import HomePage, LoginPage, ReviewPage, SetupPage

SETTINGS = {"run_name": "Run_001", "read_type": "Single Read", "read_length": "300", "analysis": "Cloud"}

# pytest-playwright provides the `page` fixture (a fresh browser context per test, so each test starts
# logged out). `base_url` comes from conftest.py, so page.goto("/login") resolves against it.
# TODO (optional): write fixtures that build your page objects, or one that signs in and clicks Start.
#
# Remove the `skip` marker from each test as you implement it.
skip = pytest.mark.skip(reason="TODO: implement")


# ---- Authentication ----

@skip
def test_login_greets_user_by_name(page: Page):
    # TODO: sign in as Ada / illumina, assert the URL ends with /home and the heading is "Welcome, Ada"
    ...


@skip
def test_login_wrong_password_shows_error(page: Page):
    # TODO: sign in with a wrong password, assert the error text and that the URL is still /login
    ...


@skip
def test_login_empty_fields_shows_error(page: Page):
    # TODO: submit empty username and password, assert the error text
    ...


@skip
@pytest.mark.parametrize("path", ["/home", "/setup", "/review"])
def test_unauthenticated_routes_redirect_to_login(page: Page, path: str):
    # TODO: go straight to `path` without signing in and assert you land on /login
    ...


# ---- Run Setup flow ----

@skip
def test_start_navigates_to_run_setup(page: Page):
    # TODO: sign in, click Start, assert the URL is /setup and the heading is "Run Setup"
    ...


@skip
def test_no_radios_selected_by_default(page: Page):
    # TODO: on Run Setup, assert none of the radios is checked (remember the iframe)
    ...


@skip
def test_every_radio_group_is_required(page: Page):
    # TODO: click Forward with nothing selected; assert the three radio-group errors and still on /setup
    ...


@skip
def test_back_on_setup_returns_home(page: Page):
    # TODO: click Back and assert the URL is /home
    ...


@skip
def test_run_name_is_required(page: Page):
    # TODO: click Forward with an empty Run Name, assert "Run Name is required."
    ...


@skip
def test_invalid_run_name_rejected_by_server(page: Page):
    # TODO: fill the form with SETTINGS but run_name "bad name!", click Forward
    # TODO: assert the error mentions "letters, numbers"
    ...


@skip
def test_forward_shows_settings_on_review(page: Page):
    # TODO: fill the form with SETTINGS, click Forward, assert the URL is /review
    # TODO: assert the table contents match SETTINGS
    ...


@skip
def test_back_from_review_keeps_values(page: Page):
    # TODO: submit the form, click Back on Review, assert the URL is /setup
    # TODO: assert the run name and the three radios still hold SETTINGS
    ...


@skip
def test_confirm_shows_run_started_popup_and_close_returns_home(page: Page):
    # TODO: submit the form, click Confirm on Review
    # TODO: assert the dialog "Run Started" is visible, close it, assert the URL is /home
    ...


@skip
def test_review_redirects_to_setup_when_nothing_submitted(page: Page):
    # TODO: sign in, go straight to /review, assert the URL is /setup
    ...
