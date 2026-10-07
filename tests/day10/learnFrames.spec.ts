import test from "@playwright/test"
test("Learn frames",async({page,context})=>{
await page.goto("https://leafground.com/window.xhtml")
const pagerresister =context.waitForEvent('page')
await page.locator("//span[text()='Open']").click()
const childpageregister =await pagerresister
const getchilpagetitle =await childpageregister.title()
console.log(getchilpagetitle);
childpageregister.locator("//input[@name='email']").fill("Sowbakya@gmail.com")
})


/*
test.only("Learn multiple frames",async({page,context})=>{

await page.goto("https://leafground.com/window.xhtml")
//event registary
const [windows]= await Promise.all([context.waitForEvent('page'),page.locator("//span[text()='Open']").click()])
const allpages = windows.context().pages()
console.log(allpages.length);
for (let childpage)
*/
