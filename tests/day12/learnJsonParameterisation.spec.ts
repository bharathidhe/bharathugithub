import test from "@playwright/test"
import credData from "../../data/LF_login.json"
//import {parse} from "csv-parse/sync"
import fs from "fs"

//parse---->
//1. argument 1 - it you provide a csv filepath it will parse into object 
//2. argument 2 - customising the parsed object 

//let records:any[] = parse(fs.readFileSync("./data/Lf_lead.csv"),{columns:true,skip_empty_lines:true})

test.describe(`using test data run one by one`,async()=>{
for(let credential of credData){
//for(let dataset of records)
//test(`Learn parameterisation of csv files ${credential.role}-${dataset.dataSetNo}`,async({page})=>{
test(`Learn parameterisation of csv files ${credential.role}`,async({page})=>{


await page.goto("https://leaftaps.com/opentaps/control/login")
        const usernameField = page.getByRole(`textbox`, { name: "Username" })
        await usernameField.fill(credential.username)
        await page.getByLabel(`Password`).fill(credential.password)
        await page.getByRole(`button`).click()
        const welcomeMessage = await page.getByRole("heading").innerText()
        console.log(welcomeMessage)
        await page.getByRole("link", { name: "CRM/SFA" }).click()
        await page.locator(`//a[text()="Create Lead"]`).click()
        // await page.locator(`#createLeadForm_companyName`).fill(dataset.companyName as string)
        // await page.locator(`#createLeadForm_firstName`).fill(dataset.firstname as string)
        // await page.locator(`#createLeadForm_lastName`).fill(dataset.lastname as string)

        await page.locator(`#createLeadForm_companyName`).fill(credential.companyName as string)
        await page.locator(`#createLeadForm_firstName`).fill(credential.firstname as string)
        await page.locator(`#createLeadForm_lastName`).fill(credential.lastname as string)

})
}
    })

    //Lf_lead.csv