import test from "@playwright/test"

test.describe("group test",{tag: '@Hooks'},async()=>{
test.beforeAll("execute once",async()=>{
 console.log("Executes once per exeution")

})
test.beforeEach("executes before each test",async({page})=>{
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

})

test("each test condition", async({page})=>{
await page.getByText(`Create Lead`,{exact:true}).click()
await page.locator(`//input[@name="companyName"]`).first().fill("meowkutty")  

})


test.afterEach("executes after each time test",async({},testInfo)=>{
console.log("It will executed after the test annotation");
console.log(testInfo.title, testInfo.errors)
if(testInfo.status ==`passed`){
    console.log("test passed")
}
else {
    console.log("Failed")
}
    
})

test.afterAll("executes after all test", async()=>{
console.log("Closed the resource, before the test execution is completed")
})

})