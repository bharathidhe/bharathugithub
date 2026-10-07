import test from "@playwright/test"
test("Learn Alerts", async({page})=>{

await page.goto("https://leafground.com/alert.xhtml")
//event registering 

page.once("dialog",async(alert)=>{
let alerttype = alert.type()
console.log(alerttype);
console.log(alert.message);

if (alerttype==="confirm") {
    await alert.accept()
    
} else {
     await alert.dismiss()
}


})
/*//simple
page.locator("//h5[text()=' Alert (Simple Dialog)']/following-sibling::button").click()
await page.waitForTimeout(2000)*/


page.locator("//h5[text()=' Alert (Confirm Dialog)']/following-sibling::button").click()
await page.waitForTimeout(2000)
/*
//confirm
page.locator("//h5[text()=' Alert (Prompt Dialog)']/following-sibling::button").click()
await page.waitForTimeout(2000)

//confirm Sweet Alert (Simple Dialog)
page.locator("//h5[text()='Sweet Alert (Simple Dialog)']/following-sibling::button").click()
await page.waitForTimeout(4000)
*/
})

test("Learn Alerts1", async({page})=>{

await page.goto("https://leafground.com/alert.xhtml")
//event registering 
})
