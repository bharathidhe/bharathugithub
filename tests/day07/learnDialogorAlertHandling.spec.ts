/*import test from "@playwright/test"
test("learn Dialog orAlertHandling.spec", async({page})=> {
await page.goto("https://leafground.com/alert.xhtml")

//event registaring 
page.on("dialog",async(alert)=>{
let alertType = alert.type()
console.log(alertType)
console.log(alert.message);

switch (alertType) {
    case "confirm":
        alert.accept()
                break;
    case "prompt":
        alert.accept("bhuvanesh")
                break;       
                
    default:
        alert.dismiss()
        break;
}
})

//simple alert 
await page.locator(`//h5[text()= " Alert (Simple Dialog)"]/following-sibling::button`).click()
await page.waitForTimeout(2000)
//Confirm Dialog
await page.locator(`//h5[text()= " Alert (Confirm Dialog)"]/following-sibling::button`).click()
await page.waitForTimeout(2000)
//Prompt Dialog
await page.locator(`//h5[text()= " Alert (Prompt Dialog)"]/following-sibling::button`).click()
await page.waitForTimeout(2000)
//time
let confirmpromtmsg = await page.locator('#confirm_result').innerText()
console.log(confirmpromtmsg);

})
*/

import test from "@playwright/test"
test("Learn Alerts", async({page})=>{

await page.goto("https://leafground.com/alert.xhtml")
//event registering or event listernes 

page.on("dialog",async(alert)=>{
let alerttype = alert.type()
console.log(alerttype);
console.log(alert.message);

switch (alerttype) {
    case "confirm":
        alert.accept()
        break;

    case "prompt":
        alert.accept("Bhuvanesh")
        break;

    default:
        alert.dismiss()
}

})
//simple
page.locator("//h5[text()=' Alert (Simple Dialog)']/following-sibling::button").click()
await page.waitForTimeout(2000)

//prompt
page.locator("//h5[text()=' Alert (Confirm Dialog)']/following-sibling::button").click()
await page.waitForTimeout(2000)

//confirm
page.locator("//h5[text()=' Alert (Prompt Dialog)']/following-sibling::button").click()
await page.waitForTimeout(2000)

//confirm Sweet Alert (Simple Dialog)
page.locator("//h5[text()='Sweet Alert (Simple Dialog)']/following-sibling::button").click()
await page.waitForTimeout(4000)

})
