import { test } from "@playwright/test";

test("Login flow and get title using XPath and CSS", async ({ page }) => {

    // Open Salesforce login page
    await page.goto("https://login.salesforce.com/?locale=in");

    // Enter username
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com");

    // Enter password
    await page.locator("input#password").fill("TestLeaf@2025");

    // Click the Log In button
    await page.locator("input[value='Log In']").click();

    // Wait for the page to load
    await page.waitForTimeout(10000);
    
    
    // Get the title of the home page
    const pageTitle = await page.title();

    // Print the title
    console.log(`The title of the homepage is ${pageTitle}`);
});

