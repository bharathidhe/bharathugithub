const { log } = require("node:console");

function checkAnagram(string1, string2) {
  // Convert to lowercase 
  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();

//remove spaces 
  string1 = string1.replaceAll(" ", "");
  string2 = string2.replaceAll(" ", "");

  // If lengths are different, they cannot be anagrams

 
  if (string1.length !== string2.length) {
    return false;
  }

//converting string to array
let array1 = string1.split("")
console.log(array1)
let array2 = string2.split("")

//to rearrange alaphabts

array1.sort()
array2.sort()

//to convert to string 
string1=array1.join("")
string2=array2.join("")
if(string1===string2)
{
    console.log("its annagram")
    
  }
  else{
console.log("its not annagram")

  }
}
//check anagram 
checkAnagram("listen", "silent")
