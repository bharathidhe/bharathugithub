import test from "@playwright/test"
test("learn playwright locator", async({page})=>{
await page.goto("https://leaftaps.com/opentaps/control/login")
//1.getByRole
await page.getByRole(`textbox`,{name: "Username"}).fill("demosalesmanager")
//2.getbylabel
await page.getByLabel(`Password`).fill("crmsfa")
await page.getByRole(`button`,{name: "Login"}).click()
const welcomtitle = await page.getByRole(`heading`,{name: "Welcome Demo Sales Manager"}).innerText()
console.log(welcomtitle)
await page.getByRole(`link`,{name: "CRM/SFA"}).click()
await page.getByText(`Leads`,{exact:true}).click()

await page.getByText(`Create Lead`).click()
await page.locator(`//input[@name="companyName"]`).first().fill("meowkutty")  

})