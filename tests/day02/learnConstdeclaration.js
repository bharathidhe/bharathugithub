let course = "playwright"

//1. initialisation ---not possible 

//2.declaration ---not possible 
/*
//3. hoisting - throws undefined error---
console.log(duration)
let duration = "2 seconds"
*/
//4. function scope - Data leakage
function getNationality(){ //global scope
{
    let countryName="India"   //local scope
    console.log (course)
}
//it is block scope
console.log(countryName)
}
getNationality()