//function
//parameterisation
//with single arguments 
function greet(username){
console.log(`Hi ${username} welcome to testleaf`)
}
greet(`Bhuvanesh`)


//with two arguments 
function addnum(a,b){
return(a+b)
}
console.log(addnum(20,40))


//with no arguments 
function greeter(){
}
console.log(`Hi welcome to testleaf`)

//2. Function expression
//possible to have function without name ---without name it is called as anonymous function
//ananymous function is assigned to container so it is called as function expression
//function expression
let addnumber =function (a,b){
               return (a+b)
               }
               console.log(addnumber(20,20))

//3. Fat Arrow 
//let add=(a,b)=>{console.log(a+b)}
//add(10,10)


//make its imple
let add1=(a,b)=>(a+b)
console.log(add1(100,100));

//4.IIFE - immediately invoked function expression
//explict calling or caller id is not needed
(function(username){
    console.log(`the username is ${username}`)
}) ("Bhuvi")

//5. callback functions
