import test from "@playwright/test"
test ("Test Dialog box", async ({page})=>{

await page.goto("https://leafground.com/alert.xhtml")

//event registary
page.on("dialog",async(alert)=>{
let alertType =alert.type()
//to print type of alert and message type 

console.log(alertType);
console.log(alert.message);
//switch i know what output result and to handle multiple values practically not possible mostly
switch (alertType) {
    case "confirm":alert.accept()
        break;

    case "prompt":alert.accept("Bhuvanesh")
        break;

    default:
        alert.dismiss()
        break;
}

})

//simple
await page.locator(`//h5[text()=" Alert (Simple Dialog)"]/following-sibling::button`).click()
await page.waitForTimeout(2000)
//confirm
await page.locator(`//h5[text()=" Alert (Confirm Dialog)"]/following-sibling::button`).click()
await page.waitForTimeout(2000)
//prompt
await page.locator(`//h5[text()=" Alert (Prompt Dialog)"]/following-sibling::button`).click()
await page.waitForTimeout(2000)
//to read inner text in dialog box 

let innertextpromt = await page.locator('#confirm_result').innerText()
console.log(innertextpromt);
})