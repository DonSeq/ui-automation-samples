using Microsoft.Playwright;

// Playwright page object stubs. Fill these in and use them from PlaywrightTests/RunPlannerPlaywrightTests.cs.
// Tip: the app exposes stable data-testid attributes, and page.GetByTestId("...") targets them directly.
// Playwright locators are lazy and auto-wait, so you can declare them in the constructor.
namespace RunPlanner.Tests.Pages.PlaywrightPages;

/// <summary>Route: /login</summary>
public class LoginPage(IPage page)
{
    protected IPage Page { get; } = page;

    // TODO: declare locators (username input, password input, sign-in button, error message)

    public Task Open() => throw new NotImplementedException("TODO");

    public Task Login(string user, string password) => throw new NotImplementedException("TODO");
}

/// <summary>Route: /home</summary>
public class HomePage(IPage page)
{
    protected IPage Page { get; } = page;

    // TODO: declare locators (welcome heading, Start button)
}

/// <summary>
/// Route: /setup
/// HEADS UP: the form is rendered inside an &lt;iframe&gt; (data-testid="setup-frame"). Only the page title is
/// outside it. Look at Page.FrameLocator(...).
/// </summary>
public class SetupPage(IPage page)
{
    protected IPage Page { get; } = page;

    // TODO: declare locators (title outside the frame; run name, radios, errors, Back, Forward inside it)

    /// <summary>Enter the run name and choose one radio in each group.</summary>
    public Task Fill(string runName, string readType, string readLength, string analysis) =>
        throw new NotImplementedException("TODO");
}

/// <summary>Route: /review</summary>
public class ReviewPage(IPage page)
{
    protected IPage Page { get; } = page;

    // TODO: declare locators (table, Back, Confirm, "Run Started" dialog and its Close button)

    /// <summary>Read the review table into a label-to-value map, e.g. "Run Name" => "Run_001".</summary>
    public Task<Dictionary<string, string>> AsDictionary() => throw new NotImplementedException("TODO");
}
