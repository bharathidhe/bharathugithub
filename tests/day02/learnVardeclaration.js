
var course = "playwright"

//1. initialisation 
course ="selenium"
course =12666
course = true
console.log(course)

//2.declaration
//global scope tha 
var course = "selenium"
console.log(course)

//3. hoisting - throws undefined ---actually should not allow
console.log(duration)
var duration = "2 seconds"

//4. function scope - Data leakage
function getNationality(){ //global scope
{
    var countryName="India"   //local scope
}
//it escapes block or local scope this is data leakage 
console.log(countryName)
}
getNationality()
