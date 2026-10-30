using System.Text.RegularExpressions;
using Microsoft.Playwright;
using Microsoft.Playwright.NUnit;
using RunPlanner.Tests.Pages.PlaywrightPages;

namespace RunPlanner.Tests.PlaywrightTests;

// PageTest gives every test a fresh browser context + Page, so each test starts logged out.
// Valid login: any username + password "illumina" (see TestConfig). Headed mode: set HEADED=1.
// Remove the [Ignore] attribute from each test as you implement it.
[TestFixture]
public class RunPlannerPlaywrightTests : PageTest
{
    public override BrowserNewContextOptions ContextOptions() => new() { BaseURL = TestConfig.BaseUrl };

    // Test data for the Run Setup tests.
    private const string RunName = "Run_001";
    private const string ReadType = "Single Read";
    private const string ReadLength = "300";
    private const string Analysis = "Cloud";

    // TODO (optional): construct your page objects in a [SetUp] method, e.g. new LoginPage(Page)

    // ---- Authentication ----

    [Test, Ignore("TODO: implement")]
    public async Task Login_GreetsUserByName()
    {
        // TODO: sign in as Ada / illumina, assert the URL ends with /home and the heading is "Welcome, Ada"
        await Task.CompletedTask;
    }

    [Test, Ignore("TODO: implement")]
    public async Task Login_WrongPassword_ShowsError()
    {
        // TODO: sign in with a wrong password, assert the error text and that the URL is still /login
        await Task.CompletedTask;
    }

    [Test, Ignore("TODO: implement")]
    public async Task Login_EmptyFields_ShowsError()
    {
        // TODO: submit empty username and password, assert the error text
        await Task.CompletedTask;
    }

    [TestCase("/home")]
    [TestCase("/setup")]
    [TestCase("/review")]
    [Ignore("TODO: implement")]
    public async Task UnauthenticatedRoutes_RedirectToLogin(string path)
    {
        // TODO: go straight to `path` without signing in and assert you land on /login
        await Task.CompletedTask;
    }

    // ---- Run Setup flow ----

    [Test, Ignore("TODO: implement")]
    public async Task Start_NavigatesToRunSetup()
    {
        // TODO: sign in, click Start, assert the URL is /setup and the heading is "Run Setup"
        await Task.CompletedTask;
    }

    [Test, Ignore("TODO: implement")]
    public async Task Setup_NoRadiosSelectedByDefault()
    {
        // TODO: on Run Setup, assert none of the radios is checked (remember the iframe)
        await Task.CompletedTask;
    }

    [Test, Ignore("TODO: implement")]
    public async Task Setup_EveryRadioGroupIsRequired()
    {
        // TODO: click Forward with nothing selected; assert the three radio-group errors and still on /setup
        await Task.CompletedTask;
    }

    [Test, Ignore("TODO: implement")]
    public async Task Setup_Back_ReturnsHome()
    {
        // TODO: click Back and assert the URL is /home
        await Task.CompletedTask;
    }

    [Test, Ignore("TODO: implement")]
    public async Task Setup_RunNameIsRequired()
    {
        // TODO: click Forward with an empty Run Name, assert "Run Name is required."
        await Task.CompletedTask;
    }

    [Test, Ignore("TODO: implement")]
    public async Task Setup_InvalidRunName_RejectedByServer()
    {
        // TODO: fill the form but with run name "bad name!", click Forward
        // TODO: assert the error mentions "letters, numbers"
        await Task.CompletedTask;
    }

    [Test, Ignore("TODO: implement")]
    public async Task Forward_ShowsSettingsOnReview()
    {
        // TODO: fill the form, click Forward, assert the URL is /review
        // TODO: assert the table contents match the test data
        await Task.CompletedTask;
    }

    [Test, Ignore("TODO: implement")]
    public async Task Review_Back_KeepsValues()
    {
        // TODO: submit the form, click Back on Review, assert the URL is /setup
        // TODO: assert the run name and the three radios still hold the test data
        await Task.CompletedTask;
    }

    [Test, Ignore("TODO: implement")]
    public async Task Confirm_ShowsRunStartedPopup_AndCloseReturnsHome()
    {
        // TODO: submit the form, click Confirm on Review
        // TODO: assert the dialog "Run Started" is visible, close it, assert the URL is /home
        await Task.CompletedTask;
    }

    [Test, Ignore("TODO: implement")]
    public async Task Review_WithoutSubmission_RedirectsToSetup()
    {
        // TODO: sign in, go straight to /review, assert the URL is /setup
        await Task.CompletedTask;
    }
}
