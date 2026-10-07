import test, {expect} from "@playwright/test";

test.describe.serial("global declaration",async()=>{
let Snow_AccessToken : any
let sys_id3: any
let Token_creation :any


test("learn api token creation", async({request})=>{
   let response = await request.post("https://dev433799.service-now.com/oauth_token.do",{

headers:{

    "Content-Type" : "application/x-www-form-urlencoded",
    "Accept" : "*/*"
},
form:{
"client_id" : "c0e3305b4e264a98bcfd60f75eadf7d5",
"client_secret" : "}W5^^MHlCJ7C[+J,0&[YFO[^K*35S$k)",
"username" : "admin",
"password" : "lX0llZtG=L9*",
"grant_type" : "password"
}

})
let responsebody = await response.json()
Token_creation = responsebody.access_token
expect(response.status()).toBe(200)
console.log(Token_creation,response.status())

})

test("learn actual post",async({request})=>{
    const response = await request.post("https://dev433799.service-now.com/api/now/table/incident",{
    headers:{
        "Accept":"*/*",
        "Content-Type":"application/json",
        "Authorization" : `Bearer ${Token_creation}`
    },
    data:
    {
        "description":"AAA",
        "short_description":"BBB"

    }
      })
     let responsebody = await response.json()
     sys_id3 = responsebody.sys_id
     expect(response.status()).toBe(201)
    console.log(sys_id3, response.status())
      
})

})

test("learn actual put", async ({ request }) => {

    const response = await request.put(
        `https://dev433799.service-now.com/api/now/table/incident/${sys_id3}`,
        {
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${Token_creation}`
            },
            
            data: {
                "description": "AAA Updated",
                "short_description": "BBB Updated"
            }
        }
    )

    let responsebody = await response.json()

    expect(response.status()).toBe(200)

    console.log(responsebody)
    console.log(response.status())
})