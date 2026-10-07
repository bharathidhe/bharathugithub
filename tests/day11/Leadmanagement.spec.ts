import test from "@playwright/test"
//test grouping using describe

test.describe.serial("lead managemnet",{
  //tag: '@regression',
}, () => {

test.skip ("maintain test", async({page})=>{  
console.log("maintained successfully")
})

test.fail("create test", async({page})=>{  
console.log("created successfully")
throw new Error("Failure due to assertion");
})


test.fixme ("Duplicate test", async({page})=>{  
console.log("Duplicated successfully")
})

//test ("edit test",{
// annotation: {
// type: 'req',
// description: 'User story id - 23180',
// },
// }, async({page})=>{  
//    await test.step("Lead O Lead is edited", async () => {
// console.log("Edited successfully")
//    })
// })
})
