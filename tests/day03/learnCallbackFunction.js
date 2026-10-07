//5. callback function - passing one function argument to another function is called as callback function
//Callback gives flexibility to decide what function should run next.
// previously every function is call inside if any change all should be edited 

function recommendedmovies(){
console.log("recommended movies")
}

function watchhistory(){
    console.log("watch history of user")
}

function airecommendation(){
    console.log("recommendation based on their intrest")
}
                     //param1, param2
function profilelogin(history, suggestion){
    console.log("User logged in successfully")
    history()
    suggestion()
}
profilelogin(watchhistory, airecommendation)//callback function
            //argument1, argument2

//6.async function

 async function getText(){
return "playwright"
 }
 console.log(getText());

//whenever you write async function it will return you promise by default 
//when i call async i want to make sure the task is completed or not so i use await
//output is - Promise { 'playwright' }
//promise - 1.pending   2. fullfilled   3. rejected


//to get the correct output 

async function resolver(){
   const text =await getText()
   console.log(text)
}
resolver()
