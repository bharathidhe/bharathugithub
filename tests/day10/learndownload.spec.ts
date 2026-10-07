import test from "@playwright/test";
import path from 'path'
import fs from 'fs'

test("learn download function",async ({page})=>{

await page.goto("https://leafground.com/file.xhtml")

// 1. wait for page registry and 2. trigger event 

const [downloadfileevent] = await Promise.all([page.waitForEvent("download"),page.locator(`//span[text()="Download"]`).click()])
const filepath = path.join(__dirname,downloadfileevent.suggestedFilename())
console.log(filepath)
await downloadfileevent.saveAs(filepath)
})