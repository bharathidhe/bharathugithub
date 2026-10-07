import {test} from "@playwright/test";
test("Login testleaf",async({ page })=>{

//await page.goto("https://leaftaps.com/opentaps/control/login");
//https://login.salesforce.com/?locale=in
await page.goto("https://login.salesforce.com/?locale=in");

await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com");
await page.locator("#password").fill("TestLeaf@2025");
 page.locator("//input[@name='Login']").click;
 await page.locator("input[value='Log In']").click();
    

 await page.locator("//span[text()='Leads']").click();
})




