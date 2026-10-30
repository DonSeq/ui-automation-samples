using OpenQA.Selenium;

// Selenium page object stubs. Fill these in and use them from SeleniumTests/RunPlannerSeleniumTests.cs.
// Tip: the app exposes stable data-testid attributes, e.g. By.CssSelector("[data-testid='login-button']").
// Use WebDriverWait rather than Thread.Sleep().
namespace RunPlanner.Tests.Pages.SeleniumPages;

public abstract class BasePage(IWebDriver driver)
{
    protected IWebDriver Driver { get; } = driver;

    // TODO: shared helpers, e.g. Open(path), Find(by), Click(by), Type(by, text), WaitForPath(path), CurrentPath
}

/// <summary>Route: /login</summary>
public class LoginPage(IWebDriver driver) : BasePage(driver)
{
    // TODO: declare locators (username input, password input, sign-in button, error message)

    public LoginPage Open() => throw new NotImplementedException("TODO");

    public void Login(string user, string password) => throw new NotImplementedException("TODO");

    public string ErrorText() => throw new NotImplementedException("TODO");
}

/// <summary>Route: /home</summary>
public class HomePage(IWebDriver driver) : BasePage(driver)
{
    // TODO: declare locators (welcome heading, Start button)

    public string WelcomeText() => throw new NotImplementedException("TODO");

    public void ClickStart() => throw new NotImplementedException("TODO");
}

/// <summary>
/// Route: /setup
/// HEADS UP: the form is rendered inside an &lt;iframe&gt; (data-testid="setup-frame"). Only the page title is
/// outside it. Switch into the frame to touch the form and switch back out afterwards
/// (Forward/Back navigate the top-level window).
/// </summary>
public class SetupPage(IWebDriver driver) : BasePage(driver)
{
    // TODO: declare locators

    /// <summary>The "Run Setup" heading (outside the iframe).</summary>
    public string Title() => throw new NotImplementedException("TODO");

    /// <summary>Enter the run name and choose one radio in each group.</summary>
    public void Fill(string runName, string readType, string readLength, string analysis) =>
        throw new NotImplementedException("TODO");

    public void ClickForward() => throw new NotImplementedException("TODO");

    public void ClickBack() => throw new NotImplementedException("TODO");

    public string RunNameError() => throw new NotImplementedException("TODO");

    public string ReadTypeError() => throw new NotImplementedException("TODO");

    public string ReadLengthError() => throw new NotImplementedException("TODO");

    public string AnalysisError() => throw new NotImplementedException("TODO");

    public string RunNameValue() => throw new NotImplementedException("TODO");

    /// <summary>Is the radio with this data-testid selected?</summary>
    public bool IsChecked(string testId) => throw new NotImplementedException("TODO");

    /// <summary>How many radio buttons are currently selected across all groups?</summary>
    public int CheckedRadioCount() => throw new NotImplementedException("TODO");
}

/// <summary>Route: /review</summary>
public class ReviewPage(IWebDriver driver) : BasePage(driver)
{
    // TODO: declare locators (table, Back, Confirm, "Run Started" dialog title and Close button)

    /// <summary>Read the review table into a label-to-value map, e.g. "Run Name" => "Run_001".</summary>
    public Dictionary<string, string> TableAsDictionary() => throw new NotImplementedException("TODO");

    public void ClickBack() => throw new NotImplementedException("TODO");

    public void ClickConfirm() => throw new NotImplementedException("TODO");

    public string DialogTitle() => throw new NotImplementedException("TODO");

    public void CloseDialog() => throw new NotImplementedException("TODO");
}
