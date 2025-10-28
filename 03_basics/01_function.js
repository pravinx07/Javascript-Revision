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
// console.log(loginUserMessage());





function calculateCartPrice(val1, val2, ...num1){  // spread operator give array of mutliple values
    return num1
}

// console.log(calculateCartPrice(399, 300, 200, 32,1,441));
// val1 = 399
// val2 = 300
// ...num => rest values

const user = {
    name:"Pravin",
    price:400
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
    
}

// handleObject(user)
handleObject({
      name:"Pravin",
    price:400
})

let arr = [1,2,3,4,5]
function returnSecondArray(getArray){
    return getArray[1]
}

console.log(returnSecondArray(arr));

console.log(returnSecondArray([5,4,3,2,1]));

