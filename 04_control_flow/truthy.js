//  



// falsy values
 // false , 0, -0, BigInt 0n , "", null , undefined , NaN

 // true values
 // true , "0" , [], 1 , "false" , " ",{}, function (){}
 
 const userEmail = ["pr@gmail.com"]
 
 if(userEmail.length === 0){
    console.log("Array is Empty");
    
 }

 const emptyObj = {}

 if(Object.keys(emptyObj).length === 0){
 console.log("Obj empty");
 

 }

 // Nullish coalescing Operator (??) : null udefined
// he nullish coalescing operator is a logical operator that returns the right-hand side operand if the left-hand side operand is null or undefined.
 let val1;
//  val1 = 5 ?? 10
//  console.log(val1); // 5

//  val1 = null ?? 20 // give 20
//  val1 = undefined ?? 30 // 30  it is only for null and undefined

 val1 = null ?? 30 ?? 20 // get irst value
 console.log(val1);

 // ternary operator

 const iceTeaPrice = 100
 iceTeaPrice >= 80 ? console.log("greater than 80"):console.log("less than 80");
 
 
 

 