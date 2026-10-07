//primitive data type
//string-[a-z,A-Z,0-9, ^#^%#%]
//syntax -  Variabledeclaration identifiername 

//1. string 
//declaration
var firstname 

//instialisation ---use assignment operator to initialsie
var firstName = `Bhuvanesh`
console.log(firstName)

//2.number 
var empid = 262662
console.log(empid);
//3. Boolean 
var isinsured = true
console.log(isinsured)
//4. undefined --implicitly mentioned still value is not assigned
var landlinenum 
console.log(landlinenum)

//5.null - explicitly i am mention i need some space like 000
var vehiclenumber = null
console.log(vehiclenumber)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
//type of - called as unary operator
console.log(typeof empid,typeof isinsured, typeof landlinenum )