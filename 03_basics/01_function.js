// decalring function

function sayMyName(){
    console.log("Pravin");
    console.log("Pravin");
    console.log("Pravin");
    console.log("Pravin");
    console.log("Pravin");
    
}

// sayMyName()

function addTwoNumbers(num1, num2){ // parameters
   console.log(num1 + num2)
}

function addTwoNumbers(num1, num2){ // parameters
    // let res = num1 + num2
    // return res;
    return num1 + num2
}
// in function if we return keyword then we can store funtion in variable 
const result = addTwoNumbers(2,4) // argms
// console.log(result); // give undefined

// console.log(result);

function loginUserMessage(name = "Ajay"){ // default parameter
    if(!name){
        console.log("Please enter username");
        return ;
    }
    return `${name} just logged in`

}

loginUserMessage("Pravin") // print nothing
// console.log(loginUserMessage("Pravin"));
// console.log(loginUserMessage(""));
console.log(loginUserMessage());
