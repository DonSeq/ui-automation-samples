namespace RunPlanner.Tests;

/// <summary>
/// The app must already be running (npm run dev, or npm start after npm run build).
///   BASE_URL=http://localhost:3000   target app (default)
///   HEADLESS=false                   watch the browser (default headless)
/// </summary>
public static class TestConfig
{
    public static string BaseUrl => (Environment.GetEnvironmentVariable("BASE_URL") ?? "http://localhost:3000").TrimEnd('/');
    public static bool Headless => !string.Equals(Environment.GetEnvironmentVariable("HEADLESS"), "false", StringComparison.OrdinalIgnoreCase);

    public const string Username = "Ada";
    public const string Password = "illumina";
}
