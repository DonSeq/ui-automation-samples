using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;
using RunPlanner.Tests.Pages.SeleniumPages;

namespace RunPlanner.Tests.SeleniumTests;

// Remove the [Ignore] attribute from each test as you implement it.
// Valid login: any username + password "illumina" (see TestConfig).
[TestFixture]
public class RunPlannerSeleniumTests
{
    private IWebDriver _driver = null!;
    private WebDriverWait _wait = null!;

    // Test data for the Run Setup tests.
    private const string RunName = "Run_001";
    private const string ReadType = "Single Read";
    private const string ReadLength = "300";
    private const string Analysis = "Cloud";

    [SetUp]
    public void SetUp()
    {
        var options = new ChromeOptions();
        if (TestConfig.Headless) options.AddArgument("--headless=new");
        options.AddArgument("--window-size=1280,900");

        _driver = new ChromeDriver(options); // Selenium Manager fetches the matching chromedriver automatically
        _wait = new WebDriverWait(_driver, TimeSpan.FromSeconds(5));
        // TODO (optional): construct your page objects here, e.g. new LoginPage(_driver)
    }

    [TearDown]
    public void TearDown() => _driver.Quit();

    // ---- Authentication ----

    [Test, Ignore("TODO: implement")]
    public void Login_GreetsUserByName()
    {
        // TODO: sign in as Ada / illumina, wait for /home, assert the heading is "Welcome, Ada"
    }

    [Test, Ignore("TODO: implement")]
    public void Login_WrongPassword_ShowsError()
    {
        // TODO: sign in with a wrong password, assert the error text and that the path is still /login
    }

    [Test, Ignore("TODO: implement")]
    public void Login_EmptyFields_ShowsError()
    {
        // TODO: submit empty username and password, assert the error text
    }

    [TestCase("/home")]
    [TestCase("/setup")]
    [TestCase("/review")]
    [Ignore("TODO: implement")]
    public void UnauthenticatedRoutes_RedirectToLogin(string path)
    {
        // TODO: go straight to `path` without signing in and wait for /login
    }

    // ---- Run Setup flow ----

    [Test, Ignore("TODO: implement")]
    public void Start_NavigatesToRunSetup()
    {
        // TODO: sign in, click Start, assert the path is /setup and the heading is "Run Setup"
    }

    [Test, Ignore("TODO: implement")]
    public void Setup_NoRadiosSelectedByDefault()
    {
        // TODO: on Run Setup, assert zero radios are checked (remember the iframe)
    }

    [Test, Ignore("TODO: implement")]
    public void Setup_EveryRadioGroupIsRequired()
    {
        // TODO: click Forward with nothing selected; assert the three radio-group errors and still on /setup
    }

    [Test, Ignore("TODO: implement")]
    public void Setup_Back_ReturnsHome()
    {
        // TODO: click Back and wait for /home
    }

    [Test, Ignore("TODO: implement")]
    public void Setup_RunNameIsRequired()
    {
        // TODO: click Forward with an empty Run Name, assert "Run Name is required."
    }

    [Test, Ignore("TODO: implement")]
    public void Setup_InvalidRunName_RejectedByServer()
    {
        // TODO: fill the form but with run name "bad name!", click Forward
        // TODO: assert the error mentions "letters, numbers"
    }

    [Test, Ignore("TODO: implement")]
    public void Forward_ShowsSettingsOnReview()
    {
        // TODO: fill the form, click Forward, wait for /review
        // TODO: assert the table contents match the test data
    }

    [Test, Ignore("TODO: implement")]
    public void Review_Back_KeepsValues()
    {
        // TODO: submit the form, click Back on Review, wait for /setup
        // TODO: assert the run name and the three radios still hold the test data
    }

    [Test, Ignore("TODO: implement")]
    public void Confirm_ShowsRunStartedPopup_AndCloseReturnsHome()
    {
        // TODO: submit the form, click Confirm on Review
        // TODO: assert the dialog title is "Run Started", close it, wait for /home
    }

    [Test, Ignore("TODO: implement")]
    public void Review_WithoutSubmission_RedirectsToSetup()
    {
        // TODO: sign in, go straight to /review, wait for /setup
    }
}
