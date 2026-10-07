import test,{expect} from "@playwright/test"
test ("Learn Dropdown with assertion",async({page})=>{
 await page.goto("https://leaftaps.com/opentaps/control/main")
 await page.getByRole("textbox",{name: "Username"}).fill("democsr")
await page.getByRole("textbox",{name: "Password"}).fill("crmsfa")
await page.getByRole("button",{name: "Login"}).click()
await page.getByRole("link",{name: "CRM/SFA"}).click()
await page.getByRole("link",{name: "Create Lead"}).click()
await page.selectOption("select#createLeadForm_dataSourceId",{label:"Employee"})
const allcount = page.locator("select#createLeadForm_dataSourceId>option")
const totallcount =await allcount.count()
console.log(totallcount)
for (let i = 0; i <totallcount; i++) {
   const option = await allcount.nth(i).innerText()
    console.log(option);
}

})