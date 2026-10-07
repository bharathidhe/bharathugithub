
import {test,expect} from "@playwright/test";

test("Learn to locate the element using the Playwright locator",async({page})=>{
    await page.goto("https://leaftaps.com/opentaps/control/login")
    //await page.locator(`//input[@id="username"]`).fill("democsr")
    // 1.getByRole()--> role : textbox
    const usernameField = page.getByRole(`textbox`,{name:"Username"})
    await expect.soft(page.getByRole(`textbox`,{name:"Username"})).toBeHidden()
    await usernameField.fill("democsr")
    // 2.getByLabel()--> 
    await page.getByLabel(`Password`).fill("crmsfa")
    await page.getByRole(`button`).click()
    const welcomeMessage = await page.getByRole("heading").innerText()
    console.log(welcomeMessage)
    expect(welcomeMessage)
    await page.getByRole("link",{name:"CRM/SFA"}).click()
    // 3.getByText()
    await page.getByText("Leads",{exact:true}).click()
    await page.getByText("//a[text()='Create Lead']").click()
       await page.waitForTimeout(10000);
    // 4.getByAltText()
    //await page.getByAltText("opentaps CRM").click()
    // 5.getByPlaceHolder 
    // 6.getByTitle()
    // 7.getByTestid()
    await page.getByText("//span[text()='Company Name']").fill("Divyabharathi")
    //await page.expect
   await page.waitForTimeout(10000);
})

