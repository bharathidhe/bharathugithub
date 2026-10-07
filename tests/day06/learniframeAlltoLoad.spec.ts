
import test from "@playwright/test";

test("Learn All frames to load",async({page})=>{
await page.goto("https://leafground.com/frame.xhtml")
/*const frames= page.frames()
for (let i=0; i<frames.length; i++){
console.log(frames[i].url())
console.log(frames[i].name())
}
*/
//Approach 1 - // https://leafground.com/default.xhtml

//await page.frame({url:"https://leafground.com/default.xhtml"})?.getByRole("button").click()

//the main approach - frame locator  - suited for nested if frames - src ,id 

const allframelocator = page.frameLocator(`//iframe[@src="page.xhtml"]`).frameLocator(`#frame2`).getByRole("button")
await allframelocator.click()
const meow = await allframelocator.innerText()
console.log(meow)
})