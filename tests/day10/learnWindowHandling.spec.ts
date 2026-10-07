import test from "@playwright/test"
test("handling parent and child windows",async({page, context})=>{
page.goto("https://leafground.com/window.xhtml")
//wait for event registering 
const pageregister = context.waitForEvent('page')
await page.getByRole("button",{name:"Open",exact: true}).click()
const childpage = await pageregister
const chilpageTitle = childpage.getByTitle
console.log(chilpageTitle)
await childpage.getByRole("textbox",{name:"E-mail Address"}).fill("bharathidhe@gmail.com")
})