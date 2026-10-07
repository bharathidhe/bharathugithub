import { test, expect } from '@playwright/test';
test("learn Dialogue box", async ({ page }) => {

await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");
 const innerFrame = page.frameLocator('#iframeResult');

   // Handle confirmation box
    page.once('dialog', async dialog => {
        await dialog.accept();
    });
 await innerFrame.locator('//button[text()="Try it"]').click();
//locate text 

const text = await innerFrame.locator('#demo').innerText();
console.log(text);
expect(text).toBe("You pressed OK!");


});