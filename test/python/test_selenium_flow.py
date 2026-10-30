import pytest

from conftest import PASSWORD, USERNAME  # valid login: any username + password "illumina"
from pages.selenium_pages import HomePage, LoginPage, ReviewPage, SetupPage

SETTINGS = {"run_name": "Run_001", "read_type": "Single Read", "read_length": "300", "analysis": "Cloud"}

# Fixtures available: `driver` (a fresh Selenium WebDriver per test, so each test starts logged out)
# and `base_url`. TODO (optional): write fixtures that build your page objects, or one that signs in
# and clicks Start to land on /setup.
#
# Remove the `skip` marker from each test as you implement it.
skip = pytest.mark.skip(reason="TODO: implement")


# ---- Authentication ----

@skip
def test_login_greets_user_by_name(driver, base_url):
    # TODO: sign in as Ada / illumina, wait for /home, assert the heading is "Welcome, Ada"
    ...


@skip
def test_login_wrong_password_shows_error(driver, base_url):
    # TODO: sign in with a wrong password, assert the error text and that the path is still /login
    ...


@skip
def test_login_empty_fields_shows_error(driver, base_url):
    # TODO: submit empty username and password, assert the error text
    ...


@skip
@pytest.mark.parametrize("path", ["/home", "/setup", "/review"])
def test_unauthenticated_routes_redirect_to_login(driver, base_url, path):
    # TODO: go straight to `path` without signing in and wait for /login
    ...


# ---- Run Setup flow ----

@skip
def test_start_navigates_to_run_setup(driver, base_url):
    # TODO: sign in, click Start, assert the path is /setup and the heading is "Run Setup"
    ...


@skip
def test_no_radios_selected_by_default(driver, base_url):
    # TODO: on Run Setup, assert zero radios are checked (remember the iframe)
    ...


@skip
def test_every_radio_group_is_required(driver, base_url):
    # TODO: click Forward with nothing selected; assert the three radio-group errors and still on /setup
    ...


@skip
def test_back_on_setup_returns_home(driver, base_url):
    # TODO: click Back and wait for /home
    ...


@skip
def test_run_name_is_required(driver, base_url):
    # TODO: click Forward with an empty Run Name, assert "Run Name is required."
    ...


@skip
def test_invalid_run_name_rejected_by_server(driver, base_url):
    # TODO: fill the form with SETTINGS but run_name "bad name!", click Forward
    # TODO: assert the error mentions "letters, numbers"
    ...


@skip
def test_forward_shows_settings_on_review(driver, base_url):
    # TODO: fill the form with SETTINGS, click Forward, wait for /review
    # TODO: assert the table contents match SETTINGS
    ...


@skip
def test_back_from_review_keeps_values(driver, base_url):
    # TODO: submit the form, click Back on Review, wait for /setup
    # TODO: assert the run name and the three radios still hold SETTINGS
    ...


@skip
def test_confirm_shows_run_started_popup_and_close_returns_home(driver, base_url):
    # TODO: submit the form, click Confirm on Review
    # TODO: assert the dialog title is "Run Started", close it, wait for /home
    ...


@skip
def test_review_redirects_to_setup_when_nothing_submitted(driver, base_url):
    # TODO: sign in, go straight to /review, wait for /setup
    ...
