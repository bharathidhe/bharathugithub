import test from "@playwright/test"
import dotenv from'dotenv';
const filename = process.env.Terminalenvvariable
const result = dotenv.config({path :'./data/PROD_LF.env'})
if(result.error)
{
    console.log("env file could not be loaded", result.error)
}else
{
    console.log("env file loaded successfully")
}

console.log(process.env.BASEURL,process.env.USERID,process.env.PASSWORD);

test("learn Env parameterization",async({page})=>{

    await page.goto(process.env.BASEURL as string)
        const usernameField = page.getByRole(`textbox`, { name: "Username" })
        await usernameField.fill(process.env.USERID as string)
        await page.getByLabel(`Password`).fill(process.env.PASSWORD as string)
        await page.getByRole(`button`).click()
        const welcomeMessage = await page.getByRole("heading").innerText()
        console.log(welcomeMessage)
        await page.getByRole("link", { name: "CRM/SFA" }).click()
})

// BASEURL = https://leaftaps.com/opentaps/control/login
// USERID = democsr2
// PASSWORD = crmsfa