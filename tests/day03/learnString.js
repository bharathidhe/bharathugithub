//literal way of assigning string
let companyname="Testleaf"
console.log(companyname)
console.log(typeof companyname)

//instatnsitate object 
let objcompanyname =new String("Testleaf")
console.log(typeof objcompanyname)

//1.check object and string differences
if (companyname===objcompanyname.toString()) {
    console.log("both values are same")
}
    else{
    console.log("both values are not same")
}
//inclues
if (companyname.includes(objcompanyname)) {
console.log("both values are same")
}else
{
    console.log("both values are not same")
}
console.log(companyname.length)
console.log(companyname.indexOf("l"))

//removed white spaces and converted into lower case
let normalized =companyname.trim().toLowerCase()
console.log(normalized)
console.log(normalized.charAt(2))
console.log(normalized.slice(3))
console.log(normalized.slice(-3))
//extract value from 2 ------exceludes boundary value and print before that ---substring wont accept negative
console.log(normalized.substring(2))
console.log(normalized.substring(-2))
//starts with and ends with

 if (companyname.startsWith("L")){
    console.log(true)
 }else
 {
    console.log(false)
 }

 //splits - without space 
 let statement ="testleaf has good rating"
 let splitstatement= statement.split('')
  console.log(splitstatement)

  //split - with space
   let statement1= statement.split(" ")
      console.log(statement1)

    //replace rating as Marks
   statement1.splice(3,1,"Marks")
 console.log(statement1)

   //join ---Merged all into single string
 let splitcontainer = statement1.join(' ')
  console.log(splitcontainer)

  //replace ----now in above step it is converted into string so we can easily use replace 
  console.log(splitcontainer.replace("Marks","MarKKK"));

