let course = "playwright"

//1. initialisation 
course ="selenium"
course =12666
course = true
console.log(course)

//2.declaration ---not possible of variable declaration 
//global scope tha 
let course1 = "selenium"
console.log(course1)

/*3. hoisting - throws undefined ---actually should not allow
console.log(duration)
let duration = "2 seconds"
*/
//4. function scope - Data leakage
function getNationality(){ //global scope
{
    let countryName="India"   //local scope
}
//it escapes block or local scope this is data leakage 
console.log(countryName)
}
getNationality()