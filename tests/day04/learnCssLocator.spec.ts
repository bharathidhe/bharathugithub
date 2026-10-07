import {test} from "@playwright/test"
test("Learn Css loctors", async({page})=>{
await page.goto("https://leaftaps.com/")
await page.locator(`#username`).fill(`demosalesmanager`)
await page.locator(`.inputLogin`).last().fill(`crmsfa`)
await page.locator(`.decorativeSubmit`).click()
await page.locator(`#label>a`).click()
await page.locator(`.x-panel-header>a`).nth(1).click()
const pagetitle =await  page.title()
console.log(pagetitle)
})